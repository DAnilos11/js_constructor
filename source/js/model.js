import image from "../img/image.png";
const text = `
This course is designed for practice in JS <a href="#" target="_blank">This course is designed for practice in JS</a>. This course is designed for practice in JS This course is designed for practice in JS This course is designed for practice in JS
`
export const model = [
  {
    type: "title",
    value: " Website  Constructor(Only JS)",
    options: {
      tag: "h2",
      styles: {
        background: "linear-gradient(to right, #ff0099, #493240)",
        color: "#fff",
        "text-align": "center",
        padding: "1.5rem",
      },
    },
  },
  {
    type: "image",
    value: image,
    options: {
      styles: {
        padding: "2rem 0",
        display: "flex",
        "justify-content": "center",
      },
    },
  },
  { type: 'text', value: text, options:{
    styles: {
      background: 'linear-gradient(to left, #f2994a, #f2c94c)',
      padding: '1rem',
      'font-weight': 'bold'
    }
  } },
  {
    type: "columns",
    value: [
      "This course is designed for practice in JS",
      "This course is designed for practice in JS This course is designed for practice in JS",
      "This course is designed for practice in JS This course is designed for practice in JS This course is designed for practice in JS",
    ],
    options: {
      styles: {
        background: "linear-gradient(to bottom, #8e2de2, #4a00e0)",
        padding: "2rem",
        color: "#fff",
        "font-weight": "bold",
      },
    },
  }
];
