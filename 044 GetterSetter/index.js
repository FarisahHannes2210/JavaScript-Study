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

    get width(){
        return `${this._width.toFixed(1)}cm`;
    }

    get height(){
        return `${this._height.toFixed(1)}cm`;
    }

    get area(){
        return  `${(this._width * this._height).toFixed(1)}cm^2`;
    }
}

// we make getter setter so ppl wont be giving data like this lol
const rectangle = new Rectangle(8, 7);

// rectangle.width = -847535;
// rectangle.height = "pizzaaaa";

console.log(rectangle.width);
console.log(rectangle.height);
console.log(rectangle.area);
