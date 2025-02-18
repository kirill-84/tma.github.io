import {useState} from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {TonConnectUIProvider} from '@tonconnect/ui-react'
import {Header} from "./components/Header/Header"
import {Settings} from "./components/Header/transactions"
import WebApp from '@twa-dev/sdk'

function App() {
    const [count, setCount] = useState(0)
    
    return (
        <TonConnectUIProvider
            manifestUrl="https://kirill-84.github.io/tma/tonconnect-manifest.json"
            actionsConfiguration={{
                twaReturnUrl: 'https://t.me/TMAppsBot'
            }}
        >
        <div className="App">
            <Header/>
            <div className="grid grid-flow-col">
                <a href="https://vite.dev" target="_blank">
                    <img src={viteLogo} className="logo w-full" loading="lazy" alt="Vite logo"/>
                </a>
                <a href="https://react.dev" target="_blank">
                    <img src={reactLogo} className="logo react w-full" loading="lazy" alt="React logo"/>
                </a>
            </div>
            <h1>Vite + React</h1>
            <div className="card">
                <button className="hover:bg-blue-400 group flex-auto items-center rounded-md bg-blue-500 text-white text-sm font-medium mb-3 pl-2 pr-3 py-2 shadow-sm" onClick={() => setCount((count) => count + 1)}>
                    count is {count}
                </button>
                <p>Edit <code>src/App.tsx</code> and save to test HMR</p>
            </div>
            <p className="read-the-docs">Click on the Vite and React logos to learn more</p>
            <Settings/>
            {/* Here we add our button with alert callback */}
            <div className="card">
                <button className="h-10 px-6 font-semibold rounded-md border border-slate-200 text-slate-900" onClick={() => WebApp.showAlert(`Hello World! Current count is ${count}`)}>
                    Show Alert!
                </button>
            </div>
        </div>
        </TonConnectUIProvider>    
    );
}

export default App
