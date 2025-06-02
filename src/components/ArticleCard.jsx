
function ArticleCard({ index, banner, author, title, preview }) {
    return (
        <li key={index} className="rounded-lg bg-White overflow-hidden max-w-80 cursor-pointer">
            <article>
                <section className="h-56 lg:h-48 overflow-hidden">
                <img className="object-cover h-full w-full" src={banner} alt="banner" />
                </section>
                <section className="px-5 py-8">
                    <p className="text-xs text-Grayishblue">By {author}</p>
                    <a className="text-lg leading-tight mt-2.5 mb-1.5 block hover:text-LimeGreen hover:cursor-pointer" href="#">{title}</a>
                    <p className="text-sm text-Grayishblue">{preview}</p>
                </section>
            </article>
        </li>
    );
}

export default ArticleCard;