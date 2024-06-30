import Button from "./Button";

function HeroSection() {

    return (
        <section className="relative mb-20 bg-White">
            <picture>
                <source srcSet="/src/assets/bg-intro-mobile.svg" media="(orientation: portrait)"/>
                <img src="/src/assets/bg-intro-mobile.svg" alt="hero background" className="w-full" />
            </picture>
            <img src="/src/assets/image-mockups.png" alt="website mockups" className="absolute -top-24" />
            <article className="text-center px-4">
                <h1 className="font-normal text-4xl mb-4">Next generation digital banking</h1>
                <p className="text-Grayishblue mb-7">
                    Take your financial life online. Your Easybank account will be a one-stop-shop for spending, saving, budgeting, investing, and much more.
                </p>
                <Button />
            </article>
        </section>
    );
}

export default HeroSection;