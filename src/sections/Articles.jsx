import ArticleCard from "../components/ArticleCard";

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
        <ArticleCard
            key={index}
            banner={article.cover}
            author={article.author}
            preview={article.summary}
            title={article.title}
        />
    )

    return (
        <section className="bg-VeryLightGray">
            <div className="px-5 py-16 lg:py-24 mx-auto max-w-6xl">
                <h2 className="text-center xl:text-start xl:ml-3 mb-12 text-3xl text-DarkBlue">Latest Articles</h2>
                <ul className="flex flex-wrap justify-center gap-5">
                    {articlesList}
                </ul>
            </div>
        </section>
    );
}


export default Articles;