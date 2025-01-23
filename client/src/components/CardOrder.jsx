export default function CardOrder({ props }) {
  // ini card order
  // console.log(props,`????`);

  return (
    <div className="flex items-center justify-between rounded-full bg-red-200 ">
      <div className="flex items-center p-2">
        <img
          alt="Greek Salad"
          className="w-12 h-12 rounded-full mr-4"
          height="50"
          src={props.imgUrl}
          width="50"
        />
        <span>
          {props.quantity}x {props.name}
        </span>
      </div>
      <span className="m-5">€{props.totalPrice}</span>
    </div>
  );
}
