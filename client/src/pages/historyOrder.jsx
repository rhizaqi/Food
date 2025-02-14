import { useParams } from "react-router";
import axios from "../config/config";
import { useEffect, useState } from "react";

export default function HistoryOrder() {
  const [history, setHistory] = useState([]);
  const params = useParams();

  const fetchHistoryOrder = async () => {
    try {
      const resp = await axios({
        method: "get",
        url: "/orders",
        headers: {
          Authorization: "Bearer " + localStorage.getItem("access_token"),
        },
      });

      console.log(resp.data, `<<< try fetch history order >>>`);
      setHistory(resp.data);
    } catch (error) {
      console.log(error, `error history order`);
      throw error;
    }
  };

  useEffect(() => {
    fetchHistoryOrder();
  }, []);

  return (
    <div>
      {/* TABLE */}
      <div className="flex justify-center p-5 h-screen w-full bg-yellow-100">
        <div className="relative overflow-x-auto">
          <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" className="px-6 py-3">
                  No.
                </th>
                <th scope="col" className="px-6 py-3">
                  Order Id
                </th>
                <th scope="col" className="px-6 py-3">
                  Name
                </th>
                <th scope="col" className="px-6 py-3">
                  Image
                </th>
                <th scope="col" className="px-6 py-3">
                  Category
                </th>
                <th scope="col" className="px-6 py-3">
                  Price
                </th>
                <th scope="col" className="px-6 py-3">
                  Quantity
                </th>
                <th scope="col" className="px-6 py-3">
                  Total Price
                </th>
                <th scope="col" className="px-6 py-3">
                  Status Payment
                </th>
              </tr>
            </thead>
            <tbody>
              {history.map((el, i) => {
                return (
                  <tr
                    key={i}
                    className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200"
                  >
                    <th
                      scope="row"
                      className="px-6 py-4 font-medium text-gray-900  dark:text-white"
                    >
                      {i++}
                    </th>
                    <th
                      scope="row"
                      className="px-6 py-4 font-medium text-gray-900  dark:text-white"
                    >
                      {el.Food.name}
                    </th>
                    <th
                      scope="row"
                      className="px-6 py-4 font-medium text-gray-900  dark:text-white"
                    >
                      {el.orderId}
                    </th>
                    <th
                      scope="row"
                      className="px-6 py-4 font-medium text-gray-900  dark:text-white"
                    >
                      <img src={el.imgUrl} className="rounded w-30 h-20" />
                    </th>
                    <th
                      scope="row"
                      className="px-6 py-4 font-medium text-gray-900  dark:text-white"
                    >
                      {el.categoryId}
                    </th>
                    <th
                      scope="row"
                      className="px-6 py-4 font-medium text-gray-900  dark:text-white"
                    >
                      $ {el.price}
                    </th>
                    <th
                      scope="row"
                      className="px-6 py-4 font-medium text-gray-900  dark:text-white"
                    >
                      $ {el.quantity}
                    </th>
                    <th
                      scope="row"
                      className="px-6 py-4 font-medium text-gray-900  dark:text-white"
                    >
                      $ {el.totalPrice}
                    </th>
                    <th
                      scope="row"
                      className="px-6 py-4 font-medium text-gray-900  dark:text-white"
                    >
                      {el.statusPayment}
                    </th>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
