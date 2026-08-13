import { Search } from "lucide-react";

const SearchBar = () => {
  return (
    <div className="max-w-4xl mx-auto my-10 px-5">
      <div className="flex border rounded-xl overflow-hidden shadow-sm">

        <input
          type="text"
          placeholder="Search for products..."
          className="flex-1 px-5 py-3 outline-none"
        />

        <button className="bg-blue-600 text-white px-6 hover:bg-blue-700 transition">
          <Search />
        </button>

      </div>
    </div>
  );
};

export default SearchBar;