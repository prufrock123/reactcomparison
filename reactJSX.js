
    // ------------------------------------------------------
    // commentList
    // ------------------------------------------------------
    
    var CommentList = React.createClass({
      render: function() {
        var commentNodes = this.props.data.map(function (comment) {
          return (
            <Comment author={comment.author}>
              {comment.text}
            </Comment>
          );
        });
        return (
          <div className="commentList">
            {commentNodes}
          </div>
        );
      }
    });

    // ------------------------------------------------------
    // commentForm
    // ------------------------------------------------------

    var CommentForm = React.createClass({
      handleSubmit: function(e) {
        e.preventDefault();
        var author = this.refs.author.getDOMNode().value.trim();
        var text = this.refs.text.getDOMNode().value.trim();
        if (!text || !author) {
          return;
        }
        this.props.onCommentSubmit({author: author, text: text});
        this.refs.author.getDOMNode().value = '';
        this.refs.text.getDOMNode().value = '';
      },
      render: function() {
        return (
          <form className="commentForm" onSubmit={this.handleSubmit}>
            <input type="text" placeholder="Your name" ref="author"/>
            <input type="text" placeholder="Say something..." ref="text" />
            <input type="submit" value="Post" />
          </form>
        );
      }
    });
    // ------------------------------------------------------
    // comment
    // ------------------------------------------------------
    
    var converter = new Showdown.converter();
    var Comment = React.createClass({
      render: function() {
        var rawMarkup = converter.makeHtml(this.props.children.toString());
        return (
          <div className="comment">
            <h2 className="commentAuthor">
              {this.props.author}
            </h2>
            <span dangerouslySetInnerHTML={{__html: rawMarkup}} />
          </div>
        );
      }
    });
    // ------------------------------------------------------
    // full commentBox
    // ------------------------------------------------------

    var data = [
      {author: "Pete Hunt", text: "This is one comment"},
      {author: "Jordan Walke", text: "This is *another* comment"}
    ];

    // function onCommentSubmit() {
    //   // fetch your data here and assign it to myNewData
    //   this.setState({data: myNewData});
    // }

    var CommentBox = React.createClass({
      loadCommentsFromServer: function() {
        $.ajax({
          url: this.props.url,
          dataType: 'json',
          success: function(data) {
            this.setState({data: data});
          }.bind(this),
          error: function(xhr, status, err) {
            console.error(this.props.url, status, err.toString());
          }.bind(this)
        });        
      },
      handleCommentSubmit: function(comment) {
        var comments = this.state.data;
        var newComments = comments.concat([comment]);
        this.setState({data: newComments});
        $.ajax({
          url: this.props.url,
          dataType: 'json',
          type: 'POST',
          data: comment,
          success: function(data) {
            this.setState({data: data});
          }.bind(this),
          error: function(xhr, status, err) {
            console.error(this.props.url, status, err.toString());
          }.bind(this)
        });
      },
      getInitialState: function() {
        return {data: []};
      },
      componentDidMount: function() {
        this.loadCommentsFromServer();
        setInterval(this.loadCommentsFromServer, this.props.pollInterval)
      },
      render: function() {
        return (
          <div className="commentBox example">
            <h1>Comments JSX version</h1>
            <CommentList data={this.state.data} />
            <CommentForm onCommentSubmit={this.handleCommentSubmit} />
          </div>
        );
      }
    });



//------------------------------------------------------------------------------
// Div element with nested p tag.
//------------------------------------------------------------------------------

    var DivExample = React.createClass({
      render: function() {
        return (
          <div className="divExample example">
            <p>here is a sample div with a nested p tag</p>
          </div>
        );
      }
    });

//------------------------------------------------------------------------------
// Header tags
//------------------------------------------------------------------------------

    var HeaderExample = React.createClass({
      render: function() {
        return (
          <div className="headerExample example">
            <h1>Header 1</h1>
            <h2>Header 2</h2>
            <h3>Header 3</h3>
            <h4>Header 4</h4>
            <h5>Header 5</h5>
            <h6>Header 6</h6>
          </div>
        )
      }
    })

//------------------------------------------------------------------------------
// Tabs
//------------------------------------------------------------------------------

var Tabs = React.createClass({
  render: function() {
    return (
      <ul className="tabs">
        <li className="tab" id="managers">
          <a className="tab-link" href="#managers">Managers</a>
        </li>
        <li className="tab" id="designers">
          <a className="tab-link" href="#designers">Designers</a>
        </li>
        <li className="tab" id="developers">
          <a className="tab-link" href="#developers">Developers</a>
        </li>
      </ul>
    )
  }
})

var TabList = React.createClass({
  render: function() {
    return (
      <ol className="tabList">
        <li>
          <a className="tab-list-link"><img src="http://www.gravatar.com/avatar/47?f=y&amp;s=64&amp;d=identicon"/>test1</a>
        </li>
        <li>
          <a className="tab-list-link"><img src="http://www.gravatar.com/avatar/47?f=y&amp;s=64&amp;d=identicon"/>test1</a>
        </li>
        <li>
          <a className="tab-list-link"><img src="http://www.gravatar.com/avatar/47?f=y&amp;s=64&amp;d=identicon"/>test1</a>
        </li>
      </ol>
    )
  }
})

// var TabListItems = React.createClass({
  //   render: function() {
  //     return (
  //       <li>
  //         <a className="tab-list-link"><img src="http://www.gravatar.com/avatar/47?f=y&amp;s=64&amp;d=identicon"/>test1</a>
  //       </li>
  //       <li>
  //         <a className="tab-list-link"><img src="http://www.gravatar.com/avatar/47?f=y&amp;s=64&amp;d=identicon"/>test1</a>
  //       </li>
  //       <li>
  //         <a className="tab-list-link"><img src="http://www.gravatar.com/avatar/47?f=y&amp;s=64&amp;d=identicon"/>test1</a>
  //       </li>
  //     )
  //   }
  // })


var TabsExample = React.createClass({
  render: function() {
    return (
      <div className="tabsExample">
        <Tabs />
        <TabList />
      </div>
    )
  }
})

//------------------------------------------------------------------------------
// Root Component
//------------------------------------------------------------------------------


    var RootComponent = React.createClass({
      render: function() {
        return (
          <div>
            <CommentBox url="comments.json" pollInterval={2000} />
            <DivExample />
            <HeaderExample />
            <TabsExample />
          </div>
        );
      }
    });

//------------------------------------------------------------------------------
// Render
//------------------------------------------------------------------------------


    React.render(
      <RootComponent />,
      document.getElementById('contentJSX')
    )


    // React.render(
    //   <CommentBox url="comments.json" pollInterval={2000}>
    //     <DivExample />
    //   </CommentBox>,
    //   document.getElementById('contentJSX')
    // );












