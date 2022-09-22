import React, { Suspense } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import './App.css'

const Home = React.lazy(() => import('./component/Home'));
const About = React.lazy(() => import('./component/About'));
const Contact = React.lazy(() => import('./component/Contact'));
const Project = React.lazy(() => import('./component/Project'));
const ProjectDetail = React.lazy(() => import('./component/ProjectDetail'));

const route = ['home', 'about', 'contact', 'project']

const App = () => {
  return (
    <>
      <div className='mainContainer'>
        {route.map((route) => {
          return (
            <Link key={route} to={`/${route}`}>
              {route}
            </Link>
          )
        })}
      </div>
      <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route path={'/home'} element={<Home />} />
        <Route path={'/about'} element={<About />} />
        <Route path={'/project'} element={<Project />} />
        <Route path={'/contact'} element={<Contact />} />
        <Route path={'/project/:projectId'} element={<ProjectDetail />} />
      </Routes>
      </Suspense>

    </>

  )
}

export default App
