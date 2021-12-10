
import {Helmet} from "react-helmet";
import './Contacts.css'

const Contacts = () => {

    return (
        <div className="auto-container contacts-component">
             <Helmet>
                <title>Контакти</title>
            </Helmet>

            <h1>Контакти</h1>

            {/* <form>
                <div className="row">
                    <label htmlFor="name">Име: </label>
                    <input name="name" id="name" type="text" />
                </div>
            </form> */}
        </div>    
    )
}

export default Contacts