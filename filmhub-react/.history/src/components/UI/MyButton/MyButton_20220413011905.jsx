import React from 'react'

const MyButton = ({props, children}) => {
  return (
    <button {...props}>{children}</button>
  )
}

export default MyButton