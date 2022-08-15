import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "./style/CondoList.css";
const CondoList = () => {
    const [condos, setCondos] = useState([]);
    useEffect(() => {
    axios
        .get("http://localhost:8000/api/condos")
        .then((res) => {
        console.log(res.data);
        setCondos(res.data);
        })
        .catch((err) => console.log(err));
    }, []);
    const deleteCondo = (condoId) => {
    axios
        .delete(`http://localhost:8000/api/condos/${condoId}`)
        .then((res) => {
        const newCondos = condos.filter((condo) => condo._id !== condoId);
        setCondos(newCondos);
        })
        .catch((err) => console.log(err));
    };
    return (
    <div className="container">
        {condos.map((condo) => (
        <div key={condo._id} className="card">
            <h2>{condo.name}</h2>
            <img src={condo.image} alt={condo.name} />
            <br />
            <p style={{ 'font-weight':"bold"}}>${condo.price}</p>
            <Link to={`/condo/${condo._id}`}>Details</Link>
            <span> | </span>
            <Link to={`/condo/edit/${condo._id}`}>Edit</Link>
            <br />
            <button
            style={{ marginTop: "1rem" }}
            onClick={() => deleteCondo(condo._id)}
            >
            Delete
            </button>
            </div>
        ))}
    </div>
    );
};

export default CondoList;
