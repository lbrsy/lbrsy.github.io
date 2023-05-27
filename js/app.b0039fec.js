(function(){"use strict";var t={976:function(t,o,e){var n=e(6369),i=function(){var t=this,o=t._self._c;return o("div",{attrs:{id:"root"}},[o("h2",[t._v("备忘录")]),o("div",{staticClass:"todo-container"},[o("div",{staticClass:"todo-wrap"},[o("TodoHeader",{attrs:{addTodo:t.addTodo}}),o("TodoList",{attrs:{todos:t.todos}}),o("TodoFooter",{attrs:{todos:t.todos,checkAllTodo:t.checkAllTodo,clearAllTodo:t.clearAllTodo}})],1)])])},d=[],s=e(3017),r=e.n(s),a=function(){var t=this,o=t._self._c;return o("div",{staticClass:"todo-header"},[o("input",{directives:[{name:"model",rawName:"v-model",value:t.title,expression:"title"}],attrs:{type:"text",placeholder:"请输入你的任务名称，按回车键确认"},domProps:{value:t.title},on:{keyup:function(o){return!o.type.indexOf("key")&&t._k(o.keyCode,"enter",13,o.key,"Enter")?null:t.add.apply(null,arguments)},input:function(o){o.target.composing||(t.title=o.target.value)}}})])},l=[],c=e(691),u={name:"TodoHeader",props:["addTodo"],data(){return{title:""}},methods:{add(){if(!this.title.trim())return alert("输入不能为空");const t={id:(0,c.x0)(),title:this.title,done:!1};this.addTodo(t),this.title=""}}},h=u,f=e(1001),p=(0,f.Z)(h,a,l,!1,null,null,null),v=p.exports,T=function(){var t=this,o=t._self._c;return o("div",{directives:[{name:"show",rawName:"v-show",value:t.total,expression:"total"}],staticClass:"todo-footer"},[o("label",[o("input",{attrs:{type:"checkbox"},domProps:{checked:t.isAll},on:{change:t.checkAll}})]),o("span",[o("span",[t._v("已完成"+t._s(t.doneTotal))]),t._v(" / 全部"+t._s(t.total)+" ")]),o("button",{staticClass:"btn btn-danger",on:{click:t.clearAllTodo}},[t._v("清除已完成任务")])])},m=[],b={name:"TodoFooter",props:["todos","checkAllTodo","clearAllTodo"],computed:{isAll:{get(){return this.doneTotal===this.total&&this.total>0},set(t){this.checkAllTodo(t)}},total(){return this.todos.length},doneTotal(){return this.todos.reduce(((t,o)=>t+(o.done?1:0)),0)}},methods:{checkAll(t){console.log(t.target.checked),this.checkAllTodo(t.target.checked)},clearAll(){this.clearAllTodo()}}},k=b,_=(0,f.Z)(k,T,m,!1,null,null,null),g=_.exports,w=function(){var t=this,o=t._self._c;return o("ul",{staticClass:"todo-main"},t._l(t.todos,(function(e){return o("TodoItem",{key:e.id,attrs:{todo:e,checkTodo:t.checkTodo,deleteTodo:t.deleteTodo}})})),1)},y=[],x=function(){var t=this,o=t._self._c;return o("transition",{attrs:{name:"animate__animated animate__bounce","enter-active-class":"animate__bounceInLeft","leave-active-class":"animate__bounceOutRight",appear:!0}},[o("li",[o("label",[o("input",{attrs:{type:"checkbox"},domProps:{checked:t.todo.done},on:{click:function(o){return t.handleCheck(t.todo.id)}}}),o("span",{directives:[{name:"show",rawName:"v-show",value:!t.todo.isEdit,expression:"!todo.isEdit"}]},[t._v(t._s(t.todo.title))]),o("input",{directives:[{name:"show",rawName:"v-show",value:t.todo.isEdit,expression:"todo.isEdit"}],ref:"inputTitle",attrs:{type:"text"},domProps:{value:t.todo.title},on:{blur:function(o){return t.handleBlur(t.todo,o)}}})]),o("button",{key:"delete",staticClass:"btn btn-danger",on:{click:function(o){return t.handleDelete(t.todo.id)}}},[t._v(" 删除 ")]),o("transition-group",{attrs:{name:"animate__animated animate__bounce","enter-active-class":"animate__fadeIn","leave-active-class":"animate__headShake"}},[o("button",{directives:[{name:"show",rawName:"v-show",value:!t.todo.isEdit,expression:"!todo.isEdit"}],key:"edit",staticClass:"btn btn-edit",on:{click:function(o){return t.handleEdit(t.todo)}}},[t._v(" 编辑 ")])])],1)])},A=[],E={name:"TodoItem",props:["todo","checkTodo","deleteTodo"],methods:{handleCheck(t){this.$bus.$emit("checkTodo",t)},handleDelete(t){confirm("确定删除吗？")&&r().publish("deleteTodo",t)},handleEdit(t){void 0!==t.isEdit?t.isEdit=!0:this.$set(t,"isEdit",!0),this.$nextTick((function(){this.$refs.inputTitle.focus()}))},handleBlur(t,o){if(t.isEdit=!1,!o.target.value.trim())return alert("输入不能为空！");this.$bus.$emit("updateTodo",t.id,o.target.value)}}},$=E,O=(0,f.Z)($,x,A,!1,null,null,null),C=O.exports,I={name:"TodoList",components:{TodoItem:C},props:["todos","checkTodo","deleteTodo"]},P=I,Z=(0,f.Z)(P,w,y,!1,null,null,null),N=Z.exports,j={name:"App",components:{TodoHeader:v,TodoFooter:g,TodoList:N},data(){return{todos:JSON.parse(localStorage.getItem("todos"))||[]}},methods:{addTodo(t){this.todos.unshift(t)},checkTodo(t){this.todos.forEach((o=>{o.id===t&&(o.done=!o.done)}))},updateTodo(t,o){this.todos.forEach((e=>{e.id===t&&(e.title=o)}))},deleteTodo(t,o){this.todos=this.todos.filter((t=>t.id!==o))},checkAllTodo(t){this.todos.forEach((o=>{o.done=t}))},clearAllTodo(){this.todos=this.todos.filter((t=>!t.done))}},watch:{todos:{deep:!0,handler(t){localStorage.setItem("todos",JSON.stringify(t))}}},mounted(){this.$bus.$on("checkTodo",this.checkTodo),this.$bus.$on("updateTodo",this.updateTodo),this.pubId=r().subscribe("deleteTodo",this.deleteTodo)},beforeDestroy(){this.$bus.$off("checkTodo"),this.$bus.$off("updateTodo"),r().unsubscribe(this.pubId)}},S=j,F=(0,f.Z)(S,i,d,!1,null,null,null),L=F.exports;n.ZP.config.productionTip=!1,new n.ZP({render:t=>t(L),beforeCreate(){n.ZP.prototype.$bus=this}}).$mount("#app")}},o={};function e(n){var i=o[n];if(void 0!==i)return i.exports;var d=o[n]={id:n,loaded:!1,exports:{}};return t[n].call(d.exports,d,d.exports,e),d.loaded=!0,d.exports}e.m=t,function(){var t=[];e.O=function(o,n,i,d){if(!n){var s=1/0;for(c=0;c<t.length;c++){n=t[c][0],i=t[c][1],d=t[c][2];for(var r=!0,a=0;a<n.length;a++)(!1&d||s>=d)&&Object.keys(e.O).every((function(t){return e.O[t](n[a])}))?n.splice(a--,1):(r=!1,d<s&&(s=d));if(r){t.splice(c--,1);var l=i();void 0!==l&&(o=l)}}return o}d=d||0;for(var c=t.length;c>0&&t[c-1][2]>d;c--)t[c]=t[c-1];t[c]=[n,i,d]}}(),function(){e.n=function(t){var o=t&&t.__esModule?function(){return t["default"]}:function(){return t};return e.d(o,{a:o}),o}}(),function(){e.d=function(t,o){for(var n in o)e.o(o,n)&&!e.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:o[n]})}}(),function(){e.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){e.o=function(t,o){return Object.prototype.hasOwnProperty.call(t,o)}}(),function(){e.nmd=function(t){return t.paths=[],t.children||(t.children=[]),t}}(),function(){var t={143:0};e.O.j=function(o){return 0===t[o]};var o=function(o,n){var i,d,s=n[0],r=n[1],a=n[2],l=0;if(s.some((function(o){return 0!==t[o]}))){for(i in r)e.o(r,i)&&(e.m[i]=r[i]);if(a)var c=a(e)}for(o&&o(n);l<s.length;l++)d=s[l],e.o(t,d)&&t[d]&&t[d][0](),t[d]=0;return e.O(c)},n=self["webpackChunktodo_list"]=self["webpackChunktodo_list"]||[];n.forEach(o.bind(null,0)),n.push=o.bind(null,n.push.bind(n))}();var n=e.O(void 0,[998],(function(){return e(976)}));n=e.O(n)})();
//# sourceMappingURL=app.b0039fec.js.map