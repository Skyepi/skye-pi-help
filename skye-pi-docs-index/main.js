//name = p + name
//     name = document.querySelector(input);
// document.getElementsByClassName(name) = name;

// console.log(name);

//upload photo 
const coverPic = document.querySelector("uploadImage");
uploadImage.addEventListener('submit', handleSubmit);


/** @param {Event} event */
function handleSubmit(event) {
    /** @type {HTMLFormElement} */
    const form = event.currentTarget;
    const url = new URL(form.action);
    const formData = new FormData(form);
    const searchParams = new URLSearchParams(formData);
  
    /** @type {Parameters<fetch>[1]} */
    const fetchOptions = {
      method: form.method,
    };
  
    if (form.method.toLowerCase() === 'post') {
      if (form.enctype === 'multipart/form-data') {
        fetchOptions.body = formData;
      } else {
        fetchOptions.body = searchParams;
      }
    } else {
      url.search = searchParams;
    }
  
    fetch(url, fetchOptions);
  
    event.preventDefault();
  }