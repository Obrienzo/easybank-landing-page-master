

function Header() {
    return (
        <header className="flex justify-between items-center p-4 bg-White relative z-10">
            <a href="#">
                <img src="/src/assets/logo.svg" alt="easybank logo" />
            </a>
            <ion-icon name="menu-outline"></ion-icon>
            <nav className="hidden">
                <ul className="flex gap-5">
                    <li>
                        <a href="#">Home</a>
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
            </nav>
        </header>
    );
}


export default Header;