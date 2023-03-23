import React from 'react';

const OrganizationCard = ({ organization }) => {
return (
<div className="catalog-card">
<img className="card-image" src={organization.logoUrl} alt={organization.name} />
<div className="card-body">
<h2 className="card-title">{organization.name}</h2>
<p className="card-contract">{organization.contractAddress}</p>
</div>
</div>
);
};

export default OrganizationCard;