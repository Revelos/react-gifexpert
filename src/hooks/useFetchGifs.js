import { useEffect, useState } from "react";
import { getGifs } from "../helpers/getGifs";
//Un hook no es mas que una funcion que regresa algo

//Aparencia de un hook personalizado
function useFetchGifs(category) {

    const [images, setImages] = useState([])
    const [isLoading, setisLoading] = useState(true)

    const getImages = async () => {
        const newImages = await getGifs(category);
        setImages(newImages);
        setisLoading(false);
    }
    //useEffect es un Hook que sirver para disparar efectos secundarios
    useEffect(() => {

        getImages();
    }, [])
    //Si yo dejo el array vacio, significa que el hook solo se va disparar
    //la primera vez que se crea y construye el componente
    return ({
        images: images,
        isLoading: isLoading
    }
    )
}

export default useFetchGifs;
