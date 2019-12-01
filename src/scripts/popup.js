window.onload = function() {
    function renderPopupTimeline() {
        const trigger = document.querySelector('.specialists__desc-item-button--timeline');
        const popup = document.querySelector('.popup--timing');
        console.log('zdes est');
        trigger.addEventListener('click', e => {
            console.log('click po triggery');
            e.preventDefault();
            popup.classList.add('active');
        })

        popup.addEventListener('click', e => {
            e.preventDefault();
            popup.classList.remove('active');
        })
    };
    renderPopupTimeline();

    function renderPopupPeople() {
        const trigger = document.querySelector('.specialists__desc-item-button--people');
        const popup = document.querySelector('.popup--people');
        console.log('zdes est2');
        trigger.addEventListener('click', e => {
            e.preventDefault();
            console.log('click po triggery2');
            popup.classList.add('active');
        })

        popup.addEventListener('click', e => {
            e.preventDefault();
            popup.classList.remove('active');
        })
    };
    renderPopupPeople();
}