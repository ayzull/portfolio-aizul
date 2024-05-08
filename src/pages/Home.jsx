import React from 'react'
import Header from '../components/Header'
import Body from '../components/Body'
import Footer from '../components/Footer'

export const Home = () => {
  return (
    <div>
        <Header/>
        <div className='flex bg-orange-300 justify-center'>
          <Body/>
        </div>
        <Footer/>
    </div>
  )
}
export default Home