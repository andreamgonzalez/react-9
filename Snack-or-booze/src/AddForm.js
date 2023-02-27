import React from "react";
import { useState } from "react";

function ItemForm({setData}) {
    const initialState = {
        item: "",
        name: ""
    }

    const [formData, setFormData] = useState(initialState)
    const [item, setItem] = useState('Food'); //sets state to Food as default for dropdown

    const handleChange = (e) => {
        const {name, value} = e.target
        setFormData(fData=>({
            ...fData,
            [name]: value,
            item: item         
        }))
    }

    function setDataForParent(e) {
        e.preventDefault()
        console.log(e)
        setData({formData}) //gets a not a function error???
    }

        return (
        <form onSubmit={setDataForParent}>

        <label htmlFor="item">Choose a category</label>
        <select id="item" name="item">
            <option value="food">Food</option>
            <option value="drink">Drink</option>
        </select>

        <br/>

        <label htmlFor="name">Item Name</label>
        <input type="text" onChange={this.handleChange.bind(this)} id="name" name="name" value={formData.name}/>

        <br/>

        <button>Add Item</button>
        </form>
    )
}

export default ItemForm;