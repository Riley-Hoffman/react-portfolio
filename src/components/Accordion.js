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
                <li className="group" key={index}>
                    <button 
                        className="w-full py-6 px-5 bg-pink-100 text-left font-medium text-[#2d2b34] border-b border-solid border-[#e1d7ee] text-lg transition-all duration-200 ease-in-out aria-expanded:border-b-0 group-last:border-b-0 group"
                        onClick={() => handleAccordionClick(index)}
                        aria-expanded={openIndex === index ? "true" : "false"}
                    >   
                        <FontAwesomeIcon className="p-2 mr-5 box-content text-xs text-pink-200 bg-zinc rounded-[50%] transition-all duration-200 ease-in-out group-hover:text-zinc group-focus-visible:text-zinc group-aria-expanded:text-zinc group-hover:bg-purple-100 group-focus-visible:bg-purple-100 group-aria-expanded:bg-purple-100" icon={openIndex === index ? faMinus : faPlus}  />
                        {item.question}
                    </button>
                    <div 
                        className="px-5 accordion-content transition-all duration-500 ease-in-out focus:m-b-4"
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
