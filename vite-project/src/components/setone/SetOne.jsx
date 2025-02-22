import React from "react"
import Button from "./Button"
import EmployeeCard from "./EmployeeCard"
import Image from "./Image"
import Stationery from "./Stationery"

const SetOne = () => {  
    const btnStyle = {
        backgroundColor: 'lightgreen',
        color : 'darkgreen',
        borderRadius : '5px',
        padding: '10px'
    }
    const stationeryItem = ['pen', 'pencil', 'ruler', 'eraser'];
    const imageLink ='https://cdn.pixabay.com/photo/2023/03/18/10/43/plum-blossoms-7860381_1280.jpg';
    const caption = 'Spring Flowers';
  return (
    <React.Fragment>
        <EmployeeCard name="Rakesh" designation="Software Developer" workExperience="10Years" />
        <Button mybtnStyle={btnStyle} />
        <Stationery header="Stationery Items" items={stationeryItem} />
        <Image img={imageLink} cap={caption} />
    </React.Fragment>
  )
}

export default SetOne