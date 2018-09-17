#!/usr/bin/env bash
protoc \
    --go_out=plugins=grpc:./server \
    --go_out=plugins=grpc:./client \
    --plugin=protoc-gen-ts=./app/node_modules/.bin/protoc-gen-ts \
    --ts_out=service=true:./app/src \
    --js_out=import_style=commonjs,binary:./app/src \
    ./proto/portfolio.proto
    
