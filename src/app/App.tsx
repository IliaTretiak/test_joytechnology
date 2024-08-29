"use client"
import Header from '../components/header/index'
import Bubble from '../components/messager/index'

const Page = () => {

    return (
      <div className='grid grid-rows-1 grid-flow-col'>
        <div className='flex flex-col justify-between border-2 border-solid shadow-sm border-[#E5E5EA]'>
              <Header />
              <Bubble />
        </div>
      </div>
    )
}

export default Page;