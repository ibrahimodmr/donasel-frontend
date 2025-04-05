import React, { useState } from 'react';
import { Button } from 'primereact/button';
import AddFurnitureComponent from '../../components/admin-panel/AddFurnitureComponent';
import '../../styles/global.css'; // Your global styles

const Admin = () => {
    const [showAddFurniture, setShowAddFurniture] = useState(false); // State to manage visibility

    const handleAddFurnitureClick = () => {
        setShowAddFurniture(true);
    };

    const handleAddFurnitureClose = (status) => {
        setShowAddFurniture(status); // Close the form when callback is invoked
    };

    const handleDeleteFurnitureClick = () => {
        console.log('Delete button clicked'); // Placeholder for delete functionality
    };

    const handleUpdateFurnitureClick = () => {
        console.log('Update button clicked'); // Placeholder for update functionality
    };

    return (
        <div className="flex-col items-center justify-center p-4 ">
            <div className="my-4 space-x-2 ">
                <Button label="Yeni Ürün Ekle" className="p-2 m-2 font-bold text-white bg-red-500 p-button-danger" onClick={handleAddFurnitureClick} />
                <Button label="Ürün Sil" className="p-2 m-2 font-bold text-white bg-yellow-500 p-button-warning" onClick={handleDeleteFurnitureClick} />
                <Button label="Ürün Güncelle" className="p-2 m-2 font-bold text-white bg-green-500 p-button-success" onClick={handleUpdateFurnitureClick} />
            </div>
            <div className='flex items-center justify-center border-red-600'>
                {showAddFurniture && (
                    <AddFurnitureComponent
                        onClose={handleAddFurnitureClose} // Updated to handle the open-close state
                    />
                )}
                {/* Optional: Update Form Component */}
            </div>
        </div>
    );
};

export default Admin;
