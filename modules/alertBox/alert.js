const message = {
  msg: {
    emptyField: {
      title: "The Empty Field",
      info: "The input field is empty. Please fill it."
    }
  },
}

const showAlert = function() {
  createBox();
}

function createBox() {
  // check if the box exist
  const artBox = document.querySelector(".alertBox");

  if (artBox === null) {
    /* declare the variables */
    const body = document.querySelector("body");
    const alertBox = document.createElement("div");
    const title = document.createElement("h2");
    const info = document.createElement("p");
    const titleValue = document.createTextNode(message.msg.emptyField.title);
    const infoValue = document.createTextNode(message.msg.emptyField.info);

    /* append the created elements */
    alertBox.appendChild(title);
    alertBox.appendChild(info);
    body.appendChild(alertBox);

    /* add classes to the elements above */
    alertBox.classList.add("alertBox");
    title.classList.add("alertBox__title");
    info.classList.add("alertBox__info");

    title.appendChild(titleValue);
    info.appendChild(infoValue);

    // after 10 sec check if the alert exist, then delete it
    setTimeout(() => {
      const alertBox = document.querySelector(".alertBox");
      alertBox.remove();
    },3000);
  } else {
    return;
  }
}

export {showAlert};
