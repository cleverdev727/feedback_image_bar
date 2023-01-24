const rangeslider1zz = document.getElementById("myRange1zz");
const output1zz = document.getElementById("demozz");

rangeslider1zz.oninput = function () {
	rangesliderzz.value = rangeslider1zz.value;

	document.getElementById("facezz").style.top = "-80px";
	document.getElementById("boxzz").style.clipPath ="polygon(" + this.value + "%" + (50 - this.value / 2) + "%" + "," + this.value + "%" + (50 + this.value / 2) + "%, 100% 100%, 100% 0%)";
	document.getElementById("facezz").style.left = this.value - 1 + "%";

	this.value > 60 && (document.getElementById("facezz").style.left = this.value - 1 + "%");
};

const rangesliderzz = document.getElementById("myRangezz");
const outputzz = document.getElementById("demozz");
function selectzz(satisfied) {
	switch (satisfied) {
		case 1:
			document.getElementById("boxzz").style.clipPath = "polygon(" + 0 + "%" + (50 - 0 / 2) + "%" + "," + 0 + "%" + (50 + 0 / 2) + "%, 100% 100%, 100% 0%)";
			document.getElementById("myRangezz").value = 0;
			document.getElementById("myRange1zz").value = 0;

			document.getElementById("facezz").style.left = 1 - 1 + "%";
			document.getElementById("facezz").style.top = "-80px";

			document.getElementById("text1zz").style.fontWeight = "bold";
			document.getElementById("text2zz").style.fontWeight = "100";
			document.getElementById("text3zz").style.fontWeight = "100";
			document.getElementById("text4zz").style.fontWeight = "100";
			document.getElementById("text5zz").style.fontWeight = "100";
			document.getElementById("mousezz").style.borderRadius = "100px 100px 7px 7px";
			document.getElementById("mousezz").style.height = "10px";
			break;
		case 2:
			document.getElementById("boxzz").style.clipPath = "polygon(" + 25 + "%" + (50 - 25 / 2) + "%" + "," + 25 + "%" + (50 + 25 / 2) + "%, 100% 100%, 100% 0%)";
			document.getElementById("myRangezz").value = 25;
			document.getElementById("myRange1zz").value = 25;

			document.getElementById("facezz").style.left = 25 - 1 + "%";
			document.getElementById("facezz").style.top = "-80px";
			document.getElementById("text2zz").style.fontWeight = "bold";
			document.getElementById("text1zz").style.fontWeight = "100";
			document.getElementById("text3zz").style.fontWeight = "100";
			document.getElementById("text4zz").style.fontWeight = "100";
			document.getElementById("text5zz").style.fontWeight = "100";
			document.getElementById("mousezz").style.borderRadius = "100px 100px 7px 7px";
			document.getElementById("mousezz").style.height = "7px";
			break;
		case 3:
			document.getElementById("boxzz").style.clipPath = "polygon(" + 50 + "%" + (50 - 50 / 2) + "%" + "," + 50 + "%" + (50 + 50 / 2) + "%, 100% 100%, 100% 0%)";
			document.getElementById("myRangezz").value = 50;
			document.getElementById("myRange1zz").value = 50;

			document.getElementById("facezz").style.left = 50 - 1 + "%";
			document.getElementById("facezz").style.top = "-80px";
			document.getElementById("text3zz").style.fontWeight = "bold";
			document.getElementById("text2zz").style.fontWeight = "100";
			document.getElementById("text1zz").style.fontWeight = "100";
			document.getElementById("text4zz").style.fontWeight = "100";
			document.getElementById("text5zz").style.fontWeight = "100";
			document.getElementById("mousezz").style.borderRadius = "0px 0px 0px 0px";
			document.getElementById("mousezz").style.height = "5px";
			break;
		case 4:
			document.getElementById("boxzz").style.clipPath = "polygon(" + 75 + "%" + (50 - 75 / 2) + "%" + "," + 75 + "%" + (50 + 75 / 2) + "%, 100% 100%, 100% 0%)";
			document.getElementById("myRangezz").value = 75;
			document.getElementById("myRange1zz").value = 75;

			document.getElementById("facezz").style.left = 75 - 1 + "%";
			document.getElementById("facezz").style.top = "-80px";
			document.getElementById("text4zz").style.fontWeight = "bold";
			document.getElementById("text2zz").style.fontWeight = "100";
			document.getElementById("text3zz").style.fontWeight = "100";
			document.getElementById("text1zz").style.fontWeight = "100";
			document.getElementById("text5zz").style.fontWeight = "100";
			document.getElementById("mousezz").style.borderRadius = "7px 7px 100px 100px";
			document.getElementById("mousezz").style.height = "7px";
			break;
		case 5:
			document.getElementById("boxzz").style.clipPath = "polygon(" + 100 + "%" + (50 - 100 / 2) + "%" + "," + 100 + "%" + (50 + 100 / 2) + "%, 100% 100%, 100% 0%)";
			document.getElementById("myRangezz").value = 100;
			document.getElementById("myRange1zz").value = 100;

			document.getElementById("facezz").style.left = 100 - 1 + "%";
			document.getElementById("facezz").style.top = "-80px";
			document.getElementById("text5zz").style.fontWeight = "bold";
			document.getElementById("text2zz").style.fontWeight = "100";
			document.getElementById("text3zz").style.fontWeight = "100";
			document.getElementById("text4zz").style.fontWeight = "100";
			document.getElementById("text1zz").style.fontWeight = "100";
			document.getElementById("mousezz").style.borderRadius = "7px 7px 100px 100px";
			document.getElementById("mousezz").style.height = "10px";
			break;
		default:
			break;
	}
}

function movezz() {
	if (rangesliderzz.value < 65) {
		if (rangesliderzz.value < 20) {
			selectzz(1);
		} else if (rangesliderzz.value < 40) {
			selectzz(2);
		} else {
			selectzz(3);
		}
	} else if (rangesliderzz.value < 90) {
		selectzz(4);
	} else {
		selectzz(5);
	}
}