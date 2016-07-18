var React = require("react");
var Router = require("react-router");
var $ = require("jquery");
var CommentForm = require("./commentform");

module.exports = React.createClass({
  loadCommentsFromServer: function(){
    $.ajax({
      url: "../../data/slide" + this.props.slideId + "comments.json",
      // beforeSend: function(request){
      //   request.setRequestHeader("Access-Token", "cdf66af709151d2400be9b8b78eee7d9492bdd4137356f0b85559bbd51673268")
      // },
      dataType: 'json',
      cache: false,
      success: function(commentData){
        this.setState({commentData: commentData});
        console.log(commentData);
      }.bind(this),
      error: function(xhr, status, err){
        console.error(this.props.url, status, err.toString());
      }.bind(this)
    });
  },
  getInitialState: function(){
    return{commentData: []};
  },
  handleCommentSubmit: function(comment){
    console.log("handleCommentSubmit");
    console.log(comment);
    $.ajax({
      url: "../../data/comments.json",
      // beforeSend: function(request){
      //   request.setRequestHeader("Access-Token", "cdf66af709151d2400be9b8b78eee7d9492bdd4137356f0b85559bbd51673268")
      // },
      dataType: 'json',
      cache: false,
      type: 'POST',
      data: JSON.stringify(comment),
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
    this.loadCommentsFromServer()
  },
  render: function() {
    var slideComments = this.state.commentData || [];
    console.log("this is sldiecomments");
    console.log(slideComments);
    return (
      <div className="container-fluid">
        <div className="row m-r-2">
          <div className="col-lg-8 col-lg-offset-2">
            <div className="slidedetail-comment col-sm-12 m-t-3 m-b-2">
              <h6>Comments ({slideComments.length})</h6>
            </div>
            <div className="slidedetail-wrapper col-lg-12 col-sm-12 ">
              <CommentForm handleCommentSubmit={this.handleCommentSubmit} />
            </div>
            {slideComments.map(function(comments){
              return (
               <div className="slidedetail-comment slidedetail-wrapper col-sm-12 m-b-2" key={comments.id}>
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
    )
  }
});
