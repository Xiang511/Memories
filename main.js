moment.locale('zh-tw');       

function updateBreakupTime() {
    let breakupDate = moment("20191028", "YYYYMMDD");
    let now = moment();
    let duration = moment.duration(now.diff(breakupDate));

    let years = duration.years();
    let months = duration.months();
    let days = duration.days();
    let hours = duration.hours();
    let minutes = duration.minutes();
    let seconds = duration.seconds();

    let absoluteTime = ` 距離我們分開已經過了  ${years} 年 ${months} 個月 ${days} 天 ${hours} 小時 ${minutes} 分 ${seconds} 秒`;

    console.log(absoluteTime);
    let breakup = document.getElementById("breakup");
    breakup.textContent = absoluteTime;
}

// 每秒更新一次
setInterval(updateBreakupTime, 1000);


gsap.registerPlugin(ScrollTrigger);


gsap.utils.toArray('small').forEach((small) => {
  ScrollTrigger.create({
    trigger: small,
    start: 'top 30%',
    toggleClass: 'active',
    // onEnter:() => span.classList.add('active'), //如果希望不要讓顏色消失的話
    // markers: true,
  });
});


//即時查詢總人數
const firstSpan = document.querySelector('.sitestatesJs');
//取得字串
const text = firstSpan.textContent;
//取得數字
const Real_Time_Number = text.substring(text.length - 3);


//今日訪客
const spans = document.querySelectorAll(".sitestatesJs");
const secondSpan = spans[1];
const secondSpan_txt = secondSpan.textContent;
const secondSpan_result = secondSpan_txt.substring(text.length - 3);

//線上人數
const online = document.querySelectorAll(".sitestatesJs");
const onlineSpan = online[2];
const onlineSpan_txt = onlineSpan.textContent;
const onlineSpan_result = onlineSpan_txt.substring(text.length - 2);

document.getElementById("Total").innerHTML = "累計訪客:" + "&ensp;" + Real_Time_Number;
// document.getElementById("month").innerHTML = "本月訪客:"+ month;
document.getElementById("Today").innerHTML = "今日訪客:" + "&ensp;" + secondSpan_result;
document.getElementById("online").innerHTML = "線上人數:" + "&ensp;" + onlineSpan_result;