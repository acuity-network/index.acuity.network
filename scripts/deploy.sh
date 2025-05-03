#!/usr/bin/env bash

zola build
rsync -avhP --stats --del public/ index.acuity.social:index.acuity.network
