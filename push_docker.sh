#!/bin/bash
ng build
docker image build --platform linux/amd64 -t ihudak/dt-bookstore-webapp:latest .
docker push ihudak/dt-bookstore-webapp:latest

docker image build --platform linux/arm64 -t ihudak/dt-bookstore-webapp:arm64 .
docker push ihudak/dt-bookstore-webapp:arm64
