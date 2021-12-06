import { db } from "../firebase"
import { getDocs, getDoc, doc, addDoc, updateDoc, deleteDoc, collection, query, where } from "firebase/firestore"


export  async function getAll() {
    try { 
        const allCategoriesArray = []
        const allCategoriesQuery = query(collection(db, "categories"));
        const snapshot =  await getDocs(allCategoriesQuery)
            
        snapshot.docs.forEach((doc) => {
            let categoryData = Object.assign(doc.data(), {docId: doc.id})
            allCategoriesArray.push(categoryData)
        })
    
        return allCategoriesArray
    } catch(error) {
        console.log(error)
    }
}

export  async function getParentCategories() {

    try {
        const allCategoriesArray = []
        const allCategoriesQuery = query(collection(db, "categories"), where("parent", "==", ""));
        const snapshot = await getDocs(allCategoriesQuery)
           
        snapshot.docs.forEach((doc) => {
            let categoryData = Object.assign(doc.data(), {docId: doc.id})
            allCategoriesArray.push(categoryData)
        })
      
        return allCategoriesArray
    } catch(error) {
        console.log(error)
    }
}

export  async function getChildCategories(parentId) {
    try {
        let childCategoriesArray = []
        let childCategoriesQuery = query(collection(db, "categories"), where("parent", "==", parentId));
        let snapshot = await getDocs(childCategoriesQuery)
     
        snapshot.docs.forEach((doc) => {
            let categoryData = Object.assign(doc.data(), {docId: doc.id})
            childCategoriesArray.push(categoryData)
        })
    
        return childCategoriesArray
    } catch(error) {
        console.log(error)
    }
}

export  async function getOne(id) {
    try {

        let category = null
        let categoryQuery = doc(db, "categories", id);
        let docSnap = await getDoc(categoryQuery);

        if (docSnap.exists()) {
            category = docSnap.data()
        }

         return category
    } catch(error) {
        console.log(error)
    }
}


export  async function save(newCategory) {

    try {
        let successSave = false
        let addCategory = await addDoc(collection(db, "categories"), {
            ...newCategory
        })   

        if (addCategory.id) {
            successSave = true
        }

        return successSave
    } catch(error) {
        console.log(error)
    }
}

export async function update(category, docId) {

    try {   
        let successSave = false
        let query = doc(db, "categories", docId);
        if(query) {
            await updateDoc(query, {
            ...category
            })
            successSave = true;
        }
        return successSave
    } catch(error) {
        console.log(error)
    }
}

export async function remove(docId) {

    try {
        let successDelete = false
        let query = doc(db, "categories", docId)
    
        if(query) {
           await deleteDoc(query)
           successDelete = true;
        }
    
        return successDelete
    } catch(error) {
        console.log(error)
    }
}
