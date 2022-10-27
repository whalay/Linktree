import React, { Fragment } from "react";
import share from "../assets/Icon1.png";
import I4G from "../assets/I4G.png";
import zuri from "../assets/zuri.png";
import more from "../assets/Icon.png";
import slack from "../assets/slack.png";
import github from "../assets/git.png";
import profile from "../assets/profile.png";

const Home = () => {
  return (
    <Fragment>
      <div className="text-md text-center h-screen">
        <div className="my-10 relative">
          <span className="absolute top-3 right-8 border rounded-full p-2 py-3 md:hidden">
            {" "}
            <img src={more} alt="" />
          </span>
          <span className="absolute top-3 right-64 border rounded-full p-2 py-3 hidden md:block">
            <img src={share} alt="" />
          </span>
          <img src={profile} alt="" className="m-auto" id="profile_img"/>
          <p className="font-bold text-3xl">Soliu Yusuf</p>
        </div>
        <ul className="text-center">
          <a href="http://twitter.com/holar102" id="twitter">
            <li className="bg-[#EAECF0] p-4 m-4 md:mx-20">Twitter Link</li>
          </a>
          <a href="http://books.zuri.team" id="btn_zuri">
            <li className="bg-[#EAECF0] p-4 m-4 md:mx-20">Zuri Team</li>
          </a>
          <a href="http://books.zuri.team" i="books">
            <li className="bg-[#EAECF0] p-4 m-4 md:mx-20">Zuri Books</li>
          </a>
          <a href="https://books.zuri.team/python-for-beginners?ref_id=<yourslackname>" id="book_python">
            <li className="bg-[#EAECF0] p-4 m-4 md:mx-20">Python Books</li>
          </a>
          <a href="https://background.zuri.team" id="pitch">
            <li className="bg-[#EAECF0] p-4 m-4 md:mx-20">
              Background Check for Coders
            </li>
          </a>
          <a href="https://books.zuri.team/design-rules" id="book_design">
            <li className="bg-[#EAECF0] p-4 m-4 md:mx-20">Design Books</li>
          </a>
        </ul>
        <div className="flex justify-center gap-5">
          <img src={slack} alt="" />
          <img src={github} alt="" />
        </div>
      </div>
      <footer className="test-left p-5 mt-36 ">
        <hr />
        <div className="p-5  md:flex justify-between">
          <img src={I4G} alt="" />
          <p>HNG Internshhip 9 Frontend task</p>
          <img src={zuri} alt="" />
        </div>
      </footer>
    </Fragment>
  );
};

export default Home;
