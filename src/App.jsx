import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Attest } from './Attest';




export default function App() {
  /**
   * Wagmi hook for getting account information
   * @see https://wagmi.sh/docs/hooks/useAccount
   */


  return (
    <>
       <BrowserRouter>  
       <Routes>
       <Route 
        path="/" 
        element={<Attest/>} />
   
      </Routes>
    </BrowserRouter>
    </>
  );
}
