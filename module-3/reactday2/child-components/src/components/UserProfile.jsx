import React from 'react'
import UserInfo from './UserInfo'

const UserProfile = () => {

    const name ="Santosh"
    const age = 25


  return (
  <>
  <UserInfo prop={[name, age]}/>
  </>
  )
}

export default UserProfile