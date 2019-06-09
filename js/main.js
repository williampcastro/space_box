(()=>{

    const dados = [ 
        { 
          'id': 1,
          'foto': 'foto-alberto.jpg',
          'nome': 'Alberto',
          'cargo': 'Presidente',
          'idade': 20 
        },
        { 
          'id': 2,
          'foto': 'foto-bruno.jpg',
          'nome': 'Bruno',
          'cargo': 'Diretor',
          'idade': 21 
        },
        { 
          'id': 3,
          'foto': 'foto-helena.jpg',
          'nome': 'Helena',
          'cargo': 'Gerente',
          'idade': 22
        },
        { 
          'id': 4,
          'foto': 'foto-fernanda.jpg',
          'nome': 'Fernanda',
          'cargo': 'Desenvolvedor',
          'idade': 23
        },
        { 
          'id': 5,
          'foto': 'foto-diego.jpg',
          'nome': 'Diego',
          'cargo': 'Desenvolvedor',
          'idade': 24
        },
        { 
          'id': 6,
          'foto': 'foto-iris.jpg',
          'nome': 'Iris',
          'cargo': 'Desenvolvedor',
          'idade': 25 
        },
        { 
          'id': 7,
          'foto': 'foto-hugo.jpg',
          'nome': 'Hugo',
          'cargo': 'Desenvolvedor',
          'idade': 26 
        },
        { 
          'id': 8,
          'foto': 'foto-gustavo.jpg',
          'nome': 'Gustavo',
          'cargo': 'Desenvolvedor',
          'idade': 27
        },
        { 
          'id': 9,
          'foto': 'foto-gabriel.jpg',
          'nome': 'Gabriel',
          'cargo': 'Desenvolvedor',
          'idade': 28
        },
        { 
            'id': 19,
            'foto': 'foto-gabriel.jpg',
            'nome': 'Gabriel',
            'cargo': 'Desenvolvedor',
            'idade': 28
          }
      ]

    var profileSelected = {
        id: null,
        nome: null,
        idade: null,
        cargo: null,
        foto: null
    }

    const loadComponents = () => {

        dados.forEach( (dado, dadoIndex) => {
            createMiniCardCompoenet(dado, dadoIndex);            
        });

    }

    const createMiniCardCompoenet = (dado, dadoIndex) => {

    //     let divMiniCard = document.createElement('div');
    //     divMiniCard.className = 'col-12 grid-container';
    //     divMiniCard.id = `profile-${dado.id}`;

    //     let refereceElement = (document.getElementById(`profile-${parseInt(dado.id)}`)) ? document.getElementById(`profile-${parseInt(dado.id)}`) : document.getElementById('mini-cards');
    //     refereceElement.appendChild(divMiniCard);

        let divMiniCardShadown = document.createElement('div');
        divMiniCardShadown.className = 'card-shadow mini-card-shadow';
        
        refereceElement = document.getElementsByClassName('grid-container')[0];
        refereceElement.appendChild(divMiniCardShadown);

        let divCircle = document.createElement('div');
        divCircle.className = 'circle';
        
        let divContainer = document.createElement('div');
        divContainer.className = 'container';
        divContainer.id=`container-${dadoIndex}`;
        
        refereceElement = document.getElementsByClassName('card-shadow mini-card-shadow')[dadoIndex];
        divMiniCardShadown.appendChild(divCircle);
        refereceElement.appendChild(divContainer);
        
        let textCircle = document.createElement('p');
        textCircle.innerHTML = dado.id;
        refereceElement = document.getElementsByClassName('circle')[dadoIndex];
        refereceElement.appendChild(textCircle)

        let divChildrenContainer = document.createElement('div');
        divChildrenContainer.className='col-2';
        let divChildrenContainer2 = document.createElement('div');
        divChildrenContainer2.className = 'col-2 text-card text-mini-card';
        refereceElement = document.getElementById(`container-${dadoIndex}`);
        refereceElement.appendChild(divChildrenContainer);
        refereceElement.appendChild(divChildrenContainer2);

        let containerImg = document.createElement('div');
        containerImg.className = 'container';
        divChildrenContainer.appendChild(containerImg);
        let img = document.createElement('img');
        img.id='image-mini-card';
        img.alt='Avatar';
        img.setAttribute('src','https://www.w3schools.com/howto/img_avatar.png');
        containerImg.appendChild(img);


        let text = document.createElement('p');
        text.innerHTML = dado.nome;
        text.id="name-mini-card";
        divChildrenContainer2.appendChild(text);
        text = document.createElement('p');
        text.innerHTML = dado.cargo;
        text.id="office-mini-card";
        divChildrenContainer2.appendChild(text);

    }


    loadComponents();

})()
