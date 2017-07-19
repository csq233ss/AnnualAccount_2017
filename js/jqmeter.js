!function (e) {
    e.fn.extend({
        jQMeter: function (t) {
            t && "object" == typeof t && (t = e.extend({}, e.jQMeter.defaults, t)), this.each(function () {
                new e.jQMeter(this, t)
            })
        }
    }), e.jQMeter = function (t, r) {
        if (goal = parseInt(r.goal.replace(/\D/g, "")), raised = parseInt(r.raised.replace(/\D/g, "")), width = r.width, height = r.height, bgColor = r.bgColor, barColor = r.barColor, orientation = r.orientation = r.animationSpeed, counterSpeed = r.counterSpeed, displayTotal = r.displayTotal, total = raised / goal * 100, total >= 100 && (total = 100), "vertical" == orientation ? (e(t).html('<div class="therm outer-therm vertical"><div class="therm inner-therm vertical"><span style="display:none;">' + total + "</span></div></div>"), e(t).children(".outer-therm").attr("style", "width:" + width + ";height:" + height + ";background-color:" + bgColor), e(t).children(".outer-therm").children(".inner-therm").attr("style", "background-color:" + barColor + ";height:0;width:" + width), e(t).children(".outer-therm").children(".inner-therm").animate({height: total + "%"})) : (e(t).html('<div class="therm outer-therm"><div class="therm inner-therm"><span style="display:none;">' + total + "</span></div></div>"), e(t).children(".outer-therm").attr("style", "width:" + width + ";height:" + height + ";background-color:" + bgColor), e(t).children(".outer-therm").children(".inner-therm").attr("style", "background-color:" + barColor + ";height:" + height + ";width:0"), e(t).children(".outer-therm").children(".inner-therm").width(total + "%")), displayTotal) {
            var i = parseInt(height), n = i / 2 - 13 + "px 10px";
            "horizontal" != orientation && (n = "10px 0"), e(t).children(".outer-therm").children(".inner-therm").children().show(), e(t).children(".outer-therm").children(".inner-therm").children().css("padding", n), e({Counter: 0}).animate({Counter: e(t).children(".outer-therm").children(".inner-therm").children().text()}, {
            })
        }
        e(t).append("<style>.therm{height:.26rem;border-radius:1rem;}.outer-therm{box-sizing: border-box;margin: .5rem auto 0 auto}.inner-therm{height:.26rem;background: url('http://localhost:63342/work/AnnualAccount_2017/img/progress-bg.png') no-repeat;background-size:100% 100%}</style>")
    }, e.jQMeter.defaults = {
        width: "6.7rem",
        height: ".26rem",
        bgColor: "#5B4A89",
    }
}(jQuery);