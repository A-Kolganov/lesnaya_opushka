function scrollToResolver() {
      var selectedPosX = 0;
  
    var selectedPosY = 0;
    var theElement = document.querySelector('#uploadContent')
            
  
    while (theElement != null) {
    
    selectedPosX += theElement.offsetLeft;
    selectedPosY += theElement.offsetTop;
    theElement = theElement.offsetParent;
    }                                 
    window.scrollTo(selectedPosX,selectedPosY);
    }
    

  export  {scrollToResolver};