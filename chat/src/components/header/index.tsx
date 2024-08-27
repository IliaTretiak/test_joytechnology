import Title from './title'
import Users from './users'
import Kebab from './kebab'

const Header = () => {
    return (
        <div className='flex justify-between px-[17px] py-[13px] border-2 border-solid shadow-sm border-[#E5E5EA]'>
            <Users />
            <Title />
            <Kebab />
        </div>

    )
}

export default Header;