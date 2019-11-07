console.log("dolphBlock activated");
let dolphCounter = 0;

terminate(document.querySelectorAll('div.forum-row'));
terminate(document.querySelectorAll('div.forum-simple li.row'));

function terminate(els) {
	els.forEach(el => {
		if (el.querySelector('.forum-head') && el.querySelector('.forum-head').textContent.includes("dolph1888")) {
			el.setAttribute("style", "display:none !important;");
			dolphCounter++;
		}
	});
}

if (dolphCounter) {
	console.info(`Posts of Dolph1888 have been found: ${dolphCounter}`);
	console.info(`Dolph1888 was terminated!`);
}