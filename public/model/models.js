sap.ui.define(["sap/ui/model/json/JSONModel","sap/ui/Device"],function(e,n){"use strict";return{createDeviceModel:function(){var a=new e(n);a.setDefaultBindingMode("OneWay");return a},createLunchUserModel(){return new e({name:"",mail:"",department:"Marketing",departmentPool:[{id:1,value:"Marketing"},{id:2,value:"Production"},{id:3,value:"CIT"},{id:4,value:"Purchasing"}],agreedToBeFound:false,differentDepartmentOnly:true,weeklySignup:false})},createLunchUserMatchModel(){return new e({initials:"JD",name:"... anyone yet?",mail:"",department:"",color:"Random"})},createLunchUserSignedUp(){return new e({value:0})}}});