//Object Litrals
    // const circle = {
    //     raduis: 1,
    //     location: {
    //         x: 1,
    //         y: 1
    //     },
    //     draw() {
    //         console.log('draw');

    //     }
    // }
    // circle.draw();

//Factory Function

function createCircle(raduis) {
    return {
     raduis,
     draw: function() {
         console.log('draw');
     }
    }
 }
 const circle = createCircle(2);
 circle.draw();
 
 //Constructor Function
 
 
 
 
 