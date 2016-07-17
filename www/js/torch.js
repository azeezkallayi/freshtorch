function init() {
    // the next line makes it impossible to see Contacts on the HTC Evo since it
    // doesn't have a scroll button
    // document.addEventListener("touchmove", preventBehavior, false);
    document.addEventListener("deviceready", deviceInfo, true);
}

function capturePhoto() {
      // Take picture using device camera and retrieve image as base64-encoded string
      navigator.camera.getPicture(onPhotoDataSuccess, onFail, { quality: 50,
      destinationType: destinationType.DATA_URL });
}
 function onPhotoDataSuccess(imageData) {
      // Uncomment to view the base64 encoded image data
      // console.log(imageData);

      // Get image handle
      var smallImage = document.getElementById('smallImage');
      // Unhide image elements
      smallImage.style.display = 'block';
      // Show the captured photo
      // The inline CSS rules are used to resize the image
     smallImage.src = "data:image/jpeg;base64," + imageData;
}
