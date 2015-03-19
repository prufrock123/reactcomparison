var React = require('react');

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

module.exports = React.createClass({
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