import React from 'react';
import './Dashboard.css';

function Dashboard() {
  // Dummy data for demonstration purposes
  const campaigns = [
    { id: 1, name: 'Campaign 1', leadsCount: 100, agentsCount: 5 },
    { id: 2, name: 'Campaign 2', leadsCount: 200, agentsCount: 8 },
    { id: 3, name: 'Campaign 3', leadsCount: 150, agentsCount: 6 },
  ];

  return (
    <div className="dashboard">
      <h2>Agency Dashboard</h2>
      <div className="dashboard-stats">
        <div className="stat-item">
          <h3>Total Campaigns</h3>
          <p>{campaigns.length}</p>
        </div>
        <div className="stat-item">
          <h3>Total Leads</h3>
          <p>{campaigns.reduce((sum, campaign) => sum + campaign.leadsCount, 0)}</p>
        </div>
        <div className="stat-item">
          <h3>Total Agents</h3>
          <p>{campaigns.reduce((sum, campaign) => sum + campaign.agentsCount, 0)}</p>
        </div>
      </div>
      <div className="campaign-list">
        <h3>Recent Campaigns</h3>
        <ul>
          {campaigns.map((campaign) => (
            <li key={campaign.id}>
              <h4>{campaign.name}</h4>
              <p>Leads: {campaign.leadsCount}</p>
              <p>Agents: {campaign.agentsCount}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Dashboard;