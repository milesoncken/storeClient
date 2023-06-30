import React from "react";
import "./Style.css";
import { shades } from "../../theme";
function About() {
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
          About
          <div
            style={{
              marginLeft: "0.5rem",
              marginRight: "0.5rem",
              color: shades.secondary[600],
            }}>
            {" "}
            Raza{" "}
          </div>
          Clothing:
        </h1>
        <p>
          At Raza Clothing, we believe that fashion is an expression of
          individuality, and we strive to bring the latest trends and styles to
          fashion-forward individuals who want to make a statement. Inspired by
          the world of fashion and driven by our passion for creating unique
          designs, Raza is a fictional clothing brand that offers a diverse
          range of high-quality apparel for men, women, and children.
        </p>
        <br></br>
        <h1>Our Vision:</h1> Raza Clothing was founded with a vision to become a
        leading name in the fashion industry, offering affordable yet stylish
        clothing options that cater to the ever-evolving tastes of our
        customers. We aim to provide a seamless shopping experience, combining
        the convenience of online shopping with the joy of discovering
        fashionable pieces that reflect personal style.
        <br></br>
        <h1>Quality and Sustainability: </h1>At Raza, we prioritize quality and
        sustainability. Each garment is carefully crafted using premium
        materials to ensure comfort, durability, and an impeccable fit. We
        understand the importance of responsible fashion, and we are committed
        to minimizing our ecological footprint. Our production processes adhere
        to ethical standards, promoting fair labor practices and reducing
        environmental impact wherever possible.
        <br></br>
      </div>
      <div style={{ marginLeft: "5%", marginRight: "0%" }}>
        <h1>Trendsetting Collections:</h1> Our design team at Raza continuously
        explores global fashion trends, translating them into captivating
        collections that resonate with our diverse customer base. From timeless
        classics to cutting-edge styles, our ever-evolving range of clothing
        reflects the latest runway looks and fashion-forward aesthetics. Whether
        you're seeking casual essentials, elegant formal wear, or statement
        pieces to turn heads, Raza Clothing has got you covered.
        <br></br>
        <h1>Customer-Centric Approach: </h1>At Raza, we place our customers at
        the heart of everything we do. We value your feedback and strive to
        create an exceptional shopping experience. Our dedicated customer
        service team is here to assist you at every step, ensuring your needs
        are met and any concerns are addressed promptly. We believe that
        everyone deserves to feel confident and empowered through fashion, and
        we are committed to helping you find your unique style.
        <br></br>
        <h1> Join the Raza Community: </h1>We invite you to join the Raza
        community and become a part of our fashion-forward journey. Explore our
        curated collections, discover your signature style, and express your
        individuality through our diverse range of clothing options. Follow us
        on social media to stay updated on the latest trends, exclusive offers,
        and exciting promotions. At Raza Clothing, we're here to make fashion
        accessible, enjoyable, and empowering for everyone. Welcome to Raza
        Clothing, where fashion meets limitless possibilities!
      </div>
    </div>
  );
}

export default About;
