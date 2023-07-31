const path = require("path");
const emailTemplates = require("email-templates");

const templatesDir = path.join(__dirname, "templates");

// Create a transporter (e.g., using SMTP) to send emails
// ...

// Render and send the email
new emailTemplates(templatesDir, (err, template) => {
  if (err) {
    console.error("Error loading email templates:", err);
    return;
  }

  const locals = {
    username: "John Doe", // Replace with dynamic content
  };

  // Send the welcome email using the 'welcome' template
  template("welcome", locals, (err, html, text) => {
    if (err) {
      console.error("Error rendering email template:", err);
      return;
    }

    // Send the email using the transporter
    transporter.sendMail(
      {
        to: "recipient@example.com",
        subject: "Welcome to our website!",
        html,
      },
      (err, info) => {
        if (err) {
          console.error("Error sending email:", err);
        } else {
          console.log("Email sent:", info.response);
        }
      }
    );
  });
});
