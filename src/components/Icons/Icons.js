import React, { Fragment } from 'react';

const icons = {
    avatar: <svg viewBox="0 0 32 32" width="32px" height="32px"><path d="M29.7,25.2c0-5.6-4.9-10.3-11.4-11.2c2.7-1,4.6-3.5,4.6-6.5c0-3.8-3.1-6.9-6.9-6.9S9.1,3.7,9.1,7.5 c0,3,1.9,5.5,4.6,6.5C7.2,14.9,2.3,19.6,2.3,25.2c0,2.1,0,5.7,0,5.7h27.5C29.8,30.9,29.7,27.3,29.7,25.2z"/></svg>,
    arrow: <svg viewBox="0 0 32 32" width="32px" height="32px"><path d="M18.2,7.4L29.8,19c1.4,1.4,1.4,3.7,0,5l0,0c-1.4,1.4-3.7,1.4-5,0l-8.2-8.2c-0.3-0.3-0.7-0.3-1,0l-8.2,8.2 c-1.4,1.4-3.7,1.4-5,0l0,0c-1.4-1.4-1.4-3.7,0-5L13.8,7.4c0.6-0.6,1.4-0.9,2.2-0.8C16.8,6.6,17.6,6.8,18.2,7.4z"/></svg>,
    remove: <svg viewBox="0 0 32 32" width="32px" height="32px"><path d="M21.4,16l7-7c1.6-1.6,1.6-3.9,0-5.4S24.5,2,23,3.6l-7,7l-7-7C7.5,2,5.1,2,3.6,3.6S2,7.5,3.6,9l7,7l-7,7 c-1.6,1.6-1.6,3.9,0,5.4c0.8,0.8,1.7,1.2,2.7,1.2s1.9-0.4,2.7-1.2l7-7l7,7c0.8,0.8,1.7,1.2,2.7,1.2s1.9-0.4,2.7-1.2 c1.6-1.6,1.6-3.9,0-5.4L21.4,16z"/></svg>,
    rocket: <svg viewBox="0 0 32 32" width="32px" height="32px"><path d="M3.4,23.2c0.3-0.3,0.7-0.3,1,0c0.3,0.3,0.3,0.7,0,1L2.6,26c-0.3,0.3-0.8,0.3-1,0c-0.3-0.3-0.3-0.7,0-1L3.4,23.2L3.4,23.2z M25.7,10.7L25.7,10.7c0,2.5-2,4.5-4.5,4.5c-2.5,0-4.5-2-4.5-4.5c0-2.5,2-4.5,4.5-4.5C23.7,6.2,25.7,8.2,25.7,10.7L25.7,10.7z M21.3,7.7L21.3,7.7c-1.7,0-3,1.3-3,3c0,1.7,1.4,3,3,3c1.7,0,3-1.3,3-3C24.3,9,22.9,7.7,21.3,7.7L21.3,7.7z M4.8,20.6L4.8,20.6 c0-0.9,0.1-1.8,0.2-2.8c0-0.3,0.1-0.6,0.1-1l-0.3,0.1c-0.6,0.2-1.1,0.6-1.6,1c-0.5,0.4-1.2,0.4-1.7-0.1c-0.1-0.1-0.2-0.2-0.2-0.3 c-0.7-1.5-1-3.2-0.7-4.8c0.3-1.6,1-3.1,2.2-4.3l0,0l0,0c1.1-1.1,2.5-1.8,3.9-2.1C8,6.1,9.2,6.1,10.4,6.4l0.2-0.2l0,0h0 c2.6-2.6,5.7-4.3,9-5.2c3.4-0.9,7-0.9,10.4,0c0.4,0.1,0.7,0.4,0.9,0.9v0v0c0.9,3.4,0.9,7,0,10.4c-0.9,3.3-2.6,6.4-5.2,9l-0.1,0.1 l-0.2,0.2c0.3,1.2,0.4,2.5,0.1,3.7c-0.3,1.4-1,2.8-2.1,3.9l-0.1,0.1c-1.2,1.2-2.7,1.9-4.3,2.2c-1.6,0.2-3.3,0-4.8-0.7 c-0.6-0.3-0.8-1-0.5-1.6c0.1-0.1,0.1-0.2,0.2-0.3c0.4-0.5,0.8-1,1-1.6l0.1-0.3c-0.3,0.1-0.7,0.1-1,0.2c-1,0.1-1.9,0.2-2.9,0.2 c-0.3,0-0.6-0.1-0.8-0.3l0,0l-5.3-5.3C4.9,21.2,4.7,20.9,4.8,20.6L4.8,20.6z M7.3,18.1L7.3,18.1c-0.1,0.7-0.1,1.4-0.2,2l4.6,4.7 c0.7,0,1.4-0.1,2-0.2c0.8-0.1,1.7-0.3,2.5-0.5c0.1,0,0.3-0.1,0.4,0c0.7,0,1.2,0.6,1.1,1.2c0,0.9-0.2,1.8-0.6,2.7 c-0.1,0.3-0.3,0.6-0.5,0.9c0.6,0.1,1.3,0.2,2,0c1.1-0.2,2.1-0.7,3-1.5l0,0c0.8-0.8,1.3-1.7,1.5-2.7c0.2-1,0.1-2.1-0.2-3.1 c-0.2-0.4-0.1-1,0.3-1.3l0.4-0.4l0.3-0.3l0,0c2.3-2.3,3.8-5,4.6-7.9c0.7-2.8,0.8-5.7,0.2-8.5c-2.8-0.6-5.7-0.6-8.5,0.2 c-2.9,0.8-5.7,2.3-7.9,4.6L12,8.2h0l-0.3,0.4c-0.3,0.4-0.8,0.5-1.3,0.3c-1-0.4-2.1-0.5-3.1-0.2c-1,0.2-2,0.7-2.7,1.5v0 c-0.9,0.9-1.4,1.9-1.5,3c-0.1,0.6-0.1,1.3,0,2c0.3-0.2,0.6-0.3,0.9-0.5c0.9-0.4,1.8-0.5,2.7-0.6c0.1,0,0.3,0,0.4,0.1 c0.6,0.2,1,0.8,0.8,1.5C7.6,16.5,7.4,17.3,7.3,18.1L7.3,18.1z M7.8,27.6L7.8,27.6c0.3-0.3,0.7-0.3,1,0c0.3,0.3,0.3,0.7,0,1L7,30.4 c-0.3,0.3-0.7,0.3-1,0c-0.3-0.3-0.3-0.7,0-1L7.8,27.6L7.8,27.6z M5.6,25.4L5.6,25.4c0.3-0.3,0.7-0.3,1,0c0.3,0.3,0.3,0.7,0,1l-4,4.1 c-0.3,0.3-0.7,0.3-1,0c-0.3-0.3-0.3-0.7,0-1L5.6,25.4L5.6,25.4z"/></svg>
}

export const Icon = (props) => {
    const icon = icons[props.icon];
    return icon;
};