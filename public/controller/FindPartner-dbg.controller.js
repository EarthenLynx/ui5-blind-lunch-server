sap.ui.define(["./Basecontroller", "sap/ui/model/json/JSONModel"], function (
  Basecontroller,
  JSONModel
) {
  "use strict";

  return Basecontroller.extend("sap.ui.etc.blindlunch.controller.Basecontroller", {
    // GETTERS
    getLunchPartner() {
      const host = this._getHostname();
      const requestorDepartment = this.getView().getModel("lunchUser").getProperty("/department");
      const payload = { department: requestorDepartment };
      console.log(payload);

      // $.ajax({
      //   url: host + "/match",
      //   data: payload,
      //   type: "POST",
      //   success: (result, status, xhr) => console.log(result),
      //   error: (xhr, status, err) => console.log(err),
      //   complete: (xhr, status) => console.log(status),
      // });

      fetch(host + "/match", {
        method: "post",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(payload),
      })
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
          let oModel = new JSONModel(data);
          this.getView().setModel(oModel, "lunchUserMatch");
        });
    },

    // SETTERS

    // ACTIONS
    handleShowDepartmentHelp() {
      this._handleCreateConfirmationPopup(
        "You will be randomly matched with a colleague of yours. \n Depending on her preferences, it is more likely to be a colleague from another department than yours. \n Also, please be fair and randomize only once."
      );
    },

    handleGetLunchPartner() {
      this.getLunchPartner();
      this.byId("find-partner-select").setEnabled(false);
      this.byId("find-partner-button").setEnabled(false);
    },
  });
});
