function openNav(){
    document.getElementById("myNav").style.width='100%';
   }
   
   function closeNav(){
       document.getElementById("myNav").style.width='0';
   }


   let slides = document.querySelectorAll('.slide-container');
   let index = 0;
   
   function next(){
       slides[index].classList.remove('active');
       index = (index + 1) % slides.length;
       slides[index].classList.add('active');
   }
   
   function prev(){
       slides[index].classList.remove('active');
       index = (index - 1 + slides.length) % slides.length;
       slides[index].classList.add('active');
   }
   
   setInterval(next, 7000);

    