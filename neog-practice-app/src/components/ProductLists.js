import React from 'react'

const s = () => {
    const products = [
        { name: 'Perk', quantity: 10, sales: 7 },
        { name: 'Pepsi', quantity: 10, sales: 20 },
        { name: 'Coke', quantity: 18, sales: 50 },
        { name: 'Maggi', quantity: 41, sales: 22 },
        { name: '5Star', quantity: 7, sales: 9 },
        ]
  return (
    <React.Fragment>
        <h2>Product Names</h2>
        <ul>
            {
                products.map((product, index) => (<li key={index}>{product.name}</li>))
            }
        </ul>
    </React.Fragment>
  )
}

export default s