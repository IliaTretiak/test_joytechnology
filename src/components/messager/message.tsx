import useStore from '../../stores/store'
import check from '../../assets/images/check.svg'
import pen from '../../assets/images/pen.svg'
import tail from '../../assets/images/tail.svg'
import { FC } from 'react';
import dayjs from 'dayjs'
import Answer from './answer'
import Users from '../../../public/data/users'
import { useState, useEffect } from 'react';

interface InputProps {
    editMessage?: any;
    item?: any;
    key?: any
  }

const Message:FC<InputProps> = ({
    editMessage,
    item,
    key
}) => {
    const { messager } = useStore();
    const [activeAncwer, setActiveAnswer] = useState<any>(false)
    const [getId, setGetId] = useState(Number(1))
    const getRandomInt = (max: number) => {
        const output = Math.floor(Math.random() * max);
        setGetId(output)
      }
    useEffect(() => {
        getRandomInt(Number(4))
        setTimeout(() => setActiveAnswer((prev: any) => prev = true), 1000)
      }, [item.length !== 0])

    return (
        <>
                <div className='flex flex-col gap-2 overflow-auto h-[100%]'>
                {/* <span className='py-[17px] flex justify-center text-sm text-[#666668] font-normal leading-loose'>
                {dayjs().format('MM/DD/YYYY')}
            </span> */}

                <div className="flex justify-end pl-20 pr-[51px]">
                    {item.length !== 0 &&
            <div className='
            bg-[#007AFF;] 
            text-[#FFFFFF]
            rounded-md relative py-1 px-2 pr-[15px] 
            flex justify-between flex-col 
            max-w-[48%]
            '>
                <span className='hyphens-auto'>
                    {item}
                </span>
            
                <div className="flex justify-between">
                    <div
                    onClick={editMessage}
                    >
                        <img width={16} height={8} src={pen.src} alt='редактировать сообщение'></img>
                    </div>
                    <div className='flex justify-center gap-[4px]'>
                    {dayjs().format('HH:mm A')}
                        <div className='flex justify-center relative'>
                            <img className='absolute left-[8px] top-[5px]' width={16} height={8} src={check.src} alt='статус сообщения'>
                            </img>
                            <img width={16} height={8} src={check.src} alt='статус сообщения'>
                            </img>
                            <img
                            className='absolute bottom-[32px] left-[25px]'
                            src={tail.src}
                            width={16}
                            height={16}
                            alt=' '
                            ></img>
                        </div>
                    </div>
                </div>
            </div>
}
        </div> 
            {
            activeAncwer &&
            Users
            .map((user) => 
                {
                    // if (user.id: number === {getId}: number)
                    if (user.id === 1)
                    return (
                    <Answer 
                    key={user.id}
                    name={user.name}
                    post={user.post}
                    src={user.src}
                    />)      
                }) 
        } 
        </div> 
        </>
           
    )

}

export default Message;
