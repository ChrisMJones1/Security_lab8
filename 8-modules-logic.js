//LAB 8 - MODULES - LOGIC FILE
//THIS FILE CONTAINS ALL OF THE LOGIC THAT BELONGS WITH THE HTML PAGE - window.onload ETC. IN HERE YOU WILL REFERENCE AND USE YOUR MODULE.

window.onload = function () {
    class NameTag extends HTMLElement {
        constructor() {
            super();
            let template = document.getElementById("nametag_template");

            let templateContent = template.content;
            const shadowRoot = this.attachShadow({mode:'open'}).appendChild(
                templateContent.cloneNode(true));
        }
    }

    customElements.define('name-tag', NameTag);

    let nameclick = document.getElementById("tag");
    nameclick.addEventListener('click', myModNS.showCredit);
}