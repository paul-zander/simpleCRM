function SingleUser({ data }) {
  return (
    <div className="flex gap-[20px]">
      <img
        className="w-[100px] h-[100px] rounded-full object-cover"
        src={data.img}
        alt=""
      />
      <div>
        <h2 className="text-2xl mb-2">{`${data.name}`}</h2>
        <div className="mb-[10px] text-gray-600 text-sm">
          <span className="font-bold">Email: </span>
          <span>{data.email}</span>
        </div>
        <div className="mb-[10px] text-gray-600 text-sm">
          <span className="font-bold">Phone: </span>
          <span>{data.phone}</span>
        </div>
        <div className="mb-[10px] text-gray-600 text-sm">
          <span className="font-bold">Adress: </span>
          <span>{data.adress}</span>
        </div>{" "}
        <div className="mb-[10px] text-gray-600 text-sm">
          <span className="font-bold">Country: </span>
          <span>{data.country}</span>
        </div>
      </div>
    </div>
  );
}

export default SingleUser;
