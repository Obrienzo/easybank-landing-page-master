
function Navigation({ dropdown }) {
    const pageWidth = window.innerWidth;
    // console.log(pageWidth);
    return (
        <div className={`${dropdown ? 'absolute z-30 bg-VeryLightGray max-w-72 md:w-full md:block top-20 left-0 right-0 mx-auto p-5 md:relative md:top-0 md:bg-White text-DarkBlue md:text-Grayishblue font-medium md:font-normal' : 'hidden'} md:block md:relative md:top-0 md:bg-White md:text-Grayishblue md:font-normal`}>
            <ul className="flex flex-col md:flex-row items-center gap-5 lg:gap-8">
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
        </div>
    );
}

export default Navigation;