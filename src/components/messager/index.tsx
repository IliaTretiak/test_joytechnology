import Message from './message'
import Answer from './answer'
import Users from '../../../public/data/users'
import Footer from './footer'
import useStore from '../../stores/store'
import { useState } from 'react';
import { ChangeEvent } from "react";
import dayjs from 'dayjs'


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

    const data = new FormData();
    const handleChange = (e: ChangeEvent) => {
        const input= e.target as HTMLInputElement;
        const file: File = (input.files as FileList)[0];
            data.append("file", file);
    } 

    return (
        <>
        <div className='flex flex-col gap-2 overflow-auto h-[100%]'>
            <span className='py-[17px] flex justify-center text-sm text-[#666668] font-normal leading-loose'>
                {dayjs().format('MM/DD/YYYY')}
            </span>
            {
                messager
                    .map((item: any, key: any) => 
                    <Message 
                    key={key}
                    item={item.item}
                    editMessage={editMessage}
                    />
                )
            }
            {/* <Message 
            editMessage={editMessage}
            /> */}
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
        <Footer 
        message={message}
        messager={messager}
        changeMessage={changeMessage}
        sendMessage={sendMessage}
        handleChange={handleChange}
        />
        </>
    )
}

export default Bubble;

            