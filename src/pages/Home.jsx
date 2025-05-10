import React from 'react'
import MainTopSection from '../components/mainTopSection'
import Bar from '../components/bar'
import MainMiddleSection from '../components/mainMiddleSection'
import ProcessSection from '../components/processSection'
import GradientSection from '../components/gradientSection'
import ExpertiseSection from '../components/expertiseSection'
import PremiumProSec from '../components/premiumProSec'
import OurClient from '../components/ourClients'
import GetInTouch from '../components/getInTouch'


const Home = () => {
  return (
    <div>
      <MainTopSection />
      <Bar />
      <MainMiddleSection />
      <ProcessSection />
      <GradientSection />
      <ExpertiseSection />
      <PremiumProSec />
      <OurClient />
      <GetInTouch />
      
    </div>
  )
}

export default Home
