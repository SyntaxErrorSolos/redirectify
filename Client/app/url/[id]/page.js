'use client'

import { useEffect } from "react"



export default function Home() {
  useEffect(() => {
  }, [

  ]);
  return (
    <div className="flex h-screen">
      <div className="m-auto text-center">
        <div id="hero_section" className="space-y-6">
          <h1 className="text-white text-4xl font-bold">
            Hello, Please enter a valid URLeee to get started.
          </h1>
        <input type="url" placeholder="Enter a valid URL" className="bg-white outline-none rounded-lg px-[30rem] py-3 text-center text-3xl"></input>
        <button className="rounded-full bg-green-500 text-white text-3xl font-bold px-10 py-3">Continue</button>
        </div>
      </div>
    </div>




  )
}
