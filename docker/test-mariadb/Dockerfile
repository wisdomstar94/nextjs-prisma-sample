# https://docs.docker.com/engine/reference/builder/

# 베이스가 되는 도커 이미지 지정
# https://github.com/wisdomstar94/docker_sample/blob/main/dockerfiles/mariadb-11-2/Dockerfile
FROM --platform=linux/arm64 wisdomstar94/mariadb-11-2:0.0.1

# 파일 포함시키기
ADD --chmod=755 ./init.sql /home/cli/init.sql
