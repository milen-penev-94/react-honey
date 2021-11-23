import React, { useRef, useState, useEffect } from "react"
import { Form, Button, Alert, Card } from "react-bootstrap"
import { collection, where, query, getDocs, doc, updateDoc } from "firebase/firestore"
import { useAuth } from "../../../contexts/AuthContext"

import { db } from "../../../firebase"

const ProfileDetails = (
    currentUserUid
) => {
    const { currentUserData } = useAuth({})
    const [userData, setUserData] = useState([])
    const [successMessage, setSuccessMessage] = useState("")
    const [error, setError] = useState("")
    const [loading, setLoading] = useState(false)

    useEffect(() => {
      const getUser = async () => {
        // const userDataQuery = query(collection(db, "userData"), where("userId", "==", currentUserUid.currentUserUid));
        // const userDataSnapshot = await getDocs(userDataQuery);

        // if (!userDataSnapshot.empty) {
        //   userDataSnapshot.forEach((doc) => {
        //       setUserData(doc.data())  
        //   });
        // } 
    
        if(Object.keys(currentUserData).length !== 0) {
          setUserData(currentUserData) 
        }
      };
  
      getUser();
      
    }, [])

    const handleSubmit = async (e) => {
      e.preventDefault();

      let formData = new FormData(e.currentTarget);
      let {name, lastName, age, city, phone, address} = Object.fromEntries(formData)
      if(
              currentUserData.name !== name
          ||  currentUserData.lastName !== lastName
          ||  currentUserData.age !== age
          ||  currentUserData.city !== city
          ||  currentUserData.phone !== phone
          ||  currentUserData.address !== address
      ) 
      {

        ///const userDataQuery = query(collection(db, "userData"), where("userId", "==", currentUserUid.currentUserUid));
        const userDataQuery = query(collection(db, "userData"), where("userId", "==", currentUserData.userId));
        const userDataSnapshot = await getDocs(userDataQuery);
  
        let docId = null;
        userDataSnapshot.forEach((doc)  => {
          docId = doc.id;
        });
  
        const thisUserDate = doc(db, "userData", docId);
    
        
        try {
          await updateDoc(thisUserDate, {
            name: name,
            lastName: lastName,
            age: age,
            city: city,
            phone: phone,
            address: address 
          })
        
          setSuccessMessage("Successfully saved changes")
          setTimeout(function () {
            setSuccessMessage("")
          }, 5000);
        } catch (e) {
          setError("Error update user date:", e);
        }
      }
    }

    return(
     <>
        {successMessage && <Alert variant="success">{successMessage}</Alert>}
        {error && <Alert variant="danger">{error}</Alert>}
          <form onSubmit={handleSubmit}>
            <div>
              <label htmlFor="name">Name; </label>
              <input name="name" id="name" type="text"  defaultValue={currentUserData.name}/>
            </div>
            <div>
              <label htmlFor="lastName">Last Name:</label>
              <input name="lastName" id="lastName" type="text"  defaultValue={currentUserData.lastName}/>
            </div>
            <div>
              <label htmlFor="age">Age:</label>
              <input name="age" id="age" type="text"  defaultValue={currentUserData.age}/>
            </div>
            <div>
              <label htmlFor="city">City:</label>
              <input name="city" id="city" type="text"  defaultValue={currentUserData.city}/>
            </div>
            <div>
              <label htmlFor="phone">Phone:</label>
              <input name="phone" id="phone" type="text"  defaultValue={currentUserData.phone}/>
            </div>
            <div>
              <label htmlFor="address">Address:</label>
              <input name="address" id="address" type="text"  defaultValue={currentUserData.address}/>
            </div>

            {/* <div>
              <label htmlFor="address">Address:</label>
              <input name="address" id="address" type="text"  defaultValue={userData.address}/>
            </div> */}
            
            <button type="submit" disabled={loading}>Update</button>
          </form>
    </>
    )
}
export default ProfileDetails;