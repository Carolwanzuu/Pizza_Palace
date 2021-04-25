// $(document).ready(function(event){
    
// })

// function Pizza(size, crust, toppings){
//     this.size = ['small', 'medium','large'];
//     this.crust = ['crispy','stuffed','gluten-free'];
//     this.toppings = ['Pepperoni','mushrooms','gorgonzola','capers','broccoli'];
// }
// function Size(small, medium, large){
//     this.small = small;
//     this.medium = medium;
//     this.large = large;
// };
// function Crust(crispy, stuffed, gluten_free){
//     this.crispy = crispy;
//     this.stuffed = stuffed;
//     this.gluten_free = gluten_free;
// };
// function Toppings(pepperoni, mushrooms, gorgonzola, capers, broccoli){
//     this.pepperoni = pepperoni;
//     this.mushrooms = mushrooms;
//     this.gorgonzola = gorgonzola;
//     this.capers = capers;
//     this.broccoli = broccoli;
// };

function Pizza(size, crust, toppings){
        this.size = size;
        this.crust = crust;
        this.toppings = toppings;
    }

    // $(document).ready(function(){
    //     $("#submit").click(function(event){
    //         event.preventDefault();
    //         let size =$("option#size").val();
    //         let crust = $("input#crust").val();
    //         let toppings = $("input#toppings").val();
    //         console.log(size, crust, toppings);
    //     })
    
    // })
//  let Order1 = new Pizza(size, crust,toppings);  

$(document).ready(function(){
    $("form#makeOrder").submit(function(event){
        event.preventDefault();
        let size =$("option#size").val();
        let crust = $("input#crust").val();
        let toppings = $("input#toppings").val();
         //console.log(size, crust, toppings);
    })

})