import React, {Component} from 'react';
import Plx from 'react-plx';

// An array of parallax effects to be applied - see below for detail
const parallaxData = [
	{
		start: 0,
		end: 500,
		properties: [
			{
				startValue: 1,
				endValue: .2,
				property: 'scale',
			},
		],
	},
];

class Display extends Component {
	render() {
		return (
			<Plx
				className='MyAwesomeParallax'
				parallaxData={ parallaxData }
			>
				<div className="compare-display-image">
					<img src="lib/images/super_retina_large.jpg" alt="" className="img-responsive center-block"/>
				</div>
			</Plx>
		);
	}
}

export default Display;