var React = require("react");
var Router = require("react-router");
var $ = require("jquery");
var Link = Router.Link;
var moment = require("moment");
var Navbar = require("./navbar");

module.exports = React.createClass({
  loadPresentationsFromServer: function(){
    $.ajax({
      url: "../../data/data.json",
      dataType: "json",
      cache: false,
      success: function(data){
        this.setState({data: data});
        console.log(data);
      }.bind(this),
      error: function(xhr, status, err) {
        console.error(this.props.url, status, err.toString());
      }.bind(this)
    });
    },
    getInitialState: function(){
      return {data: []};
    },
    componentDidMount: function(){
      this.loadPresentationsFromServer();
    },
    render: function() {
      var data = this.state.data || [];
      return (
        <div className="wrapper">
          <Navbar />
          <div className="container">
            <div className="presentation-container m-t-2 m-b-2 col-xs-12 col-sm-12 col-md-12">
              <h4 className="presentation-title col-xs-12 col-sm-8 col-md-4 col-lg-3">All Presentations</h4>
              <div className="dropdown col-xs-12 col-sm-3 col-md-3 col-lg-2">
                <button className="btn btn-secondary btn-sm dropdown-toggle filter-btn col-xs-12 p-l-1" type="button" data-toggle="dropdown">Filter
                <span className="caret"></span></button>
                <ul className="dropdown-menu">
                  <li><a href="#">HTML</a></li>
                  <li><a href="#">CSS</a></li>
                  <li><a href="#">JavaScript</a></li>
                </ul>
              </div>
              <div className="col-sm-1 col-md-5"></div>
            </div>
          </div>
          <div className="container">
            <div className="row">
              <div className="card-group col-sm-12">
                {data.map(function(presentations){
                  var description = presentations.description.substring(0, 140);
                  var presentationDate = moment(presentations.date).format("MMM D, YYYY");
                    return (
                      <div key={presentations.id}>
                        <div className="card col-xs-12 col-md-6 col-lg-4">
                            <Link to={"/slidedetail/" + presentations.id} >
                              <img className="card-image" src={presentations.thumbnail} />
                            </Link>
                          <div className="card-caption">
                            <h6>{presentations.title}</h6>
                            <p className="card-conference">{presentations.conference}</p>
                            <p className="card-author">by {presentations.presenters}</p>
                            <p className="card-date">on {presentationDate}</p>
                            <p className="card-description">{description}</p>
                          </div>
                        </div>
                      </div>
                    );
                  })}
              </div>
            </div>
          </div>
        </div>
      );
    }
});
