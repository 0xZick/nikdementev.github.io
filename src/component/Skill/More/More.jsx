import React, { Component } from 'react';
import styles from './More.css'

class More extends Component {

	focus() {
		const ctx = this.canvas.getContext('2d')

		this.canvas.width = '850'
		this.canvas.height = '500'

		const width = this.canvas.width
		const height = this.canvas.height

		var babel = new Image();
		babel.src = 'https://i.imgur.com/7kdEqhh.png';
		var gulp = new Image();
		gulp.src = 'https://i.imgur.com/dPUOBcT.png';
		var npm = new Image();
		npm.src = 'https://i.imgur.com/s1rwQN5.png';
		var sass = new Image();
		sass.src = 'https://i.imgur.com/ZXyU2wO.png';
		var webpack = new Image();
		webpack.src = 'https://i.imgur.com/uC78s1U.png';
		var react = new Image();
		react.src = 'https://i.imgur.com/tlqvThh.png';

		
		var xb = 0, yb = 0, dxb = 3,dyb = 4;
		var xg = 0, yg = 0, dxg = 4,dyg = 4;
		var xn = 0, yn = 0, dxn = 6,dyn = 4;
		var xs = 0, ys = 0, dxs = 5,dys = 5;
		var xw = 0, yw = 0, dxw = 4,dyw = 6;
		var xr = 0, yr = 0, dxr = 5,dyr = 3;

		function animate(){
			requestAnimationFrame(animate);
			ctx.clearRect(0,0, width, height);

			ctx.drawImage(sass, 0 + xs ,0 + ys);
			if( xs + sass.width > width || xs < 0) { dxs = -dxs; }
			if( ys + sass.height > height || ys < 0) { dys = -dys; }
			xs += dxs;
			ys += dys;

			ctx.drawImage(webpack, 0 + xw ,0 + yw);
			if( xw + webpack.width > width || xw < 0) { dxw = -dxw; }
			if( yw + webpack.height > height || yw < 0) { dyw = -dyw; }
			xw += dxw;
			yw += dyw;

			ctx.drawImage(react, 0 + xr ,0 + yr);
			if( xr + react.width > width || xr < 0) { dxr = -dxr; }
			if( yr + react.height > height || yr < 0) { dyr = -dyr; }
			xr += dxr;
			yr += dyr;

			ctx.drawImage(gulp, 0 + xg ,0 + yg);
			if( xg + gulp.width > width || xg < 0) { dxg = -dxg; }
			if( yg + gulp.height > height || yg < 0) { dyg = -dyg; }
			xg += dxg;
			yg += dyg;

			ctx.drawImage(babel, 0 + xb ,0 + yb);
			if( xb + babel.width > width || xb < 0) { dxb = -dxb; }
			if( yb + babel.height > height || yb < 0) { dyb = -dyb; }
			xb += dxb;
			yb += dyb;

			ctx.drawImage(npm, 0 + xn ,0 + yn);
			if( xn + npm.width > width || xn < 0) { dxn = -dxn; }
			if( yn + npm.height > height || yn < 0) { dyn = -dyn; }
			xn += dxn;
			yn += dyn;
		}
		animate();
	}

	componentDidMount() {
		this.focus();
	}

	render(){
		return (
			<div className={ styles.more }>
				<canvas className={ styles.skill }
					ref={ (canvas) => this.canvas = canvas }>
				</canvas>
			</div>
		);
	}

}
export default More;

// componentDidMount() {
// 	const ctx = this.canvas.getContext('2d')

// 	this.canvas.width = '850'
// 	this.canvas.height = '500'

// 	const width = this.canvas.width
// 	const height = this.canvas.height
	
// 	var babel = new Image();
// 	babel.src = this.props.url

// 	var x = this.props.x,
// 		y = this.props.y,
// 		dx = this.props.dx,
// 		dy = this.props.dy;

// 	function animate(){
// 		requestAnimationFrame(animate);
// 		ctx.clearRect(0,0, width, height);

// 		ctx.drawImage(babel, 0 + x ,0 + y);
// 		if( x + babel.width > width || x < 0) { dx = -dx; }
// 		if( y + babel.height > height || y < 0) { dy = -dy; }
// 		x += dx;
// 		y += dy;

// 	}
// 	animate();
// }