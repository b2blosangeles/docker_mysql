# docker_mysql

docker stop mysql_aa && docker rm mysql_aa

docker system prune -f

docker pull mysql/mysql-server:5.7

rm -fr /Users/johnxu/_easydocker_DATA/mysqlDBs/aa

docker run -d \
  -e MYSQL_ROOT_PASSWORD=XXXXXX \
  -v /Users/johnxu/_easydocker_DATA/mysqlDBs/aa:/var/lib/mysql \
  --name mysql_aa \
  mysql

docker exec -it mysql_aa mysql -uroot -p

ALTER USER 'root'@'localhost' IDENTIFIED BY 'NewPassword';
GRANT ALL PRIVILEGES ON *.* to root@'%' IDENTIFIED BY 'root';
