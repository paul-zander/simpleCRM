function EditProduct({ data, editData, setData }) {
  console.log(data);
  return (
    <div className="w-full flex items-center justify-center flex-col mt-24 gap-10">
      <img
        className="rounded-full h-[200px] w-[200px] object-cover shadow-xl"
        src={data?.img}
        alt=""
      />
      <form onSubmit={editData} className="flex flex-col gap-3 items-center">
        <input
          className="border-2 border-gray-200 w-[400px] p-1 outline-none"
          type="text"
          value={data?.product || ""}
          placeholder="Product name"
          onChange={(e) => setData({ ...data, product: e.target.value })}
        />
        <input
          className="border-2 border-gray-200 w-[400px] p-1 outline-none"
          type="number"
          value={data?.price || ""}
          placeholder="Price"
          onChange={(e) => setData({ ...data, price: e.target.value })}
        />
        <textarea
          className="border-2 border-gray-200 w-[400px] h-[200px] resize-none p-1 outline-none"
          type="text"
          value={data?.description || ""}
          placeholder="Description"
          onChange={(e) => setData({ ...data, description: e.target.value })}
        />
        {/* <input
          className="border-2 border-gray-200 w-[400px] p-1 outline-none"
          type="text"
          value={data?.phone || ""}
          placeholder="Phone"
          onChange={(e) => setData({ ...data, phone: e.target.value })}
        />
        <input
          className="border-2 border-gray-200 w-[400px] p-1 outline-none"
          type="text"
          value={data?.email || ""}
          placeholder="Email"
          onChange={(e) => setData({ ...data, email: e.target.value })}
        />
        <input
          className="border-2 border-gray-200 w-[400px] p-1 outline-none"
          type="text"
          value={data?.country || ""}
          placeholder="Country"
          onChange={(e) => setData({ ...data, country: e.target.value })}
        />
        <input
          className="border-2 border-gray-200 w-[400px] p-1 outline-none"
          type="text"
          value={data?.age || ""}
          placeholder="Age"
          onChange={(e) => setData({ ...data, age: e.target.value })}
        /> */}
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
