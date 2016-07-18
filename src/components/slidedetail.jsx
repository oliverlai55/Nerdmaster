var React = require("react");
var Router = require("react-router");
var $ = require("jquery");
var moment = require("moment");
var Link = Router.Link;
var CommentBox = require("./commentbox");
var Navbar = require("./navbar");
var slideDescription;
var descriptionPart1;
var descriptionPart2;

module.exports = React.createClass({
  loadSlideFromServer: function(){
    $.ajax({
      url: "../../data/slide" + this.props.params.id + ".json",
      dataType: 'json',
      cache: false,
      success: function(slideData){
        console.log(slideData);
        this.setState({slideData: slideData[0]});
      }.bind(this),
      error: function(xhr, status, err) {
        var url = "data/" + this.props.params.id + ".json";
        console.error(url, status, err.toString());
      }.bind(this)
    });
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
  getInitialState: function(){
    return {slideData: []};
  },
  componentDidMount: function(){
    this.loadSlideFromServer();
  },
  render: function(){
    var slideData = this.state.slideData || [];
    var slideDate = moment(slideData.date).format("MMM D, YYYY");
    return(
      <div className="wrapper">
        <Navbar />
        <div className="slidedetail-wrapper col-xs-12 m-b-3">
          <div className="slidedetail-image col-xs-12">
            <img className="slidedetail-wrapper col-lg-8 col-lg-offset-2 col-xs-12" src={slideData.thumbnail} />
          </div>
        </div>
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-10 col-lg-offset-2 col-sm-12 m-r-3">
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
                <div className="hidden-sm-down col-xs-8">
                  <div className="slidedetail-description">
                    <div className="slidedetail-wrapper col-sm-12">
                      <div className="slidedetail-wrapper collapse showmore m-b-2 col-sm-12">{slideData.description}</div>
                    </div>
                    <div className="m-r-3">
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
        <hr width="100%" size="8" align="center" />
        <CommentBox slideId={this.props.params.id} />
      </div>
    )
  }
});
