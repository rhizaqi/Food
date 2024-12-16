export default function CardMenu({ props, addToCart }) {
  // console.log(addToCart,`gimana?`);

  return (
    <div className="p-5 bg-white rounded-xl shadow-md overflow-hidden">
      <img
        alt=""
        className="w-full h-40 object-cover rounded-xl"
        height="400"
        src={props.imgUrl}
        width="600"
      />
      <div className="flex flex-row justify-between p-4">
        <div>
          <h3 className="text-lg font-semibold">{props.name}</h3>
          <p className="text-gray-500">
            <i className="text-yellow-500"></i>
            4.5 • {props.Category.nameCategory}
          </p>
        </div>

        <div className="flex gap-2">
          <div className="px-6 py-4 rounded-xl border border-yellow-500 bg-yellow-400">
            $ {props.price}
          </div>
          <button
            onClick={() => addToCart(props.id)}
            className="px-4 py-4 rounded-xl border border-gray-400 bg-green-500 hover:bg-green-700"
          >
            Add
          </button>
        </div>
      </div>
    </div>
  );
}
