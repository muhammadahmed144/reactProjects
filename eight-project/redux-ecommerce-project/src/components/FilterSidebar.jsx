const FilterSidebar = () => {
  return (
    <aside className="bg-white rounded-xl shadow-lg p-6">

      <h2 className="text-2xl font-bold mb-6">
        Filters
      </h2>

      <div className="space-y-4">

        <label className="flex gap-3">
          <input type="checkbox" />
          Electronics
        </label>

        <label className="flex gap-3">
          <input type="checkbox" />
          Fashion
        </label>

        <label className="flex gap-3">
          <input type="checkbox" />
          Shoes
        </label>

        <label className="flex gap-3">
          <input type="checkbox" />
          Accessories
        </label>

      </div>

    </aside>
  );
};

export default FilterSidebar;