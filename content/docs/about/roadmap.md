+++
title = "Roadmap"
description = "Answers to frequently asked questions."
date = 2021-05-01T19:30:00+00:00
updated = 2021-05-01T19:30:00+00:00
draft = false
weight = 30
sort_by = "weight"
template = "docs/page.html"

[extra]
lead = ""
toc = true
top = false
+++

## Substrate

Acuity Index will support all major blockchain technologies. Currently, only Substrate has been implemented. It was funded by 2 grants from the Web3 Foundation.


#### Support more chains

[Acuity Index Polkadot](https://github.com/acuity-network/acuity-index-polkadot) can index the Polkadot chains (Polakdot, Kusama, Westend, Rococo).

Indexers for all Substrate chains need to be written and maintained. The [Acuity Index Substrate](https://github.com/acuity-network/acuity-index-substrate) Rust library does all the heavy lifting.


#### Host indexes

While it can be very useful to run your own full node and Acuity Index node, most people will want to query an index node maintained by someone else. The goal is to create an ecosystem where each chain has many index nodes run by different parties.


#### Register Acuity Index nodes on Acuity blockchain

To aid in discovery of index nodes, they should be registered on the Acuity blockchain.


#### Support indexing removed event types

Substrate index nodes record which spans of blocks have been indexed with which versions of the software. This means when the runtime is updated a new version of the indexer can be released and it will go back and re-index blocks as necessary.

However, sometimes a runtime upgrade will remove or amend an event type. In this case using the latest version of the indexer to index old blocks can result in old event types not being indexed.

To solve this problem the index needs to have the event schema for all runtime versions.


#### Index head blocks using queue

Substrate Index indexes blocks concurrently using a queue system. This greatly improves indexing performance. However, head blocks are indexed one at a time. This is fine when indexing a fully synchronized node, but for a node that is catching up the indexer cannot index head blocks fast enough to keep up with head. Indexing head blocks using the queue will fix this problem. 


#### API support in more languages

Acuity Substrate Index nodes are queried via JSON-RPC over WebSocket. The [Acuity Index Substrate Rust API](https://github.com/acuity-network/acuity-index-substrate-api-rs) library makes it easier. This needs to be implemented for other major languages.


## Other chain types


Write EVM indexer.

