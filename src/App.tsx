import { Outlet } from 'react-router-dom';
import './App.scss';
import { Header } from './components/Header';
import { Navigation } from './components/Navigation';

export const App = () => {
  return (
    <div className='app'>
      <div className='app__line'></div>
      <div className='app__container'>
        <header className='app__header'>
          <Header />
        </header>
        <nav className='app__nav'>
          <Navigation />
        </nav>
        <main className='app__main'>
          <Outlet />
        </main>
      </div>
    </div>
  )
}
