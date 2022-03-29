import React, { useState, useEffect } from "react";
import "./Pastorderspage.css";
import home from "../images/home.svg";
import list from "../images/listcolor.svg";
import plus from "../images/morewhite.svg";
import search from '../images/search.svg';
import { Link } from "react-router-dom";

import { useNavigate } from "react-router-dom";

import Modal from "react-modal";

function Pastorderspage() {
  const navigate = useNavigate();
  const [token, settoken] = useState(localStorage.getItem("token"));
  useEffect(() => {
    if (token == null) {
      alert("please log in to continue");
      navigate("/", { replace: true });
    }
  }, [token]);

  const [posts, setposts] = useState([]);
  const [status, setstatus] = useState(true);

  const [canceledstatus, setcanceledstatus] = useState(false);
  const [selecteditems, setselecteditems] = useState([]);

  const [cancel, setcancel] = useState(0);
  const [alertmodalstatus, setalertmodalstatus] = useState(false);

  const [sidemodalopen, setsidemodalopen] = useState(false);


  const Data = async () => {
    const res = await fetch("/orders", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        authorization: `test ${token}`,
      },
    });
    const data = await res.json();
    if (data.getorders.length === 0) {
      setstatus(false);
    }
    console.log(data.getorders);
    
    setposts(data.getorders);
  };

  useEffect(() => {
    Data();
  }, [canceledstatus]);

  async function updatestatusorder(cancel) {
    console.log(cancel);
    try {
      const res = await fetch(`/orders/${cancel}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          authorization: `test ${token}`,
        },
        body: JSON.stringify({
          status: "Cancelled",
        }),
      });
      const data = await res.json();
      setcanceledstatus(true);
    } catch (e) {
      console.log(e);
    }
  }
  async function getproduct(id) {
    try {
      const res = await fetch(`/orders/${id}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          authorization: `test ${token}`,
        },
      });
      const data = await res.json();
      console.log(data.order);
      setselecteditems(data.order);
    } catch (e) {
      console.log(e);
    }
  }

  const cancelfunction = (id) => {
    setcancel(id);
    setalertmodalstatus(true);
  };
  const sidemodalbutton = () => {
    setsidemodalopen(false);
    setalertmodalstatus(true);
  };
  const sidemodelfunction = () => {
    setcancel(0);
    setsidemodalopen(false);
  };
  const alertfunction = () => {
    setcancel(0);
    setalertmodalstatus(false);
  };
  const alertprocedbtn = () => {
    setalertmodalstatus(false);
    updatestatusorder(cancel);
  };
  const onclickview = (id) => {
    getproduct(id);
    setcancel(id);
    setsidemodalopen(true);
  };

  return (
    <div classname="orderscontainer">
      {/* Pop UP */}

      <Modal isOpen={alertmodalstatus} className="rrforcancelorder">
        <div className="rrAlertheader">
          <p>Alert</p>
          <p onClick={alertfunction} className="rrmodalexit">
            X
          </p>
        </div>
        <div className="rrAlertmsg">
          <p className="rralertsimages">
            <i class="fa fa-exclamation-triangle"></i>
          </p>
          <p className="rralertmsgpara">Are you sure want to cancel the</p>
          <p className="rrorderno">
            order No: <span>ID_{cancel}</span>
          </p>
        </div>
        <div className="rrAlertbtn">
          <button onClick={alertprocedbtn}>Proceed</button>
        </div>
      </Modal>
      {/* Summary */}
      <Modal isOpen={sidemodalopen} className="rrordermodal">
        <div className="rrordermodalheads">
          <p>Summary</p>
          <p onClick={sidemodelfunction} className="rrmodalexit">
            X
          </p>
        </div>
        <div className="rrordermodaladdress">
          <div>
            <p className="rrlocations">Store Location</p>
            <p className="rrlocationss"> Jp nagar</p>
          </div>
          <div>
            <p className="rrlocations"> Store Address:</p>
            <p className="rrlocationss">Near Phone Booth, 10th road</p>
          </div>
          <div>
            <p className="rrlocations">Phone</p>
            <p className="rrlocationss">9876543212</p>
          </div>
        </div>
        <div className="rrordermodalstatus">
          <table>
            <tr>
              <td>O Picked up</td>
              <td className="rrtablehr">
                <hr />
              </td>
              <td>O Washed</td>
              <td className="rrtablehr">
                <hr />
              </td>
              <td>O ironed</td>
              <td className="rrtablehr">
                <hr />
              </td>
              <td>O Delivered</td>
            </tr>
          </table>
        </div>
        <div className="rrmodalhrline"></div>
        <div className="rrmodalorderdetails">
          <p className="rrorderDetailss">Order Details</p>
          <tabel className="rrmodaltable">
            {selecteditems.length !== 0 &&
              selecteditems.map(function (post, index) {
                return (
                  <div key={post._id}>
                    {post.productlist.map((ord) => {
                      return (
                        <div>
                          {ord.price !== 0 && (
                            <tr>
                              <td>{ord.producttype}</td>
                              <td>
                                {ord.pack && "wash"},{ord.pack && "Iron"},
                                {ord.pack && "fold"}, {ord.pack && "packing"}
                              </td>
                              <td>
                                {ord.quantity}x{ord.price / ord.quantity}
                              </td>
                              <td>{ord.price}</td>
                            </tr>
                          )}
                        </div>
                      );
                    })}
                    <tr>
                      <td></td>
                      <td></td>
                      <td>Sub total:</td>
                      <td>{post.price - 90}</td>
                    </tr>
                    <tr>
                      <td></td>
                      <td></td>
                      <td>Pickup Charges:</td>
                      <td>90</td>
                    </tr>
                    <tr className="rrmodalborder">
                      <td></td>
                      <td></td>
                      <td>Total :</td>
                      <td>{post.price}</td>
                    </tr>
                  </div>
                );
              })}
          </tabel>
        </div>
        <div className="rrmodalshopaddress">
          <p className="rrAddresss">Address</p>
          <div className="rrmodaladdressborder">
            <h3>Home</h3>
            <p>#223, 10th road jp nagar, Bangalore</p>
          </div>
        </div>
        <div className="rrmodalbtn">
          <button onClick={sidemodalbutton}>Cancel Order</button>
        </div>
      </Modal>

      {/* Header */}
      <div className="orderhead">
        <div className="orderdisplayhead">
          <div className="orderlefttext">
            <h2>LAUNDRY</h2>
          </div>
          <div className="orderHPC">
            <p></p>
            <h6>Pricing</h6>
            <p></p>
            <h6>Carrer</h6>
          </div>
          <div className="orderrightbutton">
            <h2 className="orderrightname">User Name</h2>
          </div>
        </div>
      </div>

      {/* Sidebar */}

      <div className="ordersbody">
        <div className="ordersidebar">
          <div className="orderhome">
            <img src={home} alt="home" />
          </div>
          <div className="ordermore">
            <Link to="/Productspage">
              <img src={plus} alt="more" />
            </Link>
          </div>
          <div className="orderlist">
            <img src={list} alt="list" />
          </div>
        </div>
        <div className="orderspage"></div>

        {/* Table Top  Part*/}

        <div className="orderbodytop">
          <div className="OCS">
            <div className="LeftOrders">
              <p className="ordertext">Orders</p>
              <p>|</p>
              <p className="orderscount">{posts.length}</p>
            </div>
            <div className="rightorderbutton">
              <button>Create</button>
            </div>
            <div className="rightordersearch">
              <div className="orderdivsearch">
                <img src={search} alt="search" />
              </div>
              <div className="orderinputdiv">
                <input className="rrorderinputs"></input>
              </div>
            </div>
          </div>
          {/* Table */}

          <div className="orderTable">
            <table id="customers">
              <tr>
                <th>Order Id</th>
                <th>Order Date & Time</th>
                <th>Store Location</th>
                <th>City</th>
                <th>Store Phone</th>
                <th>Total Items</th>
                <th>Price</th>
                <th>Status</th>
                <th></th>
                <th>View</th>
              </tr>
              {status &&
                posts.map(function (post, index) {
                  return (
                    <tr key={post._id}>
                      <td>ID_{post._id}</td>
                      <td>{post.ordereddateandtime}</td>
                      <td>{post.storelocation}</td>
                      <td>{post.city}</td>
                      <td>{post.storephone}</td>
                      <td>{post.totalitems}</td>
                      <td>{post.price} Rs</td>
                      {post.status === "Cancelled" && (
                        <td className="rrOrdercancel">{post.status}</td>
                      )}
                      {post.status !== "Cancelled" && (
                        <td>{post.status}</td>
                      )}
                      {post.status !== "Cancelled" && (
                        <td
                          className="rrOrdercancel"
                          onClick={() => cancelfunction(post._id)}
                        >
                          Cancel order
                        </td>
                      )}
                      {post.status === "Cancelled" && <td></td>}
                      <td className="rrmodalexit">
                        <i
                          onClick={() => onclickview(post._id)}
                          class="fa fa-eye"
                        ></i>
                      </td>
                    </tr>
                  );
                })}
            </table>
          </div>
        </div>
      </div>
      <div className="rrorderfooter">
        <p>2021 &copy; Laundry</p>
      </div>
    </div>
  );
}

export default Pastorderspage;
