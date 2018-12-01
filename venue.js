var venue = {
    name: "TicketMAster",
    ticketsAvaliable: ["A1","A2","A3","A4","A5","B1","B2","B3","B4","B5"],
    ticketsPurchased: ["A6", "A7", "B6", "B7"],
    
    numberOfTicketsAvailable: function() {
        // length of the number of seats available, returned as an integer (1,5,20, etc)
        return this.ticketsAvaliable.length;
    }
};

// Select a user clicked specific seat option from a dropdown
function selectSeat() {

    // Get selected seat from user
    var seatPicked = document.getElementById("mySelect").value;
    document.getElementById("demo").innerHTML = "You picked seat " + seatPicked + ".";
    // Test 
    console.log(seatPicked);
    console.log(venue.ticketsAvaliable.indexOf(seatPicked));
    // Remove selected seat from ticketsAvaliable
    // Push selected room into ticketsPurchased
    venue.ticketsAvaliable.splice(venue.ticketsAvaliable.indexOf(seatPicked), 1);
    venue.ticketsPurchased.push(seatPicked);
    
    // Remove selected item from dropdown
    var ticketPurchasedRemoved = document.getElementById("mySelect");
    ticketPurchasedRemoved.remove(ticketPurchasedRemoved.selectedIndex);
}

// Select a user clicked specific seat option from a dropdown
function unreserveSeat() {

    // Get selected seat from user
    var seatReserved = document.getElementById("mySelectReserved").value;

    // Tests
    console.log(seatReserved);
    // console.log(venue.ticketsReserved.indexOf(seatReserved));
    // Remove selected seat from ticketsAvaliable
    // Push selected room into ticketsPurchased
    venue.ticketsAvaliable.splice(venue.ticketsAvaliable.indexOf(seatReserved), 1);
    venue.ticketsPurchased.push(seatReserved);
    
    // Remove selected item from dropdown
    var removeRemoved = document.getElementById("mySelectReserved");
    removeRemoved.remove(removeRemoved.selectedIndex);
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