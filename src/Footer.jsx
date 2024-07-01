import Button from "./Button";

function Footer() {

    const sitemaps = [
        'About Us',
        'Contact',
        'Blog',
        'Careers',
        'Support',
        'Privacy Policy'
    ]

    const sitemapsList = sitemaps.map((sitemap, index) => 
        <li key={index} className="justify-self-start">
            <a href="#" className="text-LightGrayishBlue hover:text-LimeGreen justify-self-start">{sitemap}</a>
        </li>
    )

    return (
        <footer className="bg-DarkBlue py-12 px-4">
            <div className="text-center md:grid md:grid-cols-3 md:justify-start md:items-center max-w-7xl mx-auto">
                <div className="flex justify-center">
                    <a href="/index.html">
                        <img src="/src/assets/logo.svg" alt="page logo" className="text-White" />
                    </a>
                </div>
                <ul className="mx-auto flex gap-3 my-7 justify-center md:row-start-2">
                    <li>
                        <a href="#">
                            <ion-icon name="logo-facebook"></ion-icon>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <ion-icon name="logo-youtube"></ion-icon>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <ion-icon name="logo-twitter"></ion-icon>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <ion-icon name="logo-pinterest"></ion-icon>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <ion-icon name="logo-instagram"></ion-icon>
                        </a>
                    </li>
                </ul>
                <ul className="flex flex-col gap-3 mb-7 md:grid md:grid-cols-2 md:col-start-2 md:row-start-1 md:row-end-3">
                    {sitemapsList}
                </ul>
                <div className="text-end">
                <Button/>
                </div>
                <p className="text-Grayishblue mt-6 justify-self-end">&copy; Easybank. All Right Reserved</p>
            </div>
        </footer>
    );
}

export default Footer;