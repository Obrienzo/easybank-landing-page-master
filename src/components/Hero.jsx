import Button from "./Button";

function HeroSection() {

    return (
        <section className="relative mb-20 bg-VeryLightGray h-screen flex justify-center">
            <div className="max-w-7xl">
                <picture>
                    <source srcSet="/src/assets/bg-intro-mobile.svg" media="(max-width: 1024px)" className="w-full h-full"/>
                    <img src="/src/assets/bg-intro-desktop.svg" alt="hero background" className="w-full"/>
                </picture>
                <img src="/src/assets/image-mockups.png" alt="website mockups" className="absolute w-full mx-auto -top-16 lg:-top-10 lg:-right-20 lg:w-[600px] xl:w-fit xl:-right-32 xl::mx-0 xl:-top-10 lg:absolute z-10" />
                <article className="text-center px-4 lg:self-center lg:text-start">
                    <h1 className="font-normal text-4xl mb-4 md:text-5xl xl:text-6xl">Next generation digital banking</h1>
                    <p className="text-Grayishblue mb-7 xl:w-4/6">
                        Take your financial life online. Your Easybank account will be a one-stop-shop for spending, saving, budgeting, investing, and much more.
                    </p>
                    <Button />
                </article>
            </div>
        </section>
    );
}

export default HeroSection;