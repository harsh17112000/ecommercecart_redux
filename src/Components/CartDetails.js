import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { DLT } from '../redux/actions/action';
import { useDispatch, useSelector } from "react-redux";
import Table from 'react-bootstrap/Table'
import { ToastContainer, toast } from 'react-toastify';


const CartDetails = () => {

    const { id } = useParams();


    // set deta from getting with id
    const [data, setData] = useState([]);
    // console.log(data);

    const history = useNavigate("");

    const getdata = useSelector((state) => state.hives);
    // console.log(getdata);

    const dispatch = useDispatch();


    const compare = () => {
        let comparedata = getdata.filter((el) => el.id == id);
        return setData(comparedata);
    }

    const dlt = (e) => {
        history("/");
        dispatch(DLT(e));
        toast.error("Iteam Remove from Your Cart", {
            position: "top-center",
            autoClose: 3000,
        });

    };
    useEffect(() => {
        compare();
    }, [id]);


    return <div className='container mt-2'>
        <h2 className='text-center'>Iteams Details Page</h2>

        <section className="container mt-5">
            <div className="iteamsdetails">
                {
                    data.map((ek) => {
                        return (
                            <>
                                <div className="items_img">
                                    <img src={ek.imgdata} alt="restaurant" />
                                </div>

                                <div className="details">
                                    <Table>
                                        <tr>
                                            <td>
                                                <p> <strong>Restaurant :</strong> {ek.rname}</p>
                                                <p> <strong>Price :</strong> {ek.price}</p>
                                                <p> <strong>Dishes :</strong> {ek.address}</p>
                                            </td>
                                            <td>
                                                <p> <strong>Rating :</strong> <span style={{ backgroundColor: "green", color: "white", padding: "2px 5px", borderRadius: "5px" }}>
                                                    {ek.rating}&nbsp;★</span>
                                                </p>
                                                <p><strong>Order Review :</strong> {ek.somedata}</p>
                                                <p onClick={() => dlt(ek.id)}> <strong>Remove :</strong> <i class="fas fa-trash" style={{ color: "red", fontSize: 20, cursor: "pointer" }}></i></p>
                                            </td>
                                        </tr>
                                    </Table>
                                </div>
                            </>
                        )
                    })
                }
                <p></p>
            </div>
        </section>
    </div>;
};

export default CartDetails;
