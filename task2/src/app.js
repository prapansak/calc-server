import express from 'express'
import cors from 'cors'
import bodyParser from 'body-parser'
import _ from 'lodash'

import Calculator from './calculator'
import File from './file'

const app = express()
const router = express.Router()

const calculator = new Calculator()

router.post('/plus', (req, res) => {
	const { inputA, inputB } = req.body
	const result = calculator.plus(inputA, inputB)
	if (result !== -1) res.status(200).json({ data: result }); else res.status(422).json({ data: { msg: 'Input is not number' } })
})
router.post('/minus', (req, res) => {
	const { inputA, inputB } = req.body
	const result = calculator.minus(inputA, inputB)
	if (result !== -1) res.status(200).json({ data: result }); else res.status(422).json({ data: { msg: 'Input is not number' } })
})
router.post('/multiply', (req, res) => {
	const { inputA, inputB } = req.body
	const result = calculator.multiply(inputA, inputB)
	if (result !== -1) res.status(200).json({ data: result }); else res.status(422).json({ data: { msg: 'Input is not number' } })
})
router.post('/divide', (req, res) => {
	const { inputA, inputB } = req.body
	const result = calculator.divide(inputA, inputB)
	if (result !== -1) res.status(200).json({ data: result }); else res.status(422).json({ data: { msg: 'Input is not number' } })
})
router.post('/pow', (req, res) => {
	const { inputA, inputB } = req.body
	const result = calculator.pow(inputA, inputB)
	if (result !== -1) res.status(200).json({ data: result }); else res.status(422).json({ data: { msg: 'Input is not number' } })
})

router.post('/save', (req, res) => {
	const { id, inputA, inputB, operator, result } = req.body
	if (_.isString(id) && _.isString(inputA) && _.isString(inputA) && _.isString(operator) && _.isString(result)) {
		const file = new File(`./files/${id}.json`)
		file.save(JSON.stringify({
			id,
			inputA,
			inputB,
			operator,
			result
		}), (data) => {
			if(data) res.status(200).json({ data: true }); else res.status(500).json({ data: false })
		})
	}else{
		res.status(422).json({ data: false, msg: 'Invalid arguments' })
	}
})
router.post('/load', (req, res) => {
	const { id } = req.body
	if (_.isString(id)) {
		const file = new File(`./files/${id}.json`)
		file.load((data) => {
			if(data) res.status(200).json({ data }); else res.status(200).json({ data: false })
		})
	}else{
		res.status(422).json({ data: false, msg: 'Invalid arguments' })
	}
})

app.use(cors())
app.use(bodyParser.json())
app.use('/', router)

export default app