import UserController from './Controller.js'
import UserRouter from './Routes.js'

import { Photo } from '../../entity/Photo.js'
import { helpers } from '../../lib/helpers.js'
import { HttpStatusCode } from '../../response/httpcode.js'
import { response } from '../../response/response.js'
//import { validateCreteUser } from './validate.js'

import { DBMongo } from '../../store/DBMongo.js'

export const photoModule = (expresRouter) => {

  const userServices = new DBMongo()
  const userController = new UserController(userServices, Photo)
  const userRouter = new UserRouter(expresRouter, userController, response, HttpStatusCode)
  return userRouter._router
}
