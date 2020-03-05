import getLanguages from "./src/langs";
import checkText, { IParams } from "./src/check";


(async() => {
	const params: IParams = {
		text: "Qui pourrai se fair avoir en train de regardé",
		language: "fr"
	}
	console.log(await checkText(params));
})();

export default {getLanguages, checkText};
