/*
  model.js

  This file is required. It must export a class with at least one public function called `getData`
*/


function Model (koop) {}


/**
 * Get data from the remote API, translate to GeoJSON, send to callback
 * @param {object} req - Express request object
 * @param {function} callback - callback function
 */
Model.prototype.getData = function (req, callback) {

  // 1. Construct the remote API request URL
  
  // 2. Make the request to the remote API
  
  // 3. Translate the result to GeoJSON

  // 4. Add metadata to GeoJSON
  
  // 5. Fire the callback with the GeoJSON
  
  // 6. Handle any errors
}

module.exports = Model

