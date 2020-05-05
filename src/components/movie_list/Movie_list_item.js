import React from 'react'

function Movie_list_item(props) {
    return (
        <div className='flex flex-col flex-wrap justify-between w-64 m-2'>
            {/* <div className="">{props.title}</div> */}
            
            <img className="w-64 h-auto" src={props.base_url+props.poster_size+props.poster} 
            alt="poster"/>
            <div className="">{props.releasedate}</div>
            <div className="">{props.vote}</div>
        </div>
    )
}

export default Movie_list_item
