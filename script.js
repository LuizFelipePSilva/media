document.getElementById("mediaForm").addEventListener("submit",function(a){function b(a){return isNaN(a)?0:a}a.preventDefault();const c=b(parseFloat(document.getElementById("txt1").value)),d=b(parseFloat(document.getElementById("peso1").value)),e=b(parseFloat(document.getElementById("txt2").value)),f=b(parseFloat(document.getElementById("peso2").value)),g=b(parseFloat(document.getElementById("txt3").value)),h=b(parseFloat(document.getElementById("peso3").value)),i=b(parseFloat(document.getElementById("txt4").value)),j=b(parseFloat(document.getElementById("peso4").value));let k=0,l=0;0<d&&(k+=d,l+=c*d),0<f&&(k+=f,l+=e*f),0<h&&(k+=h,l+=g*h),0<j&&(k+=j,l+=i*j);const m=0<k?l/k:alert("N\xE3o \xE9 possivel calcular sem parametros");document.getElementById("mediaResult").textContent=m.toFixed(1)}),document.getElementById("clearForm").addEventListener("click",function(){document.getElementById("mediaForm").reset(),document.getElementById("mediaResult").textContent=""});