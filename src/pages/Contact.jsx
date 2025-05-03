import { useState } from "react";
import { motion, AnimatePresence } from "motion/react"; // Or framer-motion
import "./Contact.scss";
import Logo from "../components/Logo";

const Contact = () => {
  // State to track form submission status
  const [submissionStatus, setSubmissionStatus] = useState(null); // null | 'submitting' | 'success' | 'error'

  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent default browser submission
    setSubmissionStatus("submitting"); // Show submitting state

    const myForm = event.target;
    const formData = new FormData(myForm);

    fetch("/", {
      // POST to the root path (or the page path containing the form)
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams(formData).toString(),
    })
      .then(() => {
        setSubmissionStatus("success"); // Show success message
      })
      .catch((error) => {
        console.error("Form submission error:", error);
        setSubmissionStatus("error"); // Show error message
      });
  };

  return (
    <div className="clamp contact-page">
      {" "}
      {/* Added class for page styling */}
      {/* AnimatePresence handles enter/exit animations */}
      <AnimatePresence mode="wait">
        {submissionStatus !== "success" ? (
          // Show Form (or error state)
          <motion.div
            key="form"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
          >
            <div className="centered">
              <Logo texte={"Écrivez moi"} />
            </div>
            <form
              name="contact"
              method="post"
              data-netlify="true"
              onSubmit={handleSubmit}
              className="contact-form" // Class for form styling
              data-submitting={submissionStatus === "submitting"} // Attribute for styling during submission
            >
              {/* Netlify needs this hidden input */}
              <input type="hidden" name="form-name" value="contact" />
              {/* Honeypot field (optional but recommended) */}
              <p className="hidden" style={{ display: "none" }}>
                <label>
                  <input name="bot-field" />
                </label>
              </p>
              <div className="form-group">
                {" "}
                {/* Group label and input */}
                <label htmlFor="name">Votre Nom :</label>
                <input id="name" type="text" name="name" required />
              </div>
              <div className="form-group">
                <label htmlFor="email">Votre Email :</label>
                <input id="email" type="email" name="email" required />
              </div>
              <div className="form-group">
                <label htmlFor="message">Message :</label>
                <textarea id="message" name="message" required></textarea>
              </div>
              <button
                type="submit"
                disabled={submissionStatus === "submitting"}
              >
                {submissionStatus === "submitting"
                  ? "Envoi en cours..."
                  : "Envoyer"}
              </button>
            </form>
            {/* Show error message if submission failed */}
            {submissionStatus === "error" && (
              <motion.p
                className="error-message"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
              >
                Oops! Une erreur est survenue. Veuillez réessayer.
              </motion.p>
            )}
          </motion.div>
        ) : (
          // Show Success Message
          <motion.div
            key="success"
            className="success-message"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4 }}
          >
            <h2>Merci !</h2>
            <p>
              Votre message a bien été envoyé. Je reviendrai vers vous
              rapidement.
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Contact;
