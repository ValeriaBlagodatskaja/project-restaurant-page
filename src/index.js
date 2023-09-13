import pageLoad from "./pageLoad";

import createFooter from "./footer"; // Import the createFooter function

// ... Other imports and code ...

// Create the footer once
const footer = createFooter();
document.body.appendChild(footer);

pageLoad();
