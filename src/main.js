import "./styles/main.pcss";
if (process.env.NODE_ENV === "development") {
    require("file-loader!./index.pug");
}

import "./scripts/jquery-3.4.1.min";
import "./scripts/owl-carousel/owl.carousel.min";
import "./scripts/owl-carousel";
import "./scripts/popup";