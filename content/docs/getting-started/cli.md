+++
title = "CLI Reference"
description = ""
date = 2021-05-01T19:30:00+00:00
updated = 2021-05-01T19:30:00+00:00
draft = false
weight = 80
sort_by = "weight"
template = "docs/page.html"

[extra]
lead = ""
toc = true
top = false
+++

## Main Command

```bash
acuity-index <COMMAND>
```

## Commands

| Command | Description |
|---|---|
| `run &lt;INDEX_SPEC&gt; [OPTIONS]` | Run the indexer for an index specification |
| `purge-index &lt;INDEX_SPEC&gt; [OPTIONS]` | Delete the index database for an index spec |
| `generate-index-spec &lt;INDEX_SPEC&gt; --url &lt;URL&gt; [--force|-f]` | Inspect live metadata and write a starter index specification |

## Run Options

| Option | Default | Description |
|---|---|---|
| `--options-config &lt;PATH&gt;` | none | Path to runtime options TOML |
| `-d, --db-path &lt;PATH&gt;` | `~/.local/share/acuity-index/<spec-name>/db` | Database directory |
| `--db-mode &lt;MODE&gt;` | `low-space` | `low-space` or `high-throughput` |
| `--db-cache-capacity &lt;SIZE&gt;` | `1024.00 MiB` | Maximum `sled` page cache |
| `-u, --url &lt;URL&gt;` | index spec default | Substrate node WebSocket URL |
| `--queue-depth &lt;N&gt;` | `1` | Concurrent block requests |
| `-f, --finalized` | `false` | Index finalized blocks only |
| `-p, --port &lt;PORT&gt;` | `8172` | Public WebSocket API port |
| `--metrics-port &lt;PORT&gt;` | disabled | Optional OpenMetrics HTTP port |
| `-v / -q` | none | Increase or decrease log verbosity |

`run` requires a positional `&lt;INDEX_SPEC&gt;` before any options.

Running with `--finalized` also enables finalized proof responses for
`GetEvents` requests that set `includeProofs: true`.
