var React = require("react");
var Router = require("react-router");
var $ = require("jquery");
var Link = Router.Link;
var moment = require("moment");
var Navbar = require("./navbar");

module.exports = React.createClass({
  uploadToServer: function(){
    $.ajax({
      url: "../../data/comments.json",
      // beforeSend: function(request){
      //   request.setRequestHeader("Access-Token", "cdf66af709151d2400be9b8b78eee7d9492bdd4137356f0b85559bbd51673268")
      // },
      dataType: 'json',
      cache: false,
      type: 'POST',
      data: {"name": "yo"},
      success: function(data){
        console.log("post comments!!");
        console.log(data);
        this.loadCommentsFromServer();
        this.setState({data: data});
      }.bind(this),
      error: function(xhr, status, err){
        console.error("../../data/slide" + this.props.slideId + "comments.json", status, err.toString());
      }.bind(this)
    });
  },
  componentDidMount: function(){
    this.uploadToServer();
  },
  render: function() {
    return (
      <div>
        <h1> hello</h1>
      </div>
    )
  }

});
