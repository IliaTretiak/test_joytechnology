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
    const [file, setFile] = useState([])

    const { messager, addMessage, correctMessage, removeMessage } = useStore(); 

    function changeMessage(e: ChangeEvent) {
        const value = (e.target as HTMLInputElement).value;
        setMessage(value);
        storage.setItem("message", JSON.stringify(value))
    }  
    const deleteMessage = (count: any) => {
        removeMessage(messager.findIndex(el => el.id === count))
    };
    const editMessage = (item: any, count: any) => {
        setEditer(messager.findIndex(el => el.id === count))
        setMessage(item);
        setActiveEdites(true)
    };
    const sendMessage = (e: { preventDefault: () => void; }) : any => {
        e.preventDefault(); 
        activeEdites ? correctMessage(editer, message, dayjs().format('HH:mm A')) : (message.length !== 0 ? addMessage(message, dayjs().format('HH:mm A')) : " ")
        setMessage("");
        setActiveEdites(false)
    }

    const data = new FormData();
    const handleChange = (e: ChangeEvent) => {
        const input = (e.target as HTMLInputElement).files[0];
        // const result = (e.target as HTMLInputElement).result
        // const size = input.size
        data.append("file", input);
        // setFile(input.name);
    };
    // const handleFilesChange = (event: ChangeEvent<HTMLInputElement>) => {
    //     const files: File[] = event.target.files
    //       ? Array.from(event.target.files)
    //       : [];
    //     // selectedFiles.handleChange(files);
    //     // onFilesSelected?.();
      
    //     // fileInputRef.current && (fileInputRef.current.value = '');
    //   };

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
                        key={item.id}
                        count={item.id}
                        item={item.question}
                        date={item.time}
                        answer={item.answer}
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
        handleChange={handleChange}
        />
        </form>
    )
}

export default Bubble;

            