import React, { Component } from 'react';
import CodeMirror from 'react-codemirror';
import './EventDetails.css';
import 'codemirror/lib/codemirror.css';
import 'codemirror/mode/ruby/ruby';
import 'codemirror/mode/sql/sql';
import PanelSplit from './PanelSplit';

const CODE_MIRROR_OPTIONS = {
  lineNumbers: true,
  lineWrapping: true,
  readOnly: true
}

const SQL_CODE_MIRROR_OPTIONS = {
  ...CODE_MIRROR_OPTIONS,
  mode: 'text/x-pgsql'
}

const RUBY_CODE_MIRROR_OPTIONS = {
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

const getFilename = call => call.split(/:\d+:in /)[0];

export default class extends Component {
  constructor() {
    super();
    this.handleSelectCall = this.handleSelectCall.bind(this);
    this.state = { selectedCall: 0 };
  }

  componentWillReceiveProps({ event }) {
    if (event !== this.props.event)
      this.setState({ selectedCall: 0 });
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
          <PanelSplit
            initialSize={40}
            a={<CodeMirror className='EventDetails-sql' value={event.sql} options={SQL_CODE_MIRROR_OPTIONS} />}
            b={
              <PanelSplit
                orientation='horizontal'
                a={
                  <div className='EventDetails-stack'>
                    <div className='EventDetails-panelHeader'>Stack</div>
                    <StackTrace
                      callStack={event.caller}
                      selected={selectedCall}
                      onSelect={this.handleSelectCall}
                    />
                  </div>
                }
                b={
                  <div className='EventDetails-code'>
                    <div className='EventDetails-panelHeader'>{getFilename(event.caller[selectedCall])}</div>
                    <CodeMirror
                      className='EventDetails-ruby'
                      options={RUBY_CODE_MIRROR_OPTIONS}
                      value={
`module Better
  class Call
    def Saul
      puts "LWYR UP"
    end
  end
end`
                      }/>
                  </div>
                }
              />
            }
          />
        }
      </div>
    );
  }
}
