import React, { useState } from "react"
import ClickAwayListener from 'react-click-away-listener';
const Card = (props) => {
    const [value, setValue] = useState(false)

    const LargeDiv = () => {
        return (<ClickAwayListener onClickAway={()=>setValue(e=>!e)}>
            <div className="fixed overflow-y-auto  top-20 p-14 inset-x-9 p-4 w-600 h-96 border border-gray-800 z-10 bg-sky-900 rounded-3xl text-white"><button onClickAway={()=>alert("Click away works")} onClick={() => setValue(e => !e)} className=" rounded-full bg-gray-200 w-16 text-black absolute right-0 top-0 m-2 p-1">X</button>
            <div className="">
                <h3 className="text-2xl  m-2 font-bold capitalize">{props.id}: {props.title}</h3>
                <p className="font-light text-xl p-10">{props.body}</p>

            </div>

        </div>
         </ClickAwayListener>)
    }

    if (value) return <LargeDiv />
    return <div onClick={() => setValue(true)} className="flex-auto p-4 w-60 bg-blue-100 border border-gray-400 transition-all ease-in-out hover:translate  hover:bg-sky-900 hover:text-white rounded-lg">
        <div className="">
            <h3 className="text-xl m-2 font-bold capitalize">{props.id}: {props.title}</h3>
        </div>

    </div>

}


export default Card