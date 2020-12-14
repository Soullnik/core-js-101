const cssSelectorBuilder = {
  element(value) {
    this.elem = value;
    return this;
  },

  id(value) {
    this.Id = value;
    return this;
  },

  class(value) {
    this.classes = this.classes ? [...this.classes, value] : [value];
    return this;
  },

  attr(value) {
    this.attribute = value;
    return this;
  },

  pseudoClass(value) {
    this.pseudoClasses = this.pseudoClasses
      ? [...this.pseudoClasses, value]
      : [value];
    return this;
  },

  pseudoElement(value) {
    this.pseudoElem = value;
    return this;
  },

  combine(selector1, combinator, selector2) {
    console.log(selector1.stringify());
    console.log(combinator);
    console.log(selector2.stringify());
    // console.log(`${selector1.stringify()}`);
    // console.log(`${combinator}`);
    // const combine = `${selector1.stringify()} ${combinator} ${selector2.stringify()}`;
    // return combine;
  },

  stringify() {
    const res = [];
    if (this.elem) res.push(`${this.elem}`);
    if (this.Id) res.push(`#${this.Id}`);
    if (this.classes) res.push(...this.classes.map((c) => `.${c}`).join(''));
    if (this.attribute) res.push(`[${this.attribute}]`);
    if (this.pseudoClasses) res.push(...this.pseudoClasses.map((pc) => `:${pc}`));
    if (this.pseudoElem) res.push(`::${this.pseudoElem}`);
    this.elem = undefined;
    this.Id = undefined;
    this.classes = undefined;
    this.attribute = undefined;
    this.pseudoClasses = undefined;
    this.pseudoElem = undefined;
    return res.join('');
  },
};

cssSelectorBuilder.combine(
  cssSelectorBuilder.element('p').id('introduction'),
  '~',
  cssSelectorBuilder.element('a').attr('href$=".png"'),
);
// 'div#main.container.draggable + table#data ~ tr:nth-of-type(even)   td:nth-of-type(even)',


// builder.combine(
//   builder.element('p').pseudoClass('focus'),
//   '>',
//   builder.element('a').attr('href$=".png"'),
