class MySlider extends HTMLElement{
    constructor(){
        super();
        this.attachShadow({mode:'open'});
        
    const myslider = document.createElement('input');
    myslider.type = 'range';
    myslider.min = '0';
    myslider.max = '100';
    myslider.value = '30';
    

    const valueDisplay = document.createElement('span');
    valueDisplay.textContent = `Value: ${myslider.value}`;

    myslider.addEventListener('input', () => {
        valueDisplay.textContent = `Value: ${myslider.value}`;
      });

      this.shadowRoot.appendChild(myslider);
    this.shadowRoot.appendChild(valueDisplay);
        
    }
    
}
customElements.define('my-slider',MySlider);