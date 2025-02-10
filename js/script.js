// Select elements
let list = $("#list");
let input = $("#input");

// Function to add an item
function addItem() {
    let inputValue = input.val().trim(); // Get and trim input value

    if (inputValue !== "") { // Check if input is not empty
        // Append new item as a string (following best practices)
        let li = $('<li>' + inputValue + ' <span class="delete"></span></li>');
        
        // Append the delete button inside <span> using createTextNode
        li.find(".delete").append(document.createTextNode("X"));
        
        list.append(li); // Append <li> to the list
        input.val(""); // Clear input field
    }
}

// Click event for the Add button
$("#button").click(function () {
    addItem();
});

// Double-click to cross out an item
$(document).on("dblclick", "li", function () {
    $(this).toggleClass("strike");
});

// Click on delete button to remove item
$(document).on("click", ".delete", function () {
    $(this).parent().remove();
});

// Enable drag and drop sorting using jQuery UI
$("#list").sortable();





