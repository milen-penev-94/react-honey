import { db } from "../firebase"
import {  addDoc, getDocs, getDoc, doc, deleteDoc, query, collection } from "firebase/firestore"
import * as productService from './productService';

export  async function save(order) {

    let successSave = false
    let addOrder = await addDoc(collection(db, "orders"), {
        ...order
    })   

    if (addOrder.id) {
        
        for (const property in order.orderedProducts) {
            productService.getOne(property)
            .then(product => {
                product.quantity = product.quantity - order.orderedProducts[property]
                productService.update(product, property)
                .then(result => {
                    successSave = true
                })
                .catch(err => {
                    console.log(err)
                })
            })   
            .catch(err => {
                console.log(err)
            })
        }
    }

    return successSave
  
}

export  async function getAll() {
    const allOrdersArray = []
    const allOrdersQuery = query(collection(db, "orders"));
    const snapshot =  await getDocs(allOrdersQuery)
        
    snapshot.docs.forEach((doc) => {
        let orderData = Object.assign(doc.data(), {docId: doc.id})
        allOrdersArray.push(orderData)
    })

    return allOrdersArray
}

export  async function getOne(id) {

    let order = null
    let orderQuery = doc(db, "orders", id);
    let docSnap = await getDoc(orderQuery);

    if (docSnap.exists()) {
        order = docSnap.data()
    }

    return order
}

export async function remove(docId) {

    let successDelete = false
    let query = doc(db, "orders", docId)

    if(query) {
    await deleteDoc(query)
        successDelete = true;
    }

    return successDelete
}