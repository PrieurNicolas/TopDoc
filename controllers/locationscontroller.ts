import { Router } from "express";
import { locationHandler } from "../inject";

const locationController = Router();

/**
 * @swagger
 * tags:
 *      name: Locations
 *      description: Manage locations
 */

/**
  * @openapi
  * /api/locations:
  *  post:
  *      tags: [Locations]
  *      description: Create a location
  *      consumes:
  *       - application/json
  *      parameters:
  *       - name: JSON
  *         in: body
  *         required: true
  *         type: object
  *         default: { "address": "adresse", "city": "ville", "zip_code": 62200 }
  *      responses:
  *        200:
  *          description: Create a new location.
  */
locationController.post('/', locationHandler.postLocation)

/**
  * @openapi
  * /api/locations/{id}:
  *  delete:
  *      tags: [Locations]
  *      description: Delete a location
  *      parameters:
  *       - name: id
  *         in: path
  *         required: true
  *         type: integer
  *      responses:
  *        200:
  *          description: Delete a location. 
  */
locationController.delete('/:id', locationHandler.deleteLocation)

/**
 * @openapi
 * /api/locations:
 *   get:
 *      tags: [Locations]
 *      responses:
 *        200:
 *          description: Get the list of all location.
 */
locationController.get('/', locationHandler.getLocations)

/**
 * @openapi
 * /api/locations/{id}:
 *   get:
 *      tags: [Locations]
 *      parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         type: integer
 *         default: 1
 *      responses:
 *        200:
 *          description: Get one specifique location.
 */
locationController.get('/:id', locationHandler.getLocationId)

/**
  * @openapi
  * /api/locations/{id}:
  *  put:
  *      tags: [Locations]
  *      description: Update a locations
  *      consumes:
  *       - application/json
  *      parameters:
  *       - name: id
  *         in: path
  *         required: true
  *         type: integer
  *         default: 1
  *       - name: JSON
  *         in: body
  *         required: true
  *         type: object
  *         default: { "address": "adresse", "city": "ville", "zip_code": 12345 }
  *      responses:
  *        200:
  *          description: Update the location of given id.
  */
locationController.put('/:id', locationHandler.updateLocation)

export { locationController }