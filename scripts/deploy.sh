#!/bin/bash
set -e

DEPLOY_REPO="https://github.com/kairinzan-senjuin/kairinzan-senjuin.github.io.git"

echo "→ ビルド中..."
npm run build

echo "→ デプロイ中..."
cd out
git init -b main
git add -A
git commit -m "Deploy $(date '+%Y-%m-%d %H:%M')"
git push --force "$DEPLOY_REPO" main

echo "✓ デプロイ完了"
