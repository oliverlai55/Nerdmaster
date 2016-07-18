var React = require("react");
var Router = require("react-router");

module.exports = React.createClass({
  getInitialState: function() {
    return {author: '', body: ''};
  },
  handleAuthorChange: function(e){
    this.setState({author: e.target.value});
  },
  handleTextChange: function(e){
    this.setState({body: e.target.value});
  },
  handleSubmit: function(e){
    e.preventDefault();
    var author = this.state.author.trim();
    var body = this.state.body.trim();
    if(!body || !author){
      return;
    }
    this.props.handleCommentSubmit({author: author, body: body});
    this.setState({author: '', body: ''});
  },
  render: function(){
    return(
      <div className="input-group col-lg-12">
        <form className="commentForm" onSubmit={this.handleSubmit}>
          <div className="slidedetail-wrapper col-lg-11">
            <input
              type="text"
              className="form-control post-input form-control-md"
              placeholder="Add your comment" value={this.state.body}
              onChange={this.handleTextChange}
            />
            <input
              type="text"
              className="form-control post-input form-control-md"
              placeholder="Your Name" value={this.state.author}
              onChange={this.handleAuthorChange}
            />
          </div>
          <div className="slidedetail-wrapper col-lg-1">
            <button className="btn btn-secondary btn-md slidedetail-post-btn" type="submit">Post</button>
          </div>
      </form>
      </div>
    )
  }
});
