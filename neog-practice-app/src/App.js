import './App.css';
// import Article from './practiceset2/Article';
// import Gadgets from './practiceset2/Gadgets';
// import Greeting from './practiceset2/Greeting';
// import Phones from './practiceset2/Phones';
// import Product from './practiceset2/Product';
// import UserProfile from './practiceset2/UserProfile';
import About from './Assignment2/About';
import Article from './Assignment2/Article';
import ColorPicker from './Assignment2/ColorPicker';
import Gadgets from './Assignment2/Gadgets';
import Greeting from './Assignment2/Greeting';
import Mobiles from './Assignment2/Mobiles';
import MyGadgets from './Assignment2/MyGadgets';
import Product from './Assignment2/Product';
import UserProfile from './Assignment2/UserProfile';
// import EmployeeCard from './components/EmployeeCard';
// import EmployeeDetails from './components/EmployeeDetails';

function App() {
  const userData = {
    name: 'John',
    age: 25,
    email: 'john@example.com',
   }
   const products = [
    {
       id: 1,
       name: 'keyboard',
       description: 'Logitech Mechanical Keyboard',
       price: 2000,
    },
    { id: 2, name: 'mouse', description: 'Dell Wireless Mouse', price: 1200 },
    {
       id: 3,
       name: 'monitor',
       description: 'Lenovo 32-inch display Monitor',
       price: 10000,
    },
    { id: 4, name: 'mobile', description: 'iPhone 13 Pro Max', price: 140000 },
    {
       id: 5,
       name: 'speakers',
       description: 'Creative Desktop Speakers',
       price: 5000,
    },
    {
       id: 6,
       name: 'headphones',
       description: 'Sony over-the-ear wired Headphones with mic',
       price: 1500,
    },
    { id: 7, name: 'mobile', description: 'iPhone 12', price: 90000 },
    ]
    const electronics = [
      {
         id: 1,
         name: 'keyboard',
         description: 'Logitech Mechanical Keyboard',
         price: 2000,
      },
      { id: 2, name: 'mouse', description: 'Dell Wireless Mouse', price: 1200 },
      { id: 3, name: 'mobile', description: 'iPhone 13', price: 61000 },
      {
         id: 4,
         name: 'monitor',
         description: 'Lenovo 32-inch display Monitor',
         price: 10000,
      },
      { id: 5, name: 'mobile', description: 'iPhone 13 Pro Max', price: 140000 },
      {
         id: 6,
         name: 'speakers',
         description: 'Creative Desktop Speakers',
         price: 5000,
      },
      {
         id: 7,
         name: 'headphones',
         description: 'Sony over-the-ear wired Headphones with mic',
         price: 1500,
      },
      { id: 8, name: 'mobile', description: 'iPhone 12', price: 90000 },
      ]
      const myGadgets = [
        {
           id: 1,
           name: 'keyboard',
           description: 'Logitech Mechanical Keyboard',
           price: 2000,
        },
        { id: 2, name: 'mouse', description: 'Dell Wireless Mouse', price: 1200 },
        {
           id: 3,
           name: 'speakers',
           description: 'Bose L1 Pro32 Portable',
           price: 256000,
        },
        { id: 4, name: 'mobile', description: 'iPhone 13', price: 61000 },
        {
           id: 5,
           name: 'monitor',
           description: 'Lenovo 32-inch display Monitor',
           price: 10000,
        },
        { id: 6, name: 'mobile', description: 'iPhone 13 Pro Max', price: 140000 },
        {
           id: 7,
           name: 'speakers',
           description: 'Creative Desktop Speakers',
           price: 5000,
        },
        {
           id: 8,
           name: 'headphones',
           description: 'Sony over-the-ear wired Headphones with mic',
           price: 1500,
        },
        { id: 9, name: 'mobile', description: 'iPhone 12', price: 90000 },
        ]
       

 const title = 'React is awesome'
 const content = 'React is a JavaScript library for building user interfaces.'
 const heading = 'About Me'
 const name = 'Preeti' // you can put your name
 const learning = 'I am learning React JS currently at neoG Camp.'

  return (
    <div className="App">
       {/*<EmployeeCard name="Rakesh" designation="SE" experience="test" />
       <EmployeeDetails />
       <Greeting name='Rakesh'/>
       <Product name='chair' price='10$'/>*/}
       <UserProfile user={userData}/>
       <Gadgets products={products}/>
       <Mobiles products={electronics}/>
       <Article title={title} content={content}/>
       <About heading={heading} name={name} learning={learning}/>
       <MyGadgets products={myGadgets}/> 
       <ColorPicker/>

  {/* <Greeting name="Rakesh" />
     <Product name="Mobile" price={50000} />
     <UserProfile user={userData} />
     <Gadgets products={products} />
     <Phones products={electronics} />
     <Article title={title} content={content} />*/}
    </div>
  );
}

export default App;
