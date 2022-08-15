import { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
const EditCondo = () => {
    const [name, setName] = useState('');
    const [address, setAddress] = useState('');
    const [image , setImage] = useState('');
    const [price, setPrice] = useState('');
    const [description, setDescription] = useState('');
    const navigate = useNavigate();
    const { id } = useParams();
    useEffect(() => {
        axios
        .get(`http://localhost:8000/api/condos/${id}`)
        .then((res) => {
        console.log(res.name);
        setName(res.data.name);
        setAddress(res.data.address);
        setImage(res.data.image);
        setPrice(res.data.price);
        setDescription(res.data.description);
        })
        .catch((err) => console.log('GET CONDO BY ID ERROR', err));
    }, []);

    const handleSubmit = (e) => {
    e.preventDefault();
    axios
        .put(`http://localhost:8000/api/condos/${id}`, {
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
        .catch((err) => console.log('POST ERROR', err));
    };

    return (
    <form onSubmit={handleSubmit}
        style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}
    >
        <label>Name</label>
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
        <label>Address</label>
        <input type="text" value={address} onChange={(e) => setAddress(e.target.value)} />
        <label>Image</label>
        <input type="text" value={image} onChange={(e) => setImage(e.target.value)} />
        <label>Price</label>
        <input type="text" value={price} onChange={(e) => setPrice(e.target.value)} />
        <label>Description</label>
        <input type="text" value={description} onChange={(e) => setDescription(e.target.value)} />
        <br />
        <button>Update Condo</button>
    </form>
    );
};

export default EditCondo;