import { Helmet } from 'react-helmet';
import Form from './Form';

function Contact() {
    return (
        <div id="content" className="max-700px" style={{ padding: '100px 0 18vh'}}> 
                <Helmet>
                    <title>Contact - Riley Hoffman - Web Developer</title>
                    <meta name="description" content="Contact Web Developer Riley Hoffman with the form on this page." />
                    <link rel="canonical" href="https://rileyhoffman.com/contact/" />
                </Helmet>     
                <h1 className="text-40">Contact Me</h1>
                <Form/>
        </div>
    )
}

export default Contact