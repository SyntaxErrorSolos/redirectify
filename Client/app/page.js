'use client'

import { useEffect } from "react"



export default function Home() {
  useEffect(() => {
    const herotext = document.getElementById("hero_text");
    const input = document.getElementById("input");
    const confirm = document.getElementById("confirm");

    confirm.addEventListener("click", () => {
      if (input.value === '') return herotext.innerText = "The URL field is empty."
      else {
        herotext.innerText = "Processing request. Please hold on."
        fetch("http://localhost:3000/shortify", {
          method: "POST",
          mode: "cors",
          headers: {
            "url": input.value
          }
        })
      }
    })
  }, [

  ]);
  return (
    <div className="flex h-screen">
      <div className="m-auto text-center">
        <div id="hero_section" className="space-y-6">
          <h1 id="hero_text" className="text-white text-4xl font-bold">
            Hello, Please enter a valid URL to get started.
          </h1>
          <input id="input" type="url" placeholder="Enter a valid URL" className="bg-white outline-none rounded-lg px-[30rem] py-3 text-center text-3xl"></input>
          <button id="confirm" className="rounded-full bg-green-500 text-white text-3xl font-bold px-10 py-3">Continue</button>
        </div>
      </div>
    </div>




  )
}
