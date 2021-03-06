import mongoose from 'mongoose'

const Schema = mongoose.Schema

const userSchema = new mongoose.Schema({
  _name: { type: String, required: true },
  _email: { type: String, required: true },
  _password: { type: String, required: true }

})

const photoSchema = new mongoose.Schema({
  _name: { type: String, required: true },
  _uri: { type: String, required: true },
  _description: { type: String, required: true }

})

const albumSchema = new mongoose.Schema({
  _name: { type: String, required: true },
  _description: { type: String, required: true }
})

/*
const roleSchema = new mongoose.Schema({
  _name: { type: String, required: true },
  _description: { type: String, required: true }
})

const accountSchema = new mongoose.Schema({
  _name: { type: String, required: true },
  _description: { type: String, required: true }
})

const genderSchema = new mongoose.Schema({
  _name: { type: String, required: true },
  _description: { type: String, required: true }
})

const artistSchema = new mongoose.Schema({
  _firstname: { type: String, required: true },
  _lastname: { type: String, required: true },
  _avatar: { type: String, required: true },
  _country: { type: String, required: true },
  _birthday: { type: String, required: true }
})

const songSchema = new mongoose.Schema({
  _title: { type: String, required: true },
  _uri: { type: String, required: true },
  _duration: { type: Number, required: true },
  _image: { type: String, required: true },
  _idArtist: { type: Schema.Types.ObjectId, ref: 'Artist', required: true },
  _idGender: { type: Schema.Types.ObjectId, ref: 'Gender', required: true }
})

const playlistSchema = new mongoose.Schema({
  _name: { type: String, required: true },
  _avatar: { type: String, required: true },
  _duration: { type: String, required: true }
})

const playlistsongSchema = new mongoose.Schema({
  _idSonf: { type: String, required: true },
  _idPlaylist: { type: String, required: true }
})*/

const userModel = mongoose.model('User', userSchema)
const photoModel = mongoose.model('Photo',photoSchema)
const albumModel = mongoose.model('Album',albumSchema)
/*const roleModel = mongoose.model('Role', roleSchema)
const accountModel = mongoose.model('Account', accountSchema)
const genderModel = mongoose.model('Gender', genderSchema)
const artistModel = mongoose.model('Artist', artistSchema)
const songModel = mongoose.model('Song', songSchema)
const playlistModel = mongoose.model('Playlist', playlistSchema)
const playlistsongModel = mongoose.model('Plalist_Song', playlistsongSchema)*/

export const models = {
  user: userModel,
  photo: photoModel,
  album: albumModel
  /*role: roleModel,
  account: accountModel,
  gender: genderModel,
  artist: artistModel,
  song: songModel,
  playlist: playlistModel,
  playlistsong: playlistsongModel*/
}
