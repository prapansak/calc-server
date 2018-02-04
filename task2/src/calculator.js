import BigNumber from 'bignumber.js'
import _ from 'lodash'

export default class Calculator {
	plus(a, b) {
		const x = new BigNumber(_.toString(a))
		const y = new BigNumber(_.toString(b))
		return x.plus(y)
	}

	minus(a, b) {
		const x = new BigNumber(_.toString(a))
		const y = new BigNumber(_.toString(b))
		return x.minus(y)
	}

	multiply(a, b) {
		const x = new BigNumber(_.toString(a))
		const y = new BigNumber(_.toString(b))
		return x.multipliedBy(y)
	}

	divide(a, b) {
		const x = new BigNumber(_.toString(a))
		const y = new BigNumber(_.toString(b))
		return x.dividedBy(y)
	}

	pow(a, b) {
		return new BigNumber(parseFloat(a)).pow(parseFloat(b))
	}
}
