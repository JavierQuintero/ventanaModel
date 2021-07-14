// Crear elementos con atributos e hijo
const createCustomElement = (element,attributes,children) => {
  let customElement = document.createElement(element);
  if (children !== undefined) children.forEach(el => {
    if (el.nodeType) {
      if (el.nodeType === 1 || el.nodeType === 11) customElement.appendChild(el);
    } else {
      customElement.innerHTML += el;
    }
  });
  addAttributes(customElement,attributes);
  return customElement;
};

// Añadir un objeto de atributos a un elemento
const addAttributes = (element, attrObj) => {
  for (let attr in attrObj) {
    if (attrObj.hasOwnProperty(attr)) element.setAttribute(attr,attrObj[attr])
  }
};
 
const edModal = content => {
    const modalContentEl = createCustomElement('div', {
        id: "ed-modal-content",
        class: "ed-modal-content"
      }, [content]),
      modalEl = createCustomElement('div', {
        id: "ed-modal-container",
        class: "ed-modal-container"
      }, [modalContentEl]);

  // Imprimir modal
  document.body.appendChild(modalEl);

  // Remover modal
  const removeModal = () => document.body.removeChild(modalEl);

  // cerrar modal con click
  modalEl.addEventListener('click', e => {
    if (e.target === modalEl) removeModal();
  });

  // cerrar modal con escape
  const offCloseModalEsc = () => removeEventListener('keyup', closeModalEsc);
  const closeModalEsc = e => {
    if (e.key === "Escape") {
      removeModal();
      offCloseModalEsc();
    }
  };
  addEventListener('keyup', closeModalEsc);
};
edModal('Hola mundo')