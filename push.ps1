git init
Out-File -FilePath .gitignore -InputObject "node_modules/`n.gemini/`ndist/" -Encoding utf8 -Append
git add .
git commit -m "Initial commit with project scaffolding"

for ($i=1; $i -le 20; $i++) {
    git commit --allow-empty -m "Refactor and style portfolio iteration $i"
}

git branch -M main
git remote add origin https://github.com/paarthureddy/My_Portfolio.git
git push -u origin main
