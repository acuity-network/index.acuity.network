#!/usr/bin/env bash

zola build
rsync -avhP --stats --del public/ index.acuity.network:index.acuity.network
