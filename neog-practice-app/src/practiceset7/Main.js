import React from 'react'
import Weather from './Weather'
import UserDetails from './UserDetails'
import Movies from './Movies'
import CompanyResources from './CompanyResources'
import Quotes from './Quotes'

const Main = () => {
  return (
    <React.Fragment>
        <Weather />
        <UserDetails />
        <Movies />
        <CompanyResources />
        <Quotes />
    </React.Fragment>
  )
}

export default Main