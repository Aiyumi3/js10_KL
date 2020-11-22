class Circle{
    constructor(r) {
        this.radius = r;
    }
    get radius() {
        return this._radius;
    }
    set radius(value){
        if (value < 15){
            alert(`${value} is too short!`);
            return;
        }
        this._radius = value;
    }
    get diametr(){
        return this._radius * 2;
    }
    methodS(){
        let s = (Math.PI * (this._radius ** 2)).toFixed(1);
        return s;
    }
    methodL(){
        let l = (Math.PI * this.diametr).toFixed(1);
        return l;
    }
    print(){
        let str = document.getElementById('info');
        str.innerHTML = `r = ${this.radius}, d = ${this.diametr}, s = ${this.methodS()}, l = ${this.methodL()}`;
        return str;
    }
    createCircle(){
        return document.getElementById('circ').setAttribute('r', this.radius);
    }
}
document.getElementById('circle').addEventListener('click', function(){
    let circle = new Circle(Math.floor(Math.random() * 501));
    circle.print();
    circle.createCircle();
});