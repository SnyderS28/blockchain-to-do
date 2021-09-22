// This migration isn't working. It produces a "ReferenceError: TodoList is not defined"
// when "truffle migrate" is run.  

const Migrations = artifacts.require("TodoList");

module.exports = function(deployer) {
  deployer.deploy(TodoList);
};