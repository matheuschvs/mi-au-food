/* eslint-disable*/

import { API } from "../../services/api";
import { createContext, useState, useContext, useEffect } from "react";

const CatalogueContext = createContext([])

export const CatalogueProvider = ({children}) => {
    const [products, setProducts] = useState([])
    useEffect(()=>{
      API.get("product")
      .then((response) => {setProducts(response.data)})
    }, [])
  

    return (
        <CatalogueContext.Provider
        value= {{products}}>
          {children}
        </CatalogueContext.Provider>
    )
}

export const useCatalogue = () => useContext(CatalogueContext)
