/*const rows = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm',
'n', 'o', 'p', 'q', 'r', 's', 't'];
// FOR THE LEFT SIDE OF SEATS
let html = '';
let counter = 1;
rows.forEach(function (eachRow) {
   html += `<div class="label">${eachRow}</div>`;
   for(let i=0; i < 3; i++) {
    html+= `<div id="${eachRow + counter}">${counter}</div>`;
    counter ++;
   } 
   counter = counter + 12;
});
document.getElementById("left").innerHTML = html;
// END FOR THE LEFT SIDE OF SEATS

// FOR THE RIGHT SIDE OF SEATS 
html = '';
counter = 1;
rows.forEach(function (eachRow) {
    counter = counter + 12;
    for(let i=0; i < 3; i++) {
        html += `<div id="${eachRow + counter}">${counter}</div>`;
        counter++
    }
    html += `<div class="label">${eachRow}</div>`;
});
document.getElementById("right").innerHTML = html;
// END FOR THE RIGHT SIDE OF SEATS

// FOR THE MIDDLE SEATS 
html = '';
counter = 1;
rows.forEach(function (eachRow) {
    counter = counter + 3;
    for(let i=0; i < 9; i++) {
        html += `<div id="${eachRow + counter}">${counter}</div>`;
        counter++
    }
    counter = counter + 3;
});
document.getElementById("middle").innerHTML = html;
// END FOR THE MIDDLE SEATS */

// SHORTER SCRIPT 
var reservedSeats = {
	record1: {
		seat: "b19",
		owner: {
			fname: "Joe",
			lname: "Smith"
		}
	},
	record2: {
		seat: "b20",
		owner: {
			fname: "Joe",
			lname: "Smith"
		}
	},
	record3: {
		seat: "b21",
		owner: {
			fname: "Joe",
			lname: "Smith"
		}
	},
	record4: {
		seat: "b22",
		owner: {
			fname: "Joe",
			lname: "Smith"
		}
	}
};
function makeRows(sectionLength, rowLength, placement) {
  const rows = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm',
  'n', 'o', 'p', 'q', 'r', 's', 't'];
   let html = '';
   let counter = 1;
   rows.forEach((eachRow) => {
    switch (placement) {
        case 'left': html += `<div class="label">${eachRow}</div>`;break;
        case 'right': counter = counter + (rowLength - sectionLength);break;
        default: counter = counter + ((rowLength - sectionLength) / 2);break;
    }
    for(let i=0; i < sectionLength; i++) {
        html += `<div class="a" id="${eachRow + counter}">${counter}</div>`;
        counter++
    }
    switch (placement) {
        case 'left': counter = counter + (rowLength - sectionLength);break;
        case 'right': html += `<div class="label">${eachRow}</div>`;break;
        default: counter = counter + ((rowLength - sectionLength) / 2);break;
    }
   });
   document.getElementById(placement).innerHTML = html;
}
makeRows(3, 15, 'left');
makeRows(3, 15, 'right');
makeRows(9, 15, 'middle');
(function () {
    'use strict'
    for(const key in reservedSeats) {
        if (reservedSeats.hasOwnProperty(key)) {
            const obj = reservedSeats[key];
            document.getElementById(obj.seat).className = "r";
            document.getElementById(obj.seat).innerHTML = "R"; 
        }
    }
    var selectSeats = [];
    var seats = document.querySelectorAll(".a");
    seats.forEach((seat) => {
       seat.addEventListener("click", () => {
        seatSelectionProcess(seat.id);
       }); 
    });
    function seatSelectionProcess(thisSeat) {
        if (!document.getElementById(thisSeat).classList.contains("r")) {
            var index = selectSeats.indexOf(thisSeat);
            if (index > -1) {
                selectSeats.splice(index, 1);
                document.getElementById(thisSeat).className = 'a';
            }

            else {
                selectSeats.push(thisSeat);
                document.getElementById(thisSeat).className = "s";
            }
            manageConfirmForm();
        }
    }
    // EVENT LISTENER FOR THE RESERVE BUTTON TO OPEN FORM
    document.getElementById('reserve').addEventListener("click", function (event) {
      document.getElementById("resform").style.display = "block";
      event.preventDefault(); 
    });
    // END EVENT LISTENER FOR THE RESERVE BUTTON TO OPEN FORM
 
    // EVENT LISTENER FOR THE RESERVE BUTTON TO CLOSE FORM
    document.getElementById("cancel").addEventListener("click", function (event) {
     document.getElementById("resform").style.display = "none";
     event.preventDefault();
    });
    // END EVENT LISTENER FOR THE RESERVE BUTTON TO CLOSE FORM
    function manageConfirmForm() {
        if (selectSeats.length > 0) {
            document.getElementById("confirmres").style.display = "block";
            if (selectSeats.length === 1) {
                document.getElementById("selectedseats").innerHTML = `You have selected seat ${selectSeats[0]}`;
            }
            else {
               let seatsString = selectSeats.toString();
               seatsString = seatsString.replace(/,/g , ",");
               seatsString = seatsString.replace(/,(?=[^,]*$)/ , 'and');
               document.getElementById("selectedseats").innerHTML = `You have selected some seats ${seatsString}`;
            }
        }
        else {
            document.getElementById("confirmres").style.display = "none";
            document.getElementById("selectedseats").innerHTML = 
            'You need to select some seats to reserve.<br><a href="#" id="error">Close</a> this dialog box and pick at least one seat.';
            document.getElementById("error").addEventListener("click", function () {
               document.getElementById("resform").style.display = "none"; 
            });
        }
    }
    manageConfirmForm();
    document.getElementById("confirmres").addEventListener("submit", function (event) {
       event.preventDefault();
       processReservation();
    });
    function processReservation() {
        const hardCodeRecords = Object.keys(reservedSeats).length;
        const fname = document.getElementById("fname").value;
        const lname = document.getElementById("lname").value;
        let counter = 1;
        let nextRecord = "";
        selectSeats.forEach(function (thisSeat) {
            document.getElementById(thisSeat).className = "r";
            document.getElementById(thisSeat).innerHTML = "R";
            nextRecord = `record${hardCodeRecords + counter}`;
            reservedSeats[nextRecord] = {
                seat:thisSeat,
                owner: {
                    fname:fname,
                    lname:lname
                }
            }
            counter++;
        });
        document.getElementById("resform").style.display = "none";
        selectSeats = [];
        manageConfirmForm();
    };
})();
// END SHORTER SCRIPT 