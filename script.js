function validateName() {
  var name = document.getElementById("name").value;
  var letters = /^[A-Za-z]+$/;
  if(name.match(letters)) {
    return true;
  } else {
    document.getElementById('message1').innerHTML = 'Polje za unos imena i prezimena može sadržavati samo slova.';
}
}

function validatePhone(phone){
  if (!/^[0-9]*$/.test(phone)) {
    document.getElementById('message2').innerHTML = 'Polje za unos broja telefona može sadržavati samo brojeve.';
  } else {
      console.log('Uspješan unos');
    }
  }

function validateEmail(email) {
  const regex = /^[^@\s]+@[^@\s]+\.[^@\s]+$/;
  if(regex.test(email)) {
    console.log('Email je validan!');
  } else {
    document.getElementById('message3').innerHTML = 'Molimo unesite ispravnu e-mail adresu.';
  }
}

function validateForm(){ 
  var name = document.getElementById('name').value;
  var phone = document.getElementById('phone').value; 
  var address = document.getElementById('address').value; 
  var homeNumber = document.getElementById('homeNumber').value;
  var postNumber = document.getElementById('postNumber').value;
  var place = document.getElementById('place').value;  
  var email = document.getElementById('email').value;

  if (name == "" || phone == "" || address == "" || homeNumber == ""|| postNumber == ""|| place == "" || email == "") {
      alert('Sva polja moraju biti popunjena!');
    }  else {
      console.log("Ime i prezime: " + name);
      console.log("Broj telefona: " + phone);
      console.log("Adresa: " + address);
      console.log("Kućni broj: " + homeNumber);
      console.log("Poštanski broj: " + postNumber);
      console.log("Mjesto: " + place);
      console.log("E-mail dresa: " + email);
    }
}
 