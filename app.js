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
    patients[i].wardPhoneNumber = "";
    patients[i].people = new Array();

    nurses[i] = new Object();
    nurses[i].wardNumber = i;
    nurses[i].wardPhoneNumber = "";
    nurses[i].people = new Array();
  }

  for (i = 0; i < json.length; i++) {
    if (json[i].class == "Patient") {
      if (json[i].ward_number != null) {
        patients[json[i].ward_number].people.push(json[i].first_name + " " + json[i].family_name);
      } else {
        patients[0].people.push(json[i].first_name + " " + json[i].family_name);
      }
    }
  }

  // render patients list
  for (i = 0; i < patients.length; i++) {
    console.log(patients[i].wardNumber);
    for (j = 0; j < patients[i].people.length; j++) {
      console.log(patients[i].people[j]);
    }
  }
}
