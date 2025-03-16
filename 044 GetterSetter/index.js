// getter = special method that makes a property readable
// setter = special method that makes a property writeable

//validate and modify a value when reading/writing a property

class Rectangle{
    constructor(width, height){
        this.width = width;
        this.height = height;

    }

    //  _height, _width means private property
    set width(newWidth){
        if(newWidth > 0){
            this._width = newWidth;
        }
        else{
            console.error("Width must be a positive number");
        }
    }

    set height(newHeight){
        if(newHeight > 0){
            this._height = newHeight;
        }
        else{
            console.error("Height must be a positive number");
        }
    }
}

// we make getter setter so ppl wont be giving data like this lol
// const rectangle = new Rectangle(-1000000, "pizza");