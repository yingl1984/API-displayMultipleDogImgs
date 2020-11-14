'use strict';




function generateImgHTML(array){
    let result="";
    for(let i=0; i<array.length; i++){
        result += `<img src=${array[i]} alt="A lovely dog picture">`
    }
    console.log(result);
    
    return result;
}


function displayImgs(responseJson){
    
    let array = responseJson.message;
    let display = generateImgHTML(array);
    $('#show-pictures').html(display);
    $('.results').removeClass('hidden');
}



function getDogMultipleImg(quantity) {
    console.log(quantity);
    fetch(`https://dog.ceo/api/breeds/image/random/${quantity}`)
      .then(response => response.json())
      .then(responseJson => 
        displayImgs(responseJson))
      .catch(error => alert('Something went wrong. Try again later.'));
  }

function printThePic(){
    $('form').submit(event => {
        event.preventDefault();
        const quantity = $('form #quantity').val();
        getDogMultipleImg(quantity);
    });
}

$(function(){
    console.log('App loaded! Waiting for submit!');
    printThePic();
})
