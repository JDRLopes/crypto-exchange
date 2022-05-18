// SPDX-License-Identifier: UNLICENSED

pragma solidity ^0.8.0;

contract Transactions {

    event Transfer (address from, address receiver, uint amount, string message, uint timestamp, string keywords);  

    struct TranferStruct {
        address sender;
        address receiver;
        uint amount;
        string message;
        uint timestamp;
        string keyword;
    }

    uint transactionCount;

    TranferStruct[] transactions;

    function addToBlockchain(address payable receiver, uint amount, string memory message, string memory keyword) public{

        transactionCount +=1;
        transactions.push(TranferStruct(msg.sender, receiver, amount, message, block.timestamp, keyword));

        emit Transfer(msg.sender, receiver, amount, message, block.timestamp, keyword);
    }

    function getAllTransactions() public view returns(TranferStruct[] memory) {
        return transactions;
    }

    function getTransactionCount() public view returns (uint){
        return transactionCount;
    } 
}