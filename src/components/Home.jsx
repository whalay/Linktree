import React, { Fragment } from "react";
import share from "../assets/Icon1.png";
import I4G from "../assets/I4G.png";
import zuri from "../assets/Zuri.png";
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
            <img src={more} alt="" />
          </span>
          <span className="absolute top-3 right-64 border rounded-full p-2 py-3 hidden md:block">
            <img src={share} alt="" />
          </span>
          <img src={profile} alt="" className="m-auto" id="profile__img" />
          <p className="font-bold text-3xl">Soliu Yusuf</p>
        </div>
        <div className="text-center flex flex-col">
          <a
            href="http://twitter.com/holar102"
            target="_blank"
            id="twitter"
            className="bg-[#EAECF0] p-4 m-4 md:mx-20 hover:bg-[#D0D5DD] active:bg-[#D0D5DD]"
          >
            Twitter Link
          </a>

          <p
            id="slack"
            className="bg-[#EAECF0] p-4 m-4 md:mx-20 hover:bg-[#D0D5DD] active:bg-[#D0D5DD] hidden"
          >
            holar
          </p>

          <a
            href="http://books.zuri.team"
            target="_blank"
            id="btn__zuri"
            className="bg-[#EAECF0] p-4 m-4 md:mx-20 hover:bg-[#D0D5DD] active:bg-[#D0D5DD]"
          >
            Zuri Team
          </a>
          <a
            href="http://books.zuri.team"
            target="_blank"
            id="books"
            className="bg-[#EAECF0] p-4 m-4 md:mx-20 hover:bg-[#D0D5DD] active:bg-[#D0D5DD]"
          >
            Zuri Books
          </a>
          <a
            href="https://books.zuri.team/python-for-beginners?ref_id=<yourslackname>"
            target="_blank"
            id="book__python"
            className="bg-[#EAECF0] p-4 m-4 md:mx-20 hover:bg-[#D0D5DD] active:bg-[#D0D5DD]"
          >
            Python Books
          </a>
          <a
            href="https://background.zuri.team"
            target="_blank"
            id="pitch"
            className="bg-[#EAECF0] p-4 m-4 md:mx-20 hover:bg-[#D0D5DD] active:bg-[#D0D5DD]"
          >
            Background Check for Coders
          </a>
          <a
            href="https://books.zuri.team/design-rules"
            target="_blank"
            id="book__design"
            className="bg-[#EAECF0] p-4 m-4 md:mx-20 hover:bg-[#D0D5DD] active:bg-[#D0D5DD]"
          >
            Design Books
          </a>
        </div>
        <div className="flex justify-center gap-5">
          <a href="https://app.slack.com/client/T042F7V19Q8/C041JU70S5U/rimeto_profile/U0487V7BULV">
            <img src={slack} alt="" />
          </a>
          <a href="https://github.com/whalay">
            <img src={github} alt="" />
          </a>
        </div>
      </div>
      <footer className="test-left p-5 mt-28 ">
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
