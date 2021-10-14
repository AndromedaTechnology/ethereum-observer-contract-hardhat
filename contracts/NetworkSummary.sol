//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.0;

import "hardhat/console.sol";

/**
    NetworkSummary
 */
contract NetworkSummary {
    /**
        Creator of the Contract.
        We store it for later check in protected methods.

        "public" keyword makes state variable
        accessible from other contracts.
     */
    address public creator;

    /**
        Daily Summary struct
     */
    struct DailySummary {
        uint256 blocks;
        uint256 gas;
    }

    /**
        Log
        Start of the date in seconds => DailySummary
     */
    mapping(uint256 => DailySummary) log;

    /**
        Error WriteAccessForbiden
     */
    error WriteAccessForbiden(address sender);

    /**
        Event SummaryAdded
    */
    event SummaryAdded(uint256 dayId);

    /**
        Constructor
     */
    constructor() {
        creator = msg.sender;
        console.log("Deploying. Contract creator is '%s'.", creator);
    }

    /**
        Get Creator
     */
    function getCreator() public view returns (address) {
        return creator;
    }

    /**
        Get Summary
     */
    function getSummary(uint256 dayId)
        public
        view
        returns (DailySummary memory dailySummary)
    {
        return log[dayId];
    }

    /**
        Add Summary
     */
    function addSummary(
        uint256 dayId,
        uint256 blocks,
        uint256 gas
    ) public {
        // Only Contract creator has write access
        if (msg.sender != creator) {
            console.log("WriteAccessForbiden for account '%s'.", msg.sender);
            revert WriteAccessForbiden({sender: msg.sender});
        }

        // Construct DailySummary
        DailySummary memory dailySummary = DailySummary({
            blocks: blocks,
            gas: gas
        });

        // Add DailySummary to log
        log[dayId] = dailySummary;

        // Console
        console.log("SummaryAdded by account '%s'.", msg.sender);

        // Notify subscribers
        emit SummaryAdded(dayId);
    }
}
