import axios from "axios";
import { useState, useEffect } from "react";

const Card = (props) => {
  const donateCard = document.querySelector(".donate-card");
  const cardDonate = document.querySelector(".card-donate");

  const project = props.project;
  const client = props.client;

  // const [res, setRes] = useState(null);
  // const [donations, setDonations] = useState(null);

  // useEffect(() => {
  //   const getData = async () => {
  //     const response = await client.get(`/donation?id=${project.id}`);
  //     setRes(response.data);

  //     if (res) {
  //       setDonations(res.data);
  //     }
  //   };
  //   getData();
  // }, []);

  // console.log(res);

  return (
    <>
      <div className="card" id={project.id}>
        <div className="details-card">
          <div className="card-img">
            <img src={project.urls.small} alt="" />
          </div>
          <h1 className="card-title">{project.title}</h1>
          <div className="progress-bar">
            <div className="progress"></div>
          </div>
          <p className="amount">
            <span>$6900</span> Raised
          </p>
          <button
            onClick={() => {
              donateCard.style.visibility = "visible";
            }}
          >
            Donate Now
          </button>
        </div>

        <div className="donate-card">
          <div
            className="close-button"
            onClick={() => {
              donateCard.style.visibility = "hidden";
            }}
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
              <path d="M315.3 411.3c-6.253 6.253-16.37 6.253-22.63 0L160 278.6l-132.7 132.7c-6.253 6.253-16.37 6.253-22.63 0c-6.253-6.253-6.253-16.37 0-22.63L137.4 256L4.69 123.3c-6.253-6.253-6.253-16.37 0-22.63c6.253-6.253 16.37-6.253 22.63 0L160 233.4l132.7-132.7c6.253-6.253 16.37-6.253 22.63 0c6.253 6.253 6.253 16.37 0 22.63L182.6 256l132.7 132.7C321.6 394.9 321.6 405.1 315.3 411.3z" />
            </svg>
          </div>
          <h3>Select the amount that you want to donate</h3>
          <div className="donations">
            <span>
              <input type="radio" name="donation" id="10" />
              <p>$10 </p>
            </span>
            <span>
              <input type="radio" name="donation" id="50" />
              <p>$50 </p>
            </span>
            <span>
              <input type="radio" name="donation" id="100" />
              <p>$100 </p>
            </span>
            <span>
              <input type="radio" name="donation" id="500" />
              <p>$500 </p>
            </span>
            <span>
              <input type="radio" name="donation" id="1000" />
              <p>$1000 </p>
            </span>
          </div>

          <button
            onClick={() => {
              donateCard.style.visibility = "visible";
            }}
          >
            Pay Now
          </button>
        </div>

        <div className="sucess-card">Sucess</div>
      </div>
    </>
  );
};

export default Card;
