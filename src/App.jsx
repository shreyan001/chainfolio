import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Attest } from './Attest';
import Crossfolio from './Hero';
import OrganizationDirectory from './Catalog';




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
        element={<Crossfolio/>} />
         <Route 
        path="/create" 
        element={<Attest/>} />
         <Route 
        path="/list" 
        element={<OrganizationDirectory/>} />
   
      </Routes>
    </BrowserRouter>
    </>
  );
}
