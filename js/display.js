function displayMom() {  
  var mom = []
  var myForm = document.getElementById("mom");
  var checks = myForm.getElementsByTagName("INPUT");
  for (var i = 0; i < checks.length; i++) {
            if (checks[i].checked) {
                mom.push(checks[i].value);
            }
        }
  var separated = mom.join(' • ')
  document.getElementById("momResults").innerHTML = separated;
}

function displayFreq() {  
  var freq = []
  var myForm = document.getElementById("freq");
  var checks = myForm.getElementsByTagName("INPUT");
  for (var i = 0; i < checks.length; i++) {
            if (checks[i].checked) {
                freq.push(checks[i].value);
            }
        }
  var separated = freq.join(' • ')
  document.getElementById("freqResults").innerHTML = separated;
}

function displayDur() {  
  var dur = []
  var myForm = document.getElementById("dur");
  var checks = myForm.getElementsByTagName("INPUT");
  for (var i = 0; i < checks.length; i++) {
            if (checks[i].checked) {
                dur.push(checks[i].value);
            }
        }
  var separated = dur.join(' • ')
  document.getElementById("durResults").innerHTML = separated;
}

function displayCon() {  
  var con = []
  var myForm = document.getElementById("con");
  var checks = myForm.getElementsByTagName("INPUT");
  for (var i = 0; i < checks.length; i++) {
            if (checks[i].checked) {
                con.push(checks[i].value);
            }
        }
  var separated = con.join(' • ')
  document.getElementById("conResults").innerHTML = separated;
}

function displayPed() {  
  var ped = []
  var myForm = document.getElementById("ped");
  var checks = myForm.getElementsByTagName("INPUT");
  for (var i = 0; i < checks.length; i++) {
            if (checks[i].checked) {
                ped.push(checks[i].value);
            }
        }
  var separated = ped.join(' • ')
  document.getElementById("pedResults").innerHTML = separated;
}

function displayTech() {  
  var tech = []
  var myForm = document.getElementById("tech");
  var checks = myForm.getElementsByTagName("INPUT");
  for (var i = 0; i < checks.length; i++) {
            if (checks[i].checked) {
                tech.push(checks[i].value);
            }
        }
  var separated = tech.join(' • ')
  document.getElementById("techResults").innerHTML = separated;
}

function displayFac() {  
  var fac = []
  var myForm = document.getElementById("fac");
  var checks = myForm.getElementsByTagName("INPUT");
  for (var i = 0; i < checks.length; i++) {
            if (checks[i].checked) {
                fac.push(checks[i].value);
            }
        }
  var separated = fac.join(' • ')
  document.getElementById("facResults").innerHTML = separated;
}

function displayLoc() {  
  var loc = []
  var myForm = document.getElementById("loc");
  var checks = myForm.getElementsByTagName("INPUT");
  for (var i = 0; i < checks.length; i++) {
            if (checks[i].checked) {
                loc.push(checks[i].value);
            }
        }
  var separated = loc.join(' • ')
  document.getElementById("locResults").innerHTML = separated;
}

function displayMed() {  
  var med = []
  var myForm = document.getElementById("med");
  var checks = myForm.getElementsByTagName("INPUT");
  for (var i = 0; i < checks.length; i++) {
            if (checks[i].checked) {
                med.push(checks[i].value);
            }
        }
  var separated = med.join(' • ')
  document.getElementById("medResults").innerHTML = separated;
}

function displayEvi() {  
  var evi = []
  var myForm = document.getElementById("evi");
  var checks = myForm.getElementsByTagName("INPUT");
  for (var i = 0; i < checks.length; i++) {
            if (checks[i].checked) {
                evi.push(checks[i].value);
            }
        }
  var separated = evi.join(' • ')
  document.getElementById("eviResults").innerHTML = separated;
}

function displayPro() {  
  var pro = []
  var myForm = document.getElementById("pro");
  var checks = myForm.getElementsByTagName("INPUT");
  for (var i = 0; i < checks.length; i++) {
            if (checks[i].checked) {
                pro.push(checks[i].value);
            }
        }
  var separated = pro.join(' • ')
  document.getElementById("proResults").innerHTML = separated;
}

function displayAcc() {  
  var acc = []
  var myForm = document.getElementById("acc");
  var checks = myForm.getElementsByTagName("INPUT");
  for (var i = 0; i < checks.length; i++) {
            if (checks[i].checked) {
                acc.push(checks[i].value);
            }
        }
  var separated = acc.join(' • ')
  document.getElementById("accResults").innerHTML = separated;
}

function displayOut() {  
  var out = []
  var myForm = document.getElementById("out");
  var checks = myForm.getElementsByTagName("INPUT");
  for (var i = 0; i < checks.length; i++) {
            if (checks[i].checked) {
                out.push(checks[i].value);
            }
        }
  var separated = out.join(' • ')
  document.getElementById("outResults").innerHTML = separated;
}

function displaySus() {  
  var sus = []
  var myForm = document.getElementById("sus");
  var checks = myForm.getElementsByTagName("INPUT");
  for (var i = 0; i < checks.length; i++) {
            if (checks[i].checked) {
                sus .push(checks[i].value);
            }
        }
  var separated = sus.join(' • ')
  document.getElementById("susResults").innerHTML = separated;
}
