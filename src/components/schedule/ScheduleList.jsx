import React from "react";
import "./scheduleList.css";
import ScheduleItem from "./ScheduleItem";

function ScheduleList() {
  return (
    <div className="ScheduleList">
      <div className="side_padding">
        <h2 className="ScheduleList_title">Расписание новых курсов</h2>
        <ScheduleItem />
      </div>
    </div>
  );
}

export default ScheduleList;
