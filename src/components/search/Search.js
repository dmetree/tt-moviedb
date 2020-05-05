import React, { Component } from 'react'

export default class Search extends Component {
    render() {
        return (
            <div className="py-10">
                <div className="flex justify-center bg-gray-600 rounded-full mx-40 py-2">
                    <input 
                    className="bg-transparent outline-none text-3xl"  
                    placeholder="Search for a movie..." type="text" />
                </div>
            </div>
        )
    }
}
