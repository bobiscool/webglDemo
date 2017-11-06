
function initShaders(gl,vshader,fshader){
    var program = createProgram(gl,vshader,fshader);
    if(!program){
        console.log('Failed to create program');
        return false;
    }

    gl.useProgram(program);
    gl.proglam = program; // 说实话 我一直对这里面 不太好评 这里面 啥都不不说明

    return true;
}