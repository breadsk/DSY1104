import axios from 'axios';

import type { responseProps } from '../interfaces/images.interfaces';

export const getImagesByQuery = async( query: string ):Promise<responseProps> => {
    const encodedName = encodeURIComponent(query).replace(/20%/g,'+');

    const response = await axios.get<responseProps>(`https://repaso-node.onrender.com/name/${encodedName}`);

    console.log(response.data);

    return response.data;
}