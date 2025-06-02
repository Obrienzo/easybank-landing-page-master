
function Navigation() {
    const pageWidth = window.innerWidth;
    // console.log(pageWidth);
    return (
        <ul className="hidden md:flex gap-5 lg:gap-8 text-Grayishblue">
            <li>
                <a href="/index.html">Home</a>
            </li>
            <li>
                <a href="#">About</a>
            </li>
            <li>
                <a href="#">Contact</a>
            </li>
            <li>
                <a href="#">Blog</a>
            </li>
            <li>
                <a href="#">Careers</a>
            </li>
        </ul>
    );
}

export default Navigation;