// SPDX-License-Identifier: MIT

//stable coin used for easy fiat convertion on the ecommerce platform
pragma solidity ^0.8.0;

import '@openzeppelin/contracts/token/ERC20/ERC20.sol';

contract Dai is ERC20 {
    constructor() ERC20('DAI stable coin', 'DAI') public {}

    function faucet(address to, uint amount) external {
        _mint(to, amount);
    }
}