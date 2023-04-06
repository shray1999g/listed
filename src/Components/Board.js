import React from "react";
import dashboard_icon from "../Images/dashboard_icon.png";
import transaction_icon from "../Images/transaction_icon.png";
import schedule_icon from "../Images/schedule_icon.png";
import user_icon from "../Images/user_icon.png";
import setting_icon from "../Images/setting_icon.png";

export default function Board() {
  return (
    <div className="bg-black text-white pl-14 2xl:pl-14 xl:pl-10  w-72 rounded-3xl flex flex-col">
      <div className="text-start text-4xl 2xl:text-4xl xl:text-3xl font-serif font-bold my-16">
        Board.
      </div>
      <div className="flex justify-start items-center w-fit cursor-pointer">
        <img
          className="w-5 h-5 mt-1 mr-6 2xl:mr-6 xl:mr-4"
          src={dashboard_icon}
          alt=""
        />
        <div className="font-bold items-center text-xl 2xl:text-xl xl:text-sm">
          Dashboard
        </div>
      </div>
      <div className="flex items-center justify-start mt-8 w-fit cursor-pointer">
        <img
          className="w-5 h-5 mt-1 mr-6 2xl:mr-6 xl:mr-4"
          src={transaction_icon}
          alt=""
        />
        <div className=" text-xl 2xl:text-xl xl:text-sm">Transactions</div>
      </div>
      <div className="flex items-center justify-start mt-8 w-fit cursor-pointer">
        <img
          className="w-5 h-5 mt-1 mr-6 2xl:mr-6 xl:mr-4"
          src={schedule_icon}
          alt=""
        />
        <div className=" text-xl 2xl:text-xl xl:text-sm">Schedules</div>
      </div>
      <div className="flex items-center justify-start mt-8 w-fit cursor-pointer">
        <img
          className="w-5 h-5 mt-1 mr-6 2xl:mr-6 xl:mr-4"
          src={user_icon}
          alt=""
        />
        <div className=" text-xl 2xl:text-xl xl:text-sm">Users</div>
      </div>
      <div className="flex items-center justify-start mt-8 w-fit cursor-pointer">
        <img
          className="w-5 h-5 mt-1 mr-6 2xl:mr-6 xl:mr-4"
          src={setting_icon}
          alt=""
        />
        <div className=" text-xl 2xl:text-xl xl:text-sm">Settings</div>
      </div>
      <div className=" text-lg 2xl:text-lg xl:text-sm align-text-bottom text-start mt-[60vh] cursor-pointer">
        Help
      </div>
      <div className=" text-lg 2xl:text-lg xl:text-sm text-start mt-4 cursor-pointer">
        Contact Us
      </div>
    </div>
  );
}