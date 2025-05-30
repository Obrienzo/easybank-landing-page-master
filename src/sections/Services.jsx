import ServiceCard from "../components/ServiceCard";

function Services() {
    
    const services = [
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

    const servicesList = services.map((service, index) => 
        <ServiceCard
            index={index}
            icon={service.logo}
            heading={service.title}
            description={service.summary}
        />
    );

    return (
        <section className="bg-LightGrayishBlue">
            <div className="px-5 py-12 lg:py-24 mx-auto max-w-6xl">
                <div className="text-center mx-auto xl:mx-0 xl:text-start xl:ml-3 max-w-lg">
                    <h2 className="text-3xl mx-5 md:mx-0">Why choose Easybank?</h2>
                    <p className="mt-12 text-Grayishblue">
                        We leverage Open Banking to turn your bank account into your financial hub. Control your finances like never before.
                    </p>
                </div>
                <ul className="flex flex-wrap justify-center gap-5 mt-16">
                    {servicesList}
                </ul>
            </div>
        </section>
    );
}

export default Services;