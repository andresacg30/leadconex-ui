import React from 'react';
import './Sidebar.css';

function Sidebar() {
  return (
    <aside className="sidebar">
      <nav>
        <ul>
          <li><a href="/">Dashboard</a></li>
          <li><a href="/campaigns">Campaigns</a></li>
          <li><a href="/agents">Agents</a></li>
          <li><a href="/leads">Leads</a></li>
          <li><a href="/settings">Settings</a></li>
        </ul>
      </nav>
    </aside>
  );
}

export default Sidebar;
