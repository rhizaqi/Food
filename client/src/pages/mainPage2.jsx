import { useEffect, useState } from "react";
import axios from "../config/config.jsx";
import ButtonCategories from "../components/ButtonCategories.jsx";
import CardMenu from "../components/CardMenu.jsx";
import CardOrder from "../components/CardOrder.jsx";
import { useNavigate } from "react-router-dom";
import { Link, Element } from "react-scroll";

export default function MainPage2() {
  const [categories, setCategories] = useState([]);
  const [menu, setMenu] = useState([]);
  const [order, setOrder] = useState([]);
  const [priceTotal, setPriceTotal] = useState();
  const navigate = useNavigate();

  const handleAddtoCart = async (value) => {
    try {
      // console.log(value, `iya kah?`);
      const resp = await axios.get(`/foods/` + value);

      console.log(resp.data, `check food id`);

      let newOrderItem = {
        foodId: resp.data.id,
        name: resp.data.name,
        categoryId: resp.data.categoryId,
        price: resp.data.price,
        quantity: 1,
        totalPrice: resp.data.price,
        imgUrl: resp.data.imgUrl,
      }; // dijadikan 1 type object biar bisa di push ke array order

      let newOrder = [...order, newOrderItem];

      console.log(newOrder, `pertama <<<<<<<<<<<<<<<<<<`);

      let orderPdf = [];

      newOrder.forEach((el) => {
        let existingItem = orderPdf.find(
          (el2) =>
            el2.foodId === el.foodId &&
            el2.name === el.name &&
            el2.categoryId === el.categoryId &&
            el2.price === el.price
        );

        if (existingItem) {
          // jika item nya ada, update quantity dan totalPrice
          existingItem.quantity += 1;
          existingItem.totalPrice = existingItem.quantity * existingItem.price;

          // console.log(existingItem, ` if existing ?????????????????`);
        } else {
          // jika item tidak ada, buat entry baru
          orderPdf.push({
            foodId: el.foodId,
            name: el.name,
            categoryId: el.categoryId,
            quantity: el.quantity,
            price: el.price,
            totalPrice: el.totalPrice,
            imgUrl: el.imgUrl,
          });
        }

        console.log(orderPdf, `kedua <<<<<<<<<<<<<<<<<<`);
      });

      // console.log(orderPdf, `dapat orderpdf??`);
      // console.log(order, `dapat order aja??`);

      const addPrice = orderPdf.map((el) => {
        return el.totalPrice;
      });

      let TotalAllPrice = 0;

      addPrice.forEach((el) => {
        TotalAllPrice = TotalAllPrice += el;
      });

      // console.log(TotalAllPrice, `>> totoal??`);
      setPriceTotal(TotalAllPrice);
      setOrder(orderPdf);
    } catch (error) {
      console.log(error, `error in card menu - handle add to cart`);
      throw error;
    }
  };

  const myCart = () => {
    
    try {
      navigate("/history");
    } catch (error) {
      console.log("error in my cart");
      throw error;
    }
  };

  const checkOut = async () => {
    try {
      console.log(order, `order??`);

      const coResp = await axios({
        method: "post",
        url: "/orders",
        data: order,
        headers: {
          Authorization: "Bearer " + localStorage.getItem("access_token"),
        },
      });
      console.log(coResp, `????? ?????????`);

      navigate("/");
    } catch (error) {
      console.log("error mau checkout");
      throw error;
    }
  };

  const fetchCategories = async () => {
    try {
      const { data } = await axios.get(`/categories`);
      setCategories(data);
      // console.log(data, `<< data nyahh `);
    } catch (error) {
      console.log(error, `categories`);
      throw error;
    }
  };

  const fetchMenu = async () => {
    try {
      const { data } = await axios.get(`/foods`);
      // console.log(data, `data menu-menu nya`);
      setMenu(data);
    } catch (error) {
      console.log(error, `error fetch menu`);

      throw error;
    }
  };

  useEffect(() => {
    fetchCategories();
    fetchMenu();

    // handleAddtoCart();
  }, []);

  return (
    <div>
      <div className="flex h-full bg-yellow-100">
        {/* <!-- Left Section --> */}
        <div className="w-2/3 p-8">
          <div className="flex items-center justify-between mb-8">
            <h1 className="text-2xl font-semibold">Order something</h1>
            <div className="relative">
              <input
                className="pl-10 pr-4 py-2 rounded-full border border-gray-300 focus:outline-none"
                placeholder="Search"
                type="text"
              />
            </div>
          </div>
          <div className="flex space-x-4 mb-8">
            {/* INI ISI KATEGORI */}
            <button className="px-4 py-2 bg-white rounded-xl border border-gray-300 hover:bg-green-700">
              All
            </button>
            {categories.map((el, i) => {
              return <ButtonCategories key={i} props={el.nameCategory} />;
            })}
          </div>
          <h2 className="text-xl font-semibold mb-4">Popular dishes</h2>
          <div className="grid grid-cols-2 gap-6">
            {menu.map((el, i) => {
              return (
                <CardMenu key={i} props={el} addToCart={handleAddtoCart} />
              );
            })}
          </div>
        </div>
        {/* <!-- Right Section --> */}
        <div className="w-1/3 bg-white p-8 rounded-l-3xl shadow-lg">
          <div className="flex items-center justify-between mb-8">
            <div className="relative">
              {/* <!-- Logo cart --> */}
              <button>
                <div
                  onClick={() => myCart()}
                  className="flex justify-center items-center"
                >
                  <div className="relative py-2">
                    <div className="t-0 absolute left-3">
                      <span className="m-3 my-1 absolute -top-1 bg-green-500 text-white text-xs rounded-full px-2">
                        5
                      </span>
                    </div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="file: mt-4 h-6 w-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
                      />
                    </svg>
                  </div>
                </div>
              </button>
              {/* <!-- Logo cart --> */}
            </div>
            <div className="flex items-center">
              <img
                alt="User profile picture"
                className="w-10 h-10 rounded-full mr-4"
                height="40"
                src="https://storage.googleapis.com/a1aa/image/qKPDfPZJbLUXUyy31CL7WMUAwGiwIjFwCEMedf5DGDVsQYmnA.jpg"
                width="40"
              />
              <span className="font-semibold">Sarah James</span>
            </div>
          </div>
          <h2 className="text-xl font-semibold mb-4">My Order</h2>
          <div className="flex flex-col gap-2 ">
            {order.map((el, i) => {
              return <CardOrder key={i} props={el} />;
            })}
            {/* terus ini di map */}
          </div>
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center">
              <i className="text-yellow-500 text-2xl mr-4"></i>
              <div className="mt-5">
                <span className="block">Delivery</span>
                <span className="text-gray-500">30-40 min</span>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-between mb-8">
            <span className="text-lg font-semibold">Total Amount:</span>
            <span className="text-2xl font-semibold">${priceTotal}</span>
          </div>
          <button
            onClick={() => checkOut()}
            className="w-full py-3 bg-green-500 text-white rounded-full font-semibold"
          >
            Checkout
          </button>
        </div>
      </div>
    </div>
  );
}
