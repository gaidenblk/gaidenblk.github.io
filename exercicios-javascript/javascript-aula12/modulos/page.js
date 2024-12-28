import { explore } from "./explore.js";
import { footer } from "./footer.js";
import { header } from "./header.js";
import { journal } from "./journal.js";
import { outdoor } from "./outdoor.js";

const page = document.createElement("div");

page.appendChild(header());
page.appendChild(outdoor());
page.appendChild(explore());
page.appendChild(journal());
page.appendChild(footer());

export { page };
