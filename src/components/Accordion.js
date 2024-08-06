import { useState, useRef, useEffect } from 'react';
import { faPlus, faMinus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '../styles/components/_accordion.scss';

function Accordion({ items, label }) {
    const [openIndex, setOpenIndex] = useState(null);
    const contentRefs = useRef([]);

    const handleAccordionClick = index => {
        setOpenIndex(prevIndex => (prevIndex === index ? null : index));
    };

    useEffect(() => {
        if (openIndex !== null && contentRefs.current[openIndex]) {
            contentRefs.current[openIndex].focus();
        }
    }, [openIndex]);

    return (
        <ul className="pb-12 leading-loose accordion" aria-label={label}>
            {items.map((item, index) => (
                <li key={index}>
                    <button 
                        className="w-full text-left font-medium py-6 px-5 text-lg bg-pink-100"
                        onClick={() => handleAccordionClick(index)}
                        aria-expanded={openIndex === index ? "true" : "false"}
                    >   
                        <FontAwesomeIcon className="p-2 mr-5 text-xs" icon={openIndex === index ? faMinus : faPlus}  />
                        {item.question}
                    </button>
                    <div 
                        className="px-5 accordion-content"
                        tabIndex={-1}
                        ref={answer => (contentRefs.current[index] = answer)}
                    >
                        {item.answer}
                    </div>
                </li>
            ))}
        </ul>
    );
}

export default Accordion;
