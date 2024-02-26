alert('Script loaded :)');

function initialize() {
    var formActivatorItems = document.querySelectorAll('.formactivator input[type=radio]');
    var submitButton = document.querySelector('input[type=submit]');

    function checkRadios() {
        var isAnyRadioWithValue2Checked = Array.from(formActivatorItems).some(radio => radio.value === '2' && radio.checked);
        submitButton.disabled = isAnyRadioWithValue2Checked;
    }

    formActivatorItems.forEach(function(radio) {
        radio.addEventListener('change', checkRadios);
    });

    checkRadios();
}

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initialize);
} else {
    initialize();
}