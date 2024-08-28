import Message from './message'
import Answer from './answer'

const Bubble = () => {
    return (
        <div className='flex flex-col gap-2 '>
            <span className='py-[17px] flex justify-center text-sm text-[#666668] font-normal leading-loose'>
                {new Date().toLocaleDateString('en-US', { month: 'numeric', day: 'numeric', year: 'numeric' })}
            </span>
            <Message />
            <Answer />
        </div>
    )
}

export default Bubble;

