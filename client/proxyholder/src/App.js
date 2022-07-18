import React, { useState } from 'react'
import ClipLoader from "react-spinners/ClipLoader";
import { useQuery } from 'react-query'
import Card from "./Card"
import "./App.css"



function App() {
    const [value, setValue] = useState('/posts')
    const API_URL = `http://${window.location.hostname}:5500${value}`
    const fetchQuery = async () => {
        const res = await fetch(API_URL)
        if (res.status === 200) return await res.json()
        else return res.status(404)
    }

    const { data, isLoading, isError } = useQuery(["posts", value], fetchQuery, { retry: false })

    return (
        <div className='text-center border-2 border-sky-800 bg-sky-800'>


            <div className='bg-blue-200 border-3 border-gray-400 p-4 text-center font-mono relative rounded '>
                <div className='sticky top-0 border  border-gray-400  left-0 right-0 bg-blue-100 rounded-xl'>
                    <h1 className="text-3xl text-stone-800 p-2 margin-2 font-bold">JSONProxyHolder</h1>
                    <input className='w-80 focue:outline-none focus:ring focus:border-black  p-2 text-xl  rounded-xl m-4'
                        type="text"
                        placeholder="write the relative URL here to get data"
                        value={value}
                        onChange={(e) => setValue(e.target.value)}
                    />
                </div>
                <div className='flex flex-wrap gap-4  p-10 rounded'>
                    {data?.id ? (<Card title={data.title} />) : isLoading ? (<div type="button" className="  rounded-2xl text-center w-full "> <ClipLoader color='black'></ClipLoader>

                    </div>) : isError ? (<div type="button" className=" bg-blue-200 text-2xl rounded-2xl text-center w-full "> Try Searching a different query!
                    </div>) : data?.map(e => {
                        return (<Card key={e.id} body={e.body} id={e.id} title={e.title} />)

                    })}
                </div>
            </div>
            <div className='text-2xl font-bold text-stone-800 font-mono rounded-xl p-2 m-2 '>	&#169;codeDamnProjects2022</div>
        </div>
    )
}

export default App

