#!/usr/bin/env bash
echo "Removing old build from app server"
(cd appServe && rm -rf /build) &

echo "Installing NPM dependencies with yarn"
(cd app && yarn install) &

echo "Building frontend application and copying to app server"
(cd app && yarn build && cp /build ../appServe/) &

echo "Building app server"
(cd appServe && go build -o app-server) &

echo "Building gRPC server"
(cd server && CGO_ENABLED=0 GOOS=linux go build -a -installsuffix cgo -o gRPC-server .) &

echo "Building empty docker container"
docker build -t portfolio-container -f Dockerfile.scratch .