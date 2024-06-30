

function Articles() {
    const articles = [
        {
            author: 'Claire Robinson',
            title: 'Receive money in any currency with no fees',
            summary: "The world is getting smaller and we're becoming more mobile. So why should you be forced to only receive money in a single...",
            cover: '/src/assets/image-currency.jpg'
        },
        {
            author: 'Wilson Hutton',
            title: 'Treat yourself without worrying about money',
            summary: "Our simple budgeting feature allows you to separate out your spending and set realistic limits each month. That means you...",
            cover: '/src/assets/image-restaurant.jpg'
        },
        {
            author: 'Wilson Hutton',
            title: 'Take your Easybank card wherever you go',
            summary: "We want you to enjoy your travels. This is why we don't charge any fees on purchases while you're abroad. We'll even show you...",
            cover: '/src/assets/image-plane.jpg'
        },
        {
            author: 'Claire Robinson',
            title: 'Our invite-only Beta accounts are now live!',
            summary: "After a lot of hard work by the whole team, we're excited to launch our closed beta. It's easy to request an invite through the site...",
            cover: '/src/assets/image-confetti.jpg'
        }
    ]

    const articlesList = articles.map((article, index) => 
        <li className="bg-White rounded-md overflow-hidden" key={index}>
            <a href="#" className="cursor-pointer">
                <article>
                    <div>
                        <img src={article.cover} alt="article cover" />
                    </div>
                    <section className="p-6">
                        <span className="text-Grayishblue text-xs">By {article.author}</span>
                        <h4 className="text-DarkBlue text-lg font-normal my-2 leading-5">{article.title}</h4>
                        <p className="text-Grayishblue text-sm">{article.summary}</p>
                    </section>
                </article>
            </a>
        </li>
    )

    return (
        <section className="bg-VeryLightGray py-12 px-4">
            <ul className="flex flex-col gap-8">
                {articlesList}
            </ul>
        </section>
    );
}


export default Articles;