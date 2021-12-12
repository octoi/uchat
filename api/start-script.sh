#!/usr/bin/env bash

npx prisma migrate dev --name migration
node app.js