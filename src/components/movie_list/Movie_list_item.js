import React from 'react'

function Movie_list_item(props) {
    return (
        <div className='flex flex-col flex-wrap justify-between w-1/3 m-1 md:w-64 md:m-2' >
            
            <img
                className=" h-auto w-64 md:w-full" 
                src={props.base_url+props.poster_size+props.poster} 
                alt="poster"
                onClick={props.clicked}/>
            {/* <div className="">{props.releasedate}</div> */}
            {/* <div className="">{props.vote}</div> */}
        </div>
    )
}

export default Movie_list_item
