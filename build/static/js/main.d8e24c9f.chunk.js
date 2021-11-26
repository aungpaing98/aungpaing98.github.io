(this.webpackJsonpportfolio=this.webpackJsonpportfolio||[]).push([[0],{98:function(n,e,t){"use strict";t.r(e);var r,i,o,a=t(54),c=t.n(a),s=t(24),d=t(14),l=t(1),p=t(13),u=t(10),h=t(12),b=Object(u.b)(r||(r=Object(h.a)(["\n    html{\n        background-color: ",";\n        display:flex;\n        justify-content: center;\n    }\n\n    body{\n        min-width: 390px;\n        width: min(628px, 90vw);\n    }\n\n    #root{\n        display:flex;\n        flex-direction: column;\n        align-items: center;\n    }\n\n    *, *::before, *::after{\n        padding: 0;\n        margin: 0;\n        font-family: 'Roboto', sans-serif;\n        box-sizing: border-box;\n        font-size: ",";\n        color: ",";\n    }\n\n    section{\n        min-height:141px;\n        /* width: 350px; */\n        margin-bottom: 22px;\n        border-radius: 10px;\n        background-color: ",";\n        box-shadow: ",";\n    }\n\n    a{\n        text-decoration:none;\n    }\n\n    h1{\n        font-size:",";\n        margin-bottom: 20px;\n    }\n    h2{\n        margin-bottom: 8px;\n    }\n\n    p, li{\n        color : ","\n    }\n\n    button{\n        cursor:pointer;\n    }\n"])),(function(n){return n.theme.background}),(function(n){return n.theme.nm}),(function(n){return n.theme.content}),(function(n){return n.theme.lightBlue}),(function(n){return n.dark?"5px 5px 1px rgba(200,200,200, 0.25)":"5px 5px 1px rgba(0, 0, 0, 0.25)"}),(function(n){return n.theme.lg}),(function(n){return n.theme.background})),x=t(100),j=t(6),m=u.c.nav(i||(i=Object(h.a)(["\n  width: 84%;\n  padding: 10px;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  position: sticky;\n  top: 0;\n  left: 0;\n  backdrop-filter: blur(2px);\n  z-index: 1;\n\n  div {\n    min-width: 22ch;\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n  }\n\n  button {\n    height: 28px;\n    width: 28px;\n    background-color: ",";\n    border: 0;\n    border-radius: 28px;\n\n    outline: 2px "," solid;\n    outline-offset: 0.2rem;\n  }\n\n  img {\n    height: 45px;\n  }\n\n  ul {\n    list-style: none;\n    display: flex;\n\n    li {\n      margin-left: 4px;\n      a {\n        border-radius: 4px;\n        padding: 8px;\n      }\n    }\n  }\n\n  .active {\n    background-color: ",";\n    color: ",";\n  }\n"])),(function(n){return n.theme.content}),(function(n){return n.theme.content}),(function(n){return n.theme.neon}),(function(n){return n.theme.dark}));function g(n){return Object(j.jsxs)(m,{children:[Object(j.jsx)(s.b,{to:"/",children:Object(j.jsx)(x.a.img,{whileHover:{scale:1.1,rotate:20},src:"".concat(n.dark?"/embeds/dark-logo.png":"/embeds/light-logo.png"),alt:"Aung Paing's Logo"})}),Object(j.jsxs)("div",{children:[Object(j.jsxs)(x.a.ul,{children:[Object(j.jsx)(x.a.li,{whileHover:{scale:1.1,rotate:10},children:Object(j.jsx)(s.c,{to:"/works",children:"Works"})}),Object(j.jsx)(x.a.li,{whileHover:{scale:1.1,rotate:10},children:Object(j.jsx)(s.c,{to:"/contact",children:"Contact"})})]}),Object(j.jsx)("button",{onClick:function(){n.setDark((function(n){return!n}))}})]})]})}var f=u.c.footer(o||(o=Object(h.a)(["\n  height: 48px;\n  width: 100vw;\n  background-color: ",";\n  color: ",";\n\n  font-size: 14px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n"])),(function(n){return n.theme.content}),(function(n){return n.theme.background}));function O(n){return Object(j.jsx)(f,{children:"This is Design by Aung Paing and created with React."})}var k,w,v=t(3),y=t(59),D=t(60),L=t(101),A=(u.c.svg(k||(k=Object(h.a)(["\n  animation: rotate 2s linear infinite;\n  margin: -25px 0 0 -25px;\n  width: 50px;\n  height: 50px;\n  \n  & .path {\n    stroke: #5652BF;\n    stroke-linecap: round;\n    animation: dash 1.5s ease-in-out infinite;\n  }\n  \n  @keyframes rotate {\n    100% {\n      transform: rotate(360deg);\n    }\n  }\n  @keyframes dash {\n    0% {\n      stroke-dasharray: 1, 150;\n      stroke-dashoffset: 0;\n    }\n    50% {\n      stroke-dasharray: 90, 150;\n      stroke-dashoffset: -35;\n    }\n    100% {\n      stroke-dasharray: 90, 150;\n      stroke-dashoffset: -124;\n    }\n  }\n"]))),u.c.section(w||(w=Object(h.a)(["\n  height: 300px;\n  width: 90%;\n\n  margin-top: 0;\n"])))),E=function(){Object(L.b)({OrbitControls:y.a});var n=Object(l.useRef)(),e=Object(L.d)(),t=e.camera,r=e.gl;return Object(L.c)((function(){n.current.update()})),Object(j.jsx)("orbitControls",{autoRotate:!0,args:[t,r.domElement],ref:n})},F=function(){var n=Object(l.useState)(null),e=Object(d.a)(n,2),t=e[0],r=e[1];return Object(l.useEffect)((function(){(new D.a).load("./scene.gltf",r)}),[]),t?Object(j.jsx)("primitive",{object:t.scene}):null};function M(){return Object(j.jsx)(A,{children:Object(j.jsxs)(L.a,{camera:{position:[0,200,300]},colorManagement:!0,onCreated:function(n){var e=n.gl;e.shadowMap.enabled=!0,e.shadowMap.type=v.PCFSoftShadowMap},children:[Object(j.jsx)("ambientLight",{}),Object(j.jsx)("spotLight",{position:[0,2,5],penumbra:1}),Object(j.jsx)(E,{}),Object(j.jsx)(F,{})]})})}var S,z,C,B={hidden:{opacity:0,y:50},animate:{opacity:1,y:0},transition:{duration:.8},exit:{opacity:0,y:50}},P=Object(u.c)(x.a.section)(S||(S=Object(h.a)(["\n  display: flex;\n  justify-content: space-around;\n  align-items: center;\n  width: max(84%, 350px);\n\n  img {\n    height: 100px;\n    width: 100px;\n    border: 3px solid black;\n    border-radius: 100px;\n  }\n\n  h1 {\n    font-size: ",";\n    color: ",";\n  }\n  h2 {\n    font-size: ",";\n    color: hsla(26, 29%, 30%, 1);\n  }\n"])),(function(n){return n.theme.xl}),(function(n){return n.theme.dark}),(function(n){return n.theme.lg}));function R(){return Object(j.jsxs)(P,{initial:"hidden",animate:"animate",transition:"transition",exit:"exit",variants:B,children:[Object(j.jsx)("div",{children:Object(j.jsx)("img",{src:"/embeds/profile.jpeg",alt:"Aung Paing's Portrait"})}),Object(j.jsxs)("div",{children:[Object(j.jsx)("h1",{children:"Aung Paing"}),Object(j.jsx)("h2",{children:"Software Developer"})]})]},"hero")}var I,T=Object(u.c)(x.a.div)(z||(z=Object(h.a)(["\n  height: 153px;\n  width: max(60%, 226px);\n  margin: 0 11px 0 15px;\n  background-color: ",";\n\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: flex-start;\n  align-items: center;\n  border: 1px solid gray;\n  border-radius: 8px;\n"])),(function(n){return n.theme.light})),W=u.c.div(C||(C=Object(h.a)(["\n  height: 30px;\n  margin: 0 4px;\n  padding: 0 10px;\n  text-align: center;\n  background-color: ",";\n  border-radius: 4px;\n\n  font-size: 16px;\n  display: flex;\n  align-items: center;\n\n  color: ",";\n  font-weight: bold;\n"])),(function(n){return n.theme.lightBlue}),(function(n){return n.theme.dark}));function Y(n){var e=n.skills;return Object(j.jsx)(T,{children:e.map((function(n,e){return Object(j.jsx)(W,{children:n},e)}))})}var H,J=Object(u.c)(x.a.div)(I||(I=Object(h.a)(["\n  height: 148px;\n  width: max(30%, 84px);\n\n  div:not(:first-child) {\n    margin-top: 17px;\n  }\n\n  button {\n    height: 38px;\n    width: max(90%, 84px);\n    background-color: ",";\n    border-radius: 6px;\n    border: 2px dashed ",";\n    box-shadow: 4px 4px 0px rgba(0, 0, 0, 0.25);\n\n    color: ",";\n  }\n"])),(function(n){return n.theme.neon}),(function(n){return n.theme.dark}),(function(n){return n.theme.dark}));function G(n){var e=n.setSkill,t=function(n){return function(){e(n)}};return Object(j.jsxs)(J,{children:[Object(j.jsx)("div",{children:Object(j.jsx)("button",{onClick:t("web"),children:"Web Dev"})}),Object(j.jsx)("div",{children:Object(j.jsx)("button",{onClick:t("ml"),children:"ML And DL"})}),Object(j.jsx)("div",{children:Object(j.jsx)("button",{onClick:t("others"),children:"Others"})})]})}var _,N=Object(u.c)(x.a.section)(H||(H=Object(h.a)(["\n  height: 190px;\n  width: max(84%, 350px);\n  display: flex;\n\n  justify-content: space-around;\n  align-items: center;\n"]))),V={web:["HTML","CSS","React","Bootstrap","JavaScript","Redux","Framer-Motion"],ml:["Python","Numpy","Pandas","Scikit-Learn","Keras","Tensorflow","Pytorch"],others:["Blender","Git & GitHub","English","Chinese","Burmese","Basketball","Jogging"]};function Z(){var n=Object(l.useState)("web"),e=Object(d.a)(n,2),t=e[0],r=e[1];return Object(j.jsxs)(N,{initial:"hidden",animate:"animate",transition:"transition",exit:"exit",variants:B,children:[Object(j.jsx)(Y,{skills:V[t]}),Object(j.jsx)(G,{setSkill:r})]},"skills")}function q(){return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)(M,{}),Object(j.jsx)(R,{}),Object(j.jsx)(Z,{})]})}var K,U=Object(u.c)(x.a.section)(_||(_=Object(h.a)(["\n  width: max(84%, 350px);\n  background-color: ",";\n  box-shadow: 0 0;\n  margin-top: 0.8rem;\n"])),(function(n){return n.theme.background}));function X(n){return Object(j.jsx)(U,{layout:!0,variants:B,initial:"hidden",animate:"animate",transition:"transition",exit:"exit",children:n.children})}var Q,$=u.c.div(K||(K=Object(h.a)(["\n  width: 88%;\n  background-color: ",";\n  margin-bottom: 22px;\n  border-radius: 10px;\n\n  p {\n    font-size: 16px;\n  }\n\n  h3 {\n    margin-bottom: 0.8rem;\n  }\n\n  .jobHead {\n    background-color: ",";\n    display: flex;\n    padding: 10px;\n    border-radius: 10px 10px 0 0;\n\n    * {\n      color: ",";\n    }\n\n    > div {\n      min-width: 78px;\n    }\n  }\n\n  .jobBody {\n    padding: 22px 22px 22px 26px;\n\n    li {\n      margin-bottom: 0.3rem;\n      color: ",";\n    }\n  }\n"])),(function(n){return n.theme.neon}),(function(n){return n.theme.dark}),(function(n){return n.theme.light}),(function(n){return n.theme.dark}));function nn(n){var e=n.exp;return Object(j.jsxs)($,{children:[Object(j.jsxs)("div",{className:"jobHead",children:[Object(j.jsxs)("div",{children:[Object(j.jsx)("p",{children:e.startDate}),Object(j.jsx)("p",{children:e.endDate})]}),Object(j.jsxs)("div",{children:[Object(j.jsx)("h3",{children:e.title}),Object(j.jsx)("p",{children:e.company})]})]}),Object(j.jsx)("div",{className:"jobBody",children:Object(j.jsx)("ul",{children:e.description.map((function(n,e){return Object(j.jsx)("li",{children:n},"".concat(e,"_card_"))}))})})]})}function en(n){var e=n.experiences;return Object(j.jsx)(j.Fragment,{children:e.map((function(n){return Object(j.jsx)(nn,{exp:n},n.id)}))})}var tn,rn=u.c.div(Q||(Q=Object(h.a)(["\n  width: max(90%, 325px);\n  margin: 0 auto;\n  padding-top: 22px;\n  background-color: ",";\n  border-radius: 10px;\n  box-shadow: 5px 5px 1px ",";\n\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n"])),(function(n){return n.theme.lightBlue}),(function(n){return n.theme.shadow}));function on(n){var e=n.experiences;return Object(j.jsxs)(X,{children:[Object(j.jsx)("h1",{children:"Experiences"}),Object(j.jsx)(rn,{children:Object(j.jsx)(en,{experiences:e})})]})}var an,cn=u.c.div(tn||(tn=Object(h.a)(["\n  height: 156px;\n  min-width: 156px;\n  border-radius: 10px;\n  box-shadow: 5px 4px 0px ",';\n  background-image: url("embeds/project1.jpg");\n  background-size: cover;\n\n  p {\n    color: black;\n  }\n\n  :nth-child(1) {\n    grid-column: span 2;\n  }\n  :nth-child(4) {\n    grid-column: span 2;\n  }\n'])),(function(n){return n.theme.shadow}));function sn(n){return Object(j.jsx)(cn,{children:n.children})}var dn=u.c.div(an||(an=Object(h.a)(["\n  display: grid;\n  gap: 1rem;\n  grid-template-columns: repeat(3, 1fr);\n\n  @media (max-width: 60ch) and (any-hover: none) and (any-pointer: coarse) {\n    grid-auto-flow: column;\n    grid-template-columns: unset;\n    overflow-x: auto;\n    scroll-snap-type: x mandatory;\n    padding-bottom: 1.25rem;\n\n    div {\n      scroll-snap-align: center;\n      scroll-snap-stop: always;\n    }\n  }\n"])));function ln(n){var e=n.projects;return Object(j.jsx)(dn,{children:e.map((function(n){return Object(j.jsx)(sn,{src:n.img,children:Object(j.jsx)("p",{children:"".concat(n.description)})},n.id)}))})}function pn(n){var e=n.projects;return Object(j.jsx)(j.Fragment,{children:Object(j.jsxs)(X,{children:[Object(j.jsx)("h1",{children:"Works"}),Object(j.jsx)(ln,{projects:e})]})})}function un(){return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)(pn,{projects:[{id:0,img:"project1.jpg",description:"Automatic Lane Detection"},{id:1,img:"project2.jpg",description:"Automatic Lane Detection"},{id:2,img:"project3.jpg",description:"Automatic Lane Detection"},{id:3,img:"project4.jpg",description:"Automatic Lane Detection"}]}),Object(j.jsx)(on,{experiences:[{id:"e4",startDate:"2021-10",endDate:"Present",title:"Lecturer for Software Development",company:"Lattwae Education",description:["Engage with up to 20 students in person.","Share information about modern web technology, programming language, machine learning and deep learning."]},{id:"e3",startDate:"2021-01",endDate:"2021-05",title:"Junior Machine Learning Engineer",company:"Omdena Global",description:["Participate as one of the collaborators of 55 members form 22 countries.","Built a Natural Language Processing models to perform scoring for news, articles, websites and news."]},{id:"e2",startDate:"2020-10-",endDate:"2021-01",title:"Teaching Assistant",company:"Computer Vision and Machine Learning Lab, Yangon Technological University",description:["Created Lesson Materials, visuals and digital presentations to supplement lesson plans.","Assisted teachers with classroom management and document coordination to maintain positive learning environment."]},{id:"e1",startDate:"2019-12-",endDate:"2020-02",title:"Machine Learning Internship",company:"Acroquest Myanmar Technology, Yangon",description:["Trained Machine Learning models for both supervised and unsupervised dataset with up to production level performance.","Re-implement and trained Image Classification and Segmentation models from company\u2019s client real world problem."]}]})]})}var hn,bn,xn,jn=t(45),mn=t.n(jn),gn=(t(97),u.c.div(hn||(hn=Object(h.a)(["\n  width: max(84%, 350px);\n  display: flex;\n  flex-direction: column;\n\n  h1 {\n    margin-top: 0.8rem;\n  }\n"])))),fn=u.c.div(bn||(bn=Object(h.a)(["\n  height: 300px;\n  width: max(100%, 330px);\n\n  z-index: 100;\n\n  margin-bottom: 22px;\n  border-radius: 10px;\n"]))),On=u.c.button(xn||(xn=Object(h.a)(["\n  height: 60px;\n  width: 300px;\n  border: 2px dashed black;\n  border-radius: 10px;\n  background-color: ",";\n  box-shadow: 4px 4px 0px ",";\n  margin: 0 0 0.8rem 0.8rem;\n\n  font-size: ",";\n  color: ",";\n\n  a {\n    font-weight: bold;\n    color: ",";\n  }\n"])),(function(n){return n.theme.neon}),(function(n){return n.theme.shadow}),(function(n){return n.theme.nm}),(function(n){return n.theme.dark}),(function(n){return n.theme.dark}));function kn(){var n=Object(l.useRef)();return mn.a.accessToken="pk.eyJ1IjoiYXVuZy1wYWluZyIsImEiOiJja3dhM2dxeWwwMWlnMnZxa2hpODY2YW92In0.0wz7DYkuY6c7kxypnVRzcw",Object(l.useEffect)((function(){var e=new mn.a.Map({container:n.current,style:"mapbox://styles/aung-paing/ckwa3ldy17dr916mpsgyct1v1",center:[96.09218571662913,21.934148530329352],zoom:12}),t={type:"FeatureCollection",features:[{type:"Feature",properties:{},geometry:{type:"Point",coordinates:[96.11218571662903,21.934148530329352]}}]};e.on("load",(function(){e.addSource("point",{type:"geojson",data:t}),e.addLayer({id:"location",source:"point",type:"symbol",layout:{"icon-image":"paing-logo","icon-size":.2}});var n=document.createElement("img");n.src="/embeds/location.png",n.alt="Aung Paing's Logo",n.addEventListener("load",(function(){return e.addImage("paing-logo",n)}))}))}),[n]),Object(j.jsxs)(gn,{children:[Object(j.jsx)("h1",{children:"Contact"}),Object(j.jsx)(fn,{ref:n}),Object(j.jsxs)(X,{children:[Object(j.jsx)("h1",{children:"On the Web"}),Object(j.jsx)(On,{children:Object(j.jsx)("a",{href:"mailto:aungpaingcha1@gmail.com",children:"Gmail"})}),Object(j.jsx)(On,{children:Object(j.jsx)("a",{href:"https://www.linkedin.com/in/aungpaing98/",target:"_blank",rel:"noopener noreferrer",children:"LinkedIn"})}),Object(j.jsx)(On,{children:Object(j.jsx)("a",{href:"http://aungpaing98.github.com",target:"_blank",rel:"noopener noreferrer",children:"Github"})}),Object(j.jsx)(On,{children:Object(j.jsx)("a",{href:"https://www.facebook.com/aung.paing.jj.986",target:"_blank",rel:"noopener noreferrer",children:"Facebook"})})]})]})}var wn={dark:{background:"#333842",content:"#EAF5FA",neon:"#A8EB14",lightBlue:"#D8E3E2",dark:"#333842",light:"#EAF5FA",shadow:"rgba(200, 200, 200, 0.3)",nm:"17px",md:"19px",lg:"23px",xl:"37px"},light:{content:"#333842",background:"#EAF5FA",neon:"#A8EB14",lightBlue:"#D8E3E2",dark:"#333842",light:"#EAF5FA",shadow:"rgba(0, 0, 0, 0.3)",nm:"17px",md:"19px",lg:"23px",xl:"37px"}};function vn(){var n=Object(l.useState)(!0),e=Object(d.a)(n,2),t=e[0],r=e[1];return Object(j.jsxs)(u.a,{theme:t?wn.dark:wn.light,children:[Object(j.jsx)(b,{dark:t}),Object(j.jsx)(g,{dark:t,setDark:r}),Object(j.jsxs)(p.d,{children:[Object(j.jsx)(p.b,{path:"/works",component:un}),Object(j.jsx)(p.b,{path:"/contact",component:kn}),Object(j.jsx)(p.b,{path:"/",component:q}),Object(j.jsx)(p.a,{to:"/"})]}),Object(j.jsx)(O,{dark:t})]})}c.a.render(Object(j.jsx)(s.a,{children:Object(j.jsx)(vn,{})}),document.querySelector("#root"))}},[[98,1,2]]]);
//# sourceMappingURL=main.d8e24c9f.chunk.js.map