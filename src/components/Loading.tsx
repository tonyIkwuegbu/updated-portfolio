import brand from "../assets/brand.png"


function Loading() {
  return (
    <div style={{ display: "grid", placeItems: "center", height: "100vh", backgroundColor: "#cdcdcd"}}>
      <div className="rounded-full">
        <img
          src={brand}
          alt="brand"
          className="w-36 object-contain rounded-md animate-spin p-2"
          height={100}
        />
      </div>
    </div>
  );
}

export default Loading;