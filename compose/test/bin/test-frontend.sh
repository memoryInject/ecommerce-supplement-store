#!/bin/bash
docker-compose -f docker-compose.test.yml exec -it frontend npm run vitest
