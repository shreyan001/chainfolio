import React, { useState } from 'react';

const AddOrganizationModal = ({ onClose }) => {
const [name, setName] = useState('');
const [logoUrl, setLogoUrl] = useState('');
const [contractAddress, setContractAddress] = useState('');

const handleNameChange = (event) => {
setName(event.target.value);
};

const handleLogoUrlChange = (event) => {
setLogoUrl(event.target.value);
};

const handleContractAddressChange = (event) => {
setContractAddress(event.target.value);
};

const handleSubmit = (event) => {
event.preventDefault();
const newOrg = {
id: organizations.length + 1,
name,
logoUrl,
contractAddress,
};
organizations.push(newOrg);
onClose();
};

return (
<div className="modal-overlay">
<div className="modal">
<h2>Add Organization</h2>
<form onSubmit={handleSubmit}>
<label>
Name:
<input type="text" value={name} onChange={handleNameChange} />
</label>
<label>
Logo URL:
<input type="text" value={logoUrl} onChange={handleLogoUrlChange} />
</label>
<label>
Contract Address:
<input type="text" value={contractAddress} onChange={handleContractAddressChange} />
</label>
<div className="modal-buttons">
<button type="button" onClick={onClose}>
Cancel
</button>
<button className='btn1' type="submit">Save</button>
</div>
</form>
</div>
</div>
);
};

export default AddOrganizationModal;