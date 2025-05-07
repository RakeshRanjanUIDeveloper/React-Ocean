import "./App.css";
//import FileExplorer from "./components/FileExplorer/FileExplorer";
import CustomButton from "./components/NeogCamp/PracticeSet1/CustomButton";
import EmployeeCard from "./components/NeogCamp/PracticeSet1/EmployeeCard";
import StationeryList from "./components/NeogCamp/PracticeSet1/StationeryList";
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
    </div>
  );
}

export default App;
