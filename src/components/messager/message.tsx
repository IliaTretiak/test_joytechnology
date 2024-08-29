import useStore from '../../stores/store'
import check from '../../assets/images/check.svg'
import pen from '../../assets/images/pen.svg'

const Message = () => {
        const { messager } = useStore();

        

    return (
        <div className="flex justify-end pl-20 pr-[51px]">
            <div className='
            bg-[#007AFF] 
            text-[#FFFFFF]
            rounded-md relative py-1 px-2 pr-[15px] 
            flex justify-between flex-col 
            max-w-[48%]
            '>
                <span>
                    {messager}
                </span>
            
                <div className="flex justify-between">
                    <div>
                        <img width={16} height={8} src={pen.src} alt='редактировать сообщение'></img>
                    </div>
                    <div className='flex justify-center gap-[4px]'>
                    
                        {new Date().toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true })}
                        <div className='flex justify-center relative'>
                            <img className='absolute left-[8px] top-[5px]' width={16} height={8} src={check.src} alt='статус сообщения'>
                            </img>
                            <img width={16} height={8} src={check.src} alt='статус сообщения'>
                            </img>
                        </div>
                    </div>
                </div>
            </div>
        </div>


    )
}

export default Message;
