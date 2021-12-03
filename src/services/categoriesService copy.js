import { db } from "../firebase"
import { getDocs, getDoc, doc, addDoc, updateDoc, deleteDoc, collection, query, where } from "firebase/firestore"


export  async function getAll() {
    let allCategoriesArray = []

    const allCategoriesQuery = query(collection(db, "categories"));
    await getDocs(allCategoriesQuery)
    .then((snapshot) => {
       
        snapshot.docs.forEach((doc) => {
            let categoryData = Object.assign(doc.data(), {docId: doc.id})
            allCategoriesArray.push(categoryData)
        })
    })
    .catch(err => {
        console.log(err)
    })

    return allCategoriesArray
}


export  async function getParentCategories() {
    let allCategoriesArray = []

    const allCategoriesQuery = query(collection(db, "categories"), where("parent", "==", ""));
    await getDocs(allCategoriesQuery)
    .then((snapshot) => {
       
        snapshot.docs.forEach((doc) => {
            let categoryData = Object.assign(doc.data(), {docId: doc.id})
            allCategoriesArray.push(categoryData)
        })
    })
    .catch(err => {
        console.log(err)
    })

    return allCategoriesArray
}

export  async function getChildCategories(parentId) {
    let childCategoriesArray = []

    const childCategoriesQuery = query(collection(db, "categories"), where("parent", "==", parentId));
    await getDocs(childCategoriesQuery)
    .then((snapshot) => {
       
        snapshot.docs.forEach((doc) => {
            let categoryData = Object.assign(doc.data(), {docId: doc.id})
            childCategoriesArray.push(categoryData)
        })
    })
    .catch(err => {
        console.log(err)
    })

    return childCategoriesArray
}


export  async function getOne(id) {
    let category = null
    const categoryQuery = doc(db, "categories", id);
    await getDoc(categoryQuery)
    .then((doc) => {
        category = doc.data()
    })

     return category
}

export  async function save(newCategory) {

    let successSave = false

    await addDoc(collection(db, "categories"), {
        ...newCategory
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

export async function update(category, docId) {

    let successSave = false

    await updateDoc(doc(db, "categories", docId), {
    ...category
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

export async function remove(docId) {

    let successDelete = false

    await deleteDoc(doc(db, "categories", docId))
    .then(() => {
        successDelete = true
    })
    .catch(err => {
        console.log(err)
        successDelete = false
    })

     return successDelete
}