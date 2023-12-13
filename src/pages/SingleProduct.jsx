function SingleProduct({ data }) {
  return (
    <div className="flex gap-[20px]">
      <img
        className="w-[100px] h-[100px] rounded-full object-cover"
        src={
          data.img
            ? data.img
            : "https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg"
        }
        alt=""
      />
      <div>
        <h2 className="text-2xl mb-2">{`${data.product}`}</h2>
        <div className="mb-[10px] text-gray-600 text-sm">
          <span className="font-bold">Tracking ID: </span>
          <span>{data.id}</span>
        </div>
        <div className="mb-[10px] text-gray-600 text-sm">
          <span className="font-bold">Price: </span>
          <span>{data.price} €</span>
        </div>
        <div className="mb-[10px] text-gray-600 text-sm">
          <span className="font-bold">Description: </span>
          <span>{data.description}</span>
        </div>{" "}
      </div>
    </div>
  );
}

export default SingleProduct;
