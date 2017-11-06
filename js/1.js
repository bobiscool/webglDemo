main();

// 顶点着色器
var V_SHADER = 'void main() {\n'+
' gl_Position = vec4(0.0,0.0,0.0,1.0);\n'+//设置坐标
' gl_PointSize = 10.0;\n'+//设置尺寸
'}\n';

//片元着色器
var FSHADER_SOURCE = 'void main{\n'+
      ' gl_FragColor = vec4(1.0,0.0,0.0,1.0);\n'+//设置颜色
      '}\n';

function main(){
    const canvas = document.querySelector('#canvas');
    const gl = canvas.getContext('webgl');

    // console.log(gl);
    // 将webgl修改颜色
    
    gl.clearColor(1.0,1.0,0.5,1.0);
   // 然后将 canvas颜色也修改 进一步验证 webgl是计算工具 计算点位然后给canvas渲染
   gl.clear(gl.COLOR_BUFFER_BIT);

   gl.drawColor(1.0,0.0,0.0,1.0);
   gl.drawPoint(0,0,0,10);//点的位置和大小


}