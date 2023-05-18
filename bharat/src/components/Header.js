import React from "react";
import { logoDark, cart } from "../assests/index";
// import { BsBag } from "react-icons/bs";
import { TfiBag } from "react-icons/tfi";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Header = () => {
  // for increse the quantity of product
  const productData = useSelector((state) => state.bazar.productData);
  const userInfo = useSelector((state) => state.bazar.userInfo);
  console.log(userInfo);
  // console.log(productData);
  return (
    <div className="w-full h-20 bg-white border-b-[1px] border-b-gray-800 font-titleFont sticky top-0 z-50">
      {/* logo part */}
      <div className="max-w-screen-xl h-full mx-auto flex items-center justify-between">
        <Link to="/">
          <div>
            <img
              className="w-20"
              src="https://t4.ftcdn.net/jpg/02/84/20/39/360_F_284203907_PpYxdxCtsAWSB96cMh0WXWttZ5Qlldn1.jpg"
              alt="imglogo"
            />
          </div>
        </Link>
        {/* second part of header */}
        <div className="flex items-center gap-8">
          <ul className="flex items-center gap-8">
            <li className="text-base text-black font-bold hover:text-orange-900 hover:underline underline-offset-2 decoration-[1px] cursor-pointer duration-300">
              Home
            </li>
            <li className="text-base text-black font-bold hover:text-orange-900 hover:underline underline-offset-2 decoration-[1px] cursor-pointer duration-300">
              Pages
            </li>
            <li className="text-base text-black font-bold hover:text-orange-900 hover:underline underline-offset-2 decoration-[1px] cursor-pointer duration-300">
              Shop
            </li>
            <li className="text-base text-black font-bold hover:text-orange-900 hover:underline underline-offset-2 decoration-[1px] cursor-pointer duration-300">
              Blog
            </li>
            <li className="text-base text-black font-bold hover:text-orange-900 hover:underline underline-offset-2 decoration-[1px] cursor-pointer duration-300">
              Element
            </li>
          </ul>
          {/* for left header img */}
          <Link to="/cart">
            <div className="relative">
              <TfiBag />

              <span className="absolute w-6 top-0 left-0 text-sm flex items-center justify-center font-semibold">
                {productData.length}
              </span>
            </div>
          </Link>

          <Link to="/login">
            <img
              className="w-8 h-8 rounded-full"
              src="https://png.pngtree.com/png-vector/20191003/ourmid/pngtree-user-login-or-authenticate-icon-on-gray-background-flat-icon-ve-png-image_1786166.jpg"
              alt="loginicomimage"
             
            />

            {/* <img   className="w-8 h-8 rounded-full" 
            src={
              userInfo?userInfo.image : "https://thumbs.dreamstime.com/b/vector-illustration-avatar-dummy-logo-collection-image-icon-stock-isolated-object-set-symbol-web-137160339.jpg"
            } 
            alt="dummyimg" /> */}
          </Link>
          {userInfo && (
            <p className="text-base font-titleFont font-semibold underline underline-offset-2">
              {userInfo.name}
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
