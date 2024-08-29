import check from '../../assets/images/check.svg'
import Image from 'next/image'

import { FC } from 'react';
interface MessageProps {
    name?: string | undefined;
    post?: string | undefined;
    src?: any;

  }

const Answer:FC<MessageProps> = ({
    name,
    post,
    src
}) => {
    return (
        <div className="flex justify-start pr-20 pl-[51px] gap-1">
            <div>
            <Image
            // src="/images/avatar_01.png"
            src={src}
            width={24}
            height={24}
            alt="Picture of the author"
            />
            </div>
            <div className='
            bg-[#F2F2F7] 
            text-[#2C2C2E]
            rounded-md relative py-1 px-2 pr-[15px] 
            grid grid-cols-2 gap-x-px-2
            '>
                <div>
                    <div className='flex gap-[10px] align-baseline'>
                        <span className='text-base text-[#2C2C2E] font-semibold leading-normal'>
                            {name}
                        </span>
                        <span className='text-sm text-[#666668] font-normal leading-loose'>
                            {post}
                        </span>
                    </div>
                    <span className='text-base text-[#2C2C2E] font-normal leading-normal'>
                        Answer
                    </span>
                </div>
                <div className="flex gap-[4px] items-end ">
                        <span className='flex items-end'>
                            {new Date().toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true })}
                        </span>
                        <div className='relative'>
                            <img className='absolute left-[8px]' width={16} height={8} src={check.src} alt='статус сообщения'>
                            </img>
                            <img width={16} height={8} src={check.src} alt='статус сообщения'>
                            </img>
                        </div>
                </div>
            </div>
        </div>


    )
}

export default Answer;
