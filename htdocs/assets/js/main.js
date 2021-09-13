const FloatLabel = (() => {
  
    // add active class
    const handleFocus = (e) => {
      const target = e.target;
      target.parentNode.classList.add('active');
      target.setAttribute('placeholder', target.getAttribute('data-placeholder'));
    };
    
    // remove active class
    const handleBlur = (e) => {
      const target = e.target;
      if(!target.value) {
        target.parentNode.classList.remove('active');
      }
      target.removeAttribute('placeholder');
    };

    
    // register events
    const bindEvents = (element) => {
      const floatField = element.querySelector('input') || element.querySelector('textarea');
      floatField.addEventListener('focus', handleFocus);
      floatField.addEventListener('blur', handleBlur);
    };
    
    // get DOM elements
    const init = () => {
      const floatContainers = document.querySelectorAll('.input-group');
  
      floatContainers.forEach((element) => {
 
        if (element.querySelector('input') !== null && element.querySelector('input').value) {
            element.classList.add('active');
        }

        if(element.querySelector('textarea') !== null && element.querySelector('textarea').innerHTML){
            element.classList.add('active'); 
        }
  
        bindEvents(element);
      });
    };
    
    return {
      init: init
    };
  })();
  
  FloatLabel.init();

  