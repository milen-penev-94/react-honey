import { db } from "../firebase"
import { getDocs, doc, addDoc, deleteDoc, collection, query, orderBy } from "firebase/firestore"

export  async function getAll() {
    const allMessages = []
    const allMessagesQuery = query(collection(db, "contacts"), orderBy("date", "desc"));
    const snapshot =  await getDocs(allMessagesQuery)
        
    snapshot.docs.forEach((doc) => {
        let messageData = Object.assign(doc.data(), {docId: doc.id})
        allMessages.push(messageData)
    })

    return allMessages
}

export  async function save(newMessage) {

    let successSave = false
    let addMessage = await addDoc(collection(db, "contacts"), {
        ...newMessage
    })   

    if (addMessage.id) {
        successSave = true
    }

    return successSave
}


export async function remove(docId) {

    let successDelete = false
    let query = doc(db, "contacts", docId)

    if(query) {
        await deleteDoc(query)
        successDelete = true;
    }

    return successDelete
  
}
