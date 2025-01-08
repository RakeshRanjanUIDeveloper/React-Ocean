import React from 'react'
import Products from './Products'
import Todos from './Todos'
import Habits from './Habits'
import Videos from './Videos'
import Posts from './Posts'

const Main = () => {
  return (
    <div>
       <Products />
       <Todos />
       <Habits />
       <Videos />
       <Posts />
    </div>
  )
}

export default Main