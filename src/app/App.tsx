"use client"
import Header from '../components/header/index'
import Bubble from '../components/messager/index'
import Footer from '../components/footer'

import CounterComponent from '../components/test/CounterControls';

const Page = () => {
    return (
      <div className='flex flex-col h-[100vw]'>
            <Header />
            <Bubble />
            <div className='flex items-end'>
            <Footer />
            </div>
            <CounterComponent />
      </div>
    )
}

export default Page;