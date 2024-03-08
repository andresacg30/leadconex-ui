import React, { useState } from 'react';
import './CampaignForm.css';

function CampaignForm({ onSubmit }) {
  const [campaignName, setCampaignName] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ name: campaignName, description });
    setCampaignName('');
    setDescription('');
  };

  return (
    <div className="campaign-form">
      <h3>Create Campaign</h3>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="campaignName">Campaign Name</label>
          <input
            type="text"
            id="campaignName"
            value={campaignName}
            onChange={(e) => setCampaignName(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="description">Description</label>
          <textarea
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          ></textarea>
        </div>
        <button type="submit">Create</button>
      </form>
    </div>
  );
}

export default CampaignForm;