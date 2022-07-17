import React, { useEffect, useState } from 'react'
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

    const { data, isLoading, isError} = useQuery(["posts", value], fetchQuery, { retry: false })
 
    return (
        <div className='text-center bg-sky-800'>

      
        <div className='bg-blue-200 border-3 border-gray-400 p-4 text-center font-mono relative rounded '>
           <div className='sticky top-0 border  border-gray-400  left-0 right-0 bg-blue-100 rounded-xl'>
            <h1  className="text-3xl  p-2 margin-2 font-bold">JSONProxyHolder!</h1>
            <input className='w-80 focue:outline-0 p-2 text-xl border border-gray-400 rounded-xl m-4'
                type="text"
                placeholder="write the relative URL here to get data"
                value={value}
                onChange={(e) => setValue(e.target.value)}
                />
                </div>
            <div className='flex flex-wrap gap-4  p-10 rounded'>
            {data?.id ? (<Card title={data.title} />) : isLoading ? (<h1> ...loading </h1>) : isError ? (<h1> ...error </h1>) : data?.map(e => {
                return (<Card body={e.body} id={e.id} title={e.title} />)

            })}
            </div>
        </div>
<div className='text-2xl font-bold  rounded-xl p-2 m-2 '>	&#169;CodedamnProjects2022</div>
        </div>
    )
}

export default App

