import React from "react";
import timer from "../../assets/Group 57timer.png";
import calendar from "../../assets/Group 56calendar.png";
import video from "../../assets/Group 58video.png";
import wallet from "../../assets/Group 59wallet.png";
import python from "../../assets/Group 41phyton.png";

function ScheduleItem() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        flexWrap: "wrap",
      }}
    >
      <div className="oneCard">
        <div className="oneCard_header">
          <img className="img" src={python} alt="" />
          <span className="oneCard_header__text">Python (вечерная группа)</span>
        </div>
        <div className="oneCard_body">
          <p>
            Python - отличный выбор для начинающих, благодаря своей простоте,
            эффективности и широкому спектру применения.
          </p>
          <span>
            <img src={timer} alt="" />
            <p>
              Продолжительность: <strong>7 месяцев</strong>
            </p>
          </span>
          <span>
            <img src={video} alt="" />
            <p>
              Колличество видео-лекций: <strong>120</strong>
            </p>
          </span>
          <span>
            <img src={calendar} alt="" />
            <p>
              Дата запуска курса: <strong>10.10.2023</strong>
            </p>
          </span>
          <span>
            <img src={wallet} alt="" />
            <p>
              Стоимость курса: <strong>3500 сом</strong>
            </p>
          </span>
          <button className="header-left-btn">Записаться</button>
        </div>
      </div>
      <div className="oneCard">
        <div className="oneCard_header">
          <img className="img" src={python} alt="" />
          <span className="oneCard_header__text">Python (вечерная группа)</span>
        </div>
        <div className="oneCard_body">
          <p>
            Python - отличный выбор для начинающих, благодаря своей простоте,
            эффективности и широкому спектру применения.
          </p>
          <span>
            <img src={timer} alt="" />
            <p>
              Продолжительность: <strong>7 месяцев</strong>
            </p>
          </span>
          <span>
            <img src={video} alt="" />
            <p>
              Колличество видео-лекций: <strong>120</strong>
            </p>
          </span>
          <span>
            <img src={calendar} alt="" />
            <p>
              Дата запуска курса: <strong>10.10.2023</strong>
            </p>
          </span>
          <span>
            <img src={wallet} alt="" />
            <p>
              Стоимость курса: <strong>3500 сом</strong>
            </p>
          </span>
          <button className="header-left-btn">Записаться</button>
        </div>
      </div>
      <div className="oneCard">
        <div className="oneCard_header">
          <img className="img" src={python} alt="" />
          <span className="oneCard_header__text">Python (вечерная группа)</span>
        </div>
        <div className="oneCard_body">
          <p>
            Python - отличный выбор для начинающих, благодаря своей простоте,
            эффективности и широкому спектру применения.
          </p>
          <span>
            <img src={timer} alt="" />
            <p>
              Продолжительность: <strong>7 месяцев</strong>
            </p>
          </span>
          <span>
            <img src={video} alt="" />
            <p>
              Колличество видео-лекций: <strong>120</strong>
            </p>
          </span>
          <span>
            <img src={calendar} alt="" />
            <p>
              Дата запуска курса: <strong>10.10.2023</strong>
            </p>
          </span>
          <span>
            <img src={wallet} alt="" />
            <p>
              Стоимость курса: <strong>3500 сом</strong>
            </p>
          </span>
          <button className="header-left-btn">Записаться</button>
        </div>
      </div>
    </div>
  );
}

export default ScheduleItem;
