import React, { useState } from 'react';
import './SocialMediaForm.css';

function SocialMediaForm({ campaigns, onSubmit }) {
  const [platform, setPlatform] = useState('');
  const [accountUrl, setAccountUrl] = useState('');
  const [selectedCampaign, setSelectedCampaign] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ platform, accountUrl, campaignId: selectedCampaign });
    setPlatform('');
    setAccountUrl('');
    setSelectedCampaign('');
  };

  return (
    <div className="social-media-form">
      <h3>Link Social Media Account</h3>
      <form onSubmit={handleSubmit}>
        {/* ... */}
        <div className="form-group">
          <label htmlFor="campaign">Associated Campaign</label>
          <select
            id="campaign"
            value={selectedCampaign}
            onChange={(e) => setSelectedCampaign(e.target.value)}
            required
          >
            <option value="">Select Campaign</option>
            {campaigns.map((campaign) => (
              <option key={campaign.id} value={campaign.id}>
                {campaign.name}
              </option>
            ))}
          </select>
        </div>
        <button type="submit">Link Account</button>
      </form>
    </div>
  );
}

export default SocialMediaForm;