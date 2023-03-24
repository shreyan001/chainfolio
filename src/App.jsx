import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Attest } from './Attest';
import Crossfolio from './Hero';
import OrganizationDirectory from './Catalog';
import ComponentPage from './Comp';
import { nftList, workList } from './List';




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
                 <Route 
        path="/test" 
        element={<ComponentPage nftList={nftList} workList={workList}   />} />
   
      </Routes>
    </BrowserRouter>
    </>
  );
}
