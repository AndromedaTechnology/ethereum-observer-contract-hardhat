<h1 align="center">Ethereum Observer - Smart Contract - Hardhat, TypeScript</h1>
<p align="center">
  <a href="https://ethereum-observer-api.andromeda.technology"><img src="./storage/img/hero.png"  alt="Ethereum Observer - Contract - Hardhat" /></a>
  <br />
  <br />
  <a href="https://ethereum-observer-api.andromeda.technology">Simple contract to store Ethereum Observer Summary</a>
  <br />
  <a href="https://ethereum-observer-api.andromeda.technology">https://ethereum-observer-api.andromeda.technology</a>
</p>

Simple `Ethereum Smart Contract` that stores a `Daily Summary` of **[Ethereum Observer API](https://github.com/AndromedaTechnology/ethereum-observer-api)**.

Use it as a scalable `Smart Contract Development boilerplate` and/or a learning resource.

# 1. Project

- Contract, written in Solidity,
- Contract tests, TypeScript,
- Deployment script, TypeScript,
- Accounts task, TypeScript.

# 2. Contract

- Method: `addSummary(dayId, blocks, gas)`,
  - **available to contract creator only**,
  - reverts the state and returns `WriteAccessForbiden` Error if not run by the contract creator,
  - raises `SummaryAdded` Event otherwise,
- Method: `getSummary(dayId)`
  - available to anyone,
- Method: `getCreator()`
  - returns contract creator address.

# 3. Technology

- [Hardhat](https://hardhat.org/) - Ethereum development environment for professionals,
- [TypeScript](https://www.typescriptlang.org/) - to level-up Hardhat environment robustness while writing tests and scripts (e.g. deployment),
- [Solidity](https://soliditylang.org/) - Smart Contract development language,
- [Ethers.js](https://docs.ethers.io/) - communication with Ethereum (e.g. accounts, deployment, testing, ...),
- [Waffle](https://getwaffle.io/) - contract testing library.

# 4. Configuration (.env file)

1. Duplicate `.env.example` to `.env`.
2. Enter your [Etherscan](https://etherscan.io/) API key (to verify deployment status of your contract),
3. Enter your Ropsten node URL (eg from [Alchemy](https://www.alchemy.com/)) (Hardhat will send transactions to this Ethereum node),
4. Enter the private key of the account which will send the deployment transaction, and of the guest account (used for testing).

## 4.1. Accounts

- Set `PRIVATE_KEY` - creator of the Contract,
- Set `PRIVATE_KEY_GUEST` - used to [test access rights to Contract methods](https://hardhat.org/guides/waffle-testing.html#testing-from-a-different-account).

Note: Private keys can be obtained by creating two (2) accounts in [MetaMask](https://metamask.io/) (e.g. in different browsers).

# 5. Tests

Run `npx hardhat test`.

Contract `NetworkSummary`:

- Sets the proper creator address,
- Forbids write access to non-creator,
- Stores summary for the day and returns it.

# 6. Deployment

With a valid `.env` file in place, to deploy your contract run:

```shell
npx hardhat run --network ropsten scripts/deploy.ts
```

Then, copy the deployment address and paste it in to replace `DEPLOYED_CONTRACT_ADDRESS` in the verification section (check `6.1.`).

## 6.1. Deployment verification - Etherscan

To try out Etherscan verification, you first need to deploy a contract to an Ethereum network that's supported by Etherscan, such as Ropsten (check `6.`).

```shell
npx hardhat verify --network ropsten DEPLOYED_CONTRACT_ADDRESS "Hello, Hardhat!"
```

# 7. Tasks

Previous sections covered most of the commands you should try out, to get up and running quickly and get a sense of what is going on.

If you wish to dive deeper, check out the available tasks:

```shell
npx hardhat accounts # built-in Hardhat network accounts
npx hardhat --network [name] accounts # [name]: e.g. `ropsten`
npx hardhat compile
npx hardhat clean
npx hardhat test
npx hardhat node
npx hardhat help
REPORT_GAS=true npx hardhat test
npx hardhat coverage
npx hardhat run scripts/deploy.ts
TS_NODE_FILES=true npx ts-node scripts/deploy.ts
npx eslint '**/*.{js,ts}'
npx eslint '**/*.{js,ts}' --fix
npx prettier '**/*.{json,sol,md}' --check
npx prettier '**/*.{json,sol,md}' --write
npx solhint 'contracts/**/*.sol'
npx solhint 'contracts/**/*.sol' --fix
```

# 8. Performance

For faster runs of your tests and scripts, consider skipping ts-node's type checking by setting the environment variable `TS_NODE_TRANSPILE_ONLY` to `1` in hardhat's environment.

For more details see [the documentation](https://hardhat.org/guides/typescript.html#performance-optimizations).

# 9. Social

Andromeda

- [Medium](https://medium.com/andromeda-technology)
- [Twitter](https://twitter.com/andromeda_node)

# 10. Rest

Hero image source: [Hardhat.org](https://hardhat.org).

# 11. Related

[🔭 Ethereum Observer API - Simple tracker for Ethereum Network](https://github.com/AndromedaTechnology/ethereum-observer-api)

- Simple block and transaction tracker for Ethereum network,
- TypeScript,
- Koa.js,
- MongoDB,
- Jest,
- Docker.

[🚀 FireStarter API - Progressive Startup API Boilerplate](https://github.com/AndromedaTechnology/firestarter-api)

- Easy to extend, Progressive and Scalable API boilerplate to power your startup,
- TypeScript,
- Koa.js,
- MongoDB,
- Jest,
- Docker.

[🏄 Habitus - Journal, Habit, Emotion tracker](https://github.com/AndromedaTechnology/habitus)

- State-of-the-art tracker for emotions, habits and thoughts,
- Healthiest version of you,
- Gamified,
- Anonymous and open source.
- TypeScript, Koa.js, Vue.js, MongoDB, Jest.

# 12. Contribute

Check [Self-Aware Software Artisan](http://selfawaresoftwareartisan.com) before contributing.

<br/>
<h3 align="center">
  Crafted with ❤️ <br />
  by contributors around the 🌍 World and <a href="https://andromeda.technology/">🌌 Andromeda</a>.
</h3>
