const validFilds = (form,arrFileds) => {

    arrFileds.forEach((filed)=>{
        filed.removeClass("input--error");

    if(filed.val().trim()===""){
        filed.addClass("input--error");
    }
    });
    const errorFileds = form.find(".input--error");

    return errorFileds.length === 0;
}

$('.form').submit(e=>{
    e.preventDefault();

    const form = $(e.currentTarget);
    const name = form.find("[name='name']");
    const phone = form.find("[name='phone']");
    const comment = form.find("[name='comment']");
    const to = form.find("[name='to']");

    const inValid = validFilds(form,[name,phone,comment,to]);

    const modal = $("#modal");
    const content = modal.find(".modal__content");

    content.removeClass("error--modal");

     if(inValid){
        $.ajax({
            url: "https://webdev-api.loftschool.com/sendmail",
            method: "post",
            data: {
                name: name.val(),
                phone: phone.val(),
                comment: comment.val(),
                to: to.val()
             },
            success: data =>{
                 content.text(data.message);
        
                 $.fancybox.open({
                    src: "#modal",
                    type: "inline"
                 });
                 },
                 error: data =>{
                    content.addClass("error--modal");
                    content.text(' Не получилось отправиь сообщение');
                    $.fancybox.open({
                        src: "#modal",
                        type: "inline"
                     });
                 }
            });
     }


    // $.fancybox.open({
    //     src: "#modal",
    //     type: "inline"
    // })
});
//закрытие по кнопке
$('.app--button').click(e=>{
    e.preventDefault();
    $.fancybox.close();
});
