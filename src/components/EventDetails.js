import React, { Component } from 'react';
import CodeMirror from 'react-codemirror';
import './EventDetails.css';
import 'codemirror/lib/codemirror.css';
import 'codemirror/mode/ruby/ruby';
import 'codemirror/mode/sql/sql';

const CODE_MIRROR_OPTIONS = {
  lineNumbers: true,
  lineWrapping: true,
  readOnly: true
}

const CODE_MIRROR_SQL_OPTIONS = {
  ...CODE_MIRROR_OPTIONS,
  mode: 'text/x-pgsql'
}

const CODE_MIRROR_RUBY_OPTIONS = {
  ...CODE_MIRROR_OPTIONS,
  mode: 'ruby'
}

const StackTrace = ({ callStack, selected, onSelect }) => (
  <form className='StackTrace'>
    <fieldset>
      {callStack.map((call, i) => (
        <div className='StackTrace-call' key={i}>
          <input
            type="radio"
            id={`radio-${i}`}
            name='call-stack'
            checked={selected === i}
            onChange={() => onSelect(i)}
          />
          <label htmlFor={`radio-${i}`}>
            {call}
          </label>
        </div>
      ))}
    </fieldset>
  </form>
);


// /Users/peter.wong/projects/hipaatitis/app/views/shared/_appointments.erb:4:in `group_by'
const getFilename = call => call.split(/:\d+:in /)[0];

export default class extends Component {
  constructor() {
    super();
    this.handleSelectCall = this.handleSelectCall.bind(this);
    this.state = { selectedCall: 0 };
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.event !== this.props.event) {
      this.setState({ selectedCall: 0 });
    }
  }

  handleSelectCall(selectedCall) {
    this.setState({ selectedCall })
  }

  render() {
    const { event } = this.props;
    const { selectedCall } = this.state;
    return (
      <div className='EventDetails'>
        {event &&
          <CodeMirror className='EventDetails-sql' value={event.sql} options={CODE_MIRROR_SQL_OPTIONS} />
        }
        {event &&
          <div className='EventDetails-stackAndCode'>
            <div className='EventDetails-stack'>
              <StackTrace
                callStack={event.caller}
                selected={selectedCall}
                onSelect={this.handleSelectCall}
              />
            </div>
            <div className='EventDetails-code'>
              <div className='EventDetails-codeFilename'>{getFilename(event.caller[selectedCall])}</div>
              <CodeMirror className='EventDetails-ruby' value={
`module Better
  class Call
    def Saul
      puts "LWYR UP"
    end
  end
end`} options={CODE_MIRROR_RUBY_OPTIONS} />
            </div>
          </div>
        }
      </div>
    );
  }
}
