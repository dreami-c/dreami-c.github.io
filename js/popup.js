window.addEventListener('beforeunload', (event) =>{
  event.returnValue = "Changes may not be saved. Are you sure you want to leave?"
})