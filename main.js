var cookiedata = document.cookie;

// This part until next comment is just for cookie data

var date = new Date();

date.setUTCDate(date.getUTCDate()+1)
date.setUTCHours(12)
date.setUTCMinutes(0)
date.setUTCSeconds(0)

var time = date.toUTCString();

// Section End

location.href = "#intro"

function getStarted() {
    if (document.cookie == "BeenHere=true") {
        location.href = "#pick-page";   
    } else {
        location.href = "#tip";
        document.cookie = "BeenHere=true; expires=" + time;
    }
}
