import React, { useEffect } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { getCountery } from './Redux/getAllCountaries'
import { UseSelector, useSelector } from 'react-redux/es/hooks/useSelector'
import { useDispatch } from 'react-redux'
import Button from 'react-bootstrap/Button';
import { BsArrowLeft } from 'react-icons/bs'
import './home.css'
const Details = () => {
    const { name } = useParams()
    const dispatch = useDispatch()
    const { obje, loading, flag, name1, languages, currncies, borders } = useSelector((s) => s.data)
    const { mode } = useSelector((s) => s.data)
    useEffect(() => {
        dispatch(getCountery(name))
    }, [name])
console.log(borders);
    const navigate = useNavigate()
    const handleFunc = () => {
        navigate(-1)
    }

    console.log(obje);
    return (
        <div className={`text-${mode === true ? 'dark' : "light"} `} style={{ height: "130vh" }}>
            <div className='container my-5'>
                {obje !== null ? (loading === false ? (

                    <div className='d-flex justify-content-center'>
                        <span className={`text-${mode === true ? "dark" : "light"} loader`}>L &nbsp; ading</span>
                    </div>

                ) : (
                    <div className="row">
                        <div className='my-5'>
                            <Button variant={`${mode === true ? "light form" : "dark card2"}`} className='px-5 ' onClick={handleFunc}><BsArrowLeft />Back</Button>

                        </div>
                        <div className="col-md-6">
                            {flag !== '' ? (
                                <img src={flag} alt="" srcset="" />
                            ) : ('')}


                        </div>
                        <div className="col-md-6">

                            <div className="row">
                                <div className="col-md-5">
                                    <div className='w-75 '>
                                    </div>
                                    <h2 className='my-3'>{name1}</h2>
                                    <p style={{ fontFamily: "Nunito Sans" }}>NativeName:{name1}</p>
                                    <p style={{ fontFamily: "Nunito Sans" }}>Population:{obje.population}</p>
                                    <p style={{ fontFamily: "Nunito Sans" }}>Region:{obje.region}</p>
                                    <p style={{ fontFamily: "Nunito Sans" }}>Capital:{obje.capital}</p>

                                </div>
                                <div className="col-md-1">
                                    <div className='w-100  '>
                                        <p style={{ fontFamily: "Nunito Sans" }}>currancies:{currncies}</p>
                                        <p style={{ fontFamily: "Nunito Sans" }}>Population:{obje.population}</p>
                                        <p style={{ fontFamily: "Nunito Sans" }}>Region:{obje.region}</p>
                                        <p style={{ fontFamily: "Nunito Sans" }}>languages:,{languages}</p>
                                    </div>



                                </div>
                            </div>

                            <div className='d-flex justify-content-start'>

                                <span className='fw-bold'>Border Countery :</span>
                                {borders.length!==0 ? (
                                    borders.map((e, idx) => (
                                        <Link style={{ textDecoration: 'none' }} key={idx} to={`/${e}`} className='mx-2'><Button variant={`${mode === true ? "light form" : "dark card2"}`}>{e}</Button></Link>
                                    ))
                                ) : (
                                    <p>Not Found</p>
                                )}


                            </div>
                        </div>

                    </div>
                )) : (
                    <div>
                        <div className='my-5'>
                            <Button variant='light ' onClick={handleFunc}><BsArrowLeft />Back</Button>

                        </div>
                        <h3 className='text-center my-5'>Data Not Found 404</h3>
                    </div>

                )}


            </div>
        </div>

    )
}

export default Details
