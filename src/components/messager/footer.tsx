import Input from './input'
import smile from '../../assets/images/smile.svg'
import Upload from './upload'
import { FC } from 'react';
import { useState } from "react";
import Image from 'next/image'

interface InputProps {
    changeMessage?: any;
    sendMessage?: any;
    messager?: any;
    message?: string | undefined;
    handleImageChange?: any;
    uploadFile?: any;
    fileSelectedResult?: any;
    preview?: any;
    fileSelected?: any
  }

const Footer:FC<InputProps> = ({
    changeMessage,
    sendMessage,
    message,
    handleImageChange,
    uploadFile,
    fileSelectedResult,
    preview,
    fileSelected
}) => {
        
        const [isHover, setisHover] = useState('');
        // Функции onChangeColor, onChangeIconCall изменяют цвет кнопки, производя замену состояния isPressCallBtn, isHoverCallBtn при наведении курсора
        const onChangeColor = () => {
            setisHover("_b")
        }
        // Функции onChangeColorBack, onChangeIconCalled изменяют цвет кнопки, производя замену состояний isPressCallBtn, isHoverCallBtn при покидании области разметки изображения
        const onChangeColorBack = () => {
            setisHover("")
        }

    return (
        <>
        <div className='pt-[30px]'>
            {  
            preview &&        
            <div className='
                bg-[#f3f5f5] 
                rounded-md 
                flex items-center justify-end gap-2
                '>  
                {fileSelected.name}          
                <img  
                className='py-[10px] pr-[30px] flex' 
                id="blah" 
                src={fileSelectedResult} 
                alt="предпросмотр загружаемого фото" />
            </div>
            }
            <form>
                <fieldset className='flex justify-between items-center gap-4 w-[auto] border-2 border-solid shadow-sm border-[#E5E5EA] h-12 '>
                    <img
                    className='pl-[20px]'
                    src={smile.src} alt='смайлы'>
                    </img>
                    <Input 
                    changeMessage={changeMessage}
                    message={message}
                    />
                    <div className='pr-[0px] flex gap-[16px] w-[100px]'>
                    <Upload 
                    handleChange={handleImageChange}
                    uploadFile={uploadFile}
                    />
                    <button
                    onClick={sendMessage}
                    type='submit'
                    >
                    <Image
                    onMouseEnter={() => onChangeColor()} 
                    onMouseLeave={() => onChangeColorBack()}
                    width={20}
                    height={16}
                    src={`/images/plane${isHover}.svg`}
                    alt='отправить сообщение'
                    />
                    </button>
                    </div>
                </fieldset>
            </form>
        </div>

  
        </>


    )
}
export default Footer;

