(function() {
  var theImages = document.querySelectorAll('.image-holder'),
      theHeading = document.querySelector('.heading'),
      theSubHead = document.querySelector('.main-copy h2'),
      theSeasonText = document.querySelector('.main-copy p'),
      appliedClass;

      // i want to change all the content on the page
      function changeElements() {
        debugger; // this is a special term that stops code execution
      }

      theImages.forEach(function(image, index){
        //add an event handler to each image
        image.addEventListener('click', changeElements, false);
      });

})();
