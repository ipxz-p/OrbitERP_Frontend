interface SeoProps {
    title: string;
    description?: string;
    children?: React.ReactNode
}

const Seo = ({ title, description, children }: SeoProps) => {
    return (
        <>
            <title>{title}</title>
            <meta name='title' content={title} />
            <meta property='og:title' name='og:title' content={title} />
            {
                description && (
                    <>
                        <meta name='description' content={description} />
                        <meta property='og:description' name='og:description' content={description} />
                    </>
                )
            }
            {children ?? null}
        </>
    )
}

export default Seo;