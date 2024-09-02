import dog from '../../assets/images/dog.svg'
import { FC } from 'react';

interface InputProps {
    handleChange?: any;
  }

const Upload:FC<InputProps> = ({
    handleChange,
}) => {
    return (
            <div>
                <input type="file"
                className='hidden'
                name="profile_pic"
                accept="image/.pdf,.docx,.doc,.jpeg,.jpg,.odt"
                />
                <label htmlFor="profile_pic">    
                <img 
                // className='cursor-pointer	'
                // onClick={handleChange}
                src={dog.src} alt='загрузить изображение'>
                </img>
                </label>
            </div>
    
    )
}
export default Upload;
