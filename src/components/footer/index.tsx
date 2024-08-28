import smile from '../../assets/images/smile.svg'
import sand from '../../assets/images/plane.svg'
import dog from '../../assets/images/dog.svg'

const Footer = () => {
    return (
        <form className="flex items-center border-2 border-solid shadow-sm border-[#E5E5EA] h-12 w-[100%]">
            <fieldset className='flex items-center gap-4'>
                <img src={smile.src} alt='смайлы'>
                </img>
                <input
                className="outline-0 w-[100%]"
                type='text' 
                name='message'
                placeholder='Start typing...'
                value=""
                />
                <img src={dog.src} alt='отметить пользователя'>
                </img>
                <img src={sand.src} alt='отправить сообщение'>
                </img>
            </fieldset>
        </form>
    )
}
export default Footer;

