import React from "react";

const Picture = [
  {
    image: "https://www.docplanner.com/images/warsaw.png",
    link1: "Warsaw"
  },
  {
    image: "https://www.docplanner.com/images/barcelona.png",
    link1: "Barcelona"
  },
  {
    image: "https://www.docplanner.com/images/istanbul.png",
    link1: "Istanbul"
  },
  {
    image: "https://www.docplanner.com/images/rome.png",
    link1: " Rome"
  },
  {
    image: "https://www.docplanner.com/images/mexico-city.png",
    link1: " Mexico city"
  },
  {
    image: "https://www.docplanner.com/images/curitiba.png",
    link1: "  Curitiba"
  }
];
function Pictures(props) {
  let sectionHtml = [];
  sectionHtml = Picture.map((obj, i) => (
    <div key={i} className="countries-info">
      <a >
        <img className="img-1" src={obj.image} />
      </a>
      <div className="box2">
        <a className="box3" href="">
          {obj.link1}
        </a>

        <a className="button-1">
          
          <span>SEE OPENINGS</span>
        </a>
      </div>
    </div>
  ));
  return sectionHtml;
}
export default Pictures;
