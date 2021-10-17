import { expect } from "chai";
import { ethers } from "hardhat";
import { BigNumber } from "@ethersproject/bignumber";

describe("NetworkSummary", function () {
  it("Sets the proper creator address", async function () {
    const [owner] = await ethers.getSigners();

    const NetworkSummary = await ethers.getContractFactory("NetworkSummary");
    const networkSummary = await NetworkSummary.deploy();
    await networkSummary.deployed();

    expect(await networkSummary.getCreator()).to.equal(owner.address);
  });
  it("Forbids write access to non-creator", async function () {
    const [, guest] = await ethers.getSigners();

    const NetworkSummary = await ethers.getContractFactory("NetworkSummary");
    const networkSummary = await NetworkSummary.deploy();
    await networkSummary.deployed();

    // Input
    const dayId = BigNumber.from("27");
    const blocks = BigNumber.from("349");
    const gas = BigNumber.from("849");

    // Execute method with non-creator user
    await expect(
      networkSummary.connect(guest).addSummary(dayId, blocks, gas)
    ).to.be.revertedWith('WriteAccessForbiden("' + guest.address + '")');
  });
  it("Stores summary for the day and returns it", async function () {
    const NetworkSummary = await ethers.getContractFactory("NetworkSummary");
    const networkSummary = await NetworkSummary.deploy();
    await networkSummary.deployed();

    // Input
    const dayId = BigNumber.from("27");
    const blocks = BigNumber.from("349");
    const gas = BigNumber.from("849");

    const addSummaryTx = await networkSummary.addSummary(dayId, blocks, gas);
    // wait until the transaction is mined
    await addSummaryTx.wait();

    const getSummaryTx = await networkSummary.getSummary(dayId);

    expect(getSummaryTx[0]).to.equal(blocks);
    expect(getSummaryTx[1]).to.equal(gas);
  });
  it("Stores summary with BigNumber gas", async function () {
    const NetworkSummary = await ethers.getContractFactory("NetworkSummary");
    const networkSummary = await NetworkSummary.deploy();
    await networkSummary.deployed();

    // Input
    const dayId = BigNumber.from("27");
    const blocks = BigNumber.from("349");
    const gas = BigNumber.from("84900000000000000000000");

    const addSummaryTx = await networkSummary.addSummary(dayId, blocks, gas);
    // wait until the transaction is mined
    await addSummaryTx.wait();

    const getSummaryTx = await networkSummary.getSummary(dayId);

    expect(getSummaryTx[0]).to.equal(blocks);
    expect(getSummaryTx[1]).to.equal(gas);
  });
});
