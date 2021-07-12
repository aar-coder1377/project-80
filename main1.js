var GuestName = [];
function AddGuestName() {

    var vNameOfPerson = document.getElementById("name_of_person").value;
    GuestName.push(vNameOfPerson);

   document.getElementById("guest_row").innerHTML = GuestName;

    var guestlist = "";

    for (var i = 0; i < GuestName.length; i++) {
        console.log("hi");        
       guestlist = guestlist +  GuestName[i] +"<br>";
    }
   document.getElementById("guest_list").innerHTML = guestlist;
}

function guest_sort() {
    GuestName.sort();
    var guest_list = "";
    for (var i = 0; i < GuestName.length; i++) {
        
        guest_list = guest_list + GuestName[i] + "<br>";
    }
    document.getElementById("guest_list_sort").innerHTML = guest_list;



}
function guest_search() {
    var s = document.getElementById("search_input").value;
    var itemsfound = 0;
    for (var i = 0; i < GuestName.length; i++) {
        if (s == GuestName[i]) {
            itemsfound++;
                    }


    }
    document.getElementById("search_result").innerHTML = "Search found " + itemsfound + " items";

}

