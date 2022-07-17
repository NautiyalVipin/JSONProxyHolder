import React from "react"

const Card = (props) =>{


return   <div className="flex-auto p-4 w-60 bg-blue-100 border border-gray-400 hover:bg-sky-800 hover:text-white shadow  rounded-lg">
                <div className="rounded-lg">
                    <h3 className="text-xl m-2 font-bold capitalize">{props.id}: {props.title}</h3>
                    <p  className="font-light">{props.body}</p>
                    <a href={props.body} target="_blank">
                        {/* <button>Full Story</button> */}
                    </a>
                </div>

        </div>

}


export default Card