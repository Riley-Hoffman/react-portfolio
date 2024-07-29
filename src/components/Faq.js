import { Helmet } from 'react-helmet-async';
import Accordion from './Accordion';
import '../styles/components/_accordion.scss';
const accordionItems = [
    {
        question: "Are you available for freelance work?",
        answer: (
            <div>
                <p>Yes! <a href="/contact">Contact me by email</a> to discuss your project needs.</p>
            </div>
        )
    },
    {
        question: "What services do you offer?",
        answer: (
            <div>
                <p>You can hire me to build or design websites, or modify existing sites with new features, content. I can also fix errors on your website, and accessibility remediations to meet WCAG requirements. </p>
            </div>
        )
    },
    {
        question: "Question",
        answer: (
            <div>
                <p>Answer</p>
            </div>
        )
    },
    {
        question: "Question",
        answer: (
            <div>
                <p>Answer</p>
            </div>
        )
    },
    {
        question: "Question",
        answer: (
            <div>
                <p>Answer</p>
            </div>
        )
    },
    {
        question: "Question",
        answer: (
            <div>
                <p>Answer</p>
            </div>
        )
    },
    // Add more items here as needed
];
function Faq() {
    return (
        <section>
            <Helmet>
                <title>FAQ - Riley Hoffman - Web Developer</title>
                <meta property="og:title" content="FAQ - Riley Hoffman - Web Developer" />
                <meta name="description" content="Frequently asked questions." />
                <meta property="og:url" content="https://rileyhoffman.com/faq" />
                <link rel="canonical" href="https://rileyhoffman.com/faq" />
            </Helmet>     
            <h1 className="text-center text-40 banner-heading gradient-border inverted">Frequently Asked Questions</h1>
            <div className="max-700px contact"> 
                <Accordion items={accordionItems} />
            </div>
        </section>
    )
}

export default Faq