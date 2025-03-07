import React from 'react';
import { createRoot } from 'react-dom/client';
import { Meteor } from 'meteor/meteor';
import { App } from '../imports/ui/App.jsx';
import AppRoutes from '../imports/ui/routes.js';

Meteor.startup(() => {
  const container = document.getElementById('react-target');
  const root = createRoot(container);
  root.render(<AppRoutes />);
});
