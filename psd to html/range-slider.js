const sliders1 = document.getElementsByClassName('slider1');
const sliders1Len = sliders1.length;

let rangeslider1, rangeslider, face, text1, text2, text3, text4, text5, mouse, box;

for (let i = 0; i < sliders1Len; i ++) {
	const parentElem = sliders1[i].parentElement;
	sliders1[i].oninput = function () {
		rangeslider1 = sliders1[i];
		rangeslider = parentElem.getElementsByClassName('slider')[0];
		rangeslider.value = rangeslider1.value;
		face = parentElem.getElementsByClassName('face')[0];
		box = parentElem.getElementsByClassName('box')[0];
		mouth = parentElem.getElementsByClassName('mouth')[0];

		const ancester = parentElem.parentElement.parentElement;
		text1 = ancester.getElementsByClassName('text1')[0];
		text2 = ancester.getElementsByClassName('text2')[0];
		text3 = ancester.getElementsByClassName('text3')[0];
		text4 = ancester.getElementsByClassName('text4')[0];
		text5 = ancester.getElementsByClassName('text5')[0];

		face.style.top = '-80px';
		box.style.clipPath = "polygon(" + this.value + "%" + (50 - this.value / 2) + "%" + "," + this.value + "%" + (50 + this.value / 2) + "%, 100% 100%, 100% 0%)";
		face.style.left = this.value - 1 + "%";
		this.value > 60 && (face.style.left = this.value - 1 + "%");
	}
}

function selectzz(satisfied) {
	switch (satisfied) {
		case 1:
			box.style.clipPath = "polygon(" + 0 + "%" + (50 - 0 / 2) + "%" + "," + 0 + "%" + (50 + 0 / 2) + "%, 100% 100%, 100% 0%)";
			rangeslider.value = 0;
			rangeslider1.value = 0;

			face.style.left = 1 - 1 + "%";
			face.style.top = "-80px";

			text1.style.fontWeight = "bold";
			text2.style.fontWeight = "100";
			text3.style.fontWeight = "100";
			text4.style.fontWeight = "100";
			text5.style.fontWeight = "100";
			mouth.style.borderRadius = "100px 100px 7px 7px";
			mouth.style.height = "10px";
			break;
		case 2:
			box.style.clipPath = "polygon(" + 25 + "%" + (50 - 25 / 2) + "%" + "," + 25 + "%" + (50 + 25 / 2) + "%, 100% 100%, 100% 0%)";
			rangeslider.value = 25;
			rangeslider1.value = 25;

			face.style.left = 25 - 1 + "%";
			face.style.top = "-80px";
			text2.style.fontWeight = "bold";
			text1.style.fontWeight = "100";
			text3.style.fontWeight = "100";
			text4.style.fontWeight = "100";
			text5.style.fontWeight = "100";
			mouth.style.borderRadius = "100px 100px 7px 7px";
			mouth.style.height = "7px";
			break;
		case 3:
			box.style.clipPath = "polygon(" + 50 + "%" + (50 - 50 / 2) + "%" + "," + 50 + "%" + (50 + 50 / 2) + "%, 100% 100%, 100% 0%)";
			rangeslider.value = 50;
			rangeslider1.value = 50;

			face.style.left = 50 - 1 + "%";
			face.style.top = "-80px";
			text3.style.fontWeight = "bold";
			text2.style.fontWeight = "100";
			text1.style.fontWeight = "100";
			text4.style.fontWeight = "100";
			text5.style.fontWeight = "100";
			mouth.style.borderRadius = "0px 0px 0px 0px";
			mouth.style.height = "5px";
			break;
		case 4:
			box.style.clipPath = "polygon(" + 75 + "%" + (50 - 75 / 2) + "%" + "," + 75 + "%" + (50 + 75 / 2) + "%, 100% 100%, 100% 0%)";
			rangeslider.value = 75;
			rangeslider1.value = 75;

			face.style.left = 75 - 1 + "%";
			face.style.top = "-80px";
			text4.style.fontWeight = "bold";
			text2.style.fontWeight = "100";
			text3.style.fontWeight = "100";
			text1.style.fontWeight = "100";
			text5.style.fontWeight = "100";
			mouth.style.borderRadius = "7px 7px 100px 100px";
			mouth.style.height = "7px";
			break;
		case 5:
			box.style.clipPath = "polygon(" + 100 + "%" + (50 - 100 / 2) + "%" + "," + 100 + "%" + (50 + 100 / 2) + "%, 100% 100%, 100% 0%)";
			rangeslider.value = 100;
			rangeslider1.value = 100;

			face.style.left = 100 - 1 + "%";
			face.style.top = "-80px";
			text5.style.fontWeight = "bold";
			text2.style.fontWeight = "100";
			text3.style.fontWeight = "100";
			text4.style.fontWeight = "100";
			text1.style.fontWeight = "100";
			mouth.style.borderRadius = "7px 7px 100px 100px";
			mouth.style.height = "10px";
			break;
		default:
			break;
	}
}

function movezz() {
	if (rangeslider.value < 65) {
		if (rangeslider.value < 20) {
			selectzz(1);
		} else if (rangeslider.value < 40) {
			selectzz(2);
		} else {
			selectzz(3);
		}
	} else if (rangeslider.value < 90) {
		selectzz(4);
	} else {
		selectzz(5);
	}
}