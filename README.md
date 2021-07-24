# dockerfile-build-image
dockerfile-build-image


#RUN APP
docker run -d --name ชื่อContainer -p 3000:3000 -e DATABASE_USER=admin -e DATABASE_PASSWORD=1111 -e DATABASE_HOST=mongo --network users ชื่อImages 