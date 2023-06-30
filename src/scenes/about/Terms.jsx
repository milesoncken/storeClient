import React from "react";
import { shades } from "../../theme";

function Terms() {
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
            Terms and Conditions
          </div>
        </h1>
        <div>
          <div style={{ width: "45%" }}>
            Welcome to Raza Clothing! These Terms and Conditions govern your use
            of our website and services. By accessing or using our website, you
            agree to comply with and be bound by these terms. Please read them
            carefully before proceeding.
          </div>
          <div style={{ display: "flex" }}>
            <div style={{ marginRight: "5%" }}>
              <h1>1. Intellectual Property:</h1>
              All content on the Raza Clothing website, including but not
              limited to logos, trademarks, images, text, graphics, and
              software, are the intellectual property of Raza Clothing and
              protected by applicable copyright and trademark laws. You may not
              use, reproduce, distribute, modify, or create derivative works
              without our prior written consent.
              <h1> 2. Product Information: </h1>We strive to provide accurate
              and up-to-date product information on our website. However, we do
              not warrant that the descriptions, colors, sizes, availability, or
              other product details provided are error-free or complete. We
              reserve the right to correct any errors, inaccuracies, or
              omissions and to change or update information at any time without
              prior notice.
              <h1> 3. Pricing and Payments:</h1>
              All prices listed on the Raza Clothing website are in the
              designated currency and exclude applicable taxes and shipping
              charges unless otherwise stated. We reserve the right to modify
              prices at any time without prior notice. Payment for purchases
              must be made in full and in the specified currency. We accept
              various forms of payment as indicated on our website.
              <h1> 4. Order Acceptance and Fulfillment:</h1>
              Placement of an order on the Raza Clothing website constitutes an
              offer to purchase products. We reserve the right to accept or
              decline any order in our sole discretion. In the event that we are
              unable to fulfill an order, we will notify you and provide a
              refund if payment has been made.
              <h1> 5. Shipping and Delivery: </h1>Raza Clothing aims to process
              and ship orders promptly. However, we do not guarantee specific
              delivery times and are not responsible for any delays caused by
              unforeseen circumstances or third-party shipping providers.
              Additional charges such as customs fees or import taxes may apply
              for international orders and are the responsibility of the buyer.
            </div>
            <div style={{ marginLeft: "5%" }}>
              <h1> 6. Returns and Exchanges: </h1>We want you to be satisfied
              with your purchase from Raza Clothing. Please refer to our Returns
              and Exchanges Policy, available on our website, for detailed
              information on the process, eligibility, and conditions for
              returning or exchanging products.{" "}
              <h1>7. Privacy and Data Protection: </h1>
              Protecting your privacy is important to us. We collect and process
              personal information in accordance with our Privacy Policy, which
              outlines how we handle, store, and use your data. By using our
              website, you consent to the collection and processing of your
              information as described in the Privacy Policy.{" "}
              <h1>8. Limitation of Liability: </h1>Raza Clothing shall not be
              liable for any direct, indirect, incidental, consequential, or
              punitive damages arising from the use or inability to use our
              website or products, including but not limited to errors,
              interruptions, viruses, or unauthorized access to your personal
              information. <h1>9. Governing Law and Jurisdiction: </h1>These
              Terms and Conditions shall be governed by and construed in
              accordance with the laws of the jurisdiction in which Raza
              Clothing is registered. Any disputes arising out of or in
              connection with these terms shall be subject to the exclusive
              jurisdiction of the competent courts in that jurisdiction.{" "}
              <h1>10. Modifications: </h1>Raza Clothing reserves the right to
              modify, update, or change these Terms and Conditions at any time
              without prior notice. It is your responsibility to review this
              page periodically for any amendments. Continued use of our website
              constitutes acceptance of any changes made. If you have any
              questions or concerns regarding these Terms and Conditions, please
              contact us through the provided contact information on our
              website.
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

export default Terms;
