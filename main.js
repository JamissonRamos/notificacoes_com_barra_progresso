
function abrirCard ()
{
    idNotifications.classList.add("active");

    idBarraProgreco.classList.add("active");

    setTimeout(() => { idNotifications.classList.remove("active"); }, 5000);

    setTimeout(() => { idBarraProgreco.classList.remove("active"); }, 5300);
}


function configCard(type)
{
    
    switch (type) 
    {
        case 1:

            styleCard('green','sucesso','Cadastro com sucesso!','check');

            break;

        case 2:
            styleCard('orange','Alerta','Cadastro duplicado','warning_amber');

            break;

        case 3:
            styleCard('red','Erro','Erro no servidor tente novamente','close');

            break;
    
        default:

            break;
    };
};

function styleCard(cor, title, msg, icone)
{
    idNotifications.style.borderColor = cor;

    idBoxIcone.style.backgroundColor  = cor;

    idIcone.innerHTML = icone;

    idtitle.style.color = cor;

    idtitle.innerHTML = title;

    idMsg.innerHTML = msg;

    idClose.style.color = cor;

    idBarraProgreco.style.setProperty('--bg', cor); //muda a cor da barra de progresso
};

btn1.addEventListener("click", () => { abrirCard(); configCard(1)});

btn2.addEventListener("click", () => { abrirCard(); configCard(2)});

btn3.addEventListener("click", () => { abrirCard(); configCard(3)});



idClose.addEventListener("click", () => 
{
    idNotifications.classList.remove("active");

    setTimeout(() => { idBarraProgreco.classList.remove("active"); }, 300);
})