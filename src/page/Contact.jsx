import "./Contact.css";

function Contact(){
    return(
        <div className="contact">
            <div className="innerbox">
                <h2 className="title">Contact</h2>
                <form id="contact-form" method="POST">
                    <label htmlFor="name">Title</label>
                    <input type="text" name="name" id="name" placeholder="제목을 입력해주세요." />
                    <label htmlFor="email">Your Email</label>
                    <input type="text" name="email" id="email" placeholder="이메일을 입력해주세요." />
                    <label htmlFor="message">Message</label>
                    <textarea name="message" rows="6" id="message" placeholder="내용을 입력해주세요." required></textarea>
                    <button type="submit">Send message</button>
                </form>
            </div>
        </div>
    )
}

export default Contact;