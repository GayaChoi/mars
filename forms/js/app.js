/* checkbox event */
var icon = `<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewbox="0 0 24 24" class="check">
                <path d="M9 21.035l-9-8.638 2.791-2.87 6.156 5.874 12.21-12.436 2.843 2.817z"></path>
            </svg>`;


var checkfunc = function(index) {
            if ($('.mars-checkbox').eq(index).is(':checked')) {
                 $('.checkbox-check-icon').eq(index).append(icon);
            } else {
                 $('.check').eq(index).remove();
            }                 
        };


$('.mars-checkbox').each(function(index) { 
    /* 체크가 되었는 지 확인 */
    checkfunc(index);
    
    /* click event */   
    $(this).eq(index).on('click',function() {
        checkfunc(index);  
    });    
});
