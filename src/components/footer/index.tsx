import Input from './input'
import smile from '../../assets/images/smile.svg'
import sand from '../../assets/images/plane.svg'
import useStore from '../../stores/store'
import Upload from './upload'
import { useState } from 'react';

const Footer = () => {
    const storage = window.localStorage; 
    const [message, setMessage] = useState(storage.getItem("message"));


    const { addMessage } = useStore();

    const changeMessage = (e) => {
        const value = e.target.value;
        storage.setItem('message', value);
        setMessage(value);
    };

    return (
        <form className="flex items-center border-2 border-solid shadow-sm border-[#E5E5EA] h-12 w-[100%]">
            <fieldset className='flex items-center gap-4'>
                <img src={smile.src} alt='смайлы'>
                </img>
                <Input 
                changeMessage={changeMessage}
                message={message}
                />
                <Upload />
                <img
                onClick={(message) => addMessage(message)}
                src={sand.src} alt='отправить сообщение'>
                </img>
            </fieldset>
        </form>
    )
}
export default Footer;

