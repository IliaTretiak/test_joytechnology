import points from '../../assets/images/points.svg'

const Users = () => {
    return (
        <div className='flex items-center'>
            <img src={points.src}
            // className='absolute left-0' 
            width={16}
            height={16}
            alt='три точки'>
            </img>
        </div>
    )
}

export default Users;