fetch('address-book.json')
  .then(function(response) {
    return response.json();
  })
  .then(function(json) {
    render_page(json);
  });

function render_page(json) {

  let patients = new Array();
  let nurses = new Array();
  let doctors = new Array();

  for (i = 0; i < 11 ; i++) {
    patients[i] = new Object();
    patients[i].wardNumber = i;
    patients[i].wardPhoneNumber = null;
    patients[i].people = new Array();

    nurses[i] = new Object();
    nurses[i].wardNumber = i;
    nurses[i].wardPhoneNumber = null;
    nurses[i].people = new Array();
  }

  for (i = 0; i < json.length; i++) {

    // store patients and group into wards
    if (json[i].class == "Patient") {
      if (json[i].ward_number != null) {
        patients[json[i].ward_number].people.push(json[i].first_name + " " + json[i].family_name);
      } else {
        patients[0].people.push(json[i].first_name + " " + json[i].family_name);
      }
    }

    // store nurses and group into wards
    if (json[i].class == "Nurse") {
      if (json[i].ward_number != null) {
        nurses[json[i].ward_number].people.push(json[i].first_name + " " + json[i].family_name);
      } else {
        nurses[0].people.push(json[i].first_name + " " + json[i].family_name);
      }
    }

    // store ward phone numbers
    if (json[i].class == "Ward") {
      let wardNumber = json[i].ward_number;
      patients[wardNumber].wardPhoneNumber = json[i].phone_number;
      nurses[wardNumber].wardPhoneNumber = json[i].phone_number;
    }
  }

  // render patients list
  console.log("🏥🏥🏥🏥🏥🏥🏥🏥🏥🏥🏥🏥🏥🏥🏥🏥🏥🏥🏥");
  console.log("PATIENTS LIST:");
  console.log("🏥🏥🏥🏥🏥🏥🏥🏥🏥🏥🏥🏥🏥🏥🏥🏥🏥🏥🏥");

  for (i = 0; i < patients.length; i++) {
    console.log("");
    if (i == 0) {
      console.log("NO WARD");
    } else {
      console.log("WARD # " + patients[i].wardNumber);
    }
    if (patients[i].wardPhoneNumber != null) {
      console.log(patients[i].wardPhoneNumber);
    }
    console.log("===================================");
    let patientsString = "";
    let delim = "";
    for (j = 0; j < patients[i].people.length; j++) {
      if (j > 0) {
        delim = ", ";
      }
      patientsString = patientsString + delim + patients[i].people[j];
    }
    console.log(patientsString);
  }

  console.log("");console.log("");console.log("");console.log("");

  //render Nurses list
  console.log("🏥🏥🏥🏥🏥🏥🏥🏥🏥🏥🏥🏥🏥🏥🏥🏥🏥🏥🏥");
  console.log("NURSES LIST:");
  console.log("🏥🏥🏥🏥🏥🏥🏥🏥🏥🏥🏥🏥🏥🏥🏥🏥🏥🏥🏥");

  for (i = 0; i < nurses.length; i++) {
    console.log("");
    if (i == 0) {
      console.log("NO WARD");
    } else {
      console.log("WARD # " + nurses[i].wardNumber);
    }
    if (nurses[i].wardPhoneNumber != null) {
      console.log(nurses[i].wardPhoneNumber);
    }
    console.log("===================================");

    let nursesString = "";
    delim = "";

    for (j = 0; j < nurses[i].people.length; j++) {
      // console.log(nurses[i].people[j]);
      if (j > 0) {
        delim = ", ";
      }
      nursesString = nursesString + delim + nurses[i].people[j];
    }
    console.log(nursesString);
  }



}


// override console log so that it goes to HTML
(function () {
    var old = console.log;
    var logger = document.getElementById('log');
    console.log = function (message) {
        if (typeof message == 'object') {
            logger.innerHTML += (JSON && JSON.stringify ? JSON.stringify(message) : message) + '<br />';
        } else {
            logger.innerHTML += message + '<br />';
        }
    }
})();
