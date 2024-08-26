import avatar_01 from '../../assets/images/avatar_01.png'
import avatar_02 from '../../assets/images/avatar_02.png'
import avatar_03 from '../../assets/images/avatar_03.png'
import avatar_04 from '../../assets/images/avatar_04.png'

const Users = () => {
    return (
        <div className='flex items-center relative'>
            <img src={avatar_01.src}
            // className='absolute left-[0px]' 
            width={24}
            height={24}
            alt='изображение пользователя'>
            </img>
            <img src={avatar_02.src}
            className='absolute left-5' 
            width={24}
            height={24}
            alt='изображение пользователя'>
            </img>         
            <img src={avatar_03.src}
            className='absolute left-10' 
            width={24}
            height={24}
            alt='изображение пользователя'>
            </img>         
            <img src={avatar_04.src}
            className='absolute left-[60px]' 
            width={24}
            height={24}
            alt='изображение пользователя'>
            </img>
        </div>
    )
}

export default Users;