import Image from 'next/image'
import users_online from '../../../public/data/users'

const Users = () => {
    return (
        <div className='flex items-center'>
            {
                users_online
                .map((user) => 
                <img
                key={user.id}
                className='inline-block rounded-full ring-4 ring-white' 
                src={user.src}
                width={24}
                height={24}
                alt={user.name}
                />
                )
            }
        </div>  
    )
}

export default Users;
