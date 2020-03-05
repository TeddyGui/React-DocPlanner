import React from "react";

const theLinks  = [
  {
    label: "Znanylekarz"
  },
  {
    label: "Doctoralia"
  },
  {
    label: "MioDottore"
  },
  {
    label: "DoktorTakvimi"
  },
  {
    label: "Znamylekar"
  }
];

function  List(props) {
  let sectionHtml = [];
  sectionHtml = theLinks.map((img, i) => (
    <div key={i} className="svgi">
      <ul>
        <li>
          <a href="#">
            <div className="svg-2">{img.label}</div>
            <img
              className="image"
              src="https://www.docplanner.com/img/sygnet.png"
            />
          </a>
        </li>
      </ul>
    </div>
  ));
  return sectionHtml;
}
export default List;
