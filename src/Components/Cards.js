import React, { useState } from 'react';
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import Cardsdata from './Carddata';
import { useDispatch, useSelector } from "react-redux";
import { ADD } from '../redux/actions/action';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Cards = () => {

    const [data, setData] = useState(Cardsdata);


    const getdata = useSelector((state) => state.hives);
    // console.log(getdata);

    const dispatch = useDispatch();

    const send = (e) => {
        dispatch(ADD(e));
        toast.success("🛒 Iteam Add In Your Cart", {
            position: "top-center",
            autoClose: 4000,
        });
    }


    return <div className='container mt-3'>
        <h2 className="text-center">Add to Cart</h2>
        <div className="row d-flex justify-content-center align-items-center">
            {data.map((e) => {
                return (
                    <>
                        <Card style={{ width: '22rem', border: "none" }} key={e.id} className="mx-2 mt-4 card_style" >
                            <Card.Img variant="top" src={e.imgdata} style={{ height: "16rem" }} className='mt-3' />
                            <Card.Body>
                                <Card.Title>{e.rname}</Card.Title>
                                <Card.Text>
                                    {e.price}
                                </Card.Text>
                                <div className="button_div d-flex justify-content-start">
                                    <Button variant="primary" className='col-lg-12'
                                        onClick={() => send(e)}
                                    >Add to Cart</Button>
                                </div>

                            </Card.Body>
                        </Card>

                    </>
                )
            })}
            <ToastContainer />
        </div>
    </div>;
};

export default Cards;
