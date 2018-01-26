echo "          ==>   Buil Aplicação"
ng build
echo "          ==>   Remover imagem"
docker rmi demo-nginx
echo "          ==>   Criar imagem"
docker build  -t demo-nginx .
echo "          ==>   Rodar container"
 docker run -d -p 192.168.99.100:8888:80 demo-nginx