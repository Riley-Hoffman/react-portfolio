import { Helmet } from 'react-helmet-async';

function Accessibility() {
    return (
        <>
            <Helmet>
                <title>Accessibility - Riley Hoffman - Web Developer</title>
                <meta property="og:title" content="Accessibility - Riley Hoffman - Web Developer" />
                <meta name="description" content="As a dedicated web developer, I am committed to creating an accessible and inclusive website experience for all users." />
                <meta property="og:url" content="https://rileyhoffman.com/accessibility" />
                <link rel="canonical" href="https://rileyhoffman.com/accessibility" />
            </Helmet>     
            <h1 className="text-center text-3xl leading-normal banner-heading gradient-border inverted md:text-5xl md:leading-normal">Accessibility</h1>
            <div className="max-w-screen-md p-[1.875rem_0_13vh]"> 
                <h2>My Commitment</h2>
                <p>As a dedicated web developer, I am committed to creating an accessible and inclusive website experience for all users. I continuously strive to improve the user experience by adhering to and exceeding the accessibility standards outlined by the Web Content Accessibility Guidelines (WCAG).</p>
                <h2>Third-Party Content</h2>
                <p>While I prioritize accessibility when selecting tools and content, I may link to content from third-party developers. Please note that I do not control or assume responsibility for the content, features, or applications provided by these third parties.</p>
                <h2>Contact Me</h2>
                <p>Your feedback is invaluable in helping me enhance the accessibility of my website. If you encounter any difficulties accessing any part of the site, please feel free to <a href="/contact">reach out to me</a>.</p>
            </div>
        </>
    )
}

export default Accessibility