import React from "react";
import { useState,useRef } from "react";
import { BiLogOutCircle,BiMoney } from "react-icons/bi";
import {
  MdDashboardCustomize,
  MdHouse,
  MdSettings,
  MdAccessTimeFilled
} from "react-icons/md";

import {
  BsChevronDown,
  BsArrowRight,
  BsFillShieldLockFill,
  BsPersonBadgeFill,
  BsFillFileImageFill,
} from "react-icons/bs";
import {
  FaChevronCircleLeft,
  FaRegCalendarAlt,
  FaUsers,
  
} from "react-icons/fa";

const Menus = [
  {
    title: "Dashboard",
    submenu: true,
    icon: <MdDashboardCustomize />,
    submenuitems: [
      { title: "Dashboard dark" },
      { title: "Patient" },
      { title: "Patient Details" },
      { title: "Doctor" },
      { title: "Review" },
    ],
  },
  { title: "Appointment", icon: <MdAccessTimeFilled /> },
  { title: "Revenue", icon: <BiMoney /> },
  { title: "Rooms", icon: <MdHouse /> },
  {
    title: "Staff",
    icon: <FaUsers />,
    submenu: true,
    spacing: true,
    submenuitems: [
      { title: "cheaf Staff" },
      { title: "workers" },
      { title: "Cleaners" },
      { title: "Maids" },
      { title: "Review" },
    ],
  },
  { title: "Files", icon: <BsFillFileImageFill /> },
  { title: "Profile", icon: <BsPersonBadgeFill /> },
  { title: "Settings", icon: <MdSettings /> },
];

function Sidebar() {
  const [open, setOpen] = useState(true);
  const [openSub, setOpenSub] = useState(false);
  const ref = useRef();
  return (
    <div
      className={`${
        open
          ? "w-64  absolute z-10"
          : " md:w-20 transition-all duration-500 w-12 relative"
      } transition-all duration-500 border-r-4  h-screen bg-white sm:relative`}
    >
      <FaChevronCircleLeft
        onClick={() => setOpen(!open)}
        title="Show / Hide"
        className={`${
          !open && "-rotate-180 transition-all duration-300"
        } text-3xl bg-green-400  text-white rounded-full absolute top-9  cursor-pointer -right-3`}
      />
      <div className="flex md:pl-4 items-center py-2 ">
        <BsFillShieldLockFill className="text-4xl duration-700 text-green-500 cursor-pointer" />
        <h1
          className={`${
            !open && "hidden duration-200"
          } text-4xl pl-8 duration-500 tracking-wider text-green-500 font-medium`}
        >
          ERES
        </h1>
      </div>
      <div className=" bg-white h-full overflow-y-auto">
        <ul className="p-2">
          {Menus.map((menu, i) => (
            <>
              <li
               
                key={i}
                className={`${
                  menu.spacing ? "mt-9" : "mt-2"
                } text-sm justify-center mt-2  p-2 gap-x-4 flex items-center cursor-pointer hover:bg-green-100 rounded-md`}
              >
                
                <span  className="text-2xl  block ">
                
                  {menu.icon ? (
                    menu.icon
                  ) : (
                    <p className="bg-gray-300 p-4 animate-pulse rounded-md"></p>
                  )}
                  
                </span>
                <span
                  className={`${
                    !open && "hidden"
                  } text-base duration-200 font-serif font-medium flex-1`}
                >
                  {menu.title}
                </span>
                <span onClick={() => setOpenSub(!openSub)}>
                  {menu.submenu && open && (
                    <BsChevronDown className={`${openSub && "rotate-180"}`} />
                  )}
                </span>
              </li>
              {menu.submenu && open && openSub && (
                <ul className="w-1/2 mx-auto grid gap-2">
                  {menu.submenuitems.map((item, index) => (
                    <li
                      key={index}
                      className="text-xs cursor-pointer text-gray-400 rounded-md hover:text-green-500 w-max items-center gap-2 capitalize font-medium"
                    >
                      {item.title}
                    </li>
                  ))}
                </ul>
              )}
            </>
          ))}
        </ul>
        <div
          className={`${
            !open && "opacity-0 duration-300 cursor-default"
          } bg-red-500 p-4 cursor-pointer hover:scale-95 duration-300 relative text-white mx-6 rounded-lg`}
        >
          <p>Check your Job</p>
          <p>Schedule</p>
          <p>
            <BsArrowRight />
          </p>
          <FaRegCalendarAlt className="absolute text-[6rem] font-thin skew-x-6 opacity-25 right-0 bottom-0" />
        </div>
      </div>
      <a
        className={`${
          !open && "hidden"
        } text-base duration-200 mb-6 mx-4 font-medium flex-1`}
        href="/"
      >
        <BiLogOutCircle className="inline text-xl" />
        Logout
      </a>
    </div>
  );
}

export default Sidebar;
