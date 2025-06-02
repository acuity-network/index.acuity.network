+++
title = "Features"
description = "Answers to frequently asked questions."
date = 2021-05-01T19:30:00+00:00
updated = 2021-05-01T19:30:00+00:00
draft = false
weight = 20
sort_by = "weight"
template = "docs/page.html"

[extra]
lead = ""
toc = true
top = false
+++

#### Built-in support for Substrate's pallets

Acuity has built-in indexing macros for the following Substrate pallets: System, Preimage, Indices, Balances, Transaction Payment, Staking, Session, Democracy, Collective, Elections Phragmen, Treasury, Vesting, Identity, Proxy, Multisig, Fast Unstake, Election Provider Multi-phase, Tips, Bounties, Child Bounties, Bags List, Nomination Pools.

Acuity currently supports indexing of the following event parameters: `AccountId`, `AccountIndex`, `AuctionIndex`, `BountyIndex`, `CandidateHash`, `EraIndex`, `MessageId`, `ParaId`, `PoolId`, `PreimageHash`, `ProposalHash`, `RefIndex`, `RegistrarIndex`, `SessionIndex`, `TipHash`.


#### Easy to add chain support

Acuity Index Substrate is the Rust library that does the heavy lifting. Making an indexer for a new chain is simply a matter of writing some boilerplate code to declare your pallets. To add support for custom pallets, index tables can be declared and index macros can be written.


#### Event variant indexing

Optionally, an index node can index all events by variant. For example, it would then be possible to query for all balance transfer events. This additional index greatly increases storage requirements of the index node because every event gets an additional row written to the database.


#### Provable results

Acuity Index indexes events. A light client can be used to prove that the results are correct. The same query can be sent to multiple index nodes to ensure that no results are omitted. 


#### Written in Rust 🦀

Acuity Index Substrate uses Rust, [subxt](https://github.com/paritytech/subxt), and [sled](http://sled.rs/) database for blazing performance.

#### Parallel indexing

Many blocks can be indexed in parallel. This greatly increases indexing throughput as the index node does not have to wait for each block to be retrieved in series. The Queue Depth parameter controls how big the index queue is. Indexing has been observed at over 1,500 blocks per second. 

Populate event data in results

High performance rust indexer easily built for each Substrate chain.

The book has feature comparisons with other Substrate indexers.


#### Multithreaded querying

Each connection queries the database from a separate thread. Queries with millions of results can be returned in less than a second.


#### Subscriptions

Instead of querying historic blocks, clients can subscribe to queries. As soon as an event matching the criteria is in a finalized block the client will be notified.


#### CLI tool

[Acuity Index Substrate CLI](https://github.com/acuity-network/acuity-index-substrate-cli) enables Acuity Index nodes to be queried from the command line.
