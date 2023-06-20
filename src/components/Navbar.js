import React from 'react'

export default function Navbar({ title }) {
    return (
        // <nav className="navbar navbar-dark bg-dark ">
        //     <div className="container">
        //         <a href="#" className="navbar-brand">{title}</a>
        //     </div>
        // </nav>

        <nav className="navbar navbar-dark bg-dark">
            <>
                <div className="container-fluid">
                    <a className="navbar-brand">{title}</a>
                    <form className="d-flex" role="search">
                        <input className="form-control me-2" type="search" aria-label="Search"/>
                        <button className="btn btn-outline-light" type="submit">Search</button>
                    </form>
                </div>
            </>
        </nav>
    )
}

