window.onload = function () {

    // var goods = {
    //     first: {
    //         name: "111",
    //         quantity: 0
    //     },
    //     second: {
    //         name: "222",
    //         quantity: 0
    //     },
    //     third: {
    //         name: "333",
    //         quantity: 0
    //     },
    //     fourth: {
    //         name: "444",
    //         quantity: 0
    //     },
    //     fifth: {
    //         name: "555",
    //         quantity: 0
    //     },
    // }

    //--------DECLARATION--------
    var addButtonsList = document.querySelectorAll(".add_button");
    var removeButtonsList = document.querySelectorAll(".remove_button");

    var cart = document.querySelector(".cart_content");
    var deleteAll = document.querySelector(".remove_all");
    
    //------AJAX-REQUEST----------

    var xhr = new XMLHttpRequest();

    xhr.open('GET', 'products.json', true);
    xhr.send();

    xhr.onreadystatechange = function(){
        if (xhr.readyState != 4) return;
        var goods = JSON.parse(xhr.responseText);
        // console.log(goods);

   //------EVENTS-HANGING----------
   
    addButtonsList.forEach(function(item){
        item.addEventListener('click', addToCart)
    });
    
    removeButtonsList.forEach(function(item){
        item.addEventListener('click', removeFromCart)
    });

    deleteAll.addEventListener('click', deleteFromStorage);

    //------LOCAL-STORAGE----------

    if(localStorage.getItem("goods")){
        var goodsInStorage = JSON.parse(localStorage.goods);
        // console.log(goodsInStorage);
        renderStorage();
    }else {
          var goodsInStorage = {};
    }

    //------BUTTONS-FUNCTIONS----------

    function addToCart(event) {
        if(!goodsInStorage[this.parentElement.id]) {
            goodsInStorage[this.parentElement.id] = goods[this.parentElement.id];
        }
        goodsInStorage[this.parentElement.id].quantity++;
        goodsInStorage = JSON.stringify(goodsInStorage);

        localStorage.setItem("goods", goodsInStorage);
        goodsInStorage = JSON.parse(localStorage.goods);


        renderStorage();
    }

    function removeFromCart() {
        goodsInStorage = JSON.parse(localStorage.goods);
        delete  goodsInStorage[this.parentElement.id];

        goodsInStorage = JSON.stringify( goodsInStorage);
        localStorage.setItem("goods", goodsInStorage);
        goodsInStorage = JSON.parse(localStorage.goods);

        renderStorage();
    }

    function deleteFromStorage(){
        goodsInStorage = '{}';

        localStorage.setItem("goods", goodsInStorage);
        goodsInStorage = JSON.parse(goodsInStorage);

        renderStorage();
    }

    //------RENDERING----------

    function renderStorage(){
        var stor = JSON.parse(localStorage.goods);
        
        cart.innerHTML = '<div>';

        for (var key in stor) {
            cart.innerHTML += '<br>' + '<span>' + stor[key].name + '</span>' +  '<span>' + ' ' + ' x ' + ' ' + stor[key].quantity + '</span>';
        }

        cart.innerHTML += '</div>';
        }         
    }

}

   