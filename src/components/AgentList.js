import React from 'react';
import './AgentList.css';

function AgentList({ agents }) {
  return (
    <div className="agent-list">
      <h3>Agents</h3>
      <ul>
        {agents.map((agent) => (
          <li key={agent.id}>
            <p>Name: {agent.name}</p>
            <p>Email: {agent.email}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default AgentList;