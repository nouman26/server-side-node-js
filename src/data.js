const fs = require("fs");
const path = require("path");

const accountData = JSON.parse(
  fs.readFileSync(__dirname + "/json/accounts.json", {
    encoding: "utf8"
  })
);
accounts = accountData;

const userData = JSON.parse(
  fs.readFileSync(__dirname + "/json/users.json", {
    encoding: "utf8"
  })
);

users = userData;

writeJSON = () => {
  const accountsJSON = JSON.stringify(accounts);
  fs.writeFileSync(
    path.join(__dirname, "/json/accounts.json"),
    accountsJSON,
    "utf8"
  );
};

module.exports = {
  accounts,
  users,
  writeJSON
};
