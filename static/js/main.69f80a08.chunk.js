(this.webpackJsonpcovid_kanvas=this.webpackJsonpcovid_kanvas||[]).push([[0],{102:function(e,a,t){},103:function(e,a,t){},104:function(e,a,t){},105:function(e,a,t){},106:function(e,a,t){},200:function(e,a,t){},201:function(e,a,t){},202:function(e,a,t){},203:function(e,a,t){},206:function(e,a,t){},207:function(e,a,t){},208:function(e,a,t){},209:function(e,a,t){},210:function(e,a,t){},211:function(e,a,t){},212:function(e,a,t){"use strict";t.r(a);var n=t(0),s=t.n(n),r=t(71),i=t.n(r),l=(t(85),t(1)),o=t(2),c=t(4),d=t(3),h=t(16),m=t(6),u=t.n(m),p=(t(102),function(e){return s.a.createElement("div",{className:"sk-chase"},s.a.createElement("div",{className:"sk-chase-dot"}),s.a.createElement("div",{className:"sk-chase-dot"}),s.a.createElement("div",{className:"sk-chase-dot"}),s.a.createElement("div",{className:"sk-chase-dot"}),s.a.createElement("div",{className:"sk-chase-dot"}),s.a.createElement("div",{className:"sk-chase-dot"}))}),g=(t(25),t(103),t(104),function(e){Object(c.a)(t,e);var a=Object(d.a)(t);function t(){var e;Object(l.a)(this,t);for(var n=arguments.length,s=new Array(n),r=0;r<n;r++)s[r]=arguments[r];return(e=a.call.apply(a,[this].concat(s))).state={state_data:[],district_data:[{district_name:[]},{district_cases:[]}]},e.capitalizeFirstLetter=function(e){return e.toLowerCase().split(" ").map((function(e){return e.charAt(0).toUpperCase()+e.substring(1)})).join(" ")},e.searchDeleteHandler=function(){e.setState({district_data:[{district_name:[]},{district_cases:[]}],district:""})},e}return Object(o.a)(t,[{key:"componentDidUpdate",value:function(e){var a=this;e.searched!==this.props.searched&&u.a.get("https://api.covid19india.org/state_district_wise.json").then((function(e){a.setState({state_data:e.data});var t=[],n=[];for(var s in a.state.state_data){var r=a.capitalizeFirstLetter(a.props.searched);if(a.capitalizeFirstLetter(s)===r){for(var i in a.state.state_data[s].districtData)t.push(i),n.push(a.state.state_data[s].districtData[i].confirmed);a.props.ifSearched(r)}}a.setState({district_data:[{district_name:t},{district_cases:n}]})}))}},{key:"render",value:function(){var e=this,a=null,t=null;return this.state.district_data[1].district_cases.length&&(t=this.state.district_data[0].district_name.map((function(a,t){return e.state.district_data[1].district_cases.map((function(e,n){var r=null;return t===n&&(r=s.a.createElement("tr",{key:t},s.a.createElement("td",null,s.a.createElement("strong",null,a)),s.a.createElement("td",null,e))),r}))})),a=s.a.createElement("div",null,s.a.createElement("div",{className:"searchResultBox"},s.a.createElement("table",{className:"SearchResult",style:{padding:"0px"}},s.a.createElement("thead",null,s.a.createElement("tr",null,s.a.createElement("th",{style:{fontSize:"30px"}},this.props.searched.toUpperCase()),s.a.createElement("th",{style:{textAlign:"right",marginLeft:"30%"}}," ",s.a.createElement("button",{onClick:this.searchDeleteHandler},s.a.createElement("i",{className:"fa fa-times fa-lg","aria-hidden":"true",style:{color:"#726B6B"}})))),s.a.createElement("tr",null,s.a.createElement("th",{style:{fontSize:"20px"},className:"districtNames"},s.a.createElement("pre",{style:{cursor:"pointer",fontFamily:"inherit",borderBottom:"1px solid black"}}," ","District")),s.a.createElement("th",{style:{fontSize:"20px"}},s.a.createElement("pre",{style:{cursor:"pointer",fontFamily:"inherit",borderBottom:"1px solid black"}},"No.Of Cases")))),s.a.createElement("tbody",null,t))))),s.a.createElement("div",null,s.a.createElement("div",{style:{paddingLeft:"30%"}},a))}}]),t}(s.a.Component)),f=function(e){Object(c.a)(t,e);var a=Object(d.a)(t);function t(){var e;Object(l.a)(this,t);for(var n=arguments.length,s=new Array(n),r=0;r<n;r++)s[r]=arguments[r];return(e=a.call.apply(a,[this].concat(s))).state={district:"",input:"Search For Your State",ifSearched:!1},e.changeHandler=function(a){a.preventDefault(),e.setState({input:a.target.value})},e.submitHandler=function(a){a.preventDefault(),e.setState({district:e.state.input}),document.getElementById("searchfield").value=""},e.ifSearchedHandler=function(a){e.setState({ifSearched:!0}),e.props.handleSearchGraph(a)},e}return Object(o.a)(t,[{key:"componentDidUpdate",value:function(e){this.props.tableSelectedTerm!==e.tableSelectedTerm&&""!==this.props.tableSelectedTerm&&this.setState({district:this.props.tableSelectedTerm})}},{key:"render",value:function(){return s.a.createElement("div",{className:"Search"},s.a.createElement("form",null,s.a.createElement("input",{type:"text",className:"SearchBar",placeholder:"Search For Your State",onChange:this.changeHandler,id:"searchfield"}),s.a.createElement("button",{className:"placeholder",onClick:this.submitHandler,style:{backgroundColor:"transparent"}},s.a.createElement("i",{className:"fa fa-search fa-2x"}))),s.a.createElement(g,{searched:this.state.district,ifSearched:this.ifSearchedHandler}))}}]),t}(s.a.Component),y=(t(105),function(e){return e.data.map((function(e){return s.a.createElement("div",{key:e.statecode,className:"TimeStamp"},s.a.createElement("strong",null,"Last Updated On:",e.lastupdatedtime," ")," ")}))}),v=(t(106),t(20)),b=t(19),E=function(e){Object(c.a)(t,e);var a=Object(d.a)(t);function t(e){var n;return Object(l.a)(this,t),(n=a.call(this,e)).state={countryDailyCases:[],countryConfirmedCases:[],countryDate:[],Data:{},hideIt:!1},n}return Object(o.a)(t,[{key:"componentDidMount",value:function(){var e=this;u.a.get("https://api.covid19india.org/data.json").then((function(a){var t=[],n=[],s=[];a.data.cases_time_series.forEach((function(e){t.push(e.date),n.push(e.totalconfirmed),s.push(e.dailyconfirmed)})),e.setState({countryDailyCases:s,countryConfirmedCases:n,countryDate:t,Data:{labels:t,datasets:[{data:[].concat(s),fill:!0,lineTension:.5,backgroundColor:"rgba(255, 102, 102,0.6)",borderColor:"red",borderWidth:2}]}})}))}},{key:"componentDidUpdate",value:function(e){var a=this;if(this.props.searchTerm!==e.searchTerm||this.props.graphType!==e.graphType){var t=[];""!==this.props.searchTerm?u.a.get("https://api.covid19india.org/states_daily.json").then((function(e){var t=[],n=[],s={"Andhra Pradesh":"AP","Arunachal Pradesh":"AR",Assam:"AS",Bihar:"BR",Chhattisgarh:"CT",Goa:"GA",Gujarat:"GJ",Haryana:"HR","Himachal Pradesh":"HP","Jammu And Kashmir":"JK",Jharkhand:"JH",Karnataka:"KA",Kerala:"KL","Madhya Pradesh":"MP",Maharashtra:"MH",Manipur:"MN",Meghalaya:"ML",Mizoram:"MZ",Nagaland:"NL",Odisha:"OR",Punjab:"PB",Rajasthan:"RJ",Sikkim:"SK","Tamil Nadu":"TN",Telangana:"TG",Tripura:"TR",Uttarakhand:"UT","Uttar Pradesh":"UP","West Bengal":"WB","Andaman And Nicobar Islands":"AN",Chandigarh:"CH","Dadra And Nagar Haveli":"DN","Daman And Diu":"DD",Delhi:"DL",Lakshadweep:"LD",Puducherry:"PY"}[a.props.searchTerm];if(s)if(a.setState({hideIt:!1}),s=s.toLowerCase(),"daily"===a.props.graphType)for(var r=0;r<e.data.states_daily.length;r+=3)n.push(e.data.states_daily[r][s]),t.push(e.data.states_daily[r].date);else for(var i=0,l=0;l<e.data.states_daily.length;l+=3)i+=+e.data.states_daily[l][s],n.push(i),t.push(e.data.states_daily[l].date);else a.setState({hideIt:!0});a.setState({Data:{labels:t,datasets:[{data:[].concat(n),fill:!0,lineTension:.5,backgroundColor:"rgba(255, 102, 102,0.6)",borderColor:"red",borderWidth:2}]}})})):("daily"===this.props.graphType?t=this.state.countryDailyCases:"cumulative"===this.props.graphType&&(t=this.state.countryConfirmedCases),t!==[]&&(this.setState({Data:{labels:this.state.countryDate,datasets:[{data:Object(v.a)(t),fill:!0,lineTension:.5,backgroundColor:"rgba(255, 102, 102,0.6)",borderColor:"red",borderWidth:2}]}}),t=[]))}}},{key:"render",value:function(){return!0===this.state.hideIt?s.a.createElement("h3",null,"No graphs to show."):s.a.createElement("div",{className:"totalcasegraph"},s.a.createElement(b.a,{width:100,height:300,data:this.state.Data,options:{scales:{xAxes:[{display:!1}]},maintainAspectRatio:!1,title:{text:"Confirmed Cases",fontSize:25,fontColor:"black",display:!0},legend:{display:!1,position:"right"}}}))}}]),t}(s.a.Component),C=function(e){Object(c.a)(t,e);var a=Object(d.a)(t);function t(){var e;Object(l.a)(this,t);for(var n=arguments.length,s=new Array(n),r=0;r<n;r++)s[r]=arguments[r];return(e=a.call.apply(a,[this].concat(s))).state={countryDailyCases:[],countryDeceasedCases:[],countryDate:[],Data:{},hideIt:!1},e}return Object(o.a)(t,[{key:"componentDidMount",value:function(){var e=this;u.a.get("https://api.covid19india.org/data.json").then((function(a){var t=[],n=[],s=[];a.data.cases_time_series.forEach((function(e){t.push(e.date),n.push(e.totaldeceased),s.push(e.dailydeceased)})),e.setState({countryDailyCases:s,countryDeceasedCases:n,countryDate:t,Data:{labels:t,datasets:[{data:[].concat(s),fill:!0,lineTension:.5,backgroundColor:"rgba(217, 217, 217,0.6)",borderColor:"grey",borderWidth:2}]}})}))}},{key:"componentDidUpdate",value:function(e){var a=this;if(this.props.searchTerm!==e.searchTerm||this.props.graphType!==e.graphType)if(""!==this.props.searchTerm)u.a.get("https://api.covid19india.org/states_daily.json").then((function(e){var t=[],n=[],s={"Andhra Pradesh":"AP","Arunachal Pradesh":"AR",Assam:"AS",Bihar:"BR",Chhattisgarh:"CT",Goa:"GA",Gujarat:"GJ",Haryana:"HR","Himachal Pradesh":"HP","Jammu And Kashmir":"JK",Jharkhand:"JH",Karnataka:"KA",Kerala:"KL","Madhya Pradesh":"MP",Maharashtra:"MH",Manipur:"MN",Meghalaya:"ML",Mizoram:"MZ",Nagaland:"NL",Odisha:"OR",Punjab:"PB",Rajasthan:"RJ",Sikkim:"SK","Tamil Nadu":"TN",Telangana:"TG",Tripura:"TR",Uttarakhand:"UT","Uttar Pradesh":"UP","West Bengal":"WB","Andaman And Nicobar Islands":"AN",Chandigarh:"CH","Dadra And Nagar Haveli":"DN","Daman And Diu":"DD",Delhi:"DL",Lakshadweep:"LD",Puducherry:"PY"}[a.props.searchTerm];if(s)if(a.setState({hideIt:!1}),s=s.toLowerCase(),"daily"===a.props.graphType)for(var r=2;r<e.data.states_daily.length;r+=3)n.push(e.data.states_daily[r][s]),t.push(e.data.states_daily[r].date);else for(var i=0,l=2;l<e.data.states_daily.length;l+=3)i+=+e.data.states_daily[l][s],n.push(i),t.push(e.data.states_daily[l].date);else a.setState({hideIt:!0});a.setState({Data:{labels:t,datasets:[{data:n,fill:!0,lineTension:.5,backgroundColor:"rgba(217, 217, 217,0.6)",borderColor:"grey",borderWidth:2}]}})}));else{var t=[];"daily"===this.props.graphType?t=this.state.countryDailyCases:"cumulative"===this.props.graphType&&(t=this.state.countryDeceasedCases),t!==[]&&(this.setState({Data:{labels:this.state.countryDate,datasets:[{data:Object(v.a)(t),fill:!0,lineTension:.5,backgroundColor:"rgba(217, 217, 217,0.6)",borderColor:"grey",borderWidth:2}]}}),t=[])}}},{key:"render",value:function(){return!0===this.state.hideIt?null:s.a.createElement("div",{className:"deceasedcasegraph"},s.a.createElement(b.a,{width:100,height:300,data:this.state.Data,options:{scales:{xAxes:[{display:!1}]},maintainAspectRatio:!1,title:{text:"Deceased Cases",fontColor:"black",fontSize:25,display:!0},legend:{display:!1,position:"right"}}}))}}]),t}(s.a.Component),N=function(e){Object(c.a)(t,e);var a=Object(d.a)(t);function t(){var e;Object(l.a)(this,t);for(var n=arguments.length,s=new Array(n),r=0;r<n;r++)s[r]=arguments[r];return(e=a.call.apply(a,[this].concat(s))).state={countryDailyCases:[],countryRecoveredCases:[],countryDate:[],Data:{},hideIt:!1},e}return Object(o.a)(t,[{key:"componentDidMount",value:function(){var e=this;u.a.get("https://api.covid19india.org/data.json").then((function(a){var t=[],n=[],s=[];a.data.cases_time_series.forEach((function(e){t.push(e.date),n.push(e.totalrecovered),s.push(e.dailyrecovered)})),e.setState({countryDailyCases:s,countryRecoveredCases:n,countryDate:t,Data:{labels:t,datasets:[{data:[].concat(s),fill:!0,lineTension:.5,backgroundColor:"rgba(0, 230, 77,0.6)",borderColor:"green",borderWidth:2}]}})}))}},{key:"componentDidUpdate",value:function(e){var a=this;if(this.props.searchTerm!==e.searchTerm||this.props.graphType!==e.graphType)if(""!==this.props.searchTerm)u.a.get("https://api.covid19india.org/states_daily.json").then((function(e){var t=[],n=[],s={"Andhra Pradesh":"AP","Arunachal Pradesh":"AR",Assam:"AS",Bihar:"BR",Chhattisgarh:"CT",Goa:"GA",Gujarat:"GJ",Haryana:"HR","Himachal Pradesh":"HP","Jammu And Kashmir":"JK",Jharkhand:"JH",Karnataka:"KA",Kerala:"KL","Madhya Pradesh":"MP",Maharashtra:"MH",Manipur:"MN",Meghalaya:"ML",Mizoram:"MZ",Nagaland:"NL",Odisha:"OR",Punjab:"PB",Rajasthan:"RJ",Sikkim:"SK","Tamil Nadu":"TN",Telangana:"TG",Tripura:"TR",Uttarakhand:"UT","Uttar Pradesh":"UP","West Bengal":"WB","Andaman And Nicobar Islands":"AN",Chandigarh:"CH","Dadra And Nagar Haveli":"DN","Daman And Diu":"DD",Delhi:"DL",Lakshadweep:"LD",Puducherry:"PY"}[a.props.searchTerm];if(s)if(a.setState({hideIt:!1}),s=s.toLowerCase(),"daily"===a.props.graphType)for(var r=1;r<e.data.states_daily.length;r+=3)n.push(e.data.states_daily[r][s]),t.push(e.data.states_daily[r].date);else for(var i=0,l=1;l<e.data.states_daily.length;l+=3)i+=+e.data.states_daily[l][s],n.push(i),t.push(e.data.states_daily[l].date);else a.setState({hideIt:!0});a.setState({Data:{labels:t,datasets:[{data:n,fill:!0,lineTension:.5,backgroundColor:"rgba(0, 230, 77,0.6)",borderColor:"green",borderWidth:2}]}})}));else{var t=[];"daily"===this.props.graphType?t=this.state.countryDailyCases:"cumulative"===this.props.graphType&&(t=this.state.countryRecoveredCases),t!==[]&&(this.setState({Data:{labels:this.state.countryDate,datasets:[{data:Object(v.a)(t),fill:!0,lineTension:.5,backgroundColor:"rgba(0, 230, 77,0.6)",borderColor:"green",borderWidth:2}]}}),t=[])}}},{key:"render",value:function(){return!0===this.state.hideIt?null:s.a.createElement("div",{className:"recoveredcasegraph"},s.a.createElement(b.a,{width:700,height:300,data:this.state.Data,options:{scales:{xAxes:[{display:!1}]},maintainAspectRatio:!1,title:{text:"Recovered Cases",fontColor:"black",fontSize:25,display:!0},legend:{display:!1,position:"right"}}}))}}]),t}(s.a.Component),D=function(e){Object(c.a)(t,e);var a=Object(d.a)(t);function t(e){var n;return Object(l.a)(this,t),(n=a.call(this,e)).state={graphType:"daily"},n.handleChange=n.handleChange.bind(Object(h.a)(n)),n}return Object(o.a)(t,[{key:"handleChange",value:function(e){this.setState({graphType:e.target.value})}},{key:"render",value:function(){return s.a.createElement("div",{className:"Graphs"},s.a.createElement("select",{id:"graphType",onChange:this.handleChange,style:{padding:"10px",fontSize:"20px",borderRadius:"3px",backgroundColor:"#eee"}},s.a.createElement("option",{value:"daily"},"Daily cases"),s.a.createElement("option",{value:"cumulative"},"Cumulative cases")),s.a.createElement("h1",{style:{fontSize:"50px"}},this.props.searchTerm),s.a.createElement("div",{className:"graph"},s.a.createElement(E,{searchTerm:this.props.searchTerm,graphType:this.state.graphType})),s.a.createElement("div",{className:"graph"},s.a.createElement(N,{searchTerm:this.props.searchTerm,graphType:this.state.graphType})),s.a.createElement("div",{className:"graph"},s.a.createElement(C,{searchTerm:this.props.searchTerm,graphType:this.state.graphType})))}}]),t}(s.a.Component),T=(t(200),function(e){Object(c.a)(t,e);var a=Object(d.a)(t);function t(){var e;Object(l.a)(this,t);for(var n=arguments.length,s=new Array(n),r=0;r<n;r++)s[r]=arguments[r];return(e=a.call.apply(a,[this].concat(s))).state={state_data:[],total_data:[]},e.capitalizeFirstLetter=function(e){return e.toLowerCase().split(" ").map((function(e){return e.charAt(0).toUpperCase()+e.substring(1)})).join(" ")},e}return Object(o.a)(t,[{key:"componentDidMount",value:function(){var e=this;u.a.get("https://api.covid19india.org/data.json").then((function(a){e.setState({state_data:a.data.statewise.slice(1,38)}),e.setState({total_data:a.data.statewise.slice(0,1)})}))}},{key:"render",value:function(){var e=this,a=this.state.state_data.map((function(a){return s.a.createElement("tr",{key:a.statecode,onClick:function(){e.props.onClick(e.capitalizeFirstLetter(a.state))}},s.a.createElement("td",{className:"States"},a.state),s.a.createElement("td",{className:"Confirmed"},a.confirmed),s.a.createElement("td",{className:"Active"},a.active),s.a.createElement("td",{className:"Recovered"},a.recovered),s.a.createElement("td",{className:"Deaths"},a.deaths))})),t=this.state.total_data.map((function(e){return s.a.createElement("tr",{key:e.statecode},s.a.createElement("td",{className:"States"}," ",s.a.createElement("hr",null),e.state," "),s.a.createElement("td",{className:"Confirmed"}," ",s.a.createElement("hr",null),e.confirmed),s.a.createElement("td",{className:"Active"}," ",s.a.createElement("hr",null),e.active),s.a.createElement("td",{className:"Recovered"}," ",s.a.createElement("hr",null),e.recovered),s.a.createElement("td",{className:"Deaths"}," ",s.a.createElement("hr",null),e.deaths," "))}));return s.a.createElement("div",{className:"table"},s.a.createElement("table",null,s.a.createElement("thead",{style:{borderBottom:"1px solid black"}},s.a.createElement("tr",{className:"headrow"},s.a.createElement("th",null,"STATE/UT",s.a.createElement("hr",null)),s.a.createElement("th",null,"CONFIRMED",s.a.createElement("hr",null)),s.a.createElement("th",null,"ACTIVE",s.a.createElement("hr",null)),s.a.createElement("th",null,"RECOVERED",s.a.createElement("hr",null)),s.a.createElement("th",null,"DECEASED",s.a.createElement("hr",null)))),s.a.createElement("tbody",null,a),s.a.createElement("tbody",null,t)))}}]),t}(s.a.Component)),S=(t(201),function(e){var a=e.data.map((function(e){return s.a.createElement("div",{className:"Head",key:e.statecode},s.a.createElement("div",{className:"ConfirmedData section"},s.a.createElement("h1",{className:"label"},"Confirmed"),s.a.createElement("div",{className:"numbers"},e.confirmed)),s.a.createElement("div",{className:"ActiveData section"},s.a.createElement("h1",{className:"label"},"Active"),s.a.createElement("div",{className:"numbers"},e.active)),s.a.createElement("div",{className:"RecoveredData section"},s.a.createElement("h1",{className:"label"},"Recovered"),s.a.createElement("div",{className:"numbers"},e.recovered)),s.a.createElement("div",{className:"DeathsData section"},s.a.createElement("h1",{className:"label"},"Deaths"),s.a.createElement("div",{className:"numbers"},e.deaths)))}));return s.a.createElement("div",{className:"Header"},a)}),k=(t(202),function(e){Object(c.a)(t,e);var a=Object(d.a)(t);function t(e){var n;return Object(l.a)(this,t),(n=a.call(this,e)).state={posts:[],Total:[],labels:[],loading:!0,searchTerm:"",tableSelectedTerm:"",showGraphs:!0},n.handleSearchGraph=n.handleSearchGraph.bind(Object(h.a)(n)),n.handleTableSelectedTerm=n.handleTableSelectedTerm.bind(Object(h.a)(n)),n}return Object(o.a)(t,[{key:"handleTableSelectedTerm",value:function(e){this.setState({tableSelectedTerm:e})}},{key:"handleSearchGraph",value:function(e){this.setState({searchTerm:e})}},{key:"componentDidMount",value:function(){var e=this;u.a.get("https://api.covid19india.org/data.json").then((function(a){e.setState({posts:a.data.statewise.slice(1,38)}),e.setState({Total:a.data.statewise.slice(0,1)}),e.setState({timeStamp:a.data.statewise.slice(0,1).lastupdatedtime}),e.setState({loading:!1})}))}},{key:"render",value:function(){var e=this,a=s.a.createElement("div",{style:{marginLeft:"49%",marginTop:"20%"}},s.a.createElement(p,null));return this.state.loading?s.a.createElement("div",null,s.a.createElement("div",null,a)):s.a.createElement("div",{className:"App"},s.a.createElement("h1",{className:"heading"},"COVID-19 INDIA TRACKER"),s.a.createElement("div",{className:"headbox",style:{textAlign:"center",marginLeft:"-75px"}},s.a.createElement(S,{data:this.state.Total})),s.a.createElement("div",{className:"Content"},s.a.createElement("div",{style:{marginTop:"10%"},className:"headerdiv"}," ",s.a.createElement(y,{data:this.state.Total}),s.a.createElement(f,{handleSearchGraph:this.handleSearchGraph,tableSelectedTerm:this.state.tableSelectedTerm}),s.a.createElement(D,{searchTerm:this.state.searchTerm})),s.a.createElement(T,{onClick:function(a){e.handleTableSelectedTerm(a)}})))}}]),t}(s.a.Component)),O=t(17),j=t(73),A=t.n(j),w=(t(203),function(e){Object(c.a)(t,e);var a=Object(d.a)(t);function t(){var e;Object(l.a)(this,t);for(var n=arguments.length,s=new Array(n),r=0;r<n;r++)s[r]=arguments[r];return(e=a.call.apply(a,[this].concat(s))).myFunction=function(){var e=document.getElementById("myTopnav");"topnav"===e.className?e.className+=" responsive":e.className="topnav"},e}return Object(o.a)(t,[{key:"render",value:function(){return s.a.createElement("div",{className:"NavBar"},s.a.createElement("div",{className:"topnav",id:"myTopnav"},s.a.createElement(O.b,{to:"/",exact:!0},s.a.createElement("img",{src:A.a,alt:"coronaicon",style:{width:"9%",marginLeft:"-10px",backgroundColor:"white"}})," ","COVID-19 INDIA"),s.a.createElement(O.b,{to:"/faq/",exact:!0,className:"Faq"},s.a.createElement("i",{className:"fa fa-question-circle","aria-hidden":"true"})," FAQs"),s.a.createElement(O.b,{to:"/suggestion/",exact:!0,className:"suggestions"},s.a.createElement("i",{className:"fa fa-lightbulb-o","aria-hidden":"true"})," Suggestions"),s.a.createElement(O.b,{to:"/about",className:"about"},s.a.createElement("i",{className:"fas fa-virus"}),"About COVID-19"),s.a.createElement("button",{className:"icon",onClick:this.myFunction,style:{backgroundColor:"transparent",color:"white",fontSize:"20px",padding:"13px"}},s.a.createElement("i",{className:"fa fa-bars"}))))}}]),t}(s.a.Component)),_=(t(206),t(207),function(e){return s.a.createElement("button",{className:"Button Success",onClick:e.clicked},e.children)}),x=function(e){Object(c.a)(t,e);var a=Object(d.a)(t);function t(){var e;Object(l.a)(this,t);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(e=a.call.apply(a,[this].concat(r))).state={name:"",mail:"",phone:"",suggestion:"",nameChange:"",mailChange:"",phoneChange:"",suggestionChange:"",result:"",loading:!1},e.nameChangeHandler=function(a){a.preventDefault(),e.setState({nameChange:a.target.value})},e.mailChangeHandler=function(a){a.preventDefault(),e.setState({mailChange:a.target.value})},e.phoneChangeHandler=function(a){a.preventDefault(),e.setState({phoneChange:a.target.value})},e.suggestionChangeHandler=function(a){a.preventDefault(),e.setState({suggestionChange:a.target.value})},e.submitHandler=function(a){e.setState({loading:!0}),e.setState({name:e.state.nameChange,mail:e.state.mailChange,phone:e.state.phoneChange,suggestion:e.state.suggestionChange}),a.preventDefault();var t={nameinput:e.state.nameChange,emailinput:e.state.mailChange,phoneinput:e.state.phoneChange,suggestioninput:e.state.suggestionChange};console.log(e.state.nameChange),""!==t.nameinput&&""!==t.emailinput&&""!==t.phoneinput&&""!==t.suggestioninput&&""!==t.nameinput?u.a.post("https://covid-kanvas.firebaseio.com/covid-kanvas.json",t).then((function(a){e.setState({nameChange:"",mailChange:"",phoneChange:"",suggestionChange:"",result:s.a.createElement("p",{className:"success"},"Your Suggestion Has Been Submitted Successfully"),loading:!1}),document.getElementById("suggestionForm").reset()})):e.setState({loading:!1,result:s.a.createElement("p",{className:"fail"},"Please Fill Out All Fields")})},e}return Object(o.a)(t,[{key:"render",value:function(){var e=s.a.createElement("div",{className:"suggestionForm"},s.a.createElement("h4",null,"Please Fill Your Details And Suggestions To Fight COVID-19"),s.a.createElement("h5",null,"By Everyone's Support We Can defeat Corona"),s.a.createElement("form",{id:"suggestionForm",className:"InputFields"},s.a.createElement("p",null," Your Name : "),s.a.createElement("input",{type:"text",placeholder:"Name",className:"InputElement",onChange:this.nameChangeHandler}),s.a.createElement("p",null,"Your E-Mail ID :"),s.a.createElement("input",{type:"tex",placeholder:"E-Mail",className:"InputElement",onChange:this.mailChangeHandler}),s.a.createElement("p",null,"Your Contact No. :"),s.a.createElement("input",{type:"text",placeholder:"Contact No.",className:"InputElement",onChange:this.phoneChangeHandler}),s.a.createElement("p",null,"Your Suggestion For Fight Against Coronavirus"),s.a.createElement("textarea",{placeholder:"Suggestion",className:"InputElement",onChange:this.suggestionChangeHandler}),s.a.createElement(_,{className:"SubmitButton",clicked:this.submitHandler},"SUBMIT"),this.state.result));return this.state.loading&&(e=s.a.createElement("div",{className:"suggestionForm",style:{justifyContent:"center",textAlign:"center",paddingLeft:"15%"}},s.a.createElement(p,null))),s.a.createElement("div",null,e)}}]),t}(s.a.Component),I=t(14),H=(t(208),t(76)),P=t.n(H),M=t(77),R=t.n(M),L=t(78),B=t.n(L),F=t(79),G=t.n(F),U=function(e){Object(c.a)(t,e);var a=Object(d.a)(t);function t(){return Object(l.a)(this,t),a.apply(this,arguments)}return Object(o.a)(t,[{key:"render",value:function(){return s.a.createElement("div",{className:"aboutPage"},s.a.createElement("h1",{style:{borderLeft:"3px solid #4db8ff",paddingLeft:"10px"}},"What Is COVID-19 ?"),s.a.createElement("img",{src:B.a,alt:"covid19.jpg",className:"covid"}),s.a.createElement("p",{className:"firstline"},"COVID-19 is the infectious disease caused by the most recently discovered coronavirus. This new virus and disease were unknown before the outbreak began in Wuhan, China, in December 2019."),s.a.createElement("p",{className:"secondline"},"Coronaviruses are a large family of viruses which may cause illness in animals or humans.  In humans, several coronaviruses are known to cause respiratory infections ranging from the common cold to more severe diseases such as Middle East Respiratory Syndrome (MERS) and Severe Acute Respiratory Syndrome (SARS). The most recently discovered coronavirus causes coronavirus disease COVID-19."),s.a.createElement("h1",{style:{borderLeft:"3px solid #4db8ff",paddingLeft:"10px"}},"How Does COVID-19 Spread?"),s.a.createElement("img",{src:G.a,alt:"transmission.jpg",className:"transmission"}),s.a.createElement("p",{className:"firstline"},"People can catch COVID-19 from others who have the virus. The disease can spread from person to person through small droplets from the nose or mouth which are spread when a person with COVID-19 coughs or exhales. These droplets land on objects and surfaces around the person. Other people then catch COVID-19 by touching these objects or surfaces, then touching their eyes, nose or mouth. People can also catch COVID-19 if they breathe in droplets from a person with COVID-19 who coughs out or exhales droplets. This is why it is important to stay more than 1 meter (3 feet) away from a person who is sick."),s.a.createElement("p",{className:"secondline"},"WHO is assessing ongoing research on the ways COVID-19 is spread and will continue to share updated findings. "),s.a.createElement("h1",{style:{borderLeft:"3px solid #4db8ff",paddingLeft:"10px"}},"What Are The Symptoms Of COVID-19 ?"),s.a.createElement("img",{src:R.a,alt:"symptoms.jpg",className:"prevention"}),s.a.createElement("p",{className:"firstline"},"The most common symptoms of COVID-19 are fever, tiredness, and dry cough. Some patients may have aches and pains, nasal congestion, runny nose, sore throat or diarrhea. These symptoms are usually mild and begin gradually. Some people become infected but don\u2019t develop any symptoms and don't feel unwell. Most people (about 80%) recover from the disease without needing special treatment. Around 1 out of every 6 people who gets COVID-19 becomes seriously ill and develops difficulty breathing. Older people, and those with underlying medical problems like high blood pressure, heart problems or diabetes, are more likely to develop serious illness. People with fever, cough and difficulty breathing should seek medical attention."),s.a.createElement("h1",{style:{borderLeft:"3px solid #4db8ff",paddingLeft:"10px"}},"How to Protect Yourself and Others ?"),s.a.createElement("img",{src:P.a,alt:"prevention.jpg",className:"prevention"}),s.a.createElement("p",{className:"firstline"},"Protect yourself and others around you by knowing the facts and taking appropriate precautions. Follow advice provided by your local public health agency."),s.a.createElement("p",{className:"firstline"},"To prevent the spread of COVID-19:"),s.a.createElement("p",{className:"secondline bullets"}," ","\u25cf","  Clean your hands often. Use soap and water, or an alcohol-based hand rub."),s.a.createElement("p",{className:"secondline bullets"}," ","\u25cf","  Maintain a safe distance from anyone who is coughing or sneezing."),s.a.createElement("p",{className:"secondline bullets"}," ","\u25cf","  Don\u2019t touch your eyes, nose or mouth."),s.a.createElement("p",{className:"secondline bullets"}," ","\u25cf","  Cover your nose and mouth with your bent elbow or a tissue when you cough or sneeze."),s.a.createElement("p",{className:"secondline bullets"}," ","\u25cf","  Stay home if you feel unwell."),s.a.createElement("p",{className:"secondline bullets"}," ","\u25cf","  If you have a fever, a cough, and difficulty breathing, seek medical attention. Call in advance."),s.a.createElement("p",{className:"secondline bullets"}," ","\u25cf","  Follow the directions of your local health authority."),s.a.createElement("p",{className:"secondline bullets"}," ","\u25cf"," Avoiding unneeded visits to medical facilities allows healthcare systems to operate more effectively, therefore protecting you and others."),s.a.createElement("p",{className:"footer"},"For More Information Regarding COVID-19 Visit Govt. Of Inida Page ",s.a.createElement("strong",null,"my GOV")," https://www.mygov.in/ "))}}]),t}(s.a.Component),V=(t(209),function(e){Object(c.a)(t,e);var a=Object(d.a)(t);function t(){var e;Object(l.a)(this,t);for(var n=arguments.length,s=new Array(n),r=0;r<n;r++)s[r]=arguments[r];return(e=a.call.apply(a,[this].concat(s))).state={faqData:[]},e.componentDidMount=function(){u.a.get("https://api.covid19india.org/website_data.json").then((function(a){e.setState({faqData:a.data.faq})}))},e}return Object(o.a)(t,[{key:"render",value:function(){var e=this.state.faqData.map((function(e){return s.a.createElement("div",{key:e.qno,className:"faq"},s.a.createElement("p",{className:"question"},s.a.createElement("span",null,"Question",+e.qno+1,":")," ",e.question),s.a.createElement("p",{className:"answer"},s.a.createElement("strong",null,"Answer:")," ",e.answer))}));return s.a.createElement("div",{style:{justifyContent:"center"}},s.a.createElement("h3",{style:{textAlign:"center",paddingTop:"5%"}},"Some frequently asked questions"),e)}}]),t}(s.a.Component)),K=(t(210),function(e){return s.a.createElement("div",{className:"footerBar"},s.a.createElement("a",{href:"https://github.com/gawdsnitkkr"}," ",s.a.createElement("i",{className:"fa fa-github git icon","aria-hidden":"true"}),s.a.createElement("abbr",{className:"username"},"github.com/gawdsnitkkr")),s.a.createElement("a",{href:"https://www.instagram.com/_gawds/"}," ",s.a.createElement("i",{className:"fa fa-instagram insta icon","aria-hidden":"true"}),s.a.createElement("abbr",{className:"username"},"_gawds")))}),W=(t(211),function(e){Object(c.a)(t,e);var a=Object(d.a)(t);function t(){return Object(l.a)(this,t),a.apply(this,arguments)}return Object(o.a)(t,[{key:"render",value:function(){return s.a.createElement(O.a,null,s.a.createElement("div",{style:{textAlign:"center"}},s.a.createElement(w,null),s.a.createElement(I.c,null,s.a.createElement(I.a,{path:"/suggestion/",component:x}),s.a.createElement(I.a,{path:"/faq/",component:V}),s.a.createElement(I.a,{path:"/about/",component:U}),s.a.createElement(I.a,{path:"/",component:k})),s.a.createElement("h1",{style:{marginTop:"100px"},className:"footBanner"},"STAY HOME STAY SAFE"),s.a.createElement("div",null,s.a.createElement(K,null))))}}]),t}(s.a.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(s.a.createElement(W,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},73:function(e,a,t){e.exports=t.p+"static/media/coronavirus.cb8c0abc.ico"},76:function(e,a,t){e.exports=t.p+"static/media/prevention.52402838.jpg"},77:function(e,a,t){e.exports=t.p+"static/media/symptoms.7be5f5d8.jpg"},78:function(e,a,t){e.exports=t.p+"static/media/what is covid.28f9da41.jpg"},79:function(e,a,t){e.exports=t.p+"static/media/transmission.3aaea8f7.jpg"},80:function(e,a,t){e.exports=t(212)},85:function(e,a,t){}},[[80,1,2]]]);
//# sourceMappingURL=main.69f80a08.chunk.js.map