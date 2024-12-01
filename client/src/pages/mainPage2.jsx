import { useEffect, useState } from "react";
// import instance from "../config/config";
// import axios from 'axios';
import axios from "../config/config.jsx";
import ButtonCategories from "../components/ButtonCategories.jsx";
import CardMenu from "../components/CardMenu.jsx";

export default function MainPage2() {
  const [categories, setCategories] = useState([]);
  const [menu, setMenu] = useState([]);

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
  }, []);

  return (
    <div>
      <div className="flex">
        {/* <!-- Left Section --> */}
        <div className="w-2/3 p-8">
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center">
              <i className="text-2xl mr-4"></i>
              <h1 className="text-2xl font-semibold">Order something</h1>
            </div>
            <div className="relative">
              <input
                className="pl-10 pr-4 py-2 rounded-full border border-gray-300 focus:outline-none"
                placeholder="Search"
                type="text"
              />
              <i className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"></i>
            </div>
          </div>
          <div className="flex space-x-4 mb-8">
            {/* INI ISI KATEGORI */}
            <button className="px-4 py-2 rounded-full border border-gray-300 hover:bg-green-700">
              All
            </button>
            {categories.map((el, i) => {
              return <ButtonCategories key={i} props={el.nameCategory} />;
            })}
          </div>
          <h2 className="text-xl font-semibold mb-4">Popular dishes</h2>
          <div className="grid grid-cols-2 gap-6">
            {menu.map((el, i) => {
              return <CardMenu key={i} props={el} />;
            })}
          </div>
        </div>
        {/* <!-- Right Section --> */}
        <div className="w-1/3 bg-white p-8 rounded-l-3xl shadow-lg">
          <div className="flex items-center justify-between mb-8">
            <div className="relative">
              <i className="text-yellow-500 text-2xl"></i>
              <span className="absolute -top-2 -right-2 bg-green-500 text-white text-xs rounded-full px-2">
                4
              </span>
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
          <h2 className="text-xl font-semibold mb-4">My order</h2>
          <div className="space-y-4 mb-8">
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <img
                  alt="Greek Salad"
                  className="w-12 h-12 rounded-full mr-4"
                  height="50"
                  src="https://storage.googleapis.com/a1aa/image/6pRfSriRQhSFPyD8NqntP9LDCytzFJpYEC1njASemVpPIMzTA.jpg"
                  width="50"
                />
                <span>1 × Greek Salad</span>
              </div>
              <span>€34</span>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <img
                  alt="Grilled Fish"
                  className="w-12 h-12 rounded-full mr-4"
                  height="50"
                  src="https://storage.googleapis.com/a1aa/image/zVa0ccBhvw7ZA9zAeU1piHvJnaouk8BbmKMRXASeTupQIMzTA.jpg"
                  width="50"
                />
                <span>2 × Grilled Fish</span>
              </div>
              <span>€52</span>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <img
                  alt="Beef Steak"
                  className="w-12 h-12 rounded-full mr-4"
                  height="50"
                  src="https://storage.googleapis.com/a1aa/image/esPIJ9k23QQ4WyvwOEvkDLzmzglTWc0r1IkKR0lq5MLKEm5JA.jpg"
                  width="50"
                />
                <span>1 × Beef Steak</span>
              </div>
              <span>€48</span>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <img
                  alt="Ramen"
                  className="w-12 h-12 rounded-full mr-4"
                  height="50"
                  src="https://storage.googleapis.com/a1aa/image/rbar9tnQydqQFxcoxkiQdYCfR7D4Ct2vrnSF7bF5fWnOIMzTA.jpg"
                  width="50"
                />
                <span>1 × Ramen</span>
              </div>
              <span>€29</span>
            </div>
          </div>
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center">
              <i className="text-yellow-500 text-2xl mr-4"></i>
              <div>
                <span className="block">Delivery</span>
                <span className="text-gray-500">30-40 min</span>
              </div>
            </div>
            <span>€5</span>
          </div>
          <div className="flex items-center justify-between mb-8">
            <span className="text-lg font-semibold">Total Amount:</span>
            <span className="text-2xl font-semibold">€168</span>
          </div>
          <button className="w-full py-3 bg-green-500 text-white rounded-full font-semibold">
            Checkout
          </button>
        </div>
      </div>
    </div>
  );
}
