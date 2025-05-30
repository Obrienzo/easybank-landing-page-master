import Button from "../components/Button";

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
        <></>
    );
}

export default Footer;


// Redo the footer section for next session...