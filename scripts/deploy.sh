#!/usr/bin/env bash

bun run build
rsync -avhP --stats --del build/ index.acuity.network:index.acuity.network
