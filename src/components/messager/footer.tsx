import Input from './input'
import smile from '../../assets/images/smile.svg'
import Upload from './upload'
import { FC } from 'react';

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
        
    return (
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
                        <svg width="16" height="14" viewBox="0 0 16 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M1.59168 1.71245L2.38083 6.25004H7.25001C7.66422 6.25004 8.00001 6.58582 8.00001 7.00004C8.00001 7.41425 7.66422 7.75004 7.25001 7.75004H2.38083L1.59168 12.2876L13.9294 7.00004L1.59168 1.71245ZM0.988747 7.00004L0.0636748 1.68087C-0.0111098 1.25086 0.128032 0.811352 0.436661 0.502722C0.824446 0.114942 1.40926 0.00231168 1.91333 0.218342L15.3157 5.9622C15.7308 6.14013 16 6.54835 16 7.00004C16 7.45172 15.7308 7.85995 15.3157 8.03788L1.91333 13.7817C1.40926 13.9978 0.824446 13.8851 0.436661 13.4974C0.128032 13.1887 -0.01111 12.7492 0.0636748 12.3192L0.988747 7.00004Z" 
                            className='hover:fill-[#007AFF]' fill="currentColor"/>
                        </svg>
                    </button>
                    </div>
                </fieldset>
            </form>
        </div>
    )
}
export default Footer;

