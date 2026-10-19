function Contact() {
    return (
        <section className="simple-page">
            <span className="sectionLabel" data-scroll-reveal>GET IN TOUCH</span>

            <h1 data-scroll-reveal>CONTACT US</h1>

            <p className="contactIntro" data-scroll-reveal>
                Have a question about our drinks? Send us a message.
            </p>

            <form className="contactForm" data-scroll-reveal>
                <input type="text" placeholder="Your Name" />
                <input type="email" placeholder="Your Email" />
                <input type="text" placeholder="Subject" />
                <textarea placeholder="Your Message"></textarea>
                <button type="submit">Send Message</button>
            </form>
        </section>
    );
}

export default Contact;