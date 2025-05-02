import { useNavigate } from "react-router-dom";
import "./Contact.scss";

const Contact = () => {
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent default browser submission

    const myForm = event.target;
    const formData = new FormData(myForm);

    fetch("/", { // POST to the root path (or the page path containing the form)
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams(formData).toString(),
    })
      .then(() => navigate("/succes")) // Navigate to success page on successful submission
      .catch((error) => alert(error)); // Optional: Handle errors
  };

  return (
    <div className="clamp">
      Je suis un form
      <form
        name="contact"
        method="post"
        data-netlify="true"
        onSubmit={handleSubmit} // Use the JS handler
      >
        <input type="hidden" name="form-name" value="contact" />
        <p>
          <label>
            Your Name: <input type="text" name="name" />
          </label>
        </p>
        <p>
          <label>
            Your Email: <input type="email" name="email" />
          </label>
        </p>
        <p>
          <label>
            Message: <textarea name="message"></textarea>
          </label>
        </p>
        <p>
          <button type="submit">Send</button>
        </p>
      </form>
      {/* Outlet removed as Succes is no longer a child */}
    </div>
  );
};

export default Contact;
