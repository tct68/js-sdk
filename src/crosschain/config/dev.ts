import { Config } from '../types'

export const config: Config = {
    advisor: {
        url: 'https://api.dev.symbiosis.finance/calculations',
    },
    omniPools: [
        {
            chainId: 97,
            address: '0x789001A80a8EdBBEE07876b0dF58c3eAdEE89877',
            oracle: '0x2cD94CB0F4cBC4a51c3e9c4b88d03B982bE24608',
        },
    ],
    chains: [
        {
            id: 5,
            rpc: 'https://rpc.ankr.com/eth_goerli',
            filterBlockOffset: 2000,
            waitForBlocksCount: 5,
            stables: [
                {
                    name: 'Wrapped ETH',
                    address: '0xb4fbf271143f4fbf7b91a5ded31805e42b2208d6',
                    symbol: 'WETH',
                    decimals: 18,
                    chainId: 5,
                    icons: {
                        large: 'https://s2.coinmarketcap.com/static/img/coins/64x64/1027.png',
                        small: 'https://s2.coinmarketcap.com/static/img/coins/128x128/1027.png',
                    },
                },
            ],
            router: '0x7a250d5630B4cF539739dF2C5dAcb4c659F2488D',
            dexFee: 30,
            metaRouter: '0xd70077A7e64473F2B606fDeE43014d63d3F8dFB2',
            metaRouterGateway: '0x44f841Fa855a2f4B3091fACaE91D73b485bc675c',
            bridge: '0x823389FfdF5F1BAD10eB52089E7195772A54ccBa',
            synthesis: '0x0000000000000000000000000000000000000000',
            portal: '0xd85d934E4b73Fd93f56BEAE55eF7cdD3eAecBf4D',
            fabric: '0x0000000000000000000000000000000000000000',
            multicallRouter: '0xee328E4ba6579B7003A60cf740C8f8198B08491D',
            aavePool: '0x0000000000000000000000000000000000000000',
            creamComptroller: '0x0000000000000000000000000000000000000000',
            renGatewayRegistry: '0x0000000000000000000000000000000000000000',
            aavePoolDataProvider: '0x0000000000000000000000000000000000000000',
            creamCompoundLens: '0x0000000000000000000000000000000000000000',
            blocksPerYear: 0,
        },
        {
            id: 97,
            rpc: 'https://rpc.ankr.com/bsc_testnet_chapel',
            filterBlockOffset: 2000,
            waitForBlocksCount: 20,
            stables: [],
            router: '0xD99D1c33F9fC3444f8101754aBC46c52416550D1',
            dexFee: 30,
            metaRouter: '0x87BFB71bBd221a57826489DD247EB103a0cc7482',
            metaRouterGateway: '0x27022ad33b09f49BEE2dCC482F4604FD2560A862',
            bridge: '0x9708C5b89F9B166c080B8F5BBcDEC27D5Fa92eE8',
            synthesis: '0xD67940D8414E09F84eBEa85cd021dbc011A94Bc8',
            portal: '0x0000000000000000000000000000000000000000',
            fabric: '0x167C52B035D7cfA2D8199A2Af450B3493C51576C',
            multicallRouter: '0xF77c766DEB09f424228Be0b679E3F8326b9d7741',
            aavePool: '0x0000000000000000000000000000000000000000',
            creamComptroller: '0x0000000000000000000000000000000000000000',
            renGatewayRegistry: '0x0000000000000000000000000000000000000000',
            aavePoolDataProvider: '0x0000000000000000000000000000000000000000',
            creamCompoundLens: '0x0000000000000000000000000000000000000000',
            blocksPerYear: 0,
        },
        {
            id: 534353,
            rpc: 'https://alpha-rpc.scroll.io/l2',
            filterBlockOffset: 2000,
            waitForBlocksCount: 20,
            stables: [
                {
                    name: 'Wrapped ETH',
                    address: '0xa1EA0B2354F5A344110af2b6AD68e75545009a03',
                    symbol: 'WETH',
                    decimals: 18,
                    chainId: 534353,
                    icons: {
                        large: 'https://s2.coinmarketcap.com/static/img/coins/64x64/1027.png',
                        small: 'https://s2.coinmarketcap.com/static/img/coins/128x128/1027.png',
                    },
                },
            ],
            router: '0xDe886ff69fE234c8db2e2694788e73aa6be8d0c7',
            dexFee: 30,
            metaRouter: '0x81d80bEcFD9a6A64bB0602d79E8Bd45844083626',
            metaRouterGateway: '0xfB4e7A087b24Dfc583C56F53026D7270B378182F',
            bridge: '0xcC9DBA9AF9ce104e150654B21436584b8e74b236',
            synthesis: '0x0000000000000000000000000000000000000000',
            portal: '0xCFae8104e76C9BFcf9A9035B83e907DFfD109A55',
            fabric: '0x0000000000000000000000000000000000000000',
            multicallRouter: '0xFcaf6b41397c93032C43E5C37256350d679B3Bbe',
            aavePool: '0x0000000000000000000000000000000000000000',
            aavePoolDataProvider: '0x0000000000000000000000000000000000000000',
            creamComptroller: '0x0000000000000000000000000000000000000000',
            creamCompoundLens: '0x0000000000000000000000000000000000000000',
            blocksPerYear: 2336000,
            renGatewayRegistry: '0x0000000000000000000000000000000000000000',
        },
    ],
}
