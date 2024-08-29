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

    // const { addMessage } = useStore();

    const changeMessage = (e: ChangeEvent) => {
        const value = (e.target as HTMLInputElement).value;
        storage.setItem('message', value);
        setMessage(value);
    };

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
                />
                <Upload />
                <img
                className='pr-[20px]'
                // onClick={(message) => addMessage(message)}
                src={sand.src} alt='отправить сообщение'>
                </img>
            </fieldset>
        </form>
        </div>

    )
}
export default Footer;

