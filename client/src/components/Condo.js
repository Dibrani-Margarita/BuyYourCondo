import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';

const Condo = () => {
    const [condo, setCondo] = useState({});
    const { id } = useParams();
    const navigate = useNavigate();
    useEffect(() => {
    axios
        .get(`http://localhost:8000/api/condos/${id}`)
        .then((res) => {
        console.log(res.data);
        setCondo(res.data);
        })
        .catch((err) => console.log('GET CONDO BY ID ERROR', err));
    }, [id]);
    const deleteCondo = () => {
    axios
        .delete(`http://localhost:8000/api/condos/${id}`)
        .then((res) => {
        navigate('/');
        })
        .catch((err) => console.log(err));
    };
    return (
    <div>
        <h2>{condo.name}</h2>
        <p>Address: {condo.address}</p>
        <img src={condo.image} alt={condo.name} />
        <p>Price: {condo.price}</p>
        <p>Description: {condo.description}</p>
        <button onClick={deleteCondo}>Delete</button>
    </div>
    );
};

export default Condo;