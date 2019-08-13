/*
var life = 0;
while (true) {
    for (var i = 0;i<360;) {
        life = health();
        var range = scan(i);

        if (range <=70 && range>0) {

            //check if we are hitted - move if so
            if (health() < life) {
                swim(Math.random()*360+15);
            }

            //shoot and move after target
            cannon(i,range);
            swim(i);


            //route on edges
            if (getX() <= 1 || getX() >= 99 || getY() <= 1 || getY() >= 99) {
                swim(Math.random()*360+15);
            }

            break;
        }

        //change position if we are hitted from different enemy
        if (health() < life) {
            swim(Math.random()*360+15);
        }

        i += 15;
    }
}
*/
