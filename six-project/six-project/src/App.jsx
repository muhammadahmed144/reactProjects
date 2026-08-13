import axios from "axios";
import React, { useEffect, useState } from "react";
import Card from "./Component/Card";

const App = () => {
  console.log("App Rendered");
  const [userdata, setuserData] = useState([]);
  const [index, setIndex] = useState(1);
  const [loading, setLoading] = useState(false);

  const getData = async () => {
    try {
      setLoading(true);

      const { data } = await axios.get(
        `https://picsum.photos/v2/list?page=${index}&limit=20`,
      );

      setuserData(data);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getData();
  }, [index]);

  
  let printUserData = loading ? (
    <h1 className="text-gray-400 text-xs absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 font-semibold">
      Loading...
    </h1>
  ) : (
    userdata.map((elem) => {
      return <Card key={elem.id} elem={elem} />;
    })
  );

  return (
    <>
      <div className="bg-black min-h-screen p-4 text-white">
        <div className="h-[82%] grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 py-2">
          {printUserData}
        </div>
        <div className="flex justify-center gap-6 items-center p-4">
          <button
            className="bg-amber-400 text-sm cursor-pointer active:scale-95 text-black rounded px-4 py-2 font-semibold"
            onClick={() => {
              index > 1 ? setIndex(index - 1) : null;
              setuserData([]);
            }}
          >
            Prev
          </button>
          <h4>Page {index}</h4>
          <button
            className="bg-amber-400 text-sm cursor-pointer active:scale-95 text-black rounded px-4 py-2 font-semibold"
            onClick={() => {
              setuserData([]);
              setIndex(index + 1);
            }}
          >
            Next
          </button>
        </div>
      </div>
    </>
  );
};

export default App;
