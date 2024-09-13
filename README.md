npx create-next-app@latest .

npm install -D husky lint-staged

npm install -D prettier eslint-config-prettier

"husky": {
"hooks": {
"pre-commit": "lint-stated",
"pre-push": "npm run lint && npm run format"
}
},

