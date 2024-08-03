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
        <ul className="accordion" aria-label={label}>
            {items.map((item, index) => (
                <li key={index}>
                    <button 
                        className="width-100 text-left text-500"
                        onClick={() => handleAccordionClick(index)}
                        aria-expanded={openIndex === index ? "true" : "false"}
                    >   
                        <FontAwesomeIcon icon={openIndex === index ? faMinus : faPlus}  />
                        {item.question}
                    </button>
                    <div 
                        className="accordion-content"
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
