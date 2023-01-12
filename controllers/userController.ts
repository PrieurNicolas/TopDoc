import { Router } from "express";
import { adminController } from "./admincontroller";
import { userHandler } from "../inject";
const usersController = Router();

/**
 * @swagger
 * tags:
 *      name: Users
 *      description: Manage users
 */

/**
 * @openapi
 * /api/users:
 *   get:
 *      tags: [Users]
 *      description: Get all Users
 *      responses:
 *        200:
 *          description: Get the list of all users.
 */
usersController.get("/", userHandler.getUsers)



/**
  * @openapi
  * /api/users:
  *  post:
  *      tags: [Users]
  *      description: Add Users
  *      consumes:
  *       - application/json
  *      parameters:
  *       - name: JSON
  *         in: body
  *         required: true
  *         type: object
  *         default: { "password":"hash","mail": "topdoc@topdoc.com", "phone_number": "0698444129","genre": "Homme", "firstname": "Top", "lastname": "Doc", "birthdate" : "2020-01-01" }
  *      responses:
  *        200:
  *          description: Create a new user.
  * 
  */
usersController.post("/", userHandler.postUser)

/**
  * @openapi
  * /api/users/{id}:
  *  delete:
  *      tags: [Users]
  *      description: Delete Users
  *      parameters:
  *       - name: id
  *         in: path
  *         required: true
  *         type: integer
  *      responses:
  *        200:
  *          description: Delete an user. 
  */
usersController.delete("/:id", userHandler.deleteUser)

/**
 * @openapi
 * /api/users/{id}:
 *  get:
 *      tags: [Users]
 *      description: Get User by ID
 *      parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         type: integer
 *         default: 1
 *      responses:
 *        200:
 *          description: Get the user of given id.
 */
usersController.get('/:id', userHandler.getUserId)

/**
 * @openapi
 * /api/users/{id}:
 *  put:
 *      tags: [Users]
 *      description: Update Users
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
 *         default: { "password":"hash","mail": "topdoc@gmail.com", "phone_number": "0698451629","genre": "Femme", "firstname": "Top", "lastname": "Doc", "birthdate" : "2020-01-01" }
 *      responses:
 *        200:
 *          description: Update the user of given id.
 */
usersController.put('/:id', userHandler.updateUser)

// usersController.use("/admin", adminController)

export { usersController }