
const Input = ({
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

