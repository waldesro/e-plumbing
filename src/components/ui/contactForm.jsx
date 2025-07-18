import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import ReCAPTCHA from "react-google-recaptcha";

const RECAPTCHA_SITE_KEY = "6Ld5qYcrAAAAAHpjV0zAj6FXB4-pS0ZOf--vawHB"; // Replace with your real key

export function ContactForm({ onSuccess }) {
    const formRef = useRef(null);
    const [sent, setSent] = useState(false);
    const [error, setError] = useState(null);
    const [captchaToken, setCaptchaToken] = useState(null);

    const handleSubmit = (e) => {
        e.preventDefault();

        setError(null);

        if (!captchaToken) {
            setError("Please verify you are not a robot.");
            return;
        }

        emailjs
            .sendForm(
                "service_xyewlg2",
                "template_dlke93g",
                formRef.current,
                "WVPvnQoOJdzVWLR_O"
            )
            .then(() => {
                setSent(true);
                formRef.current.reset();
                setCaptchaToken(null);

                // Automatically close after 2 seconds
                setTimeout(() => {
                    setSent(false);
                    if (onSuccess) onSuccess(); // trigger dialog close
                }, 2000);
            })
            .catch((err) => {
                setError("Something went wrong. Please try again.");
                console.error(err);
            });
    };


    return (
        <form ref={formRef} onSubmit={handleSubmit} className="grid gap-4 mt-4">
            <input
                type="text"
                name="user_name"
                placeholder="Your Name"
                required
                className="border border-gray-300 p-3 rounded-xl shadow-sm"
            />
            <input
                type="email"
                name="user_email"
                placeholder="Your Email"
                required
                className="border border-gray-300 p-3 rounded-xl shadow-sm"
            />
            <textarea
                name="message"
                placeholder="Your Message"
                required
                rows={5}
                className="border border-gray-300 p-3 rounded-xl shadow-sm"
            />

            <ReCAPTCHA
                sitekey={RECAPTCHA_SITE_KEY}
                onChange={(token) => setCaptchaToken(token)}
                className="mx-auto"
            />

            <button
                type="submit"
                className="bg-blue-700 text-white px-6 py-2 rounded hover:bg-blue-800 transition"
            >
                Send Message
            </button>

            {sent && <p className="text-green-600 mt-2">Message sent successfully!</p>}
            {error && <p className="text-red-600 mt-2">{error}</p>}
        </form>
    );
}