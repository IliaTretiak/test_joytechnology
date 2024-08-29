import Message from './message'
import Answer from './answer'
import Users from '../../../public/data/users'

const Bubble = () => {
    return (
        <div className='flex flex-col gap-2 overflow-auto h-[100%]'>
            <span className='py-[17px] flex justify-center text-sm text-[#666668] font-normal leading-loose'>
                {new Date().toLocaleDateString('en-US', { month: 'numeric', day: 'numeric', year: 'numeric' })}
            </span>
            <Message />
            <Message />
            {
                Users
                .map((user) => 
                    {
                        if (user.id === 1)
                        return (
                        <Answer 
                        key={user.id}
                        name={user.name}
                        post={user.post}
                        src={user.src}
                        />)      
                    }) 
            }
            <Message />
            {
                Users
                .map((user) => 
                    {
                        if (user.id === 3)
                        return (
                        <Answer 
                        key={user.id}
                        name={user.name}
                        post={user.post}
                        src={user.src}
                        />)      
                    }) 
            }
            {
                Users
                .map((user) => 
                    {
                        if (user.id === 3)
                        return (
                        <Answer 
                        key={user.id}
                        name={user.name}
                        post={user.post}
                        src={user.src}
                        />)      
                    }) 
            }
            <Message />
            {
                Users
                .map((user) => 
                    {
                        if (user.id == 2)
                        return (
                        <Answer 
                        key={user.id}
                        name={user.name}
                        post={user.post}
                        src={user.src}
                        />)      
                    }) 
            }
             {
                Users
                .map((user) => 
                    {
                        if (user.id == 1)
                        return (
                        <Answer 
                        key={user.id}
                        name={user.name}
                        post={user.post}
                        src={user.src}
                        />)      
                    }) 
            }

        </div>
    )
}

export default Bubble;

