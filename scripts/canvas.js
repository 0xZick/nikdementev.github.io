var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');

canvas.width = '850';
canvas.height = '500';

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
  ctx.clearRect(0,0, canvas.width, canvas.height);

  ctx.drawImage(sass, 0 + xs ,0 + ys);
  if( xs + sass.width > canvas.width || xs < 0) { dxs = -dxs; }
  if( ys + sass.height > canvas.height || ys < 0) { dys = -dys; }
  xs += dxs;
  ys += dys;

  ctx.drawImage(webpack, 0 + xw ,0 + yw);
  if( xw + webpack.width > canvas.width || xw < 0) { dxw = -dxw; }
  if( yw + webpack.height > canvas.height || yw < 0) { dyw = -dyw; }
  xw += dxw;
  yw += dyw;

  ctx.drawImage(react, 0 + xr ,0 + yr);
  if( xr + react.width > canvas.width || xr < 0) { dxr = -dxr; }
  if( yr + react.height > canvas.height || yr < 0) { dyr = -dyr; }
  xr += dxr;
  yr += dyr;

  ctx.drawImage(gulp, 0 + xg ,0 + yg);
  if( xg + gulp.width > canvas.width || xg < 0) { dxg = -dxg; }
  if( yg + gulp.height > canvas.height || yg < 0) { dyg = -dyg; }
  xg += dxg;
  yg += dyg;

  ctx.drawImage(babel, 0 + xb ,0 + yb);
  if( xb + babel.width > canvas.width || xb < 0) { dxb = -dxb; }
  if( yb + babel.height > canvas.height || yb < 0) { dyb = -dyb; }
  xb += dxb;
  yb += dyb;

  ctx.drawImage(npm, 0 + xn ,0 + yn);
  if( xn + npm.width > canvas.width || xn < 0) { dxn = -dxn; }
  if( yn + npm.height > canvas.height || yn < 0) { dyn = -dyn; }
  xn += dxn;
  yn += dyn;


}
animate();
