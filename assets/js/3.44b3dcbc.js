(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{324:function(e,t,o){},325:function(e,t,o){},326:function(e,t,o){},329:function(e,t,o){},330:function(e,t,o){"use strict";var r=o(0),n=o(322),a=o(321),s=Object(r.defineComponent)({components:{RecoIcon:n.b},props:{pageInfo:{type:Object,default:()=>({})},currentTag:{type:String,default:""},showAccessNumber:{type:Boolean,default:!1}},setup(e,t){const o=Object(a.b)();return{numStyle:{fontSize:".9rem",fontWeight:"normal",color:"#999"},goTags:e=>{o.$route.path!==`/tag/${e}/`&&o.$router.push({path:`/tag/${e}/`})},formatDateValue:e=>new Intl.DateTimeFormat(o.$lang).format(new Date(e))}}}),i=(o(331),o(1)),c=Object(i.a)(s,(function(){var e=this,t=e._self._c;e._self._setupProxy;return t("div",[e.pageInfo.frontmatter.author||e.$themeConfig.author?t("reco-icon",{attrs:{icon:"reco-account"}},[t("span",[e._v(e._s(e.pageInfo.frontmatter.author||e.$themeConfig.author))])]):e._e(),e._v(" "),e.pageInfo.frontmatter.date?t("reco-icon",{attrs:{icon:"reco-date"}},[t("span",[e._v(e._s(e.formatDateValue(e.pageInfo.frontmatter.date)))])]):e._e(),e._v(" "),!0===e.showAccessNumber?t("reco-icon",{attrs:{icon:"reco-eye"}},[t("AccessNumber",{attrs:{idVal:e.pageInfo.path,numStyle:e.numStyle}})],1):e._e(),e._v(" "),e.pageInfo.frontmatter.tags?t("reco-icon",{staticClass:"tags",attrs:{icon:"reco-tag"}},e._l(e.pageInfo.frontmatter.tags,(function(o,r){return t("span",{key:r,staticClass:"tag-item",class:{active:e.currentTag==o},on:{click:function(t){return t.stopPropagation(),e.goTags(o)}}},[e._v(e._s(o))])})),0):e._e()],1)}),[],!1,null,"8a445198",null);t.a=c.exports},331:function(e,t,o){"use strict";o(324)},332:function(e,t,o){"use strict";o(325)},333:function(e,t,o){"use strict";o(326)},334:function(e,t,o){"use strict";var r=o(0),n={methods:{_getStoragePage(){const e=window.location.pathname,t=JSON.parse(sessionStorage.getItem("currentPage"));return null===t||e!==t.path?(sessionStorage.setItem("currentPage",JSON.stringify({page:1,path:""})),1):parseInt(t.page)},_setStoragePage(e){const t=window.location.pathname;sessionStorage.setItem("currentPage",JSON.stringify({page:e,path:t}))}}},a=o(322),s=o(330),i=Object(r.defineComponent)({components:{PageInfo:s.a,RecoIcon:a.b},props:["item","currentPage","currentTag"]}),c=(o(332),o(1)),l=Object(c.a)(i,(function(){var e=this,t=e._self._c;e._self._setupProxy;return t("div",{staticClass:"abstract-item",on:{click:function(t){return e.$router.push(e.item.path)}}},[e.item.frontmatter.sticky?t("reco-icon",{attrs:{icon:"reco-sticky"}}):e._e(),e._v(" "),t("div",{staticClass:"title"},[e.item.frontmatter.keys?t("reco-icon",{attrs:{icon:"reco-lock"}}):e._e(),e._v(" "),t("router-link",{attrs:{to:e.item.path}},[e._v(e._s(e.item.title))])],1),e._v(" "),t("div",{staticClass:"abstract",domProps:{innerHTML:e._s(e.item.excerpt)}}),e._v(" "),t("PageInfo",{attrs:{pageInfo:e.item,currentTag:e.currentTag}})],1)}),[],!1,null,"73a63558",null).exports,u=o(321),p=Object(r.defineComponent)({mixins:[n],components:{NoteAbstractItem:l},props:["data","currentTag"],setup(e,t){const o=Object(u.b)(),{data:n}=Object(r.toRefs)(e),a=Object(r.ref)(1),s=Object(r.computed)(()=>{const e=(a.value-1)*o.$perPage,t=a.value*o.$perPage;return n.value.slice(e,t)});return Object(r.onMounted)(()=>{a.value=o._getStoragePage()||1}),{currentPage:a,currentPageData:s,getCurrentPage:e=>{a.value=e,o._setStoragePage(e),t.emit("paginationChange",e)}}},watch:{$route(){this.currentPage=this._getStoragePage()||1}}}),d=(o(333),Object(c.a)(p,(function(){var e=this,t=e._self._c;e._self._setupProxy;return t("div",{staticClass:"abstract-wrapper"},[e._l(e.currentPageData,(function(o){return t("NoteAbstractItem",{key:o.path,attrs:{item:o,currentPage:e.currentPage,currentTag:e.currentTag}})})),e._v(" "),t("pagation",{staticClass:"pagation",attrs:{total:e.data.length,currentPage:e.currentPage},on:{getCurrentPage:e.getCurrentPage}})],2)}),[],!1,null,"21a20f36",null));t.a=d.exports},336:function(e,t,o){"use strict";o(329)},338:function(e,t,o){"use strict";var r=o(0),n=o(31),a=o(321),s=Object(r.defineComponent)({props:{currentTag:{type:String,default:""}},setup(e,t){const o=Object(a.b)();return{tags:Object(r.computed)(()=>[{name:o.$recoLocales.all,path:"/tag/"},...o.$tagesList]),tagClick:e=>{t.emit("getCurrentTag",e)},getOneColor:n.b}}}),i=(o(336),o(1)),c=Object(i.a)(s,(function(){var e=this,t=e._self._c;e._self._setupProxy;return t("div",{staticClass:"tags"},e._l(e.tags,(function(o,r){return t("span",{directives:[{name:"show",rawName:"v-show",value:!o.pages||o.pages&&o.pages.length>0,expression:"!item.pages || (item.pages && item.pages.length > 0)"}],key:r,class:{active:o.name==e.currentTag},style:{backgroundColor:e.getOneColor()},on:{click:function(t){return e.tagClick(o)}}},[e._v(e._s(o.name))])})),0)}),[],!1,null,"cbf58c6c",null);t.a=c.exports},359:function(e,t,o){},360:function(e,t,o){},361:function(e,t,o){},362:function(e,t,o){},363:function(e,t,o){},364:function(e,t,o){},365:function(e,t,o){},366:function(e,t,o){},398:function(e,t,o){"use strict";o(359)},399:function(e,t,o){"use strict";o(360)},400:function(e,t,o){e.exports=o.p+"assets/img/bg.2cfdbb33.svg"},401:function(e,t,o){"use strict";o(361)},402:function(e,t,o){"use strict";o(362)},403:function(e,t,o){"use strict";o(363)},404:function(e){e.exports=JSON.parse('{"a":"1.6.15"}')},405:function(e,t,o){"use strict";o(364)},406:function(e,t,o){"use strict";o(365)},407:function(e,t,o){"use strict";o(366)},413:function(e,t,o){"use strict";o.r(t);var r=o(0),n=o(339),a=o(322),s=o(321),i=Object(r.defineComponent)({components:{NavLink:n.a,ModuleTransition:a.a},setup(e,t){const o=Object(s.b)();return{recoShowModule:Object(s.c)(),actionLink:Object(r.computed)(()=>o&&{link:o.$frontmatter.actionLink,text:o.$frontmatter.actionText}),heroImageStyle:Object(r.computed)(()=>o.$frontmatter.heroImageStyle||{maxHeight:"200px",margin:"6rem auto 1.5rem"})}}}),c=(o(398),o(1)),l=Object(c.a)(i,(function(){var e=this,t=e._self._c;e._self._setupProxy;return t("div",{staticClass:"home"},[t("div",{staticClass:"hero"},[t("ModuleTransition",[e.recoShowModule&&e.$frontmatter.heroImage?t("img",{style:e.heroImageStyle||{},attrs:{src:e.$withBase(e.$frontmatter.heroImage),alt:"hero"}}):e._e()]),e._v(" "),t("ModuleTransition",{attrs:{delay:"0.04"}},[e.recoShowModule&&null!==e.$frontmatter.heroText?t("h1",{style:{marginTop:e.$frontmatter.heroImage?"0px":"140px"}},[e._v("\n        "+e._s(e.$frontmatter.heroText||e.$title||"vuePress-theme-reco")+"\n      ")]):e._e()]),e._v(" "),t("ModuleTransition",{attrs:{delay:"0.08"}},[e.recoShowModule&&null!==e.$frontmatter.tagline?t("p",{staticClass:"description"},[e._v("\n        "+e._s(e.$frontmatter.tagline||e.$description||"Welcome to your vuePress-theme-reco site")+"\n      ")]):e._e()]),e._v(" "),t("ModuleTransition",{attrs:{delay:"0.16"}},[e.recoShowModule&&e.$frontmatter.actionText&&e.$frontmatter.actionLink?t("p",{staticClass:"action"},[t("NavLink",{staticClass:"action-button",attrs:{item:e.actionLink}})],1):e._e()])],1),e._v(" "),t("ModuleTransition",{attrs:{delay:"0.24"}},[e.recoShowModule&&e.$frontmatter.features&&e.$frontmatter.features.length?t("div",{staticClass:"features"},e._l(e.$frontmatter.features,(function(o,r){return t("div",{key:r,staticClass:"feature"},[t("h2",[e._v(e._s(o.title))]),e._v(" "),t("p",[e._v(e._s(o.details))])])})),0):e._e()]),e._v(" "),t("ModuleTransition",{attrs:{delay:"0.32"}},[t("Content",{directives:[{name:"show",rawName:"v-show",value:e.recoShowModule,expression:"recoShowModule"}],staticClass:"home-center",attrs:{custom:""}})],1)],1)}),[],!1,null,null,null).exports,u=o(338),p=o(354),d=o.n(p),m=o(31);const g=()=>{const e=Object(s.b)(),t=Object(r.ref)(!0),o=Object(r.reactive)({left:0,top:0});return Object(r.onMounted)(()=>{t.value=!/Android|webOS|iPhone|iPod|BlackBerry/i.test(navigator.userAgent)}),{popupWindowStyle:o,showDetail:r=>{const n=r.target;n.querySelector(".popup-window-wrapper").style.display="block";const a=n.querySelector(".popup-window"),s=document.querySelector(".info-wrapper"),{clientWidth:i}=n,{clientWidth:c,clientHeight:l}=a;if(t)o.left=(i-c)/2+"px",o.top=-l+"px",s.style.overflow="visible",e.$nextTick(()=>{(e=>{const{offsetWidth:t}=document.body,{x:r,width:n}=e.getBoundingClientRect(),a=t-(r+n);if(a<0){const{offsetLeft:t}=e;o.left=t+a+"px"}})(a)});else{const e=function(e){const t=document,o=e.getBoundingClientRect();let r=o.left,n=o.top;return r+=t.documentElement.scrollLeft||t.body.scrollLeft,n+=t.documentElement.scrollTop||t.body.scrollTop,{left:r,top:n}};s.style.overflow="hidden";const t=e(n).left-e(s).left;o.left=-t+(s.clientWidth-a.clientWidth)/2+"px",o.top=-l+"px"}},hideDetail:e=>{e.target.querySelector(".popup-window-wrapper").style.display="none"}}};var h=Object(r.defineComponent)({setup(e,t){const o=Object(s.b)(),{popupWindowStyle:n,showDetail:a,hideDetail:i}=g();return{dataAddColor:Object(r.computed)(()=>{const{friendLink:e=[]}=o&&o.$themeConfig;return e.map(e=>(e.color=Object(m.b)(),e))}),popupWindowStyle:n,showDetail:a,hideDetail:i,getImgUrl:e=>{const{logo:t="",email:r=""}=e;return t&&/^http/.test(t)?t:t&&!/^http/.test(t)?o.$withBase(t):`//1.gravatar.com/avatar/${d()(r||"")}?s=50&amp;d=mm&amp;r=x`}}}}),f=(o(399),Object(c.a)(h,(function(){var e=this,t=e._self._c;e._self._setupProxy;return t("div",{staticClass:"friend-link-wrapper"},e._l(e.dataAddColor,(function(o,r){return t("div",{key:r,staticClass:"friend-link-item",attrs:{target:"_blank"},on:{mouseenter:function(t){return e.showDetail(t)},mouseleave:function(t){return e.hideDetail(t)}}},[t("span",{staticClass:"list-style",style:{backgroundColor:o.color}}),e._v("\n    "+e._s(o.title)+"\n    "),t("transition",{attrs:{name:"fade"}},[t("div",{staticClass:"popup-window-wrapper"},[t("div",{ref:"popupWindow",refInFor:!0,staticClass:"popup-window",style:e.popupWindowStyle},[t("div",{staticClass:"logo"},[t("img",{attrs:{src:e.getImgUrl(o)}})]),e._v(" "),t("div",{staticClass:"info"},[t("div",{staticClass:"title"},[t("h4",[e._v(e._s(o.title))]),e._v(" "),t("a",{staticClass:"btn-go",style:{backgroundColor:o.color},attrs:{href:o.link,target:"_blank"}},[e._v("GO")])]),e._v(" "),o.desc?t("p",[e._v(e._s(o.desc))]):e._e()])])])])],1)})),0)}),[],!1,null,"120fcf04",null).exports),v=o(334),_=o(373),b=Object(r.defineComponent)({components:{NoteAbstract:v.a,TagList:u.a,FriendLink:f,ModuleTransition:a.a,PersonalInfo:_.a,RecoIcon:a.b},setup(e,t){const n=Object(s.b)(),a=Object(r.reactive)({recoShow:!1,heroHeight:0}),i=Object(s.c)(),c=Object(r.computed)(()=>n.$frontmatter.heroImageStyle||{}),l=Object(r.computed)(()=>{const e={textAlign:"center",overflow:"hidden",background:`url(${n.$frontmatter.bgImage?n.$withBase(n.$frontmatter.bgImage):o(400)}) center/cover no-repeat`},{bgImageStyle:t}=n.$frontmatter;return t?{...e,...t}:e});return Object(r.onMounted)(()=>{a.heroHeight=document.querySelector(".hero").clientHeight,a.recoShow=!0}),{recoShowModule:i,heroImageStyle:c,bgImageStyle:l,...Object(r.toRefs)(a),getOneColor:m.b}},methods:{paginationChange(e){setTimeout(()=>{window.scrollTo(0,this.heroHeight)},100)},getPagesByTags(e){this.$router.push({path:e.path})}}}),C=(o(401),Object(c.a)(b,(function(){var e=this,t=e._self._c;e._self._setupProxy;return t("div",{staticClass:"home-blog"},[t("div",{staticClass:"hero",style:{...e.bgImageStyle}},[t("div",[t("ModuleTransition",[e.recoShowModule&&e.$frontmatter.heroImage?t("img",{staticClass:"hero-img",style:e.heroImageStyle||{},attrs:{src:e.$withBase(e.$frontmatter.heroImage),alt:"hero"}}):e._e()]),e._v(" "),t("ModuleTransition",{attrs:{delay:"0.04"}},[e.recoShowModule&&null!==e.$frontmatter.heroText?t("h1",[e._v("\n          "+e._s(e.$frontmatter.heroText||e.$title||"vuePress-theme-reco")+"\n        ")]):e._e()]),e._v(" "),t("ModuleTransition",{attrs:{delay:"0.08"}},[e.recoShowModule&&null!==e.$frontmatter.tagline?t("p",{staticClass:"description"},[e._v("\n          "+e._s(e.$frontmatter.tagline||e.$description||"Welcome to your vuePress-theme-reco site")+"\n        ")]):e._e()])],1)]),e._v(" "),t("ModuleTransition",{attrs:{delay:"0.16"}},[t("div",{directives:[{name:"show",rawName:"v-show",value:e.recoShowModule,expression:"recoShowModule"}],staticClass:"home-blog-wrapper"},[t("div",{staticClass:"blog-list"},[t("note-abstract",{attrs:{data:e.$recoPosts},on:{paginationChange:e.paginationChange}})],1),e._v(" "),t("div",{staticClass:"info-wrapper"},[t("PersonalInfo"),e._v(" "),t("h4",[t("reco-icon",{attrs:{icon:"reco-category"}}),e._v(" "+e._s(e.$recoLocales.category))],1),e._v(" "),t("ul",{staticClass:"category-wrapper"},e._l(this.$categories.list,(function(o,r){return t("li",{key:r,staticClass:"category-item"},[t("router-link",{attrs:{to:o.path}},[t("span",{staticClass:"category-name"},[e._v(e._s(o.name))]),e._v(" "),t("span",{staticClass:"post-num",style:{backgroundColor:e.getOneColor()}},[e._v(e._s(o.pages.length))])])],1)})),0),e._v(" "),t("hr"),e._v(" "),0!==e.$tags.list.length?t("h4",[t("reco-icon",{attrs:{icon:"reco-tag"}}),e._v(" "+e._s(e.$recoLocales.tag))],1):e._e(),e._v(" "),t("TagList",{on:{getCurrentTag:e.getPagesByTags}}),e._v(" "),e.$themeConfig.friendLink&&0!==e.$themeConfig.friendLink.length?t("h4",[t("reco-icon",{attrs:{icon:"reco-friend"}}),e._v(" "+e._s(e.$recoLocales.friendLink))],1):e._e(),e._v(" "),t("FriendLink")],1)])]),e._v(" "),t("ModuleTransition",{attrs:{delay:"0.24"}},[t("Content",{directives:[{name:"show",rawName:"v-show",value:e.recoShowModule,expression:"recoShowModule"}],staticClass:"home-center",attrs:{custom:""}})],1)],1)}),[],!1,null,null,null).exports),w=o(330),$=o(16),y=Object(r.defineComponent)({setup(e,t){const o=Object(s.b)();return{headers:Object(r.computed)(()=>o.$showSubSideBar?o.$page.headers:[]),isLinkActive:e=>{const t=Object($.e)(o.$route,o.$page.path+"#"+e.slug);return t&&setTimeout(()=>{document.querySelector(".reco-side-"+e.slug).scrollIntoView()},300),t}}},render(e){return e("ul",{class:{"sub-sidebar-wrapper":!0},style:{width:this.headers.length>0?"12rem":"0"}},[...this.headers.map(t=>e("li",{class:{active:this.isLinkActive(t),["level-"+t.level]:!0},attr:{key:t.title}},[e("router-link",{class:{"sidebar-link":!0,["reco-side-"+t.slug]:!0},props:{to:`${this.$page.path}#${t.slug}`}},t.title)]))])}}),O=(o(402),Object(c.a)(y,void 0,void 0,!1,null,"ac050c62",null).exports);function S(e,t,o){const r=[];!function e(t,o){for(let r=0,n=t.length;r<n;r++)"group"===t[r].type?e(t[r].children||[],o):o.push(t[r])}(t,r);for(let t=0;t<r.length;t++){const n=r[t];if("page"===n.type&&n.path===decodeURIComponent(e.path))return r[t+o]}}var j=Object(r.defineComponent)({components:{PageInfo:w.a,SubSidebar:O},props:["sidebarItems"],setup(e,t){const o=Object(s.b)(),{sidebarItems:n}=Object(r.toRefs)(e),a=Object(s.c)(),i=Object(r.computed)(()=>{const{isShowComments:e}=o.$frontmatter,{showComment:t}=o.$themeConfig.valineConfig||{showComment:!0};return!1!==t&&!1!==e||!1===t&&!0===e}),c=Object(r.computed)(()=>{const{$themeConfig:{valineConfig:e},$themeLocaleConfig:{valineConfig:t}}=o||{},r=t||e;return r&&0!=r.visitor}),l=Object(r.computed)(()=>!1!==o.$themeConfig.lastUpdated&&o.$page.lastUpdated),u=Object(r.computed)(()=>"string"==typeof o.$themeLocaleConfig.lastUpdated?o.$themeLocaleConfig.lastUpdated:"string"==typeof o.$themeConfig.lastUpdated?o.$themeConfig.lastUpdated:"Last Updated"),p=Object(r.computed)(()=>{const e=o.$frontmatter.prev;return!1===e?void 0:e?Object($.k)(o.$site.pages,e,o.$route.path):(t=o.$page,r=n.value,S(t,r,-1));var t,r}),d=Object(r.computed)(()=>{const e=o.$frontmatter.next;return!1===d?void 0:e?Object($.k)(o.$site.pages,e,o.$route.path):(t=o.$page,r=n.value,S(t,r,1));var t,r}),m=Object(r.computed)(()=>{if(!1===o.$frontmatter.editLink)return!1;const{repo:e,editLinks:t,docsDir:r="",docsBranch:n="master",docsRepo:a=e}=o.$themeConfig;return a&&t&&o.$page.relativePath?function(e,t,o,r,n){if(/bitbucket.org/.test(e)){return($.i.test(t)?t:e).replace($.c,"")+"/src"+`/${r}/`+(o?o.replace($.c,"")+"/":"")+n+`?mode=edit&spa=0&at=${r}&fileviewer=file-view-default`}return($.i.test(t)?t:"https://github.com/"+t).replace($.c,"")+"/edit"+`/${r}/`+(o?o.replace($.c,"")+"/":"")+n}(e,a,r,n,o.$page.relativePath):""}),g=Object(r.computed)(()=>o.$themeLocaleConfig.editLinkText||o.$themeConfig.editLinkText||"Edit this page"),h=Object(r.computed)(()=>o.$showSubSideBar?{}:{paddingRight:"0"});return{recoShowModule:a,shouldShowComments:i,showAccessNumber:c,lastUpdated:l,lastUpdatedText:u,prev:p,next:d,editLink:m,editLinkText:g,pageStyle:h}}}),k=(o(403),Object(c.a)(j,(function(){var e=this,t=e._self._c;e._self._setupProxy;return t("main",{staticClass:"page",style:e.pageStyle},[t("section",{directives:[{name:"show",rawName:"v-show",value:e.recoShowModule,expression:"recoShowModule"}]},[t("div",{staticClass:"page-title"},[t("h1",{staticClass:"title"},[e._v(e._s(e.$page.title))]),e._v(" "),t("PageInfo",{attrs:{pageInfo:e.$page,showAccessNumber:e.showAccessNumber}})],1),e._v(" "),t("Content",{staticClass:"theme-reco-content"})],1),e._v(" "),e.recoShowModule?t("footer",{staticClass:"page-edit"},[e.editLink?t("div",{staticClass:"edit-link"},[t("a",{attrs:{href:e.editLink,target:"_blank",rel:"noopener noreferrer"}},[e._v(e._s(e.editLinkText))]),e._v(" "),t("OutboundLink")],1):e._e(),e._v(" "),e.lastUpdated?t("div",{staticClass:"last-updated"},[t("span",{staticClass:"prefix"},[e._v(e._s(e.lastUpdatedText)+": ")]),e._v(" "),t("span",{staticClass:"time"},[e._v(e._s(e.lastUpdated))])]):e._e()]):e._e(),e._v(" "),e.recoShowModule&&(e.prev||e.next)?t("div",{staticClass:"page-nav"},[t("p",{staticClass:"inner"},[e.prev?t("span",{staticClass:"prev"},[e.prev?t("router-link",{staticClass:"prev",attrs:{to:e.prev.path}},[e._v("\n          "+e._s(e.prev.title||e.prev.path)+"\n        ")]):e._e()],1):e._e(),e._v(" "),e.next?t("span",{staticClass:"next"},[e.next?t("router-link",{attrs:{to:e.next.path}},[e._v("\n          "+e._s(e.next.title||e.next.path)+"\n        ")]):e._e()],1):e._e()])]):e._e(),e._v(" "),e.recoShowModule?t("Comments",{attrs:{isShowComments:e.shouldShowComments}}):e._e(),e._v(" "),e.recoShowModule?t("SubSidebar",{staticClass:"side-bar"}):e._e()],1)}),[],!1,null,null,null).exports),x=o(404),I=Object(r.defineComponent)({components:{RecoIcon:a.b},setup(e,t){const o=Object(s.b)(),n=Object(r.computed)(()=>{var e,t;const r=null==o||null===(e=o.$themeConfig)||void 0===e?void 0:e.valineConfig,n=(null==o||null===(t=o.$themeLocaleConfig)||void 0===t?void 0:t.valineConfig)||r;return n&&0!=n.visitor});return{version:x.a,showAccessNumber:n}}}),P=(o(405),Object(c.a)(I,(function(){var e=this,t=e._self._c;e._self._setupProxy;return t("div",{staticClass:"footer-wrapper"},[t("span",[t("reco-icon",{attrs:{icon:"reco-theme"}}),e._v(" "),t("a",{attrs:{target:"blank",href:"https://vuepress-theme-reco.recoluan.com"}},[e._v(e._s("vuepress-theme-reco@"+e.version))])],1),e._v(" "),e.$themeConfig.record?t("span",[t("reco-icon",{attrs:{icon:"reco-beian"}}),e._v(" "),t("a",{attrs:{href:e.$themeConfig.recordLink||"#"}},[e._v(e._s(e.$themeConfig.record))])],1):e._e(),e._v(" "),t("span",[t("reco-icon",{attrs:{icon:"reco-copyright"}}),e._v(" "),t("a",[e.$themeConfig.author?t("span",[e._v(e._s(e.$themeConfig.author))]):e._e(),e._v("\n        \n      "),e.$themeConfig.startYear&&e.$themeConfig.startYear!=(new Date).getFullYear()?t("span",[e._v(e._s(e.$themeConfig.startYear)+" - ")]):e._e(),e._v("\n      "+e._s((new Date).getFullYear())+"\n    ")])],1),e._v(" "),t("span",{directives:[{name:"show",rawName:"v-show",value:e.showAccessNumber,expression:"showAccessNumber"}]},[t("reco-icon",{attrs:{icon:"reco-eye"}}),e._v(" "),t("AccessNumber",{attrs:{idVal:"/"}})],1),e._v(" "),e.$themeConfig.cyberSecurityRecord?t("p",{staticClass:"cyber-security"},[t("img",{attrs:{src:"https://img.alicdn.com/tfs/TB1..50QpXXXXX7XpXXXXXXXXXX-40-40.png",alt:""}}),e._v(" "),t("a",{attrs:{href:e.$themeConfig.cyberSecurityLink||"#"}},[e._v(e._s(e.$themeConfig.cyberSecurityRecord))])]):e._e(),e._v(" "),t("Comments",{attrs:{isShowComments:!1}})],1)}),[],!1,null,"29dae040",null).exports),T=o(337),M=Object(r.defineComponent)({components:{HomeBlog:C,Home:l,Page:k,Common:T.a,Footer:P,ModuleTransition:a.a},setup(e,t){const o=Object(s.b)(),n=Object(r.computed)(()=>{const{$page:e,$site:t,$localePath:r}=o;return e?Object($.l)(e,e.regularPath,t,r):[]}),a=Object(r.computed)(()=>{const{type:e}=o.$themeConfig||{};return e?"blog"==e?"HomeBlog":e:"Home"}),i=Object(r.ref)(!1);Object(r.onMounted)(()=>{i.value=!0});const c=Object(r.computed)(()=>null==o?void 0:o.$page.path);return{sidebarItems:n,homeCom:a,show:i,path:c}}}),L=(o(406),o(407),Object(c.a)(M,(function(){var e=this,t=e._self._c;e._self._setupProxy;return t("Common",{attrs:{sidebarItems:e.sidebarItems,showModule:e.show}},[e.$frontmatter.home?t(e.homeCom,{tag:"component"}):t("div",[e.sidebarItems.length>0?t("ModuleTransition",[t("Page",{key:e.path,attrs:{"sidebar-items":e.sidebarItems}})],1):t("Page",{key:e.path,attrs:{"sidebar-items":e.sidebarItems}})],1),e._v(" "),e.$frontmatter.home?t("Footer",{staticClass:"footer"}):e._e()],1)}),[],!1,null,null,null));t.default=L.exports}}]);