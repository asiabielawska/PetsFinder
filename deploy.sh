#/bin/bash

rm -rf docs
npm run build
mv dist docs
git add docs
git commit -m "Deploy"
git push