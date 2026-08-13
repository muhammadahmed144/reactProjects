import React from "react";
import { useState } from "react";
import { SquarePen } from "lucide-react";

const App = () => {
  const [title, setTitle] = useState("");
  const [details, setDetails] = useState("");
  const [task, setTask] = useState([]);
  const [editIndex, setEditIndex] = useState(null);

  const deleteHandler = (index) => {
    const filtered = task.filter((_, i) => i !== index);
    setTask(filtered);
  };

  const submitHandler = (e) => {
    e.preventDefault();

    const copy = [...task];

    if (editIndex !== null) {
      // UPDATE MODE
      copy[editIndex] = { title, details };
      setEditIndex(null);
    } else {
      // ADD MODE
      copy.push({ title, details });
    }

    setTask(copy);
    setTitle("");
    setDetails("");
  };

  return (
    <div className="h-screen lg:flex bg-black text-white p-10">
      <form
        onSubmit={(e) => {
          submitHandler(e);
        }}
        className="flex lg:w-1/2 flex-col gap-4 p-10 lg:px-10 items-center"
      >
        <h1 className="text-3xl font-bold">Add Notes</h1>

        {/* PEHLA INPUT FOR HEADING */}
        <input
          type="text"
          placeholder="Enter Notes Heading"
          className="px-5 w-full font-medium py-2 border-2 outline-none rounded"
          value={title}
          onChange={(e) => {
            setTitle(e.target.value);
          }}
        />

        {/* DETAILED VALA INPUT */}
        <textarea
          type="text"
          className="px-5 w-full font-medium h-32 py-2 flex items-start flex-row border-2 outline-none rounded"
          placeholder="write Details"
          value={details}
          onChange={(e) => {
            setDetails(e.target.value);
          }}
        />
        <button className="bg-white w-full active:scale-95 font-medium text-black px-5 py-2 rounded-md hover:bg-gray-200 transition">
          {editIndex !== null ? "Update Note" : "Add Notes"}
        </button>
      </form>
      <div className="lg:w-1/2 lg:border-l-2 p-10 flex flex-col items-center ">
        <h1 className="text-3xl font-bold w-full text-center">Recent Notes</h1>
        <div className="flex flex-wrap items-start justify-center gap-5 mt-5 w-full h-full overflow-auto">
          {task.map((elem, idx) => {
            return (
              <div
                key={idx}
                className="relative h-70 w-45 bg-cover bg-no-repeat bg-center text-black bg-[url('https://static.vecteezy.com/system/resources/thumbnails/027/524/846/small/note-paper-page-free-png.png')]"
              >
                {/* EDIT BUTTON */}
                <button
                  onClick={() => {
                    setTitle(elem.title);
                    setDetails(elem.details);
                    setEditIndex(idx);
                  }}
                  className="absolute top-2 left-2 bg-blue-500 text-white text-[11px] px-2 py-1 rounded-md hover:bg-blue-600"
                >
                  Edit
                </button>
                {/* ❌ DELETE ICON */}
                <button
                  onClick={() => deleteHandler(idx)}
                  className="absolute top-2 right-0 text-red-500 bg-white/70 rounded-full p-1 hover:bg-red-500 hover:text-white transition"
                >
                  <X size={18} />
                </button>

                <div className="absolute top-6.25 left-2.5 right-break-word flex flex-col gap-[3.10px]">
                  <h3 className="text-2xl font-bold leading-tight truncate capitalize">
                    {elem.title}
                  </h3>
                  <p className="text-[15px] font-medium text-gray-800 leading-[1.2rem] wrap-break-words line-clamp-9">
                    {elem.details}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default App;
