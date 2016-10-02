'use strict';

const React = require('react')
const SchoolInfo = require('./SchoolInfo.jsx')

module.exports = React.createClass({
	render: function() {
		return(
			<div className="row">
				<div className="col-md-6">
					//addSchool functionality will go here
				</div>
				<div className="col-md-6">
					{this.props.schools
						.map(function(school, index) {
							return(
								<SchoolInfo info={school} key={"school" + index} />
							)
						})
					}
				</div>
			</div>
		)
	}
})