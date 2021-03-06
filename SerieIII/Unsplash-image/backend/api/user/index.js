import UserController from './Controller.js'
import UserRouter from './Routes.js'

import { User } from '../../entity/User.js'
import { helpers } from '../../lib/helpers.js'
import { HttpStatusCode } from '../../response/httpcode.js'
import { response } from '../../response/response.js'
import { validateCreteUser } from './validate.js'

import { DBMongo } from '../../store/DBMongo.js'

export const userModule = (expresRouter) => {

  const userServices = new DBMongo()
  const userController = new UserController(userServices, User, helpers.encryptPassword)
  const userRouter = new UserRouter(expresRouter, userController, response, HttpStatusCode, validateCreteUser)
  return userRouter._router
}
