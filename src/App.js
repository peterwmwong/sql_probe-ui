import React, { Component } from 'react';
import './App.css';
import EventTimeline from './components/EventTimeline';
import EventDetails from './components/EventDetails';
import { DraggableCore } from 'react-draggable';

export default class extends Component {
  constructor(){
    super();
    this.state = {
      timelineHeight: 200,
      selectedEvent: undefined,
      startDragY: 0,
      startDragHeight: 0
    };

    this.handleSelect = this.handleSelect.bind(this);
    this.handleDragStart = this.handleDragStart.bind(this);
    this.handleDrag = this.handleDrag.bind(this);
  }

  handleDragStart(e) {
    this.setState({
      startDragY: e.screenY,
      startDragHeight: this.state.timelineHeight
    })
  }

  handleDrag(e) {
    const { startDragHeight, startDragY } = this.state;
    const timelineHeight = startDragHeight - startDragY + e.screenY;
    this.setState({ timelineHeight });
  }

  handleSelect(selectedEvent) {
    this.setState({ selectedEvent });
  }

  render() {
    const { selectedEvent, timelineHeight } = this.state;
    return (
      <div className='App'>
        <div className='App-panelTimeline' style={{ height: timelineHeight }}>
          <EventTimeline height={timelineHeight} onSelect={this.handleSelect} />
        </div>
        <DraggableCore
          onStart={this.handleDragStart}
          onDrag={this.handleDrag}
        >
          <div className='App-panelSplit'></div>
        </DraggableCore>
        <div className='App-panelDetails'>
          <EventDetails event={selectedEvent} />
        </div>
      </div>
    );
  }
}
