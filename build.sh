#!/usr/bin/env bash
echo "Installing NPM dependencies with yarn"
(cd app && yarn install) &

echo "Building go server"
(cd server && go build -o server) &

echo "Building frontend application"
(cd app && yarn build) &
