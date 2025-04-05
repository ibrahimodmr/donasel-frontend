import React, { useState } from 'react';
import { InputText } from 'primereact/inputtext';
import { Dropdown } from 'primereact/dropdown';
import { Button } from 'primereact/button';
import '../../styles/global.css'; // Ensure this import is present
import EnumDB from '../../utils/EnumsDB';
import { createFurnitureWithImages } from '../../utils/Api'; // Import the API function

const AddFurnitureComponent = ({ onClose }) => {
    const [furniture, setFurniture] = useState({
        name: '',
        color: '',
        category: null,
        images: [],
    });

    const categories = [
        { label: 'YATAK ODASI', value: { id: EnumDB.YATAK_ODASI, name: 'YATAK ODASI' } },
        { label: 'YEMEK ODASI', value: { id: EnumDB.YEMEK_ODASI, name: 'YEMEK ODASI' } },
        { label: 'KOLTUK TAKIMI', value: { id: EnumDB.KOLTUK_TAKIMI, name: 'KOLTUK TAKIMI' } },
    ];

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFurniture((prevFurniture) => ({
            ...prevFurniture,
            [name]: value,
        }));
    };

    const handleCategoryChange = (e) => {
        setFurniture((prevFurniture) => ({
            ...prevFurniture,
            category: e.value.id,
        }));
    };

    const handleFileChange = async (e) => {
        const files = Array.from(e.target.files);
        const base64Images = await Promise.all(files.map(file => convertToBase64(file)));
        setFurniture((prevFurniture) => ({
            ...prevFurniture,
            images: base64Images,
        }));
    };

    const convertToBase64 = (file) => {
        return new Promise((resolve, reject) => {
            const reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onload = () => resolve(reader.result);
            reader.onerror = error => reject(error);
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const payload = {
                name: furniture.name,
                color: furniture.color,
                category: furniture.category,
                images: furniture.images
            };

            await createFurnitureWithImages(payload);
            onClose(false); // Inform parent component to close the form
            setFurniture({ name: '', color: '', category: null, images: [] }); // Reset form state after submission
        } catch (error) {
            console.error("Error submitting furniture", error);
        }
    };

    const handleCancel = () => {
        onClose(false); // Inform parent component to close the form
        setFurniture({ name: '', color: '', category: null, images: [] }); // Reset form state after cancel
    };

    return (
        <div className="max-w-lg p-4 mx-auto bg-gray-100 rounded-lg shadow-lg form-container">
            <h2 className="mb-4 text-xl font-bold text-center">Yeni Mobilya Ekle</h2>
            <form className="p-fluid">
                <div className="mb-4 p-field">
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700">Model Adı</label>
                    <InputText id="name" name="name" value={furniture.name} onChange={handleInputChange} required className="w-full mt-1" />
                </div>
                <div className="mb-4 p-field">
                    <label htmlFor="color" className="block text-sm font-medium text-gray-700">Renk</label>
                    <InputText id="color" name="color" value={furniture.color} onChange={handleInputChange} required className="w-full mt-1" />
                </div>
                <div className="mb-4 p-field">
                    <label htmlFor="category" className="block text-sm font-medium text-gray-700">Model Türü</label>
                    <Dropdown
                        id="category"
                        name="category"
                        value={categories.find(cat => cat.value.id === furniture.category)}
                        options={categories}
                        onChange={handleCategoryChange}
                        placeholder="Türünü seç"
                        required
                        className="w-full mt-1"
                    />
                </div>
                <div className="mb-4 p-field">
                    <label htmlFor="images" className="block text-sm font-medium text-gray-700">Resim Yükle</label>
                    <input
                        type="file"
                        id="images"
                        name="images"
                        accept="image/*"
                        multiple
                        onChange={handleFileChange}
                        required
                        className="w-full mt-1"
                    />
                </div>
                <div className="flex justify-center">
                    <Button type="submit" label="Ekle" className="w-1/3 m-2 font-bold text-white bg-blue-500 p-button-success"  onClick={handleSubmit}/>
                    <Button type="button" label="İptal" className="w-1/3 m-2 font-bold text-white bg-red-500 p-button-danger" onClick={handleCancel} />
                </div>
            </form>
        </div>
    );
};

export default AddFurnitureComponent;
