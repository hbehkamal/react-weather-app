module.exports = {
	content: [
		"./src/pages/**/*.tsx",
		"./src/containers/**/*.tsx",
		"./src/components/**/*.tsx",
	],
	theme: {
		extend: {
			fontSize: {
				xs: "10px",
				sm: "12px",
				base: "14px",
				lg: "16px",
				xl: "18px",
				"2xl": "20px",
				"3xl": "24px",
				"4xl": "32px",
				"5xl": "36px",
				"6xl": "64px",
			},
			lineHeight: {
				1: "16px",
				2: "18px",
				3: "24px",
				4: "32px",
				5: "48px",
			},
			spacing: {
				0: "0px",
				1: "4px",
				2: "8px",
				3: "12px",
				4: "16px",
				5: "20px",
				6: "24px",
				8: "32px",
				10: "40px",
				12: "48px",
				14: "56px",
				16: "64px",
				20: "80px",
				32: "128px",
				full: "100%",
			},
			gap: {
				1: "1px",
				"2px": "2px",
				"3px": "3px",
				2: "4px",
				3: "12px",
				4: "8px",
				8: "16px",
			}
		}
	},
	plugins: [],
}