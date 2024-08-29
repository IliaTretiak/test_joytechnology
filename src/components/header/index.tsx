import Title from './title'
import Users from './users'
import Kebab from './kebab'

const Header = () => {
    return (
        <div className='grid grid-cols-3 px-[17px] py-[13px] border-2 border-solid shadow-sm border-[#E5E5EA] relative'>
            <div className='flex justify-start'>
            <Users />
            </div>
            <div className='flex justify-center'>
            <Title />                
            </div>
            <div className='flex justify-end'>
            <Kebab />
            </div>
        </div>

    )
}

export default Header;