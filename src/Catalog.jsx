import React, { useState } from 'react';
import OrganizationCard from './components/OrganizationCard';
import AddOrganizationModal from './components/AddOrganizationModal';

const organizations = [
 
    {
        id: 1,
        name: 'Acme Inc.',
        logoUrl: 'https://findlogovector.com/wp-content/uploads/2019/10/maker-makerdao-com-logo-vector.png',
        contractAddress: '0x1234567890abcdef'
      },
      {
        id: 2,
        name: 'Beta Corp.',
        logoUrl: 'https://findlogovector.com/wp-content/uploads/2019/10/maker-makerdao-com-logo-vector.png',
        contractAddress: '0xabcdef1234567890'
      },
      {
        id: 3,
        name: 'Beta Corp.',
        logoUrl: 'https://findlogovector.com/wp-content/uploads/2019/10/maker-makerdao-com-logo-vector.png',
        contractAddress: '0xabcdef1234567890'
      },
      {
        id: 4,
        name: 'Beta Corp.',
        logoUrl: 'https://findlogovector.com/wp-content/uploads/2019/10/maker-makerdao-com-logo-vector.png',
        contractAddress: '0xabcdef1234567890'
      },
      {
        id: 5,
        name: 'Beta Corp.',
        logoUrl: 'https://findlogovector.com/wp-content/uploads/2019/10/maker-makerdao-com-logo-vector.png',
        contractAddress: '0xabcdef1234567890'
      },
      {
        id: 6,
        name: 'Beta Corp.',
        logoUrl: 'https://findlogovector.com/wp-content/uploads/2019/10/maker-makerdao-com-logo-vector.png',
        contractAddress: '0xabcdef1234567890'
      },
];

const OrganizationDirectory = () => {
  const [showAddModal, setShowAddModal] = useState(false);

  const handleAddClick = () => {
    setShowAddModal(true);
  };

  const handleCloseModal = () => {
    setShowAddModal(false);
  };

  return (
    <div className="container">
  
      <nav className="navbar">
        <div className="logo">
          <img src="/logo.png" alt="Crossfolio logo" />
          <h1>Crossfolio</h1>
        </div>  
        <button className="add-button" onClick={handleAddClick}>
          Add Organization
        </button>
      </nav>
        <div className="catalog-container mt-4">
       <h1 className='mt-3 mb-7 font-semibold'>Organization Directory</h1>
      <div className="catalog-list">
        {organizations.map(org => (
          <OrganizationCard key={org.id} organization={org} />
        ))}
      </div>
      {showAddModal && <AddOrganizationModal onClose={handleCloseModal} />}
   </div> </div>
  );
};

export default OrganizationDirectory;