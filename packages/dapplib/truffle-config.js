require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gesture rebel frame security iron note night exchange grace nation force genuine'; 
let testAccounts = [
"0xcc2968451088ec642a50a580d3758fca0a6a552f65095c090923f1f1e9fbcdc4",
"0x1bf50fbba4015e3fc96f94add00fb6eb99e72c2e3e23e54fca82cfd29d4dff9e",
"0xffc0dc23af2e9cbf5ad9094b43a809324cb7781bcae8ee513d188964a614d32a",
"0x0eae0d8fbc7878ce9cb1ccf8992f0bf541e797d96a01186f9b7006a7ac914ff4",
"0x99c05347db6fcfe9ef7a621b219863c4cb7699a0f9c4c53d84ae7f3226127e01",
"0x7ada174a6562319e271a65d4d53a808141b34385c3e91dfe16fb616a3adad9f6",
"0xf352de8dfa27e2d1480263cc61c54ad8eb3807e9230319771bd2922197959688",
"0xeecafcd2e1039b164597380d2b486deecf2d2c5e70500251558951d46fe599e7",
"0x835d148f4b98d9165d1a611b06e4e9c91264cf876c22c216319a53882d186cb9",
"0x6511b6b5ebc4d0934335c1e1d4d4c207dda57d560d329375c7632e5e3dc67e05"
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

