var venue = {
    name: "TicketMAster",
    ticketsAvaliable: ["A1","A2","A3","A4","A5","B1","B2","B3","B4","B5"],
    ticketsPurchased: [],
    
    numberOfTicketsAvailable: function() {
        // length of the number of seats available, returned as an integer (1,5,20, etc)
        return this.ticketsAvaliable.length;
    }
};

var totalCost = "" ;
// Select a user clicked specific seat option from a dropdown
function selectSeat() {
    // Check to see if any seats arw available
    if (venue.ticketsAvaliable.length > 0) {

        // Get selected seat from user
        var seatPicked = document.getElementById("mySelect").value;
        document.getElementById("demo").innerHTML = "You picked seat " + seatPicked + ".";

        // Remove selected seat from ticketsAvaliable
        // Push selected room into ticketsPurchased
        venue.ticketsAvaliable.splice(venue.ticketsAvaliable.indexOf(seatPicked), 1);
        venue.ticketsPurchased.push(seatPicked);
        
        // Remove selected item from dropdown
        var ticketPurchasedRemoved = document.getElementById("mySelect");
        ticketPurchasedRemoved.remove(ticketPurchasedRemoved.selectedIndex);
        
        // Display Total Cost of Tickets Purchased
        totalCost = venue.ticketsPurchased.length * 100;
        document.getElementById("totalCost").innerHTML = "$ " + totalCost;
        
        // if tickets are all sold out
    } else {
        document.getElementById("demo").innerHTML = "I'm sorry there are no tickets available";
    }
} 


// Select a user clicked specific seat option from a dropdown
function unreserveSeat() {
    // Check to see if the user has purchased a ticket
    if (venue.ticketsPurchased.length > 0) {
        
        // Get selected seat from user
        var seatReserved = document.getElementById("mySelectReserved").value;
        document.getElementById("demo").innerHTML = "You have returned the ticket for seat " + seatReserved + ".";
        
        // Remove selected seat from ticketsAvaliable
        // Push selected room into ticketsPurchased
        venue.ticketsPurchased.splice(venue.ticketsAvaliable.indexOf(seatReserved), 1);
        venue.ticketsAvaliable.push(seatReserved);
        
        // Remove selected item from dropdown
        var removeRemoved = document.getElementById("mySelectReserved");
        removeRemoved.remove(removeRemoved.selectedIndex);
        
        // Update total cost after returning ticket
        totalCost = totalCost - 100;
        document.getElementById("totalCost").innerHTML = "$ " + totalCost;
        
    // if no tickets purchsed yet
    } else {
        document.getElementById("demo").innerHTML = "You have not purchased any tickets yet";
    }
}


// Create dropdown with each item from ticketsAvailable
var ticketList = "<form> <select id='mySelect'>";
for (var i=0; i < venue.ticketsAvaliable.length; i++) {
    
    ticketList += '<option value="' + venue.ticketsAvaliable[i] + '">' + venue.ticketsAvaliable[i] + "</option>";
}
ticketList += "</select> </form>";

document.getElementById("seatsAvail").innerHTML = ticketList;


    
// Create a dropdown with each item in ticketsPurchased
var reservedTicketList = "<form> <select id='mySelectReserved'>";
for (var i=0; i < venue.ticketsPurchased.length; i++) {
    
    reservedTicketList += '<option value="' + venue.ticketsPurchased[i] + '">' + venue.ticketsPurchased[i] + "</option>";
}
reservedTicketList += "</select> </form>";

document.getElementById("seatsReserved").innerHTML = reservedTicketList;