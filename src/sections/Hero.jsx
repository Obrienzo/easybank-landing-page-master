import Button from "../components/Button";

function HeroSection() {

    return (
        <section className="min-h-screen flex flex-col justify-center relative md:bg-[url('/src/assets/bg-intro-desktop.svg')] bg-contain md:bg-right-bottom bg-no-repeat">
            <div className="px-5 pb-12 md:grid md:grid-cols-2 lg:gap-40 mx-auto max-w-6xl">
                <div>
                    <img className="relative -top-10 md:-right-20 lg:absolute lg:-top-20 lg:-right-24 z-10" src="/src/assets/image-mockups.png" alt="service UI mockup" />
                </div>
                <div className="text-center md:col-start-1 md:row-start-1 md:self-center md:text-start lg:pr-12">
                    <h1 className="text-4xl lg:text-6xl lg:leading-tight text-DarkBlue mb-5">Next generation digital banking</h1>
                    <p className="text-base text-Grayishblue mb-8">Take your financial life online. Your Easybank account will be a one-stop-shop for spending, saving, budgeting, investing, and much more.</p>
                    <Button />
                </div>
            </div>
        </section>
    );
}

export default HeroSection;



// Next time to review the background sizing and position to be visually appealing..