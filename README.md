# grpc-web-portfolio
Creating a portfolio using Redux and gRPC

### Running
To start both the Go backend server and the frontend React application, run the following:
```bash
./start.sh
```

The backend server is running on `http://localhost:8900` while the frontend will by default start on `http://localhost:3000`


### Configure protobuf compiler script
In this example, we're using a `protoc.sh` script to aid compilation
```bash
protoc \
    --go_out=plugins=grpc:./server \
    --plugin=protoc-gen-ts=./app/node_modules/.bin/protoc-gen-ts \
    --ts_out=service=true:./app/src \
    --js_out=import_style=commonjs,binary:./app/src \
    ./proto/portfolio.proto
```
