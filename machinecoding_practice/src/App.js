import "./App.css";
//import FileExplorer from "./components/FileExplorer/FileExplorer";
import CustomButton from "./components/NeogCamp/PracticeSet1/CustomButton";
import CustomImage from "./components/NeogCamp/PracticeSet1/CustomImage";
import Employee from "./components/NeogCamp/PracticeSet1/Employee";
import EmployeeCard from "./components/NeogCamp/PracticeSet1/EmployeeCard";
import Products from "./components/NeogCamp/PracticeSet1/Products";
import StationeryList from "./components/NeogCamp/PracticeSet1/StationeryList";
import Student from "./components/NeogCamp/PracticeSet1/Student";
//import ProgressMain from "./components/ProgressBar/ProgressMain";
//import SearchBar from "./components/SearchBar/SearchBar";
function App() {
  const btnStyle = {
    backgroundColor: "lightgreen",
    color: "darkgreen",
    borderRadius: "5px",
    padding: "10px",
  };
  const header ="Stationery Items";
  const items = ['pen', 'pencil', 'ruler', 'eraser']
  const imageLink =
  'https://cdn.pixabay.com/photo/2023/03/18/10/43/plum-blossoms-7860381_1280.jpg'
 const caption = 'Spring Flowers'
 const products = [
  { name: 'Perk', quantity: 10, sales: 7 },
  { name: 'Pepsi', quantity: 10, sales: 20 },
  { name: 'Coke', quantity: 18, sales: 50 },
  { name: 'Maggi', quantity: 41, sales: 22 },
  { name: '5Star', quantity: 7, sales: 9 },
 ]
 const student = {
  name: 'John Doe',
  english: 90,
 maths: 80,
 computers: 70,
}

  return (
    <div className="App">
      {/* <ProgressMain /> 
    <FileExplorer />
    <SearchBar />*/}

      <EmployeeCard
        name="Rakesh"
        designation="Software Engineer"
        workExperience="10 Years"
      />
      <CustomButton text="Start" btnStyle={btnStyle} />
      <StationeryList header={header} items={items} />
      <CustomImage imageLink={imageLink} caption={caption} />
      <Products products={products} />
      <Student student={student} />
      <Employee  />
    </div>
  );
}

export default App;
