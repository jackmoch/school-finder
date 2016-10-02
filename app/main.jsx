'use strict';

const React = require('react')
const ReactDOM = require('react-dom')
const SchoolList = require('./components/SchoolList.jsx')

const _schools = [
	{
		name: 'Lovedale',
		tagline: 'This is a wonderful school'
	},
	{
		name: 'Bishop',
		tagline: 'Another great school'
	},
	{
		name: 'Notre Dame',
		tagline: 'This was my school'
	}
]

function render() {
	ReactDOM.render(
		<SchoolList schools={_schools} />, document.getElementById('container')
	)
}
render()