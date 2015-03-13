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
          setInterval(this.setMyState, 50);
        },

        timeUnitCheck: function(timeUnitType) {
          var valueToCheck = (timeUnitType.slice(-1) !== "s") ?
                             timeUnitType.toLowerCase() :
                             timeUnitType.slice(-1).toLowerCase;
          switch (valueToCheck) {
            case "millisecond":

            case "centisecond":

            case "decisecond":
          }
        },

        render: function() {
          var timeConverted = this.timeUnitCheck(this.props.timeUnit);
          var milliseconds = (this.state.newTime - this.startTime);
          // var seconds = elapsed / 10 + (elapsed % 10 ? '' : '.0' );
          var message =
            'React has been successfully running for ' + timeConverted + this.props.timeUnit + "s";
          return (
            <div>
              <p>{message}</p>
              <p>{this.props.timeUnit}</p>
            </div>
          )
        }
      });

      var TimeCounterForm = React.createClass({
        handleInput: function(e) {
          e.preventDefault();
          var inputValue = this.refs.interval.getDOMNode().value.trim();
          if (!inputValue) {
            return;
          }
          this.props.onFormInput({inputValue})
        },

        render: function() {
          return (
            <input type="text" placeholder="enter a millisecond interval" ref="interval" onChange={this.handleInput} />
          )
        }
      })

      var TimeCounterContainer = React.createClass({
        
        getInitialState: function() {
          return {timeUnit: "minutes"};
        },

        updateTheIntervalState: function(value) {
          this.setState({timeUnit: value});
        },

        render: function() {
          return (
            <div>
              <TimeCounter />
              <CustomTimeCounter timeUnit={this.state.timeUnit} />
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
// Simple Click Component
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


    var RootComponent = React.createClass({
      render: function() {
        return (
          <div>
            <CommentBox url="comments.json" pollInterval={2000} />
            <DivExample />
            <HeaderExample />
            <LikeButton />
            <TabsExample tabData={tabData} />
            <TimeCounterContainer />
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

//------------------------------------------------------------------------------
//------------------------------------------------------------------------------



      // var TimeCounter = React.createClass({

      //   var start = new Date().getTime();

      //   getInitialState: function() {
      //     return {newTime: new Date().getTime()};
      //   },

      //   setInterval: function(tickInterval) {
      //     setInterval(this.setState({newTime: new Date().getTime()}), tickInterval);
      //   },

      //   render: function() {
      //     var elapsed = Math.round((this.state.newTime - start) / 100);
      //     var seconds = elapsed / 10 + (elapsed % 10 ? '' : '.0' );
      //     var message =
      //       'React has been successfully running for ' + seconds + ' seconds.';

      //     return <p>{message}</p>;
      //   }
      // });
      // var start = new Date().getTime();
      // setInterval(function() {
      //   React.render(
      //     <ExampleApplication elapsed={new Date().getTime() - start} />,
      //     document.getElementById('container')
      //   );
      // }, 50);




























































