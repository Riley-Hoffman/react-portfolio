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
                        className="w-full py-6 px-5 bg-pink-100 text-left font-medium text-lg group"
                        onClick={() => handleAccordionClick(index)}
                        aria-expanded={openIndex === index ? "true" : "false"}
                    >   
                        <FontAwesomeIcon className="p-2 mr-5 text-xs text-pink-200 bg-zinc-900 group-hover:text-zinc-900 group-focus-visible:text-zinc-900 group-aria-expanded:text-zinc-900 group-hover:bg-purple-100 group-focus-visible:bg-purple-100 group-aria-expanded:bg-purple-100" icon={openIndex === index ? faMinus : faPlus}  />
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
