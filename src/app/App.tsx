"use client"
import Header from '../components/header/index'
import Bubble from '../components/messager/index'
import Footer from '../components/footer'
import useStore from '../stores/store'

const Page = () => {
  const { messager } = useStore();

    return (
      <div className='grid grid-rows-1 grid-flow-col'>
        <div className='flex flex-col justify-between border-2 border-solid shadow-sm border-[#E5E5EA]'>
              <Header />
              <Bubble />
              <div className='flex items-end'>
              <Footer />
              </div>
              {messager}
        </div>
      </div>
    )
}

export default Page;