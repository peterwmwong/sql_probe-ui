import React, { Component } from 'react';
import './EventTimeline.css';
import ProbeEvents from '../services/ProbeEvents';
import 'vis/dist/vis-timeline-graph2d.min.css';
import { DataSet, Timeline } from 'vis/dist/vis-timeline-graph2d.min.js';

const flatten = arr => [].concat(...arr);

const findEvent = (events, id) =>
  id === undefined
    ? undefined
    : flatten(events.map(e => e.events)).find(e =>
        e.time === id // TODO: need an event.id
      );

export default class extends Component {
  constructor() {
    super();

    this.handleEventsUpdated = events => this.setState({ events });
    ProbeEvents.on(this.handleEventsUpdated);

    this.handleSelect = this.handleSelect.bind(this);

    this.state = { events: ProbeEvents.events };
  }

  shouldComponentUpdate(nextProps, nextState) {
    return (
      nextProps.height !== this.props.height ||
      nextState.events !== this.state.events
    );
  }

  componentDidMount() {
    const timeline = this.timeline = new Timeline(this.root, this.timelineItems, {
      height: '100%'
    });
    timeline.on('select', this.handleSelect);
  }

  handleSelect({ items }) {
    const { events } = this.state;
    if (this.props.onSelect) {
      const event = findEvent(events, items[0]);
      setTimeout(() => this.props.onSelect(event), 100);
    }
  }

  get timelineItems() {
    const { events } = this.state;
    return new DataSet(flatten(
      events.map(({ duration, start_time, params, events }) => [
        {
          id: start_time,
          start: (start_time*1000.0),
          end: (start_time*1000.0 + duration),
          content: `${params.controller}#${params.action}`,
          type: 'background'
        },
        ...events.map(({ time, elapsed, end }) => {
          const start = Date.parse(time);
          const _end = Date.parse(end);
          return {
            id: time, // TODO: need an event.id
            start,
            end: _end,
            content: "sql"
          }
        })
      ])
    ));
  }

  componentDidUpdate() {
    this.timeline.setData({ items: this.timelineItems });
  }

  componentWillUnmount() {
    ProbeEvents.off(this.handleEventsUpdated);
    // TODO: cleanup the Timeline
  }

  render() {
    return (
      <div
        className='EventTimeline'
        style={{ height: '100%' }}
        ref={root => this.root = root}
      />
    );
  }
}
