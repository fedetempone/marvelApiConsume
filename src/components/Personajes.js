import React from 'react'

const Personajes = ({ personajes = [] }) => {
return (
<div className='row'>
    {personajes.map((item, indice) => (
        <div key= {indice} className='col-lg-3 col-md-6 col-sm-12 mb-4'>
            <div className='card' style={{margin: "0px auto",  width:"200px", height:"300px", color: "white" , backgroundColor: "transparent"}}>
                {/* {personajeURL= item.urls[indice]} */}
                <img src={item.thumbnail.path+'.'+item.thumbnail.extension} alt="" style={{margin: "0px auto", width:"100%", height:"50%"}} />
                <div className='card-body'>
                    <h5 className='card-title'>{item.name}</h5>
                    <hr />
                    {/* <p></p> */}
                </div>
            </div>
        </div>
    ))
    }
</div>
)
}

export default Personajes;

// const personajeURL = item.thumbnail.path
// const personajeExtension = item.thumbnail.extension