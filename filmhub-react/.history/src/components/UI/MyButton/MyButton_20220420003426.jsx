import React from 'react'
import classes from "./MyButton.module.scss"

const MyButton = ({children, ...props}) => <button {...props} className={classes.button}>{children}</button>

export default MyButton