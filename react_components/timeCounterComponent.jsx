var React = require('react');


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
    // console.log(this.timeUnitCheck(this.props.timeUnit))
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
      // <input type="text" placeholder="enter a millisecond interval" ref="interval" onChange={this.handleInput} />

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

module.exports = React.createClass({
  
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
    // console.log(this.state.timeUnit);
    return (
      <div className="Counter example">
        <TimeCounter />
        <CustomTimeCounter updateTimeState={this.updateTheIntervalState} timeUnit={this.state.timeUnit} newTime={this.state.newTime}/>
        <TimeCounterForm onFormInput={this.updateTheIntervalState} />
      </div>
     )
  }
})