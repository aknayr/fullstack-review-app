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
        let el = $('#itemsOut').empty();
        el.empty();
        // loop through response
        for(let i = 0; i < response.length; i++){
            // update DOM with items 
            el.append(`<li>
            <button class = "sellItemButton" data-id="${response[i].id}">Sell</button>
                ${response[i].size},
                ${response[i].color}:
                ${response[i].description}
            </li>`)
        } // end for
        // update DOM with items 
    }).catch(function(err){
        console.log(err);
        alert('Uh oh!')
    })
} // end getInventory

function addItem(){
    console.log('in addItem');
    // get user Input & put into an object
    const objectToSend = {
        size: $('#sizeIn').val(),
        color: $('#colorIn').val(),
        description: $('#descriptionIn').val(),
    }
    // send that object to server with AJAX POST
    $.ajax({
        method: 'POST',
        url: '/inventory',
        data: objectToSend
    }).then(function(response){
        // send object to server via AJAX POST
        console.log('back from POST with:', response);
        // update the DOM
        getInventory();
    }).catch(function(err){
        console.log(err);
        alert('There was an error');
        res.sendStatus(500);
    }) // end AJAX
} // end addItem

function onReady(){
    $('#addItemButton').on('click', addItem);
    // click handler for dynamically created elements
    $('#itemsOut').on('click','.sellItemButton', sellItem);
    getInventory();
} // end onReady

function sellItem(){
    const myId = $(this).data('id');
    console.log('in sellItem:', myId);
    $.ajax({
        method: 'DELETE',
        url: '/inventory/' + myId
    }).then(function(response){
        console.log('back from DELETE:', response);
        getInventory();
    }).catch(function(err){
        console.log(err);
        alert('unable to delete');
    }) // end AJAX DELETE
}