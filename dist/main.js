(()=>{"use strict";var e={426:(e,n,t)=>{t.d(n,{Z:()=>u});var r=t(81),o=t.n(r),a=t(645),c=t.n(a),i=t(667),s=t.n(i),l=new URL(t(601),t.b),d=c()(o());d.push([e.id,"@import url(https://fonts.googleapis.com/css2?family=Albert+Sans&display=swap);"]);var p=s()(l);d.push([e.id,"body {\n  margin: 0;\n  height: 100vh;\n  width: 100vw;\n  font-family: 'Albert Sans', sans-serif;\n  overflow-x: hidden;\n  background-color: #009afe;\n}\n\n.container {\n  height: fit-content;\n  width: 100%;\n  background-color: #009afe;\n}\n\n.header {\n  padding: 0 2%;\n  background-color: #444;\n  height: 80px;\n}\n\n.header,\n.logo {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n\n.seearch-bar {\n  margin-right: 6vw;\n  display: flex;\n  flex-direction: column;\n}\n\n.error {\n  font-size: clamp(10px, 0.8vw, 13px);\n  color: red;\n  display: none;\n}\n\nform {\n  display: flex;\n}\n\n.logo {\n  gap: 0.5vmax;\n}\n\n.logo svg {\n  color: #e43414;\n}\n\n.logo-title {\n  color: #eee;\n  font-size: 25px;\n}\n\ninput[type='search'] {\n  padding: min(0.8vw, 6px);\n  background-color: #eee;\n  appearance: none;\n  outline: none;\n  border: none;\n  width: clamp(100px, 15vw, 200px);\n  font-size: clamp(10px, 0.8vw, 13px);\n}\n\ninput[type='submit'] {\n  background-image: url("+p+");\n  background-size: clamp(10px, 1.1vw, 20px);\n  background-repeat: no-repeat;\n  background-position: center;\n  width: clamp(20px, 4vw, 40px);\n  appearance: none;\n  outline: none;\n  border: none;\n  background-color: #e43414;\n}\n\n.si-unit {\n  display: flex;\n}\n\n.f,\n.c {\n  background-color: #eee;\n  width: clamp(35px, 4.5vw, 45px);\n  text-align: center;\n  font-size: clamp(18px, 2vw, 22px);\n}\n\n.selected {\n  background-color: #e43414;\n  border: 1px solid #000;\n}\n\n.f:hover,\n.c:hover {\n  transform: scale(1.05);\n}\n\n.main {\n  display: grid;\n  grid-template: 1.5fr 1fr 1fr 0.6fr / 1fr;\n  align-items: center;\n  height: 100%;\n  width: 100%;\n  background-color: #009afe;\n  color: #eee;\n  gap: 10px;\n}\n\n.weather {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  gap: 0.4vmax;\n  padding: 2%;\n}\n\n.high-low,\n.high-temp,\n.low-temp {\n  display: flex;\n}\n\n.high-low {\n  gap: 0.4vmax;\n}\n\n.weather-location {\n  font-size: clamp(20px, 3vmax, 35px);\n}\n\n.temp {\n  font-size: clamp(40px, 6vmax, 80px);\n}\n\n.weather-description,\n.high-low {\n  font-size: clamp(10px, 1.8vmax, 18px);\n}\n\n.forecast-container,\n.environment {\n  display: flex;\n  justify-content: center;\n}\n\n.hourly-forecast-item img,\n.weekly-forecast-item img {\n  filter: invert(99%) sepia(2%) saturate(525%) hue-rotate(195deg)\n    brightness(113%) contrast(87%);\n  height: max(2vmax, 20px);\n  width: max(2vmax, 20px);\n}\n\n.forecast,\n.weekly,\n.environment-item {\n  display: flex;\n  flex-direction: column;\n  background-color: #347baa;\n  border-radius: 15px;\n  padding: max(10px, 1%);\n  gap: 0.5vmax;\n  width: min(80vw, 1250px);\n  height: fit-content;\n}\n\n.weekly,\n.environment-item {\n  width: fit-content;\n  height: fit-content;\n}\n\n.environment {\n  gap: 15px;\n}\n\n.hourly-forecast {\n  display: grid;\n  grid-template-rows: repeat(1, 1fr);\n  grid-template-columns: repeat(auto-fill, minmax(27px, 1fr));\n  justify-content: space-evenly;\n  grid-column-gap: 1.5vmax;\n  grid-row-gap: 1vmax;\n}\n\n.weekly-forecast {\n  display: flex;\n  justify-content: space-evenly;\n  align-items: center;\n  gap: 1.5vmax;\n}\n\n.forecast-title {\n  color: #eeeeeeaa;\n  font-size: clamp(6px, 1vw, 14px);\n}\n\n.environment-item .forecast-title {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  gap: 2px;\n}\n\n.environment-info {\n  font-size: clamp(10px, 1.5vw, 20px);\n  text-align: center;\n}\n\n.environment img {\n  height: 1vmax;\n  width: 1vmax;\n  filter: invert(100%) sepia(3%) saturate(43%) hue-rotate(233deg)\n    brightness(80%) contrast(77%);\n}\n\n.hourly-forecast-item,\n.weekly-forecast-item {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  gap: 0.4vw;\n  font-size: clamp(10px, 1.8vw, 18px);\n}\n\n.hourly-forecast-item .time {\n  font-size: clamp(6px, 1.2vw, 14px);\n}\n\n@media screen and (max-width: 600px) {\n  .logo-title {\n    display: none;\n  }\n  .seearch-bar {\n    margin-right: 0;\n    margin-left: 6vw;\n  }\n}\n",""]);const u=d},645:e=>{e.exports=function(e){var n=[];return n.toString=function(){return this.map((function(n){var t="",r=void 0!==n[5];return n[4]&&(t+="@supports (".concat(n[4],") {")),n[2]&&(t+="@media ".concat(n[2]," {")),r&&(t+="@layer".concat(n[5].length>0?" ".concat(n[5]):""," {")),t+=e(n),r&&(t+="}"),n[2]&&(t+="}"),n[4]&&(t+="}"),t})).join("")},n.i=function(e,t,r,o,a){"string"==typeof e&&(e=[[null,e,void 0]]);var c={};if(r)for(var i=0;i<this.length;i++){var s=this[i][0];null!=s&&(c[s]=!0)}for(var l=0;l<e.length;l++){var d=[].concat(e[l]);r&&c[d[0]]||(void 0!==a&&(void 0===d[5]||(d[1]="@layer".concat(d[5].length>0?" ".concat(d[5]):""," {").concat(d[1],"}")),d[5]=a),t&&(d[2]?(d[1]="@media ".concat(d[2]," {").concat(d[1],"}"),d[2]=t):d[2]=t),o&&(d[4]?(d[1]="@supports (".concat(d[4],") {").concat(d[1],"}"),d[4]=o):d[4]="".concat(o)),n.push(d))}},n}},667:e=>{e.exports=function(e,n){return n||(n={}),e?(e=String(e.__esModule?e.default:e),/^['"].*['"]$/.test(e)&&(e=e.slice(1,-1)),n.hash&&(e+=n.hash),/["'() \t\n]|(%20)/.test(e)||n.needQuotes?'"'.concat(e.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):e):e}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var n=[];function t(e){for(var t=-1,r=0;r<n.length;r++)if(n[r].identifier===e){t=r;break}return t}function r(e,r){for(var a={},c=[],i=0;i<e.length;i++){var s=e[i],l=r.base?s[0]+r.base:s[0],d=a[l]||0,p="".concat(l," ").concat(d);a[l]=d+1;var u=t(p),m={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==u)n[u].references++,n[u].updater(m);else{var f=o(m,r);r.byIndex=i,n.splice(i,0,{identifier:p,updater:f,references:1})}c.push(p)}return c}function o(e,n){var t=n.domAPI(n);return t.update(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap&&n.supports===e.supports&&n.layer===e.layer)return;t.update(e=n)}else t.remove()}}e.exports=function(e,o){var a=r(e=e||[],o=o||{});return function(e){e=e||[];for(var c=0;c<a.length;c++){var i=t(a[c]);n[i].references--}for(var s=r(e,o),l=0;l<a.length;l++){var d=t(a[l]);0===n[d].references&&(n[d].updater(),n.splice(d,1))}a=s}}},569:e=>{var n={};e.exports=function(e,t){var r=function(e){if(void 0===n[e]){var t=document.querySelector(e);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(e){t=null}n[e]=t}return n[e]}(e);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(t)}},216:e=>{e.exports=function(e){var n=document.createElement("style");return e.setAttributes(n,e.attributes),e.insert(n,e.options),n}},565:(e,n,t)=>{e.exports=function(e){var n=t.nc;n&&e.setAttribute("nonce",n)}},795:e=>{e.exports=function(e){var n=e.insertStyleElement(e);return{update:function(t){!function(e,n,t){var r="";t.supports&&(r+="@supports (".concat(t.supports,") {")),t.media&&(r+="@media ".concat(t.media," {"));var o=void 0!==t.layer;o&&(r+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),r+=t.css,o&&(r+="}"),t.media&&(r+="}"),t.supports&&(r+="}");var a=t.sourceMap;a&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),n.styleTagTransform(r,e,n.options)}(n,e,t)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)}}}},589:e=>{e.exports=function(e,n){if(n.styleSheet)n.styleSheet.cssText=e;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(e))}}},601:(e,n,t)=>{e.exports=t.p+"54ff7732bb1a5ff166c6.svg"}},n={};function t(r){var o=n[r];if(void 0!==o)return o.exports;var a=n[r]={id:r,exports:{}};return e[r](a,a.exports,t),a.exports}t.m=e,t.n=e=>{var n=e&&e.__esModule?()=>e.default:()=>e;return t.d(n,{a:n}),n},t.d=(e,n)=>{for(var r in n)t.o(n,r)&&!t.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:n[r]})},t.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),t.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n),(()=>{var e;t.g.importScripts&&(e=t.g.location+"");var n=t.g.document;if(!e&&n&&(n.currentScript&&(e=n.currentScript.src),!e)){var r=n.getElementsByTagName("script");r.length&&(e=r[r.length-1].src)}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),t.p=e})(),t.b=document.baseURI||self.location.href,t.nc=void 0,(()=>{function e(e,n){if(n.length<e)throw new TypeError(e+" argument"+(e>1?"s":"")+" required, but only "+n.length+" present")}function n(n){e(1,arguments);var t=Object.prototype.toString.call(n);return n instanceof Date||"object"==typeof n&&"[object Date]"===t?new Date(n.getTime()):"number"==typeof n||"[object Number]"===t?new Date(n):("string"!=typeof n&&"[object String]"!==t||"undefined"==typeof console||(console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://git.io/fjule"),console.warn((new Error).stack)),new Date(NaN))}function r(e){if(null===e||!0===e||!1===e)return NaN;var n=Number(e);return isNaN(n)?n:n<0?Math.ceil(n):Math.floor(n)}const o=(t,o)=>{const a=function(t){return e(1,arguments),n(1e3*r(t))}(t+o).toUTCString(),c=()=>{let e=parseInt(a.slice(17,20),10);return e>12?e-=12:0===e&&(e=12),e};return{getHour:c,getHourAndMinute:()=>{const e=a.slice(20,22);return"".concat(c(),":").concat(e)},getDay:()=>a.slice(0,3),timeIsAMOrPM:()=>{let e="";const n=parseInt(a.slice(17,20),10);return e=n>11&&n<=23?"PM":"AM",e}}};let a=!0,c=!1;const i=(()=>{const e=document.querySelector(".f"),n=document.querySelector(".c"),t=e=>Math.round(e-273.15),r=e=>Math.round(1.8*(e-273.15)+32);return{toCelcius:t,toFahrenheit:r,values:()=>({fahr:a,cels:c}),switchMetric:()=>{!0===a&&!1===c?(a=!1,c=!0,n.classList.add("selected"),e.classList.remove("selected")):(a=!0,c=!1,e.classList.add("selected"),n.classList.remove("selected"))},selectedMetric:e=>!0===a?r(e):t(e)}})(),s=e=>Math.round(2.236936*e),l=e=>{let n="";return n=e>11.25&&e<56.25?"NE":e>56.25&&e<101.25?"E":e>101.25&&e<146.25?"SE":e>146.25&&e<191.25?"S":e>191.25&&e<236.25?"SW":e>236.25&&e<281.25?"W":e>281.25&&e<326.25?"NW":"N",n},d={hourlyForecastDOMElements:(()=>{const e=document.querySelector(".hourly-forecast");for(let n=0;n<25;n+=1){const n=document.createElement("div");n.classList.add("hourly-forecast-item"),e.appendChild(n);const t=document.createElement("div");t.classList.add("time");const r=document.createElement("img"),o=document.createElement("div");o.classList.add("hourly-temp"),n.appendChild(t),n.appendChild(r),n.appendChild(o)}return document.querySelectorAll(".hourly-forecast-item")})(),weeklyForecastDOMElements:(()=>{const e=document.querySelector(".weekly-forecast");for(let n=0;n<8;n+=1){const n=document.createElement("div");n.classList.add("weekly-forecast-item"),e.appendChild(n);const t=document.createElement("div");t.classList.add("time");const r=document.createElement("img"),o=document.createElement("div");o.classList.add("weekly-temp"),n.appendChild(t),n.appendChild(r),n.appendChild(o)}return document.querySelectorAll(".weekly-forecast-item")})()},p=e=>{const n=((e,n,t,r,o,a,c,i,s,l,d,p,u,m)=>({temp:e,feelsLike:n,humidity:t,windSpeed:r,windDeg:o,weatherType:a,visibility:c,lat:i,lon:s,location:l,high:d,low:p,dt:u,tz:m}))(e.main.temp,e.main.feels_like,e.main.humidity,e.wind.speed,e.wind.deg,e.weather[0].description,e.visibility,e.coord.lat,e.coord.lon,e.name,e.main.temp_max,e.main.temp_min,e.dt,e.timezone);return(e=>({loadPage:()=>{document.querySelector(".weather-location").textContent="".concat(e.location),(()=>{const n=document.querySelector(".temp"),t=i.selectedMetric(e.temp);n.textContent="".concat(t,"°")})(),document.querySelector(".weather-description").textContent="".concat(e.weatherType),(()=>{const n=document.querySelector(".high-temp-temp"),t=i.selectedMetric(e.high);n.textContent="".concat(t,"°")})(),(()=>{const n=document.querySelector(".low-temp-temp"),t=i.selectedMetric(e.low);n.textContent="".concat(t,"°")})()}}))(n).loadPage(),(e=>({setupEnvironmentInfo:()=>{(()=>{const n=document.querySelector(".feels-like"),t=i.selectedMetric(e.feelsLike);n.textContent="".concat(t,"°")})(),document.querySelector(".humididty").textContent="".concat(e.humidity,"%"),(()=>{const n=document.querySelector(".visibility"),t=Math.round(e.visibility/1e3);n.textContent="".concat(t,"mi")})(),document.querySelector(".wind").textContent="".concat(s(e.windSpeed),"mph/").concat(l(e.windDeg))}}))(n).setupEnvironmentInfo(),{location:n}},u=e=>{const n=[];for(let t=0;t<25;t+=1){const r={dt:e.hourly[t].dt,tz:e.timezone_offset,temp:e.hourly[t].temp,weatherType:e.hourly[t].weather[0].description,weatherMain:e.hourly[t].weather[0].main};n.push(r)}return(e=>{const n=(e,n)=>{const t=o(e.dt,e.tz).getHour(),r=o(e.dt,e.tz).timeIsAMOrPM();n.children[0].textContent=t+r},t=(e,n)=>{const t=n.children[1],r=e.weatherMain;"Clouds"===r||"Rain"===r||"Drizzle"===r||"Thunderstorm"===r||"Snow"===r||"Clear"===r?"Clouds"===r&&"overcast clouds"!==e.weatherType?t.src="../src/images/".concat(e.weatherType,".svg"):"overcast clouds"===e.weatherType?t.src="../src/images/broken clouds.svg":t.src="../src/images/".concat(r,".svg"):t.src="../src/images/weather-tornado.svg"},r=(e,n)=>{const t=i.selectedMetric(e.temp);n.children[2].textContent="".concat(t,"°")};return{setupHourlyForecast:()=>{for(let o=0;o<25;o+=1)n(e[o],d.hourlyForecastDOMElements[o]),t(e[o],d.hourlyForecastDOMElements[o]),r(e[o],d.hourlyForecastDOMElements[o])}}})(n).setupHourlyForecast(),n},m=e=>{const n=[];for(let t=0;t<8;t+=1){const r={dt:e.daily[t].dt,tz:e.timezone_offset,temp:e.daily[t].temp.day,weatherType:e.daily[t].weather[0].description,weatherMain:e.daily[t].weather[0].main};n.push(r)}return(e=>{const n=(e,n)=>{const t=o(e.dt,e.tz).getDay();n.children[0].textContent=t},t=(e,n)=>{const t=n.children[1],r=e.weatherMain;"Clouds"===r||"Rain"===r||"Drizzle"===r||"Thunderstorm"===r||"Snow"===r||"Clear"===r?"Clouds"===r&&"overcast clouds"!==e.weatherType?t.src="../src/images/".concat(e.weatherType,".svg"):"overcast clouds"===e.weatherType?t.src="../src/images/broken clouds.svg":t.src="../src/images/".concat(r,".svg"):t.src="../src/images/weather-tornado.svg"},r=(e,n)=>{const t=i.selectedMetric(e.temp);n.children[2].textContent="".concat(t,"°")};return{setupWeeklyForecast:()=>{for(let o=0;o<8;o+=1)n(e[o],d.weeklyForecastDOMElements[o]),t(e[o],d.weeklyForecastDOMElements[o]),r(e[o],d.weeklyForecastDOMElements[o])}}})(n).setupWeeklyForecast(),n};async function f(e){try{const n=await fetch("https://api.openweathermap.org/data/2.5/weather?q=".concat(e,"&APPID=a7f58f1e1cb17ffc0eec81a814f77ec2"),{mode:"cors"}),t=await n.json();!async function(e,n){try{const t=await fetch("https://api.openweathermap.org/data/2.5/onecall?lat=".concat(e,"&lon=").concat(n,"&exclude=minutely&appid=a7f58f1e1cb17ffc0eec81a814f77ec2"),{mode:"cors"}),r=await t.json();u(r),m(r)}catch(e){document.querySelector(".error").style.display="block"}}(p(t).location.lat,p(t).location.lon)}catch(e){document.querySelector(".error").style.display="block"}}var h=t(379),g=t.n(h),y=t(795),v=t.n(y),w=t(569),x=t.n(w),b=t(565),S=t.n(b),M=t(216),k=t.n(M),C=t(589),E=t.n(C),T=t(426),z={};z.styleTagTransform=E(),z.setAttributes=S(),z.insert=x().bind(null,"head"),z.domAPI=v(),z.insertStyleElement=k(),g()(T.Z,z),T.Z&&T.Z.locals&&T.Z.locals;const q=document.getElementById("location"),D=document.getElementById("search"),j=document.querySelector(".f"),L=document.querySelector(".c");f("New York"),q.addEventListener("submit",(e=>{e.preventDefault(),f("".concat(D.value))})),D.addEventListener("focus",(()=>{document.querySelector(".error").style.display="none"})),j.addEventListener("click",(()=>{console.log(i.values().fahr),!0===i.values().cels&&(i.switchMetric(),console.log("hello"),f("".concat(D.value)))})),L.addEventListener("click",(()=>{console.log(i.values().fahr),!0===i.values().fahr&&(i.switchMetric(),console.log("hi"),f("".concat(D.value)))}))})()})();