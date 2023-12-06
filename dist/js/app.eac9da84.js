(function(){"use strict";var e={6175:function(e,s,a){var t=a(9242),r=a(3396);const i={id:"app"},o={class:"users-section"},n={class:"chat-section"},c={class:"profile-section"};function l(e,s,a,t,l,m){const d=(0,r.up)("Users"),g=(0,r.up)("Chat"),u=(0,r.up)("Profile");return(0,r.wg)(),(0,r.iD)("div",i,[(0,r._)("div",o,[(0,r.Wm)(d,{onUserSelected:m.setActiveUser},null,8,["onUserSelected"])]),(0,r._)("div",n,[(0,r.Wm)(g,{activeUserData:l.activeUserData},null,8,["activeUserData"])]),(0,r._)("div",c,[(0,r.Wm)(u,{name:l.activeUserData.name,role:l.activeUserData.role,imgUrl:l.activeUserData.imgUrl},null,8,["name","role","imgUrl"])])])}const m={class:"users"},d={class:"users-top"},g={class:"users-list"};function u(e,s,a,t,i,o){const n=(0,r.up)("Account"),c=(0,r.up)("Search"),l=(0,r.up)("User");return(0,r.wg)(),(0,r.iD)("div",m,[(0,r._)("div",d,[(0,r.Wm)(n,{class:"account"}),(0,r.Wm)(c,{searchText:"Search Friends",onSearchValue:o.passValue},null,8,["onSearchValue"])]),(0,r._)("div",g,[(0,r.Wm)(l,{onUserSelected:o.setActiveUser,searchValue:i.searchValue},null,8,["onUserSelected","searchValue"])])])}var h=a(7139),p=a.p+"img/edit-icon.a9230451.svg";const v=e=>((0,r.dD)("data-v-785742e2"),e=e(),(0,r.Cn)(),e),f={class:"account"},M={class:"details"},w={class:"name"},y={class:"role"},_=v((()=>(0,r._)("img",{src:p,alt:""},null,-1)));function U(e,s,a,t,i,o){const n=(0,r.up)("Dp");return(0,r.wg)(),(0,r.iD)("div",f,[(0,r.Wm)(n,{imgUrl:i.account.imgUrl,imgWidth:i.account.imgWidth,imgHeight:i.account.imgHeight},null,8,["imgUrl","imgWidth","imgHeight"]),(0,r._)("div",M,[(0,r._)("p",w,(0,h.zw)(i.account.name),1),(0,r._)("p",y,(0,h.zw)(i.account.role),1)]),_])}const b=["src","width","height"];function D(e,s,a,t,i,o){return(0,r.wg)(),(0,r.iD)("img",{src:a.imgUrl,alt:"",width:a.imgWidth,height:a.imgHeight},null,8,b)}var I={props:["imgUrl","imgWidth","imgHeight"]},H=a(89);const W=(0,H.Z)(I,[["render",D],["__scopeId","data-v-c8fa7b92"]]);var k=W,T=a.p+"img/account-dp.a1272d98.png",V=a.p+"img/user-1.8e42960d.jpg",A=a.p+"img/user-2.238bd257.jpg",C=a.p+"img/user-3.767386ac.jpg",S=a.p+"img/user-4.e405997a.jpg",x=a.p+"img/user-5.ef35c4b0.jpg",j=a.p+"img/user-6.8f7a6eb9.jpg";const z={name:"Gravid Cristofer",role:"Senior Developer",imgUrl:T,imgWidth:"60",imgHeight:"60"},P=V,O=[{id:"user1",name:"Alice Johnson",role:"Software Engineer",lastMsgTime:"online",unreadMsgs:2,imgUrl:V,chatHistory:[{message:"We've completed phase 2, moving to phase 3.",fromMe:!1},{message:"Great news! We won the new project contract.",fromMe:!0},{message:"Let's celebrate the success!",fromMe:!1}]},{id:"user2",name:"John Smith",role:"Product Manager",lastMsgTime:"11:15AM",unreadMsgs:1,imgUrl:A,chatHistory:[{message:"Hello!",fromMe:!0},{message:"Hi there!",fromMe:!1},{message:"How's your day going?",fromMe:!0},{message:"It's been pretty good. Thanks for asking!",fromMe:!1},{message:"What are your plans for the weekend?",fromMe:!0},{message:"I'm thinking about going for a hike. How about you?",fromMe:!1},{message:"That sounds like a great idea! I might catch up on some reading.",fromMe:!0},{message:"Reading is always a good choice. Any book recommendations?",fromMe:!1},{message:"I recently read 'The Silent Patient.' It's a gripping thriller!",fromMe:!0},{message:"I'll add it to my reading list. Thanks for the suggestion!",fromMe:!1},{message:"You're welcome! Enjoy your weekend!",fromMe:!0},{message:"You too! Have a great one!",fromMe:!1},{message:"Hello!",fromMe:!0},{message:"Hi there!",fromMe:!1},{message:"How can I help you?",fromMe:!0},{message:"I just wanted to say hi and chat for a bit.",fromMe:!1},{message:"What's your favorite type of music?",fromMe:!0},{message:"I love listening to rock music. How about you?",fromMe:!1},{message:"I enjoy a variety of genres, but I'm a fan of jazz and blues.",fromMe:!0},{message:"Nice! Do you play any musical instruments?",fromMe:!1},{message:"Yes, I play the guitar. How about you?",fromMe:!0},{message:"I dabble in piano and drums. Music is a great way to relax.",fromMe:!1},{message:"I couldn't agree more. It's a universal language.",fromMe:!0},{message:"Hello!",fromMe:!0},{message:"Hi there!",fromMe:!1},{message:"How can I help you?",fromMe:!0},{message:"I'm just checking in to see how you're doing.",fromMe:!1},{message:"I appreciate your concern. I'm doing well, thank you!",fromMe:!0},{message:"That's great to hear! If you have any questions or need assistance, feel free to ask.",fromMe:!1},{message:"Will do. Thanks for being so helpful!",fromMe:!0},{message:"You're welcome! Have a fantastic day!",fromMe:!1}]},{id:"user3",name:"Emma Davis",role:"UI/UX Designer",lastMsgTime:"online",unreadMsgs:3,imgUrl:C,chatHistory:[{message:"Please review the proposal I sent you.",fromMe:!1},{message:"We received positive feedback from the client.",fromMe:!0},{message:"I'll schedule a team-building event soon.",fromMe:!1},{message:"What's the status of the project?",fromMe:!0}]},{id:"user4",name:"William Brown",role:"Frontend Developer",lastMsgTime:"10:10AM",unreadMsgs:0,imgUrl:S,chatHistory:[{message:"I have a question about the project.",fromMe:!1},{message:"Sure, go ahead.",fromMe:!0},{message:"I was wondering about the deadline.",fromMe:!1},{message:"Hey, are you available for a quick chat?",fromMe:!0}]},{id:"user5",name:"Olivia Taylor",role:"Marketing Specialist",lastMsgTime:"1:20AM",unreadMsgs:0,imgUrl:x,chatHistory:[{message:"I've reviewed the latest design drafts.",fromMe:!1}]},{id:"user6",name:"James Wilson",role:"QA Engineer",lastMsgTime:"online",unreadMsgs:2,imgUrl:j,chatHistory:[{message:"The new design looks great!",fromMe:!0},{message:"Could you help with the CSS issue?",fromMe:!1}]},{id:"user7",name:"Sophia White",role:"Data Analyst",lastMsgTime:"4:50PM",unreadMsgs:0,imgUrl:V,chatHistory:[{message:"The campaign results are in.",fromMe:!0},{message:"Found a few bugs in the latest build.",fromMe:!1}]},{id:"user8",name:"Alexander Anderson",role:"Content Writer",lastMsgTime:"online",unreadMsgs:1,imgUrl:A,chatHistory:[{message:"Data report is ready for review.",fromMe:!0},{message:"Working on the new blog post.",fromMe:!1},{message:"Reviewing the new graphic design.",fromMe:!0}]},{id:"user9",name:"Ava Thomas",role:"Graphic Designer",lastMsgTime:"2:10PM",unreadMsgs:0,imgUrl:C,chatHistory:[{message:"Deploying the latest build to production.",fromMe:!1},{message:"Dealing with customer inquiries.",fromMe:!0}]},{id:"user10",name:"Noah Hall",role:"DevOps Engineer",lastMsgTime:"4:15AM",unreadMsgs:2,imgUrl:S,chatHistory:[{message:"Server maintenance is scheduled.",fromMe:!1},{message:"I have some new data to share.",fromMe:!0}]},{id:"user11",name:"Mia Lewis",role:"Customer Support",lastMsgTime:"3:20PM",unreadMsgs:1,imgUrl:x,chatHistory:[{message:"What's the agenda for the meeting?",fromMe:!1},{message:"Let's discuss the budget for the next quarter.",fromMe:!0},{message:"I'll send you the updated report shortly.",fromMe:!1}]},{id:"user12",name:"Liam Martinez",role:"System Administrator",lastMsgTime:"12:30PM",unreadMsgs:0,imgUrl:j,chatHistory:[{message:"Do you need help with the presentation?",fromMe:!0}]}];var Z={data(){return{account:z}},components:{Dp:k}};const L=(0,H.Z)(Z,[["render",U],["__scopeId","data-v-785742e2"]]);var E=L,F=a.p+"img/check-icon.d53ca6dc.svg";const Y=["onClick"],q={class:"user-details"},K={class:"user-details-left"},G={class:"user-name"},J={class:"user-lastMsg"},$={class:"user-details-right"},N={key:0,class:"unread-msgs"},R={key:1,src:F,alt:"",width:"14"};function B(e,s,a,t,i,o){const n=(0,r.up)("Dp");return(0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)(o.filteredUsers,(e=>((0,r.wg)(),(0,r.iD)("div",{class:"user",key:e.id,onClick:s=>o.activeUser(e.id)},[(0,r.Wm)(n,{imgUrl:e.imgUrl,imgWidth:"50",imgHeight:"50"},null,8,["imgUrl"]),(0,r._)("div",q,[(0,r._)("div",K,[(0,r._)("p",G,(0,h.zw)(e.name),1),(0,r._)("p",J,(0,h.zw)(e.chatHistory[e.chatHistory.length-1].message||""),1)]),(0,r._)("div",$,[(0,r._)("span",{class:(0,h.C_)(["last-msg-time","online"===e.lastMsgTime?"green-colored":""])},(0,h.zw)(e.lastMsgTime),3),0!=e.unreadMsgs&&null!=e.unreadMsgs?((0,r.wg)(),(0,r.iD)("div",N,(0,h.zw)(e.unreadMsgs),1)):((0,r.wg)(),(0,r.iD)("img",R))])])],8,Y)))),128)}var Q={data(){return{users:O,activeUserId:"user1"}},props:["searchValue"],components:{Dp:k},methods:{activeUser(e){this.activeUserId=e,this.$emit("user-selected",e)}},computed:{filteredUsers(){return this.users.filter((e=>e.name.toLowerCase().includes(this.searchValue.toLowerCase())))}}};const X=(0,H.Z)(Q,[["render",B],["__scopeId","data-v-db487766"]]);var ee=X,se=a.p+"img/search-icon.de9e23ad.svg";const ae=e=>((0,r.dD)("data-v-060b53cb"),e=e(),(0,r.Cn)(),e),te={class:"search"},re=ae((()=>(0,r._)("img",{class:"search-icon",src:se,alt:""},null,-1))),ie=["placeholder"];function oe(e,s,a,i,o,n){return(0,r.wg)(),(0,r.iD)("div",te,[re,(0,r.wy)((0,r._)("input",{type:"text",placeholder:a.searchText,"onUpdate:modelValue":s[0]||(s[0]=e=>o.searchValue=e),onKeyup:s[1]||(s[1]=(...e)=>n.passValue&&n.passValue(...e))},null,40,ie),[[t.nr,o.searchValue]])])}var ne={props:["searchText"],data(){return{searchValue:""}},methods:{passValue(){this.$emit("search-value",this.searchValue)}}};const ce=(0,H.Z)(ne,[["render",oe],["__scopeId","data-v-060b53cb"]]);var le=ce,me={data(){return{searchValue:""}},components:{Account:E,User:ee,Search:le},methods:{setActiveUser(e){this.$emit("user-selected",e)},passValue(e){this.searchValue=e}}};const de=(0,H.Z)(me,[["render",u],["__scopeId","data-v-5c869030"]]);var ge=de,ue=a.p+"img/favorite-icon.7be1eb88.svg",he=a.p+"img/bell-icon.9e3ec5d3.svg",pe=a.p+"img/mic-icon.86f472c8.svg",ve=a.p+"img/attachment-icon.9433c389.svg",fe=a.p+"img/camera-icon.e0d95c7f.svg",Me=a.p+"img/emoji-icon.ff5c3414.svg",we=a.p+"img/send-icon.deff9b6f.svg";const ye=e=>((0,r.dD)("data-v-7d462cc9"),e=e(),(0,r.Cn)(),e),_e={class:"chat"},Ue={class:"chat-top"},be={class:"top-header-with-line"},De={class:"top-header"},Ie={class:"profile"},He=ye((()=>(0,r._)("div",{class:"icons"},[(0,r._)("img",{src:se,width:"25",alt:""}),(0,r._)("img",{src:ue,width:"20",alt:""}),(0,r._)("img",{src:he,width:"20",alt:""})],-1))),We={class:"chat-bottom"},ke={class:"send-msg"},Te={class:"send-msg-left"},Ve=ye((()=>(0,r._)("img",{class:"mic-icon",src:pe,alt:"",width:"20"},null,-1))),Ae={class:"send-msg-right"},Ce=ye((()=>(0,r._)("img",{class:"mic-icon",src:ve,alt:"",width:"20"},null,-1))),Se=ye((()=>(0,r._)("img",{class:"mic-icon",src:fe,alt:"",width:"20"},null,-1))),xe=ye((()=>(0,r._)("img",{class:"mic-icon",src:Me,alt:"",width:"20"},null,-1))),je=ye((()=>(0,r._)("img",{class:"mic-icon",src:we,alt:"",width:"40"},null,-1))),ze=[je];function Pe(e,s,a,i,o,n){const c=(0,r.up)("Dp"),l=(0,r.up)("Line"),m=(0,r.up)("Chatbox");return(0,r.wg)(),(0,r.iD)("div",_e,[(0,r._)("div",Ue,[(0,r._)("div",be,[(0,r._)("div",De,[(0,r._)("div",Ie,[(0,r.Wm)(c,{imgUrl:a.activeUserData.imgUrl,width:"40",height:"40"},null,8,["imgUrl"]),(0,r._)("p",null,(0,h.zw)(a.activeUserData.name),1),(0,r._)("div",{class:(0,h.C_)(["online-status","online"===a.activeUserData.lastMsgTime?"green-colored":""])},null,2)]),He]),(0,r.Wm)(l,{class:"top-header-line"})]),(0,r.Wm)(m,{chatHistory:a.activeUserData.chatHistory},null,8,["chatHistory"])]),(0,r._)("div",We,[(0,r.Wm)(l),(0,r._)("div",ke,[(0,r._)("div",Te,[Ve,(0,r.wy)((0,r._)("input",{type:"text",placeholder:"Write Something","onUpdate:modelValue":s[0]||(s[0]=e=>o.searchValue=e),onKeyup:s[1]||(s[1]=(0,t.D2)(((...e)=>n.sendMsg&&n.sendMsg(...e)),["enter"]))},null,544),[[t.nr,o.searchValue]])]),(0,r._)("div",Ae,[Ce,Se,xe,(0,r._)("div",{class:"send-button",onClick:s[2]||(s[2]=(...e)=>n.sendMsg&&n.sendMsg(...e))},ze)])])])])}a(560);const Oe={class:"line"};function Ze(e,s,a,t,i,o){return(0,r.wg)(),(0,r.iD)("div",Oe)}var Le={};const Ee=(0,H.Z)(Le,[["render",Ze],["__scopeId","data-v-eac2c6c4"]]);var Fe=Ee;const Ye={class:"chat-box"};function qe(e,s,a,t,i,o){const n=(0,r.up)("Msg");return(0,r.wg)(),(0,r.iD)("div",Ye,[((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)(a.chatHistory,((e,s)=>((0,r.wg)(),(0,r.iD)("div",{key:s},[(0,r.Wm)(n,{chat:e},null,8,["chat"])])))),128))])}function Ke(e,s,a,t,i,o){return(0,r.wg)(),(0,r.iD)("div",{class:(0,h.C_)(["msg",a.chat.fromMe?"msg-end":""])},[(0,r._)("p",{class:(0,h.C_)(a.chat.fromMe?"my-msg":"user-msg")},(0,h.zw)(a.chat.message),3)],2)}var Ge={props:["chat"]};const Je=(0,H.Z)(Ge,[["render",Ke],["__scopeId","data-v-604df88f"]]);var $e=Je,Ne={props:{chatHistory:Array},components:{Msg:$e}};const Re=(0,H.Z)(Ne,[["render",qe],["__scopeId","data-v-619e6360"]]);var Be=Re,Qe={data(){return{searchValue:""}},props:["activeUserData"],components:{Dp:k,Line:Fe,Search:le,Chatbox:Be},methods:{sendMsg(){""!==this.searchValue.trim()&&this.activeUserData.chatHistory.push({message:this.searchValue.trim(),fromMe:!0}),this.searchValue=""}}};const Xe=(0,H.Z)(Qe,[["render",Pe],["__scopeId","data-v-7d462cc9"]]);var es=Xe,ss=a.p+"img/profile-icon.14770e0b.svg";const as=e=>((0,r.dD)("data-v-67db6d26"),e=e(),(0,r.Cn)(),e),ts={class:"profile"},rs={class:"name"},is={class:"role"},os={class:"icons"},ns={class:"chat-icon"},cs={class:"video-icon"},ls=(0,r.uE)('<div class="friends" data-v-67db6d26><img src="'+ss+'" alt="" width="16" data-v-67db6d26><p data-v-67db6d26>View Friends</p></div><div class="favorite" data-v-67db6d26><img src="'+ue+'" alt="" width="16" data-v-67db6d26><p data-v-67db6d26>Add to Favorite</p></div><p class="attachments-text" data-v-67db6d26>Attachments</p>',3),ms={class:"attachments"},ds=as((()=>(0,r._)("div",{class:"button"},"View All",-1)));function gs(e,s,a,t,i,o){const n=(0,r.up)("Search"),c=(0,r.up)("Dp"),l=(0,r.up)("Icon"),m=(0,r.up)("Attachment");return(0,r.wg)(),(0,r.iD)("div",ts,[(0,r.Wm)(n,{searchText:"Search People"}),(0,r.Wm)(c,{class:"main-profile-image",imgUrl:a.imgUrl,imgWidth:"110",imgHeight:"110"},null,8,["imgUrl"]),(0,r._)("p",rs,(0,h.zw)(a.name),1),(0,r._)("p",is,(0,h.zw)(a.role),1),(0,r._)("div",os,[(0,r._)("div",ns,[(0,r.Wm)(l,{imgUrl:i.chatIcon,service:"Chat"},null,8,["imgUrl"])]),(0,r._)("div",cs,[(0,r.Wm)(l,{imgUrl:i.videoIcon,service:"Video Call"},null,8,["imgUrl"])])]),ls,(0,r._)("div",ms,[(0,r.Wm)(m,{text:"PDF"}),(0,r.Wm)(m,{text:"Video"}),(0,r.Wm)(m,{text:"MP3"}),(0,r.Wm)(m,{text:"Image"})]),ds])}const us={class:"icon"},hs={class:"icon-img"},ps=["src"],vs={class:"service"};function fs(e,s,a,t,i,o){return(0,r.wg)(),(0,r.iD)("div",us,[(0,r._)("div",hs,[(0,r._)("img",{src:a.imgUrl,alt:""},null,8,ps)]),(0,r._)("p",vs,(0,h.zw)(a.service),1)])}var Ms={props:["imgUrl","service"]};const ws=(0,H.Z)(Ms,[["render",fs],["__scopeId","data-v-79855e98"]]);var ys=ws;const _s={class:"attachment"};function Us(e,s,a,t,i,o){return(0,r.wg)(),(0,r.iD)("div",_s,[(0,r._)("p",null,(0,h.zw)(a.text),1)])}var bs={props:["text"]};const Ds=(0,H.Z)(bs,[["render",Us],["__scopeId","data-v-ac379220"]]);var Is=Ds,Hs=a.p+"img/chat-icon.4c555c98.svg",Ws=a.p+"img/video-icon.59818b6a.svg",ks={data(){return{dummy:P,chatIcon:Hs,videoIcon:Ws}},props:["name","role","imgUrl"],components:{Search:le,Dp:k,Icon:ys,Attachment:Is}};const Ts=(0,H.Z)(ks,[["render",gs],["__scopeId","data-v-67db6d26"]]);var Vs=Ts,As={name:"App",data(){return{activeUserId:"user1",activeUserData:null,users:O}},components:{Users:ge,Chat:es,Profile:Vs},methods:{setActiveUser(e){this.activeUserId=e},calcActiveUserData(){this.activeUserData=O.find((e=>e.id===this.activeUserId))}},watch:{activeUserId:{handler(e,s){this.calcActiveUserData()},immediate:!0}}};const Cs=(0,H.Z)(As,[["render",l]]);var Ss=Cs;(0,t.ri)(Ss).mount("#app")}},s={};function a(t){var r=s[t];if(void 0!==r)return r.exports;var i=s[t]={exports:{}};return e[t].call(i.exports,i,i.exports,a),i.exports}a.m=e,function(){var e=[];a.O=function(s,t,r,i){if(!t){var o=1/0;for(m=0;m<e.length;m++){t=e[m][0],r=e[m][1],i=e[m][2];for(var n=!0,c=0;c<t.length;c++)(!1&i||o>=i)&&Object.keys(a.O).every((function(e){return a.O[e](t[c])}))?t.splice(c--,1):(n=!1,i<o&&(o=i));if(n){e.splice(m--,1);var l=r();void 0!==l&&(s=l)}}return s}i=i||0;for(var m=e.length;m>0&&e[m-1][2]>i;m--)e[m]=e[m-1];e[m]=[t,r,i]}}(),function(){a.n=function(e){var s=e&&e.__esModule?function(){return e["default"]}:function(){return e};return a.d(s,{a:s}),s}}(),function(){a.d=function(e,s){for(var t in s)a.o(s,t)&&!a.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:s[t]})}}(),function(){a.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){a.o=function(e,s){return Object.prototype.hasOwnProperty.call(e,s)}}(),function(){a.p="/"}(),function(){var e={143:0};a.O.j=function(s){return 0===e[s]};var s=function(s,t){var r,i,o=t[0],n=t[1],c=t[2],l=0;if(o.some((function(s){return 0!==e[s]}))){for(r in n)a.o(n,r)&&(a.m[r]=n[r]);if(c)var m=c(a)}for(s&&s(t);l<o.length;l++)i=o[l],a.o(e,i)&&e[i]&&e[i][0](),e[i]=0;return a.O(m)},t=self["webpackChunkmessaging_app"]=self["webpackChunkmessaging_app"]||[];t.forEach(s.bind(null,0)),t.push=s.bind(null,t.push.bind(t))}();var t=a.O(void 0,[998],(function(){return a(6175)}));t=a.O(t)})();
//# sourceMappingURL=app.eac9da84.js.map