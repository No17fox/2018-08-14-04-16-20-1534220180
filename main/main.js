module.exports = function main() {
    let sequence = new Sequence([6, 9, 15, -2, 92, 11]);
    console.log(`o) 最小值 = ${sequence.minimum()}
o) 最大值 = ${sequence.maximun()}
o) 元素数量 = ${sequence.len}
o) 平均值 = ${sequence.average()}`
);
};

class Sequence {
  constructor(input) {
    // Write your code here
	this.input = input;
	this.len = input.length;
  }

  minimum() {
    // Write your code here
	var min = this.input[0];
	for (var i=1; i<this.len; i++) {
		if (min > this.input[i]) {
			min = this.input[i];
		}
	}
	return min;
  }

  // Write your code here
  maximun() {
	var max = this.input[0];
	for (var i=1; i<this.len; i++) {
		if (max < this.input[i]) {
			max = this.input[i];
		}
	}
	return max;
  }
  
  average() {
	var sum = this.input[0];
	for (var i=1; i<this.len; i++) {
		sum = sum + this.input[i];	
	}
	var ave = Math.round(sum / this.len * 100) / 100;
	return ave;
  }
}

