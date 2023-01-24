tailwind.config = {
	theme: {
		extend: {
			fontFamily: {
				'rubik': ['Rubik', 'sans-serif']
			},
			backgroundImage: {
				'rainbow': 'linear-gradient(to right, red, yellow, lightgreen, green)',
				'face-gradient': 'linear-gradient(to right, lightblue, blue)',
				'triangle-gradient': 'linear-gradient(to right, lightblue, blue)',
				'tick': "url('Checkmark.png')"
			},
			colors: {
				'sky': '#ecf3f3',
				'color1': '#00B5E5'
			},
			minWidth: {
				10: '40px'
			},
			backgroundSize: {
				'50%': '50%',
			}
		}
	}
}