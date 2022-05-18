'use strict'

import{
    lerAlunos
} from './api.js'

const qualquernome = await lerAlunos()

console.log(qualquernome)


class card extends HTMLElement{
    constructor(){
        super();
        this.build()
    }
    build(){
        const shadow = this.attachShadow({mode:'open'})
        shadow.appendChild(this.styles())
        shadow.appendChild(this.createCard())
    }
    styles(){
        const style = document.createElement('style')
        style.textContent = `
        .card{
            width: ${this.tamanhoCard()};
            height:${this.tamanhoCard()};
            background-color: #bbcbcb;
            display: flex;
            flex-direction: column;
            justify-content: space-evenly;
            align-items: center;
            background-color:${this.bgcolor()};
        }
        .card-text{
            width: 50%;
            background-color: turquoise;
            padding: 4px;
            text-align: center;
            color: #ffffff;
            border-radius: 12px;
            text-transform: uppercase;
            box-shadow: 0 0 2px #000;
        }
        .card-image{
            
            width: 50%;
            height: 50%;
            border-radius: 50%;
            // background-image: url(/frameworkStudy/icones/4.png);
            background-image: url(${this.iconeCard()});
            background-size:cover ;
            box-shadow:  inset 0 0 12px #000;
        }
        div{
            width: 300px;
            height: 50px;
        }
        `
    return style
    }
    createCard(){
        const card = document.createElement('div')
        card.classList.add('card')
        card.innerHTML = `
        <div class="card">
        <div class="card-text">${this.nomeCard()}</div>
        <div class="card-image"></div>
        <div class="card-text">Ds2t</div>
        </div>
        `
        return card
    }
    bgcolor(){
        const color = this.getAttribute('data-bgcolor') ?? "#f00"
        return color
    }
    tamanhoCard(){
        const tamanho = this.getAttribute('data-tamanho') ?? "200px"
        return tamanho
    }
    nomeCard(){
        const nome = this.getAttribute('data-nome') ?? "Usuario"
        return nome
    }
    iconeCard(){
        const nome = this.getAttribute('data-icone') ?? "/JS/icones/4.png"
        return nome
    }
}
customElements.define('card-aluno',card)