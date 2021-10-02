export const HeadPost = ({ meta, isBlogPost }) => {
    return (
        <>
            <h1 className={isBlogPost? 'great-title': null}>{meta.title}</h1>
            <div className="details">
                {isBlogPost? null: <p>{meta.description}</p>}
                <span role="img" aria-label="one coffee">
                    {meta.readTime + ' minute read'}
                </span>
            </div>
        </>
    )
}
