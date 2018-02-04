import file from 'fs'
import path from 'path'

const FILE_PATH = path.join(__dirname, 'file.json')
const ENCODING = 'utf8'

export default class File {
	constructor(path) {
		this.path = path
	}

	load(callback) {
		if (file.existsSync(this.path)) {
			file.readFile(this.path, { encoding: ENCODING }, (err, data) => {
				if (err) {
					throw err
				} else {
					let fileData = ''
					try {
						fileData = JSON.parse(data)
					} catch (err) { }
					callback(fileData)
				}
			})
		}else{
			callback(false)
		}
	}

	save(data, callback) {
		file.writeFile(this.path, data, { encoding: ENCODING }, (err, d) => {
			if (err) {
				throw err
			} else {
				callback(true)
			}
		})
	}
}
