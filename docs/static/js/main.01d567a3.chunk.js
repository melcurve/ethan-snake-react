(this["webpackJsonpbrave-snake"]=this["webpackJsonpbrave-snake"]||[]).push([[0],{25:function(e,t,n){},32:function(e,t,n){},33:function(e,t,n){"use strict";n.r(t);var a=n(0),i=n.n(a),o=n(18),s=n.n(o),r=n(11),c=n(1),d=n(9),h=n(10),l=n(13),u=n(12),f=(n(25),n(2)),k=function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(){return Object(d.a)(this,n),t.apply(this,arguments)}return Object(h.a)(n,[{key:"render",value:function(){return Object(f.jsx)("div",{children:Object(f.jsx)(r.b,{to:"/yard",children:"Start"})})}}]),n}(i.a.Component);function p(e,t){return Math.floor(Math.random()*(t-e+1))+e}n(32);var y=function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(e){var a;return Object(d.a)(this,n),(a=t.call(this,e)).yardRef=void 0,a.yardSize=50,a.state={blockMap:Array(Math.pow(a.yardSize,2)).fill("").map((function(e,t){return a.isEdgeIndex(t)?{id:t,type:"edge"}:{id:t,type:"default"}})),snakeInfo:{name:"Hoovy",position:[a.yardSize,a.yardSize+1,a.yardSize+2],direction:"right"},speed:100,score:0},a.gameInterval=void 0,a}return Object(h.a)(n,[{key:"blockMap",get:function(){return this.state.blockMap}},{key:"snakeInfo",get:function(){return this.state.snakeInfo}},{key:"render",value:function(){var e=this;return Object(f.jsxs)("div",{className:"yard",ref:function(t){return e.yardRef=t},tabIndex:0,onKeyDown:function(t){return e.onkeydown(t)},children:[Object(f.jsx)("div",{className:"block-container flex-row",children:e.blockMap.map((function(t,n){return Object(f.jsx)("div",{className:"block-item ".concat(e.snakeInfo.position.includes(n)?"filled":""," ").concat(n==e.snakeInfo.position[e.snakeInfo.position.length-1]?"head":""," type-").concat(t.type)},t.id)}))}),Object(f.jsx)("div",{className:"info-block flex-row",children:Object(f.jsxs)("div",{className:"score",children:["\u79ef\u5206\uff1a",this.state.score]})})]})}},{key:"componentDidMount",value:function(){this.yardRef.focus(),this.setFood(),this.setGameInterval()}},{key:"isEdgeIndex",value:function(e){var t=!1;(e+1<=this.yardSize||e+1>=this.yardSize*(this.yardSize-1))&&(t=!0);for(var n=1;n<=this.yardSize;n++)e!=n*this.yardSize-this.yardSize&&e!=n*this.yardSize-1||(t=!0);return t}},{key:"setGameInterval",value:function(){var e=this;this.clearGameInterval(),this.gameInterval=setInterval((function(){e.goSnakeGo()}),this.state.speed)}},{key:"clearGameInterval",value:function(){this.gameInterval&&(clearInterval(this.gameInterval),this.gameInterval=null)}},{key:"goSnakeGo",value:function(){var e=this.snakeInfo,t=e.position;switch(this.snakeInfo.direction){case"left":var n=t[t.length-1]-1;this.handleMove(n),"food"==this.blockMap[n].type&&(t.push(n-1),this.addScore(),this.setFood());break;case"right":var a=t[t.length-1]+1;this.handleMove(a),"food"==this.blockMap[a].type&&(t.push(a+1),this.addScore(),this.setFood());break;case"up":var i=t[t.length-1]-this.yardSize;this.handleMove(i),"food"==this.blockMap[i].type&&(t.push(i-this.yardSize),this.addScore(),this.setFood());break;case"down":var o=t[t.length-1]+this.yardSize;this.handleMove(o),"food"==this.blockMap[o].type&&(t.push(o+this.yardSize),this.addScore(),this.setFood())}this.setState({snakeInfo:e})}},{key:"handleMove",value:function(e){"edge"==this.blockMap[e].type||this.snakeInfo.position.includes(e)?this.gameover():(this.snakeInfo.position.splice(0,1),this.snakeInfo.position.push(e))}},{key:"addScore",value:function(){this.state.score++}},{key:"setFood",value:function(){var e=this,t=this.blockMap,n=t.find((function(e){return"food"==e.type}));n&&(n.type="default"),t[function t(){var n=p(0,Math.pow(e.yardSize,2));return e.snakeInfo.position.includes(n)||"edge"==e.blockMap[n].type?t():n}()].type="food",this.setState({blockMap:t})}},{key:"onkeydown",value:function(e){switch(e.key){case"ArrowUp":"down"!=this.snakeInfo.direction&&(this.snakeInfo.direction="up");break;case"ArrowLeft":"right"!=this.snakeInfo.direction&&(this.snakeInfo.direction="left");break;case"ArrowRight":"left"!=this.snakeInfo.direction&&(this.snakeInfo.direction="right");break;case"ArrowDown":"up"!=this.snakeInfo.direction&&(this.snakeInfo.direction="down")}}},{key:"gameover",value:function(){this.clearGameInterval()}}]),n}(i.a.Component);function v(){return Object(f.jsx)(r.a,{children:Object(f.jsxs)(c.c,{children:[Object(f.jsx)(c.a,{exact:!0,path:"/",component:k}),Object(f.jsx)(c.a,{exact:!0,path:"/yard",component:y})]})})}s.a.render(Object(f.jsx)(i.a.StrictMode,{children:Object(f.jsx)(v,{})}),document.getElementById("root"))}},[[33,1,2]]]);
//# sourceMappingURL=main.01d567a3.chunk.js.map