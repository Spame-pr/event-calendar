import filingTable from "./filingTable";

//Here you can watch events for a specific person.


function chooseName() {

    let selectName = document.getElementById('nameSelect');
    let td = document.getElementsByTagName('td')

    selectName.addEventListener('change', () => {

        for (let i = 0; i < td.length; i++) {
            let leon = td[i].hasAttribute('data-leon'),
                lena = td[i].hasAttribute('data-lena'),
                bob = td[i].hasAttribute('data-bob'),
                maria = td[i].hasAttribute('data-maria');


            if (selectName.options[selectName.selectedIndex].text === 'All') {
                location.href = location.href
            }

            else if (selectName.options[selectName.selectedIndex].text === 'Leon' && leon) {
                td[i].className = 'event';
            }

            else if (selectName.options[selectName.selectedIndex].text === 'Elena' && lena) {
                td[i].className = 'event';
            }

            else if (selectName.options[selectName.selectedIndex].text === 'Bob' && bob) {
                td[i].className = 'event';
            }

            else if (selectName.options[selectName.selectedIndex].text === 'Maria' && maria) {
                td[i].className = 'event';
            }

            else {
                td[i].className = 'hide'
            }
        }
    })
}

export default chooseName;