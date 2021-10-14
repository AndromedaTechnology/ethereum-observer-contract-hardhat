import { expect } from "chai";
import { ethers } from "hardhat";

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

    // Day ID
    const dayId = 27;

    // Execute method with non-creator user
    await expect(
      networkSummary.connect(guest).addSummary(dayId, 349, 849)
    ).to.be.revertedWith('WriteAccessForbiden("' + guest.address + '")');
  });
  it("Stores summary for the day and returns it", async function () {
    const NetworkSummary = await ethers.getContractFactory("NetworkSummary");
    const networkSummary = await NetworkSummary.deploy();
    await networkSummary.deployed();

    // Day ID
    const dayId = 27;

    const addSummaryTx = await networkSummary.addSummary(dayId, 349, 849);
    // wait until the transaction is mined
    await addSummaryTx.wait();

    const getSummaryTx = await networkSummary.getSummary(dayId);

    // https://ethereum.stackexchange.com/questions/89423/convert-hex-number-from-solidity/89430
    expect(getSummaryTx[0].toString()).to.equal((349).toString());
    expect(getSummaryTx[1].toString()).to.equal((849).toString());
  });
});
