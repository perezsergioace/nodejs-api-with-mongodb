const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
	return res.status(200).json({ sucess: 'true', msg: 'show all bootcamps' })
})

router.get('/:id', (req, res) => {
	return res.status(200).json({ sucess: 'true', msg: `show bootcamp ${req.params.id}` })
})

router.post('/', (req, res) => {
	return res.status(200).json({ sucess: 'true', msg: 'create new bootcamp' })
})

router.put('/:id', (req, res) => {
	return res.status(200).json({ sucess: 'true', msg: `update bootcamp ${req.params.id}` })
})

router.delete('/:id', (req, res) => {
	return res.status(200).json({ sucess: 'true', msg: `delete bootcamp ${req.params.id}` })
})

module.exports = router
