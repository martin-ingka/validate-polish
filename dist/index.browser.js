var validatePolish=function(){"use strict";var r={checksum:function(r,t){for(var e=r.length-1,n=0,i=0;i<e;i++){n+=parseInt(r[i],10)*t[i]}return(n%11!=10?n%11:0)===parseInt(r.slice(-1),10)},pesel:function(r){if(!/^[0-9]{11}$/.test(r))return!1;var t=[1,3,7,9],e=(""+r).split("").map((function(r){return parseInt(r,10)})),n=e.splice(-1)[0],i=e.reduce((function(r,e,n){return r+e*t[n%4]}))%10;return 10-(0===i?10:i)===n},nip:function(r){if("string"!=typeof r)return!1;var t=r.replace(/-/g,"");if(!1===/^[0-9]{10}$/.test(t))return!1;var e=(""+t).split(""),n=(6*parseInt(e[0],10)+5*parseInt(e[1],10)+7*parseInt(e[2],10)+2*parseInt(e[3],10)+3*parseInt(e[4],10)+4*parseInt(e[5],10)+5*parseInt(e[6],10)+6*parseInt(e[7],10)+7*parseInt(e[8],10))%11;return parseInt(e[9],10)===n},regon:function(t){if(!1===/^[0-9]{9,14}$/.test(t))return!1;var e=[8,9,2,3,4,5,6,7];if(9===t.length)return r.checksum(t,e);return r.checksum(t.slice(0,9),e)&&r.checksum(t,[2,4,8,5,0,9,7,3,6,1,2,4,8])},identityCard:function(r){if(!r||9!==r.length)return!1;for(var t=r.toUpperCase(),e=["0","1","2","3","4","5","6","7","8","9","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"],n=function(r){for(var t=0,n=e.length;t<n;t++)if(r===e[t])return t;return-1},i=0;i<3;i++)if(n(t[i])<10)return!1;for(i=3;i<9;i++)if(n(t[i])<0||n(t[i])>9)return!1;var u=7*n(t[0])+3*n(t[1])+1*n(t[2])+7*n(t[4])+3*n(t[5])+1*n(t[6])+7*n(t[7])+3*n(t[8]);return(u%=10)===n(t[3])},identityCardWithSeparator:function(r){return!(!r||10!==r.length)&&((" "===r[3]||"-"===r[3])&&this.identityCard(r.replace(/[\s-]/g,"")))}};return r}();
