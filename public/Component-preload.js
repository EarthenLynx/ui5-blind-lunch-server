//@ui5-bundle sap/ui/etc/blindlunch/Component-preload.js
sap.ui.require.preload({
	"sap/ui/etc/blindlunch/Component.js":function(){sap.ui.define(["sap/ui/core/UIComponent","sap/ui/Device","./model/models"],function(e,t,i){"use strict";return e.extend("sap.ui.etc.blindlunch.Component",{metadata:{manifest:"json"},init:function(){e.prototype.init.apply(this,arguments);this.setModel(i.createDeviceModel(),"device");this.setModel(i.createLunchUserModel(),"lunchUser");this.setModel(i.createLunchUserMatchModel(),"lunchUserMatch");this.setModel(i.createLunchUserSignedUp(),"lunchUserSignedUp");this.getRouter().initialize()}})});
},
	"sap/ui/etc/blindlunch/controller/App.controller.js":function(){sap.ui.define(["sap/ui/core/mvc/Controller","sap/ui/demo/basicTemplate/model/formatter"],function(e,t){"use strict";return e.extend("sap.ui.etc.blindlunch.controller.App",{formatter:t,onInit:function(){}})});
},
	"sap/ui/etc/blindlunch/controller/Basecontroller.js":function(){sap.ui.define(["sap/ui/core/mvc/Controller","sap/m/Text","sap/m/Dialog","sap/m/Button","sap/m/MessageStrip"],function(e,t,n,o,s){"use strict";return e.extend("sap.ui.etc.blindlunch.controller.App",{onInit:function(){},_getHostname(e){if(e){return"http://localhost:3000"}else{return"http://localhost"}},_handleCreateMessageStrip(e,t,n){const o=this.getView().byId(n);const r=new s({text:e,type:t,showCloseButton:true,showIcon:true});o.addContent(r);setTimeout(()=>r.close(),1500)},_handleCreateConfirmationPopup(e,s){var r=new n({title:"Information",type:"Message",state:"Information",content:new t({text:e}),beginButton:new o({text:"Cancel",type:"Reject",press(){r.close();return}}),endButton:new o({text:"Confirm",type:"Accept",press(){if(s){s()}r.close()}}),afterClose(){r.destroy()}});r.open();return}})});
},
	"sap/ui/etc/blindlunch/controller/FindPartner.controller.js":function(){sap.ui.define(["./Basecontroller","sap/ui/model/json/JSONModel"],function(e,t){"use strict";return e.extend("sap.ui.etc.blindlunch.controller.Basecontroller",{getLunchPartner(){const e=this._getHostname();const n=this.getView().getModel("lunchUser").getProperty("/department");const o={department:n};console.log(o);fetch(e+"/match",{method:"post",headers:{"content-type":"application/json"},body:JSON.stringify(o)}).then(e=>e.json()).then(e=>{console.log(e);let n=new t(e);this.getView().setModel(n,"lunchUserMatch")})},handleShowDepartmentHelp(){this._handleCreateConfirmationPopup("You will be randomly matched with a colleague of yours. \n Depending on her preferences, it is more likely to be a colleague from another department than yours. \n Also, please be fair and randomize only once.")},handleGetLunchPartner(){this.getLunchPartner();this.byId("find-partner-select").setEnabled(false);this.byId("find-partner-button").setEnabled(false)}})});
},
	"sap/ui/etc/blindlunch/controller/Home.controller.js":function(){sap.ui.define(["sap/ui/core/mvc/Controller","../model/formatter"],function(t,e){"use strict";return t.extend("sap.ui.etc.blindlunch.controller.App",{formatter:e,onInit:function(){}})});
},
	"sap/ui/etc/blindlunch/controller/Signup.controller.js":function(){sap.ui.define(["./Basecontroller"],function(e){"use strict";return e.extend("sap.ui.etc.blindlunch.controller.Basecontroller",{onSignupUser(e){const n=this._getHostname();const o=this.getView().getModel("lunchUser").getData();console.log(o);fetch(n+"/signup",{method:"post",headers:{"content-type":"application/json"},body:JSON.stringify(o)}).then(e=>e.json()).then(n=>{if(e)e(n)}).catch(e=>console.log(e))},handleSignupUser(){const e=this;e._handleCreateConfirmationPopup("By signing up, you agree to be findable by one of \n your colleagues and have a good time @ 🍔 lunch. \n Continue?",()=>{e.onSignupUser(n=>e._handleCreateMessageStrip(n.msg,"Success","signup-form"))})}})});
},
	"sap/ui/etc/blindlunch/i18n/i18n.properties":'title=Basic Template\r\nappTitle=Basic Template\r\nappDescription=Blank app as starting point for your app development',
	"sap/ui/etc/blindlunch/manifest.json":'{"_version":"1.12.0","sap.app":{"id":"sap.ui.etc.blindlunch","type":"application","i18n":"i18n/i18n.properties","applicationVersion":{"version":"1.0.0"},"title":"{{appTitle}}","description":"{{appDescription}}","resources":"resources.json","ach":"ach"},"sap.ui":{"technology":"UI5","icons":{"icon":"","favIcon":"","phone":"","phone@2":"","tablet":"","tablet@2":""},"deviceTypes":{"desktop":true,"tablet":true,"phone":true}},"sap.ui5":{"rootView":{"viewName":"sap.ui.etc.blindlunch.view.App","type":"XML","async":true,"id":"app"},"dependencies":{"minUI5Version":"1.60.0","libs":{"sap.ui.core":{},"sap.m":{},"sap.ui.layout":{}}},"contentDensities":{"compact":true,"cozy":true},"models":{"i18n":{"type":"sap.ui.model.resource.ResourceModel","settings":{"bundleName":"sap.ui.etc.blindlunch.i18n.i18n"}}},"resources":{"css":[{"uri":"css/style.css"}]},"routing":{"config":{"routerClass":"sap.m.routing.Router","viewType":"XML","viewPath":"sap.ui.etc.blindlunch.view","controlId":"app","controlAggregation":"pages","async":true},"routes":[{"pattern":"","name":"home","target":["home"]}],"targets":{"home":{"viewName":"Home","viewId":"home","viewLevel":1,"title":"{i18n>title}"}}}}}',
	"sap/ui/etc/blindlunch/model/formatter.js":function(){sap.ui.define([],function(){"use strict";return{}});
},
	"sap/ui/etc/blindlunch/model/models.js":function(){sap.ui.define(["sap/ui/model/json/JSONModel","sap/ui/Device"],function(e,n){"use strict";return{createDeviceModel:function(){var a=new e(n);a.setDefaultBindingMode("OneWay");return a},createLunchUserModel(){return new e({name:"",mail:"",department:"Marketing",departmentPool:[{id:1,value:"Marketing"},{id:2,value:"Production"},{id:3,value:"CIT"},{id:4,value:"Purchasing"}],agreedToBeFound:false,differentDepartmentOnly:true,weeklySignup:false})},createLunchUserMatchModel(){return new e({initials:"JD",name:"... anyone yet?",mail:"",department:"",color:"Random"})},createLunchUserSignedUp(){return new e({value:0})}}});
},
	"sap/ui/etc/blindlunch/view/App.view.xml":'<mvc:View\r\n\tdisplayBlock="true"\r\n\txmlns="sap.m"\r\n\txmlns:mvc="sap.ui.core.mvc"><Shell><App id="app"/></Shell></mvc:View>',
	"sap/ui/etc/blindlunch/view/FindPartner.view.xml":'<mvc:View controllerName="sap.ui.etc.blindlunch.controller.FindPartner" displayBlock="true"\r\n\txmlns="sap.m"\r\n\txmlns:l="sap.ui.layout"\r\n\txmlns:mvc="sap.ui.core.mvc"\r\n\txmlns:core="sap.ui.core"><l:BlockLayout background="Dashboard" class="ui-center-container"><l:BlockLayoutRow accentCells="Accent1"><l:BlockLayoutCell id="find-partner-form"><VBox alignItems="Center" width="24em"><Avatar backgroundColor="{lunchUserMatch>/color}" initials="{lunchUserMatch>/initials}" displaySize="XL" displayShape="Circle"/><Text class="ui-title" text="You\'re going to lunch with:" /><Text class="ui-title" text="{lunchUserMatch>/name}" /><Text class="ui-title" text="from {lunchUserMatch>/department}" /><Text class="ui-subtitle" text="{lunchUserMatch>/mail}" /></VBox><VBox alignItems="Center" width="24em"><HBox><core:Icon src="sap-icon://message-information" class="sapUiTinyMarginEnd" press="handleShowDepartmentHelp" /><Label text="My department" /></HBox><Select id="find-partner-select" width="18rem" enabled="true" forceSelection="false" selectedKey="{lunchUser>/department}" items="{path: \'lunchUser>/departmentPool\'}"><core:ListItem key="{lunchUser>value}" text="{lunchUser>value}" /></Select><Button id="find-partner-button" width="18rem" icon="sap-icon://visits" text="Find a colleague" press="handleGetLunchPartner" /></VBox></l:BlockLayoutCell></l:BlockLayoutRow></l:BlockLayout></mvc:View>',
	"sap/ui/etc/blindlunch/view/Home.view.xml":'<mvc:View controllerName="sap.ui.etc.blindlunch.controller.Home" displayBlock="true" \r\n\txmlns="sap.m" \r\n\txmlns:mvc="sap.ui.core.mvc"><Page id="page" title="Blind Lunch"><IconTabBar stretchContentHeight="true" backgroundDesign="Transparent" id="idIconTabBarMulti" class="sapUiResponsiveContentPadding"><items><IconTabFilter design="Vertical" icon="sap-icon://meal" text="Get connected" tooltip="Find a colleague to lunch with"><mvc:XMLView viewName="sap.ui.etc.blindlunch.view.FindPartner" async="true" /></IconTabFilter><IconTabFilter design="Vertical" icon="sap-icon://add-contact" text="Sign up" tooltip="Sign up to be found by other colleagues"><mvc:XMLView viewName="sap.ui.etc.blindlunch.view.SignUp" async="true" /></IconTabFilter></items></IconTabBar></Page></mvc:View>',
	"sap/ui/etc/blindlunch/view/SignUp.view.xml":'<mvc:View controllerName="sap.ui.etc.blindlunch.controller.Signup" displayBlock="true" \r\n\txmlns="sap.m" \r\n\txmlns:mvc="sap.ui.core.mvc" \r\n\txmlns:l="sap.ui.layout" \r\n\txmlns:core="sap.ui.core"><l:BlockLayout background="Dashboard" class="ui-center-container"><l:BlockLayoutRow accentCells="Accent1"><l:BlockLayoutCell title="Sign up" id="signup-form"><VBox width="24em"><Label width="100%" labelFor="lunch-user-name" text="Your name" /><Input value="{lunchUser>/name}" placeholder="Name ..." id="lunch-user-name" /><Label width="100%" labelFor="lunch-user-mail" text="Your mail adress" /><Input value="{lunchUser>/mail}" placeholder="Email ..." id="lunch-user-mail" /><Label width="100%" labelFor="lunch-user-department" text="Your department" /><Select width="100%" enabled="true" id="type-input" forceSelection="false" selectedKey="{lunchUser>/department}" items="{path: \'lunchUser>/departmentPool\'}"><core:ListItem key="{lunchUser>value}" text="{lunchUser>value}" /></Select><CheckBox text="I want to be found by other colleagues" selected="{lunchUser>/agreedToBeFound}" /><CheckBox tooltip="Checking this box makes sure you\'ll only be matched with colleagues from other departments." text="Only other departments" selected="{lunchUser>/differentDepartmentOnly}" /><CheckBox tooltip="Checking this box will delete your name only after 7 weekdays. You can of course always sign up again." text="Weekly signup" selected="{lunchUser>/weeklySignup}" /><Button width="100%" icon="sap-icon://add-employee" text="Sign up" press="handleSignupUser"></Button></VBox></l:BlockLayoutCell></l:BlockLayoutRow></l:BlockLayout></mvc:View>'
});
