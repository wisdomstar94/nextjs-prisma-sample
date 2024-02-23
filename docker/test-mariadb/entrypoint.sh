service mariadb start
/home/onece-exec run \
  --path='/home/mariadb-inited.txt' \
  --onece='sh /home/mariadb-init.sh' \
  --always='sh /home/mariadb-always.sh'
bash
