import dog from '../../assets/images/dog.svg'

const Upload = ({
    handleChange,
    uploadFile
}) => {
    return (
            <label htmlFor="photo">    
                <input 
                type="file"
                className='hidden'
                id="photo"
                name="photo"                
                accept="image/.webp, png, jpg"
                multiple={false}
                onChange={handleChange}
                />
                <img 
                className='cursor-pointer	'
                onChange={handleChange}
                src={dog.src} alt='загрузить изображение'>
                </img>
            </label>    
    )
}
export default Upload;
