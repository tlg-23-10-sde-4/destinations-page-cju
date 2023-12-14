// when form is submitted grab user's input and log it
user_input_form.addEventListener("submit", (e) => {
    // e is the event object
    // that object holds more information about the event that we are handling
    e.preventDefault();

    const PLACEHOLDER_PHOTO_URL = "./genericVacation.jpeg"

    const destinationName = destination_name.value;
    const locationName = location_name.value;
    //this 
    // const photoURL = photo_url.value ==="" ? : photo_url.value;
    // or this 
    const photoURL = photo_url.value || PLACEHOLDER_PHOTO_URL;
    const descr = description.value;

    // pass an object and destructure the
    const card = createCard(destinationName, locationName, photoURL, descr);
    cards_container.appendChild(card);
})

function createCard({dName, lName, imgUrl, desc}) {
    /*
    <div class="card" style="width: 18rem;">
        <img src="..." class="card-img-top" alt="...">
         <div class="card-body">
            <h5 class="card-title">destination</h5>
            <p class="card-text">location</p>
            <p class="card-text">description</p>
        <button class="btn btn-info">edit</button>
        <button class="btn btn-danger">Delete</button>
        </div>
    </div>
    */
    const card = document.createElement("div")
    card.classList.add("card");
    card.setAttribute("style", "width:18rem;")

    card.innerHTML = `<div class="card" style="width: 18rem;">
    <img src="${photoURL}" class="card-img-top" alt="${destinationName} at ${locationName}">
     <div class="card-body">
        <h5 class="card-title">${destinationName}</h5>
        <p class="card-text">${locationName}</p>\
        ${descr && `<p class="card-text">${descr}</p>`}
        
        <button class="btn btn-info">Edit</button>
        <button class="btn btn-danger">Delete</button>
        </div>
    </div>`;

    return card;
}