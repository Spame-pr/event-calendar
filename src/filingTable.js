

//Here i get objects from localStorage and write it into the cells of table

function filingTable() {

       let td = document.getElementsByTagName('td')
       let L = localStorage;
       let even, localKey, day, time, i, names;

       for (even, localKey, day, time, names, i = 0; i < L.length; i++) {

              localKey = L.key(i);
              

              day = JSON.parse(L.getItem(localKey)).day
              time = JSON.parse(L.getItem(localKey)).time
              even = JSON.parse(L.getItem(localKey)).event
              names = JSON.parse(L.getItem(localKey)).name


              //Monday

              if (day === 'mon' && time === 'ten') {
                     let val = `${even}`
                     td[1].setAttribute('data-' + `${names}`, null)
                     td[1].className = 'event'
                     td[1].innerHTML = val;
                     td[1].onclick = function () {
                            if (confirm('Are you sure you want to delete?')) {
                                   localStorage.removeItem(val)
                                   location.href = location.href;
                            }
                            
                     }

              }

              if (day === 'mon' && time === 'elev') {
                     let val = `${even}`
                     td[7].setAttribute('data-' + `${names}`, null)
                     td[7].className = 'event'
                     td[7].innerHTML = val;
                     td[7].onclick = function () {
                            if (confirm('Are you sure you want to delete?')) {
                                   localStorage.removeItem(val)
                                   location.href = location.href;
                            }

                     }
              }
              if (day === 'mon' && time === 'twel') {
                     let val = `${even}`
                     td[13].setAttribute('data-' + `${names}`, null)
                     td[13].className = 'event'
                     td[13].innerHTML = val;

                     td[13].onclick = function () {
                            if (confirm('Are you sure you want to delete?')) {
                                   localStorage.removeItem(val)
                                   location.href = location.href;
                            }

                     }
              }

              if (day === 'mon' && time === 'thir') {
                     let val = `${even}`
                     td[19].setAttribute('data-' + `${names}`, null)
                     td[19].className = 'event'
                     td[19].innerHTML = val;

                     td[19].onclick = function () {
                            if (confirm('Are you sure you want to delete?')) {
                                   localStorage.removeItem(val)
                                   location.href = location.href;
                            }
                     }
              }

              if (day === 'mon' && time === 'fourt') {
                     let val = `${even}`
                     td[25].setAttribute('data-' + `${names}`, null)
                     td[25].className = 'event'
                     td[25].innerHTML = val;

                     td[25].onclick = function () {
                            if (confirm('Are you sure you want to delete?')) {
                                   localStorage.removeItem(val)
                                   location.href = location.href;
                            }
                     }
              }

              if (day === 'mon' && time === 'fift') {
                     let val = `${even}`
                     td[31].setAttribute('data-' + `${names}`, null)
                     td[31].className = 'event'
                     td[31].innerHTML = val;

                     td[31].onclick = function () {
                            if (confirm('Are you sure you want to delete?')) {
                                   localStorage.removeItem(val)
                                   location.href = location.href;
                            }
                     }
              }

              if (day === 'mon' && time === 'sixt') {
                     let val = `${even}`
                     td[37].setAttribute('data-' + `${names}`, null)
                     td[37].className = 'event'
                     td[37].innerHTML = val;

                     td[37].onclick = function () {
                            if (confirm('Are you sure you want to delete?')) {
                                   localStorage.removeItem(val)
                                   location.href = location.href;
                            }
                     }
              }

              if (day === 'mon' && time === 'sevent') {
                     let val = `${even}`
                     td[43].setAttribute('data-' + `${names}`, null)
                     td[43].className = 'event'
                     td[43].innerHTML = val;

                     td[43].onclick = function () {
                            if (confirm('Are you sure you want to delete?')) {
                                   localStorage.removeItem(val)
                                   location.href = location.href;
                            }
                     }
              }

              if (day === 'mon' && time === 'eight') {
                     let val = `${even}`
                     td[49].setAttribute('data-' + `${names}`, null)
                     td[49].className = 'event'
                     td[49].innerHTML = val;

                     td[49].onclick = function () {
                            if (confirm('Are you sure you want to delete?')) {
                                   localStorage.removeItem(val)
                                   location.href = location.href;
                            }
                     }
              }
              //Tuesday

              if (day === 'tue' && time === 'ten') {
                     let val = `${even}`
                     td[2].setAttribute('data-' + `${names}`, null)
                     td[2].className = 'event'
                     td[2].innerHTML = even;

                     td[2].onclick = function () {
                            if (confirm('Are you sure you want to delete?')) {
                                   localStorage.removeItem(val)
                                   location.href = location.href;
                            }
                     }
              }

              if (day === 'tue' && time === 'elev') {
                     let val = `${even}`
                     td[8].setAttribute('data-' + `${names}`, null)
                     td[8].className = 'event'
                     td[8].innerHTML = even;

                     td[8].onclick = function () {
                            if (confirm('Are you sure you want to delete?')) {
                                   localStorage.removeItem(val)
                                   location.href = location.href;
                            }
                     }
              }

              if (day === 'tue' && time === 'twel') {
                     let val = `${even}`
                     td[14].setAttribute('data-' + `${names}`, null)
                     td[14].className = 'event'
                     td[14].innerHTML = even;

                     td[14].onclick = function () {
                            if (confirm('Are you sure you want to delete?')) {
                                   localStorage.removeItem(val)
                                   location.href = location.href;
                            }
                     }
              }

              if (day === 'tue' && time === 'thir') {
                     let val = `${even}`
                     td[20].setAttribute('data-' + `${names}`, null)
                     td[20].className = 'event'
                     td[20].innerHTML = even;

                     td[20].onclick = function () {
                            if (confirm('Are you sure you want to delete?')) {
                                   localStorage.removeItem(val)
                                   location.href = location.href;
                            }
                     }
              }

              if (day === 'tue' && time === 'fourt') {
                     let val = `${even}`
                     td[26].setAttribute('data-' + `${names}`, null)
                     td[26].className = 'event'
                     td[26].innerHTML = even;

                     td[26].onclick = function () {
                            if (confirm('Are you sure you want to delete?')) {
                                   localStorage.removeItem(val)
                                   location.href = location.href;
                            }
                     }
              }

              if (day === 'tue' && time === 'fift') {
                     let val = `${even}`
                     td[32].setAttribute('data-' + `${names}`, null)
                     td[32].className = 'event'
                     td[32].innerHTML = even;

                     td[32].onclick = function () {
                            if (confirm('Are you sure you want to delete?')) {
                                   localStorage.removeItem(val)
                                   location.href = location.href;
                            }
                     }
              }

              if (day === 'tue' && time === 'sixt') {
                     let val = `${even}`
                     td[38].setAttribute('data-' + `${names}`, null)
                     td[38].className = 'event'
                     td[38].innerHTML = even;

                     td[38].onclick = function () {
                            if (confirm('Are you sure you want to delete?')) {
                                   localStorage.removeItem(val)
                                   location.href = location.href;
                            }
                     }
              }

              if (day === 'tue' && time === 'sevent') {
                     let val = `${even}`
                     td[44].setAttribute('data-' + `${names}`, null)
                     td[44].className = 'event'
                     td[44].innerHTML = even;

                     td[44].onclick = function () {
                            if (confirm('Are you sure you want to delete?')) {
                                   localStorage.removeItem(val)
                                   location.href = location.href;
                            }
                     }
              }

              if (day === 'tue' && time === 'eight') {
                     let val = `${even}`
                     td[50].setAttribute('data-' + `${names}`, null)
                     td[50].className = 'event'
                     td[50].innerHTML = even;

                     td[50].onclick = function () {
                            if (confirm('Are you sure you want to delete?')) {
                                   localStorage.removeItem(val)
                                   location.href = location.href;
                            }
                     }
              }

              //Wednesday

              if (day === 'wed' && time === 'ten') {
                     let val = `${even}`
                     td[3].setAttribute('data-' + `${names}`, null)
                     td[3].className = 'event'
                     td[3].innerHTML = val;
                     td[3].onclick = function () {
                            if (confirm('Are you sure you want to delete?')) {
                                   localStorage.removeItem(val)
                                   location.href = location.href;
                            }
                     }

              }

              if (day === 'wed' && time === 'elev') {
                     let val = `${even}`
                     td[9].setAttribute('data-' + `${names}`, null)
                     td[9].className = 'event'
                     td[9].innerHTML = val;
                     td[9].onclick = function () {
                            if (confirm('Are you sure you want to delete?')) {
                                   localStorage.removeItem(val)
                                   location.href = location.href;
                            }

                     }
              }
              if (day === 'wed' && time === 'twel') {
                     let val = `${even}`
                     td[15].setAttribute('data-' + `${names}`, null)
                     td[15].className = 'event'
                     td[15].innerHTML = val;

                     td[15].onclick = function () {
                            if (confirm('Are you sure you want to delete?')) {
                                   localStorage.removeItem(val)
                                   location.href = location.href;
                            }

                     }
              }

              if (day === 'wed' && time === 'thir') {
                     let val = `${even}`
                     td[21].setAttribute('data-' + `${names}`, null)
                     td[21].className = 'event'
                     td[21].innerHTML = val;

                     td[21].onclick = function () {
                            if (confirm('Are you sure you want to delete?')) {
                                   localStorage.removeItem(val)
                                   location.href = location.href;
                            }
                     }
              }

              if (day === 'wed' && time === 'fourt') {
                     let val = `${even}`
                     td[27].setAttribute('data-' + `${names}`, null)
                     td[27].className = 'event'
                     td[27].innerHTML = val;

                     td[27].onclick = function () {
                            if (confirm('Are you sure you want to delete?')) {
                                   localStorage.removeItem(val)
                                   location.href = location.href;
                            }
                     }
              }

              if (day === 'wed' && time === 'fift') {
                     let val = `${even}`
                     td[33].setAttribute('data-' + `${names}`, null)
                     td[33].className = 'event'
                     td[33].innerHTML = val;

                     td[33].onclick = function () {
                            if (confirm('Are you sure you want to delete?')) {
                                   localStorage.removeItem(val)
                                   location.href = location.href;
                            }
                     }
              }

              if (day === 'wed' && time === 'sixt') {
                     let val = `${even}`
                     td[39].setAttribute('data-' + `${names}`, null)
                     td[39].className = 'event'
                     td[39].innerHTML = val;

                     td[39].onclick = function () {
                            if (confirm('Are you sure you want to delete?')) {
                                   localStorage.removeItem(val)
                                   location.href = location.href;
                            }
                     }
              }

              if (day === 'wed' && time === 'sevent') {
                     let val = `${even}`
                     td[45].setAttribute('data-' + `${names}`, null)
                     td[45].className = 'event'
                     td[45].innerHTML = val;

                     td[45].onclick = function () {
                            if (confirm('Are you sure you want to delete?')) {
                                   localStorage.removeItem(val)
                                   location.href = location.href;
                            }
                     }
              }

              if (day === 'wed' && time === 'eight') {
                     let val = `${even}`
                     td[51].setAttribute('data-' + `${names}`, null)
                     td[51].className = 'event'
                     td[51].innerHTML = val;

                     td[51].onclick = function () {
                            if (confirm('Are you sure you want to delete?')) {
                                   localStorage.removeItem(val)
                                   location.href = location.href;
                            }
                     }
              }

              //Thursday

              if (day === 'thu' && time === 'ten') {
                     let val = `${even}`
                     td[4].setAttribute('data-' + `${names}`, null)
                     td[4].className = 'event'
                     td[4].innerHTML = val;
                     td[4].onclick = function () {
                            if (confirm('Are you sure you want to delete?')) {
                                   localStorage.removeItem(val)
                                   location.href = location.href;
                            }

                     }
              }

              if (day === 'thu' && time === 'elev') {
                     let val = `${even}`
                     td[10].setAttribute('data-' + `${names}`, null)
                     td[10].className = 'event'
                     td[10].innerHTML = val;
                     td[10].onclick = function () {
                            if (confirm('Are you sure you want to delete?')) {
                                   localStorage.removeItem(val)
                                   location.href = location.href;
                            }

                     }
              }
              if (day === 'thu' && time === 'twel') {
                     let val = `${even}`
                     td[16].setAttribute('data-' + `${names}`, null)
                     td[16].className = 'event'
                     td[16].innerHTML = val;

                     td[16].onclick = function () {
                            if (confirm('Are you sure you want to delete?')) {
                                   localStorage.removeItem(val)
                                   location.href = location.href;
                            }

                     }
              }

              if (day === 'thu' && time === 'thir') {
                     let val = `${even}`
                     td[22].setAttribute('data-' + `${names}`, null)
                     td[22].className = 'event'
                     td[22].innerHTML = val;

                     td[22].onclick = function () {
                            if (confirm('Are you sure you want to delete?')) {
                                   localStorage.removeItem(val)
                                   location.href = location.href;
                            }
                     }
              }

              if (day === 'thu' && time === 'fourt') {
                     let val = `${even}`
                     td[28].setAttribute('data-' + `${names}`, null)
                     td[28].className = 'event'
                     td[28].innerHTML = val;

                     td[28].onclick = function () {
                            if (confirm('Are you sure you want to delete?')) {
                                   localStorage.removeItem(val)
                                   location.href = location.href;
                            }
                     }
              }

              if (day === 'thu' && time === 'fift') {
                     let val = `${even}`
                     td[34].setAttribute('data-' + `${names}`, null)
                     td[34].className = 'event'
                     td[34].innerHTML = val;

                     td[34].onclick = function () {
                            if (confirm('Are you sure you want to delete?')) {
                                   localStorage.removeItem(val)
                                   location.href = location.href;
                            }
                     }
              }

              if (day === 'thu' && time === 'sixt') {
                     let val = `${even}`
                     td[40].setAttribute('data-' + `${names}`, null)
                     td[40].className = 'event'
                     td[40].innerHTML = val;

                     td[40].onclick = function () {
                            if (confirm('Are you sure you want to delete?')) {
                                   localStorage.removeItem(val)
                                   location.href = location.href;
                            }
                     }
              }

              if (day === 'thu' && time === 'sevent') {
                     let val = `${even}`
                     td[46].setAttribute('data-' + `${names}`, null)
                     td[46].className = 'event'
                     td[46].innerHTML = val;

                     td[46].onclick = function () {
                            if (confirm('Are you sure you want to delete?')) {
                                   localStorage.removeItem(val)
                                   location.href = location.href;
                            }
                     }
              }

              if (day === 'thu' && time === 'eight') {
                     let val = `${even}`
                     td[52].setAttribute('data-' + `${names}`, null)
                     td[52].className = 'event'
                     td[52].innerHTML = val;

                     td[52].onclick = function () {
                            if (confirm('Are you sure you want to delete?')) {
                                   localStorage.removeItem(val)
                                   location.href = location.href;
                            }
                     }
              }

              //Friday

              if (day === 'fri' && time === 'ten') {
                     let val = `${even}`
                     td[5].setAttribute('data-' + `${names}`, null)
                     td[5].className = 'event'
                     td[5].innerHTML = val;
                     td[5].onclick = function () {
                            if (confirm('Are you sure you want to delete?')) {
                                   localStorage.removeItem(val)
                                   location.href = location.href;
                            }

                     }
              }

              if (day === 'fri' && time === 'elev') {
                     let val = `${even}`
                     td[11].setAttribute('data-' + `${names}`, null)
                     td[11].className = 'event'
                     td[11].innerHTML = val;
                     td[11].onclick = function () {
                            if (confirm('Are you sure you want to delete?')) {
                                   localStorage.removeItem(val)
                                   location.href = location.href;
                            }

                     }
              }
              if (day === 'fri' && time === 'twel') {
                     let val = `${even}`
                     td[17].setAttribute('data-' + `${names}`, null)
                     td[17].className = 'event'
                     td[17].innerHTML = val;

                     td[17].onclick = function () {
                            if (confirm('Are you sure you want to delete?')) {
                                   localStorage.removeItem(val)
                                   location.href = location.href;
                            }

                     }
              }

              if (day === 'fri' && time === 'thir') {
                     let val = `${even}`
                     td[23].setAttribute('data-' + `${names}`, null)
                     td[23].className = 'event'
                     td[23].innerHTML = val;

                     td[23].onclick = function () {
                            if (confirm('Are you sure you want to delete?')) {
                                   localStorage.removeItem(val)
                                   location.href = location.href;
                            }
                     }
              }

              if (day === 'fri' && time === 'fourt') {
                     let val = `${even}`
                     td[29].setAttribute('data-' + `${names}`, null)
                     td[29].className = 'event'
                     td[29].innerHTML = val;

                     td[29].onclick = function () {
                            if (confirm('Are you sure you want to delete?')) {
                                   localStorage.removeItem(val)
                                   location.href = location.href;
                            }
                     }
              }

              if (day === 'fri' && time === 'fift') {
                     let val = `${even}`
                     td[35].setAttribute('data-' + `${names}`, null)
                     td[35].className = 'event'
                     td[35].innerHTML = val;

                     td[35].onclick = function () {
                            if (confirm('Are you sure you want to delete?')) {
                                   localStorage.removeItem(val)
                                   location.href = location.href;
                            }
                     }
              }

              if (day === 'fri' && time === 'sixt') {
                     let val = `${even}`
                     td[41].setAttribute('data-' + `${names}`, null)
                     td[41].className = 'event'
                     td[41].innerHTML = val;

                     td[41].onclick = function () {
                            if (confirm('Are you sure you want to delete?')) {
                                   localStorage.removeItem(val)
                                   location.href = location.href;
                            }
                     }
              }

              if (day === 'fri' && time === 'sevent') {
                     let val = `${even}`
                     td[47].setAttribute('data-' + `${names}`, null)
                     td[47].className = 'event'
                     td[47].innerHTML = val;

                     td[47].onclick = function () {
                            if (confirm('Are you sure you want to delete?')) {
                                   localStorage.removeItem(val)
                                   location.href = location.href;
                            }
                     }
              }

              if (day === 'fri' && time === 'eight') {
                     let val = `${even}`
                     td[53].setAttribute('data-' + `${names}`, null)
                     td[53].className = 'event'
                     td[53].innerHTML = val;

                     td[53].onclick = function () {
                            if (confirm('Are you sure you want to delete?')) {
                                   localStorage.removeItem(val)
                                   location.href = location.href;
                            }
                     }
              }
       }
       
}

export default filingTable;