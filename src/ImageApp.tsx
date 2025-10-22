import { cacheSignal, useEffect, useState } from 'react'
import { ImageList , PreviousSearches } from './imagesComponents'

import { HeaderComponents , SearchBar  } from './sharedComponents'

import { getImagesByQuery } from './actions/get-images-by-query2.actions'
import { getImages } from './actions/get-images.actions'

import type { robotsProps } from './interfaces/images.interfaces';

import './index.css'



export const ImageApp = () => {

  const [ imagenPrevia , setImagenPrevia ] = useState(['']);    
  const [images, setImages] = useState<robotsProps[]>([]);

  useEffect(()=> {
    const fetchData = async() => {
      try{
          const data = await getImages();
          const robots = data.robots;
          //console.log(robots);
          setImages(robots);
          
      }catch(error){
        console.error('Error en fetchin data',error);
      }
    }

    fetchData();
    
  },[])

  const handleTermClicked = ( term:string ) => {
    console.log({ term });
  }

  
  const handleSearch = ( query:string ) => {
    

    //1. Limpio el inicio y final de la query
    query = query.trim().toLowerCase();

    //2. Si la query viebne vacia cortamos la funcion
    if(query.length === 0) return;

    //3.Si lo que viene en la query ya esta 
    if(imagenPrevia.includes(query)) return;

    //4 agrego la query al iniciop del arreglo
    // con ...imagenPrevia desparrramo todo lo que tengo
    //en mi arreglo
    setImagenPrevia([ query , ...imagenPrevia ].splice(0,7))

    getImagesByQuery(query);

  }

  return (
    <>        
        <HeaderComponents 
            title="Busca tu imagen"
            text="Bienvenido a la pagina para buscar tus imagenes favoritas"
            />

        
        <SearchBar  
            placeHolder="Ingrese el nombre de su imagen"
            onQuery = { handleSearch }
            />

        
       <PreviousSearches 
            searches={ imagenPrevia }
            onLabelClicked = { handleTermClicked }
       />

        
        <ImageList 
            robots={ images } />
       
    </>
  )
}
