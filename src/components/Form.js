
function Form() {
    return (
        <form className="max-700px" action="https://formspree.io/f/xwkyonza" method="POST" style={{ padding: '20px 20px 40px' }}>
            <fieldset>
                <legend className="sr-only">Contact Form</legend>
                <div className="block-800" style={{ paddingBottom: '20px' }}>
                    <div className="flex block-800" style={{ paddingBottom: '10px', alignItems: 'center', justifyContent: 'space-between', gap: '22px'}}>
                        <label htmlFor="name">Name:</label>
                        <input
                            className="test max-40 width-100 gradient-border"
                            style={{ margin: '0' }}
                            enterKeyHint="next"
                            id="name"
                            name="name"
                            placeholder="Your name.."
                            type="text"
                            required
                            />
                        <br className="show-at-800" />
                        <br className="show-at-800" />
                        <label htmlFor="email">Email:</label>
                        <input
                            className="test max-40 width-100 gradient-border"
                            style={{ margin: '0' }}
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
                        className="test width-100 gradient-border"
                        style={{ marginLeft: 'auto', display: 'block' }}
                        id="message"
                        name="message"
                        placeholder="Write something.."
                        spellCheck="true"
                        rows="6"
                        required
                    ></textarea>
                </div>
            </fieldset>
            <button value="Submit" className="button">
                Submit
            </button>
        </form>
    );
}

export default Form;
