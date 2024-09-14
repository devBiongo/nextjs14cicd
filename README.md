npx create-next-app@latest .

npm install -D husky lint-staged

npm install -D prettier eslint-config-prettier

"husky": {
"hooks": {
"pre-commit": "lint-stated",
"pre-push": "npm run lint && npm run format"
}
},

docker run -d -p 8443:443 -p 8080:80 -p 8022:22 --restart always --name gitlab -v /data/docker/gitlab/etc:/etc/gitlab -v /data/docker/gitlab/log:/var/log/gitlab -v /data/docker/gitlab/data:/var/opt/gitlab --privileged=true gitlab/gitlab-ce
