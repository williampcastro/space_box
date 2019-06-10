(() => {

    const dados = [
        {
            'id': 1,
            'foto': './images/01.jpeg',
            'nome': 'Alberto',
            'cargo': 'Presidente',
            'idade': 20
        },
        {
            'id': 2,
            'foto': './images/02.jpeg',
            'nome': 'Bruno',
            'cargo': 'Diretor',
            'idade': 21
        },
        {
            'id': 3,
            'foto': './images/03.jpeg',
            'nome': 'Helena',
            'cargo': 'Gerente',
            'idade': 22
        },
        {
            'id': 4,
            'foto': './images/04.jpeg',
            'nome': 'Fernanda',
            'cargo': 'Desenvolvedor',
            'idade': 23
        },
        {
            'id': 5,
            'foto': './images/05.jpeg',
            'nome': 'Diego',
            'cargo': 'Desenvolvedor',
            'idade': 24
        },
        {
            'id': 6,
            'foto': './images/06.jpeg',
            'nome': 'Iris',
            'cargo': 'Desenvolvedor',
            'idade': 25
        },
        {
            'id': 7,
            'foto': './images/07.jpeg',
            'nome': 'Hugo',
            'cargo': 'Desenvolvedor',
            'idade': 26
        },
        {
            'id': 8,
            'foto': './images/08.jpeg',
            'nome': 'Gustavo',
            'cargo': 'Desenvolvedor',
            'idade': 27
        },
        {
            'id': 9,
            'foto': './images/09.jpeg',
            'nome': 'Gabriel',
            'cargo': 'Desenvolvedor',
            'idade': 28
        }
    ];

    const loadComponents = () => {

        dados.forEach((dado, dadoIndex) => {
            createMiniCardCompoenet(dado, dadoIndex);
        });

    }

    const createMiniCardCompoenet = (dado, dadoIndex) => {

        let divMiniCardShadown = document.createElement('div');
        divMiniCardShadown.className = 'card-shadow mini-card-shadow';
        divMiniCardShadown.id = `profile-${dadoIndex}`;
        divMiniCardShadown.addEventListener('click', showProfileSelected);

        refereceElement = document.getElementsByClassName('grid-container')[0];
        refereceElement.appendChild(divMiniCardShadown);

        let divCircle = document.createElement('div');
        divCircle.className = 'circle';

        let divContainer = document.createElement('div');
        divContainer.className = 'container';
        divContainer.id = `container-${dadoIndex}`;

        refereceElement = document.getElementsByClassName('card-shadow mini-card-shadow')[dadoIndex];
        divMiniCardShadown.appendChild(divCircle);
        refereceElement.appendChild(divContainer);

        let textCircle = document.createElement('p');
        textCircle.innerHTML = dado.id;
        refereceElement = document.getElementsByClassName('circle')[dadoIndex];
        refereceElement.appendChild(textCircle)

        let divChildrenContainer = document.createElement('div');
        divChildrenContainer.className = 'col-2';
        let divChildrenContainer2 = document.createElement('div');
        divChildrenContainer2.className = 'col-2 text-card text-mini-card';
        refereceElement = document.getElementById(`container-${dadoIndex}`);
        refereceElement.appendChild(divChildrenContainer);
        refereceElement.appendChild(divChildrenContainer2);

        let containerImg = document.createElement('div');
        containerImg.className = 'container';
        divChildrenContainer.appendChild(containerImg);
        let img = document.createElement('img');
        img.id = 'image-mini-card';
        img.alt = 'Avatar';
        img.setAttribute('src', dado.foto);
        containerImg.appendChild(img);


        let text = document.createElement('p');
        text.innerHTML = dado.nome;
        text.id = "name-mini-card";
        divChildrenContainer2.appendChild(text);
        text = document.createElement('p');
        text.innerHTML = dado.cargo;
        text.id = "office-mini-card";
        divChildrenContainer2.appendChild(text);

    }

    const showProfileSelected = (event) => {

        let indexProfile = event.currentTarget.id.split("-")[1];

        let profile = dados[indexProfile];

        document.getElementById('selected-nome').innerHTML = profile.nome;
        document.getElementById('selected-cargo').innerHTML = profile.cargo;
        document.getElementById('selected-idade').innerHTML = profile.idade;
        document.getElementById('selected-foto').src = profile.foto;

    }


    loadComponents();

})()
