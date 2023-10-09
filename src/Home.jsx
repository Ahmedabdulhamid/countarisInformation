import React, { useEffect, useState } from 'react'
import { AiOutlineSearch } from 'react-icons/ai'
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import { getAllCountaries } from './Redux/getAllCountaries';
import { useDispatch, useSelector } from 'react-redux';
import './home.css'
import Button from 'react-bootstrap/Button';
import { getSearchCountary } from './Redux/getAllCountaries';
import Dropdown from 'react-bootstrap/Dropdown';
import { getCountariesByRegion } from './Redux/getAllCountaries';
import { useNavigate } from 'react-router-dom';
const Home = () => {
    const { mode } = useSelector((s) => s.data)
    const { countaries, loading, arrRegion, search, error } = useSelector((s) => s.data)
    const dispatch = useDispatch()
    const [name, setName] = useState('')
    useEffect(() => {
        dispatch(getAllCountaries())
    }, [])
    const navigate = useNavigate()

    const handleFunc = (id) => {
        navigate(`/countarydetail/${id}`)


    }
    const handlFilter = (id) => {
        dispatch(getCountariesByRegion(id))
    }
    const handleSearch = (e) => {
        e.preventDefault()
        if (name !== '') {
            dispatch(getSearchCountary(name))
        }


    }
    console.log(search);
    return (
        <div >

            <div className="container">
                <div className="row my-5">
                    <div className="col-md-10">
                        <Form className='w-50 form ' style={{ minWidth: "300px" }} onKeyUp={handleSearch}>
                            <Form.Group className="mb-3" >
                                <div className='position-relative'>
                                    <Form.Control type="text" placeholder="search for countary "
                                        value={name} onChange={(e) => setName(e.target.value)}

                                        className={`bg-${mode === true ? 'light' : 'dark'} text-${mode === true ? 'dark' : "light"}
                                         ${mode === true ? 'input' : 'input2'}`}



                                    />
                                    <div className='position-absolute' style={{ left: "88.5%", bottom: "5%", cursor: "pointer" }}>
                                        <Button

                                            variant='none'
                                            style={{ outline: 'none', border: "none" }}
                                        ><AiOutlineSearch className={`text-${mode === true ? 'dark' : "light"} fs-4 `} type='submit' /></Button>
                                    </div>
                                </div>


                            </Form.Group>

                        </Form>
                    </div>
                    <div className="col-md-2  ">

                        <Dropdown data-bs-theme={mode === true ? "light" : "dark"}>
                            <Dropdown.Toggle id="dropdown-button-dark-example1" variant="none" className={`text-${mode === true ? "dark" : "light"}`}>
                                Filter by Region
                            </Dropdown.Toggle>

                            <Dropdown.Menu>
                                <Dropdown.Item className='link' onClick={() => handlFilter(`Africa`)} >
                                    Africa
                                </Dropdown.Item>
                                <Dropdown.Item className='link' onClick={() => handlFilter(`America`)} >America</Dropdown.Item>
                                <Dropdown.Item className='link' onClick={() => handlFilter(`Asia`)} >  Asia</Dropdown.Item>

                                <Dropdown.Item className='link' onClick={() => handlFilter(`Europe`)} >Europe</Dropdown.Item>
                                <Dropdown.Item className='link' onClick={() => handlFilter(`Oceania`)} >Oceania</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>



                    </div>
                </div>

                <div className="row d-flex justify-content-center">
                    {countaries.length !== 0 ? (
                        countaries.map((e, index) => (
                            <div className="col-md-4 col-sm-6 my-3 d-flex justify-content-center" key={index}>
                                <Card className={`bg-${mode === true ? 'light card' : "dark card2"} text-${mode === true ? 'dark' : "light"} h-100 w-75`}
                                    onClick={() => handleFunc(e.name.common)}



                                >
                                    <Card.Img variant="top" src={e.flags.png
                                    } />
                                    <Card.Body>
                                        <Card.Title>{e.name.common}</Card.Title>
                                        <Card.Text>
                                            <p style={{ fontFamily: "Nunito Sans" }}><span className='fw-bold'>Population:</span> {e.population
                                            }</p>
                                            <p style={{ fontFamily: "Nunito Sans" }}><span className='fw-bold'>Region:</span> {e.region}</p>
                                            <p style={{ fontFamily: "Nunito Sans" }}><span className='fw-bold'>capital:</span> {e.capital}</p>
                                        </Card.Text>

                                    </Card.Body>
                                </Card>


                            </div>

                        ))
                    ) : (
                        arrRegion.map((e, index) => (
                            <div className="col-md-4 col-sm-6 my-3 d-flex justify-content-center" key={index}>
                                <Card className={`bg-${mode === true ? 'light card' : "dark card2"} text-${mode === true ? 'dark' : "light"} h-100 w-75`}
                                    onClick={() => handleFunc(e.name.common)}



                                >
                                    <Card.Img variant="top" src={e.flags.png
                                    } />
                                    <Card.Body>
                                        <Card.Title>{e.name.common}</Card.Title>
                                        <Card.Text>
                                            <p style={{ fontFamily: "Nunito Sans" }}><span className='fw-bold'>Population:</span> {e.population
                                            }</p>
                                            <p style={{ fontFamily: "Nunito Sans" }}><span className='fw-bold'>Region:</span> {e.region}</p>
                                            <p style={{ fontFamily: "Nunito Sans" }}><span className='fw-bold'>capital:</span> {e.capital}</p>
                                        </Card.Text>

                                    </Card.Body>
                                </Card>


                            </div>

                        ))
                    )}
                    {arrRegion.length === 0 && countaries.length === 0 && (
                        search.status !== 404 ? (


                            search.map((e, index) => (
                                <div key={index}style={{height:"130vh"}}>
                                    <div className="col-md-4 col-sm-6 my-3 d-flex justify-content-center"  >
                                        <Card className={`bg-${mode === true ? 'light card' : "dark card2"} text-${mode === true ? 'dark' : "light"} h-100 w-75 `}
                                            onClick={() => handleFunc(e.name.common)}



                                        >
                                            <Card.Img variant="top" src={e.flags.png
                                            } />
                                            <Card.Body>
                                                <Card.Title>{e.name.common}</Card.Title>
                                                <Card.Text>
                                                    <p style={{ fontFamily: "Nunito Sans" }}><span className='fw-bold'>Population:</span> {e.population
                                                    }</p>
                                                    <p style={{ fontFamily: "Nunito Sans" }}><span className='fw-bold'>Region:</span> {e.region}</p>
                                                    <p style={{ fontFamily: "Nunito Sans" }}><span className='fw-bold'>capital:</span> {e.capital}</p>
                                                </Card.Text>

                                            </Card.Body>
                                        </Card>


                                    </div>
                                </div>


                            ))) : (
                            <div style={{ height: '130vh' }}>
                                <h3 className={`text-${mode === true ? "dark" : "light"}   text-center`}>Data Not Found 404</h3>

                            </div>

                        )


                    )}


                </div>

            </div>


        </div>
    )
}

export default Home
