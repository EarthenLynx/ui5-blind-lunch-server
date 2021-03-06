sap.ui.define(
  [
    "sap/ui/core/mvc/Controller",
    "sap/m/Text",
    "sap/m/Dialog",
    "sap/m/Button",
    "sap/m/MessageStrip",
  ],
  function (Controller, Text, Dialog, Button, MessageStrip) {
    "use strict";

    return Controller.extend("sap.ui.etc.blindlunch.controller.App", {
      onInit: function () {},

      _getHostname(dev) {
        // if (dev) {
        return "http://localhost:3000";
        // } else {
        //   return "";
        // }
      },

      _handleCreateMessageStrip(text, type, oId) {
        const oItem = this.getView().byId(oId);
        const oMsgStrip = new MessageStrip({
          text,
          type,
          showCloseButton: true,
          showIcon: true,
        });
        oItem.addContent(oMsgStrip);
        setTimeout(() => oMsgStrip.close(), 1500);
      },

      _handleCreateConfirmationPopup(text, action) {
        var oDialog = new Dialog({
          title: "Information",
          type: "Message",
          state: "Information",
          content: new Text({
            text: text,
          }),

          beginButton: new Button({
            text: "Cancel",
            type: "Reject",
            press() {
              oDialog.close();
              return;
            },
          }),

          endButton: new Button({
            text: "Confirm",
            type: "Accept",
            press() {
              if (action) {
                action();
              }
              oDialog.close();
            },
          }),

          afterClose() {
            oDialog.destroy();
          },
        });
        oDialog.open();
        return;
      },
    });
  }
);
