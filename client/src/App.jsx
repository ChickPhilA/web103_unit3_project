import React from 'react'
import { useRoutes, Link } from 'react-router-dom'
import Locations from './pages/Locations'
import LocationEvents from './pages/LocationEvents'
import Events from './pages/Events'
import './App.css'

const App = () => {
  // index matches each venue's id in the locations table
  let element = useRoutes([
    {
      path: '/',
      element: <Locations />
    },
    {
      path: '/guildhouse',
      element: <LocationEvents index={1} />
    },
    {
      path: '/esports-stadium-arlington',
      element: <LocationEvents index={2} />
    },
    {
      path: '/card-kingdom',
      element: <LocationEvents index={3} />
    },
    {
      path: '/refuge-gaming',
      element: <LocationEvents index={4} />
    },
    {
      path: '/galloping-ghost-arcade',
      element: <LocationEvents index={5} />
    },
    {
      path: '/wonderville',
      element: <LocationEvents index={6} />
    },
    {
      path: '/events',
      element: <Events />
    }
  ])

  return (
    <div className='app'>

      <header className='main-header'>
        <h1>Lobby Up</h1>

        <div className='header-buttons'>
          <Link to='/' role='button'>Home</Link>
          <Link to='/events' role='button'>Events</Link>
        </div>
      </header>

      <main>
        {element}
      </main>
    </div>
  )
}

export default App
