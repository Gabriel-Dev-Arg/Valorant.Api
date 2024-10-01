import './App.css'
import Header from './header.jsx'
import Footer from './footer.jsx'
import ApiValorant from './renderImg.jsx'
import { useState } from 'react';


function App() {
  const [buscador, setBuscador] = useState("");
  
  function handleChange(value){
    setBuscador(value);
  }

  return (
    <div className="has-background-link-10 min-h-screen flex flex-col">
      <div className='flex flex-col pt-20 px-4'>
        <Header buscador={buscador} handleChange={handleChange}/>
      </div>
      <div className="flex-grow flex justify-center ">
        <ApiValorant buscador={buscador}/>
      </div>
      <Footer />
    </div>
  )
}

export default App