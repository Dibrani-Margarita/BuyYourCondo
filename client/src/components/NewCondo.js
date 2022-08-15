import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
const NewCondo = () => {
    const [name, setName] = useState('');
    const [address, setAddress] = useState('');
    const [image , setImage] = useState('');
    const [price, setPrice] = useState('');
    const [description, setDescription] = useState('');
    const [errors, setErrors] = useState({});
    const navigate = useNavigate();
    const handleSubmit = (e) => {
    e.preventDefault();
    axios
        .post('http://localhost:8000/api/condos', {
            name,
            address,
            image,
            price,
            description,
        })
        .then((res) => {
            console.log(res.data);
            navigate('/condos');
        })
        .catch((err) => setErrors(err.response.data.errors));
    };

    return (
        <form onSubmit={handleSubmit} 
            style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}
        >
            <label>Name</label>
            <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
            {errors.name && <span className="text-danger">{errors.name.message}</span>}
            <label>Address</label>
            <input type="text" value={address} onChange={(e) => setAddress(e.target.value)} />
            {errors.address && <span className="text-danger">{errors.address.message}</span>}
            <label>Image</label>
            <input type="text" value={image} onChange={(e) => setImage(e.target.value)} />
            {errors.image && <span className="text-danger">{errors.image.message}</span>}
            <label>Price</label>
            <input type="text" value={price} onChange={(e) => setPrice(e.target.value)} />
            {errors.price && <span className="text-danger">{errors.price.message}</span>}
            <label>Description</label>
            <input type="text" value={description} onChange={(e) => setDescription(e.target.value)} />
            <br />
            <button>Create Condo</button>
        </form>
    );
};

export default NewCondo;