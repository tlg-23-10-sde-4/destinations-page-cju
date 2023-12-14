

// when form is submitted grab user's input and log it
user_input_form.addEventListener("submit", (e) => {
    // e is the event object
    // that object holds more information about the event that we are handling
    e.preventDefault();
    let PLACEHOLDER_PHOTO_URL = "./genericVacation.jpeg";

    const destinationName = destination_name.value;
    const locationName = location_name.value;

    // const photoURL = photo_url.value === photo_url.value ? : "./genericVacation.jpeg" ;
    // or this 
    const photoURL = (photo_url.value || PLACEHOLDER_PHOTO_URL);

    const descr = description.value;

    // pass an object and destructure the
    const card = createCard({destinationName, locationName, photoURL, descr});
    cards_container.appendChild(card);
})

// when edit or delete buttons are clicked, handle them with delegations
cards_container.addEventListener("click", (e) => {
    const clickedElement = e.target

    if (clickedElement.getAttribute("btn_type") === "delete") {
        if (confirm("Are you sure you want to delete this destination?")) {
            clickedElement.parentElement.parentElement.remove();
        }
    }
    if (clickedElement.getAttribute("btn_type") === "edit") {
        handleEdit(clickedElement)
    }
})

function createCard({destinationName, locationName, photoURL, descr}) {
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
        
        <button type="button" btn_type="edit" class="btn btn-info">Edit</button>
        <button type="button" btn_type="delete" class="btn btn-danger">Delete</button>
        </div>
    </div>`;

    return card;
}

function handleEdit(editBtn) {
    const cardBody = editBtn.parentElement;
    const oldDest = cardBody.children[0].textContent;
    const oldLoc = cardBody.children[1].textContent;
    const oldPhotoURL = cardBody.previousSiblingElement.getAttribute("src");

    const oldDesc = cardBody.children[2].tagName === "P" ? cardBody.children[2].textContent : "";

    const newDestName = prompt("What's the name of the new destination?", oldDest)
    const newLoc = prompt("Where is the new destination?", oldLoc)
    const newPhotoURL = prompt("Please enter the URL of a photo", oldPhotoURL)
    const newDesc = prompt("Why do you want to visit this destination?", oldDesc)

    if (newDestName && newDestName !== oldDest) {
        cardBody.children[0].textContent = newDestName;
    }
}