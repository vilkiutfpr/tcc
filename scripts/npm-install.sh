#!/bin/bash
curl --silent --location https://rpm.nodesource.com/setup_10.x | sudo bash -
sudo yum install nodejs npm --skip-broken -y
npm install -g nodemon
cd /home/ec2-user/cbmsc/backend
npm install