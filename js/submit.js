function SubForm (){
  $.ajax({
    url:"https://api.apispreadsheets.com/data/LkpndvaVTXzmDGdY/",
    type:"post",
    data:$("#myForm").serializeArray(),
    success: function(){
      alert("Answers submitted. Thanks for participating!")
    },
    error: function(){
      alert("There was an error submitting your answers. Please try again.")
    }
  });
}
