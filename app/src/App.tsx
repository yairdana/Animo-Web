import { useState, useEffect } from 'react'
import { Navigation } from './components/Navigation'
import { Header } from './components/Header'
import { Features } from './components/Features'
import { About } from './components/About'
import { Services } from './components/Services'
import { Gallery } from './components/Gallery'
import { Testimonials } from './components/Testimonials'
import { Team } from './components/Team'
import { Contact } from './components/Contact'
import JsonData from './data/data.json'
import SmoothScroll from 'smooth-scroll'
import {  Router, Switch, Route, Link } from 'react-router-dom';

export const scroll = new SmoothScroll('a[href*="#"]', {
  speed: 1000,
  speedAsDuration: true,
})

const App = () => {
  const [landingPageData, setLandingPageData] = useState(JsonData)
  useEffect(() => {
    setLandingPageData(JsonData)
  }, []);

  return (
    <div>
      <Navigation />
      
      {/* <Gallery /> */}
      {/* <Testimonials data={landingPageData.Testimonials} /> */}
     
          <Route path='/welcome'>
          <Header data={landingPageData.Header} />
              <About data={landingPageData.About} />
              <Team data={landingPageData.Team} />
              <Contact data={landingPageData.Contact} />
          </Route>
          <Route path='/try'>
          <Team data={landingPageData.Team} />

          </Route>
          </div>

  )
}

export default App