import React, { useState } from 'react';
import './MainContent.css';
import LeadDistributionForm from './LeadDistributionForm';
import LeadList from './LeadList';

function MainContent() {
  const [leads, setLeads] = useState([]);
  const [agents, setAgents] = useState([]);

  // ...

  const handleLeadAssign = (leadId, agentId) => {
    const updatedLeads = leads.map((lead) => {
      if (lead.id === leadId) {
        return { ...lead, assignedAgentId: agentId };
      }
      return lead;
    });
    setLeads(updatedLeads);
  };

  return (
    <main className="main-content">
      {/* ... */}
      <LeadDistributionForm
        leads={leads}
        agents={agents}
        onAssign={handleLeadAssign}
      />
      <LeadList leads={leads} agents={agents} />
    </main>
  );
}

export default MainContent;