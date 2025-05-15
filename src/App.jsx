import { useState } from 'react'
import { LoadingScreen } from './components/LoadingScreen'
import './App.css'
import './index.css'
import { Navbar } from './components/Navbar'
import { MobileMenu } from './components/MobileMenu'
import { Home } from './components/sections/Home'
import Experience from './components/sections/Experience';
import {Projects} from './components/sections/Projects'
import { Contact } from './components/sections/Contact'

function App() {
  const [isLoading, setIsLoading] = useState(false);
  const [menuIsopen, setMenuIsopen] = useState(false);

  return (
    <>
      {!isLoading && <LoadingScreen onComplete={() => setIsLoading(true)} />}{" "}
      <div
        className={`min-h-screen transition-opacity duration-700 ${
          isLoading ? "opacity-100" : "opacity-0"
        } bg-black text-gray-100`}
      >
        <Navbar menuIsopen={menuIsopen} setMenuIsopen={setMenuIsopen} />
        <MobileMenu menuIsopen={menuIsopen} setMenuIsopen={setMenuIsopen} />
        <Home />
        <Experience/>
        <Projects/>
        <Contact />
      </div>
    </>
  )
}

export default App
