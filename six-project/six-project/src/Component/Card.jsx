import React from "react";

const Card = (props) => {
  console.log(props);

  return (
    <div>
      <a
        key={props.idx}
        href={props.elem.url}
        target="_blank"
        className="bg-gray-900 p-5 rounded text-center block"
      >
        <div className="w-full h-52 overflow-hidden rounded">
          <img
            className="w-full h-full object-cover"
            src={props.elem.download_url}
            alt=""
          />
        </div>
        <h2 className="mt-2 text-sm">{props.elem.author}</h2>
      </a>
    </div>
  );
};

export default Card;
