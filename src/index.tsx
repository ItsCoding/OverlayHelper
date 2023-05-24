import React from 'react';
import { createRoot } from 'react-dom/client';
import { RootPage } from './pages/root';
// Clear the existing HTML content
document.body.innerHTML = '<div id="app"></div>';

// Render your React component instead
// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
const root = createRoot(document.getElementById('app')!);
root.render(<RootPage />);