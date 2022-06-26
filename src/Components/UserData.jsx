import axios from "axios";
import React, { useEffect, useState } from "react";
import Header from "./Header";

const UserData = () => {
  const [userData, setuserData] = useState([]);
  useEffect(() => {
    const getData = async () => {
      let res = await axios(
        "https://student-api.mycodelibraries.com/api/user/get"
      );

      console.log(res.data.data);
      setuserData(
        res.data.data && res.data.data.length > 0 ? res.data.data : []
      );
    };
    getData();
  }, []);

  const handleDelete = (id) => {
    alert("Are you sure you want to delete this user?");

    axios
      .delete(
        `https://student-api.mycodelibraries.com/api/user/delete?id=${id}`
      )
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
    setuserData(userData.filter((user) => user._id !== id));
  };
  console.log(userData, "user");
  return (
    <div className="container ">
      <Header />
      <div className="row gap-3 d-flex justify-content-between">
        {userData.map((item, index) => (
          <div key={index} className="card" style={{ width: "18rem" }}>
            <img
              src={item.image}
              className="card-img-top"
              alt="images"
              style={{ height: "250px" }}
            />
            <div className="card-body">
              <h5 className="card-title">
                {item.firstName} {item.lastName}
              </h5>
              <div style={{ height: "250px" }}>
                <p className="card-text">Age : {item.age}</p>
                <p className="card-text">Gender : {item.gender}</p>
                <p className="card-text">Hobbies : {item.hobbies}</p>
                <p className="card-text">City : {item.city}</p>
              </div>
              <div className="d-flex justify-content-between">
                <button className="btn btn-primary">
                  <i className="bi bi-pencil-square"></i>
                </button>
                <button
                  className="btn btn-primary"
                  onClick={() => handleDelete(item._id)}
                >
                  <i className="bi bi-trash3"></i>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UserData;
