sap.ui.define(["./Basecontroller"], function (Basecontroller) {
  "use strict";

  return Basecontroller.extend("sap.ui.etc.blindlunch.controller.Basecontroller", {
    // GETTERS

    // SETTERS
    onSignupUser(callback) {
      const host = this._getHostname();
      const payload = this.getView().getModel("lunchUser").getData();

      console.log(payload);

      fetch(host + "/signup", {
        method: "post",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(payload),
      })
        .then((response) => response.json())
        .then((data) => {
          if (callback) callback(data);
        })
        .catch((err) => console.log(err));
    },

    // ACTIONS
    handleSignupUser() {
      const self = this;
      self._handleCreateConfirmationPopup(
        "By signing up, you agree to be findable by one of \n your colleagues and have a good time @ 🍔 lunch. \n Continue?",
        () => {
          self.onSignupUser((data) =>
            self._handleCreateMessageStrip(data.msg, "Success", "signup-form")
          );
        }
      );
    },
  });
});
