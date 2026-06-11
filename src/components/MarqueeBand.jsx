const ITEMS = [
  'HYDERABAD, INDIA', '★',
  'FULL-STACK DEVELOPER', '★',
  'OPEN TO INTERNSHIPS + FULL-TIME', '★',
  'REACT · NODE.JS · PYTHON · AI', '★',
  "LET'S BUILD SOMETHING LOUD", '★',
  'HYDERABAD, INDIA', '★',
  'FULL-STACK DEVELOPER', '★',
  'OPEN TO INTERNSHIPS + FULL-TIME', '★',
  'REACT · NODE.JS · PYTHON · AI', '★',
  "LET'S BUILD SOMETHING LOUD", '★',
]

export default function MarqueeBand() {
  return (
    <div className="marquee-wrapper">
      <div className="marquee-track">
        {ITEMS.map((item, i) => (
          <span key={i} className={item === '★' ? 'marquee-star' : ''}>
            {item}
          </span>
        ))}
      </div>
    </div>
  )
}
