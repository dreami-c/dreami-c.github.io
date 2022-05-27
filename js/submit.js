function SubForm (){
  $.ajax({
    url:"https://api.apispreadsheets.com/data/LkpndvaVTXzmDGdY/",
    type:"post",
    data:$("#myForm").serializeArray(),
    success: function(){
      alert("Form Data Submitted :)")
    },
    error: function(){
      alert("There was an error :(")
    }
  });
}

var currentTab = 0;
showTab(currentTab);

function showTab(n) {
  var x = document.getElementsByClassName("tab");
  x[n].style.display = "block";
  if (n == 0) {
    document.getElementById("prevBtn").style.display = "none";
  } else {
    document.getElementById("prevBtn").style.display = "inline";
  }
  if (n == (x.length - 1)) {
    document.getElementById("nextBtn").innerHTML = "Submit";
    document.getElementById("nextBtn").setAttribute("onClick", "SubForm()")
  } else {
    document.getElementById("nextBtn").innerHTML = "Next";
    document.getElementById("nextBtn").setAttribute("onClick", "nextPrev(1)")
  }
}

function nextPrev(n) {
  var x = document.getElementsByClassName("tab");
  x[currentTab].style.display = "none";
  currentTab = currentTab + n;
  if (currentTab >= x.length) {
    document.getElementById("myForm").submit();
    return false;
  }
  showTab(currentTab);
}