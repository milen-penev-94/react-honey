import { db } from "../firebase"
import { getDocs, getDoc, doc, addDoc, updateDoc, deleteDoc, where, collection, query } from "firebase/firestore"

export  async function getAll() {

    let allProductsArray = []
    const allProductsQuery = query(collection(db, "products"));
    const snapshot =  await getDocs(allProductsQuery)
    
    snapshot.docs.forEach((doc) => {
        let categoryData = Object.assign(doc.data(), {docId: doc.id})
        allProductsArray.push(categoryData)
    })

    return allProductsArray

}

export  async function getAllEnabled() {
 
    let allProductsArray = []
    const allProductsQuery = query(collection(db, "products"), where("isEnabled", "==", "1"));
    const snapshot =  await getDocs(allProductsQuery)

    snapshot.docs.forEach((doc) => {
        let categoryData = Object.assign(doc.data(), {docId: doc.id})
        allProductsArray.push(categoryData)
    })

    return allProductsArray
 
}

export  async function getAllEnabledProductWithCat(category) {
 
    let allProductsArray = []
    const allProductsQuery = query(collection(db, "products"), where("isEnabled", "==", "1"), where("category", "==", category));
    const snapshot =  await getDocs(allProductsQuery)
    
    snapshot.docs.forEach((doc) => {
        let categoryData = Object.assign(doc.data(), {docId: doc.id})
        allProductsArray.push(categoryData)
    })
    
    return allProductsArray
 
}

export  async function getOne(id) {
   
    let product = null
    let productQuery = doc(db, "products", id);

    let docSnap = await getDoc(productQuery);
    if (docSnap.exists()) {
        product = docSnap.data()
    }
    return product
}

export  async function save(newProduct) {
    let successSave = false
    let addProduct = await addDoc(collection(db, "products"), {
        ...newProduct
    })   

    if (addProduct.id) {
        successSave = true
    }

    return successSave
 }

 export async function update(product, docId) {

    let successSave = false
    let query = doc(db, "products", docId);
    if(query) {
        await updateDoc(query, {
        ...product
        })
        successSave = true;
    }
    return successSave
}


export async function remove(docId) {

    let successDelete = false
    let query = doc(db, "products", docId)

    if(query) {
    await deleteDoc(query)
        successDelete = true;
    }

    return successDelete
}
