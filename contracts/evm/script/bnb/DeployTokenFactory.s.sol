// SPDX-License-Identifier: MIT
pragma solidity ^0.8.26;

import "forge-std/Script.sol";
import "src/TokenFactory.sol";
import "src/Token.sol";

contract DeployTokenFactory is Script {
    // address constant LZ_ENDPOINT_V2_ADDRESS = 0x6EDCE65403992e310A62460808c4b910D972f10f; // testnet
    address constant LZ_ENDPOINT_V2_ADDRESS = 0x1a44076050125825900e736c501f859c50fE728c; // mainnet
    address constant UNISWAP_V2_FACTORY_ADDRESS = 0x8909Dc15e40173Ff4699343b6eB8132c65e18eC6;
    address constant UNISWAP_V2_ROUTER_ADDRESS = 0x4752ba5DBc23f44D87826276BF6Fd6b1C372aD24;
    
    function run() external {
        // Start broadcasting the deployment transaction
        vm.startBroadcast();

        uint TOKEN_CREATOR_BONUS = 0.12 ether;
        uint PLATFORM_FEE = 0.6 ether;
        uint INITIAL_PRICE = 2 * 10 ** 12;

        TokenFactory factory = new TokenFactory(
            msg.sender,
            TOKEN_CREATOR_BONUS,
            PLATFORM_FEE,
            LZ_ENDPOINT_V2_ADDRESS,
            INITIAL_PRICE,
            UNISWAP_V2_FACTORY_ADDRESS,
            UNISWAP_V2_ROUTER_ADDRESS
        );

        // Stop broadcasting the transaction
        vm.stopBroadcast();

        // Log the proxy contract address
        console.log("TokenFactory deployed at:", address(factory));
    }
}
