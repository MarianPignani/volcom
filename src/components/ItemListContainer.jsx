import { useEffect, useState } from "react";
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";
import { collection, getDocs, query, where} from "firebase/firestore"
import { db } from "../firebase/config"

const ItemListContainer = () => {
    const [items, setItems] = useState([]);
    const categoria = useParams().categoria;

    useEffect (() => {
        const productosRef = collection(db, "productos");
        const q = categoria ? query(productosRef, where("categoria", "==", categoria)) : productosRef;
        getDocs(q)
            .then((resp) => {
                setItems(
                    resp.docs.map((doc) => {
                        return { ...doc.data(), id: doc.id }
                    })
                )
            })
    }, [categoria])
    
    
    return (
        <div className="container">
            <div className="div-container">
                <ItemList items={items} />
            </div>
        </div>
    )
}

export default ItemListContainer;