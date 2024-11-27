export default function CardMenu({props}) {
    console.log(props,`ini data menu`);

    // console.log(props.Category,`ini category menu`);
    
  return (
    <div className="p-5 bg-white rounded-xl shadow-md overflow-hidden">
      <img
        alt="classNameic Caesar Salad"
        className="w-full h-40 object-cover rounded-xl"
        height="400"
        src={props.imgUrl}
        width="600"
      />
      <div className="p-4">
        <h3 className="text-lg font-semibold">{props.name}</h3>
        <p className="text-gray-500">
          <i className="text-yellow-500"></i>
          4.5 • {props.Category.nameCategory}
        </p>
      </div>
    </div>
  );
}
