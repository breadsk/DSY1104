import type { responseProps } from '../interfaces/images.interfaces';


export const getImages = async() => {

    const response = await fetch(`https://repaso-node.onrender.com/`);

    if(!response.ok){
        throw new Error(`Error HTTP: ${response.status}`);
    }

    const data:responseProps = await response.json();

    //console.log(data);

    return data;

}