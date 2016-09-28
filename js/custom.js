        /** Transparancy change navbar
         * Listen to scroll to change header opacity class
         */
        function checkScroll(){
            var startY = $('.navbar').height() * 1; //The point where the navbar changes in px

            if($(window).scrollTop() > startY){
                $('.navbar').addClass("scrolled");
            }else{
                $('.navbar').removeClass("scrolled");
            }
        }

        if($('.navbar').length > 0){
            $(window).on("scroll load resize", function(){
                checkScroll();
            });
        }