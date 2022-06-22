import { useState } from "react"

function AddCategory({setCategories,onNewCategory}) {
  
    const [inputValue, setInputValue] = useState('')

    const onInputChange = (e)=>{
        setInputValue(e.target.value)
    }
  
    const onSubmit=(e)=>{
        e.preventDefault();
        if(inputValue.trim().length<=1) return;
        //setCategories((category)=>[inputValue,...category])
        onNewCategory(inputValue.trim());
        setInputValue('')
    }
  
    return (
        <form onSubmit={(e)=>onSubmit(e)}>
            <input
                    type="text"
                    placeholder="Buscar Gif"
                    onChange={(e)=>onInputChange(e)}
                    value={inputValue}
            />
        </form>
  )
}

export default AddCategory;
