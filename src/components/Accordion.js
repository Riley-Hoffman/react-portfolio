import { useState } from 'react';

function Accordion({ items }) {
    const [openIndex, setOpenIndex] = useState(null);

    const handleClick = index => {
        setOpenIndex(prevIndex => (prevIndex === index ? null : index));
    };

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
                        data-open={openIndex === index ? "true" : "false"}
                    >
                        {item.answer}
                    </div>
                </div>
            ))}
        </div>
    );
}

export default Accordion;
