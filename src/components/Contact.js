import { Helmet } from 'react-helmet-async';
import Form from './Form';
import '../styles/_contact.scss';
import thumbnail from '../assets/thumbnail.jpg';

function Contact() {
    return (
        <section>
            <Helmet>
                <title>Contact - Riley Hoffman - Web Developer</title>
                <meta property="og:image" content={thumbnail} />
                <meta name="description" content="Contact Web Developer Riley Hoffman with the form on this page." />
                <link rel="canonical" href="https://rileyhoffman.com/contact" />
            </Helmet>     
            <h1 className="text-center text-40 banner-heading gradient-border">Contact Me</h1>
            <div className="max-700px contact"> 
                <Form/>
            </div>
        </section>
    )
}

export default Contact