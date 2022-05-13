/* eslint-disable*/

import { API } from "../../services/api";
import { createContext, useState, useContext, useEffect } from "react";

const CatalogueContext = createContext([])

export const CatalogueProvider = ({children}) => {
    const [products, setProducts] = useState([])
    const [root, setRoot] = useState("")
    useEffect(()=>{
      API.get(`product${root}`)
      .then((response) => {setProducts(response.data)})
    }, [root])
  

    return (
        <CatalogueContext.Provider
        value= {{products , setRoot}}>
          {children}
        </CatalogueContext.Provider>
    )
}

export const useCatalogue = () => useContext(CatalogueContext)
