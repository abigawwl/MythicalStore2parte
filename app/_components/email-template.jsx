import * as React from 'react';


export const EmailTemplate =({
  firstName,
}) => (
  <div>
    <h1>Thank you purchasing on Mythical Store. You order's is on its way. {firstName}!</h1>
  </div>
);
