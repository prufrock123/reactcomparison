

//------------------------------------------------------------------------------
// Time Counter Component
//------------------------------------------------------------------------------

  var TimeCounter = React.createClass({

    startTime: new Date().getTime(),

    getInitialState: function() {
      return {newTime: new Date().getTime()};
    },

    setMyState: function() {
      this.setState({newTime: new Date().getTime()});
    },

    componentDidMount: function() {
      setInterval(this.setMyState, 50);
    },

    render: function() {
      var elapsed = Math.round((this.state.newTime - this.startTime) / 100);
      var seconds = elapsed / 10 + (elapsed % 10 ? '' : '.0' );
      var message =
        'React has been successfully running for ' + seconds + ' seconds.';

      return <p>{message}</p>;
    }
  });

  var CustomTimeCounter = React.createClass({

    startTime: new Date().getTime(),

    getInitialState: function() {
      return {newTime: new Date().getTime()};
    },

    setMyState: function() {
      this.setState({newTime: new Date().getTime()});
    },

    componentDidMount: function() {
      setInterval(this.props.updateTimeState, 50);
    },

    timeUnitCheck: function(timeUnitType) {
      var time = "error, boy you're dumb.";

      switch (timeUnitType) {
        case "Milliseconds":
        // console.log(this.props.newTime)
          time = (this.props.newTime - this.startTime);
          break;
        case "Centiseconds":
          time = Math.round((this.props.newTime - this.startTime) / 10);
          break;
        case "Deciseconds":
          time = Math.round((this.props.newTime - this.startTime) / 100);
          break;
        case "Seconds":
          time = Math.round((this.props.newTime - this.startTime) / 1000);
          break;
        case "Super Seconds":
          time = Math.floor((this.props.newTime - this.startTime) / 10000);
          break;
        case "Supercilious Seconds":
          time = Math.floor((this.props.newTime - this.startTime) / 100000);
          break;
        case "Suspiciously Sacrosant Seconds":
          time = Math.floor((this.props.newTime - this.startTime) / 1000000);
          break;
      }
      return time;
    },

    render: function() {
      var timeConverted = this.timeUnitCheck(this.props.timeUnit);
      var message =
        "React has been successfully running for: " + timeConverted + " " +this.props.timeUnit;
      return (
        <div>
          <p>{message}</p>
        </div>
      )
    }
  });

  var TimeCounterForm = React.createClass({
    handleInput: function(e) {
      e.preventDefault();
      var inputValue = this.refs.timeUnit.getDOMNode().value.trim();
      if (!inputValue) {
        return;
      }
      this.props.onFormInput(inputValue)
    },

    render: function() {
      return (
        <select value={this.props.timeUnit} onChange={this.handleInput} ref="timeUnit">
          <option value="Milliseconds">Milliseconds</option>
          <option value="Centiseconds">Centiseconds</option>
          <option value="Deciseconds">Deciseconds</option>
          <option value="Seconds">Seconds</option>
          <option value="Super Seconds">Super Seconds</option>
          <option value="Supercilious Seconds">Supercilious Seconds</option>
          <option value="Suspiciously Sacrosant Seconds">Suspiciously Sacrosant Seconds</option>
        </select>
      )
    }
  })

  var TimeCounterContainer = React.createClass({
    
    getInitialState: function() {
      return {timeUnit: "Milliseconds",
              newTime: new Date().getTime()};
    },

    updateTheIntervalState: function(value) {
      if (!value) {
        this.setState({newTime:new Date().getTime()});
      } else {
        this.setState({timeUnit: value});
      }
    },

    render: function() {
      return (
        <div className="Counter">
          <TimeCounter />
          <CustomTimeCounter updateTimeState={this.updateTheIntervalState} timeUnit={this.state.timeUnit} newTime={this.state.newTime}/>
          <TimeCounterForm onFormInput={this.updateTheIntervalState} />
        </div>
       )
    }
  })

