+++
title = "The Solution"
description = ""
date = 2021-05-01T19:30:00+00:00
updated = 2021-05-01T19:30:00+00:00
draft = false
weight = 10
sort_by = "weight"
template = "docs/page.html"

[extra]
lead = ""
toc = true
top = false
+++

<img src="/acuity-index.svg" style="width: 100%; height: auto;"></img>

One solution is for the user to run their own full node for each chain that is being queried, but this is almost never practical. Running a full node typically requires terabytes of storage & bandwidth and can take weeks to become fully synchronized.

Dapps can query full nodes and use a light client to cryptographically verify the results are correct. In fact, [Ethereum](https://www.youtube.com/watch?v=ZHNrAXf3RDE) and [Substrate](https://www.youtube.com/watch?v=xzC9KJXtidE) are both introducing improvements to their light client technology. This solves the problem of incorrect data.

However, this does not solve all the other problems.

An Acuity Index node runs alongside the Substrate node it is indexing. In its simplest implementation it maintains an index of block number and event index for each key, for example account id.

## High performance

Acuity Index uses the [Sled](http://sled.rs/) key value database to create an event index that can handle very large query throughput. It is considerably more efficient than EVM indexed topics.

Clients can request to either receive just the block number and event index of each event, or also receive the event data.

Event data can then be verified as correct using the underlying light client of the chain.

For maximum performance, the index can store the event data. Alternatively, it can retrieve this from the full node as required to save space.

## Well-defined query accounting

An index node can track cumulative query weight, either by authenticated account, or by virtual account (ip address).

## Standardized payment API

create fee market for indexes

## Privacy

If the user is accessing an index node for free, they will need to make a direct connection to the index so it can monitor and limit use based on IP address. This is not good for privacy.

If the user is paying for their queries, then they can also obfuscate their identity by querying via tor or mixnet and paying via anonymous means.

## Extensible

full-text, geospatial, etc

## Lower on-chain transaction fees


--

Optionally it can index event variants. For example, the index could return a list of all balance transfers. This makes the index much larger.

This entails the use of an index. Much like a full node, an event index consumes significant resources and takes a lot of time to synchronize. A dapp cannot maintain its own index. It needs to query an index run by someone else and verify the results using a light client.

This is the purpose of Acuity Index. An event indexer for all chain types that can be verified cryptographically.

When a Hybrid index is queried for a specific key it will return the block number and event index of events that contain the key.

Additionally, it can return the event contents and enough information for the events to be verified by a light client. 

Acuity Index is a blockchain event indexer framework written in Rust. Currently, it can be used to build indexers for Substrate blockchains (Polkadot). In the future it will also support other types of chains such as Ethereum and Bitcoin.

Typically, when writing on-chain code (for example a smart contract or a Substrate pallet) data should only be stored in chain state when it might need to be read during execution of a subsequent transaction. This ensures that transaction fees are kept to an absolute minimum. Events should be emitted containing the data that only needs to be accessed off-chain. This data can then be indexed, either directly on the user's device or via a cloud service.
