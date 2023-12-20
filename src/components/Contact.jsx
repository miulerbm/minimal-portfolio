// import React from "react";
import Title from "./Title";

function Contact() {
  return (
    <div className="flex flex-col items-center mb-10 mx-auto px-20 max-w-7xl">
      <Title>Contact</Title>
      <div className="flex flex-col items-left mt-4">
        <a
          href="https://www.linkedin.com/in/miulerbm"
          target="_blank"
          rel="noopener noreferrer"
          className="text-cyan-600 hover:underline underline-offset-2 decoration-2 decoration-red-600"
        >
          LinkedIn: Miuler Blas
        </a>

        <a
          href="https://github.com/miulerbm"
          target="_blank"
          rel="noopener noreferrer"
          className="text-cyan-600 hover:underline underline-offset-2 decoration-2 decoration-red-600"
        >
          GitHub: miulerbm
        </a>
        <a
          href="mailto:miulerbm00@gmail.com"
          className="text-cyan-600 hover:underline underline-offset-2 decoration-2 decoration-red-600"
        >
          Email: miulerbm00@gmail.com
        </a>
        <p className="text-cyan-600 underline-offset-2 decoration-2 decoration-red-600">
          WhatsApp: (+51) 946 574 201
        </p>
      </div>
    </div>
  );
}

export default Contact;
