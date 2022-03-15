const fs = require("fs");

var dbStructure = {
  users: JSON.parse(fs.readFileSync('./src/mock-data/users.json')),
  organizations: JSON.parse(fs.readFileSync('./src/mock-data/organizations.json'))
}

console.error(dbStructure);
return dbStructure;
