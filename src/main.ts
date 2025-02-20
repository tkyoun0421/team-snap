import _template from "./views/test.template";

const data = { test: "테스트" };

document.getElementById("app")!.innerHTML = _template(data);
