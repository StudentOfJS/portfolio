#!/usr/bin/env bash
echo "Installing NPM dependencies with yarn"
(cd app && yarn install) &

echo "Building go server"
(cd server && CGO_ENABLED=0 GOOS=linux go build -a -installsuffix cgo -o main && go build -o server) &

echo "Building frontend application"
(cd app && yarn build) &

echo "Building empty docker container"
docker build -t portfolio-container -f Dockerfile.scratch .