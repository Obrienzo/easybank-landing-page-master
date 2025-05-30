import Button from '../components/Button';

function Header() {
    return (
        <header className='absolute w-full bg-White z-30'>
            <nav className='max-w-6xl mx-auto p-5 flex justify-between items-center'>
                <div>
                    <a href="/index.html">
                        <img src="/src/assets/logo.svg" alt="web page logo" title='easybank home' />
                    </a>
                </div>
                <button>
                    <img src="/src/assets/icon-hamburger.svg" alt="menu icon" title='menu' />
                </button>
            </nav>
        </header>
    );
}


export default Header;

// Navigation component missing and interactivity of the dropdown menu...