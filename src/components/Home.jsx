import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import share from "../assets/Icon1.png";

import more from "../assets/Icon.png";
import slack from "../assets/slack.png";
import github from "../assets/git.png";
import profile from "../assets/profile.png";

const Home = () => {
  return (
    <Fragment>
      <div className="text-md text-center h-screen mb-56">
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
            href="https://training.zuri.team/"
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
            href="https://books.zuri.team/python-for-beginners?ref_id=holar"
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
           Check for Coders
          </a>
          <a
            href="https://books.zuri.team/design-rules"
            target="_blank"
            id="book__design"
            className="bg-[#EAECF0] p-4 m-4 md:mx-20 hover:bg-[#D0D5DD] active:bg-[#D0D5DD]"
          >
            Design Books
          </a>
          <Link
            to="/contact"
            id="contact"
            className="bg-[#EAECF0] p-4 m-4 md:mx-20 hover:bg-[#D0D5DD] active:bg-[#D0D5DD]"
          >
            Contact Me
          </Link>
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
      
    </Fragment>
  );
};

export default Home;
