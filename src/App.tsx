import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import BlogPage from './pages/BlogPage';
import BlogShowPage from './pages/BlogShowPage';
import ResumePage from './pages/ResumePage';
import NavigationBar from './components/NavigationBar';
import ScrollToAnchor from './ScrollToAnchor';
import Socials from './components/Socials';
import { useState } from 'react';
import { ThemeContext } from './context/ThemeContext'

function App() {
  const [isLight, setIsLight] = useState(true);

  return (
    <ThemeContext.Provider value={{isLight, setIsLight}}>
      <div className={`h-full w-full ${!isLight && 'dark'}`}>
        <div className="h-full flex justify-center bg-gradient-to-br from-cyan-700 to-blue-900 dark:from-cyan-900 dark:to-gray-900">
          {/* Fragment */}
          <Router>
            <ScrollToAnchor />
            <NavigationBar />
            <Socials linkedin="https://www.linkedin.com/in/brendanmusick" github="https://github.com/B-Musick"/>
            <Routes>
              {/* Make sure only one route shown at a time */}
              {/* Content inswitch depends on the route */}
              <Route path="/">
                <Route index={true} path="" element={<HomePage />} />
                <Route index={true} path="/about" element={<AboutPage />} />
                <Route index={true} path="/resume" element={<ResumePage />} />
                {/* <Route index={true} path="/blog" element={<BlogPage />} /> */}
              </Route>
              <Route path="/blog">
                <Route index={true} element={<BlogPage />} />
                <Route index={false} path=":blogId" element={<BlogShowPage />} />
              </Route>
            </Routes>
          </Router>
        </div>
      </div>
    </ThemeContext.Provider>
  )
}

export default App
