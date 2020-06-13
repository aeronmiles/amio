import UIkit from './uikit-core';
import * as components from './components/index';
import {each} from './util/lang';

each(components, (component, name) =>
    UIkit.component(name, component)
);

export default UIkit;


// custom build -- https://github.com/uikit/uikit/issues/3399

// import UIkit from 'uikit/dist/js/uikit-core';
// import Countdown from 'uikit/dist/js/components/countdown';
// import Filter from 'uikit/dist/js/components/filter'; // new
// import GridParallax from 'uikit/dist/js/components/grid-parallax';
// import Lightbox from 'uikit/dist/js/components/lightbox';
// import LightboxPanel from 'uikit/dist/js/components/lightbox-panel'; // new
// import Notification from 'uikit/dist/js/components/notification';
// import Parallax from 'uikit/dist/js/components/parallax';
// import Slider from 'uikit/dist/js/components/slider'; // new
// import SliderParallax from 'uikit/dist/js/components/slider-parallax'; // new
// import Slideshow from 'uikit/dist/js/components/slideshow';
// import Sortable from 'uikit/dist/js/components/sortable';
// import Tooltip from 'uikit/dist/js/components/tooltip';
// import Upload from 'uikit/dist/js/components/upload';

// UIkit.component(Countdown);
// UIkit.component(Filter); // new
// UIkit.component(GridParallax);
// UIkit.component(Lightbox);
// UIkit.component(LightboxPanel); // new
// UIkit.component(Notification);
// UIkit.component(Parallax);
// UIkit.component(Slider); // new
// UIkit.component(SliderParallax); // new
// UIkit.component(Slideshow);
// UIkit.component(Sortable);
// UIkit.component(Tooltip);
// UIkit.component(Upload);
// UIkit.use(Icons);