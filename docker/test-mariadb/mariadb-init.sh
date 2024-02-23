#!/bin/bash

service mariadb start 

(echo "source /home/init.sql;"; \
echo "exit";) | mariadb

if [ -n "$MARIADB_ROOT_PASSWORD" ]
then
  (echo "CREATE USER 'root'@'%' identified by '$MARIADB_ROOT_PASSWORD';"; \
  echo "grant all privileges on *.* to 'root'@'%';"; \
  echo "ALTER USER 'root'@'localhost' IDENTIFIED VIA mysql_native_password USING PASSWORD('$MARIADB_ROOT_PASSWORD');"; \
  echo "exit";) | mariadb 
else
  echo "MARIADB_ROOT_PASSWORD 환경변수가 없으므로 수행되지 않음." 
fi

