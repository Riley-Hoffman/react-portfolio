
function Form() {
    return (
        <form className="max-w-screen-md pt-5 px-5 pb-10" action="https://formspree.io/f/xwkyonza" method="POST">
            <fieldset>
                <legend className="sr-only">Contact Form</legend>
                <div className="pb-5">
                    <div className="md:flex justify-between items-center gap-5 pb-3">
                        <label htmlFor="name">Name:</label>
                        <input
                            className="w-full gradient-border"
                            enterKeyHint="next"
                            id="name"
                            name="name"
                            placeholder="Your name.."
                            type="text"
                            required
                            />
                        <br className="md:hidden inline" />
                        <br className="md:hidden inline" />
                        <label htmlFor="email">Email:</label>
                        <input
                            className="w-full gradient-border"
                            enterKeyHint="next"
                            id="email"
                            name="email"
                            placeholder="Your email.."
                            type="email"
                            required
                        />
                    </div>
                    <label htmlFor="message">Message:</label>
                    <textarea
                        className="w-full gradient-border"
                        id="message"
                        name="message"
                        placeholder="Write me a message.."
                        spellCheck="true"
                        rows="8"
                        required
                    ></textarea>
                </div>
            </fieldset>
            <button value="Submit" className="p-3 button">
                Submit
            </button>
        </form>
    );
}

export default Form;
