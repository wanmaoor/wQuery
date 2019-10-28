// @ts-nocheck
window.wQuery = function(selectorOrArrayOrTemplate) {
  let elements;
  if (typeof selectorOrArrayOrTemplate === "string") {
    if (selectorOrArrayOrTemplate[0] === "<") {
      const template = document.createElement("template");
      template.innerHTML = selectorOrArrayOrTemplate.trim();
      elements = [template.content.firstChild];
    } else {
      elements = document.querySelectorAll(selectorOrArrayOrTemplate);
    }
  } else if (selectorOrArrayOrTemplate instanceof Array) {
    elements = selectorOrArrayOrTemplate;
  }
  return {
    w: true,
    oldApi: selectorOrArrayOrTemplate.oldApi,
    addClass(className) {
      elements.forEach(element => {
        element.classList.add(className);
      });
      return this;
    },
    find(selector) {
      let array = [];
      elements.forEach(element => {
        array = array.concat(Array.from(element.querySelectorAll(selector)));
      });
      array.oldApi = this;
      return wQuery(array);
    },
    end() {
      return this.oldApi;
    },
    each(fn) {
      for (let i = 0; i < elements.length; i++) {
        fn.call(null, elements[i], i);
      }
      return this;
    },
    parent() {
      let array = [];
      this.each(node => {
        if (array.indexOf(node.parentNode) === -1) {
          array.push(node.parentNode);
        }
      });
      return wQuery(array);
    },
    children() {
      let array = [];
      this.each(node => {
        if (array.indexOf(node.parentNode) === -1) {
          array.push(...node.children);
        }
      });
      return wQuery(array);
    },
    get(index) {
      return elements[index];
    },
    appendTo(node) {
      if (node instanceof Element) {
        this.each(el => {
          node.appendChild(el);
        });
      } else if(node.w === true){
        this.each(el => {
          node.get(0).appendChild(el)
        });
      }
    },
    print() {
      console.log(elements);
    }
  };
};

window.$ = window.wQuery;
