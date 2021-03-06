class Box extends BaseClass{
  constructor(x, y, width, height) {
    //indicating that you should also use properties of the baseClass
    super(x,y,width,height);
    this.image = loadImage("sprites/wood1.png");
  }
}
