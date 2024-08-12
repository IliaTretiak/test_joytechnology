"use client"

import classes from '../assets/styles/index.module.scss';

const Page = () => {
    return (
      <>
      <div className={classes.cover}>
        {/* 123 */}
        <h1 className={classes.cover__title}>Chat</h1>
        <h2 className={classes.cover__titleSec}>UI kit.</h2>
        <div className={classes.cover__containerOfButtons}>
          <button className={classes.cover__button}>
          free
          </button>
          <button className={classes.cover__button}>
          variants
          </button>          
          <button className={classes.cover__button}>
          auto layout
          </button>
        </div>
        <div className={classes.cover__eclipse_01}>
        </div>
        <div className={classes.cover__eclipse_02}>
        </div>
        <div className={classes.cover__eclipse_03}>
        </div>
        <div className={classes.cover__eclipse_04}>
        </div>
        <div className={classes.cover__eclipse_05}>
        </div>
      </div>
     </> 
    )
}

export default Page;