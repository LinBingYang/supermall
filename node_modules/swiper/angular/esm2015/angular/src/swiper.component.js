import { ChangeDetectionStrategy, Component, ContentChildren, EventEmitter, HostBinding, Inject, Input, Output, PLATFORM_ID, ViewChild, ViewEncapsulation, } from '@angular/core';
// @ts-ignore
import Swiper from 'swiper';
import { of, Subject } from 'rxjs';
import { getParams } from './utils/get-params';
import { SwiperSlideDirective } from './swiper-slide.directive';
import { extend, isObject, setProperty, ignoreNgOnChanges, coerceBooleanProperty, isShowEl, } from './utils/utils';
import { isPlatformBrowser } from '@angular/common';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
export class SwiperComponent {
    constructor(_ngZone, elementRef, _changeDetectorRef, _platformId) {
        this._ngZone = _ngZone;
        this.elementRef = elementRef;
        this._changeDetectorRef = _changeDetectorRef;
        this._platformId = _platformId;
        this.slideClass = 'swiper-slide';
        this.wrapperClass = 'swiper-wrapper';
        this.showNavigation = true;
        this.showPagination = true;
        this.showScrollbar = true;
        // prettier-ignore
        this.s__beforeBreakpoint = new EventEmitter();
        // prettier-ignore
        this.s__containerClasses = new EventEmitter();
        // prettier-ignore
        this.s__slideClass = new EventEmitter();
        // prettier-ignore
        this.s__swiper = new EventEmitter();
        // prettier-ignore
        this.s_activeIndexChange = new EventEmitter();
        // prettier-ignore
        this.s_afterInit = new EventEmitter();
        // prettier-ignore
        this.s_autoplay = new EventEmitter();
        // prettier-ignore
        this.s_autoplayStart = new EventEmitter();
        // prettier-ignore
        this.s_autoplayStop = new EventEmitter();
        // prettier-ignore
        this.s_beforeDestroy = new EventEmitter();
        // prettier-ignore
        this.s_beforeInit = new EventEmitter();
        // prettier-ignore
        this.s_beforeLoopFix = new EventEmitter();
        // prettier-ignore
        this.s_beforeResize = new EventEmitter();
        // prettier-ignore
        this.s_beforeSlideChangeStart = new EventEmitter();
        // prettier-ignore
        this.s_beforeTransitionStart = new EventEmitter();
        // prettier-ignore
        this.s_breakpoint = new EventEmitter();
        // prettier-ignore
        this.s_changeDirection = new EventEmitter();
        // prettier-ignore
        this.s_click = new EventEmitter();
        // prettier-ignore
        this.s_doubleTap = new EventEmitter();
        // prettier-ignore
        this.s_doubleClick = new EventEmitter();
        // prettier-ignore
        this.s_destroy = new EventEmitter();
        // prettier-ignore
        this.s_fromEdge = new EventEmitter();
        // prettier-ignore
        this.s_hashChange = new EventEmitter();
        // prettier-ignore
        this.s_hashSet = new EventEmitter();
        // prettier-ignore
        this.s_imagesReady = new EventEmitter();
        // prettier-ignore
        this.s_init = new EventEmitter();
        // prettier-ignore
        this.s_keyPress = new EventEmitter();
        // prettier-ignore
        this.s_lazyImageLoad = new EventEmitter();
        // prettier-ignore
        this.s_lazyImageReady = new EventEmitter();
        // prettier-ignore
        this.s_loopFix = new EventEmitter();
        // prettier-ignore
        this.s_momentumBounce = new EventEmitter();
        // prettier-ignore
        this.s_navigationHide = new EventEmitter();
        // prettier-ignore
        this.s_navigationShow = new EventEmitter();
        // prettier-ignore
        this.s_observerUpdate = new EventEmitter();
        // prettier-ignore
        this.s_orientationchange = new EventEmitter();
        // prettier-ignore
        this.s_paginationHide = new EventEmitter();
        // prettier-ignore
        this.s_paginationRender = new EventEmitter();
        // prettier-ignore
        this.s_paginationShow = new EventEmitter();
        // prettier-ignore
        this.s_paginationUpdate = new EventEmitter();
        // prettier-ignore
        this.s_progress = new EventEmitter();
        // prettier-ignore
        this.s_reachBeginning = new EventEmitter();
        // prettier-ignore
        this.s_reachEnd = new EventEmitter();
        // prettier-ignore
        this.s_realIndexChange = new EventEmitter();
        // prettier-ignore
        this.s_resize = new EventEmitter();
        // prettier-ignore
        this.s_scroll = new EventEmitter();
        // prettier-ignore
        this.s_scrollbarDragEnd = new EventEmitter();
        // prettier-ignore
        this.s_scrollbarDragMove = new EventEmitter();
        // prettier-ignore
        this.s_scrollbarDragStart = new EventEmitter();
        // prettier-ignore
        this.s_setTransition = new EventEmitter();
        // prettier-ignore
        this.s_setTranslate = new EventEmitter();
        // prettier-ignore
        this.s_slideChange = new EventEmitter();
        // prettier-ignore
        this.s_slideChangeTransitionEnd = new EventEmitter();
        // prettier-ignore
        this.s_slideChangeTransitionStart = new EventEmitter();
        // prettier-ignore
        this.s_slideNextTransitionEnd = new EventEmitter();
        // prettier-ignore
        this.s_slideNextTransitionStart = new EventEmitter();
        // prettier-ignore
        this.s_slidePrevTransitionEnd = new EventEmitter();
        // prettier-ignore
        this.s_slidePrevTransitionStart = new EventEmitter();
        // prettier-ignore
        this.s_slideResetTransitionStart = new EventEmitter();
        // prettier-ignore
        this.s_slideResetTransitionEnd = new EventEmitter();
        // prettier-ignore
        this.s_sliderMove = new EventEmitter();
        // prettier-ignore
        this.s_sliderFirstMove = new EventEmitter();
        // prettier-ignore
        this.s_slidesLengthChange = new EventEmitter();
        // prettier-ignore
        this.s_slidesGridLengthChange = new EventEmitter();
        // prettier-ignore
        this.s_snapGridLengthChange = new EventEmitter();
        // prettier-ignore
        this.s_snapIndexChange = new EventEmitter();
        // prettier-ignore
        this.s_tap = new EventEmitter();
        // prettier-ignore
        this.s_toEdge = new EventEmitter();
        // prettier-ignore
        this.s_touchEnd = new EventEmitter();
        // prettier-ignore
        this.s_touchMove = new EventEmitter();
        // prettier-ignore
        this.s_touchMoveOpposite = new EventEmitter();
        // prettier-ignore
        this.s_touchStart = new EventEmitter();
        // prettier-ignore
        this.s_transitionEnd = new EventEmitter();
        // prettier-ignore
        this.s_transitionStart = new EventEmitter();
        // prettier-ignore
        this.s_update = new EventEmitter();
        // prettier-ignore
        this.s_zoomChange = new EventEmitter();
        // prettier-ignore
        this.s_swiper = new EventEmitter();
        this.indexChange = new EventEmitter();
        this._activeSlides = new Subject();
        this.containerClasses = 'swiper';
        this.slidesChanges = (val) => {
            this.slides = val.map((slide, index) => {
                slide.slideIndex = index;
                slide.classNames = this.slideClass || '';
                return slide;
            });
            if (this.loop && !this.loopedSlides) {
                this.calcLoopedSlides();
            }
            if (!this.virtual) {
                if (this.loopedSlides) {
                    this.prependSlides = of(this.slides.slice(this.slides.length - this.loopedSlides));
                    this.appendSlides = of(this.slides.slice(0, this.loopedSlides));
                }
            }
            else if (this.swiperRef && this.swiperRef.virtual) {
                this._ngZone.runOutsideAngular(() => {
                    this.swiperRef.virtual.slides = this.slides;
                    this.swiperRef.virtual.update(true);
                });
            }
            this._changeDetectorRef.detectChanges();
        };
        this.style = null;
        this.updateVirtualSlides = (virtualData) => {
            // TODO: type virtualData
            if (!this.swiperRef ||
                (this.currentVirtualData &&
                    this.currentVirtualData.from === virtualData.from &&
                    this.currentVirtualData.to === virtualData.to &&
                    this.currentVirtualData.offset === virtualData.offset)) {
                return;
            }
            this.style = this.swiperRef.isHorizontal()
                ? {
                    [this.swiperRef.rtlTranslate ? 'right' : 'left']: `${virtualData.offset}px`,
                }
                : {
                    top: `${virtualData.offset}px`,
                };
            this.currentVirtualData = virtualData;
            this._activeSlides.next(virtualData.slides);
            this._ngZone.run(() => {
                this._changeDetectorRef.detectChanges();
            });
            this._ngZone.runOutsideAngular(() => {
                this.swiperRef.updateSlides();
                this.swiperRef.updateProgress();
                this.swiperRef.updateSlidesClasses();
                if (this.swiperRef.lazy && this.swiperRef.params.lazy['enabled']) {
                    this.swiperRef.lazy.load();
                }
                this.swiperRef.virtual.update(true);
            });
            return;
        };
    }
    set navigation(val) {
        var _a, _b, _c;
        const currentNext = typeof this._navigation !== 'boolean' && this._navigation !== ''
            ? (_a = this._navigation) === null || _a === void 0 ? void 0 : _a.nextEl
            : null;
        const currentPrev = typeof this._navigation !== 'boolean' && this._navigation !== ''
            ? (_b = this._navigation) === null || _b === void 0 ? void 0 : _b.prevEl
            : null;
        this._navigation = setProperty(val, {
            nextEl: currentNext || null,
            prevEl: currentPrev || null,
        });
        this.showNavigation = !(coerceBooleanProperty(val) !== true ||
            (this._navigation &&
                typeof this._navigation !== 'boolean' &&
                this._navigation.prevEl !== ((_c = this._prevElRef) === null || _c === void 0 ? void 0 : _c.nativeElement) &&
                (this._navigation.prevEl !== null || this._navigation.nextEl !== null) &&
                (typeof this._navigation.nextEl === 'string' ||
                    typeof this._navigation.prevEl === 'string' ||
                    typeof this._navigation.nextEl === 'object' ||
                    typeof this._navigation.prevEl === 'object')));
    }
    get navigation() {
        return this._navigation;
    }
    set pagination(val) {
        var _a;
        const current = typeof this._pagination !== 'boolean' && this._pagination !== ''
            ? (_a = this._pagination) === null || _a === void 0 ? void 0 : _a.el
            : null;
        this._pagination = setProperty(val, {
            el: current || null,
        });
        this.showPagination = isShowEl(val, this._pagination, this._paginationElRef);
    }
    get pagination() {
        return this._pagination;
    }
    set scrollbar(val) {
        var _a;
        const current = typeof this._scrollbar !== 'boolean' && this._scrollbar !== '' ? (_a = this._scrollbar) === null || _a === void 0 ? void 0 : _a.el : null;
        this._scrollbar = setProperty(val, {
            el: current || null,
        });
        this.showScrollbar = isShowEl(val, this._scrollbar, this._scrollbarElRef);
    }
    get scrollbar() {
        return this._scrollbar;
    }
    set virtual(val) {
        this._virtual = setProperty(val);
    }
    get virtual() {
        return this._virtual;
    }
    set index(index) {
        this.setIndex(index);
    }
    set config(val) {
        this.updateSwiper(val);
        const { params } = getParams(val);
        Object.assign(this, params);
    }
    set prevElRef(el) {
        this._prevElRef = el;
        this._setElement(el, this.navigation, 'navigation', 'prevEl');
    }
    set nextElRef(el) {
        this._nextElRef = el;
        this._setElement(el, this.navigation, 'navigation', 'nextEl');
    }
    set scrollbarElRef(el) {
        this._scrollbarElRef = el;
        this._setElement(el, this.scrollbar, 'scrollbar');
    }
    set paginationElRef(el) {
        this._paginationElRef = el;
        this._setElement(el, this.pagination, 'pagination');
    }
    get activeSlides() {
        if (this.virtual) {
            return this._activeSlides;
        }
        return of(this.slides);
    }
    get zoomContainerClass() {
        return this.zoom && typeof this.zoom !== 'boolean'
            ? this.zoom.containerClass
            : 'swiper-zoom-container';
    }
    _setElement(el, ref, update, key = 'el') {
        if (!el || !ref) {
            return;
        }
        if (ref && el.nativeElement) {
            if (ref[key] === el.nativeElement) {
                return;
            }
            ref[key] = el.nativeElement;
        }
        const updateObj = {};
        updateObj[update] = true;
        this.updateInitSwiper(updateObj);
    }
    ngOnInit() {
        const { params } = getParams(this);
        Object.assign(this, params);
    }
    ngAfterViewInit() {
        this.childrenSlidesInit();
        this.initSwiper();
        this._changeDetectorRef.detectChanges();
        setTimeout(() => {
            this.s_swiper.emit(this.swiperRef);
        });
    }
    childrenSlidesInit() {
        this.slidesChanges(this.slidesEl);
        this.slidesEl.changes.subscribe(this.slidesChanges);
    }
    get isSwiperActive() {
        return this.swiperRef && !this.swiperRef.destroyed;
    }
    initSwiper() {
        const { params: swiperParams, passedParams } = getParams(this);
        Object.assign(this, swiperParams);
        this._ngZone.runOutsideAngular(() => {
            swiperParams.init = false;
            if (!swiperParams.virtual) {
                swiperParams.observer = true;
            }
            swiperParams.onAny = (eventName, ...args) => {
                const emitter = this[('s_' + eventName)];
                if (emitter) {
                    emitter.emit(...args);
                }
            };
            const _slideClasses = (_, updated) => {
                updated.forEach(({ slideEl, classNames }, index) => {
                    const dataIndex = slideEl.getAttribute('data-swiper-slide-index');
                    const slideIndex = dataIndex ? parseInt(dataIndex) : index;
                    if (this.virtual) {
                        const virtualSlide = this.slides.find((item) => {
                            return item.virtualIndex && item.virtualIndex === slideIndex;
                        });
                        if (virtualSlide) {
                            virtualSlide.classNames = classNames;
                            return;
                        }
                    }
                    if (this.slides[slideIndex]) {
                        this.slides[slideIndex].classNames = classNames;
                    }
                });
                this._changeDetectorRef.detectChanges();
            };
            const _containerClasses = (_, classes) => {
                setTimeout(() => {
                    this.containerClasses = classes;
                });
            };
            Object.assign(swiperParams.on, {
                _containerClasses,
                _slideClasses,
            });
            const swiperRef = new Swiper(swiperParams);
            swiperRef.loopCreate = () => { };
            swiperRef.loopDestroy = () => { };
            if (swiperParams.loop) {
                swiperRef.loopedSlides = this.loopedSlides;
            }
            const isVirtualEnabled = typeof swiperRef.params.virtual !== 'undefined' &&
                typeof swiperRef.params.virtual !== 'boolean' &&
                swiperRef.params.virtual.enabled;
            if (swiperRef.virtual && isVirtualEnabled) {
                swiperRef.virtual.slides = this.slides;
                const extendWith = {
                    cache: false,
                    renderExternal: this.updateVirtualSlides,
                    renderExternalUpdate: false,
                };
                extend(swiperRef.params.virtual, extendWith);
                extend(swiperRef.originalParams.virtual, extendWith);
            }
            if (isPlatformBrowser(this._platformId)) {
                this.swiperRef = swiperRef.init(this.elementRef.nativeElement);
                const isEnabled = typeof this.swiperRef.params.virtual !== 'undefined' &&
                    typeof this.swiperRef.params.virtual !== 'boolean' &&
                    this.swiperRef.params.virtual.enabled;
                if (this.swiperRef.virtual && isEnabled) {
                    this.swiperRef.virtual.update(true);
                }
                this._changeDetectorRef.detectChanges();
                swiperRef.on('slideChange', () => {
                    this.indexChange.emit(this.swiperRef.realIndex);
                });
            }
        });
    }
    ngOnChanges(changedParams) {
        this.updateSwiper(changedParams);
        this._changeDetectorRef.detectChanges();
    }
    updateInitSwiper(changedParams) {
        if (!(changedParams && this.swiperRef && !this.swiperRef.destroyed)) {
            return;
        }
        this._ngZone.runOutsideAngular(() => {
            const { params: currentParams, pagination, navigation, scrollbar, virtual, thumbs, } = this.swiperRef;
            if (changedParams.pagination) {
                if (this.pagination &&
                    typeof this.pagination !== 'boolean' &&
                    this.pagination.el &&
                    pagination &&
                    !pagination.el) {
                    this.updateParameter('pagination', this.pagination);
                    pagination.init();
                    pagination.render();
                    pagination.update();
                }
                else {
                    pagination.destroy();
                    pagination.el = null;
                }
            }
            if (changedParams.scrollbar) {
                if (this.scrollbar &&
                    typeof this.scrollbar !== 'boolean' &&
                    this.scrollbar.el &&
                    scrollbar &&
                    !scrollbar.el) {
                    this.updateParameter('scrollbar', this.scrollbar);
                    scrollbar.init();
                    scrollbar.updateSize();
                    scrollbar.setTranslate();
                }
                else {
                    scrollbar.destroy();
                    scrollbar.el = null;
                }
            }
            if (changedParams.navigation) {
                if (this.navigation &&
                    typeof this.navigation !== 'boolean' &&
                    this.navigation.prevEl &&
                    this.navigation.nextEl &&
                    navigation &&
                    !navigation.prevEl &&
                    !navigation.nextEl) {
                    this.updateParameter('navigation', this.navigation);
                    navigation.init();
                    navigation.update();
                }
                else if (navigation.prevEl && navigation.nextEl) {
                    navigation.destroy();
                    navigation.nextEl = null;
                    navigation.prevEl = null;
                }
            }
            if (changedParams.thumbs && this.thumbs && this.thumbs.swiper) {
                this.updateParameter('thumbs', this.thumbs);
                const initialized = thumbs.init();
                if (initialized)
                    thumbs.update(true);
            }
            if (changedParams.controller && this.controller && this.controller.control) {
                this.swiperRef.controller.control = this.controller.control;
            }
            this.swiperRef.update();
        });
    }
    updateSwiper(changedParams) {
        this._ngZone.runOutsideAngular(() => {
            var _a, _b;
            if (changedParams.config) {
                return;
            }
            if (!(changedParams && this.swiperRef && !this.swiperRef.destroyed)) {
                return;
            }
            for (const key in changedParams) {
                if (ignoreNgOnChanges.indexOf(key) >= 0) {
                    continue;
                }
                const newValue = (_b = (_a = changedParams[key]) === null || _a === void 0 ? void 0 : _a.currentValue) !== null && _b !== void 0 ? _b : changedParams[key];
                this.updateParameter(key, newValue);
            }
            if (changedParams.allowSlideNext) {
                this.swiperRef.allowSlideNext = this.allowSlideNext;
            }
            if (changedParams.allowSlidePrev) {
                this.swiperRef.allowSlidePrev = this.allowSlidePrev;
            }
            if (changedParams.direction) {
                this.swiperRef.changeDirection(this.direction, false);
            }
            if (changedParams.breakpoints) {
                if (this.loop && !this.loopedSlides) {
                    this.calcLoopedSlides();
                }
                this.swiperRef.currentBreakpoint = null;
                this.swiperRef.setBreakpoint();
            }
            if (changedParams.thumbs || changedParams.controller) {
                this.updateInitSwiper(changedParams);
            }
            this.swiperRef.update();
        });
    }
    calcLoopedSlides() {
        if (!this.loop) {
            return;
        }
        let slidesPerViewParams = this.slidesPerView;
        if (this.breakpoints) {
            const breakpoint = Swiper.prototype.getBreakpoint(this.breakpoints);
            const breakpointOnlyParams = breakpoint in this.breakpoints ? this.breakpoints[breakpoint] : undefined;
            if (breakpointOnlyParams && breakpointOnlyParams.slidesPerView) {
                slidesPerViewParams = breakpointOnlyParams.slidesPerView;
            }
        }
        if (slidesPerViewParams === 'auto') {
            this.loopedSlides = this.slides.length;
            return this.slides.length;
        }
        let loopedSlides = this.loopedSlides || slidesPerViewParams;
        if (!loopedSlides) {
            // ?
            return;
        }
        if (this.loopAdditionalSlides) {
            loopedSlides += this.loopAdditionalSlides;
        }
        if (loopedSlides > this.slides.length) {
            loopedSlides = this.slides.length;
        }
        this.loopedSlides = loopedSlides;
        return loopedSlides;
    }
    updateParameter(key, value) {
        if (!(this.swiperRef && !this.swiperRef.destroyed)) {
            return;
        }
        const _key = key.replace(/^_/, '');
        const isCurrentParamObj = isObject(this.swiperRef.params[_key]);
        if (Object.keys(this.swiperRef.modules).indexOf(_key) >= 0) {
            const defaultParams = this.swiperRef.modules[_key].params[_key];
            if (isCurrentParamObj) {
                extend(this.swiperRef.params[_key], defaultParams);
            }
            else {
                this.swiperRef.params[_key] = defaultParams;
            }
        }
        if (isCurrentParamObj && isObject(value)) {
            extend(this.swiperRef.params[_key], value);
        }
        else {
            this.swiperRef.params[_key] = value;
        }
    }
    setIndex(index, speed, silent) {
        if (!this.isSwiperActive) {
            this.initialSlide = index;
            return;
        }
        if (index === this.swiperRef.activeIndex) {
            return;
        }
        this._ngZone.runOutsideAngular(() => {
            if (this.loop) {
                this.swiperRef.slideToLoop(index, speed, !silent);
            }
            else {
                this.swiperRef.slideTo(index, speed, !silent);
            }
        });
    }
    ngOnDestroy() {
        this._ngZone.runOutsideAngular(() => {
            var _a;
            (_a = this.swiperRef) === null || _a === void 0 ? void 0 : _a.destroy(true, false);
        });
    }
}
SwiperComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.2", ngImport: i0, type: SwiperComponent, deps: [{ token: i0.NgZone }, { token: i0.ElementRef }, { token: i0.ChangeDetectorRef }, { token: PLATFORM_ID }], target: i0.ɵɵFactoryTarget.Component });
SwiperComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.2", type: SwiperComponent, selector: "swiper, [swiper]", inputs: { direction: "direction", touchEventsTarget: "touchEventsTarget", initialSlide: "initialSlide", speed: "speed", cssMode: "cssMode", updateOnWindowResize: "updateOnWindowResize", resizeObserver: "resizeObserver", nested: "nested", focusableElements: "focusableElements", width: "width", height: "height", preventInteractionOnTransition: "preventInteractionOnTransition", userAgent: "userAgent", url: "url", edgeSwipeDetection: "edgeSwipeDetection", edgeSwipeThreshold: "edgeSwipeThreshold", freeMode: "freeMode", autoHeight: "autoHeight", setWrapperSize: "setWrapperSize", virtualTranslate: "virtualTranslate", effect: "effect", breakpoints: "breakpoints", spaceBetween: "spaceBetween", slidesPerView: "slidesPerView", grid: "grid", slidesPerGroup: "slidesPerGroup", slidesPerGroupSkip: "slidesPerGroupSkip", centeredSlides: "centeredSlides", centeredSlidesBounds: "centeredSlidesBounds", slidesOffsetBefore: "slidesOffsetBefore", slidesOffsetAfter: "slidesOffsetAfter", normalizeSlideIndex: "normalizeSlideIndex", centerInsufficientSlides: "centerInsufficientSlides", watchOverflow: "watchOverflow", roundLengths: "roundLengths", touchRatio: "touchRatio", touchAngle: "touchAngle", simulateTouch: "simulateTouch", shortSwipes: "shortSwipes", longSwipes: "longSwipes", longSwipesRatio: "longSwipesRatio", longSwipesMs: "longSwipesMs", followFinger: "followFinger", allowTouchMove: "allowTouchMove", threshold: "threshold", touchMoveStopPropagation: "touchMoveStopPropagation", touchStartPreventDefault: "touchStartPreventDefault", touchStartForcePreventDefault: "touchStartForcePreventDefault", touchReleaseOnEdges: "touchReleaseOnEdges", uniqueNavElements: "uniqueNavElements", resistance: "resistance", resistanceRatio: "resistanceRatio", watchSlidesProgress: "watchSlidesProgress", grabCursor: "grabCursor", preventClicks: "preventClicks", preventClicksPropagation: "preventClicksPropagation", slideToClickedSlide: "slideToClickedSlide", preloadImages: "preloadImages", updateOnImagesReady: "updateOnImagesReady", loop: "loop", loopAdditionalSlides: "loopAdditionalSlides", loopedSlides: "loopedSlides", loopFillGroupWithBlank: "loopFillGroupWithBlank", loopPreventsSlide: "loopPreventsSlide", allowSlidePrev: "allowSlidePrev", allowSlideNext: "allowSlideNext", swipeHandler: "swipeHandler", noSwiping: "noSwiping", noSwipingClass: "noSwipingClass", noSwipingSelector: "noSwipingSelector", passiveListeners: "passiveListeners", containerModifierClass: "containerModifierClass", slideClass: "slideClass", slideBlankClass: "slideBlankClass", slideActiveClass: "slideActiveClass", slideDuplicateActiveClass: "slideDuplicateActiveClass", slideVisibleClass: "slideVisibleClass", slideDuplicateClass: "slideDuplicateClass", slideNextClass: "slideNextClass", slideDuplicateNextClass: "slideDuplicateNextClass", slidePrevClass: "slidePrevClass", slideDuplicatePrevClass: "slideDuplicatePrevClass", wrapperClass: "wrapperClass", runCallbacksOnInit: "runCallbacksOnInit", observeParents: "observeParents", observeSlideChildren: "observeSlideChildren", a11y: "a11y", autoplay: "autoplay", controller: "controller", coverflowEffect: "coverflowEffect", cubeEffect: "cubeEffect", fadeEffect: "fadeEffect", flipEffect: "flipEffect", creativeEffect: "creativeEffect", cardsEffect: "cardsEffect", hashNavigation: "hashNavigation", history: "history", keyboard: "keyboard", lazy: "lazy", mousewheel: "mousewheel", parallax: "parallax", thumbs: "thumbs", zoom: "zoom", class: "class", id: "id", navigation: "navigation", pagination: "pagination", scrollbar: "scrollbar", virtual: "virtual", index: "index", config: "config" }, outputs: { s__beforeBreakpoint: "_beforeBreakpoint", s__containerClasses: "_containerClasses", s__slideClass: "_slideClass", s__swiper: "_swiper", s_activeIndexChange: "activeIndexChange", s_afterInit: "afterInit", s_autoplay: "autoplay", s_autoplayStart: "autoplayStart", s_autoplayStop: "autoplayStop", s_beforeDestroy: "beforeDestroy", s_beforeInit: "beforeInit", s_beforeLoopFix: "beforeLoopFix", s_beforeResize: "beforeResize", s_beforeSlideChangeStart: "beforeSlideChangeStart", s_beforeTransitionStart: "beforeTransitionStart", s_breakpoint: "breakpoint", s_changeDirection: "changeDirection", s_click: "click", s_doubleTap: "doubleTap", s_doubleClick: "doubleClick", s_destroy: "destroy", s_fromEdge: "fromEdge", s_hashChange: "hashChange", s_hashSet: "hashSet", s_imagesReady: "imagesReady", s_init: "init", s_keyPress: "keyPress", s_lazyImageLoad: "lazyImageLoad", s_lazyImageReady: "lazyImageReady", s_loopFix: "loopFix", s_momentumBounce: "momentumBounce", s_navigationHide: "navigationHide", s_navigationShow: "navigationShow", s_observerUpdate: "observerUpdate", s_orientationchange: "orientationchange", s_paginationHide: "paginationHide", s_paginationRender: "paginationRender", s_paginationShow: "paginationShow", s_paginationUpdate: "paginationUpdate", s_progress: "progress", s_reachBeginning: "reachBeginning", s_reachEnd: "reachEnd", s_realIndexChange: "realIndexChange", s_resize: "resize", s_scroll: "scroll", s_scrollbarDragEnd: "scrollbarDragEnd", s_scrollbarDragMove: "scrollbarDragMove", s_scrollbarDragStart: "scrollbarDragStart", s_setTransition: "setTransition", s_setTranslate: "setTranslate", s_slideChange: "slideChange", s_slideChangeTransitionEnd: "slideChangeTransitionEnd", s_slideChangeTransitionStart: "slideChangeTransitionStart", s_slideNextTransitionEnd: "slideNextTransitionEnd", s_slideNextTransitionStart: "slideNextTransitionStart", s_slidePrevTransitionEnd: "slidePrevTransitionEnd", s_slidePrevTransitionStart: "slidePrevTransitionStart", s_slideResetTransitionStart: "slideResetTransitionStart", s_slideResetTransitionEnd: "slideResetTransitionEnd", s_sliderMove: "sliderMove", s_sliderFirstMove: "sliderFirstMove", s_slidesLengthChange: "slidesLengthChange", s_slidesGridLengthChange: "slidesGridLengthChange", s_snapGridLengthChange: "snapGridLengthChange", s_snapIndexChange: "snapIndexChange", s_tap: "tap", s_toEdge: "toEdge", s_touchEnd: "touchEnd", s_touchMove: "touchMove", s_touchMoveOpposite: "touchMoveOpposite", s_touchStart: "touchStart", s_transitionEnd: "transitionEnd", s_transitionStart: "transitionStart", s_update: "update", s_zoomChange: "zoomChange", s_swiper: "swiper", indexChange: "indexChange" }, host: { properties: { "class": "this.containerClasses" } }, queries: [{ propertyName: "slidesEl", predicate: SwiperSlideDirective }], viewQueries: [{ propertyName: "prevElRef", first: true, predicate: ["prevElRef"], descendants: true }, { propertyName: "nextElRef", first: true, predicate: ["nextElRef"], descendants: true }, { propertyName: "scrollbarElRef", first: true, predicate: ["scrollbarElRef"], descendants: true }, { propertyName: "paginationElRef", first: true, predicate: ["paginationElRef"], descendants: true }], usesOnChanges: true, ngImport: i0, template: "<ng-content select=\"[slot=container-start]\"></ng-content>\n<ng-container *ngIf=\"navigation && showNavigation\">\n  <div class=\"swiper-button-prev\" #prevElRef></div>\n  <div class=\"swiper-button-next\" #nextElRef></div>\n</ng-container>\n<div *ngIf=\"scrollbar && showScrollbar\" class=\"swiper-scrollbar\" #scrollbarElRef></div>\n<div *ngIf=\"pagination && showPagination\" class=\"swiper-pagination\" #paginationElRef></div>\n<div [ngClass]=\"wrapperClass\" [attr.id]=\"id\">\n  <ng-content select=\"[slot=wrapper-start]\"></ng-content>\n  <ng-template *ngTemplateOutlet=\"\n      slidesTemplate;\n      context: {\n        loopSlides: prependSlides,\n        key: 'prepend'\n      }\n    \"></ng-template>\n  <ng-template *ngTemplateOutlet=\"\n      slidesTemplate;\n      context: {\n        loopSlides: activeSlides,\n        key: ''\n      }\n    \"></ng-template>\n  <ng-template *ngTemplateOutlet=\"\n      slidesTemplate;\n      context: {\n        loopSlides: appendSlides,\n        key: 'append'\n      }\n    \"></ng-template>\n  <ng-content select=\"[slot=wrapper-end]\"></ng-content>\n</div>\n<ng-content select=\"[slot=container-end]\"></ng-content>\n\n<ng-template #slidesTemplate let-loopSlides=\"loopSlides\" let-slideKey=\"key\">\n  <div *ngFor=\"let slide of loopSlides | async\" [ngClass]=\"\n      (slide.class ? slide.class + ' ' : '') +\n      slideClass +\n      (slideKey !== '' ? ' ' + slideDuplicateClass : '')\n    \" [attr.data-swiper-slide-index]=\"slide.virtualIndex ? slide.virtualIndex : slide.slideIndex\" [style]=\"style\"\n    [ngSwitch]=\"slide.zoom\">\n    <div *ngSwitchCase=\"true\" [ngClass]=\"zoomContainerClass\">\n      <ng-template [ngTemplateOutlet]=\"slide.template\" [ngTemplateOutletContext]=\"{\n          $implicit: slide.slideData\n        }\"></ng-template>\n    </div>\n    <ng-container *ngSwitchDefault>\n      <ng-template [ngTemplateOutlet]=\"slide.template\" [ngTemplateOutletContext]=\"{\n          $implicit: slide.slideData\n        }\"></ng-template>\n    </ng-container>\n  </div>\n</ng-template>\n", styles: ["\n      swiper {\n        display: block;\n      }\n    "], directives: [{ type: i1.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { type: i1.NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }, { type: i1.NgTemplateOutlet, selector: "[ngTemplateOutlet]", inputs: ["ngTemplateOutletContext", "ngTemplateOutlet"] }, { type: i1.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }, { type: i1.NgSwitch, selector: "[ngSwitch]", inputs: ["ngSwitch"] }, { type: i1.NgSwitchCase, selector: "[ngSwitchCase]", inputs: ["ngSwitchCase"] }, { type: i1.NgSwitchDefault, selector: "[ngSwitchDefault]" }], pipes: { "async": i1.AsyncPipe }, changeDetection: i0.ChangeDetectionStrategy.OnPush, encapsulation: i0.ViewEncapsulation.None });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.2", ngImport: i0, type: SwiperComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'swiper, [swiper]',
                    templateUrl: './swiper.component.html',
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    encapsulation: ViewEncapsulation.None,
                    styles: [
                        `
      swiper {
        display: block;
      }
    `,
                    ],
                }]
        }], ctorParameters: function () { return [{ type: i0.NgZone }, { type: i0.ElementRef }, { type: i0.ChangeDetectorRef }, { type: Object, decorators: [{
                    type: Inject,
                    args: [PLATFORM_ID]
                }] }]; }, propDecorators: { direction: [{
                type: Input
            }], touchEventsTarget: [{
                type: Input
            }], initialSlide: [{
                type: Input
            }], speed: [{
                type: Input
            }], cssMode: [{
                type: Input
            }], updateOnWindowResize: [{
                type: Input
            }], resizeObserver: [{
                type: Input
            }], nested: [{
                type: Input
            }], focusableElements: [{
                type: Input
            }], width: [{
                type: Input
            }], height: [{
                type: Input
            }], preventInteractionOnTransition: [{
                type: Input
            }], userAgent: [{
                type: Input
            }], url: [{
                type: Input
            }], edgeSwipeDetection: [{
                type: Input
            }], edgeSwipeThreshold: [{
                type: Input
            }], freeMode: [{
                type: Input
            }], autoHeight: [{
                type: Input
            }], setWrapperSize: [{
                type: Input
            }], virtualTranslate: [{
                type: Input
            }], effect: [{
                type: Input
            }], breakpoints: [{
                type: Input
            }], spaceBetween: [{
                type: Input
            }], slidesPerView: [{
                type: Input
            }], grid: [{
                type: Input
            }], slidesPerGroup: [{
                type: Input
            }], slidesPerGroupSkip: [{
                type: Input
            }], centeredSlides: [{
                type: Input
            }], centeredSlidesBounds: [{
                type: Input
            }], slidesOffsetBefore: [{
                type: Input
            }], slidesOffsetAfter: [{
                type: Input
            }], normalizeSlideIndex: [{
                type: Input
            }], centerInsufficientSlides: [{
                type: Input
            }], watchOverflow: [{
                type: Input
            }], roundLengths: [{
                type: Input
            }], touchRatio: [{
                type: Input
            }], touchAngle: [{
                type: Input
            }], simulateTouch: [{
                type: Input
            }], shortSwipes: [{
                type: Input
            }], longSwipes: [{
                type: Input
            }], longSwipesRatio: [{
                type: Input
            }], longSwipesMs: [{
                type: Input
            }], followFinger: [{
                type: Input
            }], allowTouchMove: [{
                type: Input
            }], threshold: [{
                type: Input
            }], touchMoveStopPropagation: [{
                type: Input
            }], touchStartPreventDefault: [{
                type: Input
            }], touchStartForcePreventDefault: [{
                type: Input
            }], touchReleaseOnEdges: [{
                type: Input
            }], uniqueNavElements: [{
                type: Input
            }], resistance: [{
                type: Input
            }], resistanceRatio: [{
                type: Input
            }], watchSlidesProgress: [{
                type: Input
            }], grabCursor: [{
                type: Input
            }], preventClicks: [{
                type: Input
            }], preventClicksPropagation: [{
                type: Input
            }], slideToClickedSlide: [{
                type: Input
            }], preloadImages: [{
                type: Input
            }], updateOnImagesReady: [{
                type: Input
            }], loop: [{
                type: Input
            }], loopAdditionalSlides: [{
                type: Input
            }], loopedSlides: [{
                type: Input
            }], loopFillGroupWithBlank: [{
                type: Input
            }], loopPreventsSlide: [{
                type: Input
            }], allowSlidePrev: [{
                type: Input
            }], allowSlideNext: [{
                type: Input
            }], swipeHandler: [{
                type: Input
            }], noSwiping: [{
                type: Input
            }], noSwipingClass: [{
                type: Input
            }], noSwipingSelector: [{
                type: Input
            }], passiveListeners: [{
                type: Input
            }], containerModifierClass: [{
                type: Input
            }], slideClass: [{
                type: Input
            }], slideBlankClass: [{
                type: Input
            }], slideActiveClass: [{
                type: Input
            }], slideDuplicateActiveClass: [{
                type: Input
            }], slideVisibleClass: [{
                type: Input
            }], slideDuplicateClass: [{
                type: Input
            }], slideNextClass: [{
                type: Input
            }], slideDuplicateNextClass: [{
                type: Input
            }], slidePrevClass: [{
                type: Input
            }], slideDuplicatePrevClass: [{
                type: Input
            }], wrapperClass: [{
                type: Input
            }], runCallbacksOnInit: [{
                type: Input
            }], observeParents: [{
                type: Input
            }], observeSlideChildren: [{
                type: Input
            }], a11y: [{
                type: Input
            }], autoplay: [{
                type: Input
            }], controller: [{
                type: Input
            }], coverflowEffect: [{
                type: Input
            }], cubeEffect: [{
                type: Input
            }], fadeEffect: [{
                type: Input
            }], flipEffect: [{
                type: Input
            }], creativeEffect: [{
                type: Input
            }], cardsEffect: [{
                type: Input
            }], hashNavigation: [{
                type: Input
            }], history: [{
                type: Input
            }], keyboard: [{
                type: Input
            }], lazy: [{
                type: Input
            }], mousewheel: [{
                type: Input
            }], parallax: [{
                type: Input
            }], thumbs: [{
                type: Input
            }], zoom: [{
                type: Input
            }], class: [{
                type: Input
            }], id: [{
                type: Input
            }], navigation: [{
                type: Input
            }], pagination: [{
                type: Input
            }], scrollbar: [{
                type: Input
            }], virtual: [{
                type: Input
            }], index: [{
                type: Input
            }], config: [{
                type: Input
            }], s__beforeBreakpoint: [{
                type: Output,
                args: ['_beforeBreakpoint']
            }], s__containerClasses: [{
                type: Output,
                args: ['_containerClasses']
            }], s__slideClass: [{
                type: Output,
                args: ['_slideClass']
            }], s__swiper: [{
                type: Output,
                args: ['_swiper']
            }], s_activeIndexChange: [{
                type: Output,
                args: ['activeIndexChange']
            }], s_afterInit: [{
                type: Output,
                args: ['afterInit']
            }], s_autoplay: [{
                type: Output,
                args: ['autoplay']
            }], s_autoplayStart: [{
                type: Output,
                args: ['autoplayStart']
            }], s_autoplayStop: [{
                type: Output,
                args: ['autoplayStop']
            }], s_beforeDestroy: [{
                type: Output,
                args: ['beforeDestroy']
            }], s_beforeInit: [{
                type: Output,
                args: ['beforeInit']
            }], s_beforeLoopFix: [{
                type: Output,
                args: ['beforeLoopFix']
            }], s_beforeResize: [{
                type: Output,
                args: ['beforeResize']
            }], s_beforeSlideChangeStart: [{
                type: Output,
                args: ['beforeSlideChangeStart']
            }], s_beforeTransitionStart: [{
                type: Output,
                args: ['beforeTransitionStart']
            }], s_breakpoint: [{
                type: Output,
                args: ['breakpoint']
            }], s_changeDirection: [{
                type: Output,
                args: ['changeDirection']
            }], s_click: [{
                type: Output,
                args: ['click']
            }], s_doubleTap: [{
                type: Output,
                args: ['doubleTap']
            }], s_doubleClick: [{
                type: Output,
                args: ['doubleClick']
            }], s_destroy: [{
                type: Output,
                args: ['destroy']
            }], s_fromEdge: [{
                type: Output,
                args: ['fromEdge']
            }], s_hashChange: [{
                type: Output,
                args: ['hashChange']
            }], s_hashSet: [{
                type: Output,
                args: ['hashSet']
            }], s_imagesReady: [{
                type: Output,
                args: ['imagesReady']
            }], s_init: [{
                type: Output,
                args: ['init']
            }], s_keyPress: [{
                type: Output,
                args: ['keyPress']
            }], s_lazyImageLoad: [{
                type: Output,
                args: ['lazyImageLoad']
            }], s_lazyImageReady: [{
                type: Output,
                args: ['lazyImageReady']
            }], s_loopFix: [{
                type: Output,
                args: ['loopFix']
            }], s_momentumBounce: [{
                type: Output,
                args: ['momentumBounce']
            }], s_navigationHide: [{
                type: Output,
                args: ['navigationHide']
            }], s_navigationShow: [{
                type: Output,
                args: ['navigationShow']
            }], s_observerUpdate: [{
                type: Output,
                args: ['observerUpdate']
            }], s_orientationchange: [{
                type: Output,
                args: ['orientationchange']
            }], s_paginationHide: [{
                type: Output,
                args: ['paginationHide']
            }], s_paginationRender: [{
                type: Output,
                args: ['paginationRender']
            }], s_paginationShow: [{
                type: Output,
                args: ['paginationShow']
            }], s_paginationUpdate: [{
                type: Output,
                args: ['paginationUpdate']
            }], s_progress: [{
                type: Output,
                args: ['progress']
            }], s_reachBeginning: [{
                type: Output,
                args: ['reachBeginning']
            }], s_reachEnd: [{
                type: Output,
                args: ['reachEnd']
            }], s_realIndexChange: [{
                type: Output,
                args: ['realIndexChange']
            }], s_resize: [{
                type: Output,
                args: ['resize']
            }], s_scroll: [{
                type: Output,
                args: ['scroll']
            }], s_scrollbarDragEnd: [{
                type: Output,
                args: ['scrollbarDragEnd']
            }], s_scrollbarDragMove: [{
                type: Output,
                args: ['scrollbarDragMove']
            }], s_scrollbarDragStart: [{
                type: Output,
                args: ['scrollbarDragStart']
            }], s_setTransition: [{
                type: Output,
                args: ['setTransition']
            }], s_setTranslate: [{
                type: Output,
                args: ['setTranslate']
            }], s_slideChange: [{
                type: Output,
                args: ['slideChange']
            }], s_slideChangeTransitionEnd: [{
                type: Output,
                args: ['slideChangeTransitionEnd']
            }], s_slideChangeTransitionStart: [{
                type: Output,
                args: ['slideChangeTransitionStart']
            }], s_slideNextTransitionEnd: [{
                type: Output,
                args: ['slideNextTransitionEnd']
            }], s_slideNextTransitionStart: [{
                type: Output,
                args: ['slideNextTransitionStart']
            }], s_slidePrevTransitionEnd: [{
                type: Output,
                args: ['slidePrevTransitionEnd']
            }], s_slidePrevTransitionStart: [{
                type: Output,
                args: ['slidePrevTransitionStart']
            }], s_slideResetTransitionStart: [{
                type: Output,
                args: ['slideResetTransitionStart']
            }], s_slideResetTransitionEnd: [{
                type: Output,
                args: ['slideResetTransitionEnd']
            }], s_sliderMove: [{
                type: Output,
                args: ['sliderMove']
            }], s_sliderFirstMove: [{
                type: Output,
                args: ['sliderFirstMove']
            }], s_slidesLengthChange: [{
                type: Output,
                args: ['slidesLengthChange']
            }], s_slidesGridLengthChange: [{
                type: Output,
                args: ['slidesGridLengthChange']
            }], s_snapGridLengthChange: [{
                type: Output,
                args: ['snapGridLengthChange']
            }], s_snapIndexChange: [{
                type: Output,
                args: ['snapIndexChange']
            }], s_tap: [{
                type: Output,
                args: ['tap']
            }], s_toEdge: [{
                type: Output,
                args: ['toEdge']
            }], s_touchEnd: [{
                type: Output,
                args: ['touchEnd']
            }], s_touchMove: [{
                type: Output,
                args: ['touchMove']
            }], s_touchMoveOpposite: [{
                type: Output,
                args: ['touchMoveOpposite']
            }], s_touchStart: [{
                type: Output,
                args: ['touchStart']
            }], s_transitionEnd: [{
                type: Output,
                args: ['transitionEnd']
            }], s_transitionStart: [{
                type: Output,
                args: ['transitionStart']
            }], s_update: [{
                type: Output,
                args: ['update']
            }], s_zoomChange: [{
                type: Output,
                args: ['zoomChange']
            }], s_swiper: [{
                type: Output,
                args: ['swiper']
            }], indexChange: [{
                type: Output
            }], prevElRef: [{
                type: ViewChild,
                args: ['prevElRef', { static: false }]
            }], nextElRef: [{
                type: ViewChild,
                args: ['nextElRef', { static: false }]
            }], scrollbarElRef: [{
                type: ViewChild,
                args: ['scrollbarElRef', { static: false }]
            }], paginationElRef: [{
                type: ViewChild,
                args: ['paginationElRef', { static: false }]
            }], slidesEl: [{
                type: ContentChildren,
                args: [SwiperSlideDirective, { descendants: false, emitDistinctChangesOnly: true }]
            }], containerClasses: [{
                type: HostBinding,
                args: ['class']
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3dpcGVyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9hbmd1bGFyL3NyYy9zd2lwZXIuY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vc3JjL2FuZ3VsYXIvc3JjL3N3aXBlci5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQ0wsdUJBQXVCLEVBRXZCLFNBQVMsRUFDVCxlQUFlLEVBRWYsWUFBWSxFQUNaLFdBQVcsRUFDWCxNQUFNLEVBQ04sS0FBSyxFQUdMLE1BQU0sRUFDTixXQUFXLEVBR1gsU0FBUyxFQUNULGlCQUFpQixHQUNsQixNQUFNLGVBQWUsQ0FBQztBQUN2QixhQUFhO0FBQ2IsT0FBTyxNQUFNLE1BQU0sUUFBUSxDQUFDO0FBQzVCLE9BQU8sRUFBYyxFQUFFLEVBQUUsT0FBTyxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQy9DLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUMvQyxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQztBQUNoRSxPQUFPLEVBQ0wsTUFBTSxFQUNOLFFBQVEsRUFDUixXQUFXLEVBQ1gsaUJBQWlCLEVBQ2pCLHFCQUFxQixFQUNyQixRQUFRLEdBQ1QsTUFBTSxlQUFlLENBQUM7QUFTdkIsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0saUJBQWlCLENBQUM7OztBQWNwRCxNQUFNLE9BQU8sZUFBZTtJQXdZMUIsWUFDVSxPQUFlLEVBQ2YsVUFBc0IsRUFDdEIsa0JBQXFDLEVBQ2hCLFdBQW1CO1FBSHhDLFlBQU8sR0FBUCxPQUFPLENBQVE7UUFDZixlQUFVLEdBQVYsVUFBVSxDQUFZO1FBQ3RCLHVCQUFrQixHQUFsQixrQkFBa0IsQ0FBbUI7UUFDaEIsZ0JBQVcsR0FBWCxXQUFXLENBQVE7UUFuVXpDLGVBQVUsR0FBZ0MsY0FBYyxDQUFDO1FBVXpELGlCQUFZLEdBQWtD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QVc7dUJBQUMsT0FBTyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxuICBDaGFuZ2VEZXRlY3RvclJlZixcbiAgQ29tcG9uZW50LFxuICBDb250ZW50Q2hpbGRyZW4sXG4gIEVsZW1lbnRSZWYsXG4gIEV2ZW50RW1pdHRlcixcbiAgSG9zdEJpbmRpbmcsXG4gIEluamVjdCxcbiAgSW5wdXQsXG4gIE5nWm9uZSxcbiAgT25Jbml0LFxuICBPdXRwdXQsXG4gIFBMQVRGT1JNX0lELFxuICBRdWVyeUxpc3QsXG4gIFNpbXBsZUNoYW5nZXMsXG4gIFZpZXdDaGlsZCxcbiAgVmlld0VuY2Fwc3VsYXRpb24sXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuLy8gQHRzLWlnbm9yZVxuaW1wb3J0IFN3aXBlciBmcm9tICdzd2lwZXInO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSwgb2YsIFN1YmplY3QgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IGdldFBhcmFtcyB9IGZyb20gJy4vdXRpbHMvZ2V0LXBhcmFtcyc7XG5pbXBvcnQgeyBTd2lwZXJTbGlkZURpcmVjdGl2ZSB9IGZyb20gJy4vc3dpcGVyLXNsaWRlLmRpcmVjdGl2ZSc7XG5pbXBvcnQge1xuICBleHRlbmQsXG4gIGlzT2JqZWN0LFxuICBzZXRQcm9wZXJ0eSxcbiAgaWdub3JlTmdPbkNoYW5nZXMsXG4gIGNvZXJjZUJvb2xlYW5Qcm9wZXJ0eSxcbiAgaXNTaG93RWwsXG59IGZyb20gJy4vdXRpbHMvdXRpbHMnO1xuaW1wb3J0IHtcbiAgU3dpcGVyT3B0aW9ucyxcbiAgU3dpcGVyRXZlbnRzLFxuICBOYXZpZ2F0aW9uT3B0aW9ucyxcbiAgUGFnaW5hdGlvbk9wdGlvbnMsXG4gIFNjcm9sbGJhck9wdGlvbnMsXG4gIFZpcnR1YWxPcHRpb25zLFxufSBmcm9tICdzd2lwZXIvdHlwZXMnO1xuaW1wb3J0IHsgaXNQbGF0Zm9ybUJyb3dzZXIgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnc3dpcGVyLCBbc3dpcGVyXScsXG4gIHRlbXBsYXRlVXJsOiAnLi9zd2lwZXIuY29tcG9uZW50Lmh0bWwnLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcbiAgc3R5bGVzOiBbXG4gICAgYFxuICAgICAgc3dpcGVyIHtcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICB9XG4gICAgYCxcbiAgXSxcbn0pXG5leHBvcnQgY2xhc3MgU3dpcGVyQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgQElucHV0KCkgZGlyZWN0aW9uOiBTd2lwZXJPcHRpb25zWydkaXJlY3Rpb24nXTtcbiAgQElucHV0KCkgdG91Y2hFdmVudHNUYXJnZXQ6IFN3aXBlck9wdGlvbnNbJ3RvdWNoRXZlbnRzVGFyZ2V0J107XG4gIEBJbnB1dCgpIGluaXRpYWxTbGlkZTogU3dpcGVyT3B0aW9uc1snaW5pdGlhbFNsaWRlJ107XG4gIEBJbnB1dCgpIHNwZWVkOiBTd2lwZXJPcHRpb25zWydzcGVlZCddO1xuICBASW5wdXQoKSBjc3NNb2RlOiBTd2lwZXJPcHRpb25zWydjc3NNb2RlJ107XG4gIEBJbnB1dCgpIHVwZGF0ZU9uV2luZG93UmVzaXplOiBTd2lwZXJPcHRpb25zWyd1cGRhdGVPbldpbmRvd1Jlc2l6ZSddO1xuICBASW5wdXQoKSByZXNpemVPYnNlcnZlcjogU3dpcGVyT3B0aW9uc1sncmVzaXplT2JzZXJ2ZXInXTtcbiAgQElucHV0KCkgbmVzdGVkOiBTd2lwZXJPcHRpb25zWyduZXN0ZWQnXTtcbiAgQElucHV0KCkgZm9jdXNhYmxlRWxlbWVudHM6IFN3aXBlck9wdGlvbnNbJ2ZvY3VzYWJsZUVsZW1lbnRzJ107XG4gIEBJbnB1dCgpIHdpZHRoOiBTd2lwZXJPcHRpb25zWyd3aWR0aCddO1xuICBASW5wdXQoKSBoZWlnaHQ6IFN3aXBlck9wdGlvbnNbJ2hlaWdodCddO1xuICBASW5wdXQoKSBwcmV2ZW50SW50ZXJhY3Rpb25PblRyYW5zaXRpb246IFN3aXBlck9wdGlvbnNbJ3ByZXZlbnRJbnRlcmFjdGlvbk9uVHJhbnNpdGlvbiddO1xuICBASW5wdXQoKSB1c2VyQWdlbnQ6IFN3aXBlck9wdGlvbnNbJ3VzZXJBZ2VudCddO1xuICBASW5wdXQoKSB1cmw6IFN3aXBlck9wdGlvbnNbJ3VybCddO1xuICBASW5wdXQoKSBlZGdlU3dpcGVEZXRlY3Rpb246IGJvb2xlYW4gfCBzdHJpbmc7XG4gIEBJbnB1dCgpIGVkZ2VTd2lwZVRocmVzaG9sZDogbnVtYmVyO1xuICBASW5wdXQoKSBmcmVlTW9kZTogU3dpcGVyT3B0aW9uc1snZnJlZU1vZGUnXTtcbiAgQElucHV0KCkgYXV0b0hlaWdodDogU3dpcGVyT3B0aW9uc1snYXV0b0hlaWdodCddO1xuICBASW5wdXQoKSBzZXRXcmFwcGVyU2l6ZTogU3dpcGVyT3B0aW9uc1snc2V0V3JhcHBlclNpemUnXTtcbiAgQElucHV0KCkgdmlydHVhbFRyYW5zbGF0ZTogU3dpcGVyT3B0aW9uc1sndmlydHVhbFRyYW5zbGF0ZSddO1xuICBASW5wdXQoKSBlZmZlY3Q6IFN3aXBlck9wdGlvbnNbJ2VmZmVjdCddO1xuICBASW5wdXQoKSBicmVha3BvaW50czogU3dpcGVyT3B0aW9uc1snYnJlYWtwb2ludHMnXTtcbiAgQElucHV0KCkgc3BhY2VCZXR3ZWVuOiBTd2lwZXJPcHRpb25zWydzcGFjZUJldHdlZW4nXTtcbiAgQElucHV0KCkgc2xpZGVzUGVyVmlldzogU3dpcGVyT3B0aW9uc1snc2xpZGVzUGVyVmlldyddO1xuICBASW5wdXQoKSBncmlkOiBTd2lwZXJPcHRpb25zWydncmlkJ107XG4gIEBJbnB1dCgpIHNsaWRlc1Blckdyb3VwOiBTd2lwZXJPcHRpb25zWydzbGlkZXNQZXJHcm91cCddO1xuICBASW5wdXQoKSBzbGlkZXNQZXJHcm91cFNraXA6IFN3aXBlck9wdGlvbnNbJ3NsaWRlc1Blckdyb3VwU2tpcCddO1xuICBASW5wdXQoKSBjZW50ZXJlZFNsaWRlczogU3dpcGVyT3B0aW9uc1snY2VudGVyZWRTbGlkZXMnXTtcbiAgQElucHV0KCkgY2VudGVyZWRTbGlkZXNCb3VuZHM6IFN3aXBlck9wdGlvbnNbJ2NlbnRlcmVkU2xpZGVzQm91bmRzJ107XG4gIEBJbnB1dCgpIHNsaWRlc09mZnNldEJlZm9yZTogU3dpcGVyT3B0aW9uc1snc2xpZGVzT2Zmc2V0QmVmb3JlJ107XG4gIEBJbnB1dCgpIHNsaWRlc09mZnNldEFmdGVyOiBTd2lwZXJPcHRpb25zWydzbGlkZXNPZmZzZXRBZnRlciddO1xuICBASW5wdXQoKSBub3JtYWxpemVTbGlkZUluZGV4OiBTd2lwZXJPcHRpb25zWydub3JtYWxpemVTbGlkZUluZGV4J107XG4gIEBJbnB1dCgpIGNlbnRlckluc3VmZmljaWVudFNsaWRlczogU3dpcGVyT3B0aW9uc1snY2VudGVySW5zdWZmaWNpZW50U2xpZGVzJ107XG4gIEBJbnB1dCgpIHdhdGNoT3ZlcmZsb3c6IFN3aXBlck9wdGlvbnNbJ3dhdGNoT3ZlcmZsb3cnXTtcbiAgQElucHV0KCkgcm91bmRMZW5ndGhzOiBTd2lwZXJPcHRpb25zWydyb3VuZExlbmd0aHMnXTtcbiAgQElucHV0KCkgdG91Y2hSYXRpbzogU3dpcGVyT3B0aW9uc1sndG91Y2hSYXRpbyddO1xuICBASW5wdXQoKSB0b3VjaEFuZ2xlOiBTd2lwZXJPcHRpb25zWyd0b3VjaEFuZ2xlJ107XG4gIEBJbnB1dCgpIHNpbXVsYXRlVG91Y2g6IFN3aXBlck9wdGlvbnNbJ3NpbXVsYXRlVG91Y2gnXTtcbiAgQElucHV0KCkgc2hvcnRTd2lwZXM6IFN3aXBlck9wdGlvbnNbJ3Nob3J0U3dpcGVzJ107XG4gIEBJbnB1dCgpIGxvbmdTd2lwZXM6IFN3aXBlck9wdGlvbnNbJ2xvbmdTd2lwZXMnXTtcbiAgQElucHV0KCkgbG9uZ1N3aXBlc1JhdGlvOiBTd2lwZXJPcHRpb25zWydsb25nU3dpcGVzUmF0aW8nXTtcbiAgQElucHV0KCkgbG9uZ1N3aXBlc01zOiBTd2lwZXJPcHRpb25zWydsb25nU3dpcGVzTXMnXTtcbiAgQElucHV0KCkgZm9sbG93RmluZ2VyOiBTd2lwZXJPcHRpb25zWydmb2xsb3dGaW5nZXInXTtcbiAgQElucHV0KCkgYWxsb3dUb3VjaE1vdmU6IFN3aXBlck9wdGlvbnNbJ2FsbG93VG91Y2hNb3ZlJ107XG4gIEBJbnB1dCgpIHRocmVzaG9sZDogU3dpcGVyT3B0aW9uc1sndGhyZXNob2xkJ107XG4gIEBJbnB1dCgpIHRvdWNoTW92ZVN0b3BQcm9wYWdhdGlvbjogU3dpcGVyT3B0aW9uc1sndG91Y2hNb3ZlU3RvcFByb3BhZ2F0aW9uJ107XG4gIEBJbnB1dCgpIHRvdWNoU3RhcnRQcmV2ZW50RGVmYXVsdDogU3dpcGVyT3B0aW9uc1sndG91Y2hTdGFydFByZXZlbnREZWZhdWx0J107XG4gIEBJbnB1dCgpIHRvdWNoU3RhcnRGb3JjZVByZXZlbnREZWZhdWx0OiBTd2lwZXJPcHRpb25zWyd0b3VjaFN0YXJ0Rm9yY2VQcmV2ZW50RGVmYXVsdCddO1xuICBASW5wdXQoKSB0b3VjaFJlbGVhc2VPbkVkZ2VzOiBTd2lwZXJPcHRpb25zWyd0b3VjaFJlbGVhc2VPbkVkZ2VzJ107XG4gIEBJbnB1dCgpIHVuaXF1ZU5hdkVsZW1lbnRzOiBTd2lwZXJPcHRpb25zWyd1bmlxdWVOYXZFbGVtZW50cyddO1xuICBASW5wdXQoKSByZXNpc3RhbmNlOiBTd2lwZXJPcHRpb25zWydyZXNpc3RhbmNlJ107XG4gIEBJbnB1dCgpIHJlc2lzdGFuY2VSYXRpbzogU3dpcGVyT3B0aW9uc1sncmVzaXN0YW5jZVJhdGlvJ107XG4gIEBJbnB1dCgpIHdhdGNoU2xpZGVzUHJvZ3Jlc3M6IFN3aXBlck9wdGlvbnNbJ3dhdGNoU2xpZGVzUHJvZ3Jlc3MnXTtcbiAgQElucHV0KCkgZ3JhYkN1cnNvcjogU3dpcGVyT3B0aW9uc1snZ3JhYkN1cnNvciddO1xuICBASW5wdXQoKSBwcmV2ZW50Q2xpY2tzOiBTd2lwZXJPcHRpb25zWydwcmV2ZW50Q2xpY2tzJ107XG4gIEBJbnB1dCgpIHByZXZlbnRDbGlja3NQcm9wYWdhdGlvbjogU3dpcGVyT3B0aW9uc1sncHJldmVudENsaWNrc1Byb3BhZ2F0aW9uJ107XG4gIEBJbnB1dCgpIHNsaWRlVG9DbGlja2VkU2xpZGU6IFN3aXBlck9wdGlvbnNbJ3NsaWRlVG9DbGlja2VkU2xpZGUnXTtcbiAgQElucHV0KCkgcHJlbG9hZEltYWdlczogU3dpcGVyT3B0aW9uc1sncHJlbG9hZEltYWdlcyddO1xuICBASW5wdXQoKSB1cGRhdGVPbkltYWdlc1JlYWR5OiBTd2lwZXJPcHRpb25zWyd1cGRhdGVPbkltYWdlc1JlYWR5J107XG4gIEBJbnB1dCgpIGxvb3A6IFN3aXBlck9wdGlvbnNbJ2xvb3AnXTtcbiAgQElucHV0KCkgbG9vcEFkZGl0aW9uYWxTbGlkZXM6IFN3aXBlck9wdGlvbnNbJ2xvb3BBZGRpdGlvbmFsU2xpZGVzJ107XG4gIEBJbnB1dCgpIGxvb3BlZFNsaWRlczogU3dpcGVyT3B0aW9uc1snbG9vcGVkU2xpZGVzJ107XG4gIEBJbnB1dCgpIGxvb3BGaWxsR3JvdXBXaXRoQmxhbms6IFN3aXBlck9wdGlvbnNbJ2xvb3BGaWxsR3JvdXBXaXRoQmxhbmsnXTtcbiAgQElucHV0KCkgbG9vcFByZXZlbnRzU2xpZGU6IFN3aXBlck9wdGlvbnNbJ2xvb3BQcmV2ZW50c1NsaWRlJ107XG4gIEBJbnB1dCgpIGFsbG93U2xpZGVQcmV2OiBTd2lwZXJPcHRpb25zWydhbGxvd1NsaWRlUHJldiddO1xuICBASW5wdXQoKSBhbGxvd1NsaWRlTmV4dDogU3dpcGVyT3B0aW9uc1snYWxsb3dTbGlkZU5leHQnXTtcbiAgQElucHV0KCkgc3dpcGVIYW5kbGVyOiBTd2lwZXJPcHRpb25zWydzd2lwZUhhbmRsZXInXTtcbiAgQElucHV0KCkgbm9Td2lwaW5nOiBTd2lwZXJPcHRpb25zWydub1N3aXBpbmcnXTtcbiAgQElucHV0KCkgbm9Td2lwaW5nQ2xhc3M6IFN3aXBlck9wdGlvbnNbJ25vU3dpcGluZ0NsYXNzJ107XG4gIEBJbnB1dCgpIG5vU3dpcGluZ1NlbGVjdG9yOiBTd2lwZXJPcHRpb25zWydub1N3aXBpbmdTZWxlY3RvciddO1xuICBASW5wdXQoKSBwYXNzaXZlTGlzdGVuZXJzOiBTd2lwZXJPcHRpb25zWydwYXNzaXZlTGlzdGVuZXJzJ107XG4gIEBJbnB1dCgpIGNvbnRhaW5lck1vZGlmaWVyQ2xhc3M6IFN3aXBlck9wdGlvbnNbJ2NvbnRhaW5lck1vZGlmaWVyQ2xhc3MnXTtcbiAgQElucHV0KCkgc2xpZGVDbGFzczogU3dpcGVyT3B0aW9uc1snc2xpZGVDbGFzcyddID0gJ3N3aXBlci1zbGlkZSc7XG4gIEBJbnB1dCgpIHNsaWRlQmxhbmtDbGFzczogU3dpcGVyT3B0aW9uc1snc2xpZGVCbGFua0NsYXNzJ107XG4gIEBJbnB1dCgpIHNsaWRlQWN0aXZlQ2xhc3M6IFN3aXBlck9wdGlvbnNbJ3NsaWRlQWN0aXZlQ2xhc3MnXTtcbiAgQElucHV0KCkgc2xpZGVEdXBsaWNhdGVBY3RpdmVDbGFzczogU3dpcGVyT3B0aW9uc1snc2xpZGVEdXBsaWNhdGVBY3RpdmVDbGFzcyddO1xuICBASW5wdXQoKSBzbGlkZVZpc2libGVDbGFzczogU3dpcGVyT3B0aW9uc1snc2xpZGVWaXNpYmxlQ2xhc3MnXTtcbiAgQElucHV0KCkgc2xpZGVEdXBsaWNhdGVDbGFzczogU3dpcGVyT3B0aW9uc1snc2xpZGVEdXBsaWNhdGVDbGFzcyddO1xuICBASW5wdXQoKSBzbGlkZU5leHRDbGFzczogU3dpcGVyT3B0aW9uc1snc2xpZGVOZXh0Q2xhc3MnXTtcbiAgQElucHV0KCkgc2xpZGVEdXBsaWNhdGVOZXh0Q2xhc3M6IFN3aXBlck9wdGlvbnNbJ3NsaWRlRHVwbGljYXRlTmV4dENsYXNzJ107XG4gIEBJbnB1dCgpIHNsaWRlUHJldkNsYXNzOiBTd2lwZXJPcHRpb25zWydzbGlkZVByZXZDbGFzcyddO1xuICBASW5wdXQoKSBzbGlkZUR1cGxpY2F0ZVByZXZDbGFzczogU3dpcGVyT3B0aW9uc1snc2xpZGVEdXBsaWNhdGVQcmV2Q2xhc3MnXTtcbiAgQElucHV0KCkgd3JhcHBlckNsYXNzOiBTd2lwZXJPcHRpb25zWyd3cmFwcGVyQ2xhc3MnXSA9ICdzd2lwZXItd3JhcHBlcic7XG4gIEBJbnB1dCgpIHJ1bkNhbGxiYWNrc09uSW5pdDogU3dpcGVyT3B0aW9uc1sncnVuQ2FsbGJhY2tzT25Jbml0J107XG4gIEBJbnB1dCgpIG9ic2VydmVQYXJlbnRzOiBTd2lwZXJPcHRpb25zWydvYnNlcnZlUGFyZW50cyddO1xuICBASW5wdXQoKSBvYnNlcnZlU2xpZGVDaGlsZHJlbjogU3dpcGVyT3B0aW9uc1snb2JzZXJ2ZVNsaWRlQ2hpbGRyZW4nXTtcbiAgQElucHV0KCkgYTExeTogU3dpcGVyT3B0aW9uc1snYTExeSddO1xuICBASW5wdXQoKSBhdXRvcGxheTogU3dpcGVyT3B0aW9uc1snYXV0b3BsYXknXTtcbiAgQElucHV0KCkgY29udHJvbGxlcjogU3dpcGVyT3B0aW9uc1snY29udHJvbGxlciddO1xuICBASW5wdXQoKSBjb3ZlcmZsb3dFZmZlY3Q6IFN3aXBlck9wdGlvbnNbJ2NvdmVyZmxvd0VmZmVjdCddO1xuICBASW5wdXQoKSBjdWJlRWZmZWN0OiBTd2lwZXJPcHRpb25zWydjdWJlRWZmZWN0J107XG4gIEBJbnB1dCgpIGZhZGVFZmZlY3Q6IFN3aXBlck9wdGlvbnNbJ2ZhZGVFZmZlY3QnXTtcbiAgQElucHV0KCkgZmxpcEVmZmVjdDogU3dpcGVyT3B0aW9uc1snZmxpcEVmZmVjdCddO1xuICBASW5wdXQoKSBjcmVhdGl2ZUVmZmVjdDogU3dpcGVyT3B0aW9uc1snY3JlYXRpdmVFZmZlY3QnXTtcbiAgQElucHV0KCkgY2FyZHNFZmZlY3Q6IFN3aXBlck9wdGlvbnNbJ2NhcmRzRWZmZWN0J107XG4gIEBJbnB1dCgpIGhhc2hOYXZpZ2F0aW9uOiBTd2lwZXJPcHRpb25zWydoYXNoTmF2aWdhdGlvbiddO1xuICBASW5wdXQoKSBoaXN0b3J5OiBTd2lwZXJPcHRpb25zWydoaXN0b3J5J107XG4gIEBJbnB1dCgpIGtleWJvYXJkOiBTd2lwZXJPcHRpb25zWydrZXlib2FyZCddO1xuICBASW5wdXQoKSBsYXp5OiBTd2lwZXJPcHRpb25zWydsYXp5J107XG4gIEBJbnB1dCgpIG1vdXNld2hlZWw6IFN3aXBlck9wdGlvbnNbJ21vdXNld2hlZWwnXTtcbiAgQElucHV0KCkgcGFyYWxsYXg6IFN3aXBlck9wdGlvbnNbJ3BhcmFsbGF4J107XG4gIEBJbnB1dCgpIHRodW1iczogU3dpcGVyT3B0aW9uc1sndGh1bWJzJ107XG4gIEBJbnB1dCgpIHpvb206IFN3aXBlck9wdGlvbnNbJ3pvb20nXTtcbiAgQElucHV0KCkgY2xhc3M6IHN0cmluZztcbiAgQElucHV0KCkgaWQ6IHN0cmluZztcbiAgQElucHV0KClcbiAgc2V0IG5hdmlnYXRpb24odmFsKSB7XG4gICAgY29uc3QgY3VycmVudE5leHQgPVxuICAgICAgdHlwZW9mIHRoaXMuX25hdmlnYXRpb24gIT09ICdib29sZWFuJyAmJiB0aGlzLl9uYXZpZ2F0aW9uICE9PSAnJ1xuICAgICAgICA/IHRoaXMuX25hdmlnYXRpb24/Lm5leHRFbFxuICAgICAgICA6IG51bGw7XG4gICAgY29uc3QgY3VycmVudFByZXYgPVxuICAgICAgdHlwZW9mIHRoaXMuX25hdmlnYXRpb24gIT09ICdib29sZWFuJyAmJiB0aGlzLl9uYXZpZ2F0aW9uICE9PSAnJ1xuICAgICAgICA/IHRoaXMuX25hdmlnYXRpb24/LnByZXZFbFxuICAgICAgICA6IG51bGw7XG4gICAgdGhpcy5fbmF2aWdhdGlvbiA9IHNldFByb3BlcnR5KHZhbCwge1xuICAgICAgbmV4dEVsOiBjdXJyZW50TmV4dCB8fCBudWxsLFxuICAgICAgcHJldkVsOiBjdXJyZW50UHJldiB8fCBudWxsLFxuICAgIH0pO1xuICAgIHRoaXMuc2hvd05hdmlnYXRpb24gPSAhKFxuICAgICAgY29lcmNlQm9vbGVhblByb3BlcnR5KHZhbCkgIT09IHRydWUgfHxcbiAgICAgICh0aGlzLl9uYXZpZ2F0aW9uICYmXG4gICAgICAgIHR5cGVvZiB0aGlzLl9uYXZpZ2F0aW9uICE9PSAnYm9vbGVhbicgJiZcbiAgICAgICAgdGhpcy5fbmF2aWdhdGlvbi5wcmV2RWwgIT09IHRoaXMuX3ByZXZFbFJlZj8ubmF0aXZlRWxlbWVudCAmJlxuICAgICAgICAodGhpcy5fbmF2aWdhdGlvbi5wcmV2RWwgIT09IG51bGwgfHwgdGhpcy5fbmF2aWdhdGlvbi5uZXh0RWwgIT09IG51bGwpICYmXG4gICAgICAgICh0eXBlb2YgdGhpcy5fbmF2aWdhdGlvbi5uZXh0RWwgPT09ICdzdHJpbmcnIHx8XG4gICAgICAgICAgdHlwZW9mIHRoaXMuX25hdmlnYXRpb24ucHJldkVsID09PSAnc3RyaW5nJyB8fFxuICAgICAgICAgIHR5cGVvZiB0aGlzLl9uYXZpZ2F0aW9uLm5leHRFbCA9PT0gJ29iamVjdCcgfHxcbiAgICAgICAgICB0eXBlb2YgdGhpcy5fbmF2aWdhdGlvbi5wcmV2RWwgPT09ICdvYmplY3QnKSlcbiAgICApO1xuICB9XG4gIGdldCBuYXZpZ2F0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLl9uYXZpZ2F0aW9uO1xuICB9XG4gIHByaXZhdGUgX25hdmlnYXRpb246IE5hdmlnYXRpb25PcHRpb25zIHwgYm9vbGVhbiB8ICcnO1xuICBzaG93TmF2aWdhdGlvbjogYm9vbGVhbiA9IHRydWU7XG5cbiAgQElucHV0KClcbiAgc2V0IHBhZ2luYXRpb24odmFsKSB7XG4gICAgY29uc3QgY3VycmVudCA9XG4gICAgICB0eXBlb2YgdGhpcy5fcGFnaW5hdGlvbiAhPT0gJ2Jvb2xlYW4nICYmIHRoaXMuX3BhZ2luYXRpb24gIT09ICcnXG4gICAgICAgID8gdGhpcy5fcGFnaW5hdGlvbj8uZWxcbiAgICAgICAgOiBudWxsO1xuICAgIHRoaXMuX3BhZ2luYXRpb24gPSBzZXRQcm9wZXJ0eSh2YWwsIHtcbiAgICAgIGVsOiBjdXJyZW50IHx8IG51bGwsXG4gICAgfSk7XG4gICAgdGhpcy5zaG93UGFnaW5hdGlvbiA9IGlzU2hvd0VsKHZhbCwgdGhpcy5fcGFnaW5hdGlvbiwgdGhpcy5fcGFnaW5hdGlvbkVsUmVmKTtcbiAgfVxuICBnZXQgcGFnaW5hdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy5fcGFnaW5hdGlvbjtcbiAgfVxuICBwcml2YXRlIF9wYWdpbmF0aW9uOiBQYWdpbmF0aW9uT3B0aW9ucyB8IGJvb2xlYW4gfCAnJztcbiAgc2hvd1BhZ2luYXRpb246IGJvb2xlYW4gPSB0cnVlO1xuXG4gIEBJbnB1dCgpXG4gIHNldCBzY3JvbGxiYXIodmFsKSB7XG4gICAgY29uc3QgY3VycmVudCA9XG4gICAgICB0eXBlb2YgdGhpcy5fc2Nyb2xsYmFyICE9PSAnYm9vbGVhbicgJiYgdGhpcy5fc2Nyb2xsYmFyICE9PSAnJyA/IHRoaXMuX3Njcm9sbGJhcj8uZWwgOiBudWxsO1xuICAgIHRoaXMuX3Njcm9sbGJhciA9IHNldFByb3BlcnR5KHZhbCwge1xuICAgICAgZWw6IGN1cnJlbnQgfHwgbnVsbCxcbiAgICB9KTtcbiAgICB0aGlzLnNob3dTY3JvbGxiYXIgPSBpc1Nob3dFbCh2YWwsIHRoaXMuX3Njcm9sbGJhciwgdGhpcy5fc2Nyb2xsYmFyRWxSZWYpO1xuICB9XG4gIGdldCBzY3JvbGxiYXIoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3Njcm9sbGJhcjtcbiAgfVxuICBwcml2YXRlIF9zY3JvbGxiYXI6IFNjcm9sbGJhck9wdGlvbnMgfCBib29sZWFuIHwgJyc7XG4gIHNob3dTY3JvbGxiYXI6IGJvb2xlYW4gPSB0cnVlO1xuXG4gIEBJbnB1dCgpXG4gIHNldCB2aXJ0dWFsKHZhbCkge1xuICAgIHRoaXMuX3ZpcnR1YWwgPSBzZXRQcm9wZXJ0eSh2YWwpO1xuICB9XG4gIGdldCB2aXJ0dWFsKCkge1xuICAgIHJldHVybiB0aGlzLl92aXJ0dWFsO1xuICB9XG4gIHByaXZhdGUgX3ZpcnR1YWw6IFZpcnR1YWxPcHRpb25zIHwgYm9vbGVhbiB8ICcnO1xuXG4gIEBJbnB1dCgpXG4gIHNldCBpbmRleChpbmRleDogbnVtYmVyKSB7XG4gICAgdGhpcy5zZXRJbmRleChpbmRleCk7XG4gIH1cbiAgQElucHV0KClcbiAgc2V0IGNvbmZpZyh2YWw6IFN3aXBlck9wdGlvbnMpIHtcbiAgICB0aGlzLnVwZGF0ZVN3aXBlcih2YWwpO1xuICAgIGNvbnN0IHsgcGFyYW1zIH0gPSBnZXRQYXJhbXModmFsKTtcbiAgICBPYmplY3QuYXNzaWduKHRoaXMsIHBhcmFtcyk7XG4gIH1cbiAgLy8gcHJldHRpZXItaWdub3JlXG4gIEBPdXRwdXQoJ19iZWZvcmVCcmVha3BvaW50Jykgc19fYmVmb3JlQnJlYWtwb2ludDogRXZlbnRFbWl0dGVyPFN3aXBlckV2ZW50c1snX2JlZm9yZUJyZWFrcG9pbnQnXT4gPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcbiAgLy8gcHJldHRpZXItaWdub3JlXG4gIEBPdXRwdXQoJ19jb250YWluZXJDbGFzc2VzJykgc19fY29udGFpbmVyQ2xhc3NlczogRXZlbnRFbWl0dGVyPFN3aXBlckV2ZW50c1snX2NvbnRhaW5lckNsYXNzZXMnXT4gPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcbiAgLy8gcHJldHRpZXItaWdub3JlXG4gIEBPdXRwdXQoJ19zbGlkZUNsYXNzJykgc19fc2xpZGVDbGFzczogRXZlbnRFbWl0dGVyPFN3aXBlckV2ZW50c1snX3NsaWRlQ2xhc3MnXT4gPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcbiAgLy8gcHJldHRpZXItaWdub3JlXG4gIEBPdXRwdXQoJ19zd2lwZXInKSBzX19zd2lwZXI6IEV2ZW50RW1pdHRlcjxTd2lwZXJFdmVudHNbJ19zd2lwZXInXT4gPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcbiAgLy8gcHJldHRpZXItaWdub3JlXG4gIEBPdXRwdXQoJ2FjdGl2ZUluZGV4Q2hhbmdlJykgc19hY3RpdmVJbmRleENoYW5nZTogRXZlbnRFbWl0dGVyPFN3aXBlckV2ZW50c1snYWN0aXZlSW5kZXhDaGFuZ2UnXT4gPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcbiAgLy8gcHJldHRpZXItaWdub3JlXG4gIEBPdXRwdXQoJ2FmdGVySW5pdCcpIHNfYWZ0ZXJJbml0OiBFdmVudEVtaXR0ZXI8U3dpcGVyRXZlbnRzWydhZnRlckluaXQnXT4gPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcbiAgLy8gcHJldHRpZXItaWdub3JlXG4gIEBPdXRwdXQoJ2F1dG9wbGF5Jykgc19hdXRvcGxheTogRXZlbnRFbWl0dGVyPFN3aXBlckV2ZW50c1snYXV0b3BsYXknXT4gPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcbiAgLy8gcHJldHRpZXItaWdub3JlXG4gIEBPdXRwdXQoJ2F1dG9wbGF5U3RhcnQnKSBzX2F1dG9wbGF5U3RhcnQ6IEV2ZW50RW1pdHRlcjxTd2lwZXJFdmVudHNbJ2F1dG9wbGF5U3RhcnQnXT4gPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcbiAgLy8gcHJldHRpZXItaWdub3JlXG4gIEBPdXRwdXQoJ2F1dG9wbGF5U3RvcCcpIHNfYXV0b3BsYXlTdG9wOiBFdmVudEVtaXR0ZXI8U3dpcGVyRXZlbnRzWydhdXRvcGxheVN0b3AnXT4gPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcbiAgLy8gcHJldHRpZXItaWdub3JlXG4gIEBPdXRwdXQoJ2JlZm9yZURlc3Ryb3knKSBzX2JlZm9yZURlc3Ryb3k6IEV2ZW50RW1pdHRlcjxTd2lwZXJFdmVudHNbJ2JlZm9yZURlc3Ryb3knXT4gPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcbiAgLy8gcHJldHRpZXItaWdub3JlXG4gIEBPdXRwdXQoJ2JlZm9yZUluaXQnKSBzX2JlZm9yZUluaXQ6IEV2ZW50RW1pdHRlcjxTd2lwZXJFdmVudHNbJ2JlZm9yZUluaXQnXT4gPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcbiAgLy8gcHJldHRpZXItaWdub3JlXG4gIEBPdXRwdXQoJ2JlZm9yZUxvb3BGaXgnKSBzX2JlZm9yZUxvb3BGaXg6IEV2ZW50RW1pdHRlcjxTd2lwZXJFdmVudHNbJ2JlZm9yZUxvb3BGaXgnXT4gPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcbiAgLy8gcHJldHRpZXItaWdub3JlXG4gIEBPdXRwdXQoJ2JlZm9yZVJlc2l6ZScpIHNfYmVmb3JlUmVzaXplOiBFdmVudEVtaXR0ZXI8U3dpcGVyRXZlbnRzWydiZWZvcmVSZXNpemUnXT4gPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcbiAgLy8gcHJldHRpZXItaWdub3JlXG4gIEBPdXRwdXQoJ2JlZm9yZVNsaWRlQ2hhbmdlU3RhcnQnKSBzX2JlZm9yZVNsaWRlQ2hhbmdlU3RhcnQ6IEV2ZW50RW1pdHRlcjxTd2lwZXJFdmVudHNbJ2JlZm9yZVNsaWRlQ2hhbmdlU3RhcnQnXT4gPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcbiAgLy8gcHJldHRpZXItaWdub3JlXG4gIEBPdXRwdXQoJ2JlZm9yZVRyYW5zaXRpb25TdGFydCcpIHNfYmVmb3JlVHJhbnNpdGlvblN0YXJ0OiBFdmVudEVtaXR0ZXI8U3dpcGVyRXZlbnRzWydiZWZvcmVUcmFuc2l0aW9uU3RhcnQnXT4gPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcbiAgLy8gcHJldHRpZXItaWdub3JlXG4gIEBPdXRwdXQoJ2JyZWFrcG9pbnQnKSBzX2JyZWFrcG9pbnQ6IEV2ZW50RW1pdHRlcjxTd2lwZXJFdmVudHNbJ2JyZWFrcG9pbnQnXT4gPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcbiAgLy8gcHJldHRpZXItaWdub3JlXG4gIEBPdXRwdXQoJ2NoYW5nZURpcmVjdGlvbicpIHNfY2hhbmdlRGlyZWN0aW9uOiBFdmVudEVtaXR0ZXI8U3dpcGVyRXZlbnRzWydjaGFuZ2VEaXJlY3Rpb24nXT4gPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcbiAgLy8gcHJldHRpZXItaWdub3JlXG4gIEBPdXRwdXQoJ2NsaWNrJykgc19jbGljazogRXZlbnRFbWl0dGVyPFN3aXBlckV2ZW50c1snY2xpY2snXT4gPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcbiAgLy8gcHJldHRpZXItaWdub3JlXG4gIEBPdXRwdXQoJ2RvdWJsZVRhcCcpIHNfZG91YmxlVGFwOiBFdmVudEVtaXR0ZXI8U3dpcGVyRXZlbnRzWydkb3VibGVUYXAnXT4gPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcbiAgLy8gcHJldHRpZXItaWdub3JlXG4gIEBPdXRwdXQoJ2RvdWJsZUNsaWNrJykgc19kb3VibGVDbGljazogRXZlbnRFbWl0dGVyPFN3aXBlckV2ZW50c1snZG91YmxlQ2xpY2snXT4gPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcbiAgLy8gcHJldHRpZXItaWdub3JlXG4gIEBPdXRwdXQoJ2Rlc3Ryb3knKSBzX2Rlc3Ryb3k6IEV2ZW50RW1pdHRlcjxTd2lwZXJFdmVudHNbJ2Rlc3Ryb3knXT4gPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcbiAgLy8gcHJldHRpZXItaWdub3JlXG4gIEBPdXRwdXQoJ2Zyb21FZGdlJykgc19mcm9tRWRnZTogRXZlbnRFbWl0dGVyPFN3aXBlckV2ZW50c1snZnJvbUVkZ2UnXT4gPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcbiAgLy8gcHJldHRpZXItaWdub3JlXG4gIEBPdXRwdXQoJ2hhc2hDaGFuZ2UnKSBzX2hhc2hDaGFuZ2U6IEV2ZW50RW1pdHRlcjxTd2lwZXJFdmVudHNbJ2hhc2hDaGFuZ2UnXT4gPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcbiAgLy8gcHJldHRpZXItaWdub3JlXG4gIEBPdXRwdXQoJ2hhc2hTZXQnKSBzX2hhc2hTZXQ6IEV2ZW50RW1pdHRlcjxTd2lwZXJFdmVudHNbJ2hhc2hTZXQnXT4gPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcbiAgLy8gcHJldHRpZXItaWdub3JlXG4gIEBPdXRwdXQoJ2ltYWdlc1JlYWR5Jykgc19pbWFnZXNSZWFkeTogRXZlbnRFbWl0dGVyPFN3aXBlckV2ZW50c1snaW1hZ2VzUmVhZHknXT4gPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcbiAgLy8gcHJldHRpZXItaWdub3JlXG4gIEBPdXRwdXQoJ2luaXQnKSBzX2luaXQ6IEV2ZW50RW1pdHRlcjxTd2lwZXJFdmVudHNbJ2luaXQnXT4gPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcbiAgLy8gcHJldHRpZXItaWdub3JlXG4gIEBPdXRwdXQoJ2tleVByZXNzJykgc19rZXlQcmVzczogRXZlbnRFbWl0dGVyPFN3aXBlckV2ZW50c1sna2V5UHJlc3MnXT4gPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcbiAgLy8gcHJldHRpZXItaWdub3JlXG4gIEBPdXRwdXQoJ2xhenlJbWFnZUxvYWQnKSBzX2xhenlJbWFnZUxvYWQ6IEV2ZW50RW1pdHRlcjxTd2lwZXJFdmVudHNbJ2xhenlJbWFnZUxvYWQnXT4gPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcbiAgLy8gcHJldHRpZXItaWdub3JlXG4gIEBPdXRwdXQoJ2xhenlJbWFnZVJlYWR5Jykgc19sYXp5SW1hZ2VSZWFkeTogRXZlbnRFbWl0dGVyPFN3aXBlckV2ZW50c1snbGF6eUltYWdlUmVhZHknXT4gPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcbiAgLy8gcHJldHRpZXItaWdub3JlXG4gIEBPdXRwdXQoJ2xvb3BGaXgnKSBzX2xvb3BGaXg6IEV2ZW50RW1pdHRlcjxTd2lwZXJFdmVudHNbJ2xvb3BGaXgnXT4gPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcbiAgLy8gcHJldHRpZXItaWdub3JlXG4gIEBPdXRwdXQoJ21vbWVudHVtQm91bmNlJykgc19tb21lbnR1bUJvdW5jZTogRXZlbnRFbWl0dGVyPFN3aXBlckV2ZW50c1snbW9tZW50dW1Cb3VuY2UnXT4gPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcbiAgLy8gcHJldHRpZXItaWdub3JlXG4gIEBPdXRwdXQoJ25hdmlnYXRpb25IaWRlJykgc19uYXZpZ2F0aW9uSGlkZTogRXZlbnRFbWl0dGVyPFN3aXBlckV2ZW50c1snbmF2aWdhdGlvbkhpZGUnXT4gPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcbiAgLy8gcHJldHRpZXItaWdub3JlXG4gIEBPdXRwdXQoJ25hdmlnYXRpb25TaG93Jykgc19uYXZpZ2F0aW9uU2hvdzogRXZlbnRFbWl0dGVyPFN3aXBlckV2ZW50c1snbmF2aWdhdGlvblNob3cnXT4gPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcbiAgLy8gcHJldHRpZXItaWdub3JlXG4gIEBPdXRwdXQoJ29ic2VydmVyVXBkYXRlJykgc19vYnNlcnZlclVwZGF0ZTogRXZlbnRFbWl0dGVyPFN3aXBlckV2ZW50c1snb2JzZXJ2ZXJVcGRhdGUnXT4gPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcbiAgLy8gcHJldHRpZXItaWdub3JlXG4gIEBPdXRwdXQoJ29yaWVudGF0aW9uY2hhbmdlJykgc19vcmllbnRhdGlvbmNoYW5nZTogRXZlbnRFbWl0dGVyPFN3aXBlckV2ZW50c1snb3JpZW50YXRpb25jaGFuZ2UnXT4gPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcbiAgLy8gcHJldHRpZXItaWdub3JlXG4gIEBPdXRwdXQoJ3BhZ2luYXRpb25IaWRlJykgc19wYWdpbmF0aW9uSGlkZTogRXZlbnRFbWl0dGVyPFN3aXBlckV2ZW50c1sncGFnaW5hdGlvbkhpZGUnXT4gPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcbiAgLy8gcHJldHRpZXItaWdub3JlXG4gIEBPdXRwdXQoJ3BhZ2luYXRpb25SZW5kZXInKSBzX3BhZ2luYXRpb25SZW5kZXI6IEV2ZW50RW1pdHRlcjxTd2lwZXJFdmVudHNbJ3BhZ2luYXRpb25SZW5kZXInXT4gPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcbiAgLy8gcHJldHRpZXItaWdub3JlXG4gIEBPdXRwdXQoJ3BhZ2luYXRpb25TaG93Jykgc19wYWdpbmF0aW9uU2hvdzogRXZlbnRFbWl0dGVyPFN3aXBlckV2ZW50c1sncGFnaW5hdGlvblNob3cnXT4gPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcbiAgLy8gcHJldHRpZXItaWdub3JlXG4gIEBPdXRwdXQoJ3BhZ2luYXRpb25VcGRhdGUnKSBzX3BhZ2luYXRpb25VcGRhdGU6IEV2ZW50RW1pdHRlcjxTd2lwZXJFdmVudHNbJ3BhZ2luYXRpb25VcGRhdGUnXT4gPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcbiAgLy8gcHJldHRpZXItaWdub3JlXG4gIEBPdXRwdXQoJ3Byb2dyZXNzJykgc19wcm9ncmVzczogRXZlbnRFbWl0dGVyPFN3aXBlckV2ZW50c1sncHJvZ3Jlc3MnXT4gPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcbiAgLy8gcHJldHRpZXItaWdub3JlXG4gIEBPdXRwdXQoJ3JlYWNoQmVnaW5uaW5nJykgc19yZWFjaEJlZ2lubmluZzogRXZlbnRFbWl0dGVyPFN3aXBlckV2ZW50c1sncmVhY2hCZWdpbm5pbmcnXT4gPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcbiAgLy8gcHJldHRpZXItaWdub3JlXG4gIEBPdXRwdXQoJ3JlYWNoRW5kJykgc19yZWFjaEVuZDogRXZlbnRFbWl0dGVyPFN3aXBlckV2ZW50c1sncmVhY2hFbmQnXT4gPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcbiAgLy8gcHJldHRpZXItaWdub3JlXG4gIEBPdXRwdXQoJ3JlYWxJbmRleENoYW5nZScpIHNfcmVhbEluZGV4Q2hhbmdlOiBFdmVudEVtaXR0ZXI8U3dpcGVyRXZlbnRzWydyZWFsSW5kZXhDaGFuZ2UnXT4gPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcbiAgLy8gcHJldHRpZXItaWdub3JlXG4gIEBPdXRwdXQoJ3Jlc2l6ZScpIHNfcmVzaXplOiBFdmVudEVtaXR0ZXI8U3dpcGVyRXZlbnRzWydyZXNpemUnXT4gPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcbiAgLy8gcHJldHRpZXItaWdub3JlXG4gIEBPdXRwdXQoJ3Njcm9sbCcpIHNfc2Nyb2xsOiBFdmVudEVtaXR0ZXI8U3dpcGVyRXZlbnRzWydzY3JvbGwnXT4gPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcbiAgLy8gcHJldHRpZXItaWdub3JlXG4gIEBPdXRwdXQoJ3Njcm9sbGJhckRyYWdFbmQnKSBzX3Njcm9sbGJhckRyYWdFbmQ6IEV2ZW50RW1pdHRlcjxTd2lwZXJFdmVudHNbJ3Njcm9sbGJhckRyYWdFbmQnXT4gPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcbiAgLy8gcHJldHRpZXItaWdub3JlXG4gIEBPdXRwdXQoJ3Njcm9sbGJhckRyYWdNb3ZlJykgc19zY3JvbGxiYXJEcmFnTW92ZTogRXZlbnRFbWl0dGVyPFN3aXBlckV2ZW50c1snc2Nyb2xsYmFyRHJhZ01vdmUnXT4gPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcbiAgLy8gcHJldHRpZXItaWdub3JlXG4gIEBPdXRwdXQoJ3Njcm9sbGJhckRyYWdTdGFydCcpIHNfc2Nyb2xsYmFyRHJhZ1N0YXJ0OiBFdmVudEVtaXR0ZXI8U3dpcGVyRXZlbnRzWydzY3JvbGxiYXJEcmFnU3RhcnQnXT4gPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcbiAgLy8gcHJldHRpZXItaWdub3JlXG4gIEBPdXRwdXQoJ3NldFRyYW5zaXRpb24nKSBzX3NldFRyYW5zaXRpb246IEV2ZW50RW1pdHRlcjxTd2lwZXJFdmVudHNbJ3NldFRyYW5zaXRpb24nXT4gPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcbiAgLy8gcHJldHRpZXItaWdub3JlXG4gIEBPdXRwdXQoJ3NldFRyYW5zbGF0ZScpIHNfc2V0VHJhbnNsYXRlOiBFdmVudEVtaXR0ZXI8U3dpcGVyRXZlbnRzWydzZXRUcmFuc2xhdGUnXT4gPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcbiAgLy8gcHJldHRpZXItaWdub3JlXG4gIEBPdXRwdXQoJ3NsaWRlQ2hhbmdlJykgc19zbGlkZUNoYW5nZTogRXZlbnRFbWl0dGVyPFN3aXBlckV2ZW50c1snc2xpZGVDaGFuZ2UnXT4gPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcbiAgLy8gcHJldHRpZXItaWdub3JlXG4gIEBPdXRwdXQoJ3NsaWRlQ2hhbmdlVHJhbnNpdGlvbkVuZCcpIHNfc2xpZGVDaGFuZ2VUcmFuc2l0aW9uRW5kOiBFdmVudEVtaXR0ZXI8U3dpcGVyRXZlbnRzWydzbGlkZUNoYW5nZVRyYW5zaXRpb25FbmQnXT4gPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcbiAgLy8gcHJldHRpZXItaWdub3JlXG4gIEBPdXRwdXQoJ3NsaWRlQ2hhbmdlVHJhbnNpdGlvblN0YXJ0Jykgc19zbGlkZUNoYW5nZVRyYW5zaXRpb25TdGFydDogRXZlbnRFbWl0dGVyPFN3aXBlckV2ZW50c1snc2xpZGVDaGFuZ2VUcmFuc2l0aW9uU3RhcnQnXT4gPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcbiAgLy8gcHJldHRpZXItaWdub3JlXG4gIEBPdXRwdXQoJ3NsaWRlTmV4dFRyYW5zaXRpb25FbmQnKSBzX3NsaWRlTmV4dFRyYW5zaXRpb25FbmQ6IEV2ZW50RW1pdHRlcjxTd2lwZXJFdmVudHNbJ3NsaWRlTmV4dFRyYW5zaXRpb25FbmQnXT4gPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcbiAgLy8gcHJldHRpZXItaWdub3JlXG4gIEBPdXRwdXQoJ3NsaWRlTmV4dFRyYW5zaXRpb25TdGFydCcpIHNfc2xpZGVOZXh0VHJhbnNpdGlvblN0YXJ0OiBFdmVudEVtaXR0ZXI8U3dpcGVyRXZlbnRzWydzbGlkZU5leHRUcmFuc2l0aW9uU3RhcnQnXT4gPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcbiAgLy8gcHJldHRpZXItaWdub3JlXG4gIEBPdXRwdXQoJ3NsaWRlUHJldlRyYW5zaXRpb25FbmQnKSBzX3NsaWRlUHJldlRyYW5zaXRpb25FbmQ6IEV2ZW50RW1pdHRlcjxTd2lwZXJFdmVudHNbJ3NsaWRlUHJldlRyYW5zaXRpb25FbmQnXT4gPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcbiAgLy8gcHJldHRpZXItaWdub3JlXG4gIEBPdXRwdXQoJ3NsaWRlUHJldlRyYW5zaXRpb25TdGFydCcpIHNfc2xpZGVQcmV2VHJhbnNpdGlvblN0YXJ0OiBFdmVudEVtaXR0ZXI8U3dpcGVyRXZlbnRzWydzbGlkZVByZXZUcmFuc2l0aW9uU3RhcnQnXT4gPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcbiAgLy8gcHJldHRpZXItaWdub3JlXG4gIEBPdXRwdXQoJ3NsaWRlUmVzZXRUcmFuc2l0aW9uU3RhcnQnKSBzX3NsaWRlUmVzZXRUcmFuc2l0aW9uU3RhcnQ6IEV2ZW50RW1pdHRlcjxTd2lwZXJFdmVudHNbJ3NsaWRlUmVzZXRUcmFuc2l0aW9uU3RhcnQnXT4gPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcbiAgLy8gcHJldHRpZXItaWdub3JlXG4gIEBPdXRwdXQoJ3NsaWRlUmVzZXRUcmFuc2l0aW9uRW5kJykgc19zbGlkZVJlc2V0VHJhbnNpdGlvbkVuZDogRXZlbnRFbWl0dGVyPFN3aXBlckV2ZW50c1snc2xpZGVSZXNldFRyYW5zaXRpb25FbmQnXT4gPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcbiAgLy8gcHJldHRpZXItaWdub3JlXG4gIEBPdXRwdXQoJ3NsaWRlck1vdmUnKSBzX3NsaWRlck1vdmU6IEV2ZW50RW1pdHRlcjxTd2lwZXJFdmVudHNbJ3NsaWRlck1vdmUnXT4gPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcbiAgLy8gcHJldHRpZXItaWdub3JlXG4gIEBPdXRwdXQoJ3NsaWRlckZpcnN0TW92ZScpIHNfc2xpZGVyRmlyc3RNb3ZlOiBFdmVudEVtaXR0ZXI8U3dpcGVyRXZlbnRzWydzbGlkZXJGaXJzdE1vdmUnXT4gPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcbiAgLy8gcHJldHRpZXItaWdub3JlXG4gIEBPdXRwdXQoJ3NsaWRlc0xlbmd0aENoYW5nZScpIHNfc2xpZGVzTGVuZ3RoQ2hhbmdlOiBFdmVudEVtaXR0ZXI8U3dpcGVyRXZlbnRzWydzbGlkZXNMZW5ndGhDaGFuZ2UnXT4gPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcbiAgLy8gcHJldHRpZXItaWdub3JlXG4gIEBPdXRwdXQoJ3NsaWRlc0dyaWRMZW5ndGhDaGFuZ2UnKSBzX3NsaWRlc0dyaWRMZW5ndGhDaGFuZ2U6IEV2ZW50RW1pdHRlcjxTd2lwZXJFdmVudHNbJ3NsaWRlc0dyaWRMZW5ndGhDaGFuZ2UnXT4gPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcbiAgLy8gcHJldHRpZXItaWdub3JlXG4gIEBPdXRwdXQoJ3NuYXBHcmlkTGVuZ3RoQ2hhbmdlJykgc19zbmFwR3JpZExlbmd0aENoYW5nZTogRXZlbnRFbWl0dGVyPFN3aXBlckV2ZW50c1snc25hcEdyaWRMZW5ndGhDaGFuZ2UnXT4gPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcbiAgLy8gcHJldHRpZXItaWdub3JlXG4gIEBPdXRwdXQoJ3NuYXBJbmRleENoYW5nZScpIHNfc25hcEluZGV4Q2hhbmdlOiBFdmVudEVtaXR0ZXI8U3dpcGVyRXZlbnRzWydzbmFwSW5kZXhDaGFuZ2UnXT4gPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcbiAgLy8gcHJldHRpZXItaWdub3JlXG4gIEBPdXRwdXQoJ3RhcCcpIHNfdGFwOiBFdmVudEVtaXR0ZXI8U3dpcGVyRXZlbnRzWyd0YXAnXT4gPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcbiAgLy8gcHJldHRpZXItaWdub3JlXG4gIEBPdXRwdXQoJ3RvRWRnZScpIHNfdG9FZGdlOiBFdmVudEVtaXR0ZXI8U3dpcGVyRXZlbnRzWyd0b0VkZ2UnXT4gPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcbiAgLy8gcHJldHRpZXItaWdub3JlXG4gIEBPdXRwdXQoJ3RvdWNoRW5kJykgc190b3VjaEVuZDogRXZlbnRFbWl0dGVyPFN3aXBlckV2ZW50c1sndG91Y2hFbmQnXT4gPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcbiAgLy8gcHJldHRpZXItaWdub3JlXG4gIEBPdXRwdXQoJ3RvdWNoTW92ZScpIHNfdG91Y2hNb3ZlOiBFdmVudEVtaXR0ZXI8U3dpcGVyRXZlbnRzWyd0b3VjaE1vdmUnXT4gPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcbiAgLy8gcHJldHRpZXItaWdub3JlXG4gIEBPdXRwdXQoJ3RvdWNoTW92ZU9wcG9zaXRlJykgc190b3VjaE1vdmVPcHBvc2l0ZTogRXZlbnRFbWl0dGVyPFN3aXBlckV2ZW50c1sndG91Y2hNb3ZlT3Bwb3NpdGUnXT4gPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcbiAgLy8gcHJldHRpZXItaWdub3JlXG4gIEBPdXRwdXQoJ3RvdWNoU3RhcnQnKSBzX3RvdWNoU3RhcnQ6IEV2ZW50RW1pdHRlcjxTd2lwZXJFdmVudHNbJ3RvdWNoU3RhcnQnXT4gPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcbiAgLy8gcHJldHRpZXItaWdub3JlXG4gIEBPdXRwdXQoJ3RyYW5zaXRpb25FbmQnKSBzX3RyYW5zaXRpb25FbmQ6IEV2ZW50RW1pdHRlcjxTd2lwZXJFdmVudHNbJ3RyYW5zaXRpb25FbmQnXT4gPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcbiAgLy8gcHJldHRpZXItaWdub3JlXG4gIEBPdXRwdXQoJ3RyYW5zaXRpb25TdGFydCcpIHNfdHJhbnNpdGlvblN0YXJ0OiBFdmVudEVtaXR0ZXI8U3dpcGVyRXZlbnRzWyd0cmFuc2l0aW9uU3RhcnQnXT4gPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcbiAgLy8gcHJldHRpZXItaWdub3JlXG4gIEBPdXRwdXQoJ3VwZGF0ZScpIHNfdXBkYXRlOiBFdmVudEVtaXR0ZXI8U3dpcGVyRXZlbnRzWyd1cGRhdGUnXT4gPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcbiAgLy8gcHJldHRpZXItaWdub3JlXG4gIEBPdXRwdXQoJ3pvb21DaGFuZ2UnKSBzX3pvb21DaGFuZ2U6IEV2ZW50RW1pdHRlcjxTd2lwZXJFdmVudHNbJ3pvb21DaGFuZ2UnXT4gPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcbiAgLy8gcHJldHRpZXItaWdub3JlXG4gIEBPdXRwdXQoJ3N3aXBlcicpIHNfc3dpcGVyOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xuXG4gIEBPdXRwdXQoKSBpbmRleENoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXI8bnVtYmVyPigpO1xuXG4gIEBWaWV3Q2hpbGQoJ3ByZXZFbFJlZicsIHsgc3RhdGljOiBmYWxzZSB9KVxuICBzZXQgcHJldkVsUmVmKGVsOiBFbGVtZW50UmVmKSB7XG4gICAgdGhpcy5fcHJldkVsUmVmID0gZWw7XG4gICAgdGhpcy5fc2V0RWxlbWVudChlbCwgdGhpcy5uYXZpZ2F0aW9uLCAnbmF2aWdhdGlvbicsICdwcmV2RWwnKTtcbiAgfVxuICBfcHJldkVsUmVmOiBFbGVtZW50UmVmO1xuICBAVmlld0NoaWxkKCduZXh0RWxSZWYnLCB7IHN0YXRpYzogZmFsc2UgfSlcbiAgc2V0IG5leHRFbFJlZihlbDogRWxlbWVudFJlZikge1xuICAgIHRoaXMuX25leHRFbFJlZiA9IGVsO1xuICAgIHRoaXMuX3NldEVsZW1lbnQoZWwsIHRoaXMubmF2aWdhdGlvbiwgJ25hdmlnYXRpb24nLCAnbmV4dEVsJyk7XG4gIH1cbiAgX25leHRFbFJlZjogRWxlbWVudFJlZjtcbiAgQFZpZXdDaGlsZCgnc2Nyb2xsYmFyRWxSZWYnLCB7IHN0YXRpYzogZmFsc2UgfSlcbiAgc2V0IHNjcm9sbGJhckVsUmVmKGVsOiBFbGVtZW50UmVmKSB7XG4gICAgdGhpcy5fc2Nyb2xsYmFyRWxSZWYgPSBlbDtcbiAgICB0aGlzLl9zZXRFbGVtZW50KGVsLCB0aGlzLnNjcm9sbGJhciwgJ3Njcm9sbGJhcicpO1xuICB9XG4gIF9zY3JvbGxiYXJFbFJlZjogRWxlbWVudFJlZjtcbiAgQFZpZXdDaGlsZCgncGFnaW5hdGlvbkVsUmVmJywgeyBzdGF0aWM6IGZhbHNlIH0pXG4gIHNldCBwYWdpbmF0aW9uRWxSZWYoZWw6IEVsZW1lbnRSZWYpIHtcbiAgICB0aGlzLl9wYWdpbmF0aW9uRWxSZWYgPSBlbDtcbiAgICB0aGlzLl9zZXRFbGVtZW50KGVsLCB0aGlzLnBhZ2luYXRpb24sICdwYWdpbmF0aW9uJyk7XG4gIH1cbiAgX3BhZ2luYXRpb25FbFJlZjogRWxlbWVudFJlZjtcbiAgQENvbnRlbnRDaGlsZHJlbihTd2lwZXJTbGlkZURpcmVjdGl2ZSwgeyBkZXNjZW5kYW50czogZmFsc2UsIGVtaXREaXN0aW5jdENoYW5nZXNPbmx5OiB0cnVlIH0pXG4gIHNsaWRlc0VsOiBRdWVyeUxpc3Q8U3dpcGVyU2xpZGVEaXJlY3RpdmU+O1xuICBwcml2YXRlIHNsaWRlczogU3dpcGVyU2xpZGVEaXJlY3RpdmVbXTtcblxuICBwcmVwZW5kU2xpZGVzOiBPYnNlcnZhYmxlPFN3aXBlclNsaWRlRGlyZWN0aXZlW10+O1xuICBhcHBlbmRTbGlkZXM6IE9ic2VydmFibGU8U3dpcGVyU2xpZGVEaXJlY3RpdmVbXT47XG5cbiAgc3dpcGVyUmVmOiBTd2lwZXI7XG4gIHJlYWRvbmx5IF9hY3RpdmVTbGlkZXMgPSBuZXcgU3ViamVjdDxTd2lwZXJTbGlkZURpcmVjdGl2ZVtdPigpO1xuXG4gIGdldCBhY3RpdmVTbGlkZXMoKSB7XG4gICAgaWYgKHRoaXMudmlydHVhbCkge1xuICAgICAgcmV0dXJuIHRoaXMuX2FjdGl2ZVNsaWRlcztcbiAgICB9XG4gICAgcmV0dXJuIG9mKHRoaXMuc2xpZGVzKTtcbiAgfVxuXG4gIGdldCB6b29tQ29udGFpbmVyQ2xhc3MoKSB7XG4gICAgcmV0dXJuIHRoaXMuem9vbSAmJiB0eXBlb2YgdGhpcy56b29tICE9PSAnYm9vbGVhbidcbiAgICAgID8gdGhpcy56b29tLmNvbnRhaW5lckNsYXNzXG4gICAgICA6ICdzd2lwZXItem9vbS1jb250YWluZXInO1xuICB9XG5cbiAgQEhvc3RCaW5kaW5nKCdjbGFzcycpIGNvbnRhaW5lckNsYXNzZXM6IHN0cmluZyA9ICdzd2lwZXInO1xuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIF9uZ1pvbmU6IE5nWm9uZSxcbiAgICBwcml2YXRlIGVsZW1lbnRSZWY6IEVsZW1lbnRSZWYsXG4gICAgcHJpdmF0ZSBfY2hhbmdlRGV0ZWN0b3JSZWY6IENoYW5nZURldGVjdG9yUmVmLFxuICAgIEBJbmplY3QoUExBVEZPUk1fSUQpIHByaXZhdGUgX3BsYXRmb3JtSWQ6IE9iamVjdCxcbiAgKSB7fVxuXG4gIHByaXZhdGUgX3NldEVsZW1lbnQoZWw6IEVsZW1lbnRSZWYsIHJlZjogYW55LCB1cGRhdGU6IHN0cmluZywga2V5ID0gJ2VsJykge1xuICAgIGlmICghZWwgfHwgIXJlZikge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBpZiAocmVmICYmIGVsLm5hdGl2ZUVsZW1lbnQpIHtcbiAgICAgIGlmIChyZWZba2V5XSA9PT0gZWwubmF0aXZlRWxlbWVudCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICByZWZba2V5XSA9IGVsLm5hdGl2ZUVsZW1lbnQ7XG4gICAgfVxuICAgIGNvbnN0IHVwZGF0ZU9iajogeyBba2V5OiBzdHJpbmddOiBib29sZWFuIH0gPSB7fTtcbiAgICB1cGRhdGVPYmpbdXBkYXRlXSA9IHRydWU7XG4gICAgdGhpcy51cGRhdGVJbml0U3dpcGVyKHVwZGF0ZU9iaik7XG4gIH1cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgY29uc3QgeyBwYXJhbXMgfSA9IGdldFBhcmFtcyh0aGlzKTtcbiAgICBPYmplY3QuYXNzaWduKHRoaXMsIHBhcmFtcyk7XG4gIH1cbiAgbmdBZnRlclZpZXdJbml0KCkge1xuICAgIHRoaXMuY2hpbGRyZW5TbGlkZXNJbml0KCk7XG4gICAgdGhpcy5pbml0U3dpcGVyKCk7XG4gICAgdGhpcy5fY2hhbmdlRGV0ZWN0b3JSZWYuZGV0ZWN0Q2hhbmdlcygpO1xuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgdGhpcy5zX3N3aXBlci5lbWl0KHRoaXMuc3dpcGVyUmVmKTtcbiAgICB9KTtcbiAgfVxuXG4gIHByaXZhdGUgY2hpbGRyZW5TbGlkZXNJbml0KCkge1xuICAgIHRoaXMuc2xpZGVzQ2hhbmdlcyh0aGlzLnNsaWRlc0VsKTtcbiAgICB0aGlzLnNsaWRlc0VsLmNoYW5nZXMuc3Vic2NyaWJlKHRoaXMuc2xpZGVzQ2hhbmdlcyk7XG4gIH1cblxuICBwcml2YXRlIHNsaWRlc0NoYW5nZXMgPSAodmFsOiBRdWVyeUxpc3Q8U3dpcGVyU2xpZGVEaXJlY3RpdmU+KSA9PiB7XG4gICAgdGhpcy5zbGlkZXMgPSB2YWwubWFwKChzbGlkZTogU3dpcGVyU2xpZGVEaXJlY3RpdmUsIGluZGV4OiBudW1iZXIpID0+IHtcbiAgICAgIHNsaWRlLnNsaWRlSW5kZXggPSBpbmRleDtcbiAgICAgIHNsaWRlLmNsYXNzTmFtZXMgPSB0aGlzLnNsaWRlQ2xhc3MgfHwgJyc7XG4gICAgICByZXR1cm4gc2xpZGU7XG4gICAgfSk7XG4gICAgaWYgKHRoaXMubG9vcCAmJiAhdGhpcy5sb29wZWRTbGlkZXMpIHtcbiAgICAgIHRoaXMuY2FsY0xvb3BlZFNsaWRlcygpO1xuICAgIH1cbiAgICBpZiAoIXRoaXMudmlydHVhbCkge1xuICAgICAgaWYgKHRoaXMubG9vcGVkU2xpZGVzKSB7XG4gICAgICAgIHRoaXMucHJlcGVuZFNsaWRlcyA9IG9mKHRoaXMuc2xpZGVzLnNsaWNlKHRoaXMuc2xpZGVzLmxlbmd0aCAtIHRoaXMubG9vcGVkU2xpZGVzKSk7XG4gICAgICAgIHRoaXMuYXBwZW5kU2xpZGVzID0gb2YodGhpcy5zbGlkZXMuc2xpY2UoMCwgdGhpcy5sb29wZWRTbGlkZXMpKTtcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKHRoaXMuc3dpcGVyUmVmICYmIHRoaXMuc3dpcGVyUmVmLnZpcnR1YWwpIHtcbiAgICAgIHRoaXMuX25nWm9uZS5ydW5PdXRzaWRlQW5ndWxhcigoKSA9PiB7XG4gICAgICAgIHRoaXMuc3dpcGVyUmVmLnZpcnR1YWwuc2xpZGVzID0gdGhpcy5zbGlkZXM7XG4gICAgICAgIHRoaXMuc3dpcGVyUmVmLnZpcnR1YWwudXBkYXRlKHRydWUpO1xuICAgICAgfSk7XG4gICAgfVxuICAgIHRoaXMuX2NoYW5nZURldGVjdG9yUmVmLmRldGVjdENoYW5nZXMoKTtcbiAgfTtcblxuICBnZXQgaXNTd2lwZXJBY3RpdmUoKSB7XG4gICAgcmV0dXJuIHRoaXMuc3dpcGVyUmVmICYmICF0aGlzLnN3aXBlclJlZi5kZXN0cm95ZWQ7XG4gIH1cblxuICBpbml0U3dpcGVyKCkge1xuICAgIGNvbnN0IHsgcGFyYW1zOiBzd2lwZXJQYXJhbXMsIHBhc3NlZFBhcmFtcyB9ID0gZ2V0UGFyYW1zKHRoaXMpO1xuICAgIE9iamVjdC5hc3NpZ24odGhpcywgc3dpcGVyUGFyYW1zKTtcbiAgICB0aGlzLl9uZ1pvbmUucnVuT3V0c2lkZUFuZ3VsYXIoKCkgPT4ge1xuICAgICAgc3dpcGVyUGFyYW1zLmluaXQgPSBmYWxzZTtcbiAgICAgIGlmICghc3dpcGVyUGFyYW1zLnZpcnR1YWwpIHtcbiAgICAgICAgc3dpcGVyUGFyYW1zLm9ic2VydmVyID0gdHJ1ZTtcbiAgICAgIH1cblxuICAgICAgc3dpcGVyUGFyYW1zLm9uQW55ID0gKGV2ZW50TmFtZToga2V5b2YgU3dpcGVyQ29tcG9uZW50LCAuLi5hcmdzOiBhbnlbXSkgPT4ge1xuICAgICAgICBjb25zdCBlbWl0dGVyID0gdGhpc1soJ3NfJyArIGV2ZW50TmFtZSkgYXMga2V5b2YgU3dpcGVyQ29tcG9uZW50XSBhcyBFdmVudEVtaXR0ZXI8YW55PjtcbiAgICAgICAgaWYgKGVtaXR0ZXIpIHtcbiAgICAgICAgICBlbWl0dGVyLmVtaXQoLi4uYXJncyk7XG4gICAgICAgIH1cbiAgICAgIH07XG4gICAgICBjb25zdCBfc2xpZGVDbGFzc2VzOiBTd2lwZXJFdmVudHNbJ19zbGlkZUNsYXNzZXMnXSA9IChfLCB1cGRhdGVkKSA9PiB7XG4gICAgICAgIHVwZGF0ZWQuZm9yRWFjaCgoeyBzbGlkZUVsLCBjbGFzc05hbWVzIH0sIGluZGV4KSA9PiB7XG4gICAgICAgICAgY29uc3QgZGF0YUluZGV4ID0gc2xpZGVFbC5nZXRBdHRyaWJ1dGUoJ2RhdGEtc3dpcGVyLXNsaWRlLWluZGV4Jyk7XG4gICAgICAgICAgY29uc3Qgc2xpZGVJbmRleCA9IGRhdGFJbmRleCA/IHBhcnNlSW50KGRhdGFJbmRleCkgOiBpbmRleDtcbiAgICAgICAgICBpZiAodGhpcy52aXJ0dWFsKSB7XG4gICAgICAgICAgICBjb25zdCB2aXJ0dWFsU2xpZGUgPSB0aGlzLnNsaWRlcy5maW5kKChpdGVtKSA9PiB7XG4gICAgICAgICAgICAgIHJldHVybiBpdGVtLnZpcnR1YWxJbmRleCAmJiBpdGVtLnZpcnR1YWxJbmRleCA9PT0gc2xpZGVJbmRleDtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgaWYgKHZpcnR1YWxTbGlkZSkge1xuICAgICAgICAgICAgICB2aXJ0dWFsU2xpZGUuY2xhc3NOYW1lcyA9IGNsYXNzTmFtZXM7XG4gICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG5cbiAgICAgICAgICBpZiAodGhpcy5zbGlkZXNbc2xpZGVJbmRleF0pIHtcbiAgICAgICAgICAgIHRoaXMuc2xpZGVzW3NsaWRlSW5kZXhdLmNsYXNzTmFtZXMgPSBjbGFzc05hbWVzO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMuX2NoYW5nZURldGVjdG9yUmVmLmRldGVjdENoYW5nZXMoKTtcbiAgICAgIH07XG4gICAgICBjb25zdCBfY29udGFpbmVyQ2xhc3NlczogU3dpcGVyRXZlbnRzWydfY29udGFpbmVyQ2xhc3NlcyddID0gKF8sIGNsYXNzZXMpID0+IHtcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgdGhpcy5jb250YWluZXJDbGFzc2VzID0gY2xhc3NlcztcbiAgICAgICAgfSk7XG4gICAgICB9O1xuICAgICAgT2JqZWN0LmFzc2lnbihzd2lwZXJQYXJhbXMub24sIHtcbiAgICAgICAgX2NvbnRhaW5lckNsYXNzZXMsXG4gICAgICAgIF9zbGlkZUNsYXNzZXMsXG4gICAgICB9KTtcbiAgICAgIGNvbnN0IHN3aXBlclJlZiA9IG5ldyBTd2lwZXIoc3dpcGVyUGFyYW1zKTtcbiAgICAgIHN3aXBlclJlZi5sb29wQ3JlYXRlID0gKCkgPT4ge307XG4gICAgICBzd2lwZXJSZWYubG9vcERlc3Ryb3kgPSAoKSA9PiB7fTtcbiAgICAgIGlmIChzd2lwZXJQYXJhbXMubG9vcCkge1xuICAgICAgICBzd2lwZXJSZWYubG9vcGVkU2xpZGVzID0gdGhpcy5sb29wZWRTbGlkZXM7XG4gICAgICB9XG4gICAgICBjb25zdCBpc1ZpcnR1YWxFbmFibGVkID1cbiAgICAgICAgdHlwZW9mIHN3aXBlclJlZi5wYXJhbXMudmlydHVhbCAhPT0gJ3VuZGVmaW5lZCcgJiZcbiAgICAgICAgdHlwZW9mIHN3aXBlclJlZi5wYXJhbXMudmlydHVhbCAhPT0gJ2Jvb2xlYW4nICYmXG4gICAgICAgIHN3aXBlclJlZi5wYXJhbXMudmlydHVhbC5lbmFibGVkO1xuICAgICAgaWYgKHN3aXBlclJlZi52aXJ0dWFsICYmIGlzVmlydHVhbEVuYWJsZWQpIHtcbiAgICAgICAgc3dpcGVyUmVmLnZpcnR1YWwuc2xpZGVzID0gdGhpcy5zbGlkZXM7XG4gICAgICAgIGNvbnN0IGV4dGVuZFdpdGggPSB7XG4gICAgICAgICAgY2FjaGU6IGZhbHNlLFxuICAgICAgICAgIHJlbmRlckV4dGVybmFsOiB0aGlzLnVwZGF0ZVZpcnR1YWxTbGlkZXMsXG4gICAgICAgICAgcmVuZGVyRXh0ZXJuYWxVcGRhdGU6IGZhbHNlLFxuICAgICAgICB9O1xuICAgICAgICBleHRlbmQoc3dpcGVyUmVmLnBhcmFtcy52aXJ0dWFsLCBleHRlbmRXaXRoKTtcbiAgICAgICAgZXh0ZW5kKHN3aXBlclJlZi5vcmlnaW5hbFBhcmFtcy52aXJ0dWFsLCBleHRlbmRXaXRoKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGlzUGxhdGZvcm1Ccm93c2VyKHRoaXMuX3BsYXRmb3JtSWQpKSB7XG4gICAgICAgIHRoaXMuc3dpcGVyUmVmID0gc3dpcGVyUmVmLmluaXQodGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQpO1xuICAgICAgICBjb25zdCBpc0VuYWJsZWQgPVxuICAgICAgICAgIHR5cGVvZiB0aGlzLnN3aXBlclJlZi5wYXJhbXMudmlydHVhbCAhPT0gJ3VuZGVmaW5lZCcgJiZcbiAgICAgICAgICB0eXBlb2YgdGhpcy5zd2lwZXJSZWYucGFyYW1zLnZpcnR1YWwgIT09ICdib29sZWFuJyAmJlxuICAgICAgICAgIHRoaXMuc3dpcGVyUmVmLnBhcmFtcy52aXJ0dWFsLmVuYWJsZWQ7XG4gICAgICAgIGlmICh0aGlzLnN3aXBlclJlZi52aXJ0dWFsICYmIGlzRW5hYmxlZCkge1xuICAgICAgICAgIHRoaXMuc3dpcGVyUmVmLnZpcnR1YWwudXBkYXRlKHRydWUpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuX2NoYW5nZURldGVjdG9yUmVmLmRldGVjdENoYW5nZXMoKTtcbiAgICAgICAgc3dpcGVyUmVmLm9uKCdzbGlkZUNoYW5nZScsICgpID0+IHtcbiAgICAgICAgICB0aGlzLmluZGV4Q2hhbmdlLmVtaXQodGhpcy5zd2lwZXJSZWYucmVhbEluZGV4KTtcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBzdHlsZTogYW55ID0gbnVsbDtcbiAgY3VycmVudFZpcnR1YWxEYXRhOiBhbnk7IC8vIFRPRE86IHR5cGUgdmlydHVhbERhdGE7XG4gIHByaXZhdGUgdXBkYXRlVmlydHVhbFNsaWRlcyA9ICh2aXJ0dWFsRGF0YTogYW55KSA9PiB7XG4gICAgLy8gVE9ETzogdHlwZSB2aXJ0dWFsRGF0YVxuICAgIGlmIChcbiAgICAgICF0aGlzLnN3aXBlclJlZiB8fFxuICAgICAgKHRoaXMuY3VycmVudFZpcnR1YWxEYXRhICYmXG4gICAgICAgIHRoaXMuY3VycmVudFZpcnR1YWxEYXRhLmZyb20gPT09IHZpcnR1YWxEYXRhLmZyb20gJiZcbiAgICAgICAgdGhpcy5jdXJyZW50VmlydHVhbERhdGEudG8gPT09IHZpcnR1YWxEYXRhLnRvICYmXG4gICAgICAgIHRoaXMuY3VycmVudFZpcnR1YWxEYXRhLm9mZnNldCA9PT0gdmlydHVhbERhdGEub2Zmc2V0KVxuICAgICkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB0aGlzLnN0eWxlID0gdGhpcy5zd2lwZXJSZWYuaXNIb3Jpem9udGFsKClcbiAgICAgID8ge1xuICAgICAgICAgIFt0aGlzLnN3aXBlclJlZi5ydGxUcmFuc2xhdGUgPyAncmlnaHQnIDogJ2xlZnQnXTogYCR7dmlydHVhbERhdGEub2Zmc2V0fXB4YCxcbiAgICAgICAgfVxuICAgICAgOiB7XG4gICAgICAgICAgdG9wOiBgJHt2aXJ0dWFsRGF0YS5vZmZzZXR9cHhgLFxuICAgICAgICB9O1xuICAgIHRoaXMuY3VycmVudFZpcnR1YWxEYXRhID0gdmlydHVhbERhdGE7XG4gICAgdGhpcy5fYWN0aXZlU2xpZGVzLm5leHQodmlydHVhbERhdGEuc2xpZGVzKTtcbiAgICB0aGlzLl9uZ1pvbmUucnVuKCgpID0+IHtcbiAgICAgIHRoaXMuX2NoYW5nZURldGVjdG9yUmVmLmRldGVjdENoYW5nZXMoKTtcbiAgICB9KTtcbiAgICB0aGlzLl9uZ1pvbmUucnVuT3V0c2lkZUFuZ3VsYXIoKCkgPT4ge1xuICAgICAgdGhpcy5zd2lwZXJSZWYudXBkYXRlU2xpZGVzKCk7XG4gICAgICB0aGlzLnN3aXBlclJlZi51cGRhdGVQcm9ncmVzcygpO1xuICAgICAgdGhpcy5zd2lwZXJSZWYudXBkYXRlU2xpZGVzQ2xhc3NlcygpO1xuICAgICAgaWYgKHRoaXMuc3dpcGVyUmVmLmxhenkgJiYgdGhpcy5zd2lwZXJSZWYucGFyYW1zLmxhenlbJ2VuYWJsZWQnXSkge1xuICAgICAgICB0aGlzLnN3aXBlclJlZi5sYXp5LmxvYWQoKTtcbiAgICAgIH1cbiAgICAgIHRoaXMuc3dpcGVyUmVmLnZpcnR1YWwudXBkYXRlKHRydWUpO1xuICAgIH0pO1xuICAgIHJldHVybjtcbiAgfTtcblxuICBuZ09uQ2hhbmdlcyhjaGFuZ2VkUGFyYW1zOiBTaW1wbGVDaGFuZ2VzKSB7XG4gICAgdGhpcy51cGRhdGVTd2lwZXIoY2hhbmdlZFBhcmFtcyk7XG4gICAgdGhpcy5fY2hhbmdlRGV0ZWN0b3JSZWYuZGV0ZWN0Q2hhbmdlcygpO1xuICB9XG5cbiAgdXBkYXRlSW5pdFN3aXBlcihjaGFuZ2VkUGFyYW1zOiBhbnkpIHtcbiAgICBpZiAoIShjaGFuZ2VkUGFyYW1zICYmIHRoaXMuc3dpcGVyUmVmICYmICF0aGlzLnN3aXBlclJlZi5kZXN0cm95ZWQpKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdGhpcy5fbmdab25lLnJ1bk91dHNpZGVBbmd1bGFyKCgpID0+IHtcbiAgICAgIGNvbnN0IHtcbiAgICAgICAgcGFyYW1zOiBjdXJyZW50UGFyYW1zLFxuICAgICAgICBwYWdpbmF0aW9uLFxuICAgICAgICBuYXZpZ2F0aW9uLFxuICAgICAgICBzY3JvbGxiYXIsXG4gICAgICAgIHZpcnR1YWwsXG4gICAgICAgIHRodW1icyxcbiAgICAgIH0gPSB0aGlzLnN3aXBlclJlZjtcblxuICAgICAgaWYgKGNoYW5nZWRQYXJhbXMucGFnaW5hdGlvbikge1xuICAgICAgICBpZiAoXG4gICAgICAgICAgdGhpcy5wYWdpbmF0aW9uICYmXG4gICAgICAgICAgdHlwZW9mIHRoaXMucGFnaW5hdGlvbiAhPT0gJ2Jvb2xlYW4nICYmXG4gICAgICAgICAgdGhpcy5wYWdpbmF0aW9uLmVsICYmXG4gICAgICAgICAgcGFnaW5hdGlvbiAmJlxuICAgICAgICAgICFwYWdpbmF0aW9uLmVsXG4gICAgICAgICkge1xuICAgICAgICAgIHRoaXMudXBkYXRlUGFyYW1ldGVyKCdwYWdpbmF0aW9uJywgdGhpcy5wYWdpbmF0aW9uKTtcbiAgICAgICAgICBwYWdpbmF0aW9uLmluaXQoKTtcbiAgICAgICAgICBwYWdpbmF0aW9uLnJlbmRlcigpO1xuICAgICAgICAgIHBhZ2luYXRpb24udXBkYXRlKCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcGFnaW5hdGlvbi5kZXN0cm95KCk7XG4gICAgICAgICAgcGFnaW5hdGlvbi5lbCA9IG51bGw7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKGNoYW5nZWRQYXJhbXMuc2Nyb2xsYmFyKSB7XG4gICAgICAgIGlmIChcbiAgICAgICAgICB0aGlzLnNjcm9sbGJhciAmJlxuICAgICAgICAgIHR5cGVvZiB0aGlzLnNjcm9sbGJhciAhPT0gJ2Jvb2xlYW4nICYmXG4gICAgICAgICAgdGhpcy5zY3JvbGxiYXIuZWwgJiZcbiAgICAgICAgICBzY3JvbGxiYXIgJiZcbiAgICAgICAgICAhc2Nyb2xsYmFyLmVsXG4gICAgICAgICkge1xuICAgICAgICAgIHRoaXMudXBkYXRlUGFyYW1ldGVyKCdzY3JvbGxiYXInLCB0aGlzLnNjcm9sbGJhcik7XG4gICAgICAgICAgc2Nyb2xsYmFyLmluaXQoKTtcbiAgICAgICAgICBzY3JvbGxiYXIudXBkYXRlU2l6ZSgpO1xuICAgICAgICAgIHNjcm9sbGJhci5zZXRUcmFuc2xhdGUoKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBzY3JvbGxiYXIuZGVzdHJveSgpO1xuICAgICAgICAgIHNjcm9sbGJhci5lbCA9IG51bGw7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKGNoYW5nZWRQYXJhbXMubmF2aWdhdGlvbikge1xuICAgICAgICBpZiAoXG4gICAgICAgICAgdGhpcy5uYXZpZ2F0aW9uICYmXG4gICAgICAgICAgdHlwZW9mIHRoaXMubmF2aWdhdGlvbiAhPT0gJ2Jvb2xlYW4nICYmXG4gICAgICAgICAgdGhpcy5uYXZpZ2F0aW9uLnByZXZFbCAmJlxuICAgICAgICAgIHRoaXMubmF2aWdhdGlvbi5uZXh0RWwgJiZcbiAgICAgICAgICBuYXZpZ2F0aW9uICYmXG4gICAgICAgICAgIW5hdmlnYXRpb24ucHJldkVsICYmXG4gICAgICAgICAgIW5hdmlnYXRpb24ubmV4dEVsXG4gICAgICAgICkge1xuICAgICAgICAgIHRoaXMudXBkYXRlUGFyYW1ldGVyKCduYXZpZ2F0aW9uJywgdGhpcy5uYXZpZ2F0aW9uKTtcbiAgICAgICAgICBuYXZpZ2F0aW9uLmluaXQoKTtcbiAgICAgICAgICBuYXZpZ2F0aW9uLnVwZGF0ZSgpO1xuICAgICAgICB9IGVsc2UgaWYgKG5hdmlnYXRpb24ucHJldkVsICYmIG5hdmlnYXRpb24ubmV4dEVsKSB7XG4gICAgICAgICAgbmF2aWdhdGlvbi5kZXN0cm95KCk7XG4gICAgICAgICAgbmF2aWdhdGlvbi5uZXh0RWwgPSBudWxsO1xuICAgICAgICAgIG5hdmlnYXRpb24ucHJldkVsID0gbnVsbDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKGNoYW5nZWRQYXJhbXMudGh1bWJzICYmIHRoaXMudGh1bWJzICYmIHRoaXMudGh1bWJzLnN3aXBlcikge1xuICAgICAgICB0aGlzLnVwZGF0ZVBhcmFtZXRlcigndGh1bWJzJywgdGhpcy50aHVtYnMpO1xuICAgICAgICBjb25zdCBpbml0aWFsaXplZCA9IHRodW1icy5pbml0KCk7XG4gICAgICAgIGlmIChpbml0aWFsaXplZCkgdGh1bWJzLnVwZGF0ZSh0cnVlKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGNoYW5nZWRQYXJhbXMuY29udHJvbGxlciAmJiB0aGlzLmNvbnRyb2xsZXIgJiYgdGhpcy5jb250cm9sbGVyLmNvbnRyb2wpIHtcbiAgICAgICAgdGhpcy5zd2lwZXJSZWYuY29udHJvbGxlci5jb250cm9sID0gdGhpcy5jb250cm9sbGVyLmNvbnRyb2w7XG4gICAgICB9XG5cbiAgICAgIHRoaXMuc3dpcGVyUmVmLnVwZGF0ZSgpO1xuICAgIH0pO1xuICB9XG5cbiAgdXBkYXRlU3dpcGVyKGNoYW5nZWRQYXJhbXM6IFNpbXBsZUNoYW5nZXMgfCBhbnkpIHtcbiAgICB0aGlzLl9uZ1pvbmUucnVuT3V0c2lkZUFuZ3VsYXIoKCkgPT4ge1xuICAgICAgaWYgKGNoYW5nZWRQYXJhbXMuY29uZmlnKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGlmICghKGNoYW5nZWRQYXJhbXMgJiYgdGhpcy5zd2lwZXJSZWYgJiYgIXRoaXMuc3dpcGVyUmVmLmRlc3Ryb3llZCkpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgZm9yIChjb25zdCBrZXkgaW4gY2hhbmdlZFBhcmFtcykge1xuICAgICAgICBpZiAoaWdub3JlTmdPbkNoYW5nZXMuaW5kZXhPZihrZXkpID49IDApIHtcbiAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBuZXdWYWx1ZSA9IGNoYW5nZWRQYXJhbXNba2V5XT8uY3VycmVudFZhbHVlID8/IGNoYW5nZWRQYXJhbXNba2V5XTtcbiAgICAgICAgdGhpcy51cGRhdGVQYXJhbWV0ZXIoa2V5LCBuZXdWYWx1ZSk7XG4gICAgICB9XG5cbiAgICAgIGlmIChjaGFuZ2VkUGFyYW1zLmFsbG93U2xpZGVOZXh0KSB7XG4gICAgICAgIHRoaXMuc3dpcGVyUmVmLmFsbG93U2xpZGVOZXh0ID0gdGhpcy5hbGxvd1NsaWRlTmV4dDtcbiAgICAgIH1cbiAgICAgIGlmIChjaGFuZ2VkUGFyYW1zLmFsbG93U2xpZGVQcmV2KSB7XG4gICAgICAgIHRoaXMuc3dpcGVyUmVmLmFsbG93U2xpZGVQcmV2ID0gdGhpcy5hbGxvd1NsaWRlUHJldjtcbiAgICAgIH1cbiAgICAgIGlmIChjaGFuZ2VkUGFyYW1zLmRpcmVjdGlvbikge1xuICAgICAgICB0aGlzLnN3aXBlclJlZi5jaGFuZ2VEaXJlY3Rpb24odGhpcy5kaXJlY3Rpb24sIGZhbHNlKTtcbiAgICAgIH1cbiAgICAgIGlmIChjaGFuZ2VkUGFyYW1zLmJyZWFrcG9pbnRzKSB7XG4gICAgICAgIGlmICh0aGlzLmxvb3AgJiYgIXRoaXMubG9vcGVkU2xpZGVzKSB7XG4gICAgICAgICAgdGhpcy5jYWxjTG9vcGVkU2xpZGVzKCk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5zd2lwZXJSZWYuY3VycmVudEJyZWFrcG9pbnQgPSBudWxsO1xuICAgICAgICB0aGlzLnN3aXBlclJlZi5zZXRCcmVha3BvaW50KCk7XG4gICAgICB9XG5cbiAgICAgIGlmIChjaGFuZ2VkUGFyYW1zLnRodW1icyB8fCBjaGFuZ2VkUGFyYW1zLmNvbnRyb2xsZXIpIHtcbiAgICAgICAgdGhpcy51cGRhdGVJbml0U3dpcGVyKGNoYW5nZWRQYXJhbXMpO1xuICAgICAgfVxuICAgICAgdGhpcy5zd2lwZXJSZWYudXBkYXRlKCk7XG4gICAgfSk7XG4gIH1cblxuICBjYWxjTG9vcGVkU2xpZGVzKCkge1xuICAgIGlmICghdGhpcy5sb29wKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGxldCBzbGlkZXNQZXJWaWV3UGFyYW1zID0gdGhpcy5zbGlkZXNQZXJWaWV3O1xuICAgIGlmICh0aGlzLmJyZWFrcG9pbnRzKSB7XG4gICAgICBjb25zdCBicmVha3BvaW50ID0gU3dpcGVyLnByb3RvdHlwZS5nZXRCcmVha3BvaW50KHRoaXMuYnJlYWtwb2ludHMpO1xuICAgICAgY29uc3QgYnJlYWtwb2ludE9ubHlQYXJhbXMgPVxuICAgICAgICBicmVha3BvaW50IGluIHRoaXMuYnJlYWtwb2ludHMgPyB0aGlzLmJyZWFrcG9pbnRzW2JyZWFrcG9pbnRdIDogdW5kZWZpbmVkO1xuICAgICAgaWYgKGJyZWFrcG9pbnRPbmx5UGFyYW1zICYmIGJyZWFrcG9pbnRPbmx5UGFyYW1zLnNsaWRlc1BlclZpZXcpIHtcbiAgICAgICAgc2xpZGVzUGVyVmlld1BhcmFtcyA9IGJyZWFrcG9pbnRPbmx5UGFyYW1zLnNsaWRlc1BlclZpZXc7XG4gICAgICB9XG4gICAgfVxuICAgIGlmIChzbGlkZXNQZXJWaWV3UGFyYW1zID09PSAnYXV0bycpIHtcbiAgICAgIHRoaXMubG9vcGVkU2xpZGVzID0gdGhpcy5zbGlkZXMubGVuZ3RoO1xuICAgICAgcmV0dXJuIHRoaXMuc2xpZGVzLmxlbmd0aDtcbiAgICB9XG4gICAgbGV0IGxvb3BlZFNsaWRlcyA9IHRoaXMubG9vcGVkU2xpZGVzIHx8IHNsaWRlc1BlclZpZXdQYXJhbXM7XG4gICAgaWYgKCFsb29wZWRTbGlkZXMpIHtcbiAgICAgIC8vID9cbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5sb29wQWRkaXRpb25hbFNsaWRlcykge1xuICAgICAgbG9vcGVkU2xpZGVzICs9IHRoaXMubG9vcEFkZGl0aW9uYWxTbGlkZXM7XG4gICAgfVxuICAgIGlmIChsb29wZWRTbGlkZXMgPiB0aGlzLnNsaWRlcy5sZW5ndGgpIHtcbiAgICAgIGxvb3BlZFNsaWRlcyA9IHRoaXMuc2xpZGVzLmxlbmd0aDtcbiAgICB9XG4gICAgdGhpcy5sb29wZWRTbGlkZXMgPSBsb29wZWRTbGlkZXM7XG4gICAgcmV0dXJuIGxvb3BlZFNsaWRlcztcbiAgfVxuXG4gIHVwZGF0ZVBhcmFtZXRlcihrZXk6IHN0cmluZywgdmFsdWU6IGFueSkge1xuICAgIGlmICghKHRoaXMuc3dpcGVyUmVmICYmICF0aGlzLnN3aXBlclJlZi5kZXN0cm95ZWQpKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGNvbnN0IF9rZXkgPSBrZXkucmVwbGFjZSgvXl8vLCAnJyk7XG4gICAgY29uc3QgaXNDdXJyZW50UGFyYW1PYmogPSBpc09iamVjdCh0aGlzLnN3aXBlclJlZi5wYXJhbXNbX2tleV0pO1xuXG4gICAgaWYgKE9iamVjdC5rZXlzKHRoaXMuc3dpcGVyUmVmLm1vZHVsZXMpLmluZGV4T2YoX2tleSkgPj0gMCkge1xuICAgICAgY29uc3QgZGVmYXVsdFBhcmFtcyA9IHRoaXMuc3dpcGVyUmVmLm1vZHVsZXNbX2tleV0ucGFyYW1zW19rZXldO1xuICAgICAgaWYgKGlzQ3VycmVudFBhcmFtT2JqKSB7XG4gICAgICAgIGV4dGVuZCh0aGlzLnN3aXBlclJlZi5wYXJhbXNbX2tleV0sIGRlZmF1bHRQYXJhbXMpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5zd2lwZXJSZWYucGFyYW1zW19rZXldID0gZGVmYXVsdFBhcmFtcztcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoaXNDdXJyZW50UGFyYW1PYmogJiYgaXNPYmplY3QodmFsdWUpKSB7XG4gICAgICBleHRlbmQodGhpcy5zd2lwZXJSZWYucGFyYW1zW19rZXldLCB2YWx1ZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuc3dpcGVyUmVmLnBhcmFtc1tfa2V5XSA9IHZhbHVlO1xuICAgIH1cbiAgfVxuXG4gIHNldEluZGV4KGluZGV4OiBudW1iZXIsIHNwZWVkPzogbnVtYmVyLCBzaWxlbnQ/OiBib29sZWFuKTogdm9pZCB7XG4gICAgaWYgKCF0aGlzLmlzU3dpcGVyQWN0aXZlKSB7XG4gICAgICB0aGlzLmluaXRpYWxTbGlkZSA9IGluZGV4O1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBpZiAoaW5kZXggPT09IHRoaXMuc3dpcGVyUmVmLmFjdGl2ZUluZGV4KSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHRoaXMuX25nWm9uZS5ydW5PdXRzaWRlQW5ndWxhcigoKSA9PiB7XG4gICAgICBpZiAodGhpcy5sb29wKSB7XG4gICAgICAgIHRoaXMuc3dpcGVyUmVmLnNsaWRlVG9Mb29wKGluZGV4LCBzcGVlZCwgIXNpbGVudCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLnN3aXBlclJlZi5zbGlkZVRvKGluZGV4LCBzcGVlZCwgIXNpbGVudCk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBuZ09uRGVzdHJveSgpIHtcbiAgICB0aGlzLl9uZ1pvbmUucnVuT3V0c2lkZUFuZ3VsYXIoKCkgPT4ge1xuICAgICAgdGhpcy5zd2lwZXJSZWY/LmRlc3Ryb3kodHJ1ZSwgZmFsc2UpO1xuICAgIH0pO1xuICB9XG59XG4iLCI8bmctY29udGVudCBzZWxlY3Q9XCJbc2xvdD1jb250YWluZXItc3RhcnRdXCI+PC9uZy1jb250ZW50PlxuPG5nLWNvbnRhaW5lciAqbmdJZj1cIm5hdmlnYXRpb24gJiYgc2hvd05hdmlnYXRpb25cIj5cbiAgPGRpdiBjbGFzcz1cInN3aXBlci1idXR0b24tcHJldlwiICNwcmV2RWxSZWY+PC9kaXY+XG4gIDxkaXYgY2xhc3M9XCJzd2lwZXItYnV0dG9uLW5leHRcIiAjbmV4dEVsUmVmPjwvZGl2PlxuPC9uZy1jb250YWluZXI+XG48ZGl2ICpuZ0lmPVwic2Nyb2xsYmFyICYmIHNob3dTY3JvbGxiYXJcIiBjbGFzcz1cInN3aXBlci1zY3JvbGxiYXJcIiAjc2Nyb2xsYmFyRWxSZWY+PC9kaXY+XG48ZGl2ICpuZ0lmPVwicGFnaW5hdGlvbiAmJiBzaG93UGFnaW5hdGlvblwiIGNsYXNzPVwic3dpcGVyLXBhZ2luYXRpb25cIiAjcGFnaW5hdGlvbkVsUmVmPjwvZGl2PlxuPGRpdiBbbmdDbGFzc109XCJ3cmFwcGVyQ2xhc3NcIiBbYXR0ci5pZF09XCJpZFwiPlxuICA8bmctY29udGVudCBzZWxlY3Q9XCJbc2xvdD13cmFwcGVyLXN0YXJ0XVwiPjwvbmctY29udGVudD5cbiAgPG5nLXRlbXBsYXRlICpuZ1RlbXBsYXRlT3V0bGV0PVwiXG4gICAgICBzbGlkZXNUZW1wbGF0ZTtcbiAgICAgIGNvbnRleHQ6IHtcbiAgICAgICAgbG9vcFNsaWRlczogcHJlcGVuZFNsaWRlcyxcbiAgICAgICAga2V5OiAncHJlcGVuZCdcbiAgICAgIH1cbiAgICBcIj48L25nLXRlbXBsYXRlPlxuICA8bmctdGVtcGxhdGUgKm5nVGVtcGxhdGVPdXRsZXQ9XCJcbiAgICAgIHNsaWRlc1RlbXBsYXRlO1xuICAgICAgY29udGV4dDoge1xuICAgICAgICBsb29wU2xpZGVzOiBhY3RpdmVTbGlkZXMsXG4gICAgICAgIGtleTogJydcbiAgICAgIH1cbiAgICBcIj48L25nLXRlbXBsYXRlPlxuICA8bmctdGVtcGxhdGUgKm5nVGVtcGxhdGVPdXRsZXQ9XCJcbiAgICAgIHNsaWRlc1RlbXBsYXRlO1xuICAgICAgY29udGV4dDoge1xuICAgICAgICBsb29wU2xpZGVzOiBhcHBlbmRTbGlkZXMsXG4gICAgICAgIGtleTogJ2FwcGVuZCdcbiAgICAgIH1cbiAgICBcIj48L25nLXRlbXBsYXRlPlxuICA8bmctY29udGVudCBzZWxlY3Q9XCJbc2xvdD13cmFwcGVyLWVuZF1cIj48L25nLWNvbnRlbnQ+XG48L2Rpdj5cbjxuZy1jb250ZW50IHNlbGVjdD1cIltzbG90PWNvbnRhaW5lci1lbmRdXCI+PC9uZy1jb250ZW50PlxuXG48bmctdGVtcGxhdGUgI3NsaWRlc1RlbXBsYXRlIGxldC1sb29wU2xpZGVzPVwibG9vcFNsaWRlc1wiIGxldC1zbGlkZUtleT1cImtleVwiPlxuICA8ZGl2ICpuZ0Zvcj1cImxldCBzbGlkZSBvZiBsb29wU2xpZGVzIHwgYXN5bmNcIiBbbmdDbGFzc109XCJcbiAgICAgIChzbGlkZS5jbGFzcyA/IHNsaWRlLmNsYXNzICsgJyAnIDogJycpICtcbiAgICAgIHNsaWRlQ2xhc3MgK1xuICAgICAgKHNsaWRlS2V5ICE9PSAnJyA/ICcgJyArIHNsaWRlRHVwbGljYXRlQ2xhc3MgOiAnJylcbiAgICBcIiBbYXR0ci5kYXRhLXN3aXBlci1zbGlkZS1pbmRleF09XCJzbGlkZS52aXJ0dWFsSW5kZXggPyBzbGlkZS52aXJ0dWFsSW5kZXggOiBzbGlkZS5zbGlkZUluZGV4XCIgW3N0eWxlXT1cInN0eWxlXCJcbiAgICBbbmdTd2l0Y2hdPVwic2xpZGUuem9vbVwiPlxuICAgIDxkaXYgKm5nU3dpdGNoQ2FzZT1cInRydWVcIiBbbmdDbGFzc109XCJ6b29tQ29udGFpbmVyQ2xhc3NcIj5cbiAgICAgIDxuZy10ZW1wbGF0ZSBbbmdUZW1wbGF0ZU91dGxldF09XCJzbGlkZS50ZW1wbGF0ZVwiIFtuZ1RlbXBsYXRlT3V0bGV0Q29udGV4dF09XCJ7XG4gICAgICAgICAgJGltcGxpY2l0OiBzbGlkZS5zbGlkZURhdGFcbiAgICAgICAgfVwiPjwvbmctdGVtcGxhdGU+XG4gICAgPC9kaXY+XG4gICAgPG5nLWNvbnRhaW5lciAqbmdTd2l0Y2hEZWZhdWx0PlxuICAgICAgPG5nLXRlbXBsYXRlIFtuZ1RlbXBsYXRlT3V0bGV0XT1cInNsaWRlLnRlbXBsYXRlXCIgW25nVGVtcGxhdGVPdXRsZXRDb250ZXh0XT1cIntcbiAgICAgICAgICAkaW1wbGljaXQ6IHNsaWRlLnNsaWRlRGF0YVxuICAgICAgICB9XCI+PC9uZy10ZW1wbGF0ZT5cbiAgICA8L25nLWNvbnRhaW5lcj5cbiAgPC9kaXY+XG48L25nLXRlbXBsYXRlPlxuIl19