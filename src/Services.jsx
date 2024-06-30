
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
        <li key={index}>
            <article className="text-center">
                <img src={service.logo} alt='service log' className="mx-auto mb-5" />
                <h3 className="font-normal text-lg mb-5">{service.title}</h3>
                <p className="text-Grayishblue">{service.summary}</p>
            </article>
        </li>
    )

    return (
        <section className="bg-LightGrayishBlue py-12 px-4">
            <h2 className="text-3xl w-2/3 text-center mx-auto mb-3">Why choose Easybank?</h2>
            <p className="text-center text-Grayishblue">
                We levarage Open Banking to turn your bank account into you financial hub. Control your finances like never before.
            </p>
            <ul className="flex flex-col gap-8 mt-16">
                {servicesList}
            </ul>
        </section>
    );
}

export default Services;