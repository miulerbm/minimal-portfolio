// import React from "react";

function Intro() {
  return (
    <div className="flex items-center justify-center flex-col text-center pt-20 p-10">
      <h1 className="text-4xl md:text-7xl dark:text-white mb-1 md:mb-3 font-bold">
        Miuler Blas
      </h1>
      <p className="text-base md:text-xl mb-3 font-medium">
        Fullstack Developer | Mechatronics
      </p>

      <p className="text-sm max-w-xl mb-6 font-bold">
        &quot;We who cut mere stones must always be envisioning cathedrals&quot;
        <br></br>I&apos;ve coded solutions in diverse fields, ranging from
        embedded systems to web applications. Explore my journey on{" "}
        <a
          href="https://www.linkedin.com/in/miulerbm"
          target="_blank"
          className="text-cyan-600 hover:underline underline-offset-2 decoration-2 decoration-red-600"
          rel="noreferrer noopener"
        >
          LinkedIn
        </a>{" "}
        to discover more about my endeavors.
      </p>
    </div>
  );
}

export default Intro;
