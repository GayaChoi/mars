/* checkbox event */
var icon = {
        checkbox: 
          `<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewbox="0 0 24 24" class="checkbox-check">
              <path d="M9 21.035l-9-8.638 2.791-2.87 6.156 5.874 12.21-12.436 2.843 2.817z"></path>
           </svg>`,
        radio: 
          `<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewbox="0 0 24 24" class="radio-check">
               <circle cx="12" cy="12" r="12"></circle>
           </svg>`,   
};        

var func = {
        checkbox: {
            check: 
              function(index) {
                 if ($('.mars-form-checkbox .is-checked').eq(index).is(':checked') || $('.mars-form-checkbox .is-checked').eq(index).is(':disabled')) {
                      $('.checkbox-check-icon').eq(index).html(icon.checkbox);
                  }       
              },
            
            click: 
              function(index) {
                if ($('.mars-form-checkbox .is-checked').eq(index).is(':checked')) {
                    $('.checkbox-check-icon').eq(index).html(icon.checkbox); 
                } else {
                    $('.checkbox-check-icon').eq(index).html('');
                }  
            }
        },

        radio: {
            check: 
              function(index) {
                 if ($('.mars-form-radio .is-checked').eq(index).is(':checked') || $('.mars-form-radio .is-checked').eq(index).is(':disabled')) {
                    $('.radio-check-icon').eq(index).html(icon.radio);
                 }  
              },
            
            click: 
              function(index) {
                if ($('.mars-form-radio .is-checked').eq(index).is(':checked')) {
                  $('.radio-check-icon').eq(index).html(icon.radio); 
                } else {
                  $('.radio-check-icon').eq(index).html('');
                }  
            }
        },
};


/* checkbox */
$('.mars-form-checkbox .is-checked').each(function(index) { 
    /* 체크가 되었는 지 확인 */
    func.checkbox.check(index);
    
    $('.mars-form-checkbox .is-checked').eq(index).on('click',function() {
        func.checkbox.click(index);
    });
});

/* radio */
$('.mars-form-radio .is-checked').each(function(index) { 
    /* 체크가 되었는 지 확인 */
    func.radio.check(index);

    $('.mars-form-radio .is-checked').eq(index).on('click',function() {
        func.radio.click(index);
    });
});