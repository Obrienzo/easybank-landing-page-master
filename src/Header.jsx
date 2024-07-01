import Button from './Button';

function Header() {
    return (
        <header className="p-4 bg-White relative z-10">
            <div className='max-w-7xl mx-auto flex justify-between items-center'>
                <a href="#">
                    <img src="/src/assets/logo.svg" alt="easybank logo" />
                </a>
                <div className='md:hidden'>
                <ion-icon name="menu-outline"></ion-icon>
                </div>
                <nav className="hidden md:block">
                    <ul className="flex gap-8">
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
                <div className='hidden md:block'>
                <Button />
                </div>
            </div>
        </header>
    );
}


export default Header;