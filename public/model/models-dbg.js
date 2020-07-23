sap.ui.define(["sap/ui/model/json/JSONModel", "sap/ui/Device"], function (JSONModel, Device) {
  "use strict";

  return {
    createDeviceModel: function () {
      var oModel = new JSONModel(Device);
      oModel.setDefaultBindingMode("OneWay");
      return oModel;
    },

    createLunchUserModel() {
      return new JSONModel({
        name: "",
        mail: "",
        department: "Marketing",
        departmentPool: [
          {
            id: 1,
            value: "Marketing",
          },
          {
            id: 2,
            value: "Production",
          },
          {
            id: 3,
            value: "CIT",
          },
          {
            id: 4,
            value: "Purchasing",
          },
        ],
        agreedToBeFound: false,
        differentDepartmentOnly: true,
        weeklySignup: false,
      });
    },

    createLunchUserMatchModel() {
      return new JSONModel({
        initials: "JD",
        name: "... anyone yet?",
        mail: "",
        department: "",
        color: "Random",
      });
    },

    createLunchUserSignedUp() {
      return new JSONModel({
        value: 0,
      });
    },
  };
});
