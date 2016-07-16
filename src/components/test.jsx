var React = require("react");
var Router = require("react-router");
var $ = require("jquery");
var Link = Router.Link;

module.exports = React.createClass({
  loadDataFromServer: function(){
    $.ajax({
      url: "../../data.json",
      dataTypes: 'json',
      cache: false,
      success: function(data){
        console.log(data);
        this.setState({data: data});
      }.bind(this),
      error: function(xhr, status, err){
        console.error("data.json", status, err.toString());
      }.bind(this)
    });
  },
  getInitialState: function(){
    return {data: []};
  },
  componentDidMount: function(){
    this.loadDataFromServer();
  },
  render: function(){
    var data = this.state.data || [];
    console.log(data);
    return (
      <div>
        {data.map(function(presentation){
          return (
            <div key={presentation.id}>
              {presentation.title}
              <img src={presentation.thumbnail} />
            </div>
          )
        })}
      </div>
    )

  }
});
