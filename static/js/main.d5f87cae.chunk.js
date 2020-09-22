(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,function(e,t,a){e.exports={container:"skillContainer_container__3W1x-",title:"skillContainer_title__1bjfw",search:"skillContainer_search__2mJp1",filter:"skillContainer_filter__3VBLZ",subtitle:"skillContainer_subtitle__1Ts6N",skills:"skillContainer_skills__28pz0",skill:"skillContainer_skill__1NMSx",section:"skillContainer_section__PX2ON",load:"skillContainer_load__2po6N",icon:"skillContainer_icon__3RueT"}},,function(e,t,a){e.exports={contact:"contact_contact__1qaHV",icon:"contact_icon__1000U",iconBrands:"contact_iconBrands__2Zryn"}},,,,,,function(e,t,a){e.exports={header:"header_header__3W_BC",download:"header_download__3G9Fm",intro:"header_intro__3lFTb",title:"header_title__bSs1t",description:"header_description__1OmZ6"}},function(e,t,a){e.exports={education:"education_education__3fXow"}},function(e,t,a){e.exports={app:"app_app__2afrl",main:"app_main__luts7",left:"app_left__1GWv2",right:"app_right__37F6O"}},function(e,t,a){e.exports={container:"projects_container__1b0Pn",projects:"projects_projects__19TuM",project:"projects_project__3ITkG"}},function(e,t,a){e.exports={description:"project_description__3EEPD",project:"project_project__21Iov"}},,,function(e,t,a){e.exports={skill:"skill_skill__1EDhP",hidden:"skill_hidden__3Iv_Y",noPrint:"skill_noPrint__1MYse"}},,,function(e,t,a){e.exports=a(36)},,,,,,function(e,t,a){},,,,,,,,,,,function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(15),i=a.n(l),c=(a(25),a(3)),s=a.n(c);var o=a(9),u=a.n(o);function m(){return r.a.createElement("header",{className:u.a.header},r.a.createElement("div",{className:u.a.intro},r.a.createElement("div",{className:u.a.title},r.a.createElement("h1",null,"Fekete Viktor",r.a.createElement("a",{href:"/fekete_viktor.pdf",className:u.a.download},"\uf019")),r.a.createElement("h2",null,"Software Guy")),r.a.createElement("p",{className:u.a.description,contentEditable:!0,suppressContentEditableWarning:!0},"A developer with various interests. As a true generalist I can be useful in almost any area related to development, but also need to have variety in my work.")),r.a.createElement("ul",{className:s.a.contact},r.a.createElement("li",{className:s.a.icon,icon:"\uf0e0"},r.a.createElement("a",{href:"mailto:fekete.roland.viktor@gmail.com"},"fekete.roland.viktor@gmail.com")),r.a.createElement("li",{className:s.a.icon,icon:"\uf095"},r.a.createElement("a",{href:"tel:+3620-505-3235"},"+3620-505-3235")),r.a.createElement("li",{className:s.a.iconBrands,icon:"\uf092"},r.a.createElement("a",{href:"https://github.com/moussambani"},"github.com/moussambani")),r.a.createElement("li",{className:s.a.iconBrands,icon:"\uf08c"},r.a.createElement("a",{href:"https://www.linkedin.com/in/roland-viktor-fekete"},"linkedin.com/in/roland-viktor-fekete")),r.a.createElement("li",{className:s.a.icon,icon:"\uf7a2"},r.a.createElement("a",{href:"https://www.google.com/maps/place/Budapest"},"Budapest, Hungary"))))}var d=a(4),h=a(5),p=a(7),_=a(6),f=a(8),k=a(2),E=a(17),v=a(18),b=a(16),j=a.n(b),N=function(e){function t(e){var a;return Object(d.a)(this,t),(a=Object(p.a)(this,Object(_.a)(t).call(this,e))).baseColor=null,a.lightnessStep=7,a.state={open:!1},a.handleClick=a.handleClick.bind(Object(k.a)(Object(k.a)(a))),a.initBaseColor(),a}return Object(f.a)(t,e),Object(h.a)(t,[{key:"initBaseColor",value:function(){var e=getComputedStyle(document.documentElement).getPropertyValue("--decoration-color").split(/,/).map(function(e){return e.replace(/%/,"")}),t=Object(v.a)(e,3),a=t[0],n=t[1],r=t[2];this.baseColor={hue:a,saturation:n,lightness:r}}},{key:"handleClick",value:function(e){e.preventDefault(),this.setState(function(e){return{open:!e.open}})}},{key:"render",value:function(){var e=this.props.skill,t=["skill"].concat(Object(E.a)(this.props.extraClasses)).map(function(e){return j.a[e]}).reduce(function(e,t){return"".concat(e," ").concat(t)});return e.details.length>0?this.renderAsDetails(e,t):this.renderAsDiv(e,t)}},{key:"renderAsDetails",value:function(e,t){return r.a.createElement("details",{className:t,open:this.state.open,onClick:this.handleClick,style:{backgroundColor:this.calculateColor(e.exposure)}},r.a.createElement("summary",null,e.name),r.a.createElement("p",null,e.details))}},{key:"renderAsDiv",value:function(e,t){return r.a.createElement("div",{className:t,open:this.state.open,style:{backgroundColor:this.calculateColor(e.exposure)}},e.name)}},{key:"calculateColor",value:function(e){var t=e-3,a=this.baseColor.lightness-this.lightnessStep*t;return"hsl(".concat(this.baseColor.hue,", ").concat(this.baseColor.saturation,"%, ").concat(a,"%)")}}]),t}(n.Component),C=a(1),g=a.n(C),y=function(e){function t(e){var a;return Object(d.a)(this,t),(a=Object(p.a)(this,Object(_.a)(t).call(this,e))).printLimit=20,a.render=function(){return a.state.filtered?a.renderOuter():r.a.createElement("p",null,"Loading")},a.state={skills:null,filtered:null,query:"",limit:15},a.loadMore=a.loadMore.bind(Object(k.a)(Object(k.a)(a))),a}return Object(f.a)(t,e),Object(h.a)(t,[{key:"componentDidMount",value:function(){var e=this;fetch("https://moussambani.github.io/resume/skills.json").then(function(e){return e.json()}).then(function(t){var a=t.sort(function(e,t){return t.exposure-e.exposure});e.setState({skills:a,filtered:a})})}},{key:"filterSkills",value:function(e){var t=e.target.value.toLowerCase();this.setState({query:t});var a=this.state.skills.filter(function(e){return e.name.toLowerCase().includes(t)});this.setState({filtered:a})}},{key:"renderOuter",value:function(){var e=this;return r.a.createElement("div",{className:g.a.container},r.a.createElement("div",{className:g.a.title},r.a.createElement("h1",null,"Technical Skills"),r.a.createElement("div",{className:g.a.search},r.a.createElement("label",{htmlFor:"search"},r.a.createElement("i",{className:g.a.icon},"\uf002")),r.a.createElement("input",{className:g.a.filter,id:"search",type:"text",onChange:function(t){return e.filterSkills(t)}}))),r.a.createElement("h3",{className:g.a.subtitle},"A color coded list of technologies I have experience with. The darker the color the more confident I am with the given tech."),this.renderInner())}},{key:"renderInner",value:function(){return this.state.filtered.length>0?r.a.createElement(r.a.Fragment,null,this.renderSkills(this.state.filtered)):r.a.createElement("p",null,'no results for "',this.state.query,'"')}},{key:"renderSkills",value:function(e){var t=this,a=this.state.query.length>0;return e.length>0&&r.a.createElement("section",{className:g.a.section},r.a.createElement("ul",{className:g.a.skills},e.map(function(e,n){var l=[];return n>t.state.limit&&!a&&l.push("hidden"),n>t.printLimit&&l.push("noPrint"),r.a.createElement("li",{key:e.name,className:g.a.skill},r.a.createElement(N,{skill:e,extraClasses:l}))})),this.state.limit<this.state.skills.length&&!a&&r.a.createElement("button",{className:g.a.load,onClick:this.loadMore},"show more..."))}},{key:"loadMore",value:function(){this.setState({limit:1e3})}}]),t}(n.Component),w=a(12),O=a.n(w),S=a(13),x=a.n(S);function B(e){return{__html:e}}function M(e){var t=e.project;return r.a.createElement("section",{className:x.a.project},r.a.createElement("h2",{dangerouslySetInnerHTML:B(t.name+" (".concat(t.duration,")"))}),r.a.createElement("p",{className:x.a.description},t.description),r.a.createElement("h3",null,"My contributions:"),r.a.createElement("ul",{className:x.a.contrib},t.contribution.map(function(e,t){return r.a.createElement("li",{key:t,dangerouslySetInnerHTML:B(e)})})))}var I=function(e){function t(e){var a;return Object(d.a)(this,t),(a=Object(p.a)(this,Object(_.a)(t).call(this,e))).render=function(){return r.a.createElement(r.a.Fragment,null,a.state.projects&&a.renderProjects())},a.state={projects:null},a}return Object(f.a)(t,e),Object(h.a)(t,[{key:"componentDidMount",value:function(){var e=this;fetch("projects.json").then(function(e){return e.json()}).then(function(t){e.setState({projects:t})})}},{key:"renderProjects",value:function(){return r.a.createElement("section",{className:O.a.container},r.a.createElement("h1",null,"Projects"),r.a.createElement("ul",{className:O.a.projects},this.state.projects.map(function(e,t){return r.a.createElement("li",{key:t,className:O.a.project},r.a.createElement(M,{project:e}))})))}}]),t}(n.Component),P=a(10),D=a.n(P);function L(e){return r.a.createElement("section",{className:D.a.education},r.a.createElement("h1",null,"Certifications"),r.a.createElement("ul",{className:D.a.certifications},r.a.createElement("li",{className:D.a.certification},r.a.createElement("p",null,"Bachelor's degree in software engineering from E\xf6tv\xf6s Lor\xe1nd University, earned in 2014")),r.a.createElement("li",{className:D.a.certification},r.a.createElement("p",null,"AWS associate level developer certification, earned in 2016"))))}var T=a(11),A=a.n(T);i.a.render(r.a.createElement(function(){return r.a.createElement("div",{className:A.a.app},r.a.createElement(m,null),r.a.createElement("main",{className:A.a.main},r.a.createElement("div",{className:A.a.left},r.a.createElement(I,null)),r.a.createElement("div",{className:A.a.right},r.a.createElement(y,null),r.a.createElement(L,null))))},null),document.getElementById("root"))}],[[19,2,1]]]);
//# sourceMappingURL=main.d5f87cae.chunk.js.map