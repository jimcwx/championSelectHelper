(this["webpackJsonpchampion-select-help"]=this["webpackJsonpchampion-select-help"]||[]).push([[0],{21:function(e,t,a){e.exports=a(45)},26:function(e,t,a){},27:function(e,t,a){},45:function(e,t,a){"use strict";a.r(t);var s=a(0),n=a.n(s),l=a(7),i=a.n(l),c=(a(26),a(1)),o=a(2),r=a(4),p=a(3),h=a(5),m=(a(27),a(8)),u=a.n(m),d=function(e){function t(){var e,a;Object(c.a)(this,t);for(var s=arguments.length,n=new Array(s),l=0;l<s;l++)n[l]=arguments[l];return(a=Object(r.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(n)))).keyUpHandler=function(e){e.preventDefault(),13===e.keyCode&&a.props.buttonClick()},a}return Object(h.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return n.a.createElement("div",{className:"startPage"},n.a.createElement("h1",null,"Champion Select Helper"),n.a.createElement("h2",null,"For your League of Legends champion select convenience"),n.a.createElement("button",{onClick:this.props.buttonClick,tabIndex:"1",onKeyUp:this.keyUpHandler},"Start"))}}]),t}(s.Component),f=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(r.a)(this,Object(p.a)(t).call(this,e))).userClick=function(){a.state.isChecked?a.props.userSelectClassType(a.state.champType):a.props.userUnselectClassType(a.state.champType),a.setState({isChecked:!a.state.isChecked})},a.keyUpHandler=function(e){13===e.keyCode&&a.userClick()},a.state={champType:a.props.type,isChecked:!0},a}return Object(h.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return n.a.createElement("label",{htmlFor:"checkbox".concat(this.props.index),tabIndex:"0",onKeyUp:this.keyUpHandler},n.a.createElement("div",{className:!0===this.state.isChecked?"unclicked":"clicked"}," "),n.a.createElement("h3",null,this.state.champType),n.a.createElement("img",{src:this.props.url,alt:"icon for ".concat(this.state.champType," class")}),n.a.createElement("input",{type:"checkbox",name:"checkbox".concat(this.props.index),id:"checkbox".concat(this.props.index),value:this.state.champType,onClick:this.userClick}))}}]),t}(s.Component),g=a(18),v=a.n(g),C=a(19),y=a.n(C),S=a(20),b=a.n(S),E=function(e){function t(){var e,a;Object(c.a)(this,t);for(var s=arguments.length,n=new Array(s),l=0;l<s;l++)n[l]=arguments[l];return(a=Object(r.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(n)))).clickHandler=function(e){e.preventDefault(),a.props.userSelectedChampion(e.target.id)},a.keyUpHandler=function(e){13===e.keyCode&&a.clickHandler(e)},a}return Object(h.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this;return n.a.createElement("div",{className:"displayedChampions"},this.props.filteredChampions.map((function(t,a){return n.a.createElement("div",{className:"champBox ".concat(t.id),key:a,onClick:e.clickHandler,id:t.id,tabIndex:"0",onKeyUp:e.keyUpHandler},n.a.createElement("a",{href:"#",id:t.id},n.a.createElement("h2",{id:t.id},t.name),n.a.createElement(b.a,{className:"Tilt",options:{max:35}},n.a.createElement("img",{src:"/repo-name"+"/assets/champImg/".concat(t.id,"_0.jpg"),alt:"".concat(t.id,", ").concat(t.title),className:"champ",id:t.id}))))})))}}]),t}(s.Component),k=y()(v.a),M=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(r.a)(this,Object(p.a)(t).call(this,e))).creatingClasses=function(e){return e.map((function(e,t){return n.a.createElement(f,{key:t,type:e,url:"/repo-name"+"/assets/".concat(e,".png"),userSelectClassType:a.userSelectClassType,userUnselectClassType:a.userUnselectClassType,index:t+1})}))},a.userSelectClassType=function(e){var t=a.state.userSelection;t.push(e),a.setState({userSelection:t})},a.userUnselectClassType=function(e){var t=a.state.userSelection.filter((function(t){return t!==e}));a.setState({userSelection:t})},a.userConfirmClassSelect=function(e){e.preventDefault(),a.filterChampionsToDisplay(a.state.userSelection,a.state.championsToDisplay)},a.scrollAfterDisplay=function(){window.scrollTo(0,a.displayChampRef.current.offsetTop)},a.filterChampionsToDisplay=function(e,t){var s=t.filter((function(t){var a=!0,s=!1,n=void 0;try{for(var l,i=e[Symbol.iterator]();!(a=(l=i.next()).done);a=!0){var c=l.value;if(!t.tags.includes(c))return!1}}catch(o){s=!0,n=o}finally{try{a||null==i.return||i.return()}finally{if(s)throw n}}return!0}));a.setState({filteredChampions:s},a.checkIfArrayIsEmpty)},a.checkIfArrayIsEmpty=function(){a.state.filteredChampions.length?a.setState({hasUserMadeSelection:!0},a.scrollAfterDisplay):k.fire({icon:"error",title:"Attention!",text:"After looking through all 148 champions, we have found ZERO champions that matched your selection, that's right, ZERO. Please refine your search parameters and remember to select to a maximum of 2"})},a.state={championsToDisplay:a.props.champions,filteredChampions:[],userSelection:[],availableClasses:["Fighter","Tank","Mage","Assassin","Support","Marksman"],hasUserMadeSelection:!1,userSelectedChampion:a.props.userSelectedChampion},a.displayChampRef=n.a.createRef(),a}return Object(h.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return n.a.createElement("main",{className:"mainPage"},n.a.createElement("div",{className:"wrapper"},n.a.createElement("h1",null,"Champion Select Helper"),n.a.createElement("p",null,"Note: Select up to two class types!"),n.a.createElement("p",null,"Select nothing if you just want to see all the Champions!"),n.a.createElement("form",{action:"submit",className:"classSelect",onSubmit:this.userConfirmClassSelect},this.creatingClasses(this.state.availableClasses),n.a.createElement("button",{tabIndex:"0"},"Confirm Selection")),n.a.createElement("div",{ref:this.displayChampRef},this.state.hasUserMadeSelection?n.a.createElement(E,{filteredChampions:this.state.filteredChampions,id:"displayedChampions",userSelectedChampion:this.state.userSelectedChampion}):null)))}}]),t}(s.Component),j=function(e){function t(){return Object(c.a)(this,t),Object(r.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return n.a.createElement("div",null,n.a.createElement("h3",{className:"abilityInfo"},this.props.abilityInfo))}}]),t}(s.Component),H=function(e){function t(){var e;return Object(c.a)(this,t),(e=Object(r.a)(this,Object(p.a)(t).call(this))).toggleHoverState=function(){e.setState({isHovering:!e.state.isHovering})},e.handleMouseHover=function(t){t.preventDefault(),e.toggleHoverState(),"passive"===t.target.id?e.setState({abilityInfo:e.state.champPassive.name}):e.setState({abilityInfo:e.state[t.target.id].description})},e.state={champDetails:{},champPassive:{},champSpell0:{},champSpell1:{},champSpell2:{},champSpell3:{},isHovering:!1,abilityInfo:"",champPassiveImg:"",champSpell0Img:"",champSpell1Img:"",champSpell2Img:"",champSpell3Img:""},e}return Object(h.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){var e=this;u()({url:"http://ddragon.leagueoflegends.com/cdn/10.4.1/data/en_US/champion/".concat(this.props.selectedChamp,".json"),method:"GET",responseType:"json"}).then((function(t){e.setState({champDetails:t.data.data[e.props.selectedChamp],champPassive:t.data.data[e.props.selectedChamp].passive,champSpell0:t.data.data[e.props.selectedChamp].spells[0],champSpell1:t.data.data[e.props.selectedChamp].spells[1],champSpell2:t.data.data[e.props.selectedChamp].spells[2],champSpell3:t.data.data[e.props.selectedChamp].spells[3],champPassiveImg:t.data.data[e.props.selectedChamp].passive.image.full,champSpell0Img:t.data.data[e.props.selectedChamp].spells[0].image.full,champSpell1Img:t.data.data[e.props.selectedChamp].spells[1].image.full,champSpell2Img:t.data.data[e.props.selectedChamp].spells[2].image.full,champSpell3Img:t.data.data[e.props.selectedChamp].spells[3].image.full})}))}},{key:"render",value:function(){return this.state.champDetails&&n.a.createElement("div",{className:"champDetailed"},n.a.createElement("h1",{className:"champDetailed"},"Champion Select Helper"),n.a.createElement("div",{className:"textAndImgContainer"},n.a.createElement("div",{className:"textBox"},n.a.createElement("h2",null,this.state.champDetails.name),n.a.createElement("h3",null,this.state.champDetails.title),n.a.createElement("p",null,this.state.champDetails.lore)),n.a.createElement("img",{src:"https://ddragon.leagueoflegends.com/cdn/img/champion/splash/".concat(this.state.champDetails.id,"_0.jpg"),alt:"".concat(this.state.champDetails.name,", ").concat(this.state.champDetails.title)})),n.a.createElement("div",{className:"abilities"},n.a.createElement("h2",null,"Champion Passive and Abilities"),n.a.createElement("h3",null,"Touch me!!!"),n.a.createElement("div",{className:"icons"},n.a.createElement("img",{src:"http://ddragon.leagueoflegends.com/cdn/10.4.1/img/passive/".concat(this.state.champPassiveImg),alt:"The passive of ".concat(this.state.champDetails.name,", ").concat(this.state.champPassive.name),id:"passive",onMouseEnter:this.handleMouseHover,onMouseLeave:this.handleMouseHover,tabIndex:"0",onFocus:this.handleMouseHover,onBlur:this.handleMouseHover}),n.a.createElement("img",{src:"http://ddragon.leagueoflegends.com/cdn/10.4.1/img/spell/".concat(this.state.champSpell0Img),alt:"First ability of ".concat(this.state.champDetails.name,", ").concat(this.state.champSpell0.name),id:"champSpell0",onMouseEnter:this.handleMouseHover,onMouseLeave:this.handleMouseHover,tabIndex:"0",onFocus:this.handleMouseHover,onBlur:this.handleMouseHover}),n.a.createElement("img",{src:"http://ddragon.leagueoflegends.com/cdn/10.4.1/img/spell/".concat(this.state.champSpell1Img),alt:"Second ability of ".concat(this.state.champDetails.name,", ").concat(this.state.champSpell1.name),id:"champSpell1",onMouseEnter:this.handleMouseHover,onMouseLeave:this.handleMouseHover,tabIndex:"0",onFocus:this.handleMouseHover,onBlur:this.handleMouseHover}),n.a.createElement("img",{src:"http://ddragon.leagueoflegends.com/cdn/10.4.1/img/spell/".concat(this.state.champSpell2Img),alt:"Third ability of ".concat(this.state.champDetails.name,", ").concat(this.state.champSpell2.name),id:"champSpell2",onMouseEnter:this.handleMouseHover,onMouseLeave:this.handleMouseHover,tabIndex:"0",onFocus:this.handleMouseHover,onBlur:this.handleMouseHover}),n.a.createElement("img",{src:"http://ddragon.leagueoflegends.com/cdn/10.4.1/img/spell/".concat(this.state.champSpell3Img),alt:"Ultimate ability of ".concat(this.state.champDetails.name,", ").concat(this.state.champSpell3.name),id:"champSpell3",onMouseEnter:this.handleMouseHover,onMouseLeave:this.handleMouseHover,tabIndex:"0",onFocus:this.handleMouseHover,onBlur:this.handleMouseHover})),n.a.createElement("div",{className:"abilityInfo"},this.state.isHovering&&n.a.createElement(j,{abilityInfo:this.state.abilityInfo}))))}}]),t}(s.Component),I=function(e){function t(){var e;return Object(c.a)(this,t),(e=Object(r.a)(this,Object(p.a)(t).call(this))).userSelectedChampion=function(t){e.setState({isMainPage:!e.state.isMainPage,isChampDetailPage:!e.state.isChampDetailPage,selectedChamp:t})},e.startPageHandleClick=function(){e.setState({isStartPage:!e.state.isStartPage,isMainPage:!e.state.isMainPage})},e.state={fullChampions:[],championsToDisplay:[],isStartPage:!0,isMainPage:!1,isChampDetailPage:!1,selectedChamp:""},e}return Object(h.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){var e=this;u()({url:"http://ddragon.leagueoflegends.com/cdn/10.4.1/data/en_US/champion.json",method:"GET",responseType:"json"}).then((function(t){var a=[];for(var s in t.data.data)a.push(t.data.data[s]);e.setState({fullChampions:a,championsToDisplay:a})}))}},{key:"render",value:function(){return n.a.createElement("div",{className:"App"},n.a.createElement("div",{className:"wrapper"},this.state.isStartPage?n.a.createElement(d,{buttonClick:this.startPageHandleClick}):null,this.state.isMainPage?n.a.createElement(M,{champions:this.state.championsToDisplay,userSelectedChampion:this.userSelectedChampion}):null,this.state.isChampDetailPage?n.a.createElement(H,{selectedChamp:this.state.selectedChamp}):null))}}]),t}(s.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(n.a.createElement(I,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[21,1,2]]]);
//# sourceMappingURL=main.f04d62a1.chunk.js.map