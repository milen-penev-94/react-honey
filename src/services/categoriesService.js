import { db } from "../firebase"
import { getDocs, getDoc, doc, addDoc, updateDoc, deleteDoc, collection, query, where } from "firebase/firestore"


export  async function getAll() {
    let allCategoriesArray = []
    const allCategoriesQuery = query(collection(db, "categories"));
    const snapshot =  await getDocs(allCategoriesQuery)
      
    snapshot.docs.forEach((doc) => {
        let categoryData = Object.assign(doc.data(), {docId: doc.id})
        allCategoriesArray.push(categoryData)
    })
  
    return allCategoriesArray
}

export  async function getParentCategories() {
    let allCategoriesArray = []

    const allCategoriesQuery = query(collection(db, "categories"), where("parent", "==", ""));
    const snapshot = await getDocs(allCategoriesQuery)
       
    snapshot.docs.forEach((doc) => {
        let categoryData = Object.assign(doc.data(), {docId: doc.id})
        allCategoriesArray.push(categoryData)
    })
  
    return allCategoriesArray
}

export  async function getChildCategories(parentId) {
    let childCategoriesArray = []

    let childCategoriesQuery = query(collection(db, "categories"), where("parent", "==", parentId));
    let snapshot = await getDocs(childCategoriesQuery)
 
    snapshot.docs.forEach((doc) => {
        let categoryData = Object.assign(doc.data(), {docId: doc.id})
        childCategoriesArray.push(categoryData)
    })

    return childCategoriesArray
}

export  async function getOne(id) {
    let category = null
    let categoryQuery = doc(db, "categories", id);

    let docSnap = await getDoc(categoryQuery);
    if (docSnap.exists()) {
        category = docSnap.data()
    }
     return category
}


export  async function save(newCategory) {

    let successSave = false
    let addCategory = await addDoc(collection(db, "categories"), {
        ...newCategory
    })   

    if (addCategory.id) {
        successSave = true
    }

    return successSave
 }

export async function update(category, docId) {

    let successSave = false
    let query = doc(db, "categories", docId);
    if(query) {
         await updateDoc(query, {
        ...category
        })
        successSave = true;
    }
     return successSave
}

export async function remove(docId) {

    let successDelete = false
    let query = doc(db, "categories", docId)

    if(query) {
       await deleteDoc(query)
       successDelete = true;
    }

     return successDelete
}
