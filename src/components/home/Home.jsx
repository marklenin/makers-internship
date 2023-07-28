import React from "react";
import HeaderSection from "../header/HeaderSection";
import ScheduleList from "../schedule/ScheduleList";
import Mentor from "../mentor/Mentor";
import Review from "../review/Review";

function Home() {
  return (
    <div>
      <HeaderSection />
      <ScheduleList />
      <Mentor />
      <Review />
    </div>
  );
}

export default Home;
