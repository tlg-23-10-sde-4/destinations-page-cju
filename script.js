// when form is submitted grab user's input and log it
user_input_form.addEventListener("submit", (e) => {
    // e is the event object
    // that object holds more information about the event that we are handling
    e.preventDefault();

    const PLACEHOLDER_PHOTO_URL = "genericVacation.jpeg"

    const destinationName = destination_name.value;
    const locationName = location_name.value;
    //this 
    // const photoURL = photo_url.value ==="" ? : photo_url.value;
    // or this 
    const photoURL = photo_url.value || PLACEHOLDER_PHOTO_URL;
    const descr = description.value;

    console.log(destinationName, locationName, photoURL, descr);
    
})