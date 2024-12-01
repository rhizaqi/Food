export default function ButtonCategories({props}) {
    // ini kategori menu
    // console.log(props,`ini nama categories`);
    
  return (
    <div>
      <button className="px-4 py-2 rounded-full border border-gray-300 hover:bg-green-700">
        {props}
      </button>
    </div>
  );
}
