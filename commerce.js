var count = 0;
var number_item = document.querySelector('#number-item')
var increase = document.querySelector('#increase')
var decrease = document.querySelector('#decrease')


// adding and removing number of items 
increase.addEventListener('click', function(){
    count++;
    number_item.innerHTML = count
    
})

decrease.addEventListener('click', function(){
    if (count>0){
    count--;
    number_item.innerHTML = count
    }
    
})

//adding things to the cart
var addToCart = document.querySelector('#add-cart')
var price = document.querySelector('#price').innerHTML
// var items = number_item.innerHTML
var modal_body = document.querySelector('.modal-body')





addToCart.addEventListener('click', function(){
    modal_body.innerHTML = ''
    var div = document.createElement('div')
    div.className = 'row'
    var mode_image = document.createElement('div')
    mode_image.className = 'col-md-4'
    var image = document.createElement('img')
    image.src = 'images/image-product-1.jpg'
    image.style.height ='50px'
    image.style.paddingRight = '0px'
    image.style.marginRight = '0px'
    image.className = 'img-fluid'
    mode_image.appendChild(image)
    div.appendChild(mode_image)
    var mode_text = document.createElement('div')
    mode_text.className = 'col-md-8'
    div.appendChild(mode_text)
    modal_body.appendChild(div)
    var button = document.createElement('button')
    button.style.backgroundColor = 'hsl(26, 100%, 55%)'
    button.style.borderRadius = '5px'
    button.style.border = 'none'
    button.style.height = '50px'
    button.style.width = '400px'
    button.style.color = 'white'
    button.textContent = "checkout"
    var but_div= document.createElement('div')
    but_div.className = 'row'
    but_div.appendChild(button)
    modal_body.appendChild(but_div)

    item = number_item.innerHTML 
    itemPrice = item *price
    
    mode_text.innerHTML = '<p>Fall limited Edition Sneakers<br> $'+price + ' X '+ item+' <b>$'+itemPrice+'</b></p>'
    
    
    
})

// toggling through the modal
$(document).ready(function() {
    // Function to handle navigation between modals
    function navigateModals(direction) {
      var currentIndex = parseInt($('#lightbox').data('index'));
      var nextIndex;
  
      if (direction === 'next') {
        nextIndex = currentIndex + 1;
      } else {
        nextIndex = currentIndex - 1;
      }
  
      // Find the modal with the next index
      var nextModal = $('.modal[data-index="' + nextIndex + '"]');
  
      if (nextModal.length) {
        // Hide the current modal
        $('#lightbox').modal('hide');
  
        // Show the next modal
        nextModal.modal('show');
      }
    }
  
    // Listen for modal shown event
    $('.modal').on('shown.bs.modal', function(e) {
      var index = $(this).data('index');
      $('#lightbox').data('index', index);
    });
  
    // Listen for key presses for navigation
    $(document).keydown(function(e) {
      if (e.keyCode === 37) { // Left arrow key
        navigateModals('prev');
      } else if (e.keyCode === 39) { // Right arrow key
        navigateModals('next');
      }
    });
  });
  






    
    
