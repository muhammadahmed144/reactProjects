const Pagination = () => {
  return (
    <div className="flex justify-center gap-3 py-12">

      <button className="px-4 py-2 border rounded-lg hover:bg-blue-600 hover:text-white">
        1
      </button>

      <button className="px-4 py-2 border rounded-lg hover:bg-blue-600 hover:text-white">
        2
      </button>

      <button className="px-4 py-2 border rounded-lg hover:bg-blue-600 hover:text-white">
        3
      </button>

      <button className="px-4 py-2 border rounded-lg hover:bg-blue-600 hover:text-white">
        Next →
      </button>

    </div>
  );
};

export default Pagination;