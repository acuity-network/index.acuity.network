+++
title = "Quick Start"
description = "One page summary of how to start a new AdiDoks project."
date = 2021-05-01T08:20:00+00:00
updated = 2021-05-01T08:20:00+00:00
draft = false
weight = 20
sort_by = "weight"
template = "docs/page.html"

[extra]
lead = "One page summary of how to index and query a Polkadot, Kusama, Westend or Rococo full node."
toc = true
top = false
+++

## Software requirements

* [Git](https://git-scm.com/)
* [Rust](https://www.rust-lang.org/)

## Run a full node

[Download](https://github.com/paritytech/polkadot-sdk/releases) the latest Polkadot binary.

Acuity Index requires a full node without state pruning. For example, to run a Westend node for indexing:

```bash
chmod +x polkadot
./polkadot \
  --chain westend \
  --state-pruning archive-canonical \
  --rpc-port 9944
```

This requires up to 400 GiB of storage space and may take a few days to fully synchronize with the blockchain. Polkadot and Kusama have significantly higher requirements.

Currently, the indexer requires the node to be fully synchronized. A later version will be able to index the node as it synchronizes. 

## Build Acuity Index Polkadot

```bash
rustup update nightly
git clone --branch v0.2.2 https://github.com/acuity-network/acuity-index-polkadot.git
cd acuity-index-polkadot
cargo build --release
```

## Index the node

```bash
./target/release/acuity-index-polkadot \
  --chain westend \
  --url ws://127.0.0.1:9944 \
  --index-variant \
  --queue-depth 64
```

The output will look something like this:

```
Indexing westend
Database path: /home/jbrown/.local/share/acuity-index/westend/db
Database mode: LowSpace
Database cache capacity: 1024.00 MiB
Connecting to: ws://127.0.0.1:9944
📇 Event variant indexing: enabled
Listening on: 0.0.0.0:8172
📚 Indexing backwards from #20,873,252
📚 Queue depth: 64
Downloading metadata for spec version 1011000
Finished downloading metadata for spec version 1011000
✨ #20,873,253: 10 events, 10 keys
📚 #20,873,030: 1,239 blocks/sec, 24,696 events/sec, 34,997 keys/sec
✨ #20,873,254: 11 events, 11 keys
📚 #20,873,030: 1,014 blocks/sec, 36,035 events/sec, 60,312 keys/sec
📚 #20,873,030: 794 blocks/sec, 43,339 events/sec, 77,034 keys/sec
📚 #20,873,030: 1,429 blocks/sec, 16,106 events/sec, 16,230 keys/sec
📚 #20,873,030: 1,398 blocks/sec, 16,146 events/sec, 16,214 keys/sec
📚 #20,873,030: 761 blocks/sec, 45,728 events/sec, 82,867 keys/sec
✨ #20,873,255: 13 events, 13 keys
📚 #20,873,011: 823 blocks/sec, 41,143 events/sec, 72,932 keys/sec
📚 #20,873,005: 986 blocks/sec, 37,186 events/sec, 63,403 keys/sec
✨ #20,873,256: 13 events, 13 keys
📚 #20,873,005: 1,316 blocks/sec, 22,278 events/sec, 30,350 keys/sec
📚 #20,873,005: 722 blocks/sec, 42,158 events/sec, 76,690 keys/sec
📚 #20,873,005: 1,312 blocks/sec, 15,729 events/sec, 15,869 keys/sec
📚 #20,873,005: 612 blocks/sec, 42,278 events/sec, 76,783 keys/sec
✨ #20,873,257: 11 events, 11 keys
📚 #20,873,005: 1,214 blocks/sec, 15,629 events/sec, 15,680 keys/sec
📚 #20,873,005: 675 blocks/sec, 42,740 events/sec, 77,237 keys/sec
📚 #20,873,005: 1,294 blocks/sec, 17,561 events/sec, 19,948 keys/sec
📚 #20,873,005: 575 blocks/sec, 40,282 events/sec, 73,222 keys/sec
✨ #20,873,258: 11 events, 11 keys
📚 #20,873,005: 1,237 blocks/sec, 17,156 events/sec, 19,196 keys/sec
📚 #20,873,005: 697 blocks/sec, 41,310 events/sec, 73,843 keys/sec
✨ #20,873,259: 13 events, 13 keys
📚 #20,873,005: 1,195 blocks/sec, 15,474 events/sec, 15,636 keys/sec
📚 #20,873,005: 1,246 blocks/sec, 15,529 events/sec, 15,624 keys/sec
✨ #20,873,260: 13 events, 13 keys
📚 #20,873,005: 450 blocks/sec, 51,107 events/sec, 96,584 keys/sec
📚 #20,873,005: 845 blocks/sec, 33,230 events/sec, 56,651 keys/sec
```

## Query the index

Install Acuity Index Substrate CLI:

```bash
cargo install acuity-index-substrate-cli
```

Query events by AccountId:

```bash
ais --url ws://0.0.0.0:8172 get-events account-id --key 5Ft3J6iqSQPWX2S9jERXcMpevt8JDUPWjec5uGierfVGXisE
```

The response gives a list of historical events that reference the AccountId:

```
block number: 20871440, event index: 15
block number: 20871366, event index: 15
block number: 20870697, event index: 412
block number: 20870697, event index: 411
block number: 20870697, event index: 410
block number: 20870697, event index: 409
block number: 20870697, event index: 215
block number: 20870697, event index: 214
block number: 20870697, event index: 213
block number: 20870697, event index: 212
block number: 20870697, event index: 18
block number: 20870697, event index: 17
block number: 20870697, event index: 16
block number: 20870697, event index: 15
…
```

Subscribe to balance transfers:

```bash
ais --url ws://0.0.0.0:8172 subscribe-events variant --pallet-id 4 --variant-id 2
```

Every time a new balance transfer event occurs it is outputted:

```
block number: 20852475, event index: 11
block number: 20852142, event index: 11
block number: 20851866, event index: 11
block number: 20851824, event index: 9
block number: 20851614, event index: 11
block number: 20851590, event index: 12
block number: 20851429, event index: 13
block number: 20851000, event index: 15
block number: 20850870, event index: 9
block number: 20850696, event index: 8
block number: 20850662, event index: 17
block number: 20850661, event index: 15
block number: 20850635, event index: 17
block number: 20850608, event index: 15
block number: 20850579, event index: 15
```

Query the index status:

```bash
ais --url ws://0.0.0.0:8172 status
```

The response gives a list of spans of blocks that have been indexed:

```
start: 20147889, end: 20872995
```

Subscribe to index status:

```bash
ais --url ws://0.0.0.0:8172 subscribe-status
```

Every time a new block is finalized the status is updated:

```
Indexed spans:
start: 19939022, end: 20873058
Indexed spans:
start: 19935440, end: 20873059
Indexed spans:
start: 19929080, end: 20873060
Indexed spans:
start: 19925753, end: 20873061
Indexed spans:
start: 19922463, end: 20873062
```
