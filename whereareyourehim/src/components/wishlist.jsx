import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { addWishlist, removeWishlist } from '../reducers/wishlistSlice'

function Wishlist() {
    const [data, setData] = useState([])
    const wishlist = useSelector(state => state.wishlist.value)

    // const [wish,setWish]=useState({id:null,price:"",model:""})
    console.log(wishlist);
    const dispatch = useDispatch()
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch("http://localhost:3000/products")
                const jsonData = await (response.json())
                setData(jsonData)
            } catch (error) {
                console.log(error);
            }
        }
        fetchData()
    }, [wishlist])

    const handleAddWishlist=(id,price,model)=>{
        dispatch(addWishlist({id:id,price:price,model:model}))
    }
    const handleRemoveWishlist=(id)=>{
        dispatch(removeWishlist(id))
    }
    return (
        <>
            <div style={{backgroundColor:"red",color:'white'}}>
                {wishlist && wishlist.map((item) => (
                    <ul key={item.id}>
                        <li>{item.id}</li>
                        <li>{item.model}</li>
                        <li>{item.price}</li>
                        <button onClick={()=>handleRemoveWishlist(item.id)}>nigga</button>
                    </ul>
                ))}
            </div>
            <div style={{backgroundColor:"black",color:'white'}}>
                {data && data.map((item) => (
                    <ul key={item.id}>
                        <li>{item.id}</li>
                        <li>{item.model}</li>
                        <li>{item.price}</li>
                        <button onClick={() =>handleAddWishlist(item.id,item.model,item.price)}>Add</button>
                    </ul>
                ))}
            </div>
        </>
    )
}

export default Wishlist