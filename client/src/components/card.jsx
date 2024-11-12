export default function Card() {
  //bisa fetch atau turunan dari page lain

  return (
    <div className="flex justify-center p-10 relative">
      <div className="flex items-center">
        <img
          className="flex w-28 h-28 object-cover rounded-full"
          src="https://images.unsplash.com/photo-1549611016-3a70d82b5040?q=80&w=2030&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt=""
          style={{
            position: "absolute", // Ensure the image is absolutely positioned
            top: "30%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            zIndex: 10, // Bring image above other content
          }} // Center the image
        />
      </div>
      <div className="flex justify-center mt-20 rounded-2xl w-48 h-80 bg-red-400 relative">
        <div className="flex flex-col mt-20 gap-2 text-xl ">
          <div className="flex flex-row gap-5 font-bold">
            <div>Burger</div>
            <div>Price</div>
          </div>
          <div className="flex justify-center">Description</div>
          <div className="flex flex-col-reverse justify-items-end">
            <div className="absolute bottom-0 left-0 p-5">
              <div className="text-lg font-bold">Order Amount</div>
            </div>
          </div>
        </div>
        {/* Order amount positioned at the bottom left corner */}
      </div>
    </div>
  );
}
