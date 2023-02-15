import { useState, useEffect } from "react";
import ShowInfo from "./ShowInfo";

export default function SingleFilm({id, src, title}) {
    const [visibleDetails, setVisibleDetails] = useState(false);
    console.log("id", id);
  return (
    <div className="col mb-2 px-1" key={id}>
      <img
        className="img-fluid"
        src={src}
        alt={title}
        onClick={() => {
            setVisibleDetails(!visibleDetails);
        }}
      />
      {visibleDetails ? <ShowInfo id={id}/> : ""}
    </div>
  );
}
