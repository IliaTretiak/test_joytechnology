import Input from './input'
import smile from '../../assets/images/smile.svg'
import sand from '../../assets/images/plane.svg'
import Upload from './upload'
import { FC } from 'react';

interface InputProps {
    changeMessage?: any;
    sendMessage?: any;
    messager?: any;
    message?: string | undefined;
  }

const Footer:FC<InputProps> = ({
    changeMessage,
    sendMessage,
    message,
    messager,
}) => {
    return (
        <>
        <div className='pt-[60px]'>
        <form className="">
            <fieldset className='flex justify-between items-center gap-4 w-[auto] border-2 border-solid shadow-sm border-[#E5E5EA] h-12 '>
                <img
                className='pl-[20px]'
                src={smile.src} alt='смайлы'>
                </img>
                <Input 
                changeMessage={changeMessage}
                message={message}
                messager={messager}
                />
                <div className='pr-[20px] flex gap-[16px]'>
                <Upload />
                <button
                onClick={sendMessage}
                >
                <img
                className='w-[16px] h-[14px]'
                src={sand.src} alt='отправить сообщение'>
                </img>
                </button>
                </div>
            </fieldset>
        </form>
        </div>

  
        </>


    )
}
export default Footer;

