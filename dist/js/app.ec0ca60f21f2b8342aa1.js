webpackJsonp([1],{"5Voq":function(e,t){},NHnr:function(e,t,l){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=l("7+uW");let s=null,a=null,c=null,r=null,o=0,i=1;var d={name:"table-time-picker",props:{rows:Array},data:()=>({}),computed:{columns:()=>["","周一","周二","周三","周四","周五","周六","周日"]},methods:{handleClick(e){const{cell:t}=e||{};t.selected=!t.selected,this.$emit("change",this.getSelectedCell())},getSelectedCell(){return this.rows.map((e,t)=>e.filter(e=>{if(e.selected)return e.week=t,e})).filter(e=>e.length&&e)},async autoSelect(e){e<7?setTimeout(()=>{this.autoSelect(e),e++},1e3):e=0},autoGo(e){o<24?setTimeout(()=>{e[o]&&(e[o].selected=!e[o].selected,o++,this.autoGo(e))},30):i<7?(i++,o=0,this.autoGo(this.rows[i])):(o=0,i=1,setTimeout(()=>{this.autoGo(this.rows[1])},2500))},reset(){o=0,i=1,this.rows.forEach(e=>{e.forEach(e=>{e.selected=!1})})},dragHandle(e,t,l){t.stopPropagation();const{cell:n,columnIndex:o,rowIndex:i}=l||{};switch(e){case"e-dragstart":c=o,r=i;break;case"e-dragover":if(a===n)return;a=n,(s=new Set).add(n),s.forEach(e=>{e.selected=!0});break;case"e-dragend":if(c===o){if(i-r>0)for(let e=r;e<i;e++)this.rows[o][e].selected=!0;else for(let e=r;e>i;e--)this.rows[o][e].selected=!0}this.$emit("change",this.getSelectedCell()),localStorage.setItem("cell",JSON.stringify(this.getSelectedCell())),a=null,s.clear(),c=r=null}}}},u={render:function(){var e=this,t=e.$createElement,l=e._self._c||t;return l("div",{staticClass:"table-date-picker"},[e._l(e.rows,function(t,n){return l("div",{staticClass:"flex-center flex-a-baseline-i"},[l("div",{staticClass:"week-column flex-col-start unselect"},[l("span",[e._v(e._s(e.columns[n]))])]),l("div",{staticClass:"hour-row flex-v-center-j-start"},e._l(t,function(t,s){return l("span",[0===n?l("span",{staticClass:"cell unselect"},[e._v(e._s(t.value))]):l("span",{staticClass:"cell-border",class:{"cell-selected":t.selected},attrs:{draggable:!0},on:{dragstart:function(l){e.dragHandle("e-dragstart",l,{cell:t,columnIndex:n,rowIndex:s})},dragover:function(l){e.dragHandle("e-dragover",l,{cell:t,columnIndex:n,rowIndex:s})},dragend:function(l){e.dragHandle("e-dragend",l,{cell:t,columnIndex:n,rowIndex:s})},click:function(l){e.handleClick({cell:t,columnIndex:n})}}})])}))])}),l("div",{staticClass:"flex-center btn"},[l("button",{staticClass:"el-icon-delete red",attrs:{type:"text"},on:{click:e.reset}},[e._v("清空设置时段")]),l("button",{attrs:{type:"text"},on:{click:function(t){e.autoGo(e.rows[1])}}},[e._v("let's go")])])],2)},staticRenderFns:[]};var f=l("VU/8")(d,u,!1,function(e){l("gJUo")},"data-v-675f0113",null).exports;f.install=function(e){e.component(f.name,f)};var h={name:"App",components:{tableTimePicker:f},data:()=>({rows:(()=>{const e=new Array(24).fill(0).map((e,t)=>({value:t,selected:!1}));return new Array(8).fill(0).map((t,l)=>[...e].map((e,t)=>({value:t,selected:!1})))})(),"二零一八":[[2,3,4,5,8,9,10,11,15,19,20,21,22],[5,8,11,14,15,19,22],[5,8,11,15,19,22],[2,3,4,5,8,11,15,19,20,21,22],[2,8,11,15,19,22],[2,8,11,15,19,22],[2,3,4,5,8,9,10,11,14,15,16,19,20,21,22]]}),mounted(){this.二零一八.forEach((e,t)=>{e.forEach(e=>{this.rows.forEach((l,n)=>{l.forEach(l=>{n&&n===t+1&&e===l.value&&(l.selected=!0)})})})})},methods:{cellChange(e){console.log("---------------cellChange",e)}}},p={render:function(){var e=this.$createElement,t=this._self._c||e;return t("div",[t("table-time-picker",{attrs:{rows:this.rows},on:{change:this.cellChange}})],1)},staticRenderFns:[]};var g=l("VU/8")(h,p,!1,function(e){l("5Voq")},null,null).exports;n.a.config.productionTip=!1,new n.a({el:"#app",components:{App:g},template:"<App/>"})},gJUo:function(e,t){}},["NHnr"]);
//# sourceMappingURL=app.ec0ca60f21f2b8342aa1.js.map