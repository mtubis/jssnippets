document.addEventListener('DOMContentLoaded', function() {
    var formActivatorItems = document.querySelectorAll('.formactivator input[type=radio]');
    var submitButton = document.querySelector('input[type=submit]');

    formActivatorItems.forEach(function(radio) {
        radio.addEventListener('change', function() {
            if (this.value === 'Nein' && this.checked) {
                submitButton.disabled = true;
            } else {
                submitButton.disabled = false;
            }
        });
    });
});