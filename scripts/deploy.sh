#!/usr/bin/env bash

zola build
rsync -avhP --stats --del public/ jbrown@index.acuity.network:index.acuity.network
