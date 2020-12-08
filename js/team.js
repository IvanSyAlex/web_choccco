
let team = document.querySelector('.team');


team.addEventListener("click", function (event) {

    const btnList = document.querySelectorAll('.team__button');
    const contentList = document.querySelectorAll('.team__content');
    let index = event.target;

    for (i = 0; i < btnList.length; i++) {
        if (index === btnList[i]) {
            let k = contentList[i].style.height;
            console.log(k);
            if (k == '0px' || k <= 0) {
                for (t = 0; t < btnList.length; t++) {
                    close(btnList[t], contentList[t]);
                }
                open(btnList[i], contentList[i]);
            } else {

                close(btnList[i], contentList[i]);
            }

        }
    }
});

function open(btn, content) {
    let tr = btn.querySelector('.team__triangle');
    content.style.height = '400px';
    tr.style.borderTop = '0px solid  green';
    tr.style.borderBottom = '10px solid  green';
}
function close(btn, content) {
    let tr = btn.querySelector('.team__triangle');
    content.style.height = 0;
    tr.style.borderTop = '10px solid  green';
    tr.style.borderBottom = '0px solid  green';
}