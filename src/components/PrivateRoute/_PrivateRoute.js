import React, { useRef, useState, useEffect } from "react"
import { __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED } from "react-dom/cjs/react-dom.development"
import { BrowserRouter as Router,
  Navigate } from "react-router-dom"
import { useAuth } from "../../contexts/AuthContext"

export default function PrivateRoute({ children, isAdmin }) {
    const { currentUser, currentUserData } = useAuth()
    let redirect = null


    if (isAdmin) {
      if(Object.keys(currentUserData).length !== 0) {
        if(currentUserData.isAdmin) {
          redirect = children
        } else {
          redirect = <Navigate to="/" />
        }
      }
    } else {

        if (currentUser) {
            redirect = children
        }
    }
    

   return currentUser ? redirect : <Navigate to="/login" />;
}