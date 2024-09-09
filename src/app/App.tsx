"use client"
import Header from '../components/header/index'
import Bubble from '../components/messager/index'
import dayjs from 'dayjs'

const Page = () => {

    return (
      <div className='grid grid-rows-1 grid-flow-col h-[100vh]'>
        <div className='flex flex-col justify-between border-2 border-solid shadow-sm border-[#E5E5EA]'>
          <div>
            <Header />
            <span className='py-[17px] flex justify-center items-start text-sm text-[#666668] font-normal leading-loose'>
            {dayjs().format('MM/DD/YYYY')}
            </span>
          </div>
              <Bubble />
        </div>
      </div>
    )
}

export default Page;