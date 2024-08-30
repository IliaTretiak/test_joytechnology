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
        <div className='w-[100%] pt-[60px]'>
        <form className="flex items-center border-2 border-solid shadow-sm border-[#E5E5EA] h-12 ">
            <fieldset className='flex items-center gap-4'>
                <img
                className='pl-[20px]'
                src={smile.src} alt='смайлы'>
                </img>
                <Input 
                changeMessage={changeMessage}
                message={message}
                messager={messager}
                />
                <Upload />
                <button
                onClick={sendMessage}
                >
                <img
                className='pr-[20px]'
                src={sand.src} alt='отправить сообщение'>
                </img>
                </button>
            </fieldset>
        </form>
        </div>

        </>


    )
}
export default Footer;

