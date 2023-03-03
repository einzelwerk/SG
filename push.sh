set -e

npm run build
git add ./dist/*
git commit -m 'deploy'
git push origin main
git add .
git commit -m "$1"
git push origin main
