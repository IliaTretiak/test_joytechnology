import Message from './message'
import Answer from './answer'

const Bubble = () => {
    return (
        <div className='flex flex-col gap-2'>
            <Message />
            <Answer />
        </div>
    )
}

export default Bubble;
