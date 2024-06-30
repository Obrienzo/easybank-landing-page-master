import Button from "./Button";

function Footer() {
    const socials = [
        '/src/assets/icon-facebook.svg',
        '/src/assets/icon-youtube.svg',
        '/src/assets/icon-twitter.svg',
        '/src/assets/icon-pinterest.svg',
        '/src/assets/icon-instagram.svg'
    ];

    const sitemaps = [
        'About Us',
        'Contact',
        'Blog',
        'Careers',
        'Support',
        'Privacy Policy'
    ]

    const socialsList = socials.map((social, index) => 
        <li key={index}>
            <a href="#">
                <img src={social} alt="social media link" />
            </a>
        </li>
    )

    const sitemapsList = sitemaps.map((sitemap, index) => 
        <li key={index}>
            <a href="#" className="text-LightGrayishBlue">{sitemap}</a>
        </li>
    )

    return (
        <footer className="bg-DarkBlue py-12 text-center">
            <div className="flex justify-center">
                <a href="/index.html">
                    <img src="/src/assets/logo.svg" alt="page logo" className="text-White" />
                </a>
            </div>
            <ul className="mx-auto flex gap-3 my-7 justify-center">
                {socialsList}
            </ul>
            <ul className="flex flex-col gap-3 mb-7">
                {sitemapsList}
            </ul>
            <Button />
            <p className="text-Grayishblue mt-6">&copy; Easybank. All Right Reserved</p>
        </footer>
    );
}

export default Footer;