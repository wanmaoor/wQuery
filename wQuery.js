// @ts-nocheck
window.wQuery = function(stuff) {
  let elements;
  if (typeof stuff === "string") {
    if (stuff.indexOf("<") === 0) {
      const template = document.createElement("template");
      template.innerHTML = stuff.trim();
      elements = [template.content.firstChild];
    } else {
      elements = document.querySelectorAll(stuff);
    }
  } else if (stuff instanceof Array) {
    elements = stuff;
  }
  const api = Object.create(wQuery.prototype);
  Object.assign(api, { elements, oldApi: stuff.oldApi });
  return api;
};
window.wQuery.prototype = {
  constructor: wQuery,
  wQuery: true,
  print(info) {
    console.log(`${info}:`, this.elements);
  },
  each(fn) {
    this.elements.forEach(element => {
      fn.call(null, element);
    });
  },
  on(event, fn) {
    this.each(element => {
      element.addEventListener(event, fn);
    });
  },
  addClass(className) {
    this.each(element => {
      element.classList.add(className);
    });
    return this;
  },
  find(selector) {
    let array = [];
    this.each(element => {
      array.push(...Array.from(element.querySelectorAll(selector)));
    });
    array.oldApi = this;
    return $(array);
  },
  end() {
    return this.oldApi;
  },
  parent() {
    let array = [];
    this.each(element => {
      if (array.indexOf(element.parentNode) === -1) {
        array.push(element.parentNode);
      }
    });
    return $(array);
  },
  children() {
    let array = [];
    this.each(element => {
      array.push(...Array.from(element.children));
    });
    return $(array);
  },
  remove() {
    this.each(element => {
      element.remove();
    });
  },
  get(index) {
    return this.elements[index];
  },
  appendTo(node, i = 0) {
    if (node instanceof HTMLElement) {
      this.each(el => {
        node.appendChild(el);
      });
    } else if (node.wQuery === true) {
      this.each(element => {
        node.get(i).appendChild(element);
      });
    }
  }
};
window.$ = window.wQuery;
