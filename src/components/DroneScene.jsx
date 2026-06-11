import { useRef, useEffect, useState } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { useGLTF, useAnimations } from '@react-three/drei'
import * as THREE from 'three'

/* ─────────────────────────────────────────────
   Phase constants (seconds)
────────────────────────────────────────────── */
const T_ENTER_END   = 2.2   // drone finishes entering
const T_BEAM_START  = 2.6   // beam + card appear
const T_CARD_IN     = 3.8   // card fully visible
const T_BEAM_FADE   = 5.8   // beam fades
const T_FLY_OUT     = 6.2   // drone starts leaving
const T_DONE        = 7.8   // animation fully done

/* ─────────────────────────────────────────────
   Drone 3-D model
────────────────────────────────────────────── */
function DroneModel({ phase, elapsed }) {
  const group = useRef()
  const { scene, animations } = useGLTF('/assets/drone.glb')
  const { actions, names } = useAnimations(animations, group)

  // play first animation clip on load
  useEffect(() => {
    if (names.length) {
      const clip = actions[names[0]]
      if (clip) { clip.reset().play() }
    }
  }, [actions, names])

  useFrame(() => {
    if (!group.current) return
    const t = elapsed

    if (t < T_ENTER_END) {
      // Enter from top-right, arc down to hover position
      const p = Math.min(t / T_ENTER_END, 1)
      const ease = 1 - Math.pow(1 - p, 3)
      group.current.position.x = THREE.MathUtils.lerp(5, 1.8, ease)
      group.current.position.y = THREE.MathUtils.lerp(5, 0.8, ease)
      group.current.position.z = 0
      group.current.rotation.z = THREE.MathUtils.lerp(-0.4, 0, ease)
    } else if (t < T_FLY_OUT) {
      // Hover — gentle float
      const hover = Math.sin(t * 2.5) * 0.06
      group.current.position.x = 1.8
      group.current.position.y = 0.8 + hover
      group.current.position.z = 0
      group.current.rotation.z = Math.sin(t * 1.5) * 0.04
    } else {
      // Fly off top-right
      const p = Math.min((t - T_FLY_OUT) / (T_DONE - T_FLY_OUT), 1)
      const ease = p * p
      group.current.position.x = THREE.MathUtils.lerp(1.8, 8, ease)
      group.current.position.y = THREE.MathUtils.lerp(0.8, 6, ease)
      group.current.rotation.z = THREE.MathUtils.lerp(0, 0.5, ease)
    }
  })

  return (
    <group ref={group} scale={0.38}>
      <primitive object={scene} />
    </group>
  )
}

/* ─────────────────────────────────────────────
   Beam — flat cone of light below the drone
────────────────────────────────────────────── */
function LightBeam({ opacity }) {
  const mesh = useRef()
  useFrame(({ clock }) => {
    if (mesh.current) {
      mesh.current.material.opacity = opacity * (0.85 + Math.sin(clock.getElapsedTime() * 4) * 0.15)
    }
  })
  return (
    <mesh ref={mesh} position={[1.8, -0.5, -0.1]} rotation={[0, 0, 0]}>
      <coneGeometry args={[1.1, 2.2, 32, 1, true]} />
      <meshBasicMaterial
        color="#fff9c4"
        transparent
        opacity={opacity}
        side={THREE.DoubleSide}
        depthWrite={false}
      />
    </mesh>
  )
}

/* ─────────────────────────────────────────────
   Scene clock — drives elapsed
────────────────────────────────────────────── */
function SceneClock({ onTick }) {
  useFrame((_, delta) => onTick(delta))
  return null
}

/* ─────────────────────────────────────────────
   Main DroneScene component
────────────────────────────────────────────── */
export default function DroneScene({ onCardVisible, onDone }) {
  const [elapsed, setElapsed] = useState(0)
  const elapsedRef = useRef(0)

  const [beamOpacity, setBeamOpacity] = useState(0)
  const [cardVisible, setCardVisible] = useState(false)
  const [done, setDone] = useState(false)

  const tick = (delta) => {
    elapsedRef.current += delta
    const t = elapsedRef.current
    setElapsed(t)

    // Beam fade in / out
    if (t >= T_BEAM_START && t < T_BEAM_FADE) {
      const fade = Math.min((t - T_BEAM_START) / 0.5, 1)
      setBeamOpacity(fade * 0.55)
    } else if (t >= T_BEAM_FADE) {
      const fade = 1 - Math.min((t - T_BEAM_FADE) / 0.5, 1)
      setBeamOpacity(fade * 0.55)
    }

    // Card appear
    if (!cardVisible && t >= T_BEAM_START) {
      setCardVisible(true)
      onCardVisible && onCardVisible()
    }

    // Done
    if (!done && t >= T_DONE) {
      setDone(true)
      onDone && onDone()
    }
  }

  return (
    <Canvas
      camera={{ position: [0, 0, 6], fov: 45 }}
      style={{ width: '100%', height: '100%' }}
      gl={{ alpha: true, antialias: true }}
    >
      <SceneClock onTick={tick} />
      <ambientLight intensity={1.2} />
      <directionalLight position={[3, 5, 3]} intensity={2} color="#ffffff" />
      <pointLight position={[1.8, -0.3, 1]} intensity={1.5} color="#ffe600" distance={4} />

      {!done && <DroneModel phase="fly" elapsed={elapsed} />}
      {beamOpacity > 0.01 && <LightBeam opacity={beamOpacity} />}
    </Canvas>
  )
}
