import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import { config } from '../config/defaults.js'

export const helpers = {
  encryptPassword: (password) => {
    return bcrypt.hashSync(password, 10)
  },
  comparePassword: (password, hashPassword) => {
    console.log('>>>>>>>>>>>>>>>>>>>>>>> ', password, ' <<>> ', hashPassword)
    return bcrypt.compare('mario123', '$2b$10$tvWHnX7I6kelmUtJahE6HuX5VyGlcId.PtkN8jagjH2LRYoc4KniW')
    /* bcrypt.compare(password, hashPassword).then(function (result) {
      return result
    }) */
  },
  generateToken: (idUser) => {
    return jwt.sign({
      id: idUser
    }, config.jwt.secret, {
      expiresIn: '5Minutes'
    })
  },
  verifyToken: (token) => {
    return jwt.verify(token, config.jwt.secret)
  }

}
