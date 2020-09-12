console.log('js loaded');

$(document).ready(onReady);

function getInventory(){
    console.log('in getInventory');
    // make a GET AJAX call to get items
    $.ajax({
        method: 'GET',
        url: '/inventory'
    }).then(function(response){
        console.log('Back from GET with:', response);
        // empty the output element
        // loop through response
        // update DOM with items 
    }).catch(function(err){
        console.log(err);
        alert('Uh oh!')
    })
} // end getInventory

function onReady(){
    getInventory();
} // end onReady