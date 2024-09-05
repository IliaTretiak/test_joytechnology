import check from '../../assets/images/check.svg'
import pen from '../../assets/images/pen.svg'
import basket from '../../assets/images/basket.svg'
import tail from '../../assets/images/tail.svg'
import { FC } from 'react';
import dayjs from 'dayjs'
import Answer from './answer'
import { useState, useEffect } from 'react';
import users_online from '../../../public/data/users';

interface InputProps {
    editMessage?: any;
    item?: any;
    deleteMessage?: any;
  }

const Message:FC<InputProps> = ({
    editMessage,
    item,
    deleteMessage
}) => {
    const [activeAnswer, setActiveAnswer] = useState<any>(true)
    // useEffect(() => {
    //     setTimeout(() => setActiveAnswer((prev: any) => prev = true), 800)
    //   }, [item.length !== 0])

    return (
        <>
            <div className="flex justify-end pl-20 pr-[51px]">
                {item &&
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
                        onClick={() => editMessage(item)}
                        >
                            <img className='cursor-pointer' width={16} height={8} src={pen.src} alt='редактировать сообщение'></img>
                        </div>
                        <div
                        onClick={() => deleteMessage(item)}
                        >
                            <img className='cursor-pointer' width={16} height={8} src={basket.src} alt='редактировать сообщение'></img>
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
            activeAnswer &&
            users_online
            .map((user: any) => 
                {
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
        </>
    )

}

export default Message;
