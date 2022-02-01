import { React, useEffect, useState } from 'react';
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Menu from '@mui/material/Menu';
import Table from 'react-bootstrap/Table'
import { DLT } from '../redux/actions/action';
import Badge from '@mui/material/Badge';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, NavLink } from 'react-router-dom';



const Header = () => {


    const getdata = useSelector((state) => state.hives);
    // console.log(getdata);

    const history = useNavigate("");
    // console.log(history);

    const dispatch = useDispatch();

    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const dlt = (e) => {
        dispatch(DLT(e))
        toast.error("Iteam Remove from Your Cart", {
            position: "top-center",
            autoClose: 3000,
        });
        history("/")
    };

    // using navigation
    // const gotocart = (e) => {
    //     // console.log(e);
    //     history("/cart", { state: e });
    //     handleClose();
    // };


    return <div>
        <Navbar bg="dark" variant="dark" style={{ height: "60px" }}>
            <Container>
                <NavLink to="/" className='text-decoration-none text-light mx-3'>Add to Cart</NavLink>
                <Nav className="me-auto">
                    <NavLink to="/" className="text-decoration-none text-light">Home</NavLink>
                </Nav>
                <Badge badgeContent={getdata.length} color="primary"
                    id="demo-positioned-button"
                    aria-controls={open ? 'demo-positioned-menu' : undefined}
                    aria-haspopup="true"
                    aria-expanded={open ? 'true' : undefined}
                    onClick={handleClick}
                >
                    <i className="fas fa-shopping-cart text-light" style={{ fontSize: 25, cursor: "pointer" }}></i>
                </Badge>
            </Container>

            {/* menu for card details */}
            <Menu
                id="demo-positioned-menu"
                aria-labelledby="demo-positioned-button"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                className="men"
            >
                {
                    getdata.length ?

                        <div className="card_details" style={{ width: "24rem", padding: 10 }}>
                            <Table>
                                <thead>
                                    <tr>
                                        <th>Photo</th>
                                        <th>Restaurant Name</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        getdata.map((e) => {
                                            return (
                                                <>
                                                    <tr>
                                                        <td>
                                                        <NavLink to={`/cart/${e.id}`} onClick={handleClose}><img src={e.imgdata} style={{ width: "5rem", height: "5rem", cursor: "pointer" }} alt="" /></NavLink>
                                                            
                                                        </td>
                                                        <td><p>{e.rname}</p>
                                                            <p>{e.price}</p>
                                                            <p
                                                                style={{ color: "red", fontSize: 20, cursor: "pointer" }}
                                                                onClick={() => dlt(e.id)}
                                                            ><i class="fas fa-trash smalltrash"></i></p>
                                                        </td>
                                                        <td className='mt-5' style={{ color: "red", fontSize: 20, cursor: "pointer" }}
                                                            onClick={() => dlt(e.id)}
                                                        ><i class="fas fa-trash largetrash"></i></td>
                                                    </tr>
                                                </>
                                            )
                                        })
                                    }
                                </tbody>
                            </Table>
                        </div>
                        : <div className="card_details d-flex align-items-center justify-content-center" style={{ width: "24rem", padding: 10, position: "relative" }}>
                            <i className="fas fa-close smallclose"
                                onClick={handleClose}

                                style={{ position: "absolute", top: 2, right: 20, fontSize: 23, cursor: "pointer" }}>
                            </i>
                            <p style={{ fontSize: 22 }}>Your cart is Empty</p>
                            <img src="./cart.gif" style={{ width: "5rem", padding: 10 }} className='emptycart_img' />
                        </div>
                }
            </Menu>
        </Navbar>
    </div>;
};

export default Header;



// onClick={() => gotocart(e)}
// anchorOrigin={{
//     vertical: 'top',
//     horizontal: 'left',
// }}
// transformOrigin={{
//     vertical: 'top',
//     horizontal: 'left',
// }}