import Message from './message'
import Footer from './footer'
import useStore from '../../stores/store'
import { useState } from 'react';
import { ChangeEvent, MouseEvent } from "react";
import dayjs from 'dayjs'

const Bubble = () => {
    const storage = window.localStorage; 
    const [message, setMessage] = useState<any>()    
    const [editer, setEditer] = useState<any>()
    const [answer, setAnswer] = useState<any>()
    const [activeEdites, setActiveEdites] = useState<any>(false)
    const [fileSelected, setFileSelected] = useState<File>() 
    const [fileSelectedResult, setFileSelectedResult] = useState<any>() 
    const [preview, setPreview] = useState<any>(false)
    const [sendedFile, setSendedFile] = useState<any>(false)

    const { messager, addMessage, correctMessage, removeMessage } = useStore(); 

    function changeMessage(e: ChangeEvent) {
        const value = (e.target as HTMLInputElement).value;
        setMessage(value);
        storage.setItem("message", JSON.stringify(value))
    }  
    const deleteMessage = (count: any) => {
        removeMessage(messager.findIndex(el => el.id === count))
    };
    const editMessage = (item: any, count: any, answer: any) => {
        setEditer(messager.findIndex(el => el.id === count))
        setMessage(item);
        setAnswer(answer)
        setActiveEdites(true)
    };
    const sendMessage = (e: { preventDefault: () => void; }) : any => {
        e.preventDefault(); 
        activeEdites ? correctMessage(editer, message, dayjs().format('HH:mm A'), answer) : (message.length !== 0 ? addMessage(message, dayjs().format('HH:mm A')) : " ")
        setMessage("");
        setActiveEdites(false)
        setPreview(false)
        fileSelected ? setSendedFile(true) : ""
    }

    const formData = new FormData();
    const handleImageChange = function (e: ChangeEvent) {
        const fileList = (e.target as HTMLInputElement).files;
        if (!fileList) return;
        setFileSelected(fileList[0]);
        setFileSelectedResult(URL.createObjectURL(fileList[0]));
        setPreview(true)
        if (fileSelected) {
                formData.append("image", fileSelected, fileSelected.name);
            }
    };
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
                        count={item.id}
                        item={item.question}
                        date={item.time}
                        answer={item.answer}
                        editMessage={editMessage}
                        deleteMessage={deleteMessage}
                        sendedFile={sendedFile}
                        fileSelected={fileSelected}
                        fileSelectedResult={fileSelectedResult}
                        />
                    </>
                )
            }
         
            <Footer 
            message={message}
            changeMessage={changeMessage}
            sendMessage={sendMessage}
            handleImageChange={handleImageChange}
            fileSelectedResult={fileSelectedResult}
            fileSelected={fileSelected}
            preview={preview}
            />
        </form>
    )
}

export default Bubble;

            