import {Helmet} from "react-helmet";
import './About.css'

const About = () => {

    return (
        <div className="auto-container about-component">
            <Helmet>
                <title>За нас</title>
            </Helmet>

            <h1>За нас</h1>

            <p>Пчеларски магазин Пенев е създаден с учебна цел. Този проект е създаден на ReactJS.</p>
            <p>
                В него е имплементирана система за Аутентикеишън система (регистрация, логин, логаут и добавяне на клиентска информация). 
                Има разработена функционалости за добавяне на категории, подкатегории продукти, поръчки и количка.
            </p>
            <p>
                За БекЕнд на проекта е използван Firebase.
            </p>
        </div>    
    )
}

export default About