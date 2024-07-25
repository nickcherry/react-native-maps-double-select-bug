# React Native Maps Double-Select Bug

When pressing a marker that is near another marker, the callout for the marker that was actually pressed will appear, then about a second later, the correct marker's callout will dismiss and the second marker's callout will appear.

See [demo](./demo.mov).
https://github.com/user-attachments/assets/b82d6bed-b7fe-4003-9280-761d2f78119d



As can be seen in the logs, `onMarkerPress` correctly fires once, as there is only one press. `onMarkerSelect` incorrectly fires twice. Calling `preventDefault` and `stopPropagation` on the press event has no impact, and as far as I can tell none of the event handlers provide any means of canceling the event. I have also tried hacks like updating state on the first `onSelect` event such that all other markers' `title` and `description` gets nullified. This also has on effect. I believe all the `onSelect` calls happen in nativeland.

This is a brand new Expo project. The only relevant code is in [`./app/index.tsx`](./app/index.tsx)
