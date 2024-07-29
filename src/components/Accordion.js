import { useState, useRef, useEffect } from 'react';
import { faPlus, faMinus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Accordion({ items }) {
    const [openIndex, setOpenIndex] = useState(null);
    const panelRefs = useRef([]);

    const handleAccordionClick = index => {
        setOpenIndex(prevIndex => (prevIndex === index ? null : index));
    };

    useEffect(() => {
        if (openIndex !== null && panelRefs.current[openIndex]) {
            panelRefs.current[openIndex].focus();
        }
    }, [openIndex]);

    return (
        <div className="accordion">
            {items.map((item, index) => (
                <div key={index}>
                    <button 
                        className="text-left"
                        onClick={() => handleAccordionClick(index)}
                        data-open={openIndex === index ? "true" : "false"}
                        aria-expanded={openIndex === index ? "true" : "false"}
                    >   
                        <FontAwesomeIcon icon={openIndex === index ? faMinus : faPlus}  />
                        {item.question}
                    </button>
                    <div 
                        className="accordion-panel"
                        tabIndex={-1}
                        ref={answer => (panelRefs.current[index] = answer)}
                    >
                        {item.answer}
                    </div>
                </div>
            ))}
        </div>
    );
}

export default Accordion;
