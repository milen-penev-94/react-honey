import {Helmet} from "react-helmet";
import './About.css'

const About = () => {

    return (
        <div className="about-component">
            <Helmet>
                <title>За нас</title>
            </Helmet>

            <section className="page-title centred" style={{backgroundImage: `url("/images/background/page-title.jpg")`}}>
                <div className="auto-container">
                <div className="content-box">
                    <div className="title">
                    <h1>За нас</h1>
                    </div>
                </div>
                </div>
            </section>

            <div className="auto-container ">
                <p>Пчеларски магазин Пенев е създаден с учебна цел. Този проект е създаден на ReactJS.</p>
                <p>
                    В него е имплементирана система за Аутентикеишън система (регистрация, логин, логаут и добавяне на клиентска информация). 
                    Има разработена функционалости за добавяне на категории, подкатегории продукти, поръчки и количка.
                </p>
                <p>
                    За БекЕнд на проекта е използван Firebase.
                </p>
            </div>    
        </div>    
    )
}

export default About