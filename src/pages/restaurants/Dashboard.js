import React, { useState, useEffect } from 'react';
import { Card, Row, Col } from 'reactstrap';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { APP_URL, USER_TOKEN } from '../../helper/config';

const RestaurantDashboard = (props) => {

    const [items, setItemCount] = useState(0)
    const [isFetched, setFetched] = useState(false)

    useEffect(() => {
        const fetchData = async () => {
            setFetched(false)
            try {
                const items = await axios.get(APP_URL.concat('/item/restaurant'), USER_TOKEN)
                console.log(items)
            } catch (error) {
                console.log(error)
            }
            setFetched(true)
        }
        fetchData()
    }, [])

    return (
        <div>

        </div>
    )
}

export default RestaurantDashboard