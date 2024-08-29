"use client"
import Header from '../components/header/index'
import Bubble from '../components/messager/index'
import Footer from '../components/footer'
import useStore from '../stores/store'

const Page = () => {
  const { messager } = useStore();

    return (
      <div className='font-jost flex flex-col h-[100vw]'>
            <Header />
            <Bubble />
            <div className='flex items-end'>
            <Footer />
            </div>
            {messager}
      </div>
    )
}

export default Page;