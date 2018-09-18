#!/usr/bin/env bash
echo "Starting Go server"
(cd server && ./server) &

echo "Starting frontend application"
(cd app && serve -s build) &
