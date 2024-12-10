import React from "react";

// function Card(props)

function Card({userName = 'Unknown'})
{
    return(
        <>
    <div className="max-w-xs rounded-md shadow-md bg-gradient-to-b from-blue-900 via-gray-900 to-orange-900 text-gray-100">
      <img
        src="https://images.pexels.com/photos/1583582/pexels-photo-1583582.jpeg?auto=compress&cs=tinysrgb&w=800"
        alt="Sunset Scene"
        className="object-cover object-center w-full rounded-t-md h-72"
      />
      <div className="flex flex-col justify-between p-6 space-y-8">
        <div className="space-y-2">
        <h2 className="text-3xl font-semibold tracking-wide">{userName}</h2>  {/* if use props above then use props.userName here */}
          <p className="text-gray-400">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Distinctio tempora ipsum
            soluta amet corporis accusantium aliquid consectetur eaque!
          </p>
        </div>
        <button
          type="button"
          className="flex items-center justify-center w-full p-3 font-semibold tracking-wide rounded-md bg-gray-800 text-gray-200"
        >
          Read more
        </button>
      </div>
    </div>
    </>
    )
    
}

export default Card