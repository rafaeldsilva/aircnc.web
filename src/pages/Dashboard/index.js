import React, { useEffect, useState } from 'react';
import Api from '../../services/api';

export default function Dashboard() {
    const [spots, setSpots] = useState([]);
     
    useEffect(() => {
        async function LoadSpot() {
            const user_id = localStorage.getItem('user');
            const response = await Api.get('/dashboard', {
                headers: { user_id }
            });

            setSpots(response.data);
        }

        LoadSpot(); 

    }, []);

    return (
        <>
            <ul className="spot-list">
            {spots.map(spot => (
                <li>
                    <header />
                    <strong>{spot.company}</strong>
                    <span>{spot.price}</span>    
                </li>
            ))}
            </ul>
        </>
    )
}  