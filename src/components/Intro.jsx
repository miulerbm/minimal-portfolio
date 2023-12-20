// import React from "react";

function Intro() {
  return (
    <div className="flex items-center justify-center flex-col text-center pt-20 p-10">
      <h1 className="text-4xl md:text-7xl dark:text-white mb-1 md:mb-3 font-bold">
        Miuler Blas
      </h1>
      <p className="text-base md:text-xl mb-3 font-medium">
        Mechatronics Engineer & Software Developer
      </p>
      <p className="text-sm max-w-xl mb-6 font-bold">
        I have coded in C++, Java, Assembler, MATLAB and most recently in Python
        and JavaScript. I like robotics and build software apps. Interested in
        using technology to bring cool ideas to life. You can checkout my{" "}
        <a
          href="www.linkedin.com/in/miuler-blas-marquina"
          target="_blank"
          className="text-cyan-600 hover:underline underline-offset-2 decoration-2 decoration-red-600"
          rel="noreferrer noopener"
        >
          Linkedin
        </a>{" "}
        to know more about me.
      </p>
    </div>
  );
}

export default Intro;
