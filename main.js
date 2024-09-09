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
    markers: true,
  });
});