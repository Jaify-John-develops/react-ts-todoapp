import { useState } from "react";
import ImageHeader from "./components/ImageHeader"


const App = () => {
  const [items, setItems] = useState<string[]>([]);
  const [inputValue, setInputValue] = useState<string>("");

  const handleSubmit = (event : React.FormEvent) => {
    event.preventDefault();
    setItems((prev) => [...prev, inputValue]);
    setInputValue("");
  }




  return (
    <div className="h-[100vh] flex flex-col justify-center items-center ">
      <ImageHeader />

      <div className="w-[350px]">
        <form className="mb-5" onSubmit={handleSubmit}>
         
    
          <input
            type="text"
            value={inputValue}
            className="mb-2 w-full rounded-sm border border-gray-400 bg-white p-2 text-black my-2" onChange={(event) => setInputValue(event.target.value)} />
          <button type="submit" className="bg-gray-700 w-full p-2">Add</button>

        </form>
        <div className=" h-52 overflow-y-auto">

          {
            items.map((data) => (

      

            < div key = {data} className="flex justify-between items-center border border-slate-600 pl-2 mb-2 mr-1 py-2">
          <p>{data}</p>
          <button type="button" aria-label="Delete task" className="mr-2 text-red-600">
            <svg
              aria-hidden="true"
              className="h-5 w-5"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 7h12M9 7V4h6v3m-8 0 1 13h8l1-13M10 11v5m4-5v5"
              />
            </svg>
          </button>
        </div>
          ))
}

      </div>

    </div>
      
    </div >
  )
}

export default App
