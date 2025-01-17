import { init } from '@web3-onboard/react' 
import injectedModule from '@web3-onboard/injected-wallets' 
import walletConnectModule from '@web3-onboard/walletconnect' 
import coinbaseModule from '@web3-onboard/coinbase' 
import portisModule from '@web3-onboard/portis' 
import fortmaticModule from '@web3-onboard/fortmatic'   
import gnosisModule from '@web3-onboard/gnosis' 
import gas from '@web3-onboard/gas' 
  
 // Replace with your DApp's Infura ID 
 const INFURA_ID = '4661d68cbd394dd88899475febf677e9' 
  
 export const infuraRPC = `https://mainnet.infura.io/v3/${INFURA_ID}` 
  
 const dappId = '7813493a-da4d-4d5a-9a8e-fcc7f6b499ea' 
  
 const injected = injectedModule() 
 const coinbase = coinbaseModule() 
 const walletConnect = walletConnectModule() 
  
 const portis = portisModule({ 
   apiKey: 'bca62abb-e573-4ad3-804c-46531cd17166' 
 }) 
  
 const fortmatic = fortmaticModule({ 
   apiKey: 'pk_live_ABD29B8F212A94C2' 
 }) 
     
 const gnosis = gnosisModule()
  
 export const initWeb3Onboard = init({ 
   wallets: [ 
     injected, 
     coinbase, 
     walletConnect, 
     gnosis, 
     fortmatic,  
     portis 
   ], 
   chains: [ 
     { 
       id: '0x1', 
       token: 'ETH', 
       label: 'Ethereum', 
       rpcUrl: infuraRPC 
     }, 
     { 
       id: '0x3', 
       token: 'tROP', 
       label: 'Ropsten', 
       rpcUrl: `https://ropsten.infura.io/v3/${INFURA_ID}` 
     }, 
     { 
       id: '0x4', 
       token: 'rETH', 
       label: 'Rinkeby', 
       rpcUrl: `https://rinkeby.infura.io/v3/${INFURA_ID}` 
     }, 
     { 
       id: '0x5', 
       token: 'ETH', 
       label: 'Goerli', 
       rpcUrl: `https://goerli.infura.io/v3/${INFURA_ID}` 
     }, 
     { 
       id: '0x13881', 
       token: 'MATIC', 
       label: 'Polygon - Mumbai', 
       rpcUrl: 'https://matic-mumbai.chainstacklabs.com        ' 
     }, 
     { 
       id: '0x38', 
       token: 'BNB', 
       label: 'Binance', 
       rpcUrl: 'https://bsc-dataseed.binance.org/' 
     }, 
     { 
       id: '0x89', 
       token: 'MATIC', 
       label: 'Polygon', 
       rpcUrl: 'https://matic-mainnet.chainstacklabs.com' 
     }, 
     { 
       id: '0xfa', 
       token: 'FTM', 
       label: 'Fantom', 
       rpcUrl: 'https://rpc.ftm.tools/' 
     }, 
     { 
       id: 10, 
       token: 'OETH', 
       label: 'Optimism', 
       rpcUrl: 'https://mainnet.optimism.io' 
     }, 
     { 
       id: 42161, 
       token: 'ARB-ETH', 
       label: 'Arbitrum', 
       rpcUrl: 'https://rpc.ankr.com/arbitrum' 
     } 
   ], 
   appMetadata: { 
     name: 'QuantaVerse ID',
     icon: "%PUBLIC_URL%/favicon.ico", 
     logo: "%PUBLIC_URL%/logo.png",
     description: 'QuantaVerse ID Web3 Connect', 
     recommendedInjectedWallets: [ 
       { name: 'Coinbase', url: 'https://wallet.coinbase.com/' }, 
       { name: 'MetaMask', url: 'https://metamask.io' } 
     ], 
     agreement: { 
       version: '1.0.0', 
       termsUrl: 'https://www.quantaverseid.io/terms', 
       privacyUrl: 'https://www.quantaverseid.io/privacy' 
     }, 
     gettingStartedGuide: 'https://quantaverseid.io', 
     explore: 'https://quantaverseid.io'
   }, 
   accountCenter: { 
     desktop: { 
       position: 'topRight', 
       enabled: true, 
       minimal: false 
     } 
   }, 
   // example customizing copy 
   i18n: { 
     es: { 
       connect: { 
         selectingWallet: { 
           header: 'Carteras disponibles', 
           sidebar: { 
             heading: 'Comenzar', 
             subheading: 'Conecta tu monedero', 
             paragraph: 
               'Conectar su billetera es como “iniciar sesión” en Web3. Seleccione su billetera de las opciones para comenzar.' 
           } 
         } 
       }, 
       accountCenter: { 
         connectAnotherWallet: 'Conectar otro monedero', 
         disconnectAllWallets: 'Desconectar todos los monederos', 
         currentNetwork: 'Red actual', 
         appInfo: 'Información de la aplicación', 
         learnMore: 'Aprende más', 
         gettingStartedGuide: 'Guía de introducción', 
         smartContracts: 'Contrato(s) inteligente', 
         explore: 'Explorar', 
         backToApp: 'Volver a dapp', 
         poweredBy: 'Funciona con', 
         addAccount: 'Añadir cuenta', 
         setPrimaryAccount: 'Establecer cuenta principal', 
         disconnectWallet: 'Desconectar Wallet' 
       } 
     } 
   }, 
   apiKey: dappId, 
   notify: { 
     transactionHandler: transaction => { 
       console.log({ transaction }) 
       if (transaction.eventCode === 'txPool') { 
         return { 
           // autoDismiss set to zero will persist the notification until the user excuses it 
           autoDismiss: 0, 
           // message: `Your transaction is pending, click <a href="https://rinkeby.etherscan.io/tx/${transaction.hash}" rel="noopener noreferrer" target="_blank">here</a> for more info.`, 
           // or you could use onClick for when someone clicks on the notification itself 
           onClick: () => 
             window.open(`https://rinkeby.etherscan.io/tx/${transaction.hash}`) 
         } 
       } 
     } 
   } 
 }) 
  
 // subscribe to a single chain for estimates using the default poll rate of 5 secs 
 // API key is optional and if provided allows for faster poll rates 
 export const ethMainnetGasBlockPrices = gas.stream({ 
   chains: ['0x1'], 
   apiKey: dappId, 
   endpoint: 'blockPrices' 
 });