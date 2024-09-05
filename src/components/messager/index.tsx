import Message from './message'
import Footer from './footer'
import useStore from '../../stores/store'
import { useState } from 'react';
import { ChangeEvent } from "react";
import dayjs from 'dayjs'

const Bubble = () => {
    const storage = window.localStorage; 
    const [message, setMessage] = useState<any>()    
    const [editer, setEditer] = useState<any>()
    const [activeEdites, setActiveEdites] = useState<any>(false)

    const { messager, addMessage, correctMessage, removeMessage } = useStore(); 

    function changeMessage(e: ChangeEvent) {
        const value = (e.target as HTMLInputElement).value;
        setMessage(value);
        storage.setItem("message", JSON.stringify(value))
    }  
    const deleteMessage = (item: any) => {
        removeMessage(messager.indexOf(item))
    };
    const editMessage = (item: any) => {
        setEditer(messager.indexOf(item))
        setMessage(item);
        setActiveEdites(true)
    };
    const sendMessage = (e: { preventDefault: () => void; }) : any => {
        e.preventDefault(); 
        activeEdites ? correctMessage(editer, message) : addMessage(message, dayjs().format('HH:mm A'))
        setMessage("");
        setActiveEdites(false)
    }

    return (
        <form>
            <span className='py-[17px] flex justify-center text-sm text-[#666668] font-normal leading-loose'>
                {dayjs().format('MM/DD/YYYY')}
            </span>
            {
                messager
                    .map((item: any) => 
                    <>  
                        <Message 
                        key={item}
                        item={item.question}
                        date={item.time}
                        editMessage={editMessage}
                        deleteMessage={deleteMessage}
                        />
                    </>
            
                )
            }
        <Footer 
        message={message}
        changeMessage={changeMessage}
        sendMessage={sendMessage}
        />
        </form>
    )
}

export default Bubble;

            