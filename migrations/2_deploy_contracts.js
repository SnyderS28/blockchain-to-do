// This migration isn't working. It produces a "ReferenceError: TodoList is not defined"
// when "truffle migrate" is run.  

const TodoList = artifacts.require("TodoList");

module.exports = function(deployer) {
  deployer.deploy(TodoList);
};