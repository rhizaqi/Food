import Button from "./button";

export default function Card() {
  //bisa fetch atau turunan dari page lain
  return (
    <div className="flex justify-center p-5">
      <div className="flex flex-col gap-2 w-60 h-70 bg-blue-200 p-2 rounded-2xl">
        <div>
          <img
            className="w-60 h-40 object-cover rounded-t-xl"
            src="https://images.unsplash.com/photo-1589627461407-6257b1acf0fd?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
          />
        </div>
        <div className="text-center font-bold text-xl">Nama Menu</div>
        <div className="w-50 h-20 break-words text-center">
          Description sadagldhva sdasdavafwefutwajl sbvdaywy
        </div>
        <div className="p-2 flex flex-row justify-between">
          <div className="text-2xl">Rp Price</div>
          <Button />
        </div>
      </div>
    </div>
  );
}
