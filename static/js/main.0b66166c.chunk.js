(this["webpackJsonpcohesive-colors"]=this["webpackJsonpcohesive-colors"]||[]).push([[0],{100:function(e,t,n){},217:function(e,t,n){"use strict";n.r(t);var o=n(3),r=n(0),i=n.n(r),c=n(81),a=n.n(c),l=n(28),s=n(29),h=n(33),d=n(32),p=n(220),b=n(82),j=n.n(b),u=n(83),x=n.n(u),C=(n(100),n(13)),g=n(84),F=n.n(g),E=n(93),v=n(5);function O(){var e=Object(C.a)(["\n  appearance: none;\n  border: none;\n  text-align: center;\n  display: inline-block;\n  text-transform: uppercase;\n  user-select: none;\n  font-variant-numeric: tabular-nums;\n  cursor: pointer;\n  font-weight: 500 !important;\n  color: #0007;\n  line-height:1;\n  font-size: 16px;\n  width:80px;\n  height:80px;\n  border-radius:80px;\n  margin-right: -12px;\n  margin-bottom: -12px;\n\n  box-shadow: rgba(0, 0, 0, 0.05) 0 1px 0, rgba(0, 0, 0, 0.02) 0 3px 16px;\n\n  transition: transform 0.1s, background-color 0.1s, border-radius 0.3s;\n  transform: scale(1);\n"]);return O=function(){return e},e}function f(){var e=Object(C.a)([""]);return f=function(){return e},e}function y(){var e=Object(C.a)(["\n  padding: 0 16px 16px 0;\n"]);return y=function(){return e},e}var m=document.querySelector("body"),B=0,A=v.a.div(y()),D=v.a.div(f()),w=v.a.button(O()),k=function(){B=window.pageYOffset,m.style.overflow="hidden",m.style.position="fixed",m.style.top="-".concat(B,"px"),m.style.width="100%"},S=function(){m.style.removeProperty("overflow"),m.style.removeProperty("position"),m.style.removeProperty("top"),m.style.removeProperty("width"),window.scrollTo(0,B)},R=function(e){Object(h.a)(n,e);var t=Object(d.a)(n);function n(){var e;Object(l.a)(this,n);for(var o=arguments.length,r=new Array(o),i=0;i<o;i++)r[i]=arguments[i];return(e=t.call.apply(t,[this].concat(r))).state={currentlyEditing:-1,popupPosition:{zIndex:1e5,position:"fixed",top:"0px",left:"0px"},priority:new Array(e.props.colors.length).fill("").map((function(e,t){return t}))},e}return Object(s.a)(n,[{key:"componentWillUnmount",value:function(){for(var e in this.clips){this.clips[e].destroy(),delete this.clips[e]}this.clips=null}},{key:"onColorClick",value:function(e,t){"edit"===this.props.action?this.onEditColor(e,t):navigator&&navigator.clipboard&&navigator.clipboard.writeText&&navigator.clipboard.writeText("#"+this.props.colors[e])}},{key:"onEditColor",value:function(e,t){var n=t.currentTarget.getBoundingClientRect(),o=Math.min(Math.floor(n.left),window.innerWidth-350);k(),this.setState({currentlyEditing:e,popupPosition:{zIndex:1e5,position:"fixed",top:Math.floor(n.top+n.height)+"px",left:o+"px"}})}},{key:"handleClose",value:function(){S(),this.setState({currentlyEditing:-1})}},{key:"render",value:function(){var e=this,t=this.props,n=t.colors,r=t.onChange,i=this.state,c=i.currentlyEditing,a=i.popupPosition,l=n.map((function(t,n){return Object(o.jsxs)(w,{onClick:e.onColorClick.bind(e,n),style:{backgroundColor:"#"+t,zIndex:c===n?99999:1e3-(e.state.priority[n]||n),borderRadius:c===n?3:"50%"},children:[Object(o.jsx)("div",{children:"".concat(t.slice(0,2))}),Object(o.jsx)("div",{children:"".concat(t.slice(2,4))}),Object(o.jsx)("div",{children:"".concat(t.slice(4,6))})]},n)}));return Object(o.jsxs)(A,{children:[Object(o.jsx)(D,{children:l}),!!r&&-1!==c&&Object(o.jsx)(F.a,{style:a,onClickOutside:this.handleClose.bind(this),children:Object(o.jsx)(E.a,{width:320,disableAlpha:!0,type:"chrome",onChange:r.bind(this,c),color:n[c]})})]})}}]),n}(i.a.Component),I=n(94),W=n(7),z=n(92);function P(){var e=Object(C.a)(["\nmargin: 0 0 0 16px;\npadding: 4px 0;\n"]);return P=function(){return e},e}function T(){var e=Object(C.a)(["\nmargin: 0;\npadding: 0;"]);return T=function(){return e},e}var H=window.innerHeight>640?16:14,M=H,L=H,U="#000",G={capHeight:1364,ascent:1950,descent:-494,unitsPerEm:2048},J=v.a.div({});function _(e){var t=Object(W.a)({fontMetrics:G,lineGap:2*L/3},e);return Object(z.a)(t)}var q=v.a.div({maxWidth:"1080px",margin:"0 auto"}),N=Object(v.a)(J)(Object(W.a)({margin:"0"},_({capHeight:3*L/3}))),Q=v.a.button({appearance:"none",userSelect:"none",cursor:"pointer",display:"inline-block",backgroundColor:"#eee",boxShadow:"4px 4px 0 #ccc",padding:"0 ".concat(M/2,"px"),border:"none",height:2.5*M}),Y=function(e){var t=e.children,n=Object(I.a)(e,["children"]);return Object(o.jsx)(Q,Object(W.a)(Object(W.a)({},n),{},{children:Object(o.jsx)(N,{children:t})}))},Z=v.a.input(Object(W.a)(Object(W.a)({"-webkit-text-fill-color":"#777",opacity:1,flex:1,display:"block",appearance:"none",border:"none",borderRadius:0,height:2.5*M,backgroundColor:"#eee"},_({capHeight:3*L/3})),{},{padding:"0 ".concat(M/2,"px"),boxShadow:"inset rgba(0, 0, 0, 0.04) 3px 3px 0, inset rgba(0, 0, 0, 0.03) 0.5px 0.5px 0",color:"#777"})),$=v.a.input({flex:1,width:"100%",appearance:"none",backgroundColor:"var(--accent-color)",height:M,borderRadius:0,"&::-webkit-slider-thumb":{appearance:"none",boxShadow:"none",borderRadius:0,height:2*M,width:M,backgroundColor:"#000",border:"none"},"&::-moz-range-thumb":{appearance:"none",boxShadow:"none",borderRadius:0,height:2*M,width:M,backgroundColor:"#000",border:"none"},"&::-webkit-slider-runnable-track":{appearance:"none"},":focus":{outline:"none"}}),K=(v.a.h4(Object(W.a)({margin:0,color:U,letterSpacing:-.11,fontWeight:700},_({capHeight:L,lineGap:L}))),v.a.h3(Object(W.a)({margin:0,color:U,letterSpacing:-.22,fontWeight:500},_({capHeight:1*L*1.25,lineGap:L})))),V=(v.a.h2(Object(W.a)({margin:0,color:U,letterSpacing:-.33,fontWeight:500},_({capHeight:1.5*L,lineGap:12}))),v.a.h1(Object(W.a)({color:U,letterSpacing:-1,margin:"2px 0",fontWeight:700},_({capHeight:3*L-4,lineGap:L})))),X=v.a.a({color:"#000",boxShadow:"var(--accent-color) 0 2px 0, inset var(--accent-color) 0 -2px 0",fontWeight:700,textDecoration:"none","&:hover":{color:"#34495e"}});function ee(e){return Object(o.jsx)("div",{style:{display:e.inline?"inline-block":"block",height:"".concat(M*e.h,"px"),width:"".concat(M*e.w,"px")}})}var te=v.a.div({flex:function(e){return e.flex},minWidth:function(e){return e.minWidth},padding:function(e){var t=e.padding;return t?[t].flat().map((function(e){return"".concat(e*M,"px")})).join(" "):"0"},"@media (max-width: 768px)":{display:function(e){return e.hideOnSmall?"none":void 0}},"@media (max-width: 1080px)":{display:function(e){return e.hideOnMedium?"none":void 0}}}),ne=v.a.div({display:"flex",flexWrap:"wrap",marginLeft:function(e){var t=e.h;return"".concat(t*M,"px")},marginRight:function(e){var t=e.h;return"".concat(t*M,"px")},marginTop:function(e){var t=e.v;return"".concat(t*M,"px")},marginBottom:function(e){var t=e.v;return"".concat(t*M,"px")}}),oe=(v.a.a({capHeight:L,color:"#3498db",cursor:"pointer",borderRadius:5,borderTop:"1px solid #3498db10",borderBottom:"1px solid #0000",backgroundColor:"#3498db20",height:2*L,display:"flex",alignItems:"center",alignContent:"center",justifyContent:"center",padding:0,"&:hover":{boxShadow:"rgba(0, 0, 0, 0.1) 0 1px 1px, rgba(0, 0, 0, 0.1) 0 3px 12px"}}),v.a.div({height:"120px",flex:1,"max-width":"320px",display:"flex","text-align":"center","align-items":"center","align-content":"center","justify-content":"center","flex-direction":"column",border:"2px dashed #000",color:"#000",padding:"0",cursor:"pointer","& span":{width:"100%",cursor:"pointer"},"&:hover":{"border-color":"#999"},"& input":{position:"absolute",top:"0",left:"0",height:"100%",width:"100%",opacity:"0",cursor:"pointer"}}),v.a.ul(T())),re=v.a.li(P()),ie=[["555e7b","b7d968","b576ad","e04644","fde47f","7ccce5"],["69D2E7","A7DBD8","E0E4CC","F38630","FA6900"],["FE4365","FC9D9A","F9CDAD","C8C8A9","83AF9B"],["ECD078","D95B43","C02942","542437","53777A"],["556270","4ECDC4","C7F464","FF6B6B","C44D58"],["774F38","E08E79","F1D4AF","ECE5CE","C5E0DC"],["E8DDCB","CDB380","036564","033649","031634"],["490A3D","BD1550","E97F02","F8CA00","8A9B0F"],["594F4F","547980","45ADA8","9DE0AD","E5FCC2"],["00A0B0","6A4A3C","CC333F","EB6841","EDC951"],["E94E77","D68189","C6A49A","C6E5D9","F4EAD5"],["3FB8AF","7FC7AF","DAD8A7","FF9E9D","FF3D7F"],["D9CEB2","948C75","D5DED9","7A6A53","99B2B7"],["FFFFFF","CBE86B","F2E9E1","1C140D","CBE86B"],["EFFFCD","DCE9BE","555152","2E2633","99173C"],["343838","005F6B","008C9E","00B4CC","00DFFC"],["413E4A","73626E","B38184","F0B49E","F7E4BE"],["99B898","FECEA8","FF847C","E84A5F","2A363B"],["FF4E50","FC913A","F9D423","EDE574","E1F5C4"],["655643","80BCA3","F6F7BD","E6AC27","BF4D28"],["00A8C6","40C0CB","F9F2E7","AEE239","8FBE00"],["351330","424254","64908A","E8CAA4","CC2A41"],["554236","F77825","D3CE3D","F1EFA5","60B99A"],["FF9900","424242","E9E9E9","BCBCBC","3299BB"],["5D4157","838689","A8CABA","CAD7B2","EBE3AA"],["8C2318","5E8C6A","88A65E","BFB35A","F2C45A"],["FAD089","FF9C5B","F5634A","ED303C","3B8183"],["FF4242","F4FAD2","D4EE5E","E1EDB9","F0F2EB"],["D1E751","FFFFFF","000000","4DBCE9","26ADE4"],["F8B195","F67280","C06C84","6C5B7B","355C7D"],["BCBDAC","CFBE27","F27435","F02475","3B2D38"],["1B676B","519548","88C425","BEF202","EAFDE6"],["5E412F","FCEBB6","78C0A8","F07818","F0A830"],["EEE6AB","C5BC8E","696758","45484B","36393B"],["452632","91204D","E4844A","E8BF56","E2F7CE"],["F0D8A8","3D1C00","86B8B1","F2D694","FA2A00"],["F04155","FF823A","F2F26F","FFF7BD","95CFB7"],["2A044A","0B2E59","0D6759","7AB317","A0C55F"],["BBBB88","CCC68D","EEDD99","EEC290","EEAA88"],["B9D7D9","668284","2A2829","493736","7B3B3B"],["67917A","170409","B8AF03","CCBF82","E33258"],["B3CC57","ECF081","FFBE40","EF746F","AB3E5B"],["A3A948","EDB92E","F85931","CE1836","009989"],["E8D5B7","0E2430","FC3A51","F5B349","E8D5B9"],["AB526B","BCA297","C5CEAE","F0E2A4","F4EBC3"],["607848","789048","C0D860","F0F0D8","604848"],["AAB3AB","C4CBB7","EBEFC9","EEE0B7","E8CAAF"],["300030","480048","601848","C04848","F07241"],["A8E6CE","DCEDC2","FFD3B5","FFAAA6","FF8C94"],["3E4147","FFFEDF","DFBA69","5A2E2E","2A2C31"],["515151","FFFFFF","00B4FF","EEEEEE"]];function ce(e){var t=new p.a(e).toRgb();return[t.r,t.g,t.b]}var ae=function(e,t,n){return e.map((function(e){return function(e){return new p.a({r:e[0],g:e[1],b:e[2]}).toHex()}(j.a.overlay(ce(e),ce(t),n))}))},le=function(e){Object(h.a)(n,e);var t=Object(d.a)(n);function n(){var e;Object(l.a)(this,n);for(var o=arguments.length,r=new Array(o),i=0;i<o;i++)r[i]=arguments[i];return(e=t.call.apply(t,[this].concat(r))).state={overlayColor:"FF9C00",overlayIntensity:.3,colorSchemeIndex:0,colorSchemeSource:ie,colorScheme:ie[0]},e}return Object(s.a)(n,[{key:"componentDidMount",value:function(){var e=new URLSearchParams(document.location.search).get("src"),t=new URLSearchParams(document.location.search).get("overlay"),n=new URLSearchParams(document.location.search).get("intensity");this.setState((function(o){return{colorScheme:e?e.split(","):o.colorScheme,overlayColor:t||o.overlayColor,overlayIntensity:n||o.overlayIntensity}}))}},{key:"handleChangeColor",value:function(e,t){var n=this.state.colorScheme.slice();n[e]=t.hex.replace("#",""),this.setState({colorScheme:n})}},{key:"handleOverlayChange",value:function(e,t){var n=t.hex.replace("#","");this.setState({overlayColor:n})}},{key:"handleOverlayIntensityChange",value:function(e){this.setState({overlayIntensity:parseFloat(e.target.value)})}},{key:"handleResizePallete",value:function(e){var t=this.state.colorScheme.slice();1===e?t.push(x()().replace("#","")):t.pop(),this.setState({colorScheme:t})}},{key:"randomize",value:function(){var e=(this.state.colorSchemeIndex+1)%this.state.colorSchemeSource.length;this.setState({colorScheme:this.state.colorSchemeSource[e],colorSchemeIndex:e})}},{key:"render",value:function(){var e=this.state,t=e.colorScheme,n=e.overlayColor,r=e.overlayIntensity,i="".concat(document.location.origin).concat(document.location.pathname,"?src=").concat(t.join(","),"&overlay=").concat(n,"&intensity=").concat(r);return Object(o.jsx)(q,{children:Object(o.jsxs)(te,{padding:2,children:[Object(o.jsx)(ee,{h:1}),Object(o.jsx)(V,{style:{fontWeight:900,display:"inline-block",width:"auto",padding:"6px",backgroundColor:"var(--accent-color)"},children:"Cohesive"}),Object(o.jsx)(V,{style:{fontWeight:900,display:"inline-block",width:"auto",marginTop:"-4px",padding:"6px",backgroundColor:"var(--accent-color)"},children:"Colors"}),Object(o.jsx)(ee,{h:1}),Object(o.jsx)(N,{children:"Tool that may help you to create cohesive color schemes."}),Object(o.jsx)(ee,{h:2}),Object(o.jsx)(K,{children:"1. Select Colors"}),Object(o.jsx)(N,{children:"Create the original color pallete, anything you want. Click to edit."}),Object(o.jsx)(ee,{h:1}),Object(o.jsx)(R,{colors:t,onChange:this.handleChangeColor.bind(this),action:"edit"}),Object(o.jsx)(ee,{h:1}),Object(o.jsxs)(ne,{children:[Object(o.jsx)(Y,{className:"-small",onClick:this.randomize.bind(this),children:"Random"}),Object(o.jsx)(ee,{w:1}),Object(o.jsx)(Y,{style:{width:42},onClick:this.handleResizePallete.bind(this,-1),disabled:t.length<2,children:"-"}),Object(o.jsx)(ee,{w:.5}),Object(o.jsx)(Y,{style:{width:42},onClick:this.handleResizePallete.bind(this,1),children:"+"})]}),Object(o.jsx)(ee,{h:2}),Object(o.jsx)(K,{children:"2. Add overlay"}),Object(o.jsx)(N,{children:"This color will bring the original colors together."}),Object(o.jsx)(ee,{h:1}),Object(o.jsxs)(ne,{children:[Object(o.jsx)(R,{colors:[n],onChange:this.handleOverlayChange.bind(this),action:"edit"}),Object(o.jsx)(ee,{w:1}),Object(o.jsxs)(te,{style:{width:220},children:[Object(o.jsxs)(N,{children:["Intensity ",Object(o.jsxs)("span",{style:{color:"#666"},children:[Math.round(100*r),"%"]})]}),Object(o.jsx)(ee,{h:1}),Object(o.jsx)($,{"aria-label":"Scale",type:"range",value:r,onChange:this.handleOverlayIntensityChange.bind(this),min:"0",max:"1",step:".01"})]})]}),Object(o.jsx)(ee,{h:2}),Object(o.jsxs)(ne,{children:[Object(o.jsx)(K,{children:"3. Result"}),Object(o.jsx)("div",{style:{flex:1}}),navigator&&navigator.clipboard&&navigator.clipboard.writeText&&Object(o.jsx)(Y,{onClick:function(){var e=ae(t,n,r).map((function(e){return"#".concat(e)})).join(", ");navigator.clipboard.writeText(e)},children:"Copy All"})]}),Object(o.jsx)(N,{children:"Click on any color to copy."}),Object(o.jsx)(ee,{h:1}),Object(o.jsx)(R,{copyArray:!0,colors:ae(t,n,r),action:"copy"}),Object(o.jsx)(ee,{h:1}),Object(o.jsx)(N,{children:"Share this color pallete"}),Object(o.jsx)(ee,{h:.5}),Object(o.jsxs)(ne,{children:[Object(o.jsx)(Z,{"aria-label":"Share URL",type:"text",value:i,disabled:!0}),Object(o.jsx)(ee,{w:1}),Object(o.jsx)(Y,{onClick:function(){navigator.clipboard.writeText(i)},children:"Copy URL"})]}),Object(o.jsx)(ee,{h:2}),Object(o.jsx)(N,{children:Object(o.jsx)("strong",{children:"More experiments"})}),Object(o.jsx)(ee,{h:.5}),Object(o.jsxs)(oe,{children:[Object(o.jsx)(re,{children:Object(o.jsxs)(N,{children:[Object(o.jsx)(X,{href:"https://javier.xyz/img2css/",children:"img2css"}),", tool that can convert any image into a pure css image."]})}),Object(o.jsx)(re,{children:Object(o.jsxs)(N,{children:[Object(o.jsx)(X,{href:"https://javier.xyz/visual-center/",children:"visual-center"}),", find the visual center of your images / logos."]})}),Object(o.jsx)(re,{children:Object(o.jsxs)(N,{children:[Object(o.jsx)(X,{href:"https://javier.xyz/morphin/",children:"morphin"}),", create animated CSS transitions with box-shadow."]})}),Object(o.jsx)(re,{children:Object(o.jsxs)(N,{children:[Object(o.jsx)(X,{href:"https://clashjs.com/",children:"clashjs"}),", JS AI Battle Game."]})})]}),Object(o.jsx)(ee,{h:2}),Object(o.jsx)(te,{padding:.25,style:{display:"inline-block",backgroundColor:"rgba(246,229,141,.19)",borderLeft:"3px solid #f6e58d"},children:Object(o.jsxs)(N,{children:["I'm working on an iOS app! Create and save cohesive color palletes,"," ",Object(o.jsx)("strong",{children:Object(o.jsx)(X,{href:"http://eepurl.com/cZwQn9",target:"_blank",rel:"noopener noreferrer",children:"Sign Up"})})," ","to be the first to know!"]})}),Object(o.jsx)(ee,{h:2}),Object(o.jsxs)(N,{children:["Made by ",Object(o.jsx)(X,{href:"https://javier.xyz",children:"javierbyte"}),". Based on this idea"," ",Object(o.jsx)(X,{target:"_blank",rel:"noopener noreferrer",href:"https://dribbble.com/shots/166246-My-Secret-for-Color-Schemes",children:"this idea"}),"."]}),Object(o.jsx)(ee,{h:3})]})})}}]),n}(i.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a.a.render(Object(o.jsx)(le,{}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[217,1,2]]]);
//# sourceMappingURL=main.0b66166c.chunk.js.map