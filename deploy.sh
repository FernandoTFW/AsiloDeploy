set -e

npm run build

cd dist

git init
git checkout -b master
git add -A
git commit -m 'deploy'

#git push -f git@github.com:FernandoTFW/AsiloDeploy.git master:gh-pages