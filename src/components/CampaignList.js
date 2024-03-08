import React from 'react';
import './CampaignList.css';

function CampaignList({ campaigns }) {
  return (
    <div className="campaign-list">
      <h3>Campaigns</h3>
      <ul>
        {campaigns.map((campaign) => (
          <li key={campaign.id}>
            <h4>{campaign.name}</h4>
            <p>{campaign.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default CampaignList;