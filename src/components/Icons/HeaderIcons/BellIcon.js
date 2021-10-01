import React from 'react'

const BellIcon = ({maskId = 100}) => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path fillRule="evenodd" clipRule="evenodd" d="M5.5146 16L6.6946 14.818C7.0726 14.44 7.2806 13.938 7.2806 13.404V8.72702C7.2806 7.37002 7.8706 6.07302 8.9006 5.17102C9.9386 4.26102 11.2606 3.86102 12.6376 4.04202C14.9646 4.35102 16.7196 6.45502 16.7196 8.93702V13.404C16.7196 13.938 16.9276 14.44 17.3046 14.817L18.4856 16H5.5146ZM13.9996 18.341C13.9996 19.24 13.0836 20 11.9996 20C10.9156 20 9.9996 19.24 9.9996 18.341V18H13.9996V18.341ZM20.5206 15.208L18.7196 13.404V8.93702C18.7196 5.45602 16.2176 2.49902 12.8996 2.06002C10.9776 1.80402 9.0376 2.39102 7.5826 3.66702C6.1186 4.94902 5.2806 6.79302 5.2806 8.72702L5.2796 13.404L3.4786 15.208C3.0096 15.678 2.8706 16.377 3.1246 16.99C3.3796 17.604 3.9726 18 4.6366 18H7.9996V18.341C7.9996 20.359 9.7936 22 11.9996 22C14.2056 22 15.9996 20.359 15.9996 18.341V18H19.3626C20.0266 18 20.6186 17.604 20.8726 16.991C21.1276 16.377 20.9896 15.677 20.5206 15.208Z" fill="currentColor"/>
    <mask id={`mask${maskId}`} mask-type="alpha" maskUnits="userSpaceOnUse" x="2" y="2" width="19" height="20">
      <path fillRule="evenodd" clipRule="evenodd" d="M5.5146 16L6.6946 14.818C7.0726 14.44 7.2806 13.938 7.2806 13.404V8.72702C7.2806 7.37002 7.8706 6.07302 8.9006 5.17102C9.9386 4.26102 11.2606 3.86102 12.6376 4.04202C14.9646 4.35102 16.7196 6.45502 16.7196 8.93702V13.404C16.7196 13.938 16.9276 14.44 17.3046 14.817L18.4856 16H5.5146ZM13.9996 18.341C13.9996 19.24 13.0836 20 11.9996 20C10.9156 20 9.9996 19.24 9.9996 18.341V18H13.9996V18.341ZM20.5206 15.208L18.7196 13.404V8.93702C18.7196 5.45602 16.2176 2.49902 12.8996 2.06002C10.9776 1.80402 9.0376 2.39102 7.5826 3.66702C6.1186 4.94902 5.2806 6.79302 5.2806 8.72702L5.2796 13.404L3.4786 15.208C3.0096 15.678 2.8706 16.377 3.1246 16.99C3.3796 17.604 3.9726 18 4.6366 18H7.9996V18.341C7.9996 20.359 9.7936 22 11.9996 22C14.2056 22 15.9996 20.359 15.9996 18.341V18H19.3626C20.0266 18 20.6186 17.604 20.8726 16.991C21.1276 16.377 20.9896 15.677 20.5206 15.208Z" fill="white"/>
    </mask>
    <g mask={`url(#mask${maskId})`}>
      <rect width="24" height="24" fill="currentColor"/>
    </g>
  </svg>
)


export default BellIcon;
