(()=>{"use strict";var n={426:(n,e,t)=>{t.d(e,{Z:()=>a});var r=t(645),o=t.n(r)()((function(n){return n[1]}));o.push([n.id,"html {\n  font-size: 14px;\n  box-sizing: border-box;\n}\n\nbody {\n  display: flex;\n  margin: 0 auto;\n  text-align: left;\n  font-size: 2rem;\n}\n\nmain,\nform {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  align-content: space-around;\n  width: 80%;\n  height: auto;\n  margin: 0 auto;\n}\n\nh1 {\n  font-size: 5rem;\n  padding: 2rem;\n  text-align: left;\n  box-shadow: 0 4px 8px 0 rgb(0 0 0 / 20%), 0 6px 20px 0 rgb(0 0 0 / 19%);\n}\n\nh2 {\n  font-size: 4rem;\n}\n\n.main-container,\n.title {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-around;\n  text-align: left;\n  width: 80%;\n  height: auto;\n  margin: 0 auto;\n}\n\n.title {\n  align-items: center;\n}\n\nul {\n  list-style: none;\n  padding-left: 0;\n  width: auto;\n  align-self: flex-start;\n}\n\nli {\n  padding: 0.2rem;\n  border-radius: 5px;\n  padding-left: 1rem;\n}\n\nli:nth-child(odd) {\n  background: #d9d9d9;\n  border: solid 1px #609BEB;\n}\n\nli:nth-child(even) {\n  background: #609BEB;\n  border: solid 1px #d9d9d9;\n}\n\n.recent-scores,\n.add-your-score {\n  border: solid 1px #d9d9d9;\n  box-shadow: 0 4px 8px 0 rgb(0 0 0 / 20%), 0 6px 20px 0 rgb(0 0 0 / 19%);\n  border-radius: 10px;\n  padding: 1rem;\n  margin: 2rem;\n}\n\n.add-your-score {\n  width: 600px;\n  height: 400px;\n}\n\n.recent-scores {\n  width: 1200px;\n}\n\n.recent {\n  margin: 1rem;\n}\n\n.refresh-btn {\n  font-size: 2rem;\n  justify-self: center;\n  font-weight: bold;\n  padding: 0.5rem;\n  box-shadow: 0 4px 8px 0 rgb(0 0 0 / 20%), 0 6px 20px 0 rgb(0 0 0 / 19%);\n  margin-left: 1.5rem;\n}\n\n.btn {\n  font-size: 2rem;\n  align-self: flex-end;\n  font-weight: bold;\n  padding: 0.5rem;\n  box-shadow: 0 4px 8px 0 rgb(0 0 0 / 20%), 0 6px 20px 0 rgb(0 0 0 / 19%);\n}\n\ninput {\n  font-size: 2rem;\n  padding: 0.5rem;\n  border: solid 0.3px #d9d9d9;\n  border-radius: 5px;\n  margin: 1rem;\n}\n",""]);const a=o},645:n=>{n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var t=n(e);return e[2]?"@media ".concat(e[2]," {").concat(t,"}"):t})).join("")},e.i=function(n,t,r){"string"==typeof n&&(n=[[null,n,""]]);var o={};if(r)for(var a=0;a<this.length;a++){var i=this[a][0];null!=i&&(o[i]=!0)}for(var s=0;s<n.length;s++){var d=[].concat(n[s]);r&&o[d[0]]||(t&&(d[2]?d[2]="".concat(t," and ").concat(d[2]):d[2]=t),e.push(d))}},e}},379:n=>{var e=[];function t(n){for(var t=-1,r=0;r<e.length;r++)if(e[r].identifier===n){t=r;break}return t}function r(n,r){for(var a={},i=[],s=0;s<n.length;s++){var d=n[s],c=r.base?d[0]+r.base:d[0],l=a[c]||0,u="".concat(c," ").concat(l);a[c]=l+1;var p=t(u),f={css:d[1],media:d[2],sourceMap:d[3]};-1!==p?(e[p].references++,e[p].updater(f)):e.push({identifier:u,updater:o(f,r),references:1}),i.push(u)}return i}function o(n,e){var t=e.domAPI(e);return t.update(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap)return;t.update(n=e)}else t.remove()}}n.exports=function(n,o){var a=r(n=n||[],o=o||{});return function(n){n=n||[];for(var i=0;i<a.length;i++){var s=t(a[i]);e[s].references--}for(var d=r(n,o),c=0;c<a.length;c++){var l=t(a[c]);0===e[l].references&&(e[l].updater(),e.splice(l,1))}a=d}}},569:n=>{var e={};n.exports=function(n,t){var r=function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}e[n]=t}return e[n]}(n);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(t)}},216:n=>{n.exports=function(n){var e=document.createElement("style");return n.setAttributes(e,n.attributes),n.insert(e),e}},565:(n,e,t)=>{n.exports=function(n){var e=t.nc;e&&n.setAttribute("nonce",e)}},795:n=>{n.exports=function(n){var e=n.insertStyleElement(n);return{update:function(t){!function(n,e,t){var r=t.css,o=t.media,a=t.sourceMap;o?n.setAttribute("media",o):n.removeAttribute("media"),a&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),e.styleTagTransform(r,n)}(e,n,t)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)}}}},589:n=>{n.exports=function(n,e){if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}}},e={};function t(r){var o=e[r];if(void 0!==o)return o.exports;var a=e[r]={id:r,exports:{}};return n[r](a,a.exports,t),a.exports}t.n=n=>{var e=n&&n.__esModule?()=>n.default:()=>n;return t.d(e,{a:e}),e},t.d=(n,e)=>{for(var r in e)t.o(e,r)&&!t.o(n,r)&&Object.defineProperty(n,r,{enumerable:!0,get:e[r]})},t.o=(n,e)=>Object.prototype.hasOwnProperty.call(n,e),(()=>{var n=t(379),e=t.n(n),r=t(795),o=t.n(r),a=t(569),i=t.n(a),s=t(565),d=t.n(s),c=t(216),l=t.n(c),u=t(589),p=t.n(u),f=t(426),m={};m.styleTagTransform=p(),m.setAttributes=d(),m.insert=i().bind(null,"head"),m.domAPI=o(),m.insertStyleElement=l(),e()(f.Z,m),f.Z&&f.Z.locals&&f.Z.locals;const h=document.querySelector(".players"),g=document.querySelector(".refresh-btn"),x=document.getElementById("playerName"),b=document.getElementById("playerScore");document.getElementById("addScore").addEventListener("click",(async n=>{n.preventDefault();const e=await fetch("https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/tV0qQc99xs0jNy5lTQLw/scores/",{method:"POST",body:JSON.stringify({user:x.value,score:Number(b.value)}),headers:{"Content-type":"application/json; charset=UTF-8"}});return x.value="",b.value="",e})),g.addEventListener("click",(async()=>(h.innerHTML="",await fetch("https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/tV0qQc99xs0jNy5lTQLw/scores/").then((n=>n.json())).then((n=>{n.result.forEach((n=>{const e=document.createElement("li"),t=document.createElement("p");t.innerHTML=`${n.user}: ${n.score}`,e.appendChild(t),h.appendChild(e)}))})))))})()})();