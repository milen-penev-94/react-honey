import React, { useState } from 'react';
import { collection, where, query, getDocs, doc, updateDoc } from 'firebase/firestore';
import { useAuth } from '../../../contexts/AuthContext';
import { db } from '../../../firebase';
import './ProfileDetails.css';

const ProfileDetails = () => {
    const { currentUserData } = useAuth({})
    const [successMessage, setSuccessMessage] = useState("")
    const [errorMessage, setErrorMessage] = useState("")
    const [loading, setLoading] = useState(false)

    const handleSubmit = async (e) => {
      e.preventDefault();

      let form = e.currentTarget
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

        let docId = null;
        try {
          const userDataQuery = await query(collection(db, "userData"), where("userId", "==", currentUserData.userId));
          await getDocs(userDataQuery)
          .then((snapshot) => {
            snapshot.docs.forEach((doc) => {
              docId = doc.id;
            })
            setLoading(true)
          })
          
        }
        catch {
          setErrorMessage('Няма данни за такъв потребител')
        }
        setLoading(true)

        try {
          const thisUserDate = doc(db, "userData", docId);
          await updateDoc(thisUserDate, {
            name: name,
            lastName: lastName,
            age: age,
            city: city,
            phone: phone,
            address: address 
          })
          .then(() => {
            setSuccessMessage("Successfully saved changes")
            setTimeout(function () {
              setSuccessMessage("")
              form.reset()
            }, 5000);
          })
        } catch {
          setErrorMessage('ГРЕШКА: Проблем със запазването на данните за профила')
        }

      }
    }

    return(
     <div className="profile-details-component">
        {successMessage && <div className="success-message">{successMessage}</div>}
        {errorMessage && <div className="error-message"><div>{errorMessage}</div></div>}

          <h2>Информация за потребителя</h2>

          <form onSubmit={handleSubmit}>
            <div className="row">
              <div className="col-lg-6 col-md-6 col-sm-12">
                <label htmlFor="name">Име: </label>
                <input name="name" id="name" type="text"  defaultValue={currentUserData.name}/>
              </div>
              <div className="col-lg-6 col-md-6 col-sm-12">
                <label htmlFor="lastName">Фамилия:</label>
                <input name="lastName" id="lastName" type="text"  defaultValue={currentUserData.lastName}/>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-6 col-md-6 col-sm-12">
                <label htmlFor="age">Години:</label>
                <input name="age" id="age" type="text"  defaultValue={currentUserData.age}/>
              </div>
              <div className="col-lg-6 col-md-6 col-sm-12">
                <label htmlFor="city">Град:</label>
                <input name="city" id="city" type="text"  defaultValue={currentUserData.city}/>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-6 col-md-6 col-sm-12">
                <label htmlFor="phone">Телефон:</label>
                <input name="phone" id="phone" type="text"  defaultValue={currentUserData.phone}/>
              </div>
              <div className="col-lg-6 col-md-6 col-sm-12">
                <label htmlFor="address">Адрес:</label>
                <input name="address" id="address" type="text"  defaultValue={currentUserData.address}/>
              </div>
            </div>
            
            <button type="submit" disabled={loading}>Редактирай</button>
          </form>
    </div>
    )
}
export default ProfileDetails;