import { Router } from "express";
import { bannedHandler } from "../inject";

const bannedController = Router();



/**
 * @swagger
 * tags:
 *      name: Banneds
 *      description: Manage Banneds
 */

/**
  * @openapi
  * /api/banneds:
  *  post:
  *      tags: [Banneds]
  *      description: Create a banned
  *      consumes:
  *       - application/json
  *      parameters:
  *       - name: JSON
  *         in: body
  *         required: true
  *         type: object
  *         default: {"banMail": "test@gmail.com","reason": "test"}
  *      responses:
  *        200:
  *          description: Create a new banned.
  */
bannedController.post('/',bannedHandler.postBanned)

/**
  * @openapi
  * /api/banneds/{id}:
  *  delete:
  *      tags: [Banneds]
  *      description: Delete a banned
  *      parameters:
  *       - name: id
  *         in: path
  *         required: true
  *         type: integer
  *      responses:
  *        200:
  *          description: Delete a banned. 
  */
bannedController.delete('/:id', bannedHandler.deleteBanned)

/**
 * @openapi
 * /api/banneds:
 *   get:
 *      tags: [Banneds]
 *      responses:
 *        200:
 *          description: Get the list of all banned.
 */
bannedController.get('/', bannedHandler.getBanned)

/**
 * @openapi
 * /api/banneds/{id}:
 *   get:
 *      tags: [Banneds]
 *      parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         type: integer
 *         default: 1
 *      responses:
 *        200:
 *          description: Get one specifique banned.
 */
bannedController.get('/:id', bannedHandler.getBannedId)

/**
  * @openapi
  * /api/banneds/{id}:
  *  put:
  *      tags: [Banneds]
  *      description: Update a banned
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
  *         default: {"banMail": "update@gmail.com","reason": "test"}
  *      responses:
  *        200:
  *          description: Update the banned of given id.
  */
bannedController.put('/:id', bannedHandler.updateBanned)

export { bannedController }