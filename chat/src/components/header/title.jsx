import classes from '../../assets/styles/index.module.scss'

const Title = () => {
    return (
        <div className={classes.header__titleContainer}>
            {/* <h2 className={classes.header__title}> */}
            <h2 className="text-3xl font-bold">            
                🦄 Team Unicorns
            </h2>
            <span className={classes.header__titleSec}>
                last seen 45 minutes ago
            </span>
        </div>
    )
}

export default Title;