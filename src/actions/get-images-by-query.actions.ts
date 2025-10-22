
import type { responseProps } from "../interfaces/images.interfaces";

export const getImagesByQuery = async( query:string ):Promise<responseProps> => {

    const encodedName = encodeURIComponent(query).replace(/20%/g,'+');

    const response = await fetch(`https://repaso-node.onrender.com/name/${encodedName}`);

    if(!response.ok){
        throw new Error(`Error HTTP: ${response.status}`);
    }

    const data:responseProps = await response.json();

    console.log(data);

    return data;

}

