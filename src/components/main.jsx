testtes
var React = require("react");
var Router = require("react-router");
var $ = require("jquery");
var Link = Router.Link;
var moment = require("moment");

module.exports = React.createClass({
  loadPresentationsFromServer: function(){
    $.ajax({
      url: "https://nerd-master.herokuapp.com/presentations",
      beforeSend: function(request){
        request.setRequestHeader("Access-Token", "cdf66af709151d2400be9b8b78eee7d9492bdd4137356f0b85559bbd51673268")
      },
      dataType: "json",
      cache: false,
      success: function(data){
        this.setState({data: data.presentations});
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
      setInterval(this.loadPresentationsFromServer, 50000);
    },
    render: function() {
      var data = this.state.data || [];
      return (
        <div className="wrapper">
          <div className="row">
              <div className="navbar-container col-xs-12 col-sm-12">
                <nav className="navbar navbar-light bg-faded col-xs-12 col-sm-12">
                  <a className="navbar-brand p-a-2 col-md-5 col-sm-12 hidden-sm-down" href="#"><img src="../img/nm-logo.png" /></a>
                  <a className="navbar-brand p-a-2 col-md-5 col-sm-4 hidden-md-up hidden-xs-down" href="#"><img src="../img/nm-logo-s.png" /></a>
                  <a className="navbar-brand p-a-2 col-md-5 col-sm-12 col-xs-5 hidden-sm-up" href="#"><img src="../img/nm-logo-xs.png" /></a>
                  <form className="form-inline pull-lg-right pull-sm-right p-t-2 col-md-6 col-sm-7 col-xs-6">
                      <div className="col-xs-2 col-sm-4 hidden-lg-up"></div>
                      <i className="fa fa-user fa-2x m-l-3 col-sm-1 hidden-xs-down" aria-hidden="true"></i>
                      <i className="fa fa-user m-l-3 col-xs-1 col-sm-1 hidden-sm-up" aria-hidden="true"></i>
                      <i className="fa fa-plus fa-2x m-l-1 col-sm-1 hidden-lg-up hidden-sm-down" aria-hidden="true"></i>
                      <i className="fa fa-search fa-2x m-l-1 col-sm-1 hidden-xs-down hidden-lg-up" aria-hidden="true"></i>
                      <i className="fa fa-search fa m-l-1 col-xs-1 col-sm-1 hidden-sm-up" aria-hidden="true"></i>
                      <button className="btn btn-secondary btn-sm m-l-1 col-md-2 hidden-md-down" type="submit">Upload</button>
                      <div className="input-group col-sm-5 hidden-md-down">
                        <input type="text" className="form-control form-control-sm col-md-4 col-sm-6" placeholder="Search..." />
                        <span className="input-group-btn">
                          <button className="btn btn-secondary btn-sm navbar-search-btn" type="button">Go</button>
                        </span>
                      </div>
                  </form>
                </nav>
            </div>
          </div>
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
                      <div>
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
