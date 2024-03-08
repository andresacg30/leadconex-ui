import React, { useState } from 'react';
import './LeadDistributionForm.css';

function LeadDistributionForm({ leads, agents, onAssign }) {
  const [selectedLead, setSelectedLead] = useState('');
  const [selectedAgent, setSelectedAgent] = useState('');

  const handleAssign = (e) => {
    e.preventDefault();
    onAssign(selectedLead, selectedAgent);
    setSelectedLead('');
    setSelectedAgent('');
  };

  return (
    <div className="lead-distribution-form">
      <h3>Assign Lead to Agent</h3>
      <form onSubmit={handleAssign}>
        <div className="form-group">
          <label htmlFor="lead">Select Lead</label>
          <select
            id="lead"
            value={selectedLead}
            onChange={(e) => setSelectedLead(e.target.value)}
            required
          >
            <option value="">Select Lead</option>
            {leads.map((lead) => (
              <option key={lead.id} value={lead.id}>
                {lead.name}
              </option>
            ))}
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="agent">Select Agent</label>
          <select
            id="agent"
            value={selectedAgent}
            onChange={(e) => setSelectedAgent(e.target.value)}
            required
          >
            <option value="">Select Agent</option>
            {agents.map((agent) => (
              <option key={agent.id} value={agent.id}>
                {agent.name}
              </option>
            ))}
          </select>
        </div>
        <button type="submit">Assign Lead</button>
      </form>
    </div>
  );
}

export default LeadDistributionForm;