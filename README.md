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

docker run -d -p 3306:3306 --name mysql --restart=always --privileged=true \
-v /usr/local/mysql/log:/var/log/mysql \
-v /usr/local/mysql/data:/var/lib/mysql \
-v /usr/local/mysql/conf:/etc/mysql \
-v /etc/localtime:/etc/localtime:ro \
-e MYSQL_ROOT_PASSWORD=123456 -d mysql:latest

docker run -d \
 --name mysql-shanghai2024 \
 -p 3306:3306 \
 -e TZ=Asia/Shanghai \
 -e MYSQL_ROOT_PASSWORD=shanghai123 \
 mysql
1
