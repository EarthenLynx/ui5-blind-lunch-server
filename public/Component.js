sap.ui.define(["sap/ui/core/UIComponent","sap/ui/Device","./model/models"],function(e,t,i){"use strict";return e.extend("sap.ui.etc.blindlunch.Component",{metadata:{manifest:"json"},init:function(){e.prototype.init.apply(this,arguments);this.setModel(i.createDeviceModel(),"device");this.setModel(i.createLunchUserModel(),"lunchUser");this.setModel(i.createLunchUserMatchModel(),"lunchUserMatch");this.setModel(i.createLunchUserSignedUp(),"lunchUserSignedUp");this.getRouter().initialize()}})});