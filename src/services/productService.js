import { db } from "../firebase"
import { getDocs, getDoc, doc, addDoc, updateDoc, deleteDoc, collection, query } from "firebase/firestore"


// export  async function getAll() {
//     let allProductsArray = []

//     const allProductsQuery = query(collection(db, "products"));
//     await getDocs(allProductsQuery)
//     .then((snapshot) => {
       
//         snapshot.docs.forEach((doc) => {
//             let productsData = Object.assign(doc.data(), {docId: doc.id})
//             allProductsArray.push(productsData)
//         })
//     })
//     .catch(err => {
//         console.log(err)
//     })

//     return allProductsArray
// }

export  async function getOne(id) {
    let product = null
    const productQuery = doc(db, "products", id);
    await getDoc(productQuery)
    .then((doc) => {
        product = doc.data()
    })

     return product
}

export  async function save(newProduct) {

    let successSave = false

    await addDoc(collection(db, "products"), {
        ...newProduct
    })   
    .then(() => {
        successSave = true
    })
    .catch(err => {
        console.log(err)
        successSave = false
    })

     return successSave
}

export async function update(product, docId) {

    let successSave = false

    await updateDoc(doc(db, "products", docId), {
    ...product
    })
    .then(() => {
        successSave = true
    })
    .catch(err => {
        console.log(err)
        successSave = false
    })

     return successSave
}

// export async function remove(docId) {
//     console.log(docId)

//     let successDelete = false

//     await deleteDoc(doc(db, "categories", docId))
//     .then(() => {
//         successDelete = true
//     })
//     .catch(err => {
//         console.log(err)
//         successDelete = false
//     })

//      return successDelete
// }
