import styles from '../../styles/Home.module.css';
export const HeadPost = ({ meta, isBlogPost }) => {
    return (
        <>
            <h1 className={isBlogPost? styles.greatTitle: null}>{meta.title}</h1>
            <div className="details">
                {isBlogPost? null: <p>{meta.description}</p>}
                <span role="img" aria-label="one coffee">
                    {meta.readTime + ' minute read'}
                </span>
            </div>
        </>
    )
}
