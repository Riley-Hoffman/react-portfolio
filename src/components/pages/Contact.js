import { Helmet } from 'react-helmet-async';
import Form from '../Form';
import '../../styles/pages/_contact.scss';

function Contact() {
    return (
        <>
            <Helmet>
                <title>Contact - Riley Hoffman - Web Developer</title>
                <meta property="og:title" content="Contact - Riley Hoffman - Web Developer" />
                <meta name="description" content="Contact Web Developer Riley Hoffman with the form on this page." />
                <meta property="og:url" content="https://rileyhoffman.com/contact" />
                <link rel="canonical" href="https://rileyhoffman.com/contact" />
            </Helmet>     
            <h1 className="text-center text-40 banner-heading gradient-border inverted">Contact Me</h1>
            <div className="max-700px contact"> 
                <Form/>
            </div>
        </>
    )
}

export default Contact