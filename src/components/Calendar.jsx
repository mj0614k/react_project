import React from "react";
import CalendarMoon from "../assets/img/calendar_bg01.png";
import CalendarAstro from "../assets/img/calendar_bg02.png";
import $ from "jquery";

const Calendar = () => {
  function calendarInit() {
    // 날짜 정보 가져오기
    let date = new Date(); // 현재 날짜(로컬 기준) 가져오기
    let utc = date.getTime() + date.getTimezoneOffset() * 60 * 1000; // uct 표준시 도출
    let kstGap = 9 * 60 * 60 * 1000; // 한국 kst 기준시간 더하기
    let today = new Date(utc + kstGap); // 한국 시간으로 date 객체 만들기(오늘)
    const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

    let thisMonth = new Date(today.getFullYear(), today.getMonth(), today.getDate());
    // 달력에서 표기하는 날짜 객체

    let currentYear = thisMonth.getFullYear(); // 달력에서 표기하는 연
    let currentMonth = thisMonth.getMonth(); // 달력에서 표기하는 월
    // let currentDate = thisMonth.getDate(); // 달력에서 표기하는 일

    // kst 기준 현재시간
    // console.log(thisMonth);

    // 캘린더 렌더링
    renderCalender(thisMonth);

    function renderCalender(thisMonth) {
      // 렌더링을 위한 데이터 정리
      currentYear = thisMonth.getFullYear();
      currentMonth = thisMonth.getMonth();
      // currentDate = thisMonth.getDate();

      // 이전 달의 마지막 날 날짜와 요일 구하기
      let startDay = new Date(currentYear, currentMonth, 0);
      let prevDate = startDay.getDate();
      let prevDay = startDay.getDay();

      // 이번 달의 마지막날 날짜와 요일 구하기
      let endDay = new Date(currentYear, currentMonth + 1, 0);
      let nextDate = endDay.getDate();
      let nextDay = endDay.getDay();

      // console.log(prevDate, prevDay, nextDate, nextDay);

      // 현재 월 표기
      $(".year-month").text(monthNames[currentMonth] + " " + currentYear);

      // 렌더링 html 요소 생성
      let calendar = document.querySelector(".dates");
      calendar.innerHTML = "";

      // 지난달
      for (let i = prevDate - prevDay + 1; i <= prevDate; i++) {
        calendar.innerHTML = calendar.innerHTML + '<div class="day prev disable">' + i + "</div>";
      }
      // 이번달
      for (let i = 1; i <= nextDate; i++) {
        calendar.innerHTML = calendar.innerHTML + '<div class="day current" style="background-image:url(./assets/img/calendar_' + i + '.jpg)">' + i + "</div>";
      }
      // 다음달
      for (let i = 1; i <= (7 - nextDay == 7 ? 0 : 7 - nextDay); i++) {
        calendar.innerHTML = calendar.innerHTML + '<div class="day next disable">' + i + "</div>";
      }

      // 오늘 날짜 표기
      //   if (today.getMonth() == currentMonth) {
      //     let todayDate = today.getDate();
      //     let currentMonthDate = document.querySelectorAll(".dates .current");
      //     // currentMonthDate[todayDate - 1].style.backgroundColor = "red";
      //     currentMonthDate[todayDate - 1].style.backgroundImage = `../assets/img/calendar_bg01.png`;
      //   }
    }

    // 이전달로 이동
    $(".go-prev").on("click", function () {
      thisMonth = new Date(currentYear, currentMonth - 1, 1);
      renderCalender(thisMonth);
    });

    // 다음달로 이동
    $(".go-next").on("click", function () {
      thisMonth = new Date(currentYear, currentMonth + 1, 1);
      renderCalender(thisMonth);
    });
  }

  $(document).ready(function () {
    calendarInit();
  });

  return (
    <>
      <img className="bg__moon" src={CalendarMoon} alt="달 이미지" />
      <img className="bg__astro" src={CalendarAstro} alt="우주인 이미지" />
      <main className="container">
        <section className="section">
          <div className="sec_cal">
            <div className="cal_nav">
              <a href="javascript:;" className="nav-btn go-prev">
                prev
              </a>
              <div className="year-month"></div>
              <a href="javascript:;" className="nav-btn go-next">
                next
              </a>
            </div>
            <div className="cal_wrap">
              <div className="days">
                <div className="day">MON</div>
                <div className="day">TUE</div>
                <div className="day">WED</div>
                <div className="day">THU</div>
                <div className="day">FRI</div>
                <div className="day">SAT</div>
                <div className="day">SUN</div>
              </div>
              <div className="dates"></div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default Calendar;
