import React, { useState } from 'react'


const AddCategory = ( {setCategories} ) =>  {

    const [inputValue, setInputValue] = useState('');

    const handleInputchange = (e)=>{
        setInputValue(e.target.value);
    }

    const hadleSubmit = (e) => {
        e.preventDefault();
        if (inputValue.trim().length >2 ) {
            setCategories( categories => [ inputValue ,...categories]);
            setInputValue('');
       }
        
        
    }


    return (
        <form onSubmit= { hadleSubmit }>
            <input 
            className='form-control'
                type='text'
                value={ inputValue }
                onChange= { handleInputchange }
                placeholder= 'Agrega una nueva categoria y presiona enter'
            />
        </form>
    )
}


export default AddCategory;
