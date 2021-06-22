import React from 'react'

const GridItem = ({id, title, url}) => {
    console.log(id, title, url);
    return (
       <>
            <div className='card col-sm-2 col-lg-2 animate__animated animate__fadeIn' >
                <img src={url} className='card-img-top' alt={title}/>
                {/* <div className='card-body'>
                    <p className='card-text'>{ title }</p>
                </div> */}
            </div>
      </>
        
    )
}


export default GridItem;
