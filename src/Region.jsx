import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { getCountariesByRegion } from './Redux/getCounteriesByRegion';
import { useDispatch, useSelector } from 'react-redux';
import Card from 'react-bootstrap/Card';
import { useNavigate } from 'react-router-dom';

const Region = () => {
    const { region1 } = useParams()
    const dispatch = useDispatch()
    const { arrRegion, loading } = useSelector((s) => s.getAllRegion)
    const { mode } = useSelector((s) => s.data)
    console.log(region1);
    useEffect(() => {
        dispatch(getCountariesByRegion(region1))
    }, [region1])
    console.log(arrRegion)
    const navigate = useNavigate()
    const handleFunc = (id) => {
        navigate(`/countarydetail/${id}`)


    }
    return (
        <div>

        </div>
    )
}

export default Region
