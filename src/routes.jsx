var React = require("react");
var ReactRouter = require("react-router");
var Router = ReactRouter.Router;
var Route = ReactRouter.Route;
var Main = require("./components/main");
var Slidedetail = require("./components/slidedetail");
var Test = require("./components/test");
var Upload = require("./components/upload");

module.exports = (
  <Router>
    <Route path="/" component={Main} />
    <Route path="/upload" component={Upload} />
    <Route path="/slidedetail/:id" component={Slidedetail} />
  </Router>
);
