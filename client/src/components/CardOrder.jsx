export default function CardOrder() {
  // ini card order
  return (
    <div className="flex items-center justify-between rounded-full bg-red-200 ">
      <div className="flex items-center p-2">
        <img
          alt="Greek Salad"
          className="w-12 h-12 rounded-full mr-4"
          height="50"
          src="https://images.unsplash.com/photo-1633436374961-09b92742047b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fExhc2FnbmF8ZW58MHx8MHx8fDA%3Dg"
          width="50"
        />
        <span>1x Greek Salad</span>
      </div>
      <span className="m-5">€34</span>
    </div>
  );
}
