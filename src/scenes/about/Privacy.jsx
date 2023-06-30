import React from "react";
import { shades } from "../../theme";

function Privacy() {
  return (
    <div
      style={{
        marginTop: "5%",
        marginLeft: "5%",
        marginRight: "5%",
        width: "90vw",
        display: "flex",
        flexDirection: "row",
      }}>
      <div style={{ marginLeft: "0%", marginRight: "5%" }}>
        <h1
          style={{
            display: "flex",
            textAlign: "center",
          }}>
          <div
            style={{
              color: shades.secondary[600],
            }}>
            Privacy Policy
          </div>
        </h1>
        <div>
          <div style={{ width: "45%" }}>
            At Raza Clothing, we are committed to protecting your privacy and
            safeguarding the personal information you provide to us. This
            Privacy Policy outlines how we collect, use, disclose, and store
            your information when you interact with our website or services. By
            using our website, you consent to the practices described below.
          </div>
          <div style={{ display: "flex" }}>
            <div style={{ paddingRight: "5%" }}>
              <h1>1. Information Collection and Use:</h1> We may collect
              personal information, such as your name, email address, shipping
              address, and payment details, when you place an order, create an
              account, subscribe to our newsletter, or interact with our
              website. This information is used to fulfill your orders, provide
              customer support, and improve our services. We may also collect
              non-personal information, such as your IP address and browsing
              activity, to enhance your browsing experience and analyze website
              usage. <h1>2. Cookies and Tracking Technologies: </h1>We use
              cookies and similar tracking technologies to enhance your
              experience on our website. Cookies are small text files stored on
              your device that enable us to recognize your preferences and
              tailor your browsing experience. You can adjust your browser
              settings to refuse cookies; however, this may limit certain
              functionality on our website. <h1>3. Information Sharing:</h1> We
              may share your personal information with trusted third-party
              service providers who assist us in operating our website,
              processing payments, and delivering products to you. We ensure
              that these service providers adhere to strict confidentiality and
              data protection standards. We do not sell, trade, or rent your
              personal information to third parties for their marketing
              purposes. <h1>4. Data Security:</h1> We implement
              industry-standard security measures to protect your personal
              information from unauthorized access, disclosure, alteration, or
              destruction. However, please note that no method of data
              transmission over the internet or electronic storage is 100%
              secure. While we strive to protect your information, we cannot
              guarantee absolute security.
            </div>
            <div style={{ marginLeft: "0%" }}>
              <h1>5. Third-Party Links:</h1> Our website may contain links to
              third-party websites or services that are not owned or controlled
              by Raza Clothing. We are not responsible for the privacy practices
              or content of these third-party sites. We encourage you to review
              their privacy policies before providing any personal information.
              <h1> 6. Children's Privacy:</h1> Our website is not intended for
              individuals under the age of 16. We do not knowingly collect
              personal information from children. If you believe that we may
              have inadvertently collected personal information from a child,
              please contact us immediately, and we will take appropriate steps
              to delete the information.<h1> 7. Your Rights:</h1> You have the
              right to access, update, correct, and delete your personal
              information stored with us. If you wish to exercise any of these
              rights or have any concerns about the use of your information,
              please contact us using the provided contact information. We will
              respond to your request in accordance with applicable privacy
              laws. <h1>8. Changes to the Privacy Policy: </h1>We reserve the
              right to update or modify this Privacy Policy at any time. Any
              changes will be effective immediately upon posting on our website.
              We encourage you to review this Privacy Policy periodically to
              stay informed about our information practices. If you have any
              questions or concerns regarding this Privacy Policy, please
              contact us using the provided contact information.
            </div>
          </div>
          <p style={{ textAlign: "right", color: "grey" }}>
            Last updated: 6/29/2023
          </p>
        </div>
      </div>
    </div>
  );
}

export default Privacy;