//------------------------------------------------------------------------------
// Comment Component
//------------------------------------------------------------------------------

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
// Div element with nested p tag Component
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
// Header Tag Component
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
// Simple LikeButton Component
//------------------------------------------------------------------------------

  var LikeButton = React.createClass({
    getInitialState: function() {
      return {liked: false};
    },
    handleClick: function(event) {
      this.setState({liked: !this.state.liked});
    },
    render: function() {
      var text = this.state.liked ? 'like' : 'haven\'t liked';
      return (
          <p onClick={this.handleClick}>
            You {text} this. Click to toggle.
          </p>
      );
    }
  });


//------------------------------------------------------------------------------
// Tab Component
//------------------------------------------------------------------------------

  var tabData = {
    managers: [
        {dude: "President Business",
         followers: "1 billion"},
        {dude: "Dilbert",
         followers: "3"},
        {dude: "Gordon Gecko",
         followers: "money"}
      ],
    designers: [
        {dude: "testguy",
         followers: "100"},
        {dude: "Andy Warhol",
         followers: "200"},
        {dude: "Kim Kardash",
         followers: "25"}
      ],
    developers: [
        {dude: "Travis",
         followers: "1 mil"},
        {dude: "Hayley",
         followers: "1 mil"},
        {dude: "Scotty",
         followers: "1 mil"}
      ]
  }

  var TabContainer = React.createClass({
    render: function() {
      var tabs = [];
      for (var prop in this.props.tabData){
        tabs.push(
          <Tab 
          class={prop} 
          activeTab={this.props.activeTab} 
          clickActiveTab={this.props.clickActiveTab} /> )
      }
      return (
        <ul className="tabs">
          {tabs}
        </ul>
      )
    }
  })

  var Tab = React.createClass({
    render: function() {
      var tabClass = "tab";
      var tabClass = (this.props.activeTab == this.props.class) ?
          "tab active" :
          "tab"
      var tabHref = "#" + this.props.class;
      return (
        <li className={tabClass} onClick={this.props.clickActiveTab}>
          <a className="tab-link" href={tabHref}>{this.props.class}</a>
        </li>
      )
    }
  })

  var TabListContainer = React.createClass({
    render: function() {
      var tabListData = [];
      var tabListToRender = this.props.activeTab
      this.props.tabData[tabListToRender].forEach(function (dataElement) {
        tabListData.push(<TabListLink tabListSubData={dataElement} />)
      })
      return (
        <ol className="tabList">
          {tabListData}
        </ol>
      )
    }
  })

  var TabListLink = React.createClass({
    render: function() {
      return (
        <li>
          <a className="tab-list-link">
            <img src="http://www.gravatar.com/avatar/47?f=y&amp;s=64&amp;d=identicon"/>
            {this.props.tabListSubData.dude}{' '}
            <span>Followers: {this.props.tabListSubData.followers}</span>
          </a>
        </li>
      )
    }
  })

  var TabsExample = React.createClass({
    getInitialState: function() {
      return {
        activeTab: "managers"
      }
    },

    handleClick: function(event) {
      event.preventDefault();
      this.setState({activeTab: event.target.innerText})
    },

    render: function() {
      var activeTab = this.state.activeTab
      return (
        <div className="tabsExample">
          <TabContainer 
            tabData={this.props.tabData} 
            activeTab={activeTab} 
            clickActiveTab={this.handleClick} />
          <TabListContainer 
            tabData={this.props.tabData}
            activeTab={activeTab} />
        </div>
      )
    }
  })


//------------------------------------------------------------------------------
// Root Component
//------------------------------------------------------------------------------

// var testObject = {

//   willBeLikeButton: function() {
//     return React.createClass({
//             getInitialState: function() {
//               return {liked: false};
//             },
//             handleClick: function(event) {
//               this.setState({liked: !this.state.liked});
//             },
//             render: function() {
//               var text = this.state.liked ? 'like' : 'haven\'t liked';
//               return (
//                   <p onClick={this.handleClick}>
//                     You {text} this. Click to toggle.
//                   </p>
//               );
//             }
//           })
//   },

