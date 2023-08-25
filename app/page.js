'use client'

import { useEffect } from "react"



export default function Home() {
  useEffect(() => {
    const listOfGifs = [
      '<image src="https://media.tenor.com/rAF4R8RSPswAAAAd/the-it-crowd-dedcel.gif">',
      '<image src="https://media.tenor.com/IoooQf-AFnUAAAAd/code-programmer.gif">',
      '<image src="https://media.tenor.com/uYP_Nkq8VPsAAAAd/coding-hello-world.gif">',
      '<image src="https://media.tenor.com/CtdmjqENwtcAAAAd/python-programming.gif">',
      '<image src="https://media.tenor.com/EK_plqlM_D4AAAAd/dan-shiffman-coding.gif">',
      '<image src="https://media.tenor.com/X8854xxuQ_EAAAAd/destroy-code-mad.gif">',
      '<image src="https://media.tenor.com/57w9du3NrV0AAAAd/css-html.gif">',
      '<image src="https://media.tenor.com/IDGMfpFgxosAAAAC/programmer-day-code.gif">'
    ]
    function createRandomDIV() {
      const randomized = Math.floor(Math.random() * listOfGifs.length)
      const randomGIF = listOfGifs[randomized];
      const gifContainer = document.getElementById("gif-container");
      gifContainer.innerHTML = randomGIF;
    }
    window.onload = createRandomDIV()
  }, [

  ]);
  return (
    <div className="flex h-screen">
      <div className="m-auto text-center">
        <div id="hero_section" className="space-y-6">
          <h1 className="text-4xl text-white font-medium">
            bro, youre a programmer. We dont talk to females
          </h1>
          <div id="gif-container"></div>
        </div>
      </div>
    </div>




  )
}
