function Circle(x, y, r) {
	
	this.x = x;
	this.y = y;
	this.r = r;
	this.isOverlapped = function (circle) {
		// d là khoảng cách từ tâm x tới tâm y
		var d = Math.sqrt((this.x-circle.x)*(this.x-circle.x) + (this.y-circle.y)*(this.y-circle.y));
		
		if (d === (this.r+circle.r) || d === Math.abs(this.r-circle.r)) {
			return 0;
		}
		else if (d > (this.r+circle.r)) {
			return 1;
		}
		else{
			return -1;
		}
	}
	
}
var circle1 = new Circle(0, 0, 1);
var circle4 = new Circle(5, 5, 1);
console.log(circle1.isOverlapped(circle4));
module.exports = Circle;