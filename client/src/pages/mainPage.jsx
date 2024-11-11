export default function MainPage() {
  return (
    <div className="flex justify-center bg-red-100 w-screen h-screen">
      <div className="flex justify-center bg-white m-10 w-11/12 rounded-3xl ">
        <div className="flex flex-col w-3/4 p-10">
          <div>ini burger; search; profile; cart</div>
          <div>Banner</div>
          <div>Categories</div>
          <div>Menus</div>
        </div>
        <div className="flex bg-blue-200 rounded-3xl w-1/4">
          <div className="p-10">My Cart</div>
        </div>
      </div>
    </div>
  );
}
