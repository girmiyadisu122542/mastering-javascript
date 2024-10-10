//1

function HtmlElement() {
    this.click = function () {
        console.log('clicked');

    }
}

HtmlElement.prototype.focus = function () {
    console.log('focus');

}

function HtmlSelectElement(items = []) {
    this.items = items;
    this.addItem = function (item) {
        this.items.push(item);
    };

    this.removeItem = function (item) {
        this.items.splice(this.items.indexOf(item), 1);

    };

    this.render = function () {
        // let options = [];
        // for (let key of this.items)
        //     options.push('<options>' + key + '</options>');

        // return '<select>' + options.join(' ') + '</select>';
       return `<select> ${this.items.map(item => `<option> ${item}</option>`).join('')} </select>`;

    }
}
// baseHtmlSelectElement
// HtmlSelectElement.prototype = Object.create(HtmlElement.prototype)
HtmlSelectElement.prototype = new HtmlElement();

function HtmlImageElement(src) {
    this.src = src;
    this.render = function () {
        return `<img src="${this.src}"/>`;
    }
}

HtmlImageElement.prototype = new HtmlElement();

const elements = [
    new HtmlSelectElement(['1', '2', '3']),
    new HtmlImageElement('http://google.com/uploaded.jpg')
];

for(let element of  elements) {
   console.log(element.render());
   }
