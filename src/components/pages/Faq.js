import { Helmet } from 'react-helmet-async';
import Accordion from '../Accordion';

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
                <p>I offer a range of web services, including designing and building new websites, enhancing existing sites with new features or content, resolving errors, and performing accessibility remediations to ensure compliance with WCAG 2.2 standards.</p>
            </div>
        )
    },
    {
        question: "What technologies and tools do you use?",
        answer: (
            <div>
                <p>Depending on your project's needs, I can work with various technologies including HTML, <span translate='no'>React</span>, <span translate='no'>Vue.js</span>, PHP, and custom WordPressthemes. I adapt quickly to new systems and structures, ensuring seamless integration and efficiency.</p>
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
        <>
            <Helmet>
                <title>FAQ - Riley Hoffman - Web Developer</title>
                <meta property="og:title" content="FAQ - Riley Hoffman - Web Developer" />
                <meta name="description" content="Find the answers to my most frequently asked questions." />
                <meta property="og:url" content="https://rileyhoffman.com/faq" />
                <link rel="canonical" href="https://rileyhoffman.com/faq" />
            </Helmet>     
            <h1 className="text-center text-3xl leading-normal bg-[#eee2f3] border-b-2 mb-7 mt-0 py-10 px-5 gradient-border inverted md:text-5xl md:leading-normal contrast-more:bg-white">Frequently Asked Questions</h1>
            <div className="max-w-screen-md p-[1.875rem_0_13vh]"> 
                <Accordion items={accordionItems} label="Frequently Asked Questions" />
            </div>
        </>
    )
}

export default Faq