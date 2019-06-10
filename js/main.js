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
        dados.forEach((dado, profileIndex) => {
            createMiniCardComponent(dado, profileIndex);
        });
    }

    const factoryElement = (elementType, className, id, text, eventName, functionName) => {
        let element = document.createElement(elementType);
        if (className) element.className = className;
        if (id) element.id = id;
        if(text) element.innerHTML = text;
        if (eventName && functionName) element.addEventListener(eventName, functionName);
        return element;
    }

    const factoryImageElement = (elementType, className, id, alt, atribute, valueAtribute) => {
        let img = document.createElement(elementType);
        if(className) img.className = className;
        if(id) img.id = id;
        if(alt) img.alt = alt;
        if(atribute && valueAtribute) img.setAttribute(atribute, valueAtribute);
        return img;
    }

    const appendElement = (element, elementToAppend, referenceName, typeReference, indexReference) => {
        if(element){
            element.appendChild(elementToAppend)
        } else {
            let referencedElement = null;
            if (typeReference === 'id') referencedElement = document.getElementById(referenceName);
            else if (typeReference === 'class') referencedElement = document.getElementsByClassName(referenceName)[indexReference];
            referencedElement.appendChild(elementToAppend);
        }
    }

    const createMiniCardComponent = (profile, profileIndex) => {

        let divMiniCardShadown = factoryElement('div','card-shadow mini-card-shadow', `profile-${profileIndex}`, null, 'click', showProfileSelected);
        let divCircle = factoryElement('div','circle');
        let divContainer = factoryElement('div','container',`container-${profileIndex}`);
        let pTextCircle = factoryElement('p', null, null, profile.id);
        let divChildContainer = factoryElement('div', 'col-2');
        let divChildContainer2 = factoryElement('div', 'col-2 text-card text-mini-card');
        let containerImg = factoryElement('div', 'container');
        let nameElement = factoryElement('p', null, 'name-mini-card', profile.nome);
        let officeElement = factoryElement('p', null, 'office-mini-card', profile.cargo);
        let img = factoryImageElement('img', null, 'image-mini-card', 'Avatar', 'src', profile.foto);

        appendElement(null, divMiniCardShadown, 'grid-container', 'class', 0);
        appendElement(divMiniCardShadown, divCircle);
        appendElement(null, divContainer, 'card-shadow mini-card-shadow', 'class', profileIndex);
        appendElement(null, pTextCircle,'circle', 'class', profileIndex);
        appendElement(null, divChildContainer, `container-${profileIndex}`, 'id');
        appendElement(null, divChildContainer2, `container-${profileIndex}`, 'id');
        appendElement(divChildContainer, containerImg);
        appendElement(containerImg, img);
        appendElement(divChildContainer2, nameElement);
        appendElement(divChildContainer2, officeElement);

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
