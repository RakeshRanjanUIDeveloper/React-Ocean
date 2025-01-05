import React from 'react'
import UserStatusList from './UserStatusList'
import Products from './Products'
import Image from './Image'

const Main = () => {
  return (
    <div>
        <UserStatusList  />
        <Products />
        <Image heading="User Profile" height='200px' width='300px' />
    </div>
  )
}

export default Main