!function(){function e(e,n){return o.fn.init(e,n)}function n(n,t){return e.type(t)==n}function t(e,t){var i,r=n("dom",e);return r&&/^#([\w-]*)$/.test(t)?(i=e.getElementById(RegExp.$1))?[i]:[]:r?[].slice.call(/^\.([\w-]+)$/.test(t)?e.getElementsByClassName(RegExp.$1):/^[\w-]+$/.test(t)?e.getElementsByTagName(t):e.querySelectorAll(t)):[t]}function i(e){e=e.trim().replace(/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,"<$1></$2>");var n=document.createElement("div");return n.innerHTML=""+e,[n.firstChild]}function r(e){return e.replace(/-(.)?/g,function(e,n){return n?n.toUpperCase():""})}function u(e){return e.replace(/([a-z\d])([A-Z])/g,"$1-$2").toLowerCase()}function a(e,t){return n("number",t)&&!c[u(e)]?t+"px":t}function o(e){this.length=0,[].push.apply(this,e)}function s(e){function n(e){var n=1-e;return 3*n*n*e*a+3*n*e*e*s+e*e*e}function t(e){var n=1-e;return 3*n*n*e*o+3*n*e*e*c+e*e*e}function i(e){var n=1-e;return 3*(2*(e-1)*e+n*n)*a+3*(-e*e*e+2*n*e)*s}var r=.01,u=f[e],a=u[0],o=u[1],s=u[2],c=u[3];return function(e){var u,a,o,s,c,f;for(o=e,f=0;8>f;f++){if(s=n(o)-e,Math.abs(s)<r)return t(o);if(c=i(o),Math.abs(c)<r)break;o-=s/c}if(u=0,a=1,o=e,u>o)return t(u);if(o>a)return t(a);for(;a>u;){if(s=n(o),Math.abs(s-e)<r)return t(o);e>s?u=o:a=o,o=.5*(a-u)+u}return t(o)}}var c=(navigator.userAgent,{"column-count":1,columns:1,"font-weight":1,"line-height":1,opacity:1,"z-index":1,zoom:1});e.type=function(e){if(null===e)return"null";var n=typeof e;if("undefined"==n)return"undefined";if(e instanceof o)return"U";var t=e.nodeType,i=e.constructor;return!t||t!=e.ELEMENT_NODE&&t!=e.DOCUMENT_NODE?i===Array?"array":i===RegExp?"regexp":n:"dom"},e.now=function(){return(new Date).getTime()},e.extend=function(){for(var e=arguments[0],n=1;n<arguments.length;n++){var t=arguments[n];for(var i in t)e[i]=t[i]}return e},o.prototype=o.fn=e.fn={init:function(n,r){var u=e.type(n),a=e.type(r);return r="U"==a?r[0]:"dom"==a?r:document,"string"==u?new o(/^\s*<(\w+|!)[^>]*>/.test(n)?i(n):t(r,n)):"dom"==u?new o([n]):"U"==u?n:"function"==u?e(document).ready(n):this},ready:function(e){return/complete|loaded|interactive/.test(document.readyState)?e(this):document.addEventListener("DOMContentLoaded",function(){e(this)}),this},exists:function(){return this.length>0},each:function(e){[].every.call(this,function(n,t){return e.call(n,t,n)!==!1})},grep:function(e){return[].filter.call(this,e)},map:function(e){return[].map.call(this,e)},reduce:function(e){return[].reduce.call(this,e)},on:function(e,n){return this.each(function(t,i){e.split(/\s/).forEach(function(e){i.addEventListener(e,n)})}),this},trigger:function(e){return this.each(function(n,t){t.dispatchEvent(new Event(e))}),this},get:function(e){return void 0===e?this:0>e?this[this.length+e]:this[e]},find:function(e){return new o(1==this.length?t(this[0],e):this.reduce(function(n,i){return n.concat(t(i,e))},[]))},css:function(e,t){var i=n("string",e);if(void 0===t&&i)return this[0].style[r(e)]||getComputedStyle(this[0],"").getPropertyValue(e);var o="",s=null,c={},f="";i?c[e]=t:c=e;for(s in c)t=c[s],f=u(s),t||0===t?o+=f+":"+a(s,t)+";":this.each(function(){this.style.removeProperty(f)});return this.each(function(){this.style.cssText+=";"+o}),this}},window.requestAnimationFrame=window.requestAnimationFrame||window.webkitRequestAnimationFrame||function(e){return setTimeout(e,1e3/60)};var f={linear:[0,0,1,1],ease:[.25,.1,.25,1],easeIn:[.42,0,1,1],easeOut:[0,0,.58,1],easeInOut:[.42,0,.58,1],easeInCubic:[.55,.055,.675,.19],easeOutCubic:[.215,.61,.355,1],easeInOutCubic:[.645,.045,.355,1],easeInCirc:[.6,.04,.98,.335],easeOutCirc:[.075,.82,.165,1],easeInOutCirc:[.785,.135,.15,.86],easeInExpo:[.95,.05,.795,.035],easeOutExpo:[.19,1,.22,1],easeInOutExpo:[1,0,0,1],easeInQuad:[.55,.085,.68,.53],easeOutQuad:[.25,.46,.45,.94],easeInOutQuad:[.455,.03,.515,.955],easeInQuart:[.895,.03,.685,.22],easeOutQuart:[.165,.84,.44,1],easeInOutQuart:[.77,0,.175,1],easeInQuint:[.755,.05,.855,.06],easeOutQuint:[.23,1,.32,1],easeInOutQuint:[.86,0,.07,1],easeInSine:[.47,0,.745,.715],easeOutSine:[.39,.575,.565,1],easeInOutSine:[.445,.05,.55,.95],easeInBack:[.6,-.28,.735,.045],easeOutBack:[.175,.885,.32,1.275],easeInOutBack:[.68,-.55,.265,1.55]};e.cubic=function(e){return"cubic-bezier("+f[e].map(function(e){return 0>e?0:e>1?1:e}).join(",")+")"},e.ease=function(n){function t(){var n=e.now()-u.startTime,t=u.begin,i=u.end-u.begin,r=u.duration;return u.finished=n>r,t+s(u.easing)(n/r)*i}function i(){u.ani(t(),u.options),u.finished?u.finish():u.stop?null:requestAnimationFrame(i,u.options)}var r={startTime:e.now(),stopTime:0,duration:500,begin:0,end:0,finished:!1,easing:"linear",stop:!1,ani:function(){},finish:function(){},options:{}},u=e.extend({},r,n);return i(),{stop:function(){u.stop=!0,u.stopTime=e.now()-u.startTime},resume:function(){u.stop=!1,u.startTime=e.now()-u.stopTime,i()}}},window.$=e}();

window.onload = function() {
    parent.iframeLoaded_two();
    setTimeout(function(){
     startAd();
     },2800)
}

function initEB() {
    if (typeof(EB) !== "undefined" && !EB.isInitialized()) {
        EB.addEventListener(EBG.EventName.EB_INITIALIZED, startAd);
    } else {
	    setTimeout(function(){
        startAd();
        },2000)
    }
}

function startAd() {
	$(function(){
		$.ease({duration:700, end: 1, easing: "easeInOut", ani:function(e, o){
			$("#phone").css("opacity", e);
		}});
		setTimeout(function(){
			$.ease({duration:(700), end: 1, easing: "easeInOut", ani:function(e, o){
				$("#screen").css({
					opacity: "1",
					});
			}});
		}, 629);
		setTimeout(function(){
			$.ease({duration:(700), end: 1, easing: "easeInOut", ani:function(e, o){
				$("#ball").css({
					right: "38px",
					});
			}});
		}, 629);
		setTimeout(function(){
			$.ease({duration:(700), end: 1, easing: "easeInOut", ani:function(e, o){
				$("#ball").css({
					right: "70px",
					});
			}});
		}, 1100);
		setTimeout(function(){
			$.ease({duration:(200), end: 1, easing: "easeInOut", ani:function(e, o){
				$("#ball").css({
					width: "20px",
					height: "90px",
					top:"205px",
					});
			}});
		}, 829);
		setTimeout(function(){
			$.ease({duration:(100), end: 1, easing: "easeInOut", ani:function(e, o){
				$("#ball").css({
					width: "0px",
					height: "190px",
					top:"160px",
					});
			}});
		}, 929);
		setTimeout(function(){
			$.ease({duration:(200), end: 1, easing: "easeInOut", ani:function(e, o){
				$("#motionRest").css({
					opacity: "1",
					});
			}});
		}, 2000);		
		setTimeout(function(){
			$.ease({duration:(200), end: 1, easing: "easeInOut", ani:function(e, o){
				$("#motionProgress").css({
					width: "150%",
					});
			}});
		}, 990);
		setTimeout(function(){
			$.ease({duration:(200), end: 1, easing: "easeInOut", ani:function(e, o){
				$("#mobilePoint").css({
					width: "41px",
					});
			}});
		}, 1509);
		setTimeout(function(){
			$.ease({duration:(1000), end: 1, easing: "easeInOut", ani:function(e, o){
				$("#motion").css("opacity", e);
			}});
		}, 629);
		setTimeout(function(){
			$.ease({duration:(1000), end: 1, easing: "easeInOut", ani:function(e, o){
				$("#samsung").css("opacity", e);
			}});
		}, 1400);
		setTimeout(function(){
			$.ease({duration:(1000), end: 1, easing: "easeInOut", ani:function(e, o){
				$("#next").css("opacity", e);
			}});
		}, 1900);
		setTimeout(function(){
			$.ease({duration:(1000), end: 1, easing: "easeInOut", ani:function(e, o){
				$("#learn").css("opacity", e);
			}});
		}, 2400);
		
		$("#ad").on("click", function(e){
			EB.clickthrough();
		})
	})
}
window.addEventListener("load", initEB);


