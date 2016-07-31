var React = require("react");
var Router = require("react-router");
var Link = Router.Link;

module.exports = React.createClass({
  render: function(){
    return(
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
                  <Link to={/upload} >
                    <button className="btn btn-secondary btn-sm m-l-1 col-md-2 hidden-md-down" type="submit">Upload</button>
                  </Link>
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
    )
  }
});
