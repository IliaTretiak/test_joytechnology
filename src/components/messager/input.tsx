
import { FC } from 'react';
interface InputProps {
    changeMessage?: any;
    message?: string | undefined;
    messager?: any;
  }

const Input:FC<InputProps> = ({
    changeMessage,
    message
}) => {
    return (
        <input
        className="outline-0 w-[100%]"
        type='text' 
        name='message'
        placeholder='Start typing...'
        value={message}
        onInput={(e) => changeMessage(e)}
        />  
    )
}
export default Input;

