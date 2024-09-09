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
    const [answer, setAnswer] = useState<any>()
    const [activeEdites, setActiveEdites] = useState<any>(false)
    const [fileSelected, setFileSelected] = useState<File>() 
    const [fileSelectedResult, setFileSelectedResult] = useState<any>('') 
    const [nameAddedFile, setNameAddedFile] = useState<any>() 
    const [addedFile, setAddedFile] = useState<any>() 
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
    const editMessage = (item: any, count: any, answer: any, name: any, src: any, file: boolean) => {
        setEditer(messager.findIndex(el => el.id === count))
        setMessage(item);
        setAnswer(answer)
        setNameAddedFile(name)
        setFileSelectedResult(src)
        setAddedFile(file)
        setActiveEdites(true)
    };
    const sendMessage = (e: { preventDefault: () => void; }) : any => {
        e.preventDefault(); 
        activeEdites 
        ? correctMessage(editer, message, dayjs().format('HH:mm A'), answer, nameAddedFile, fileSelectedResult, addedFile) 
        : ((message.length !== 0 || fileSelected) 
            ? addMessage(message, dayjs().format('HH:mm A'), (fileSelected ? fileSelected.name : ""), (fileSelectedResult ? fileSelectedResult : ""), (fileSelectedResult.length !== 0 ? true : false)) 
            : " ")
        setMessage("");
        setFileSelectedResult("")
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
        <form className='flex justify-between flex-col'>
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
                        name={item.file_name}
                        src={item.file_src}
                        file={item.file}
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
            handleImageChange={handleImageChange}
            fileSelectedResult={fileSelectedResult}
            fileSelected={fileSelected}
            preview={preview}
            />
        </form>
    )
}

export default Bubble;

            