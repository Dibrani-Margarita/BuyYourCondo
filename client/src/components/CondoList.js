import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const CondoList = () => {
    const [condos, setCondos] = useState([]);
    useEffect(() => {
        axios.get('http://localhost:8000/api/condos').then(res => {
            console.log(res.data);
            setCondos(res.data);
        }).catch(err => console.log(err));
    }, []);
    return (
        // condos.map(condo => (
        //     // <Condo key={condo._id} condo={condo} />
        <h1>Hello</h1>
        // ))
    );
};

export default CondoList;
