+++
title = "Overview"
description = "Project overview."
date = 2021-05-01T19:30:00+00:00
updated = 2021-05-01T19:30:00+00:00
draft = false
weight = 5
sort_by = "weight"
template = "docs/page.html"

[extra]
lead = ""
toc = true
top = false
+++

Acuity Index is a provable event indexer for Substrate-based blockchains. It is intended to be queried directly by dapps.

## Features

- Config-driven indexing with support for compound keys and multi-keys
- Index specification checkpointing. When a new checkpoint is added re-indexing will occur from that block.
- Hot reload for accepted index-spec changes
- Concurrent backfill and head catch-up
- Asynchronous and multithreaded design for maximum indexing performance
- 63.1k events per second on AMD Ryzen 7 6800HS Creator Edition (16) @ 4.79 GHz
- Finality proofs that can be verified by a light client running in the dapp
- Key subscriptions - notify dapp as soon as the key is included in a block
- Event variant indexing - search for or subscribe to all events of a certain type
- Prometheus / OpenMetrics monitoring
- Full unit and integration testing

## Future Features

- Standardized JSON-RPC 2.0 API

## History

Acuity Index was originally called Hybrid and was funded by two ([1](https://github.com/w3f/Grants-Program/blob/master/applications/hybrid.md), [2](https://github.com/w3f/Grants-Program/blob/master/applications/hybrid2.md)) Web3 Foundation grants and a Kusama Treasury [referendum](https://kusama.polkassembly.io/referenda/534).
