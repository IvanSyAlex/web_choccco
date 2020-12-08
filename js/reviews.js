 function feedback(event){
    let client = event.target.dataset.open;
    if(!client){ return;}
    let photo = document.querySelector('.reviews__photo');
    let text = document.querySelector('.reviews__text p');
    let active = document.querySelectorAll('.avatar__item')


    let nextClient = new XMLHttpRequest();
    nextClient.open('GET', 'JSON/client.json');
    nextClient.send();
    nextClient.addEventListener('load',() => {
    let arr = JSON.parse(nextClient.responseText);

        for(i =0;i<arr.length;i++){
            const elem = arr[i];
            if(elem.number){
                if(elem.number === client){
                    photo.src =  elem.url;
                    text.innerHTML = elem.text;
                }
            }
        }
    })
     for(i=0; i<active.length; i++){

         if(active[i].dataset.link === client){
             active[i].classList.add("avatar__item--active");
         }else{
            active[i].classList.remove("avatar__item--active");
         }
     }
    
     
 }
 
 newClient = addEventListener('click',feedback);



