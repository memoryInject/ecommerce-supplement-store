#!/bin/bash
docker-compose -f docker-compose.test.backend.yml up --abort-on-container-exit
