import { Helmet } from 'react-helmet-async';
import Accordion from './Accordion';
import '../styles/pages/_faq.scss';
import '../styles/components/_accordion.scss';
const accordionItems = [
    {
        question: "Are you available for freelance work?",
        answer: (
            <div>
                <p>Absolutely! Feel free to <a href="/contact">get in touch</a> to discuss your project needs and pricing structure.</p>
            </div>
        )
    },
    {
        question: "What services do you offer?",
        answer: (
            <div>
                <p>I offer a range of web services, including designing and building new websites, enhancing existing sites with new features or content, resolving errors, and performing accessibility remediations to ensure compliance with WCAG 2.0 standards.</p>
            </div>
        )
    },
    {
        question: "What technologies and tools do you use?",
        answer: (
            <div>
                <p>Depending on your project's needs, I can work with various technologies including HTML, React, Vue.js, PHP, and custom WordPress themes. I adapt quickly to new systems and structures, ensuring seamless integration and efficiency.</p>
            </div>
        )
    },
    {
        question: "Do you offer ongoing support and maintenance?",
        answer: (
            <div>
                <p>While the initial project cost does not cover support and maintenance, I am available for hire to provide these services as needed.</p>
            </div>
        )
    },
];
function Faq() {
    return (
        <section>
            <Helmet>
                <title>FAQ - Riley Hoffman - Web Developer</title>
                <meta property="og:title" content="FAQ - Riley Hoffman - Web Developer" />
                <meta name="description" content="Find the answers to my most frequently asked questions." />
                <meta property="og:url" content="https://rileyhoffman.com/faq" />
                <link rel="canonical" href="https://rileyhoffman.com/faq" />
            </Helmet>     
            <h1 className="text-center text-40 banner-heading gradient-border inverted">Frequently Asked Questions</h1>
            <div className="max-800px faq"> 
                <Accordion items={accordionItems} />
            </div>
        </section>
    )
}

export default Faq