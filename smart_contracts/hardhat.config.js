// https://eth-ropsten.alchemyapi.io/v2/M8jY4hWIpp7owGu5l_VTZml_vH-_i0EL
// 4b2c500252a3beef4cc16908f12df74dda5777e17a21f094fd005be374bd4b66

require('@nomiclabs/hardhat-waffle');

module.exports = {
  solidity: '0.8.0',
  networks: {
    ropsten: {
      url: 'https://eth-ropsten.alchemyapi.io/v2/M8jY4hWIpp7owGu5l_VTZml_vH-_i0EL',
      accounts: ['4b2c500252a3beef4cc16908f12df74dda5777e17a21f094fd005be374bd4b66']
    }
  }
}

