import React, { useRef, useState, useEffect } from "react"
import { BrowserRouter as Router,
  Navigate } from "react-router-dom"
import { useAuth } from "../../contexts/AuthContext"
import { db } from "../../firebase"
import {
    collection,
    where,
    query,
    getDocs,
  } from "firebase/firestore"

export default function PrivateRoute({ children }) {
    const [loading, setLoading] = useState(false)
    const { currentUser } = useAuth()

    return currentUser ? children : <Navigate to="/login" />;
}