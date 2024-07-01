import Button from "./Button";

function HeroSection() {

    return (
        <section className="mb-20 bg-White relative">
            <div className="md:flex md:flex-row-reverse md:mb-0 max-w-7xl mx-auto">
                <picture>
                    <source srcSet="/src/assets/bg-intro-mobile.svg" media="(max-width: 768px)"/>
                    <img src="/src/assets/bg-intro-desktop.svg" alt="hero background" className="relative -right-40 -bottom-32" />
                </picture>
                <img src="/src/assets/image-mockups.png" alt="website mockups" className="absolute -top-24 md:-right-32 md:-top-36 md:absolute" />
                <article className="text-center px-4 md:col-start-1 md:row-start-1 md:self-center md:text-start md:flex-grow-0">
                    <h1 className="font-normal text-4xl mb-4 lg:text-6xl">Next generation digital banking</h1>
                    <p className="text-Grayishblue mb-7">
                        Take your financial life online. Your Easybank account will be a one-stop-shop for spending, saving, budgeting, investing, and much more.
                    </p>
                    <Button />
                </article>
            </div>
        </section>
    );
}

export default HeroSection;