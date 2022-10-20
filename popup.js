document.getElementById('save').addEventListener('click', save_options);
document.addEventListener('DOMContentLoaded', restore_options);

function save_options() {
    const leerlingnummer = document.querySelector('.leerlingnummer').value;
    if (leerlingnummer === ''){
        console.log('empty');
        document.querySelector('.leerlingnummer').classList.add('empty')

        var status = document.getElementById('status');
        status.textContent = 'Type leerlingnummer in.';
        setTimeout(function() {
        status.textContent = '';
        }, 2000);
        var leercheck = false
    }
    else {     
        console.log(leerlingnummer)   
        chrome.storage.sync.set({leerlingnummer: leerlingnummer});
        var leercheck = true        
    }

    const wachtwoord = document.querySelector('.wachtwoord').value;
    if (wachtwoord === ''){
        console.log('empty');
        document.querySelector('.wachtwoord').classList.add('empty')

        var status = document.getElementById('status');
        status.textContent = 'Type wachtwoord in.';
        setTimeout(function() {
        status.textContent = '';
        }, 2000);
        var wwcheck = false
    }
    else {
        chrome.storage.sync.set({wachtwoord: wachtwoord});
        var wwcheck = true
    }

    if (leercheck == true && wwcheck == true){
        var status = document.getElementById('savebericht');
        status.textContent = 'Opgeslagen.';

        document.querySelector('.wachtwoord').classList.remove('empty')
        document.querySelector('.leerlingnummer').classList.remove('empty')

        setTimeout(function() {
            status.textContent = '';
        }, 750);
    }
}

function restore_options() {
    chrome.storage.sync.get(['leerlingnummer'], function(leerlingnummer){
        if (typeof leerlingnummer.leerlingnummer === 'undefined'){
            document.querySelector('.leerlingnummer').value = ''
        }
        else{
            document.querySelector('.leerlingnummer').value = leerlingnummer.leerlingnummer;
        }
    })
    chrome.storage.sync.get(['wachtwoord'], function(wachtwoord){
        if (typeof wachtwoord.wachtwoord === 'undefined'){
            document.querySelector('.wachtwoord').value = ''
        }
        else{
            document.querySelector('.wachtwoord').value = wachtwoord.wachtwoord;
        }
    })
}

const togglePassword = document.querySelector('#togglePassword');
const password = document.querySelector('#id_password');

togglePassword.addEventListener('click', function (e) {
  const type = password.getAttribute('type') === 'password' ? 'text' : 'password';
  password.setAttribute('type', type);
  this.classList.toggle('fa-eye-slash');
  password.classList.toggle('fix-2px')
});