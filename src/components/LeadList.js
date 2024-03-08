import React from 'react';
import './LeadList.css';

function LeadList({ leads, campaigns, agents }) {
    const getCampaignName = (campaignId) => {
        const campaign = campaigns.find((campaign) => campaign.id === campaignId);
        return campaign ? campaign.name : 'Unknown Campaign';
    };
    const getAgentName = (agentId) => {
        const agent = agents.find((agent) => agent.id === agentId);
        return agent ? agent.name : 'Unassigned';
    };

  return (
    <div className="lead-list">
      <h3>Captured Leads</h3>
      <ul>
        {leads.map((lead) => (
          <li key={lead.id}>
            <p>Name: {lead.name}</p>
            <p>Email: {lead.email}</p>
            <p>Platform: {lead.platform}</p>
            <p>Campaign: {getCampaignName(lead.campaignId)}</p>
            <p>Assigned Agent: {getAgentName(lead.assignedAgentId)}</p>
            {/* Display additional lead data based on the campaign */}
            {lead.customFields.map((field) => (
              <p key={field.name}>
                {field.name}: {field.value}
              </p>
            ))}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default LeadList;