//   willBeSnippet: function() {
//     return String(this.willBeLikeButton);
//   }    
// }

// var LikeButton = this.testObject.willBeLikeButton();


  var RootComponent = React.createClass({
    render: function() {

      var commentSnippet = Prism.highlight(comment.innerText, Prism.languages.jsx);
      var simpleDivSnippet = Prism.highlight(simpleDiv.innerText, Prism.languages.jsx);
      var headersSnippet = Prism.highlight(headers.innerText, Prism.languages.jsx);
      var likeButtonSnippet = Prism.highlight(likeButton.innerText, Prism.languages.jsx);
      var tabsSnippet = Prism.highlight(tabs.innerText, Prism.languages.jsx);
      var timeCounterSnippet = Prism.highlight(timeCounter.innerText, Prism.languages.jsx)



      return (
        <div>
          <CommentBox url="comments.json" pollInterval={2000} />
          <pre className="language-jsx"><code className="language-jsx" dangerouslySetInnerHTML={{__html: commentSnippet}}></code></pre>

          <DivExample />
          <pre className="language-jsx"><code className="language-jsx" dangerouslySetInnerHTML={{__html: simpleDivSnippet}}></code></pre>

          <HeaderExample />
          <pre className="language-jsx"><code className="language-jsx" dangerouslySetInnerHTML={{__html: headersSnippet}}></code></pre>

          <LikeButton />
          <pre className="language-jsx"><code className="language-jsx" dangerouslySetInnerHTML={{__html: likeButtonSnippet}}></code></pre>
    
          <TabsExample tabData={tabData} />
          <pre className="language-jsx"><code className="language-jsx" dangerouslySetInnerHTML={{__html: tabsSnippet}}></code></pre>

          <TimeCounterContainer />
          <pre className="language-jsx"><code className="language-jsx" dangerouslySetInnerHTML={{__html: timeCounterSnippet}}></code></pre>          
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








// var codeSnip = function() {
//   $('#codeSnip').append(
//     "<code class='language-jsx'>
//       var LikeButton = React.createClass({
//         getInitialState: function() {
//           return {liked: false};
//         },
//         handleClick: function(event) {
//           this.setState({liked: !this.state.liked});
//         },
//         render: function() {
//           var text = this.state.liked ? 'like' : 'haven\'t liked';
//           return (
//             <p onClick={this.handleClick}>
//               You {text} this. Click to toggle.
//             </p>
//           );
//         }
//       });
//     </code>"
//   )
// }

// var codeSnip = function() {
//   $('#codeSnip').html(
//     "<code class='language-jsx'>" +
//       "var LikeButton = React.createClass({" +
//         "getInitialState: function() {" +
//           "return {liked: false};" +
//         "}," +
//         "handleClick: function(event) {" +
//           "this.setState({liked: !this.state.liked});" +
//         "}," +
//         "render: function() {" +
//           "var text = this.state.liked ? 'like' : 'haven\'t liked';" +
//           "return (" +
//             "<p onClick={this.handleClick}>" +
//               "You {text} this. Click to toggle." +
//             "</p>" +
//           ");" +
//         "}" +
//       "});" +
//     "</code>"
//   )
// }

// codeSnip();















  // willBeLikeButton:  "React.createClass({" + "\n" +
  //           "getInitialState: function() {" + "\n" +
  //             "return {liked: false};" + "\n" +
  //           "}," + "\n" +
  //           "handleClick: function(event) {" + "\n" +
  //             "this.setState({liked: !this.state.liked});" + "\n" +
  //           "}," + "\n" +
  //           "render: function() {" + "\n" +
  //             "var text = this.state.liked ? 'like' : 'haven\'t liked';" + "\n" +
  //             "return (" + "\n" +
  //                 "<p onClick={this.handleClick}>" + "\n" +
  //                   "You {text} this. Click to toggle." + "\n" +
  //                 "</p>" + "\n" +
  //             ");" + "\n" +
  //           "}" + "\n" +
  //         "})" 































