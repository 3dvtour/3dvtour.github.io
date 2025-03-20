(function () {
    var c = {};
    function trans(e, f) {
        var g = arguments['length'] === 0x1 ? [arguments[0x0]] : Array['apply'](null, arguments);
        c[g[0x0]] = g;
        return '';
    }
    function regTextVar(h, i) {
        var j = ![];
        i = i['toLowerCase']();
        var k = function () {
            var t = this['get']('data');
            t['updateText'](t['translateObjs'][h]);
        };
        var l = function (u) {
            var v = u['data']['nextSelectedIndex'];
            if (v >= 0x0) {
                var w = u['source']['get']('items')[v];
                var x = function () {
                    w['unbind']('start', x, this);
                    k['call'](this);
                };
                w['bind']('start', x, this);
            } else
                k['call'](this);
        };
        var m = function (y) {
            return function (z) {
                if (y in z) {
                    k['call'](this);
                }
            }['bind'](this);
        };
        var n = function (A, B) {
            return function (C, D) {
                if (A == C && B in D) {
                    k['call'](this);
                }
            }['bind'](this);
        };
        var o = function (E, F, G) {
            for (var H = 0x0; H < E['length']; ++H) {
                var I = E[H];
                var J = I['get']('selectedIndex');
                if (J >= 0x0) {
                    var K = F['split']('.');
                    var L = I['get']('items')[J];
                    if (G !== undefined && !G['call'](this, L))
                        continue;
                    for (var M = 0x0; M < K['length']; ++M) {
                        if (L == undefined)
                            return '';
                        L = 'get' in L ? L['get'](K[M]) : L[K[M]];
                    }
                    return L;
                }
            }
            return '';
        };
        var p = function (N) {
            var O = N['get']('player');
            return O !== undefined && O['get']('viewerArea') == this['getMainViewer']();
        };
        switch (i) {
        case 'title':
        case 'subtitle':
            var r = function () {
                switch (i) {
                case 'title':
                    return 'media.label';
                case 'subtitle':
                    return 'media.data.subtitle';
                }
            }();
            if (r) {
                return function () {
                    var P = this['_getPlayListsWithViewer'](this['getMainViewer']());
                    if (!j) {
                        for (var Q = 0x0; Q < P['length']; ++Q) {
                            P[Q]['bind']('changing', l, this);
                        }
                        j = !![];
                    }
                    return o['call'](this, P, r, p);
                };
            }
            break;
        default:
            if (i['startsWith']('quiz.') && 'Quiz' in TDV) {
                var s = undefined;
                var r = function () {
                    switch (i) {
                    case 'quiz.questions.answered':
                        return TDV['Quiz']['PROPERTY']['QUESTIONS_ANSWERED'];
                    case 'quiz.question.count':
                        return TDV['Quiz']['PROPERTY']['QUESTION_COUNT'];
                    case 'quiz.items.found':
                        return TDV['Quiz']['PROPERTY']['ITEMS_FOUND'];
                    case 'quiz.item.count':
                        return TDV['Quiz']['PROPERTY']['ITEM_COUNT'];
                    case 'quiz.score':
                        return TDV['Quiz']['PROPERTY']['SCORE'];
                    case 'quiz.score.total':
                        return TDV['Quiz']['PROPERTY']['TOTAL_SCORE'];
                    case 'quiz.time.remaining':
                        return TDV['Quiz']['PROPERTY']['REMAINING_TIME'];
                    case 'quiz.time.elapsed':
                        return TDV['Quiz']['PROPERTY']['ELAPSED_TIME'];
                    case 'quiz.time.limit':
                        return TDV['Quiz']['PROPERTY']['TIME_LIMIT'];
                    case 'quiz.media.items.found':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_ITEMS_FOUND'];
                    case 'quiz.media.item.count':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_ITEM_COUNT'];
                    case 'quiz.media.questions.answered':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_QUESTIONS_ANSWERED'];
                    case 'quiz.media.question.count':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_QUESTION_COUNT'];
                    case 'quiz.media.score':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_SCORE'];
                    case 'quiz.media.score.total':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_TOTAL_SCORE'];
                    case 'quiz.media.index':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_INDEX'];
                    case 'quiz.media.count':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_COUNT'];
                    case 'quiz.media.visited':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_VISITED_COUNT'];
                    default:
                        var R = /quiz\.([\w_]+)\.(.+)/['exec'](i);
                        if (R) {
                            s = R[0x1];
                            switch ('quiz.' + R[0x2]) {
                            case 'quiz.score':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['SCORE'];
                            case 'quiz.score.total':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['TOTAL_SCORE'];
                            case 'quiz.media.items.found':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_ITEMS_FOUND'];
                            case 'quiz.media.item.count':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_ITEM_COUNT'];
                            case 'quiz.media.questions.answered':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_QUESTIONS_ANSWERED'];
                            case 'quiz.media.question.count':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_QUESTION_COUNT'];
                            case 'quiz.questions.answered':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['QUESTIONS_ANSWERED'];
                            case 'quiz.question.count':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['QUESTION_COUNT'];
                            case 'quiz.items.found':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['ITEMS_FOUND'];
                            case 'quiz.item.count':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['ITEM_COUNT'];
                            case 'quiz.media.score':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_SCORE'];
                            case 'quiz.media.score.total':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_TOTAL_SCORE'];
                            }
                        }
                    }
                }();
                if (r) {
                    return function () {
                        var S = this['get']('data')['quiz'];
                        if (S) {
                            if (!j) {
                                if (s != undefined)
                                    if (s == 'global') {
                                        var U = this['get']('data')['quizConfig'];
                                        var W = U['objectives'];
                                        for (var Y = 0x0, a0 = W['length']; Y < a0; ++Y) {
                                            S['bind'](TDV['Quiz']['EVENT_OBJECTIVE_PROPERTIES_CHANGE'], n['call'](this, W[Y]['id'], r), this);
                                        }
                                    } else {
                                        S['bind'](TDV['Quiz']['EVENT_OBJECTIVE_PROPERTIES_CHANGE'], n['call'](this, s, r), this);
                                    }
                                else
                                    S['bind'](TDV['Quiz']['EVENT_PROPERTIES_CHANGE'], m['call'](this, r), this);
                                j = !![];
                            }
                            try {
                                var a1 = 0x0;
                                if (s != undefined) {
                                    if (s == 'global') {
                                        var U = this['get']('data')['quizConfig'];
                                        var W = U['objectives'];
                                        for (var Y = 0x0, a0 = W['length']; Y < a0; ++Y) {
                                            a1 += S['getObjective'](W[Y]['id'], r);
                                        }
                                    } else {
                                        a1 = S['getObjective'](s, r);
                                    }
                                } else {
                                    a1 = S['get'](r);
                                    if (r == TDV['Quiz']['PROPERTY']['PANORAMA_INDEX'])
                                        a1 += 0x1;
                                }
                                return a1;
                            } catch (a2) {
                                return undefined;
                            }
                        }
                    };
                }
            }
            break;
        }
        return '';
    }
    function createQuizConfig(player, a3) {
        var a4 = {};
        a4['player'] = player;
        a4['playList'] = a3;
        function a5(a8) {
            for (var a9 = 0x0; a9 < a8['length']; ++a9) {
                var aa = a8[a9];
                if ('id' in aa)
                    player[aa['id']] = aa;
            }
        }
        if (a4['questions']) {
            a5(a4['questions']);
            for (var a6 = 0x0; a6 < a4['questions']['length']; ++a6) {
                var a7 = a4['questions'][a6];
                a5(a7['options']);
            }
        }
        if (a4['objectives']) {
            a5(a4['objectives']);
        }
        if (a4['califications']) {
            a5(a4['califications']);
        }
        if (a4['score']) {
            player[a4['score']['id']] = a4['score'];
        }
        if (a4['question']) {
            player[a4['question']['id']] = a4['question'];
        }
        if (a4['timeout']) {
            player[a4['timeout']['id']] = a4['timeout'];
        }
        player['get']('data')['translateObjs'] = c;
        return a4;
    }
    var d = {"borderSize":0,"scrollBarVisible":"rollOver","verticalAlign":"top","gap":10,"overflow":"hidden","desktopMipmappingEnabled":false,"scrollBarMargin":2,"backgroundColorDirection":"vertical","id":"rootPlayer","vrPolyfillScale":0.75,"paddingLeft":0,"propagateClick":false,"backgroundColor":["#FFFFFF"],"scrollBarColor":"#000000","data":{"locales":{"en":"locale/en.txt"},"name":"Player942","textToSpeechConfig":{"pitch":1,"stopBackgroundAudio":false,"volume":1,"speechOnInfoWindow":false,"speechOnQuizQuestion":false,"speechOnTooltip":false,"rate":1},"defaultLocale":"en"},"backgroundOpacity":1,"paddingRight":0,"definitions": [{"surfaceSelectionEnabled":false,"gyroscopeVerticalDraggingEnabled":true,"viewerArea":"this.MainViewer","zoomEnabled":true,"mouseControlMode":"drag_rotation","class":"PanoramaPlayer","arrowKeysAction":"translate","id":"MainViewerPanoramaPlayer","aaEnabled":true,"displayPlaybackBar":true,"touchControlMode":"drag_rotation"},{"borderSize":0,"vrPointerSelectionColor":"#FF6600","toolTipShadowOpacity":1,"progressBorderColor":"#000000","toolTipTextShadowBlurRadius":3,"translationTransitionDuration":1000,"playbackBarProgressBorderColor":"#000000","toolTipHorizontalAlign":"center","progressBarBackgroundColor":["#3399FF"],"subtitlesPaddingBottom":5,"progressBackgroundColor":["#FFFFFF"],"subtitlesBackgroundOpacity":0.2,"progressBarOpacity":1,"toolTipShadowHorizontalLength":0,"surfaceReticleColor":"#FFFFFF","surfaceReticleSelectionOpacity":1,"playbackBarHeadBorderRadius":0,"toolTipBorderRadius":3,"subtitlesTextShadowHorizontalLength":1,"progressBottom":0,"subtitlesBorderColor":"#FFFFFF","toolTipBorderSize":1,"playbackBarOpacity":1,"displayTooltipInTouchScreens":true,"toolTipPaddingTop":4,"playbackBarHeadBackgroundColor":["#111111","#666666"],"playbackBarProgressOpacity":1,"subtitlesTextDecoration":"none","subtitlesBottom":50,"transitionMode":"blending","subtitlesTextShadowBlurRadius":0,"toolTipTextShadowColor":"#000000","displayTooltipInSurfaceSelection":true,"data":{"name":"Main Viewer"},"toolTipBackgroundColor":"#F6F6F6","subtitlesFontFamily":"Arial","playbackBarHeadBorderColor":"#000000","progressHeight":10,"transitionDuration":500,"playbackBarBottom":5,"playbackBarBorderSize":0,"toolTipDisplayTime":600,"borderRadius":0,"subtitlesPaddingTop":5,"playbackBarProgressBackgroundColorDirection":"vertical","subtitlesShadow":false,"vrPointerColor":"#FFFFFF","toolTipTextShadowOpacity":0,"toolTipShadowSpread":0,"paddingBottom":0,"subtitlesEnabled":true,"progressBorderSize":0,"playbackBarHeight":10,"paddingTop":0,"playbackBarBackgroundColor":["#FFFFFF"],"progressBarBorderRadius":0,"toolTipFontColor":"#606060","toolTipShadowBlurRadius":3,"subtitlesGap":0,"toolTipShadowColor":"#333333","playbackBarHeadBackgroundColorDirection":"vertical","progressBackgroundColorRatios":[0],"doubleClickAction":"toggle_fullscreen","playbackBarHeadWidth":6,"progressBarBorderSize":0,"subtitlesHorizontalAlign":"center","toolTipFontFamily":"Arial","vrPointerSelectionTime":2000,"subtitlesBackgroundColor":"#000000","shadow":false,"playbackBarBackgroundOpacity":1,"progressRight":0,"toolTipPaddingLeft":6,"surfaceReticleOpacity":0.6,"playbackBarBackgroundColorDirection":"vertical","subtitlesVerticalAlign":"bottom","playbackBarProgressBorderSize":0,"toolTipPaddingBottom":4,"subtitlesTextShadowVerticalLength":1,"subtitlesBorderSize":0,"playbackBarRight":0,"toolTipShadowVerticalLength":0,"subtitlesTextShadowOpacity":1,"id":"MainViewer","playbackBarHeadShadowBlurRadius":3,"subtitlesFontColor":"#FFFFFF","paddingLeft":0,"toolTipFontSize":"1.11vmin","playbackBarHeadShadowHorizontalLength":0,"propagateClick":false,"progressBackgroundOpacity":1,"playbackBarProgressBackgroundColor":["#3399FF"],"paddingRight":0,"toolTipOpacity":1,"playbackBarLeft":0,"firstTransitionDuration":0,"progressBarBackgroundColorDirection":"vertical","playbackBarHeadHeight":15,"progressOpacity":1,"progressBorderRadius":0,"subtitlesFontWeight":"normal","progressLeft":0,"progressBarBackgroundColorRatios":[0],"playbackBarHeadShadowOpacity":0.7,"progressBarBorderColor":"#000000","playbackBarHeadShadowColor":"#000000","subtitlesOpacity":1,"subtitlesTop":0,"playbackBarProgressBorderRadius":0,"progressBackgroundColorDirection":"vertical","playbackBarProgressBackgroundColorRatios":[0],"playbackBarHeadBackgroundColorRatios":[0,1],"class":"ViewerArea","playbackBarHeadBorderSize":0,"toolTipFontWeight":"normal","subtitlesTextShadowColor":"#000000","height":"100%","playbackBarBorderColor":"#FFFFFF","width":"100%","playbackBarBorderRadius":0,"surfaceReticleSelectionColor":"#FFFFFF","subtitlesPaddingLeft":5,"playbackBarHeadShadow":true,"minWidth":100,"minHeight":50,"playbackBarHeadOpacity":1,"toolTipBorderColor":"#767676","toolTipFontStyle":"normal","subtitlesPaddingRight":5,"subtitlesFontSize":"3vmin","toolTipPaddingRight":6,"playbackBarHeadShadowVerticalLength":0},{"hoverFactor":0,"class":"PanoramaCamera","initialPosition":{"pitch":0,"class":"PanoramaCameraPosition","yaw":0},"automaticZoomSpeed":10,"id":"panorama_B98A4BAC_B22D_9FED_41DB_51CD78EF40FA_camera","initialSequence":"this.sequence_B8711013_B22C_A8BB_41B1_C1989C7C5B1C"},{"overlays":["this.overlay_BD2ED64A_B22C_6895_41CE_7CA6FFBCA094"],"vfov":180,"class":"Panorama","hfovMax":130,"hfov":360,"pitch":0,"frames":[{"thumbnailUrl":"media/panorama_B87C5E35_B22C_78FF_41C3_434990CC70D8_t.jpg","class":"CubicPanoramaFrame","cube":{"class":"ImageResource","levels":[{"height":2560,"tags":"ondemand","class":"TiledImageResourceLevel","width":15360,"colCount":30,"url":"media/panorama_B87C5E35_B22C_78FF_41C3_434990CC70D8_0/{face}/0/{row}_{column}.jpg","rowCount":5},{"height":1536,"tags":"ondemand","class":"TiledImageResourceLevel","width":9216,"colCount":18,"url":"media/panorama_B87C5E35_B22C_78FF_41C3_434990CC70D8_0/{face}/1/{row}_{column}.jpg","rowCount":3},{"height":1024,"tags":"ondemand","class":"TiledImageResourceLevel","width":6144,"colCount":12,"url":"media/panorama_B87C5E35_B22C_78FF_41C3_434990CC70D8_0/{face}/2/{row}_{column}.jpg","rowCount":2},{"height":512,"tags":["ondemand","preload"],"class":"TiledImageResourceLevel","width":3072,"colCount":6,"url":"media/panorama_B87C5E35_B22C_78FF_41C3_434990CC70D8_0/{face}/3/{row}_{column}.jpg","rowCount":1}]}}],"hfovMin":"135%","id":"panorama_B87C5E35_B22C_78FF_41C3_434990CC70D8","data":{"label":"ipswich2"},"label":trans('panorama_B87C5E35_B22C_78FF_41C3_434990CC70D8.label'),"thumbnailUrl":"media/panorama_B87C5E35_B22C_78FF_41C3_434990CC70D8_t.jpg","partial":false},{"id":"mainPlayList","items":[{"class":"PanoramaPlayListItem","player":"this.MainViewerPanoramaPlayer","begin":"this.setEndToItemIndex(this.mainPlayList, 0, 1)","camera":"this.panorama_B98A4BAC_B22D_9FED_41DB_51CD78EF40FA_camera","media":"this.panorama_B98A4BAC_B22D_9FED_41DB_51CD78EF40FA"},{"class":"PanoramaPlayListItem","end":"this.trigger('tourEnded')","player":"this.MainViewerPanoramaPlayer","camera":"this.panorama_B87C5E35_B22C_78FF_41C3_434990CC70D8_camera","begin":"this.setEndToItemIndex(this.mainPlayList, 1, 0)","media":"this.panorama_B87C5E35_B22C_78FF_41C3_434990CC70D8"}],"class":"PlayList"},{"overlays":["this.overlay_BFC640F0_B22C_6975_41C2_80804FB0A2AC"],"vfov":180,"class":"Panorama","hfovMax":130,"hfov":360,"pitch":0,"frames":[{"thumbnailUrl":"media/panorama_B98A4BAC_B22D_9FED_41DB_51CD78EF40FA_t.jpg","class":"CubicPanoramaFrame","cube":{"class":"ImageResource","levels":[{"height":2560,"tags":"ondemand","class":"TiledImageResourceLevel","width":15360,"colCount":30,"url":"media/panorama_B98A4BAC_B22D_9FED_41DB_51CD78EF40FA_0/{face}/0/{row}_{column}.jpg","rowCount":5},{"height":1536,"tags":"ondemand","class":"TiledImageResourceLevel","width":9216,"colCount":18,"url":"media/panorama_B98A4BAC_B22D_9FED_41DB_51CD78EF40FA_0/{face}/1/{row}_{column}.jpg","rowCount":3},{"height":1024,"tags":"ondemand","class":"TiledImageResourceLevel","width":6144,"colCount":12,"url":"media/panorama_B98A4BAC_B22D_9FED_41DB_51CD78EF40FA_0/{face}/2/{row}_{column}.jpg","rowCount":2},{"height":512,"tags":["ondemand","preload"],"class":"TiledImageResourceLevel","width":3072,"colCount":6,"url":"media/panorama_B98A4BAC_B22D_9FED_41DB_51CD78EF40FA_0/{face}/3/{row}_{column}.jpg","rowCount":1}]}}],"hfovMin":"135%","id":"panorama_B98A4BAC_B22D_9FED_41DB_51CD78EF40FA","data":{"label":"ipswich1"},"adjacentPanoramas":[{"data":{"overlayID":"overlay_BFC640F0_B22C_6975_41C2_80804FB0A2AC"},"distance":16.59,"class":"AdjacentPanorama","yaw":-1.7,"panorama":"this.panorama_B87C5E35_B22C_78FF_41C3_434990CC70D8","select":"this.overlay_BFC640F0_B22C_6975_41C2_80804FB0A2AC.get('areas').forEach(function(a){ a.trigger('click') })"}],"label":trans('panorama_B98A4BAC_B22D_9FED_41DB_51CD78EF40FA.label'),"thumbnailUrl":"media/panorama_B98A4BAC_B22D_9FED_41DB_51CD78EF40FA_t.jpg","partial":false},{"id":"ThumbnailList_A270F422_B22B_A895_41B4_BC4B8D2ACCB7_playlist","items":[{"player":"this.MainViewerPanoramaPlayer","class":"PanoramaPlayListItem","camera":"this.panorama_B98A4BAC_B22D_9FED_41DB_51CD78EF40FA_camera","media":"this.panorama_B98A4BAC_B22D_9FED_41DB_51CD78EF40FA"},{"player":"this.MainViewerPanoramaPlayer","class":"PanoramaPlayListItem","camera":"this.panorama_B87C5E35_B22C_78FF_41C3_434990CC70D8_camera","media":"this.panorama_B87C5E35_B22C_78FF_41C3_434990CC70D8"}],"class":"PlayList"},{"borderSize":0,"shadow":false,"itemLabelPosition":"bottom","itemVerticalAlign":"middle","gap":10,"paddingBottom":10,"paddingTop":10,"scrollBarMargin":2,"backgroundColorDirection":"vertical","id":"ThumbnailList_A270F422_B22B_A895_41B4_BC4B8D2ACCB7","itemThumbnailBorderRadius":5,"paddingLeft":20,"propagateClick":false,"backgroundColor":["#000000"],"itemLabelFontStyle":"normal","scrollBarColor":"#FFFFFF","data":{"name":"ThumbnailList945"},"backgroundOpacity":0.2,"itemThumbnailShadowColor":"#000000","paddingRight":20,"itemLabelTextDecoration":"none","itemOpacity":1,"itemThumbnailShadowBlurRadius":4,"itemPaddingBottom":3,"itemThumbnailShadowSpread":1,"horizontalAlign":"left","itemLabelFontFamily":"Arial","scrollBarWidth":10,"itemThumbnailOpacity":1,"itemHorizontalAlign":"center","itemLabelFontWeight":"normal","itemLabelFontSize":14,"itemLabelFontColor":"#FFFFFF","itemThumbnailShadow":true,"itemThumbnailShadowOpacity":0.8,"itemPaddingRight":3,"itemThumbnailWidth":100,"itemThumbnailHeight":75,"itemThumbnailShadowHorizontalLength":3,"playList":"this.ThumbnailList_A270F422_B22B_A895_41B4_BC4B8D2ACCB7_playlist","class":"ThumbnailList","layout":"horizontal","borderRadius":5,"maxWidth":800,"scrollBarOpacity":0.5,"maxHeight":600,"itemBackgroundOpacity":0,"scrollBarVisible":"rollOver","backgroundColorRatios":[0],"itemLabelGap":5,"itemPaddingTop":3,"itemThumbnailShadowVerticalLength":3,"itemBackgroundColor":[],"selectedItemLabelFontWeight":"bold","itemBorderRadius":0,"minHeight":0,"itemBackgroundColorDirection":"vertical","minWidth":0,"itemLabelHorizontalAlign":"center","itemPaddingLeft":3,"itemThumbnailScaleMode":"fit_outside","verticalAlign":"top","toolTipHorizontalAlign":"center","itemBackgroundColorRatios":[],"itemMode":"normal"},{"hoverFactor":0,"class":"PanoramaCamera","initialPosition":{"pitch":0,"class":"PanoramaCameraPosition","yaw":0},"automaticZoomSpeed":10,"id":"panorama_B87C5E35_B22C_78FF_41C3_434990CC70D8_camera","initialSequence":"this.sequence_B872C015_B22C_A8BF_41A2_F3849A66FF49"},{"borderSize":0,"gap":10,"toolTipHorizontalAlign":"center","verticalAlign":"bottom","overflow":"visible","bottom":0,"scrollBarMargin":2,"id":"Container_A2731421_B22B_A897_41DD_407BBB96E9D3","propagateClick":false,"paddingLeft":0,"scrollBarColor":"#000000","left":0,"backgroundOpacity":0,"right":0,"paddingRight":0,"children":["this.ThumbnailList_A270F422_B22B_A895_41B4_BC4B8D2ACCB7"],"horizontalAlign":"center","scrollBarWidth":10,"layout":"horizontal","data":{"name":"Container944"},"class":"Container","contentOpaque":false,"borderRadius":0,"scrollBarOpacity":0.5,"paddingTop":0,"height":200,"paddingBottom":0,"minHeight":20,"minWidth":20,"scrollBarVisible":"rollOver","shadow":false},{"movements":[{"yawSpeed":7.96,"class":"DistancePanoramaCameraMovement","easing":"cubic_in","yawDelta":18.5},{"yawSpeed":7.96,"class":"DistancePanoramaCameraMovement","easing":"linear","yawDelta":323},{"yawSpeed":7.96,"class":"DistancePanoramaCameraMovement","easing":"cubic_out","yawDelta":18.5}],"class":"PanoramaCameraSequence","id":"sequence_B8711013_B22C_A8BB_41B1_C1989C7C5B1C","restartMovementOnUserInteraction":false},{"enabledInCardboard":true,"class":"HotspotPanoramaOverlay","maps":[],"id":"overlay_BD2ED64A_B22C_6895_41CE_7CA6FFBCA094","items":[{"pitch":-2.3,"image":"this.AnimatedImageResource_A05ECF32_B254_98F5_41D6_3370176DA872","distance":100,"hfov":10.5,"yaw":113.21,"data":{"label":"Arrow 01b"},"scaleMode":"fit_inside","vfov":5.73,"class":"HotspotPanoramaOverlayImage","verticalAlign":"middle","horizontalAlign":"center"}],"areas":["this.HotspotPanoramaOverlayArea_BD2A4650_B22C_68B5_41E5_26D0D900E48C"],"useHandCursor":true,"data":{"label":"Arrow 01b"}},{"data":{"hasPanoramaAction":true,"label":"Arrow 01b"},"class":"HotspotPanoramaOverlay","maps":[],"id":"overlay_BFC640F0_B22C_6975_41C2_80804FB0A2AC","items":[{"pitch":-5.84,"image":"this.AnimatedImageResource_A05E3F31_B254_98F7_4171_BC20600D6CEA","distance":100,"hfov":10.5,"yaw":-1.7,"data":{"label":"Arrow 01b"},"scaleMode":"fit_inside","vfov":5.73,"class":"HotspotPanoramaOverlayImage","verticalAlign":"middle","horizontalAlign":"center"}],"enabledInCardboard":true,"areas":["this.HotspotPanoramaOverlayArea_BC1EA152_B22C_68B5_41C5_E1FAD08280E2"],"useHandCursor":true},{"movements":[{"yawSpeed":7.96,"class":"DistancePanoramaCameraMovement","easing":"cubic_in","yawDelta":18.5},{"yawSpeed":7.96,"class":"DistancePanoramaCameraMovement","easing":"linear","yawDelta":323},{"yawSpeed":7.96,"class":"DistancePanoramaCameraMovement","easing":"cubic_out","yawDelta":18.5}],"class":"PanoramaCameraSequence","id":"sequence_B872C015_B22C_A8BF_41A2_F3849A66FF49","restartMovementOnUserInteraction":false},{"frameDuration":62,"rowCount":3,"class":"AnimatedImageResource","id":"AnimatedImageResource_A05ECF32_B254_98F5_41D6_3370176DA872","frameCount":9,"colCount":3,"levels":[{"height":180,"class":"ImageResourceLevel","url":"media/res_BCD1454C_B22D_A8AD_41DF_8B53283BA0CD_0.png","width":330}]},{"id":"HotspotPanoramaOverlayArea_BD2A4650_B22C_68B5_41E5_26D0D900E48C","class":"HotspotPanoramaOverlayArea","mapColor":"any"},{"frameDuration":62,"rowCount":3,"class":"AnimatedImageResource","id":"AnimatedImageResource_A05E3F31_B254_98F7_4171_BC20600D6CEA","frameCount":9,"colCount":3,"levels":[{"height":180,"class":"ImageResourceLevel","url":"media/res_BCD1454C_B22D_A8AD_41DF_8B53283BA0CD_0.png","width":330}]},{"id":"HotspotPanoramaOverlayArea_BC1EA152_B22C_68B5_41C5_E1FAD08280E2","click":"this.mainPlayList.set('selectedIndex', 1)","class":"HotspotPanoramaOverlayArea","mapColor":"any"}],"mobileMipmappingEnabled":false,"start":"this.init(); this.syncPlaylists([this.mainPlayList,this.ThumbnailList_A270F422_B22B_A895_41B4_BC4B8D2ACCB7_playlist])","mouseWheelEnabled":true,"horizontalAlign":"left","scrollBarWidth":10,"backgroundPreloadEnabled":true,"defaultVRPointer":"laser","scripts":{"changeBackgroundWhilePlay":TDV.Tour.Script.changeBackgroundWhilePlay,"changePlayListWithSameSpot":TDV.Tour.Script.changePlayListWithSameSpot,"historyGoForward":TDV.Tour.Script.historyGoForward,"pauseGlobalAudiosWhilePlayItem":TDV.Tour.Script.pauseGlobalAudiosWhilePlayItem,"_getObjectsByTags":TDV.Tour.Script._getObjectsByTags,"stopGlobalAudio":TDV.Tour.Script.stopGlobalAudio,"setMediaBehaviour":TDV.Tour.Script.setMediaBehaviour,"getActiveMediaWithViewer":TDV.Tour.Script.getActiveMediaWithViewer,"getOverlays":TDV.Tour.Script.getOverlays,"takeScreenshot":TDV.Tour.Script.takeScreenshot,"openLink":TDV.Tour.Script.openLink,"textToSpeechComponent":TDV.Tour.Script.textToSpeechComponent,"mixObject":TDV.Tour.Script.mixObject,"quizSetItemFound":TDV.Tour.Script.quizSetItemFound,"getOverlaysByTags":TDV.Tour.Script.getOverlaysByTags,"htmlToPlainText":TDV.Tour.Script.htmlToPlainText,"setOverlayBehaviour":TDV.Tour.Script.setOverlayBehaviour,"setStartTimeVideoSync":TDV.Tour.Script.setStartTimeVideoSync,"getComponentsByTags":TDV.Tour.Script.getComponentsByTags,"getOverlaysByGroupname":TDV.Tour.Script.getOverlaysByGroupname,"stopTextToSpeech":TDV.Tour.Script.stopTextToSpeech,"skip3DTransitionOnce":TDV.Tour.Script.skip3DTransitionOnce,"triggerOverlay":TDV.Tour.Script.triggerOverlay,"getActivePlayerWithViewer":TDV.Tour.Script.getActivePlayerWithViewer,"setValue":TDV.Tour.Script.setValue,"getPanoramaOverlayByName":TDV.Tour.Script.getPanoramaOverlayByName,"getPixels":TDV.Tour.Script.getPixels,"getComponentByName":TDV.Tour.Script.getComponentByName,"setComponentVisibility":TDV.Tour.Script.setComponentVisibility,"getMediaFromPlayer":TDV.Tour.Script.getMediaFromPlayer,"getPanoramaOverlaysByTags":TDV.Tour.Script.getPanoramaOverlaysByTags,"setOverlaysVisibility":TDV.Tour.Script.setOverlaysVisibility,"shareSocial":TDV.Tour.Script.shareSocial,"initAnalytics":TDV.Tour.Script.initAnalytics,"getCurrentPlayerWithMedia":TDV.Tour.Script.getCurrentPlayerWithMedia,"updateDeepLink":TDV.Tour.Script.updateDeepLink,"playAudioList":TDV.Tour.Script.playAudioList,"setOverlaysVisibilityByTags":TDV.Tour.Script.setOverlaysVisibilityByTags,"setComponentsVisibilityByTags":TDV.Tour.Script.setComponentsVisibilityByTags,"downloadFile":TDV.Tour.Script.downloadFile,"showComponentsWhileMouseOver":TDV.Tour.Script.showComponentsWhileMouseOver,"initQuiz":TDV.Tour.Script.initQuiz,"cloneCamera":TDV.Tour.Script.cloneCamera,"getKey":TDV.Tour.Script.getKey,"updateMediaLabelFromPlayList":TDV.Tour.Script.updateMediaLabelFromPlayList,"getPlayListsWithMedia":TDV.Tour.Script.getPlayListsWithMedia,"init":TDV.Tour.Script.init,"_initSplitViewer":TDV.Tour.Script._initSplitViewer,"changeOpacityWhilePlay":TDV.Tour.Script.changeOpacityWhilePlay,"loadFromCurrentMediaPlayList":TDV.Tour.Script.loadFromCurrentMediaPlayList,"showPopupMedia":TDV.Tour.Script.showPopupMedia,"pauseCurrentPlayers":TDV.Tour.Script.pauseCurrentPlayers,"getCurrentPlayers":TDV.Tour.Script.getCurrentPlayers,"resumeGlobalAudios":TDV.Tour.Script.resumeGlobalAudios,"playGlobalAudioWhilePlay":TDV.Tour.Script.playGlobalAudioWhilePlay,"pauseGlobalAudios":TDV.Tour.Script.pauseGlobalAudios,"updateVideoCues":TDV.Tour.Script.updateVideoCues,"showPopupImage":TDV.Tour.Script.showPopupImage,"_getPlayListsWithViewer":TDV.Tour.Script._getPlayListsWithViewer,"setPanoramaCameraWithCurrentSpot":TDV.Tour.Script.setPanoramaCameraWithCurrentSpot,"autotriggerAtStart":TDV.Tour.Script.autotriggerAtStart,"_initTwinsViewer":TDV.Tour.Script._initTwinsViewer,"getPlayListWithItem":TDV.Tour.Script.getPlayListWithItem,"_initTTSTooltips":TDV.Tour.Script._initTTSTooltips,"executeFunctionWhenChange":TDV.Tour.Script.executeFunctionWhenChange,"getGlobalAudio":TDV.Tour.Script.getGlobalAudio,"visibleComponentsIfPlayerFlagEnabled":TDV.Tour.Script.visibleComponentsIfPlayerFlagEnabled,"showPopupPanoramaOverlay":TDV.Tour.Script.showPopupPanoramaOverlay,"isCardboardViewMode":TDV.Tour.Script.isCardboardViewMode,"copyObjRecursively":TDV.Tour.Script.copyObjRecursively,"fixTogglePlayPauseButton":TDV.Tour.Script.fixTogglePlayPauseButton,"getFirstPlayListWithMedia":TDV.Tour.Script.getFirstPlayListWithMedia,"quizShowScore":TDV.Tour.Script.quizShowScore,"setMapLocation":TDV.Tour.Script.setMapLocation,"getMainViewer":TDV.Tour.Script.getMainViewer,"setEndToItemIndex":TDV.Tour.Script.setEndToItemIndex,"quizStart":TDV.Tour.Script.quizStart,"showPopupPanoramaVideoOverlay":TDV.Tour.Script.showPopupPanoramaVideoOverlay,"sendAnalyticsData":TDV.Tour.Script.sendAnalyticsData,"showWindow":TDV.Tour.Script.showWindow,"quizShowTimeout":TDV.Tour.Script.quizShowTimeout,"setPanoramaCameraWithSpot":TDV.Tour.Script.setPanoramaCameraWithSpot,"getPlayListItems":TDV.Tour.Script.getPlayListItems,"openEmbeddedPDF":TDV.Tour.Script.openEmbeddedPDF,"quizFinish":TDV.Tour.Script.quizFinish,"getMediaWidth":TDV.Tour.Script.getMediaWidth,"clone":TDV.Tour.Script.clone,"isPanorama":TDV.Tour.Script.isPanorama,"getMediaByName":TDV.Tour.Script.getMediaByName,"resumePlayers":TDV.Tour.Script.resumePlayers,"setSurfaceSelectionHotspotMode":TDV.Tour.Script.setSurfaceSelectionHotspotMode,"getPlayListItemByMedia":TDV.Tour.Script.getPlayListItemByMedia,"registerKey":TDV.Tour.Script.registerKey,"pauseGlobalAudio":TDV.Tour.Script.pauseGlobalAudio,"textToSpeech":TDV.Tour.Script.textToSpeech,"copyToClipboard":TDV.Tour.Script.copyToClipboard,"setCameraSameSpotAsMedia":TDV.Tour.Script.setCameraSameSpotAsMedia,"getMediaByTags":TDV.Tour.Script.getMediaByTags,"startPanoramaWithCamera":TDV.Tour.Script.startPanoramaWithCamera,"unregisterKey":TDV.Tour.Script.unregisterKey,"historyGoBack":TDV.Tour.Script.historyGoBack,"stopGlobalAudios":TDV.Tour.Script.stopGlobalAudios,"keepCompVisible":TDV.Tour.Script.keepCompVisible,"setMainMediaByIndex":TDV.Tour.Script.setMainMediaByIndex,"stopAndGoCamera":TDV.Tour.Script.stopAndGoCamera,"translate":TDV.Tour.Script.translate,"getMediaHeight":TDV.Tour.Script.getMediaHeight,"syncPlaylists":TDV.Tour.Script.syncPlaylists,"playGlobalAudio":TDV.Tour.Script.playGlobalAudio,"quizShowQuestion":TDV.Tour.Script.quizShowQuestion,"setMainMediaByName":TDV.Tour.Script.setMainMediaByName,"existsKey":TDV.Tour.Script.existsKey,"_initItemWithComps":TDV.Tour.Script._initItemWithComps,"assignObjRecursively":TDV.Tour.Script.assignObjRecursively,"setLocale":TDV.Tour.Script.setLocale,"setStartTimeVideo":TDV.Tour.Script.setStartTimeVideo},"children":["this.MainViewer","this.Container_A2731421_B22B_A897_41DD_407BBB96E9D3"],"layout":"absolute","mediaActivationMode":"window","class":"Player","contentOpaque":false,"borderRadius":0,"scrollBarOpacity":0.5,"width":"100%","downloadEnabled":false,"height":"100%","paddingTop":0,"paddingBottom":0,"minHeight":20,"backgroundColorRatios":[0],"minWidth":20,"shadow":false,"toolTipHorizontalAlign":"center"};
    if (d['data'] == undefined)
        d['data'] = {};
    d['data']['translateObjs'] = c;
    d['data']['history'] = {};
    d['scripts']['createQuizConfig'] = createQuizConfig;
    TDV['PlayerAPI']['defineScript'](d);
}());
//# sourceMappingURL=http://localhost:9000/script_device_v2021.2.3.js.map
//Generated with v2021.2.3, Thu Mar 20 2025
//