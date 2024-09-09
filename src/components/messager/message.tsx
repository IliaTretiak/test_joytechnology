import check from '../../assets/images/check.svg'
import pen from '../../assets/images/pen.svg'
import basket from '../../assets/images/basket.svg'
import tail from '../../assets/images/tail.svg'
import { FC } from 'react';
import Answer from './answer'
import users_online from '../../../public/data/users';


interface InputProps {
    editMessage?: any;
    item?: any;
    deleteMessage?: any;
    setTime?: any;
    editer?: any;
    date?: any;
    count?: any;
    answer?: any;
    sendedFile?: any;
    fileSelected?: any;
    fileSelectedResult?: any;
  }

const Message:FC<InputProps> = ({
    editMessage,
    item,
    deleteMessage,
    date,
    count,
    answer,
    sendedFile,
    fileSelected,
    fileSelectedResult
}) => {
    return (
        <>
            <div className="flex items-end flex-col justify-end pl-20 pr-[51px]">
                {item &&
                <div className='
                bg-[#007AFF] 
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
                        onClick={() => editMessage(item, count, answer)}
                        >
                            <img className='cursor-pointer' width={16} height={8} src={pen.src} alt='редактировать сообщение'></img>
                        </div>
                        <div
                        onClick={() => deleteMessage(count)}
                        >
                            <img className='cursor-pointer' width={16} height={8} src={basket.src} alt='редактировать сообщение'></img>
                        </div>
                        <div className='flex justify-center gap-[4px]'>
                            {date}
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
                {  
                sendedFile &&        
                <div className='
                    flex items-center justify-end
                    '>  
                    <img  
                    className='max-w-[60px] py-[10px] flex ' 
                    id="blah" 
                    src={fileSelectedResult} 
                    alt="предпросмотр загружаемого фото" />
                                        {fileSelected.name}          
                </div>
                }
            </div> 
            {
            users_online
            .map((user: any) => 
                {
                    if (user.id == answer)
                    return (
                    <Answer 
                    key={user.id}
                    name={user.name}
                    post={user.post}
                    src={user.src}
                    date={date}
                    />)      
                }) 
            } 
        </>
    )

}

export default Message;
