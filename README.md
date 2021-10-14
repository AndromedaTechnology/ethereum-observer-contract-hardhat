<h1 align="center">Ethereum Observer - Contract - Hardhat</h1>
<p align="center">
  <a href="https://ethereum-observer-api.andromeda.technology"><img src="./storage/static/hero.jpg"  alt="Ethereum Observer - Contract - Hardhat" /></a>
  <br />
  <br />
  <a href="https://ethereum-observer-api.andromeda.technology">Simple contract to store Ethereum Observer Summary</a>
  <br />
  <a href="https://ethereum-observer-api.andromeda.technology">https://ethereum-observer-api.andromeda.technology</a>
</p>

Simple contract to store Ethereum Observer Summary.

# 1. Project

- Contract, written in Solidity,
- Contract tests, TypeScript,
- Deployment script, TypeScript,
- Accounts task, TypeScript.

# 2. Contract

- Method: addSummary(totalGas,totalBlocks) - available only to the contract creator,
- Method: getSummary(day) - available to anyone,
- Has Access control for Write access.

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

# 5. Contract deployment

With a valid `.env` file in place, deploy your contract:

```shell
hardhat run --network ropsten scripts/deploy.ts
```

Then, copy the deployment address and paste it in to replace `DEPLOYED_CONTRACT_ADDRESS` in the verification section (check `5.1.`).

## 5.1. Contract deployment verification - Etherscan

To try out Etherscan verification, you first need to deploy a contract to an Ethereum network that's supported by Etherscan, such as Ropsten (check `5.`).

```shell
npx hardhat verify --network ropsten DEPLOYED_CONTRACT_ADDRESS "Hello, Hardhat!"
```

# 6. Tasks

Try running some of the following tasks:

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

# 7. Performance optimizations

For faster runs of your tests and scripts, consider skipping ts-node's type checking by setting the environment variable `TS_NODE_TRANSPILE_ONLY` to `1` in hardhat's environment. For more details see [the documentation](https://hardhat.org/guides/typescript.html#performance-optimizations).

# 8. Social

Andromeda

- [Medium](https://medium.com/andromeda-technology)
- [Twitter](https://twitter.com/andromeda_node)

# 9. Related

[🚀 FireStarter API - Progressive Startup API Boilerplate](https://github.com/moltouni/firestarter-api)

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

# 10. Contribute

Check [Self-Aware Software Artisan](http://selfawaresoftwareartisan.com) before contributing.

<br/>
<h3 align="center">
  Crafted with ❤️ <br />
  by contributors around the 🌍 World and <a href="https://andromeda.technology/">🌌 Andromeda</a>.
</h3>
