/* eslint-disable*/

import { API } from "../../services/api";
import { createContext, useState, useContext, useEffect } from "react";

const CatalogueContext = createContext([])

export const CatalogueProvider = ({children}) => {
    const [catalogue, setCatalogue] = useState([])
    const [products, setProducts] = useState([])
    const [root, setRoot] = useState("")

    useEffect(()=>{
      API.get(`product`)
      .then((response) => {
        setProducts(response.data)
      })
    }, [])

    useEffect(()=>{
      API.get(`product${root}`)
      .then((response) => {
        setCatalogue(response.data)
      })
    }, [root])

    const filter = (value) =>{
      const filtered = products.filter(product =>product.name.toLowerCase().includes(value))
      setCatalogue(filtered)
    }

    return (
        <CatalogueContext.Provider
        value= {{ setRoot, filter, catalogue }}>
          {children}
        </CatalogueContext.Provider>
    )
}

export const useCatalogue = () => useContext(CatalogueContext)
