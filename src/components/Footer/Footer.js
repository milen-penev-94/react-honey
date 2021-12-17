import './Footer.css';

function Footer () {

    return (
        <footer className="main-footer">
            <div className="pattern-layer" style={{backgroundImage: 'url(/images/shape/shape-3.png)'}}></div>
            <div className="auto-container">
                <div className="footer-bottom clearfix">
                    <div className="text pull-left">
                        <p>&copy; <a href="https://themeforest.net/item/hanta-beekeeping-and-honey-shop-html-template/29215743?gclid=CjwKCAiAh_GNBhAHEiwAjOh3ZFxs5LDG7sHdhUAePGqCE2V5CyjOdlKDRrsJvN5bz11TyQfPn14EURoCTzIQAvD_BwE">Hanta template</a> Example -2021</p>
                    </div>
                    <div className="text pull-right">
                        <p>Пчеларски магазин <strong>Пенев</strong></p>
                    </div>
                </div>
            </div>
        </footer>
    )
}


export default Footer;