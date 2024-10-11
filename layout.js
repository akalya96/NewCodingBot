// 'use client';
import React from 'react';
import './global.css';

const RootLayout = ({ children }) => {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <title>Your App</title>
      </head>
      <body>
        {children}
      </body>
    </html>
  );
};

export default RootLayout;

