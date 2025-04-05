import { BASE_URL } from "./Configs";
import axios from "axios";


export const createFurnitureWithImages = async (payload) => {
    try {
        const response = await axios.post(`${BASE_URL}/furniture`, payload, {
            headers: {
                'Content-Type': 'application/json'
            }
        });
        return response.data;
    } catch (error) {
        throw error;
    }
};


// Other existing API functions...

export const fetchImagesByFurnitureId = async (furnitureId) => {
    try {
        const response = await axios.get(`${BASE_URL}/furniture-images/by-furniture`, {
            params: {
                furnitureId: furnitureId
            }
        });

        const data = response.data;

        return data.map(img => ({
            path: `data:image/jpeg;base64,${img.imageData}`,
            name: img.furniture.name,
            furnitureId: img.furniture.id
        }));
    } catch (error) {
        console.error("Error occuring fetching all images by furniture id");
        return [];
    }
}

export const fetchImagesByCategoryAndFavorities = async (category, isFavorite) => {
    try {
        const response = await axios.get(`${BASE_URL}/furniture-images/favorites-by-category`, {
            params: {
                categoryId: category,
                isFavorite: isFavorite
            }
        });

        const data = response.data;

        return data.map(img => ({
            path: `data:image/jpeg;base64,${img.imageData}`,
            name: img.furniture.name,
            furnitureId: img.furniture.id
        }));
    } catch (error) {
        console.error("Error occured fetching images", error);
        return [];
    }
}
