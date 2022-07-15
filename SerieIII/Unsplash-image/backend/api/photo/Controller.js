class UserController {
    constructor (serviceUser, user, hashPassword) {
      this._service = serviceUser
      this._entity = user
      this._hashPassword = hashPassword
    }
  
    createNewUser (user) {
      if (user.name && user.name && user.description) {
        const newUser = new this._entity(user)
        const response = this._service.save('photo', newUser)
        return response
      } else {
        throw new Error('Missing parameters')
      }
    }
  
    async getAllUser () {
      const response = await this._service.all('photo')
      return response
    }
  
    async getOneUser (idUser) {
      const response = await this._service.one('photo', idUser)
      return response
    }
  
    async updateUser (parametro, user) {
      const updateUser = await new this._entity(user)
      const response = this._service.update('photo', parametro, updateUser)
      return response
    }
  
    async deleteUser (idUser) {
      const response = await this._service.delete('photo', idUser)
      return response
    }
  }
  
  export default UserController
  