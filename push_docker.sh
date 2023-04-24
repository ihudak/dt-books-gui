#!/bin/bash
ng build
docker image build --platform linux/amd64 -t ivangudak096/dt-bookstore-webapp:latest .
docker push ivangudak096/dt-bookstore-webapp:latest

#docker image build --platform linux/arm64 -t ivangudak096/dt-bookstore-webapp:arm64 .
#docker push ivangudak096/dt-bookstore-webapp:arm64
