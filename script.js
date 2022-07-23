"use strict";
// Project #2 we're gonna build our first UI component. And that is this modal window

const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const btnCloseModal = document.querySelector(".close-modal");

const btnsOpenModal2 = document.querySelectorAll(".show-modal");

const openModal = function () {
  console.log("button clicked");

  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
};

//Event handler for class show-modal
for (let i = 0; i < btnsOpenModal2.length; i++) {
  btnsOpenModal2[i].addEventListener("click", openModal);
}

// this keep the code dry
const closeModal = function () {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
};

btnCloseModal.addEventListener("click", closeModal);

overlay.addEventListener("click", closeModal);

// the Key Press events.
//    (.) key press event is simply just another type of event.
//    (.)Now, keyboard events are so-called global events because they do not happen on one specific element. And for global events like keyboard events we usually list and on the whole document.
//    (.)document that we use for query selector. And so basically it's a big object which contains a bunch of methods for all kinds of stuff.
//    (.) So by using add a Event listener here on the document we are basically listening for events everywhere. So no matter where they happen on the page, they will always trigger the event handler
//          (.) there are actually 3 type of event for keyboard
//              (1)Key Down -> and key down is fired as soon as we just press down the key. this event will happen as soon as we hit any key on the keyboard.
//              (2)Key press -> Key press is fired continuously as we keep our finger on a certain key
//              (3)Key up -> this one only happens when we lift or finger off the keyboard basically Or off the key.

// escape key functionality
document.addEventListener("keydown", function (e) {
  // if we don't give the parameter in function than So this function here will actually be executed for any key press that happens.
  // console.log("cliked")

  // (Q) If this event here happens for all the keys than how will we know which key was actually pressed?
  // (Ans)the information about which key was pressed will be stored in the event that is going to occur as soon as any key is pressed. So our handler function is waiting for that event to happen. And anytime that an event like this occurs JavaScript does in fact generate an object. And that object contains all the information about the event itself, and we can then actually access that object indie event handler function. up until this point, we have never looked at that event. We only just listened for it and then reacted to it. But this time we actually need to look at the event object in order to figure out  which key was pressed.
  // so ,  we need to do is to give this function here a parameter. and let's call it E which stands for event. So then as the event occurs JavaScript, we'll call this function with the event object as an argument. And once more, this works because we do not call this function here or selves. "Hey, JavaScript call function when a key down event happens. And when you do so please pass in the event object as an argument"
  console.log(e); // it will show the object which carry which key was pressed

  // if (e.key === "Escape" && !modal.classList.contains("hidden")) {
    // or 
  if (e.key === "Escape" ) {
    console.log(e.key);
    // i want to close the modal if the modal is visible so will use "contain" property
// (Q) how do we know if the model is currently invisible?
// (Ans) Well, if the model contains the class hidden it means that it's not visible. And so basically when it does not contain the class hidden it means that it's visible
    if (!modal.classList.contains("hidden")) {
     closeModal();  
    }
  }
});
