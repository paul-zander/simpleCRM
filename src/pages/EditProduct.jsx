function EditProduct({ data, editData, setData }) {
  console.log(data);
  return (
    <div className="w-full flex items-center justify-center flex-col mt-12 gap-10">
      <img
        className="rounded-full h-[200px] w-[200px] object-cover shadow-xl"
        src={data?.img}
        alt=""
      />
      <form onSubmit={editData} className="flex flex-col gap-6 items-center">
        <div>
          <h3 className="text-gray-400">Product name</h3>
          <input
            className="border-2 border-gray-200 w-[400px] p-1 outline-none"
            type="text"
            value={data?.product || ""}
            placeholder="Product name"
            onChange={(e) => setData({ ...data, product: e.target.value })}
          />
        </div>
        <div>
          <h3 className="text-gray-400">Price [EUR]</h3>
          <input
            className="border-2 border-gray-200 w-[400px] p-1 outline-none"
            type="number"
            value={data?.price || ""}
            placeholder="Price"
            onChange={(e) => setData({ ...data, price: e.target.value })}
          />
        </div>
        <div>
          <h3 className="text-gray-400">Product description</h3>
          <textarea
            className="border-2 border-gray-200 w-[400px] h-[200px] resize-none p-1 outline-none"
            type="text"
            value={data?.description || ""}
            placeholder="Description"
            onChange={(e) => setData({ ...data, description: e.target.value })}
          />
        </div>
        <button
          className="uppercase w-[200px] p-[10px] border-none bg-[#008080] hover:bg-[#63a5a5] text-white text-bold cursor-pointer mt-[10px]"
          type="submit"
        >
          Submit Changes
        </button>
      </form>
    </div>
  );
}

export default EditProduct;
