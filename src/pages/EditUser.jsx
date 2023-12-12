function EditUser({ data, editData, setData }) {
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
          value={data?.name || ""}
          placeholder="Name"
          onChange={(e) => setData({ ...data, name: e.target.value })}
        />
        <input
          className="border-2 border-gray-200 w-[400px] p-1 outline-none"
          type="text"
          value={data?.username || ""}
          placeholder="Username"
          onChange={(e) => setData({ ...data, username: e.target.value })}
        />
        <input
          className="border-2 border-gray-200 w-[400px] p-1 outline-none"
          type="text"
          value={data?.adress || ""}
          placeholder="Adress"
          onChange={(e) => setData({ ...data, adress: e.target.value })}
        />
        <input
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
        />
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

export default EditUser;
