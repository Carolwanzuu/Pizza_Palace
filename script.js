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
        this.total = (parseInt(this.size) + parseInt(this.crust) + parseInt(this.toppings));
    }


    Pizza.prototype.getSize = function(size){
        if(size==="500"){
            return `Small - ${this.size}`
        }else if(size==="1000"){
            return `Medium - ${this.size}`
        }else if(size==="1500"){
            return `Large - ${this.size}`
        }   
    }
    Pizza.prototype.getCrust = function(crust){
        if(crust==="100"){
            return `Crispy - ${this.crust}`
        }else if(crust==="150"){
            return `Stuffed - ${this.crust}`
        }else if(crust==="200"){
            return `Gluten-free - ${this.crust}`
        }   
    }
    Pizza.prototype.getToppings = function(toppings){
        if(toppings==="200"){
            return `Pepperoni - ${this.toppings}`
        }else if(toppings==="150"){
            return `Mushroom - ${this.toppings}`
        }else if(toppings==="100"){
            return `Capers - ${this.toppings}`
        }   
    }
    Pizza.prototype.getTotal = function(){
        return this.total;
    }
    Pizza.prototype.Order = function(){
        return this.size + " " + this.crust + " "+this.toppings;
    }

    function Order(){
        this.pizza = []
    }

    var placeOrder = new Order()
    var sum = 0;
    function getGrandTotal(){
        for(let i =0; i < placeOrder.pizza.length; i++){
            sum += placeOrder.pizza[i].total
        }
        return sum;
    } 

$(document).ready(function(){
    $("form#makeOrder").submit(function(event){
        event.preventDefault();
        let size =$("#size").val();
        //console.log(size);
        let crust = $("#crust").val();
        let toppings = $("#toppings").val();
        // console.log(size,crust, toppings);
        var pizzaPal = new Pizza(size, crust,toppings);  
        
        var newOrder = new Order()
        newOrder.pizza.push(pizzaPal)
        placeOrder.pizza.push(pizzaPal)
        //console.log(newOrder);
        

        newOrder.pizza.forEach(function(pizzaPal){
            //console.log(pizzaPal.getSize(pizzaPal.size))
            //console.log(pizzaPal.getCrust(pizzaPal.crust))
            //console.log(pizzaPal.getToppings(pizzaPal.toppings))
            $("#tblBody").append(`<tr>
                    <th scope="row">.</th>
                    <td>${pizzaPal.getSize(pizzaPal.size)}</td>
                    <td>${pizzaPal.getCrust(pizzaPal.crust)}</td>
                    <td>${pizzaPal.getToppings(pizzaPal.toppings)}</td>
                    <td>${pizzaPal.getTotal()}</td>
              </tr>`);
            }) 
        
        // $("ul#orders").append("<li><span class='anotherorder'>" + newOrder.total + "</span></li>");   
    })

    $("#checkout").click(function(){
        alert("Total amount for your order is ksh." + getGrandTotal());
         //confirm("Do you need delivery?");
        // if(confirm == true){
        //     console.log("Additional charges of ksh.200 will be applied to your total amount");
        // }else if(confirm == false){
        //     console.log("Thank you for supporting us!");
        // }

    
    var delivery = confirm("Do you need delivery?")
        if(delivery == true){
            alert("Additional charges of ksh.200 will be added to your total amount");
            prompt("Enter your location kindly");
            alert("Your order will be delivered to your location.")
            alert("Thank you and looking forward to see you soon!")
        }else{
            alert("Thank you and welcome again to Pizza Palace!");
        }
    
    // var location = prompt("Enter your location kindly");
    
    });
    $("#request").click(function(){
        $("#myTable").show();
    })

    $("#checkout").click(function(){
        $("#checkout").hide();
    })
});






//$(".anotherOrder").last().click(function() {
    //     $("#show-contact").show();
    //     $("#show-contact h2").text(newContact.firstName);
    //     $(".first-name").text(newContact.firstName);
    //     $(".last-name").text(newContact.lastName);
    //   });  