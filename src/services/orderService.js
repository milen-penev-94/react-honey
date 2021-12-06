import { db } from "../firebase"
import {  addDoc, collection } from "firebase/firestore"

export  async function save(order) {

    try {
        let successSave = false
        let addOrder = await addDoc(collection(db, "orders"), {
            ...order
        })   

        if (addOrder.id) {
            successSave = true
        }

        return successSave
    } catch(error) {
        console.log(error)
    }
}