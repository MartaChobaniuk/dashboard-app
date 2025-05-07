import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.scss'
import { Root } from './Root';

const rootElement = document.getElementById('root');

if (rootElement) {
  createRoot(rootElement).render(
    <StrictMode>
      <Root />
    </StrictMode>,
  );
}
