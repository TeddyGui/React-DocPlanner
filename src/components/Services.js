import React from "react";

const Service = [
  {
    image: "https://www.docplanner.com/img/flag.png",
    title: "Leader in 10 countries",
    text: "Poland, Turkey, Spain, Italy,  Mexico, Brazil, Argentina and Chile"
  },
  {
    image: "https://www.docplanner.com/img/visits.png",
    title: "1 million appointments",
    text: "booked last month"
  },
  {
    image: "https://www.docplanner.com/img/patients.png",
    title: "30 million unique patients",
    text: "visit us every month"
  },
  {
    image: "https://www.docplanner.com/img/doctors.png",
    title: "2 million active doctors",
    text: "trust in our solutions"
  }
];
function Services(props) {
  let sectionHtml = [];
  sectionHtml = Service.map((obj, i) => (
    <div key={i} className="Service3">
      <img src={obj.image} />
      <h3> {obj.title} </h3>
      <p> {obj.text} </p>
    </div>
  ));
  return sectionHtml;
}
export default Services;