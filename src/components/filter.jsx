var React = require("react");
var Router = require("react-router");
var $ = require("jquery");
var moment = require("moment");
var Link = Router.Link;
var slideDescription;
var descriptionPart1;
var descriptionPart2;

module.exports = React.createClass({
  loadCommentsFromServer: function(){
    $.ajax({
      url: "https://nerd-master.herokuapp.com/presentations/" + this.props.params.id + "/comments",
      beforeSend: function(request){
        request.setRequestHeader("Access-Token", "cdf66af709151d2400be9b8b78eee7d9492bdd4137356f0b85559bbd51673268")
      },
      dataType: 'json',
      cache: false,
      success: function(commentData){
        this.setState({commentData: commentData.comments});
        // console.log(commentData);
      }.bind(this),
      error: function(xhr, status, err){
        console.error(this.props.url, status, err.toString());
      }.bind(this)
    });
  },
  getInitialState: function(){
    return {commentData: []}
  },
  loadSlideFromServer: function(){
    $.ajax({
      url: "https://nerd-master.herokuapp.com/presentations/" + this.props.params.id,
      beforeSend: function(request){
        request.setRequestHeader("Access-Token", "cdf66af709151d2400be9b8b78eee7d9492bdd4137356f0b85559bbd51673268")
      },
      dataType: 'json',
      cache: false,
      success: function(slideData){
        slideDescription = slideData.presentation.description;
        descriptionPart1 = slideDescription.substring(0, 18);
        descriptionPart2 = slideDescription.substring(18, slideDescription.length);
        this.setState({slideData: slideData.presentation});
      }.bind(this),
      error: function(xhr, status, err) {
        console.error(this.props.url, status, err.toString());
      }.bind(this)
    });
  },
  getInitialState: function(){
    return {slideData: []}
  },
  handleClick: function(){
    $(document).ready(function(){
      $('.show-more').click(function(){
        var $this = $(this);
        $this.toggleClass("show-more");
        if($this.hasClass("show-more")){
          $this.text('Show More');
        }else{
          $this.text("Show Less");
        }
      })
    });
  },
  componentDidMount: function(){
    this.loadSlideFromServer();
    this.loadCommentsFromServer();
  },
  render: function(){
    var slideData = this.state.slideData || [];
    var slideComments = this.state.commentData || [];
    var slideDate = moment(slideData.date).format("MMM D, YYYY");
    return(
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
        <div className="slidedetail-wrapper col-xs-12 m-b-3">
          <div className="slidedetail-image col-xs-12">
            <img className="slidedetail-wrapper col-lg-8 col-lg-offset-2 col-xs-12" src={slideData.thumbnail} />
          </div>
        </div>
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-10 col-lg-offset-2 col-sm-12">
              <button className="btn btn-primary btn-md slidedetail-download-btn col-lg-12 m-l-1 m-b-1">Download Presentation</button>
              <div className="col-lg-12">
                <h1 className="slidedetail-title">{slideData.title}</h1>
              </div>
              <div className="slidedetail-wrapper slidedetail-info col-lg-12">
                <div className="slidedetail-wrapper">
                    <ul className="list-inline col-sm-12">
                      <li className="slidedetail-info">By {slideData.presenters}</li>
                      <li className="slidedetail-info hidden-xs-down">{slideData.conference}</li>
                      <li className="slidedetail-info">on {slideDate}</li>
                    </ul>
                </div>
                <div className="hidden-md-up col-xs-12">
                  <div className="slidedetail-wrapper slidedetail-description font-grey card card-block">{slideData.description}</div>
                </div>
                <div className="hidden-sm-down col-xs-12">
                  <div className="slidedetail-description">
                    <div className="slidedetail-wrapper col-sm-12">{descriptionPart1}
                      <div className="slidedetail-wrapper collapse showmore col-sm-12">{descriptionPart2}</div>
                    </div>
                    <div className="col-sm-2 col-sm-offset-10 m-t-2">
                      <button className="btn btn-sm btn-secondary show-more" onClick={this.handleClick} type="button" data-toggle="collapse" data-target=".showmore" aria-expanded="false" aria-controls="showmore">
                        Show More
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <hr width="100%" size="9" align="center" />
        <div className="container-fluid">
          <div className="row m-r-2">
            <div className="col-lg-10 col-lg-offset-2">
              <div className="slidedetail-comment col-sm-12 m-t-3 m-b-2">
                <h6>Comments ({slideComments.length})</h6>
              </div>
              <div className="slidedetail-wrapper col-lg-9 col-sm-12 ">
                <div className="input-group col-sm-12 m-b-3">
                  <input type="text" className="form-control form-control-md" placeholder="Add your comment" />
                  <span className="input-group-btn">
                    <button className="btn btn-secondary btn-md slidedetail-post-btn">Post</button>
                  </span>
                </div>
              </div>
              {slideComments.map(function(comments){
                return(
                  <div className="slidedetail-comment slidedetail-wrapper col-sm-12 m-b-2">
                    <div className="col-sm-6">
                      <p>{comments.author}</p>
                    </div>
                    <div className="col-sm-6">
                      <p>{comments.body}</p>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    )
  }
});
