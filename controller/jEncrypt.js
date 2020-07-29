/**
 * Helper functions to encrypt a JSON or Javascript Object
 * @param {pubKey} string with which private key and cipher is created
 * @param {obj} string that is to be decoded. Should be passed as JSON.stringify(js-object) from the calling module
 * @param {callback} function that's called, using the returned save data hex - string / unsave utf-8 String
 * @returns {save} object
 */

const crypto = require("crypto");

const jEncrypt = (pubKey, obj, callback) => {
  const algorithm = "aes-192-cbc";

  let privKey = crypto.scryptSync(pubKey, "salt", 24);
  let iv = Buffer.alloc(16, 19);
  let cipher = crypto.createCipheriv(algorithm, privKey, iv);

  let save = cipher.update(obj, "utf8", "hex");
  save += cipher.final("hex");
  if (callback) {
    callback(save);
  } else {
    return save;
  }
};

const jDecrypt = (pubKey, obj, callback) => {
  let algorithm = "aes-192-cbc";
  let privKey = crypto.scryptSync(pubKey, "salt", 24);
  let iv = Buffer.alloc(16, 19);
  let cipher = crypto.createDecipheriv(algorithm, privKey, iv);

  let unsave = cipher.update(obj, "hex", "utf8");
  unsave += cipher.final("utf8");
  if (callback) {
    callback(unsave);
  } else {
    return unsave;
  }
};

module.exports = { jEncrypt, jDecrypt };
