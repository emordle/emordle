(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-38dffeba"],{"959e":function(n,t,e){"use strict";e("de11")},de11:function(n,t,e){},f264:function(n,t,e){"use strict";e.r(t);var o=e("7a23"),a=Object(o["h"])("canvas",{id:"wave-canvas",width:"800",height:"520"},null,-1);function i(n,t){return Object(o["q"])(),Object(o["d"])("div",null,[a])}var r=e("d4ec"),c=e("bee2"),u=e("262e"),s=e("2caf"),f=e("ce1f"),l=e("5698"),h=(e("99af"),e("4160"),e("d81d"),e("13d5"),e("d3b7"),e("cfc3"),e("84c3"),e("9a8c"),e("a975"),e("735e"),e("c1ac"),e("d139"),e("3a7b"),e("d5d6"),e("82f8"),e("e91f"),e("60bd"),e("5f96"),e("3280"),e("3fcc"),e("ca91"),e("25a1"),e("cd26"),e("3c5d"),e("2954"),e("649e"),e("219c"),e("170b"),e("b39a"),e("72f7"),e("159b"),e("3835")),v=e("b85c"),d=e("ade3"),b=e("a788"),p=e("5664"),y=e.n(p),g=e("ede8"),m="https://cdnjs.cloudflare.com/ajax/libs/ink/3.1.10/fonts/Roboto/roboto-regular-webfont.ttf",x=null,E=80;function T(n,t){var e=n.x-t.x,o=n.y-t.y;return Math.sqrt(e*e+o*o)}function O(n,t,e){return{x:(1-e)*n.x+e*t.x,y:(1-e)*n.y+e*t.y}}function w(n,t){return n.x*t.y-n.y*t.x}var A,R,_=10,j=3,F=1e-6,k=function(){function n(){Object(r["a"])(this,n),Object(d["a"])(this,"points",[]),Object(d["a"])(this,"children",[]),Object(d["a"])(this,"area",0)}return Object(c["a"])(n,[{key:"moveTo",value:function(n){this.points.push(n)}},{key:"lineTo",value:function(n){this.points.push(n)}},{key:"close",value:function(){var n=this,t=this.points[this.points.length-1];this.points.forEach((function(e){n.area+=.5*w(t,e),t=e}))}},{key:"conicTo",value:function(n,t){for(var e=this.points[this.points.length-1],o=T(e,t)+T(t,n),a=Math.max(2,Math.min(_,o/j)),i=1;i<=a;++i){var r=i/a;this.points.push(O(O(e,t,r),O(t,n,r),r))}}},{key:"cubicTo",value:function(n,t,e){for(var o=this.points[this.points.length-1],a=T(o,t)+T(t,e)+T(e,n),i=Math.max(2,Math.min(_,a/j)),r=1;r<=i;++r){var c=r/i,u=O(O(o,t,c),O(t,e,c),c),s=O(O(t,e,c),O(e,n,c),c);this.points.push(O(u,s,c))}}},{key:"inside",value:function(n){var t=0,e=this.points[this.points.length-1];return this.points.forEach((function(o){var a=e.y<o.y?e:o,i=e.y<o.y?o:e;a.y<n.y+F&&i.y>n.y+F&&(i.x-a.x)*(n.y-a.y)>(n.x-a.x)*(i.y-a.y)&&(t+=1),e=o})),t%2!==0}}]),n}();function C(n){A.uniform1f(x,n/E),A.drawElements(A.TRIANGLES,R.length,A.UNSIGNED_SHORT,0),requestAnimationFrame(C)}var S=function(n){for(var t=[],e=0;e<n.length;++e){for(var o=null,a=e-1;a>=0;--a)if(n[a].inside(n[e].points[0])&&n[e].area*n[a].area<0){o=n[a];break}o?o.children.push(n[e]):t.push(n[e])}return t},B=function(n){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,e=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0,o=arguments.length>3&&void 0!==arguments[3]?arguments[3]:12,a=arguments.length>4&&void 0!==arguments[4]?arguments[4]:"Hello World",i=n.getPath(a,t,e,o),r=[];return i.commands.forEach((function(n){var t=n.type,e=n.x,o=n.y,a=n.x1,i=n.y1,c=n.x2,u=n.y2;switch(t){case"M":r.push(new k),r[r.length-1].moveTo({x:e,y:o});break;case"L":r[r.length-1].moveTo({x:e,y:o});break;case"C":r[r.length-1].cubicTo({x:e,y:o},{x:a,y:i},{x:c,y:u});break;case"Q":r[r.length-1].conicTo({x:e,y:o},{x:a,y:i});break;case"Z":r[r.length-1].close();break}})),r.sort((function(n,t){return Math.abs(t.area)-Math.abs(n.area)})),r},M=function(n,t){var e=t.reduce((function(n,t){return n+t.points.length}),0),o=new Float32Array(2*e),a=0;R=[];var i=function n(t){var e=[],i=[];t.points.forEach((function(n){var t=n.x,o=n.y;return e.push(t,o)})),t.children.forEach((function(t){t.children.forEach(n),i.push(e.length/2),t.points.forEach((function(n){var t=n.x,o=n.y;return e.push(t,o)}))})),o.set(e,2*a),y()(e,i).forEach((function(n){return R.push(n+a)})),a+=e.length/2};return n.forEach(i),console.log(o),[o,R]},N=function(n){var t,e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,o=document.getElementById("wave-canvas"),a=(o.width,o.height,[]),i=Object(v["a"])(e);try{for(i.s();!(t=i.n()).done;){var r=t.value,c=B(n,r.x-r.width/2,r.y,r.size,r.text);a=a.concat(c)}}catch(b){i.e(b)}finally{i.f()}var u=S(a),s=M(u,a),f=Object(h["a"])(s,2),l=f[0],d=f[1];D(l,d)},D=function(n,t){var e=document.getElementById("wave-canvas");A=e.getContext("webgl");var o=e.width,a=e.height;A.viewport(0,0,o,a);var i=Object(g["b"])(A,A.VERTEX_SHADER,"\n        precision mediump float;\n        uniform vec2 uScale;\n        uniform vec2 uOffset;\n        uniform float uTime;\n        attribute vec2 position;\n        varying vec4 fragColor;\n        void main() {\n        vec2 pos = position;\n        pos.y += pow(sin( (pos.x) / 250.+ uTime *4.),2.) * 20.;\n        pos.x += sin( pos.x/ 100. + uTime *1.) * 5.;\n        gl_Position = vec4(pos * uScale + uOffset, 0.0, 1.0);\n        fragColor = vec4(sin(uTime*.5)*.5+.5, cos(uTime*.2)*.5+.5, 0., 1. );//+ 2.*sin(uTime));\n        }"),r=Object(g["b"])(A,A.FRAGMENT_SHADER,"precision mediump float;\n        uniform vec4 uColor;\n        uniform vec2 u_resolution;\n        varying vec4 fragColor;\n        void main() {\n        //gl_FragColor = uColor;\n        // vec2 st = gl_FragCoord.xy / u_resolution;\n        gl_FragColor = fragColor;\n        }"),c=Object(g["a"])(A,i,r);A.bindAttribLocation(c,0,"position");var u=["uScale","uOffset","uColor","uTime","u_resolution","fragColor"].map((function(n){return A.getUniformLocation(c,n)})),s=Object(h["a"])(u,6),f=s[0],l=s[1],v=s[2],d=s[3],b=s[4],p=s[5];x=d,A.useProgram(c),A.uniform1f(d,0),A.uniform2fv(f,[2/o,-2/a]),A.uniform2fv(l,[0,0]),A.uniform4fv(v,[0,0,0,1]),A.uniform4fv(p,[0,0,0,1]),A.uniform2f(b,A.canvas.width,A.canvas.height),A.clearColor(1,1,1,1),A.clear(A.COLOR_BUFFER_BIT);var y=A.createBuffer();A.bindBuffer(A.ARRAY_BUFFER,y),A.bufferData(A.ARRAY_BUFFER,n,A.STATIC_DRAW);var m=A.createBuffer(),E=new Uint16Array(t);A.bindBuffer(A.ELEMENT_ARRAY_BUFFER,m),A.bufferData(A.ELEMENT_ARRAY_BUFFER,E,A.STATIC_DRAW),A.enableVertexAttribArray(0),A.vertexAttribPointer(0,2,A.FLOAT,!0,8,0),A.drawElements(A.TRIANGLES,t.length,A.UNSIGNED_SHORT,0),A.flush(),console.log("Finish"),C(Date.now())},I=function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:m;b["a"].load(t,(function(e,o){e?(console.log(t),alert("Font could not be loaded: "+e)):N(o,n)}))},L=function(n){Object(u["a"])(e,n);var t=Object(s["a"])(e);function e(){return Object(r["a"])(this,e),t.apply(this,arguments)}return Object(c["a"])(e,[{key:"mounted",value:function(){l["b"]("./dataset/layout/layout_creep.json").then((function(n){I(n,"./font/NotoSans.ttf")}))}}]),e}(f["b"]);e("959e");L.render=i;t["default"]=L}}]);
//# sourceMappingURL=chunk-38dffeba.e24d9306.js.map