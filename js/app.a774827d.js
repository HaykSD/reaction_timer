(function(e){function t(t){for(var r,s,c=t[0],a=t[1],l=t[2],d=0,h=[];d<c.length;d++)s=c[d],Object.prototype.hasOwnProperty.call(o,s)&&o[s]&&h.push(o[s][0]),o[s]=0;for(r in a)Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r]);u&&u(t);while(h.length)h.shift()();return i.push.apply(i,l||[]),n()}function n(){for(var e,t=0;t<i.length;t++){for(var n=i[t],r=!0,c=1;c<n.length;c++){var a=n[c];0!==o[a]&&(r=!1)}r&&(i.splice(t--,1),e=s(s.s=n[0]))}return e}var r={},o={app:0},i=[];function s(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.m=e,s.c=r,s.d=function(e,t,n){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)s.d(n,r,function(t){return e[t]}.bind(null,r));return n},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="/reaction_timer/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],a=c.push.bind(c);c.push=t,c=c.slice();for(var l=0;l<c.length;l++)t(c[l]);var u=a;i.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"0fb2":function(e,t,n){"use strict";n("71e1")},"56d7":function(e,t,n){"use strict";n.r(t);var r=n("7a23");const o=Object(r["f"])("h1",null,"Reaction Timer",-1),i=["disabled"];function s(e,t,n,s,c,a){const l=Object(r["h"])("Block"),u=Object(r["h"])("Results");return Object(r["g"])(),Object(r["e"])(r["a"],null,[o,Object(r["f"])("button",{disabled:c.isPlaying,onClick:t[0]||(t[0]=(...e)=>a.start&&a.start(...e)),class:"ui inverted blue button"},Object(r["i"])(c.play),9,i),c.isPlaying?(Object(r["g"])(),Object(r["c"])(l,{key:0,delay:c.delay,onEnd:a.endGame},null,8,["delay","onEnd"])):Object(r["d"])("",!0),c.showResults?(Object(r["g"])(),Object(r["c"])(u,{key:1,score:c.score},null,8,["score"])):Object(r["d"])("",!0)],64)}function c(e,t,n,o,i,s){return i.showBlock?(Object(r["g"])(),Object(r["e"])("div",{key:0,class:"block segment",onClick:t[0]||(t[0]=(...e)=>s.stopTimer&&s.stopTimer(...e))},[Object(r["f"])("h2",null,"Click me "+Object(r["i"])(i.reactionTime),1)])):Object(r["d"])("",!0)}const a={props:["delay"],data(){return{showBlock:!1,timer:null,reactionTime:0}},mounted(){this.random_height=68*Math.random()+"%",this.random_width=68*Math.random()+"%",console.log(this.delay),setTimeout(()=>{this.startTimer(),this.showBlock=!0},this.delay)},methods:{startTimer(){this.timer=setInterval(()=>{this.reactionTime+=5,this.$emit("currentReactionTime",this.reactionTime)},10)},stopTimer(){clearInterval(this.timer),this.$emit("end",this.reactionTime)}},computed:{red_(){return Math.round(this.reactionTime/10)},green_(){return Math.round(255-this.reactionTime/10)}}},l=()=>{Object(r["j"])(e=>({"5aefb808":e.red_,"4bd45156":e.green_,42573749:e.random_height,"24013b64":e.random_width}))},u=a.setup;a.setup=u?(e,t)=>(l(),u(e,t)):l;var d=a,h=(n("fc79"),n("6b0d")),p=n.n(h);const b=p()(d,[["render",c]]);var f=b;function m(e,t,n,o,i,s){return Object(r["g"])(),Object(r["e"])("h3",null,"Your reaction time is "+Object(r["i"])(n.score)+" ms =)",1)}var y={props:["score"]};const O=p()(y,[["render",m]]);var j=O,g={name:"App",components:{Block:f,Results:j},data(){return{play:"Play",isPlaying:!1,delay:null,score:null,showResults:!1}},methods:{start(){this.delay=1,this.isPlaying=!0,this.showResults=!1,this.score=null},endGame(e){this.score=e,this.isPlaying=!1,this.showResults=!0,this.play="Play again"}}};n("0fb2");const v=p()(g,[["render",s]]);var w=v;n("c4ca"),n("aede");Object(r["b"])(w).mount("#app")},"71e1":function(e,t,n){},8317:function(e,t,n){},aede:function(e,t,n){},fc79:function(e,t,n){"use strict";n("8317")}});
//# sourceMappingURL=app.a774827d.js.map