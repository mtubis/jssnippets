document.addEventListener('DOMContentLoaded', function() {
    var formActivatorItems = document.querySelectorAll('.formactivator input[type=radio]');
    var submitButton = document.querySelector('input[type=submit]');

    formActivatorItems.forEach(function(radio) {
        radio.addEventListener('change', function() {
            if (this.value === '2' && this.checked) {
                submitButton.disabled = true;
                console.log('disable button');
            } else {
                submitButton.disabled = false;
                console.log('enable button');
            }
        });
    });
});