(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-187aefb8"],{"0e8f":function(t,e,n){"use strict";n.d(e,"c",(function(){return a})),n.d(e,"a",(function(){return o})),n.d(e,"d",(function(){return i})),n.d(e,"b",(function(){return u}));var r=n("b775");function a(t){return Object(r["a"])({url:"/department/list",method:"get",params:t})}function o(t){return Object(r["a"])({url:"/department",method:"post",data:t})}function i(t,e){return Object(r["a"])({url:"/department/".concat(t),method:"put",data:e})}function u(t){return Object(r["a"])({url:"/department/".concat(t),method:"delete"})}},"2daf":function(t,e,n){"use strict";n("fcdd")},"333d":function(t,e,n){"use strict";var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"pagination-container",class:{hidden:t.hidden}},[n("el-pagination",t._b({attrs:{background:t.background,"current-page":t.currentPage,"page-size":t.pageSize,layout:t.layout,"page-sizes":t.pageSizes,total:t.total},on:{"update:currentPage":function(e){t.currentPage=e},"update:current-page":function(e){t.currentPage=e},"update:pageSize":function(e){t.pageSize=e},"update:page-size":function(e){t.pageSize=e},"size-change":t.handleSizeChange,"current-change":t.handleCurrentChange}},"el-pagination",t.$attrs,!1))],1)},a=[];n("a9e3");Math.easeInOutQuad=function(t,e,n,r){return t/=r/2,t<1?n/2*t*t+e:(t--,-n/2*(t*(t-2)-1)+e)};var o=function(){return window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||function(t){window.setTimeout(t,1e3/60)}}();function i(t){document.documentElement.scrollTop=t,document.body.parentNode.scrollTop=t,document.body.scrollTop=t}function u(){return document.documentElement.scrollTop||document.body.parentNode.scrollTop||document.body.scrollTop}function c(t,e,n){var r=u(),a=t-r,c=20,l=0;e="undefined"===typeof e?500:e;var s=function t(){l+=c;var u=Math.easeInOutQuad(l,r,a,e);i(u),l<e?o(t):n&&"function"===typeof n&&n()};s()}var l={name:"Pagination",props:{total:{required:!0,type:Number},page:{type:Number,default:1},limit:{type:Number,default:20},pageSizes:{type:Array,default:function(){return[10,20,30,50]}},layout:{type:String,default:"total, sizes, prev, pager, next, jumper"},background:{type:Boolean,default:!0},autoScroll:{type:Boolean,default:!0},hidden:{type:Boolean,default:!1}},computed:{currentPage:{get:function(){return this.page},set:function(t){this.$emit("update:page",t)}},pageSize:{get:function(){return this.limit},set:function(t){this.$emit("update:limit",t)}}},methods:{handleSizeChange:function(t){this.$emit("pagination",{page:this.currentPage,limit:t}),this.autoScroll&&c(0,800)},handleCurrentChange:function(t){this.$emit("pagination",{page:t,limit:this.pageSize}),this.autoScroll&&c(0,800)}}},s=l,d=(n("5660"),n("2877")),f=Object(d["a"])(s,r,a,!1,null,"6af373ef",null);e["a"]=f.exports},5660:function(t,e,n){"use strict";n("7a30")},"5ab8":function(t,e,n){"use strict";n.r(e);var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"app-container"},[n("div",{staticClass:"filter-container"},[n("el-select",{staticClass:"filter-item",staticStyle:{width:"130px"},attrs:{placeholder:"分公司",clearable:""},on:{change:t.handlerChangeCompany},model:{value:t.listQuery.companyId,callback:function(e){t.$set(t.listQuery,"companyId",e)},expression:"listQuery.companyId"}},t._l(t.companyOptions,(function(t){return n("el-option",{key:t.value,attrs:{label:t.label,value:t.value}})})),1),n("el-select",{staticClass:"filter-item",staticStyle:{width:"130px"},attrs:{placeholder:"营业部",clearable:""},on:{change:t.handlerChangeDepartment},model:{value:t.listQuery.departmentId,callback:function(e){t.$set(t.listQuery,"departmentId",e)},expression:"listQuery.departmentId"}},t._l(t.departmentOptions,(function(t){return n("el-option",{key:t.value,attrs:{label:t.label,value:t.value}})})),1),n("el-input",{staticClass:"filter-item",staticStyle:{width:"100px"},attrs:{placeholder:"id"},nativeOn:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.handleFilter(e)}},model:{value:t.listQuery._id,callback:function(e){t.$set(t.listQuery,"_id",e)},expression:"listQuery._id"}}),n("el-input",{staticClass:"filter-item",staticStyle:{width:"200px"},attrs:{placeholder:"名称"},nativeOn:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.handleFilter(e)}},model:{value:t.listQuery.name,callback:function(e){t.$set(t.listQuery,"name",e)},expression:"listQuery.name"}}),n("el-select",{staticClass:"filter-item",staticStyle:{width:"130px"},attrs:{placeholder:"状态",clearable:""},model:{value:t.listQuery.status,callback:function(e){t.$set(t.listQuery,"status",e)},expression:"listQuery.status"}},t._l(t.statusOptions,(function(t){return n("el-option",{key:t.value,attrs:{label:t.label,value:t.value}})})),1),n("el-button",{staticClass:"filter-item",attrs:{type:"primary",icon:"el-icon-search"},on:{click:t.handleFilter}},[t._v("搜索")]),n("el-button",{staticClass:"filter-item",attrs:{type:"primary"},on:{click:t.handleCreate}},[t._v("添加")])],1),n("el-table",{directives:[{name:"loading",rawName:"v-loading",value:t.listLoading,expression:"listLoading"}],attrs:{data:t.list,"element-loading-text":"Loading",border:"",fit:"","highlight-current-row":""}},[n("el-table-column",{attrs:{align:"center",label:"ID",width:"95"},scopedSlots:t._u([{key:"default",fn:function(e){var r=e.row;return[n("el-button",{attrs:{type:"success",size:"mini"},on:{click:function(e){return t.onClipboard(r._id,e)}}},[t._v("id")])]}}])}),n("el-table-column",{attrs:{align:"center",label:"名称"},scopedSlots:t._u([{key:"default",fn:function(e){var r=e.row;return[n("el-button",{attrs:{type:"success",size:"mini"},on:{click:function(e){return t.onClipboard(r.name,e)}}},[t._v(t._s(r.name))])]}}])}),n("el-table-column",{attrs:{align:"center",label:"联系人",width:"95"},scopedSlots:t._u([{key:"default",fn:function(e){var n=e.row;return[t._v(" "+t._s(n.contact)+" ")]}}])}),n("el-table-column",{attrs:{align:"center",label:"联系人手机",width:"95"},scopedSlots:t._u([{key:"default",fn:function(e){var n=e.row;return[t._v(" "+t._s(n.phoneNumber)+" ")]}}])}),n("el-table-column",{attrs:{align:"center",label:"大队地址",width:"95"},scopedSlots:t._u([{key:"default",fn:function(e){var n=e.row;return[t._v(" "+t._s(n.address)+" ")]}}])}),n("el-table-column",{attrs:{"class-name":"status-col",label:"状态",width:"110",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){var n=e.row;return[t._v(" "+t._s(t._f("statusFilter")(n.status))+" ")]}}])}),n("el-table-column",{attrs:{align:"center",label:"创建时间",width:"200"},scopedSlots:t._u([{key:"default",fn:function(e){var r=e.row;return[n("span",[t._v(t._s(t._f("formatTime")(r.createdAt)))])]}}])}),n("el-table-column",{attrs:{align:"center",label:"更多",width:"250"},scopedSlots:t._u([{key:"default",fn:function(e){var r=e.row;return[n("div",{staticClass:"table_more"},[n("router-link",{staticClass:"redirect",attrs:{to:{path:"/squadron",query:{brigadeId:r._id,companyId:r.companyId}}}},[n("el-button",{attrs:{type:"primary",size:"mini"}},[t._v("查看")])],1),n("el-button",{attrs:{type:"primary",size:"mini"},on:{click:function(e){return t.handleUpdate(r)}}},[t._v("编辑")]),n("el-button",{attrs:{type:"danger",size:"mini"},on:{click:function(e){return t.handleDelete(r)}}},[t._v("删除")])],1)]}}])})],1),n("pagination",{directives:[{name:"show",rawName:"v-show",value:t.total>0,expression:"total>0"}],attrs:{total:t.total,page:t.listQuery.page,limit:t.listQuery.pagesize},on:{"update:page":function(e){return t.$set(t.listQuery,"page",e)},"update:limit":function(e){return t.$set(t.listQuery,"pagesize",e)},pagination:t.handleFilter}}),n("el-dialog",{attrs:{title:t.textMap[t.dialogStatus],visible:t.dialogVisible,width:"75%"},on:{"update:visible":function(e){t.dialogVisible=e}}},[n("el-form",{ref:"form",staticStyle:{"padding-right":"50px"},attrs:{model:t.temp,rules:t.rules,"label-width":"150px"}},[n("el-form-item",{attrs:{label:"大队名称",prop:"name"}},[n("el-input",{attrs:{width:"500px"},model:{value:t.temp.name,callback:function(e){t.$set(t.temp,"name",e)},expression:"temp.name"}})],1),n("el-form-item",{attrs:{label:"联系人",prop:"contact"}},[n("el-input",{attrs:{clearable:""},model:{value:t.temp.contact,callback:function(e){t.$set(t.temp,"contact",e)},expression:"temp.contact"}})],1),n("el-form-item",{attrs:{label:"电话",prop:"phoneNumber"}},[n("el-input",{attrs:{clearable:""},model:{value:t.temp.phoneNumber,callback:function(e){t.$set(t.temp,"phoneNumber",e)},expression:"temp.phoneNumber"}})],1),n("el-form-item",{attrs:{label:"地址",prop:"address"}},[n("el-input",{attrs:{clearable:""},model:{value:t.temp.address,callback:function(e){t.$set(t.temp,"address",e)},expression:"temp.address"}})],1),n("el-form-item",{attrs:{label:"备注",prop:"remark"}},[n("el-input",{attrs:{type:"textarea"},model:{value:t.temp.remark,callback:function(e){t.$set(t.temp,"remark",e)},expression:"temp.remark"}})],1)],1),n("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[n("el-button",{on:{click:function(e){t.dialogVisible=!1}}},[t._v("取 消")]),n("el-button",{directives:[{name:"show",rawName:"v-show",value:"create"===t.dialogStatus,expression:"dialogStatus === 'create'"}],attrs:{loading:t.submitLoading,type:"primary"},on:{click:t.handleCreateBrigade}},[t._v("确 定")]),n("el-button",{directives:[{name:"show",rawName:"v-show",value:"update"===t.dialogStatus,expression:"dialogStatus === 'update'"}],attrs:{loading:t.submitLoading,type:"primary"},on:{click:t.handleUpdateBrigade}},[t._v("确 定")])],1)],1)],1)},a=[],o=n("c7eb"),i=n("1da1"),u=(n("d81d"),n("b0c0"),n("e9c4"),n("e125")),c=n("fcac"),l=n("0e8f"),s=n("333d"),d=n("f71e"),f=[{label:"正常",value:1}],p=[],m=[],y={name:"Brigade",components:{Pagination:s["a"]},filters:{statusFilter:function(t){var e={1:"正常"};return e[t]}},data:function(){return{submitLoading:!1,list:null,total:0,listQuery:{page:1,pagesize:10,_id:null,name:"",status:null,departmentId:""},companyId:"",statusOptions:f,companyOptions:p,departmentOptions:m,dialogVisible:!1,dialogStatus:"",listLoading:!0,temp:{},textMap:{update:"修改",create:"添加"},rules:{name:[{required:!0,message:"请填名称",trigger:"blur"}]}}},created:function(){var t=this;Object(c["c"])().then((function(e){t.companyOptions=e.data.list.map((function(t){return{id:t._id,label:t.name,value:t._id}})),t.listQuery.companyId=t.$route.query.companyId||t.companyOptions[0].id,t.getDepartmentListFilter(t.listQuery.companyId),t.$route.query.departmentId&&(t.listQuery.departmentId=t.$route.query.departmentId),t.handleFilter()}))},methods:{handlerChangeCompany:function(t){this.departmentOptions=[],this.listQuery.departmentId="",this.getDepartmentListFilter(t),this.listQuery.companyId=t,this.handleFilter()},handlerChangeDepartment:function(t){this.listQuery.departmentId=t,this.handleFilter()},getDepartmentListFilter:function(t){var e=this;Object(l["c"])({companyId:t}).then((function(t){e.departmentOptions=t.data.list.map((function(t){return{id:t._id,label:t.name,value:t._id}}))}))},onClipboard:function(t,e){t instanceof Object&&(t=JSON.stringify(t)),"number"===typeof t&&(t=String(t)),Object(d["a"])(t,e)},handleFilter:function(){var t=this;this.listLoading=!0,Object(u["c"])(this.listQuery).then((function(e){t.list=e.data.list,t.total=e.data.total,t.listLoading=!1}))},handleCreate:function(){this.temp={companyId:this.listQuery.companyId,departmentId:this.listQuery.departmentId},this.dialogVisible=!0,this.dialogStatus="create"},handleUpdate:function(t){this.dialogVisible=!0,this.dialogStatus="update",this.temp=Object.assign({},t)},handleCreateBrigade:function(){var t=this;return Object(i["a"])(Object(o["a"])().mark((function e(){return Object(o["a"])().wrap((function(e){while(1)switch(e.prev=e.next){case 0:t.$refs["form"].validate(function(){var e=Object(i["a"])(Object(o["a"])().mark((function e(n){var r;return Object(o["a"])().wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(!n){e.next=5;break}return e.next=3,Object(u["a"])(t.temp);case 3:r=e.sent,200===r.code&&(t.handleFilter(),t.alertSuccessMsg(),t.dialogVisible=!1);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}());case 1:case"end":return e.stop()}}),e)})))()},handleUpdateBrigade:function(){var t=this;this.$refs["form"].validate(function(){var e=Object(i["a"])(Object(o["a"])().mark((function e(n){var r;return Object(o["a"])().wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(!n){e.next=5;break}return e.next=3,Object(u["d"])(t.temp);case 3:r=e.sent,200===r.code&&(t.handleFilter(),t.alertSuccessMsg(),t.dialogVisible=!1);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())},handleDelete:function(t){this.deleteConfirm(t._id)},alertSuccessMsg:function(){this.$message({message:"成功",type:"success"})},deleteConfirm:function(t){var e=this;this.$confirm("此操作将永久删除该记录, 是否继续?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then((function(){Object(u["b"])(t).then((function(t){200===t.code&&(e.handleFilter(),e.$message({type:"success",message:"删除成功!"}))}))})).catch((function(){e.$message({type:"info",message:"已取消删除"})}))}}},h=y,b=(n("2daf"),n("2877")),g=Object(b["a"])(h,r,a,!1,null,"5bc1c213",null);e["default"]=g.exports},"7a30":function(t,e,n){},b311:function(t,e,n){
/*!
 * clipboard.js v2.0.11
 * https://clipboardjs.com/
 *
 * Licensed MIT © Zeno Rocha
 */
(function(e,n){t.exports=n()})(0,(function(){return function(){var t={686:function(t,e,n){"use strict";n.d(e,{default:function(){return $}});var r=n(279),a=n.n(r),o=n(370),i=n.n(o),u=n(817),c=n.n(u);function l(t){try{return document.execCommand(t)}catch(e){return!1}}var s=function(t){var e=c()(t);return l("cut"),e},d=s;function f(t){var e="rtl"===document.documentElement.getAttribute("dir"),n=document.createElement("textarea");n.style.fontSize="12pt",n.style.border="0",n.style.padding="0",n.style.margin="0",n.style.position="absolute",n.style[e?"right":"left"]="-9999px";var r=window.pageYOffset||document.documentElement.scrollTop;return n.style.top="".concat(r,"px"),n.setAttribute("readonly",""),n.value=t,n}var p=function(t,e){var n=f(t);e.container.appendChild(n);var r=c()(n);return l("copy"),n.remove(),r},m=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{container:document.body},n="";return"string"===typeof t?n=p(t,e):t instanceof HTMLInputElement&&!["text","search","url","tel","password"].includes(null===t||void 0===t?void 0:t.type)?n=p(t.value,e):(n=c()(t),l("copy")),n},y=m;function h(t){return h="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"===typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},h(t)}var b=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=t.action,n=void 0===e?"copy":e,r=t.container,a=t.target,o=t.text;if("copy"!==n&&"cut"!==n)throw new Error('Invalid "action" value, use either "copy" or "cut"');if(void 0!==a){if(!a||"object"!==h(a)||1!==a.nodeType)throw new Error('Invalid "target" value, use a valid Element');if("copy"===n&&a.hasAttribute("disabled"))throw new Error('Invalid "target" attribute. Please use "readonly" instead of "disabled" attribute');if("cut"===n&&(a.hasAttribute("readonly")||a.hasAttribute("disabled")))throw new Error('Invalid "target" attribute. You can\'t cut text from elements with "readonly" or "disabled" attributes')}return o?y(o,{container:r}):a?"cut"===n?d(a):y(a,{container:r}):void 0},g=b;function v(t){return v="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"===typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},v(t)}function w(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function S(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function k(t,e,n){return e&&S(t.prototype,e),n&&S(t,n),t}function x(t,e){if("function"!==typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&O(t,e)}function O(t,e){return O=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t},O(t,e)}function _(t){var e=E();return function(){var n,r=T(t);if(e){var a=T(this).constructor;n=Reflect.construct(r,arguments,a)}else n=r.apply(this,arguments);return C(this,n)}}function C(t,e){return!e||"object"!==v(e)&&"function"!==typeof e?j(t):e}function j(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function E(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}function T(t){return T=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)},T(t)}function I(t,e){var n="data-clipboard-".concat(t);if(e.hasAttribute(n))return e.getAttribute(n)}var Q=function(t){x(n,t);var e=_(n);function n(t,r){var a;return w(this,n),a=e.call(this),a.resolveOptions(r),a.listenClick(t),a}return k(n,[{key:"resolveOptions",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};this.action="function"===typeof t.action?t.action:this.defaultAction,this.target="function"===typeof t.target?t.target:this.defaultTarget,this.text="function"===typeof t.text?t.text:this.defaultText,this.container="object"===v(t.container)?t.container:document.body}},{key:"listenClick",value:function(t){var e=this;this.listener=i()(t,"click",(function(t){return e.onClick(t)}))}},{key:"onClick",value:function(t){var e=t.delegateTarget||t.currentTarget,n=this.action(e)||"copy",r=g({action:n,container:this.container,target:this.target(e),text:this.text(e)});this.emit(r?"success":"error",{action:n,text:r,trigger:e,clearSelection:function(){e&&e.focus(),window.getSelection().removeAllRanges()}})}},{key:"defaultAction",value:function(t){return I("action",t)}},{key:"defaultTarget",value:function(t){var e=I("target",t);if(e)return document.querySelector(e)}},{key:"defaultText",value:function(t){return I("text",t)}},{key:"destroy",value:function(){this.listener.destroy()}}],[{key:"copy",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{container:document.body};return y(t,e)}},{key:"cut",value:function(t){return d(t)}},{key:"isSupported",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:["copy","cut"],e="string"===typeof t?[t]:t,n=!!document.queryCommandSupported;return e.forEach((function(t){n=n&&!!document.queryCommandSupported(t)})),n}}]),n}(a()),$=Q},828:function(t){var e=9;if("undefined"!==typeof Element&&!Element.prototype.matches){var n=Element.prototype;n.matches=n.matchesSelector||n.mozMatchesSelector||n.msMatchesSelector||n.oMatchesSelector||n.webkitMatchesSelector}function r(t,n){while(t&&t.nodeType!==e){if("function"===typeof t.matches&&t.matches(n))return t;t=t.parentNode}}t.exports=r},438:function(t,e,n){var r=n(828);function a(t,e,n,r,a){var o=i.apply(this,arguments);return t.addEventListener(n,o,a),{destroy:function(){t.removeEventListener(n,o,a)}}}function o(t,e,n,r,o){return"function"===typeof t.addEventListener?a.apply(null,arguments):"function"===typeof n?a.bind(null,document).apply(null,arguments):("string"===typeof t&&(t=document.querySelectorAll(t)),Array.prototype.map.call(t,(function(t){return a(t,e,n,r,o)})))}function i(t,e,n,a){return function(n){n.delegateTarget=r(n.target,e),n.delegateTarget&&a.call(t,n)}}t.exports=o},879:function(t,e){e.node=function(t){return void 0!==t&&t instanceof HTMLElement&&1===t.nodeType},e.nodeList=function(t){var n=Object.prototype.toString.call(t);return void 0!==t&&("[object NodeList]"===n||"[object HTMLCollection]"===n)&&"length"in t&&(0===t.length||e.node(t[0]))},e.string=function(t){return"string"===typeof t||t instanceof String},e.fn=function(t){var e=Object.prototype.toString.call(t);return"[object Function]"===e}},370:function(t,e,n){var r=n(879),a=n(438);function o(t,e,n){if(!t&&!e&&!n)throw new Error("Missing required arguments");if(!r.string(e))throw new TypeError("Second argument must be a String");if(!r.fn(n))throw new TypeError("Third argument must be a Function");if(r.node(t))return i(t,e,n);if(r.nodeList(t))return u(t,e,n);if(r.string(t))return c(t,e,n);throw new TypeError("First argument must be a String, HTMLElement, HTMLCollection, or NodeList")}function i(t,e,n){return t.addEventListener(e,n),{destroy:function(){t.removeEventListener(e,n)}}}function u(t,e,n){return Array.prototype.forEach.call(t,(function(t){t.addEventListener(e,n)})),{destroy:function(){Array.prototype.forEach.call(t,(function(t){t.removeEventListener(e,n)}))}}}function c(t,e,n){return a(document.body,t,e,n)}t.exports=o},817:function(t){function e(t){var e;if("SELECT"===t.nodeName)t.focus(),e=t.value;else if("INPUT"===t.nodeName||"TEXTAREA"===t.nodeName){var n=t.hasAttribute("readonly");n||t.setAttribute("readonly",""),t.select(),t.setSelectionRange(0,t.value.length),n||t.removeAttribute("readonly"),e=t.value}else{t.hasAttribute("contenteditable")&&t.focus();var r=window.getSelection(),a=document.createRange();a.selectNodeContents(t),r.removeAllRanges(),r.addRange(a),e=r.toString()}return e}t.exports=e},279:function(t){function e(){}e.prototype={on:function(t,e,n){var r=this.e||(this.e={});return(r[t]||(r[t]=[])).push({fn:e,ctx:n}),this},once:function(t,e,n){var r=this;function a(){r.off(t,a),e.apply(n,arguments)}return a._=e,this.on(t,a,n)},emit:function(t){var e=[].slice.call(arguments,1),n=((this.e||(this.e={}))[t]||[]).slice(),r=0,a=n.length;for(r;r<a;r++)n[r].fn.apply(n[r].ctx,e);return this},off:function(t,e){var n=this.e||(this.e={}),r=n[t],a=[];if(r&&e)for(var o=0,i=r.length;o<i;o++)r[o].fn!==e&&r[o].fn._!==e&&a.push(r[o]);return a.length?n[t]=a:delete n[t],this}},t.exports=e,t.exports.TinyEmitter=e}},e={};function n(r){if(e[r])return e[r].exports;var a=e[r]={exports:{}};return t[r](a,a.exports,n),a.exports}return function(){n.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return n.d(e,{a:e}),e}}(),function(){n.d=function(t,e){for(var r in e)n.o(e,r)&&!n.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:e[r]})}}(),function(){n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),n(686)}().default}))},e125:function(t,e,n){"use strict";n.d(e,"c",(function(){return a})),n.d(e,"a",(function(){return o})),n.d(e,"d",(function(){return i})),n.d(e,"b",(function(){return u}));var r=n("b775");function a(t){return Object(r["a"])({url:"/brigade/list",method:"get",params:t})}function o(t){return Object(r["a"])({url:"/brigade",method:"post",data:t})}function i(t,e){return Object(r["a"])({url:"/brigade/".concat(t),method:"put",data:e})}function u(t){return Object(r["a"])({url:"/brigade/".concat(t),method:"delete"})}},f71e:function(t,e,n){"use strict";n.d(e,"a",(function(){return c}));var r=n("2b0e"),a=n("b311"),o=n.n(a);function i(){r["default"].prototype.$message({message:"已复制至剪切板",type:"success",duration:1500})}function u(){r["default"].prototype.$message({message:"复制失败",type:"error"})}function c(t,e){var n=new o.a(e.target,{text:function(){return t}});n.on("success",(function(){i(),n.destroy()})),n.on("error",(function(){u(),n.destroy()})),n.onClick(e)}},fcac:function(t,e,n){"use strict";n.d(e,"c",(function(){return a})),n.d(e,"a",(function(){return o})),n.d(e,"d",(function(){return i})),n.d(e,"b",(function(){return u}));var r=n("b775");function a(t){return Object(r["a"])({url:"/company/list",method:"get",params:t})}function o(t){return Object(r["a"])({url:"/company",method:"post",data:t})}function i(t,e){return Object(r["a"])({url:"/company/".concat(t),method:"put",data:e})}function u(t){return Object(r["a"])({url:"/company/".concat(t),method:"delete"})}},fcdd:function(t,e,n){}}]);