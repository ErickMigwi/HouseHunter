import React, {useState} from 'react'
import './AddHouse.css'
function AddHouse() {
    const [houseType ,setHouseType] = useState(null)
    const [location, setLocation] = useState(null)
    const [price, setPrice] =useState(null)
    const[availability, setAvailability] = useState(null)
    const [image, setImage] = useState(null)
    const takeHouseType = e=>setHouseType(e.target.value)
    const takeLocation = e=>setLocation(e.target.value)
    const takePrice = e=>setPrice(e.target.value)
    const takeAvailability = e=>setAvailability(e.target.value)
    const takeImage  = e=>setImage(e.target.value)
    const submitHouse = ()=>{
        //Add your post req for adding a house
        console.log(houseType,location, price, availability);
    }

  return (
    <div>
       <div id='mainSignUp'>
      <h3>Add House</h3>
     <p>House Type</p>
     <input type="text" placeholder='e.g bedsitter....' onChange={takeHouseType}/>
     <p>House Location</p>
     <input type="text" onChange={takeLocation} />
     <p>House Price</p>
     <input type="text"  onChange={takePrice}/>
     <p>House Availability</p>
     <input type="text" onChange={takeAvailability} />
     <p>House Images</p>
     <input type="text" onChange={takeImage} />
    </div>
    <button id='btn' onClick={submitHouse}>Submit House</button>
    </div>
    
  )
}

export default AddHouse
