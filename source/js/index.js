import {model} from './model'
import { title, text, columns, image, templates } from './functions_block';
const $site = document.querySelector("#site");
import '../css/main.css'

model.forEach((block) => {
      const toHTML = templates[block.type]
      if( toHTML){
  $site.insertAdjacentHTML("beforeend", toHTML(block));
}
});

