require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'heavy prize flee venture struggle rifle magic evil great light army gift'; 
let testAccounts = [
"0x6bdd2c2e992c187141d4a1347e5749018110e9c43a3feaaab9bf180093853def",
"0xbf2aee579470d233225dbb3777d6eadda1003b7862644e41516bfc5699a8851f",
"0xa28821cde8ad6d840fee9d9d8ac797f754e3ce7fdabfa9a2a367d69487ecfd03",
"0x2aa5f09d2b7580d491f72a8312bb15d2f45beff3796643a92609f6d7891acd4a",
"0x3dd09c0b07c635c09ba87c7f33c80ef0ae6a049e19d61c7e89d3bbc3d5c6d577",
"0x7d82e21216854cc0754849d44259a66c35e05f50dfba5500dd81782450367144",
"0xecd687d4a443c47038d6baf91e03d7ba761659c15d48f25e48141f8d1a9699b0",
"0xd001c17dc48517e0fccf11dc24b997c114a69f3d091f2209917ec057055c8ea2",
"0x2c6c25c7037f57612f94fd62be357d6b5d9a7df44373ff14d7b22948ce017fd5",
"0x39d61b92b98c27cf98cd60cb6348710ef073ac0fcc5e31aeef07d92a7301d00f"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

