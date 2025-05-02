import "./Contact.scss";

const Contact = () => {
  return (
    <div className="clamp">
      Je suis un form
      <form name="contact" action="/succes" method="post" data-netlify="true"> {/* Updated action */}
      <input type="hidden" name="form-name" value="contact" />
          <p>
            <label>Your Name: <input type="text" name="name"/></label>
          </p>
          <p>
            <label>Your Email: <input type="email" name="email"/></label>
          </p>
          <p>
            <label>Message: <textarea name="message"></textarea></label>
          </p>
          <p>
            <button type="submit">Send</button>
          </p>
        </form>
        {/* Outlet removed as Succes is no longer a child */}
    </div>
  );
}

export default Contact;
