// Select value and buttons
let count = 0;

// Select value and buttons:

const value = document.querySelector("#value");
const btns = document.querySelectorAll(".btn")

// lin 10. Es una propiedad de nodelist. Linea 11. Por cada click, se realiza un evento de reconocer cual ha sido el elemento que hemos dado click.
btns.forEach( (btn) => {
btn.addEventListener("click", (e) =>  {
      const styles = e.currentTarget.classList
      // Eventos a realizar
      if(styles.contains("decrease")){
            count--;
      } else if(styles.contains("increase")){
            count++;
      } else {
            count = 0;
      }

      // Modificaciones de CSS a traves de JS.

      if(count > 0){
            value.style.color = "green";
      } 
      if(count < 0){
            value.style.color = "red";
      }
      if(count === 0){
            value.style.color = "black";
      }

// Esto realiza que el valor 0 de pagina, coincida con el valor que nosotros damos a traves de JS
      value.textContent = count;
})
})




// const value = document.querySelector("#value");
// const btns = document.querySelectorAll(".btn")

// btns.forEach(function(btn){
//       btn.addEventListener("click", (e) =>{
//             const styles = e.currentTarget.classList;
            
//             if (styles.contains("decrease")){
//                   count--;
//             } else if(styles.contains("increase")) {
//                   count++;
//             } else {
//                   count = 0
//             }
//             if (count > 0){
//                   value.style.color = "green";
//             } 
//             if (count < 0){
//                   value.style.color = "red";
//             }
//             if(count === 0){
//                   value.style.color = "#222";
//             }

//             value.textContent = count;
//       })
// })