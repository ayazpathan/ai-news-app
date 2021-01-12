(this["webpackJsonpai-news-app"]=this["webpackJsonpai-news-app"]||[]).push([[0],{145:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),r=a(9),o=a.n(r),l=(a(87),a(36)),c=a(37),s=a.n(c),m=a(70),d=a.n(m),p=a(168),u=a(167),f=a(163),g=a(169),h=a(161),b=a(162),x=a(164),y=a(165),w=a(166),E=a(71),v=a.n(E),j=a(159),C=Object(j.a)({media:{height:250},border:{border:"solid"},fullHeightCard:{height:"100%"},card:{display:"flex",flexDirection:"column",justifyContent:"space-between",borderBottom:"10px solid white"},activeCard:{borderBottom:"10px solid #22289a"},grid:{display:"flex"},details:{display:"flex",justifyContent:"space-between",margin:"20px"},title:{padding:"0 16px"},cardActions:{padding:"0 16px 8px 16px",display:"flex",justifyContent:"space-between"}}),N=function(e){var t=e.article,a=t.description,r=t.publishedAt,o=t.source,c=t.title,s=t.url,m=t.urlToImage,d=e.i,p=e.activeArticle,u=C(),E=Object(n.useState)([]),j=Object(l.a)(E,2),N=j[0],O=j[1];return Object(n.useEffect)((function(){O((function(e){return Array(10).fill().map((function(t,a){return e[a]||Object(n.createRef)()}))}))}),[]),Object(n.useEffect)((function(){var e;d===p&&N[p]&&(e=N[p],window.scroll(0,e.current.offsetTop-50))}),[d,p,N]),i.a.createElement(g.a,{ref:N[d],className:v()(u.card,p===d?u.activeCard:null)},i.a.createElement(h.a,{href:s,target:"_blank"},i.a.createElement(b.a,{className:u.media,image:m||"https://www.industry.gov.au/sites/default/files/August%202018/image/news-placeholder-738.png"}),i.a.createElement("div",{className:u.details},i.a.createElement(f.a,{variant:"body2",color:"textSecondary",component:"h2"},new Date(r).toDateString()),i.a.createElement(f.a,{variant:"body2",color:"textSecondary",component:"h2"},o.name)),i.a.createElement(f.a,{className:u.title,gutterBottom:!0,variant:"h5"},c),i.a.createElement(x.a,null,i.a.createElement(f.a,{variant:"body2",color:"textSecondary",component:"p"},a))),i.a.createElement(y.a,{className:u.cardActions},i.a.createElement(w.a,{size:"small",color:"primary"},"Learn More"),i.a.createElement(f.a,{variant:"h5",color:"textSecondary"},d+1)))},O=Object(j.a)({card:{display:"flex",flexDirection:"column",justifyContent:"space-between",alignItems:"center",width:"100%",height:"45vh",padding:"10%",borderRadius:10,color:"white"},infoCard:{display:"flex",flexDirection:"column",textAlign:"center"},container:{padding:"0 5%",width:"100%",margin:0}}),A=[{color:"#00838f",title:"Latest News",info:"Try saying 'go back' to return to home page",text:"Give me the latest news"},{color:"#1565c0",title:"News by Categories",info:"Business, Entertainment, General, Health, Science, Sports, Technology",text:"Give me the latest Technology news"},{color:"#4527a0",title:"News by Terms",info:"Bitcoin, PlayStation 5, Smartphones, Donald Trump...",text:"What's up with PlayStation 5"},{color:"#283593",title:"News by Sources",info:"CNN, Wired, BBC News, Time, IGN, Buzzfeed, ABC News...",text:"Give me the news from CNN"}],k=function(e){var t=e.articles,a=e.activeArticle,n=O();return t.length?i.a.createElement(p.a,{in:!0},i.a.createElement(u.a,{className:n.container,container:!0,alignItems:"stretch",spacing:3},t.map((function(e,t){return i.a.createElement(u.a,{item:!0,xs:12,sm:6,md:4,lg:3,style:{display:"flex"}},i.a.createElement(N,{article:e,i:t,activeArticle:a}))})))):i.a.createElement(p.a,{in:!0},i.a.createElement(u.a,{className:n.container,container:!0,alignItems:"stretch",spacing:3},A.map((function(e){return i.a.createElement(u.a,{item:!0,xs:12,sm:6,md:4,lg:3,className:n.infoCard},i.a.createElement("div",{className:n.card,style:{backgroundColor:e.color}},i.a.createElement(f.a,{variant:"h5"},e.title),e.info?i.a.createElement(f.a,{variant:"h6",component:"h6"},i.a.createElement("strong",null,e.title.split(" ")[2]),": ",i.a.createElement("br",null),e.info):null,i.a.createElement(f.a,{variant:"h6",component:"h6"},"Try saying: ",i.a.createElement("br",null)," ",i.a.createElement("i",null,e.text))))}))))},S=a(25),T=Object(j.a)((function(e){return{footer:Object(S.a)({textAlign:"center",position:"fixed",left:0,bottom:0,color:"black",width:"100%",display:"flex",alignItems:"center",justifyContent:"center",height:"120px"},e.breakpoints.down("sm"),{display:"none"}),link:{textDecoration:"none",color:"rgba(21, 101, 192)"},image:{marginLeft:20},card:Object(S.a)({display:"flex",justifyContent:"center",alignItems:"center",width:"50%",padding:"3%",borderRadius:10,color:"white",backgroundColor:"rgba(21, 101, 192)",margin:"0 12px",textAlign:"center",height:"25vmin"},e.breakpoints.down("sm"),{flexDirection:"column-reverse",textAlign:"center",width:"100%",height:"initial","&:nth-of-type(1)":{marginBottom:"12px"}}),infoContainer:Object(S.a)({display:"flex",alignItems:"center",justifyContent:"space-around"},e.breakpoints.down("sm"),{flexDirection:"column"}),logoContainer:Object(S.a)({padding:"0 5%",display:"flex",justifyContent:"space-around",alignItems:"center",width:"100%"},e.breakpoints.down("sm"),{flexDirection:"column-reverse",textAlign:"center"}),alanLogo:Object(S.a)({height:"27vmin",borderRadius:"15%",padding:"0 5%",margin:"3% 0"},e.breakpoints.down("sm"),{height:"35vmin"})}})),B=function(){var e=Object(n.useState)([]),t=Object(l.a)(e,2),a=t[0],r=t[1],o=Object(n.useState)(-1),c=Object(l.a)(o,2),m=c[0],p=c[1],u=T();return Object(n.useEffect)((function(){s()({key:"720b36296d74b7f7d6cc4ce3751478ce2e956eca572e1d8b807a3e2338fdd0dc/stage",onCommand:function(e){var t=e.command,a=e.articles,n=e.number;if("newHeadlines"===t)r(a),p(-1);else if("highlight"===t)p((function(e){return e+1}));else if("open"===t){var i=n.length>2?d()(n,{fuzzy:!0}):n,o=a[i-1];i>20?s()().playText("Please try that again."):o?(window.open(o.url,"_blank"),s()().playText("Opening....")):s()().playText("Please try that again...")}}})}),[]),i.a.createElement("div",null,i.a.createElement("div",{className:u.logoContainer},i.a.createElement("img",{src:"https://drive.google.com/uc?export=view&id=1fFzw0oERzxsphLYsQKec8hAEOOxjpExy",className:u.alanLogo,alt:"logo"})),i.a.createElement(k,{articles:a,activeArticle:m}))};o.a.render(i.a.createElement(B,null),document.getElementById("root"))},82:function(e,t,a){e.exports=a(145)},87:function(e,t,a){}},[[82,1,2]]]);
//# sourceMappingURL=main.a2c78d0d.chunk.js.map