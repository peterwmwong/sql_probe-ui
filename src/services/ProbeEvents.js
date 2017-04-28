import ProbeEventMock from './ProbeEventMock';

const events = window.debugProbeEventMock = ProbeEventMock;
let listeners = [];

// const addEvent = event => {
//   events.push(event);
//   listeners.forEach(l => l(events));
// }
// const ws = new WebSocket('blah/etc/etc.');
// let increment = 0;
// setInterval(() => {
//   addEvent({
//     ...ProbeEventMock,
//     start_time: ProbeEventMock.start_time + (100.0 * ++increment)
//   });
// }, 2000);

export default {
  get events() { return events; },

  on(listener) {
    if (listeners.indexOf(listener) === -1)
      listeners.push(listener);
  },

  off(listener) {
    listeners = listeners.filter(l => l !== listener);
  }
}
