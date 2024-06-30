

function HeroSection() {

    const servicesList = [
        {
            logo: '/src/assets/icon-online.svg',
            title: 'Online Banking',
            summary: 'Our modern web and mobile applications allow you to keep track of your finances wherever you are in the world.'
        },
        {
            logo: '/src/assets/icon-budgeting.svg',
            title: 'Simple Budgeting',
            summary: "See exactly where your money goes each month. Receive notifications when you're close to your hitting limits." 
        },
        {
            logo: "/src/assets/icon-onboarding.svg",
            title: "Fast Onboarding",
            summary: "We don't do branches. Open your account in minutes online and start taking control of you finances right away."
        },
        {
            logo: '/src/assets/icon-api.svg',
            title: "Open API",
            summary: "Manage your savings, investments,pension, and much more from one account. Tracking you money has never been easier."
        }
    ]

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
                <button className="bg-gradient-to-r from-LimeGreen to-BrightCyan px-9 py-3 text-White font-normal rounded-3xl">Request Invite</button>
            </article>
        </section>
    );
}

export default HeroSection;