import Image from 'next/image'
import indicator from '../../assets/images/indicator.svg'
import dayjs from 'dayjs'
import tail from '../../assets/images/tail_grey.svg'


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
        <div className="flex justify-start pr-20 pl-[51px] gap-5 relative">
            <div>
            <Image
            src={src}
            width={24}
            height={24}
            alt="Picture of the author"
            />  
            <Image
            src={indicator.src}
            className='absolute left-[67px] top-4'
            width={10}
            height={10}
            alt="онлайн индикатор"
            />
            </div>
            <img
            className='absolute bottom-[30px] left-[83px]'
            src={tail.src}
            width={16}
            height={16}
            alt=' '
            ></img>
            <div className='
            bg-[#F2F2F7] 
            text-[#2C2C2E]
            rounded-md relative py-1 px-2 pr-[15px] 
            grid grid-cols-2 gap-x-px-2
            max-w-[48%]
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
                    <span className='text-base hyphens-auto text-[#2C2C2E] font-normal leading-normal'>
                        Hello, World! 
                    </span>
                </div>
                <div className="flex gap-[4px] items-end justify-end">
    
                    <div className='flex items-center'>
                        <span className='flex items-end'>
                            {dayjs().format('HH:mm A')}
                        </span>
                    </div>
           
                </div>
            </div>
        </div>


    )
}

export default Answer;
