import Message from './message'
import Answer from './answer'
import Users from '../../../public/data/users'
import Footer from './footer'
import useStore from '../../stores/store'
import { useState } from 'react';
import { ChangeEvent } from "react";

const Bubble = () => {
    const storage = window.localStorage; 
    const [message, setMessage] = useState<any>(storage.getItem("message"))

    const { messager, addMessage } = useStore();

    const changeMessage = (e: ChangeEvent) => {
        const value = (e.target as HTMLInputElement).value;
        storage.setItem('message', value);
        setMessage(value);
    };
    const editMessage = (e: ChangeEvent) => {
        setMessage(messager);
    };
    const sendMessage = (e: { preventDefault: () => void; }) : any => {
        e.preventDefault();
        addMessage(message)
        setMessage("");
    }
    return (
        <>
        <div className='flex flex-col gap-2 overflow-auto h-[100%]'>
            <span className='py-[17px] flex justify-center text-sm text-[#666668] font-normal leading-loose'>
                {new Date().toLocaleDateString('en-US', { month: 'numeric', day: 'numeric', year: 'numeric' })}
            </span>
            <Message 
            editMessage={editMessage}
            />
             {
                Users
                .map((user) => 
                    {
                        if (user.id == 1)
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
        <div className='flex items-end'>
            <Footer 
            message={message}
            messager={messager}
            changeMessage={changeMessage}
            sendMessage={sendMessage}
            />
        </div>
        </>
    )
}

export default Bubble;

            