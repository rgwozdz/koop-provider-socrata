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
Model.prototype.getData = async function (req, callback) {

  // 1. Construct the remote API request URL
  const url = makeUrl(req)

  try {
    // 2. Make the request to the remote API
    const result = await fetch(url)
    const json = await result.json()

    // 3. Translate the result to GeoJSON
    const geojson = translate(json)

    // 4. Fire the callback with the GeoJSON
    geojson.metadata = {}
    geojson.metadata.geometryType = 'Point'

    callback(null, geojson)
  } catch (err) {
    // 5. Handle any errors
    callback(err, null)
  }
}

/**
 * Use the request params to construct the remote URL
 * @param {} req 
 */
function makeUrl (req) {
  return `https://${req.params.host}/resource/${req.params.id}`
}


/**
 * Translate remote API json to GeoJSON
 * @param {*} json 
 */
function translate(json) {
  // Loop thru JSON array
  const features = json.map(rec => {
    const feature = {}

    // Create GeoJSON properties
    feature.properties = _.omit(rec, 'location_1')
  
    // Create GeoJSON geometry
    feature.geometry = rec.location_1

    return feature
  })

  // Wrap features in Feature Collection object
  return {
    type: 'FeatureCollection',
    features
  }
}

module.exports = Model

