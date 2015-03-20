window.onload = function() {
 ;(function(window,undefined){

      function DropDown(el) {
        this.dd = el;
        this.placeholder = this.dd.children('span');
        this.opts = this.dd.find('ul.dropdown > li');
        this.val = '';
        this.index = -1;
        this.initEvents();
      }
      DropDown.prototype = {
        initEvents: function() {
          var obj = this;
          obj.dd.on('click', function(event){
            $(this).toggleClass('active');
            // return false;
          });

          obj.opts.on('click', function() {
            // var targetComponent = window.location.hash;
            // console.log($("" + targetComponent))
            // console.log("" + targetComponent)
            // $("" + targetComponent).toggleClass('active')
            var opt = $(this);
            obj.val = opt.text();
            obj.index = opt.index();
            obj.placeholder.text('Component: ' + obj.val);
          });
        },

        getValue: function() {
          return this.val;
        },
        getIndex: function() {
          return this.index;
        }
      }



      $(function() {
        var dd = new DropDown($('#dd'));

        $(document).on('click', function(event) {

          if (event.target !== $('#dd')[0]) {
            $('.container-dropdown').removeClass('active')
          }
        });

      });

// path.js code


Path.map("#/commentComponent").enter(function(){
    $('#commentComponent').addClass('active')
  }).exit(function(){
    $('#commentComponent').removeClass('active')
  })


Path.map("#/simpleDivComponent").enter(function(){
    $('#simpleDivComponent').addClass('active')
  }).exit(function(){
    $('#simpleDivComponent').removeClass('active')
  })


Path.map("#/headerComponent").enter(function(){
    $('#headerComponent').addClass('active')
  }).exit(function(){
    $('#headerComponent').removeClass('active')
  })


Path.map("#/likeButtonComponent").enter(function(){
    $('#likeButtonComponent').addClass('active')
  }).exit(function(){
    $('#likeButtonComponent').removeClass('active')
  })


Path.map("#/tabComponent").enter(function(){
    $('#tabComponent').addClass('active')
  }).exit(function(){
    $('#tabComponent').removeClass('active')
  })


Path.map("#/counterComponent").enter(function(){
    $('#counterComponent').addClass('active')
  }).exit(function(){
    $('#counterComponent').removeClass('active')
  })


Path.root("#/");

Path.listen();


  })(window,undefined);
}
