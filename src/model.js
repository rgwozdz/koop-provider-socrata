/*
  model.js

  This file is required. It must export a class with at least one public function called `getData`

  Documentation: https://koopjs.github.io/docs/usage/provider
*/

const _ = require('lodash')
const fetch = require('node-fetch')

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

  // 4. Fire the callback with the GeoJSON
  
  // 5. Handle any errors
  
}

module.exports = Model

