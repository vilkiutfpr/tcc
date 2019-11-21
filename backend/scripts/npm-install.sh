#!/bin/bash
curl --silent --location https://rpm.nodesource.com/setup_10.x | sudo bash -
sudo yum install nodejs npm --skip-broken -y
npm install -g forever
cd /home/ec2-user/cbmsc
npm install