import React from 'react'

const UserInfo = ({prop}) => {
    
    const [name, age] = prop
  return (
    <>
        <h3>Name={name}, Age={age} from Parent</h3>
    </>
  )
}

export default UserInfo