# Meson Network Docs

**[View the docs →](https://docs.meson.network/)**

![](https://ipfs.io/ipfs/bafybeicuh7obn7sfptru6cisiiunggidugnmgi6uqwzevda2mykwj5lyra/meson-2022.jpg)

## Table of Contents

- [Introduction](#introduction)
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)

## Introduction

[Meson Network](https://meson.network/) is committed to creating an efficient bandwidth marketplace on Web3, using a blockchain protocol model to replace the traditional labor-based sales models, consolidating and monetizing idle bandwidth from long-tail users at a low cost. Meson Network is the foundation of data transmission for decentralized storage, computation, and the emerging Web3 Dapp ecosystem.

## Installation

### Netlify Setup

- Build Command: `vuepress build src`
- Publish directory: `./src/.vuepress/dist`
- Environment: `NODE_VERSION: 14`

### Local Deployment

```
git clone https://github.com/daqnext/meson-docs.git
cd meson-docs
yarn
yarn dev src
```

## Usage

### Example 1: Running a Meson Node

To run a Meson Node, follow these steps:

1. Register on the [Meson Network Dashboard](https://dashboard.meson.network/register).
2. Download and install the Meson Node software.
3. Configure the node with your token and desired settings.
4. Start the node and monitor its status on the dashboard.

For detailed instructions, refer to the [Run Meson Node 101](src/nodes/run-meson-nodes.md) guide.

### Example 2: Using the Meson API

The Meson API allows you to interact with the Meson Network programmatically. Here is an example of how to create a pull zone using the API:

```json
curl -X 'POST' \
  'https://api.meson.network/api/pullzone/create' \
  -H 'accept: application/json' \
  -H 'Authorization: bearer $YOUR_TOKEN' \
  -H 'Content-Type: application/json' \
  -d '{
  "origin": "$YOUR_DOMAIN"
}'
```

For more examples and detailed documentation, refer to the [API Library for Meson Network](src/api.md).

## Contributing

We welcome contributions to the Meson Network project. To get started, follow these steps:

1. Fork the repository on GitHub.
2. Create a new branch for your changes.
3. Make your changes and commit them with descriptive messages.
4. Push your changes to your forked repository.
5. Create a pull request to the main repository.

For more detailed guidelines, refer to the [CONTRIBUTING.md](CONTRIBUTING.md) file.
