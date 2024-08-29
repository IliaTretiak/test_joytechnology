import Input from './input'
import smile from '../../assets/images/smile.svg'
import sand from '../../assets/images/plane.svg'
import useStore from '../../stores/store'
import Upload from './upload'
import { useState } from 'react';
import { ChangeEvent } from "react";

const Footer = () => {
    const storage = window.localStorage; 
    const [message, setMessage] = useState<any>(storage.getItem("message"))

    const { messager, addMessage } = useStore();

    const changeMessage = (e: ChangeEvent) => {
        const value = (e.target as HTMLInputElement).value;
        storage.setItem('message', value);
        setMessage(value);
    };
    const sendMessage = (e: { preventDefault: () => void; }) : any => {
        e.preventDefault();
        addMessage(message)
      }

    return (
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

    )
}
export default Footer;

