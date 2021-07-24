# docker&reac&tnodejs&mongodb



## RUN APP

```bash
docker run -d --name ชื่อContainer -p 3000:3000 -e DATABASE_USER=admin -e DATABASE_PASSWORD=1111 -e DATABASE_HOST=mongo --network users ชื่อImages 
```



## Build Image Production

docker run -d --name reactapp --network users -p 3000:3000 myreact:1.0
```bash
docker run -d --name reactapp --network users -p 3000:3000 myreact:1.0
```

## RUN Production

```bash
docker run -p 3005:80 --network users -d --name ชื่อContainer ชื่อImages 
```
