// function doAjax(get, data){
//     var xhr = new XMLHttpRequest();
//     xhr.open(method, url,true);

//     return new Promise (function(resolve,reject){
//         xhr.send();

//         xhr.onreadystatechange = function(){
//             if(xhr.readyState != 4){
//                 return;
//             }

//             if(xhr.status != 200){
//                 reject(xhr);
//             }

//             resolve(JSON.parse(xhr.responseText));

//         }
//     });
// }

// Promise
//     .all([
//         doAjax('GET', "/data.json"),
//         doAjax('GET', "/data2.json"),
//     ])
//     .then(function(values){
//         console.log(values);
//     })
//     .catch(function(){})

//--------------------------------------------------------------------


function doAjax(get, data){

    var xhr = new XMLHttpRequest();
    xhr.open(method, url, true);
    xhr.send();

    return new Promise (function(resolve,reject){

        xhr.onreadystatechange = function(){
            if(xhr.readyState != 4){
                return;
            }

            if(xhr.status != 200){
                reject(xhr);
            }

            resolve(JSON.parse(xhr.responseText));

        }
    });
}


    doAjax("GET", "/config.json")       
        .then(function configOk(response){
            doAjax('GET' + ' -- ' + response.role)
                .then(startMenu)
    })

    function startMenu(menuList){
        var menu = document.querySelector('.menu');
    
        for (i = 0; i < menuList.menu.length; i++) {
            var li = document.createElement('li');
            li.innerHTML = menuList.menu[i].title;
            menu.appendChild(li);
        }
    }
    
    Promise
    .all([
        doAjax('GET', '/admin.json'),
        doAjax('GET', '/user.json'),
    ])
    .then(function(response){
        console.log(response[2]); 
        
    })
    .catch(function(){
        console.log('Wrong role');
    });
 