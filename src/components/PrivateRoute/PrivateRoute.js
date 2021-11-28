import { BrowserRouter as Router,
  Navigate } from "react-router-dom"
import { useAuth } from "../../contexts/AuthContext"

export default function PrivateRoute({ children, isAdmin }) {
    const { currentUser, currentUserData } = useAuth()
    let redirect = null

    if (currentUser) {

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
    } else {
      redirect = <Navigate to="/login" />
    }

   return redirect;
}