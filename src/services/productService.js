import { db } from "../firebase"
import { getDocs, getDoc, doc, addDoc, updateDoc, deleteDoc, where, collection, query } from "firebase/firestore"

export  async function getAll() {
    try { 
        let allProductsArray = []
        const allProductsQuery = query(collection(db, "products"));
        const snapshot =  await getDocs(allProductsQuery)
        
        snapshot.docs.forEach((doc) => {
            let categoryData = Object.assign(doc.data(), {docId: doc.id})
            allProductsArray.push(categoryData)
        })
    
        return allProductsArray
    } catch(error) {
        console.log(error)
    }
}

export  async function getAllEnabled() {
    try { 
        let allProductsArray = []
        const allProductsQuery = query(collection(db, "products"), where("isEnabled", "==", "1"));
        const snapshot =  await getDocs(allProductsQuery)
        
        snapshot.docs.forEach((doc) => {
            let categoryData = Object.assign(doc.data(), {docId: doc.id})
            allProductsArray.push(categoryData)
        })
    
        return allProductsArray
    } catch(error) {
        console.log(error)
    }
}

export  async function getOne(id) {
    try {
        let product = null
        let productQuery = doc(db, "products", id);

        let docSnap = await getDoc(productQuery);
        if (docSnap.exists()) {
            product = docSnap.data()
        }
        return product
    } catch(error) {
        console.log(error)
    }
}

export  async function save(newProduct) {
    try {
        let successSave = false
        let addProduct = await addDoc(collection(db, "products"), {
            ...newProduct
        })   

        if (addProduct.id) {
            successSave = true
        }

        return successSave
    } catch(error) {
        console.log(error)
    }
 }

 export async function update(product, docId) {
    try{
        let successSave = false
        let query = doc(db, "products", docId);
        if(query) {
            await updateDoc(query, {
            ...product
            })
            successSave = true;
        }
        return successSave
    } catch(error) {
        console.log(error)
    }
}


export async function remove(docId) {
    try{
        let successDelete = false
        let query = doc(db, "products", docId)

        if(query) {
        await deleteDoc(query)
        successDelete = true;
        }

        return successDelete
    } catch(error) {
        console.log(error)
    }
}
