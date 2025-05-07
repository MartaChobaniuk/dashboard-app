import { Route, HashRouter as Router, Routes } from 'react-router-dom';
import { App } from './App';
import { Paths } from './types/Paths';
import { DashboardPage } from './pages/DashboardPage';
import { AccountsPage } from './pages/AccountsPage';
import { BrokersPage } from './pages/BrokersPage';

export const Root = () => (
  <Router>
    <Routes>
      <Route path="/" element={<App />}>
        <Route index element={<DashboardPage />} />
        <Route path={Paths.Accounts} element={<AccountsPage />} />
        <Route path={Paths.Brokers} element={<BrokersPage />} />
      </Route>
    </Routes>
  </Router>
)