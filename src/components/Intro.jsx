// import React from "react";

function Intro() {
  return (
    <div className="flex items-center justify-center flex-col text-center pt-20 p-10">
      <h1 className="text-4xl md:text-7xl mb-1 md:mb-3 font-bold">
        Miuler Blas
      </h1>
      <p className="text-base md:text-xl mb-3 font-medium">
        Mechatronics Engineer & Software Developer
      </p>
      <p className="text-sm max-w-xl mb-6 font-bold">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet tempore
        provident labore expedita quae debitis suscipit, recusandae dolorum
        quasi perferendis optio, doloribus sequi culpa inventore placeat, sint
        ipsa. Necessitatibus, voluptatem. Puedes ir a{" "}
        <a
          href="www.linkedin.com/in/miuler-blas-marquina"
          target="_blank"
          className="text-cyan-600 hover:underline underline-offset-2 decoration-2 decoration-red-600"
          rel="noreferrer noopener"
        >
          Linkedin
        </a>{" "}
        para saber más de mí.
      </p>
    </div>
  );
}

export default Intro;
