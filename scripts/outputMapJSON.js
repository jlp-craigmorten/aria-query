#!/usr/bin/env node --harmony

const { roles, elementRoles, roleElements } = require("../lib");
const fs = require("fs");

if (!fs.existsSync("./json")) {
  fs.mkdirSync("./json");
}

fs.writeFileSync("./json/roles.json", JSON.stringify(roles.entries()));
fs.writeFileSync(
  "./json/elementRoles.json",
  JSON.stringify(elementRoles.entries())
);
fs.writeFileSync(
  "./json/roleElements.json",
  JSON.stringify(roleElements.entries())
);
