// Get the featured image element
const featuredimage= document.querySelector("figure img");

// Get all thumbnail images
const thumbnails = document.querySelectorAll("li img");

// Add click event listener to each thumbnail image
thumbnails.forEach(working)
function working(item){
    item.addEventListener('click', () => {

        // Get the clicked thumbnail's source and alt attributes
        const src = item.getAttribute('src').replace('-small', '-large');
        const alt = item.getAttribute('alt');

        // Update the featured image with the clicked thumbnail's attributes
        featuredimage.setAttribute('src', src);
        featuredimage.setAttribute('alt', alt); 

        // Update the image title in the figcaption
        const figcaption = document.querySelector('#gallery figure figcaption');
        figcaption.textContent = alt;

    })
}


// thumbnails.forEach(thumbnail => {
//     thumbnail.addEventListener('click', () => {
//       // Get the clicked thumbnail's source and alt attributes
//       const src = thumbnail.getAttribute('src').replace('small','large');
//       const alt = thumbnail.getAttribute('alt');
  
//       // Update the featured image with the clicked thumbnail's attributes
//       featuredimage.setAttribute('src', src);
//       featuredimage.setAttribute('alt', alt);
  
//       // Update the image title in the figcaption
//       const figcaption = document.querySelector(' figure figcaption');
//       figcaption.textContent = alt;
//     });
//   });