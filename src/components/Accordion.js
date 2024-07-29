import { useState, useRef, useEffect } from 'react';

function Accordion({ items }) {
    const [openIndex, setOpenIndex] = useState(null);
    const panelRefs = useRef([]);

    const handleClick = index => {
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
                        onClick={() => handleClick(index)}
                        data-open={openIndex === index ? "true" : "false"}
                    >
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
