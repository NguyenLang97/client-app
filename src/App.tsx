import { Route, Routes } from 'react-router-dom'
import './App.css'
import CreateContainer from './components/create_container/CreateContainer'
import Header from './components/header/Header'
import MainContainer from './components/main_container/MainContainer'

function App() {
    return (
        <div className="w-screen h-auto flex flex-col bg-primary">
            <Header />

            <main className="mt-14 md:mt-20 px-4 md:px-16 py-4 w-full">
                <Routes>
                    <Route path="/*" element={<MainContainer />} />
                    <Route path="/createItem" element={<CreateContainer />} />
                </Routes>
            </main>
        </div>
    )
}

export default App
