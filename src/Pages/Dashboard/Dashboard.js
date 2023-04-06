import React from "react";
import Board from "../../Components/Board";
import search_icon from "../../Images/search_icon.png";
import bell_icon from "../../Images/bell_icon.png";
import profile_pic from "../../Images/profile_pic.png";
import camera_icon from "../../Images/camera_icon.png";
import total_transactions_icon from "../../Images/total_transactions_icon.png";
import thumbsUp from "../../Images/thumbsUp_icon.png";
import person_icon from "../../Images/person_icon.png";
import LineChart from "../../Components/LineChart";
import PieChart from "../../Components/PieChart";
import axios from "axios";

export default function Dashboard() {
  const userDetails = JSON.parse(localStorage.getItem("userDetails"));
  console.log("userDetails", userDetails);

  axios.get()

  return (
    <div className=" h-full p-14 flex justify-center items-center bg-[#DDDDDD]">
      <div className="flex flex-row h-full w-[94vw]">
        <Board />
        <div className="flex flex-col w-[76vw] ml-14">
          <div className="flex flex-row justify-between">
            <div className="text-3xl font-sans font-bold">DashBoard</div>
            <div className="flex flex-row">
              <div className="flex w-fit ">
                <input
                  style={{ textIndent: "20px" }}
                  className="w-64 rounded-2xl h-10 "
                  type="text"
                  placeholder="Search..."
                />
                <img
                  className="absolute ml-56 w-4 h-4 mt-3"
                  src={search_icon}
                  alt=""
                />
              </div>
              <img className="mx-14 w-6 my-1 h-7" src={bell_icon} alt="" />
              {userDetails ? (
                <img
                  className="rounded-full w-12 h-12"
                  src={userDetails.imageUrl}
                  alt=""
                />
              ) : (
                <img
                  className="rounded-full w-12 h-12"
                  src={profile_pic}
                  alt=""
                />
              )}
            </div>
          </div>
          <div className="flex justify-between flex-row mt-10 w-[76vw]">
            <div className="bg-[#DDEFE0] w-64 h-32 rounded-3xl flex flex-col">
              <img className="w-8 h-7 mt-5 ml-52" src={camera_icon} alt="" />
              <div className="text-lg font-medium text-start ml-6 mt-1">
                Total Revenues
              </div>
              <div className="text-3xl font-bold text-start ml-6 mt-1">
                $2,129,430
              </div>
            </div>

            <div className="bg-[#F4ECDD] w-64 h-32 rounded-3xl flex flex-col">
              <img
                className="w-8 h-7 mt-5 ml-52"
                src={total_transactions_icon}
                alt=""
              />
              <div className="text-lg font-medium text-start ml-6 mt-1">
                Total Transactions
              </div>
              <div className="text-3xl font-bold text-start ml-6 mt-1">
                1,520
              </div>
            </div>

            <div className="bg-[#EFDADA] w-64 h-32 rounded-3xl flex flex-col">
              <img className="w-8 h-7 mt-5 ml-52" src={thumbsUp} alt="" />
              <div className="text-lg font-medium text-start ml-6 mt-1">
                Total Likes
              </div>
              <div className="text-3xl font-bold text-start ml-6 mt-1">
                9,712
              </div>
            </div>

            <div className="bg-[#DEE0EF] w-64 h-32 rounded-3xl flex flex-col">
              <img className="w-9 h-7 mt-5 ml-52" src={person_icon} alt="" />
              <div className="text-lg font-medium text-start ml-6 mt-1">
                Total Users
              </div>
              <div className="text-3xl font-bold text-start ml-6 mt-1">892</div>
            </div>
          </div>
          <div className="bg-white w-[76vw] mt-16 rounded-3xl h-[44vh] p-10">
            <LineChart />
          </div>
          <div className="flex mt-16 justify-between flex-row">
            <div className="bg-white w-[36vw] rounded-3xl h-96">
              <div className="text-2xl font-bold text-start ml-10 mt-10">
                Top Products
              </div>
              <PieChart />
            </div>
            <div className="bg-white w-[36vw] flex flex-col rounded-3xl h-96 p-10">
              <div className="flex flex-row justify-between">
                <div className="text-2xl font-bold">Today's schedule</div>
                <div className="text-[#858585] cursor-pointer">
                  See all &gt;
                </div>
              </div>
              <div className="flex flex-col mt-10">
                <div className="flex flex-row items-center">
                  <div className="bg-[#9BDD7C] w-2 h-20"></div>
                  <div className="flex flex-col ml-3">
                    <div className="text-[#666666] font-semibold  text-start">
                      Meeting from supliers from Kuta Bali
                    </div>
                    <div className="text-[#999999] text-sm text-start">
                      14:00-15:00
                    </div>
                    <div className="text-[#999999] text-start text-sm">
                      at Sunset Road, Kuta, Bali
                    </div>
                  </div>
                </div>

                <div className="flex flex-row items-center mt-5">
                  <div className="bg-[#6972C3] w-2 h-20"></div>
                  <div className="flex flex-col ml-3">
                    <div className="text-[#666666] font-semibold text-start">
                      Check operation at Giga Factory 1
                    </div>
                    <div className="text-[#999999] text-sm text-start">
                      18:00-20:00
                    </div>
                    <div className="text-[#999999] text-start text-sm">
                      at Central Jakarta
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}