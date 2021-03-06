import React, { useEffect, useState, useContext } from "react";
import { Card, CardBody, CardHeader } from "reactstrap";
import axios from "axios";
import Header from "./Header";
import GlobalContext from "./Contex/GlobalContext";
import { useParams, useNavigate } from "react-router-dom";

const Registration = () => {
  const { submitType } = useContext(GlobalContext);
  const [userInputData, setUserInputData] = useState({
    firstName: "",
    lastName: "",
    age: 0,
    gender: "",
    city: "",
    userImage: "",
    hobbies: ["yoga"],
  });

  let navigate = useNavigate();
  const handleInputData = (e) => {
    setUserInputData({
      ...userInputData,
      [e.target.name]: e.target.value,
    });
  };

  const handleCheckBoxes = (evt) => {
    if (
      document.getElementById("yoga").checked &&
      !userInputData.hobbies.includes("yoga")
    ) {
      userInputData.hobbies.push("yoga");
    }
    if (
      evt.target.checked &&
      !userInputData.hobbies.includes(evt.target.value)
    ) {
      userInputData.hobbies.push(evt.target.value);
    }
    if (!evt.target.checked) {
      if (userInputData.hobbies && userInputData.hobbies.length) {
        userInputData.hobbies = userInputData.hobbies.filter(
          (el) => el !== evt.target.value
        );
      }
    }
  };

  const handleSubmit = (e) => {
    console.log(e, "summitdata");
    e.preventDefault();
    console.log(userInputData);
    const requestJSON = {
      firstName: userInputData.firstName,
      lastName: userInputData.lastName,
      age: userInputData.age,
      hobbies: userInputData.hobbies
        ? JSON.stringify(userInputData.hobbies)
        : "",
      gender: userInputData.gender,
      city: userInputData.city,
      userImage: userInputData.userImage,
    };
    axios
      .post("https://student-api.mycodelibraries.com/api/user/add", requestJSON)
      .then((res) => {
        console.log(res, "data submitted");
        alert("User added successfully");
        navigate("/userdata");
        setUserInputData({
          firstName: "",
          lastName: "",
          age: 0,
          gender: "",
          city: "",
          userImage: "",
          hobbies: ["yoga"],
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const { id } = useParams();
  const getUserDataById = () => {
    axios
      .get(
        `https://student-api.mycodelibraries.com/api/user/get-user-by-id?id=${id}`
      )
      .then((res) => {
        console.log(res.data.data, "updatadatafill");
        setUserInputData(res.data.data);
      })
      .catch((error) => console.log(error));
  };
  useEffect(() => {
    if (submitType === "Update") {
      getUserDataById();
    }
  }, [submitType]);

  const handleUpdatedData = (id) => {
    userInputData["id"] = id;
    const { firstName, lastName, age, gender, city, userImage, hobbies } =
      userInputData;
    axios
      .post("https://student-api.mycodelibraries.com/api/user/update", {
        firstName,
        lastName,
        age,
        gender,
        city,
        userImage,
        hobbies,
        id,
      })
      .then((res) => {
        console.log(res, "updateddata");
        alert("Data updated successfully!");
        navigate("/userdata");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="container">
      <Header />
      <Card>
        <CardHeader className="text-center pb-0">
          {submitType === "Update" ? "Updation Form" : "Registration Form"}
        </CardHeader>
        <CardBody>
          <div className="row g-3">
            <div className="col-12">
              <label className="form-label">First name</label>
              <input
                type="text"
                className="form-control is-valid"
                name="firstName"
                value={userInputData.firstName}
                onChange={handleInputData}
                required
              />
            </div>
            <div className="col-12">
              <label className="form-label">Last name</label>
              <input
                type="text"
                className="form-control is-valid"
                name="lastName"
                value={userInputData.lastName}
                onChange={handleInputData}
                required
              />
            </div>
            <div className="col-12">
              <label className="form-label">Age</label>
              <input
                type="number"
                className="form-control is-valid"
                name="age"
                value={userInputData.age}
                onChange={handleInputData}
                required
              />
            </div>
            <div className="col-12 form-control">
              <label className="form-label">Hobbies</label>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  value="yoga"
                  id="yoga"
                  onChange={handleCheckBoxes}
                  defaultChecked
                />
                <label className="form-check-label" htmlFor="flexCheckDefault">
                  Daily Yoga
                </label>
              </div>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  value="cooking"
                  id="cooking"
                  onChange={handleCheckBoxes}
                />
                <label className="form-check-label" htmlFor="flexCheckChecked">
                  Cooking
                </label>
              </div>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  value="traveling"
                  id="traveling"
                  onChange={handleCheckBoxes}
                />
                <label className="form-check-label" htmlFor="flexCheckChecked">
                  Travelling
                </label>
              </div>
            </div>
            <div className="col-md-3 form-control" required>
              <label className="form-label">Gender</label>
              <div className="d-flex">
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="gender"
                    id="flexRadioDefault1"
                    value="Female"
                    checked={userInputData.gender === "Female"}
                    onChange={handleInputData}
                  />
                  <label
                    className="form-check-label"
                    htmlFor="flexRadioDefault1"
                  >
                    Female
                  </label>
                </div>
                <div className="form-check" style={{ marginLeft: "1rem" }}>
                  <input
                    className="form-check-input"
                    type="radio"
                    name="gender"
                    id="flexRadioDefault2"
                    value="Male"
                    checked={userInputData.gender === "Male"}
                    onChange={handleInputData}
                  />
                  <label
                    className="form-check-label"
                    htmlFor="flexRadioDefault2"
                  >
                    Male
                  </label>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <label className="form-label">City</label>
              <select
                name="city"
                className="form-select"
                id="validationServer04"
                aria-describedby="validationServer04Feedback"
                onChange={handleInputData}
                required
                value={userInputData.city ?? ""}
              >
                <option disabled value="">
                  Choose...
                </option>
                <option value="Mumbai">Mumbai</option>
                <option value="Delhi">Delhi</option>
                <option value="Bangalore">Bangalore</option>
                <option value="Hyderabad">Hyderabad</option>
                <option value="Ahmedabad">Ahmedabad</option>
                <option value="Chennai">Chennai</option>
                <option value="Kolkata">Kolkata</option>
                <option value="Surat">Surat</option>
                <option value="Pune">Pune</option>
              </select>
            </div>
            <div className="col-md-3">
              <label className="form-label">Image</label>
              <input
                type="file"
                className="form-control"
                id="userImage"
                name="userImage"
                aria-describedby="validationServer05Feedback"
                onChange={handleInputData}
              />
            </div>

            <div className="col-12">
              {submitType === "Update" ? (
                <button
                  className="btn btn-primary"
                  onClick={() => handleUpdatedData(id)}
                >
                  Update
                </button>
              ) : (
                <button
                  className="btn btn-primary"
                  type="submit"
                  onClick={handleSubmit}
                >
                  Submit form
                </button>
              )}
            </div>
          </div>
        </CardBody>
      </Card>
    </div>
  );
};

export default Registration;
