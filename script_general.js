(function(){
var translateObjs = {};
function trans(a, b) {
    var c = arguments['length'] === 0x1 ? [arguments[0x0]] : Array['apply'](null, arguments);
    translateObjs[c[0x0]] = c;
    return '';
}
function regTextVar(a, b) {
    var c = ![];
    return d(b);
    function d(k, l) {
        switch (k['toLowerCase']()) {
        case 'title':
        case 'subtitle':
        case 'photo.title':
        case 'photo.description':
            var n = function () {
                switch (k['toLowerCase']()) {
                case 'title':
                case 'photo.title':
                    return 'media.label';
                case 'subtitle':
                    return 'media.data.subtitle';
                case 'photo.description':
                    return 'media.data.description';
                }
            }();
            if (n) {
                return function () {
                    var s, t;
                    var u = (l && l['viewerName'] ? this['getComponentByName'](l['viewerName']) : undefined) || this['getMainViewer']();
                    if (k['toLowerCase']()['startsWith']('photo'))
                        s = this['getByClassName']('PhotoAlbumPlayListItem')['filter'](function (w) {
                            var x = w['get']('player');
                            return x && x['get']('viewerArea') == u;
                        })['map'](function (w) {
                            return w['get']('media')['get']('playList');
                        });
                    else {
                        s = this['_getPlayListsWithViewer'](u);
                        t = j['bind'](this, u);
                    }
                    if (!c) {
                        for (var v = 0x0; v < s['length']; ++v) {
                            s[v]['bind']('changing', f, this);
                        }
                        c = !![];
                    }
                    return i['call'](this, s, n, t);
                };
            }
            break;
        case 'tour.name':
        case 'tour.description':
            return function () {
                return this['get']('data')['tour']['locManager']['trans'](k);
            };
        default:
            if (k['toLowerCase']()['startsWith']('viewer.')) {
                var o = k['split']('.');
                var p = o[0x1];
                if (p) {
                    var q = o['slice'](0x2)['join']('.');
                    return d(q, { 'viewerName': p });
                }
            } else if (k['toLowerCase']()['startsWith']('quiz.') && 'Quiz' in TDV) {
                var r = undefined;
                var n = function () {
                    switch (k['toLowerCase']()) {
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
                        var s = /quiz\.([\w_]+)\.(.+)/['exec'](k);
                        if (s) {
                            r = s[0x1];
                            switch ('quiz.' + s[0x2]) {
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
                if (n) {
                    return function () {
                        var s = this['get']('data')['quiz'];
                        if (s) {
                            if (!c) {
                                if (r != undefined)
                                    if (r == 'global') {
                                        var u = this['get']('data')['quizConfig'];
                                        var w = u['objectives'];
                                        for (var y = 0x0, A = w['length']; y < A; ++y) {
                                            s['bind'](TDV['Quiz']['EVENT_OBJECTIVE_PROPERTIES_CHANGE'], h['call'](this, w[y]['id'], n), this);
                                        }
                                    } else {
                                        s['bind'](TDV['Quiz']['EVENT_OBJECTIVE_PROPERTIES_CHANGE'], h['call'](this, r, n), this);
                                    }
                                else
                                    s['bind'](TDV['Quiz']['EVENT_PROPERTIES_CHANGE'], g['call'](this, n), this);
                                c = !![];
                            }
                            try {
                                var B = 0x0;
                                if (r != undefined) {
                                    if (r == 'global') {
                                        var u = this['get']('data')['quizConfig'];
                                        var w = u['objectives'];
                                        for (var y = 0x0, A = w['length']; y < A; ++y) {
                                            B += s['getObjective'](w[y]['id'], n);
                                        }
                                    } else {
                                        B = s['getObjective'](r, n);
                                    }
                                } else {
                                    B = s['get'](n);
                                    if (n == TDV['Quiz']['PROPERTY']['PANORAMA_INDEX'])
                                        B += 0x1;
                                }
                                return B;
                            } catch (C) {
                                return undefined;
                            }
                        }
                    };
                }
            }
            break;
        }
        return function () {
            return '';
        };
    }
    function e() {
        var k = this['get']('data');
        k['updateText'](k['translateObjs'][a]);
    }
    function f(k) {
        var l = k['data']['nextSelectedIndex'];
        if (l >= 0x0) {
            var m = k['source']['get']('items')[l];
            var n = function () {
                m['unbind']('begin', n, this);
                e['call'](this);
            };
            m['bind']('begin', n, this);
        }
    }
    function g(k) {
        return function (l) {
            if (k in l) {
                e['call'](this);
            }
        }['bind'](this);
    }
    function h(k, l) {
        return function (m, n) {
            if (k == m && l in n) {
                e['call'](this);
            }
        }['bind'](this);
    }
    function i(k, l, m) {
        for (var n = 0x0; n < k['length']; ++n) {
            var o = k[n];
            var p = o['get']('selectedIndex');
            if (p >= 0x0) {
                var q = l['split']('.');
                var r = o['get']('items')[p];
                if (m !== undefined && !m['call'](this, r))
                    continue;
                for (var s = 0x0; s < q['length']; ++s) {
                    if (r == undefined)
                        return '';
                    r = 'get' in r ? r['get'](q[s]) : r[q[s]];
                }
                return r;
            }
        }
        return '';
    }
    function j(k, l) {
        var m = l['get']('player');
        return m !== undefined && m['get']('viewerArea') == k;
    }
}
var script = {"start":"this.init()","data":{"history":{},"locales":{"sv":"locale/sv.txt"},"textToSpeechConfig":{"speechOnQuizQuestion":false,"pitch":1,"stopBackgroundAudio":false,"speechOnInfoWindow":false,"speechOnTooltip":false,"volume":1,"rate":1},"name":"Player839","defaultLocale":"sv"},"scrollBarColor":"#000000","layout":"absolute","scrollBarMargin":2,"width":"100%","hash": "b576c636ad32e2623cfd80d299ac4941875d3f09af58094a9558499254477d6b", "definitions": [{"subtitlesTextShadowColor":"#000000","progressHeight":2,"playbackBarProgressBackgroundColorRatios":[0],"playbackBarBorderColor":"#FFFFFF","data":{"name":"Main Viewer"},"playbackBarBorderRadius":0,"playbackBarHeadBorderSize":0,"progressBackgroundColorRatios":[0],"playbackBarProgressBorderColor":"#000000","playbackBarHeadBackgroundColorRatios":[0,1],"playbackBarBackgroundOpacity":1,"toolTipPaddingTop":4,"progressRight":"33%","progressBorderSize":0,"playbackBarHeadShadow":true,"width":"100%","progressBarBorderRadius":2,"subtitlesBackgroundOpacity":0.2,"playbackBarHeadBorderRadius":0,"toolTipFontColor":"#606060","propagateClick":false,"progressBarBackgroundColorDirection":"horizontal","progressBarBorderColor":"#000000","subtitlesBottom":50,"progressBarBorderSize":0,"progressBarBackgroundColorRatios":[0],"subtitlesFontFamily":"Arial","toolTipShadowColor":"#333138","toolTipFontSize":"1.11vmin","playbackBarHeadBackgroundColor":["#111111","#666666"],"playbackBarHeadBorderColor":"#000000","subtitlesFontColor":"#FFFFFF","progressOpacity":0.7,"class":"ViewerArea","progressBorderColor":"#000000","toolTipTextShadowColor":"#000000","toolTipPaddingLeft":6,"progressBarBackgroundColor":["#3399FF"],"playbackBarBottom":5,"id":"MainViewer","playbackBarBorderSize":0,"playbackBarBackgroundColor":["#FFFFFF"],"subtitlesBorderColor":"#FFFFFF","playbackBarHeight":10,"firstTransitionDuration":0,"playbackBarHeadWidth":6,"subtitlesTextShadowOpacity":1,"subtitlesTextShadowVerticalLength":1,"surfaceReticleSelectionColor":"#FFFFFF","subtitlesTextShadowHorizontalLength":1,"vrPointerSelectionTime":2000,"toolTipBackgroundColor":"#F6F6F6","vrPointerSelectionColor":"#FF6600","progressBorderRadius":2,"playbackBarProgressBorderSize":0,"toolTipBorderColor":"#767676","playbackBarHeadShadowBlurRadius":3,"progressBackgroundColor":["#000000"],"surfaceReticleColor":"#FFFFFF","playbackBarBackgroundColorDirection":"vertical","playbackBarProgressBorderRadius":0,"playbackBarRight":0,"vrThumbstickRotationStep":20,"subtitlesGap":0,"playbackBarProgressBackgroundColor":["#3399FF"],"subtitlesFontSize":"3vmin","progressLeft":"33%","toolTipFontFamily":"Arial","vrPointerColor":"#FFFFFF","progressBottom":10,"subtitlesTop":0,"toolTipPaddingBottom":4,"toolTipPaddingRight":6,"height":"100%","playbackBarHeadShadowOpacity":0.7,"playbackBarLeft":0,"minHeight":50,"playbackBarHeadHeight":15,"minWidth":100,"subtitlesBackgroundColor":"#000000","playbackBarHeadShadowColor":"#000000"},{"items":[{"end":"this.trigger('tourEnded')","player":"this.MainViewerPhotoAlbumPlayer","class":"PhotoAlbumPlayListItem","media":"this.album_146C784E_00EC_CEFC_4163_663961354475"}],"class":"PlayList","id":"mainPlayList"},{"class":"PhotoAlbum","data":{"label":"Photo Album R10052"},"label":trans('album_146C784E_00EC_CEFC_4163_663961354475.label'),"id":"album_146C784E_00EC_CEFC_4163_663961354475","playList":"this.album_146C784E_00EC_CEFC_4163_663961354475_AlbumPlayList","thumbnailUrl":"media/album_146C784E_00EC_CEFC_4163_663961354475_t.png"},{"thumbnailUrl":"media/album_146C784E_00EC_CEFC_4163_663961354475_0_t.jpg","duration":5000,"label":trans('album_146C784E_00EC_CEFC_4163_663961354475_0.label'),"class":"Photo","data":{"label":"R10052"},"width":6720,"height":3360,"image":{"levels":[{"class":"ImageResourceLevel","url":"media/album_146C784E_00EC_CEFC_4163_663961354475_0.jpg"}],"class":"ImageResource"},"id":"album_146C784E_00EC_CEFC_4163_663961354475_0"},{"viewerArea":"this.MainViewer","class":"PhotoAlbumPlayer","id":"MainViewerPhotoAlbumPlayer"},{"items":[{"class":"PhotoPlayListItem","media":"this.album_146C784E_00EC_CEFC_4163_663961354475_0","camera":{"targetPosition":{"x":0.51,"class":"PhotoCameraPosition","y":0.65,"zoomFactor":1.1},"duration":5000,"scaleMode":"fit_outside","class":"MovementPhotoCamera","initialPosition":{"class":"PhotoCameraPosition"}}}],"class":"PhotoPlayList","id":"album_146C784E_00EC_CEFC_4163_663961354475_AlbumPlayList"}],"height":"100%","propagateClick":false,"defaultMenu":["fullscreen","mute","rotation"],"backgroundColorRatios":[0],"children":["this.MainViewer"],"backgroundColor":["#FFFFFF"],"class":"Player","minHeight":0,"id":"rootPlayer","minWidth":0,"gap":10,"scripts":{"showWindow":TDV.Tour.Script.showWindow,"updateDeepLink":TDV.Tour.Script.updateDeepLink,"getModel3DInnerObject":TDV.Tour.Script.getModel3DInnerObject,"setObjectsVisibilityByTags":TDV.Tour.Script.setObjectsVisibilityByTags,"toggleTextToSpeechComponent":TDV.Tour.Script.toggleTextToSpeechComponent,"getPlayListWithItem":TDV.Tour.Script.getPlayListWithItem,"startPanoramaWithCamera":TDV.Tour.Script.startPanoramaWithCamera,"copyObjRecursively":TDV.Tour.Script.copyObjRecursively,"cleanSelectedMeasurements":TDV.Tour.Script.cleanSelectedMeasurements,"triggerOverlay":TDV.Tour.Script.triggerOverlay,"setStartTimeVideo":TDV.Tour.Script.setStartTimeVideo,"getPlayListItems":TDV.Tour.Script.getPlayListItems,"setMeasurementUnits":TDV.Tour.Script.setMeasurementUnits,"quizFinish":TDV.Tour.Script.quizFinish,"autotriggerAtStart":TDV.Tour.Script.autotriggerAtStart,"playGlobalAudio":TDV.Tour.Script.playGlobalAudio,"pauseGlobalAudios":TDV.Tour.Script.pauseGlobalAudios,"htmlToPlainText":TDV.Tour.Script.htmlToPlainText,"setComponentVisibility":TDV.Tour.Script.setComponentVisibility,"enableVR":TDV.Tour.Script.enableVR,"setMainMediaByName":TDV.Tour.Script.setMainMediaByName,"mixObject":TDV.Tour.Script.mixObject,"setPanoramaCameraWithSpot":TDV.Tour.Script.setPanoramaCameraWithSpot,"updateVideoCues":TDV.Tour.Script.updateVideoCues,"setCameraSameSpotAsMedia":TDV.Tour.Script.setCameraSameSpotAsMedia,"_getPlayListsWithViewer":TDV.Tour.Script._getPlayListsWithViewer,"stopMeasurement":TDV.Tour.Script.stopMeasurement,"setValue":TDV.Tour.Script.setValue,"getFirstPlayListWithMedia":TDV.Tour.Script.getFirstPlayListWithMedia,"clone":TDV.Tour.Script.clone,"setOverlayBehaviour":TDV.Tour.Script.setOverlayBehaviour,"stopAndGoCamera":TDV.Tour.Script.stopAndGoCamera,"getPlayListItemByMedia":TDV.Tour.Script.getPlayListItemByMedia,"downloadFile":TDV.Tour.Script.downloadFile,"quizSetItemFound":TDV.Tour.Script.quizSetItemFound,"getComponentsByTags":TDV.Tour.Script.getComponentsByTags,"setEndToItemIndex":TDV.Tour.Script.setEndToItemIndex,"startPanoramaWithModel":TDV.Tour.Script.startPanoramaWithModel,"setMainMediaByIndex":TDV.Tour.Script.setMainMediaByIndex,"setModel3DCameraSequence":TDV.Tour.Script.setModel3DCameraSequence,"translate":TDV.Tour.Script.translate,"executeAudioActionByTags":TDV.Tour.Script.executeAudioActionByTags,"openEmbeddedPDF":TDV.Tour.Script.openEmbeddedPDF,"playGlobalAudioWhilePlayActiveMedia":TDV.Tour.Script.playGlobalAudioWhilePlayActiveMedia,"getActiveMediaWithViewer":TDV.Tour.Script.getActiveMediaWithViewer,"updateMediaLabelFromPlayList":TDV.Tour.Script.updateMediaLabelFromPlayList,"getAudioByTags":TDV.Tour.Script.getAudioByTags,"copyToClipboard":TDV.Tour.Script.copyToClipboard,"setDirectionalPanoramaAudio":TDV.Tour.Script.setDirectionalPanoramaAudio,"playGlobalAudioWhilePlay":TDV.Tour.Script.playGlobalAudioWhilePlay,"executeJS":TDV.Tour.Script.executeJS,"assignObjRecursively":TDV.Tour.Script.assignObjRecursively,"init":TDV.Tour.Script.init,"getMediaByTags":TDV.Tour.Script.getMediaByTags,"getStateTextToSpeech":TDV.Tour.Script.getStateTextToSpeech,"showPopupMedia":TDV.Tour.Script.showPopupMedia,"registerKey":TDV.Tour.Script.registerKey,"pauseGlobalAudio":TDV.Tour.Script.pauseGlobalAudio,"syncPlaylists":TDV.Tour.Script.syncPlaylists,"setStartTimeVideoSync":TDV.Tour.Script.setStartTimeVideoSync,"_initSplitViewer":TDV.Tour.Script._initSplitViewer,"getActivePlayersWithViewer":TDV.Tour.Script.getActivePlayersWithViewer,"visibleComponentsIfPlayerFlagEnabled":TDV.Tour.Script.visibleComponentsIfPlayerFlagEnabled,"sendAnalyticsData":TDV.Tour.Script.sendAnalyticsData,"setComponentsVisibilityByTags":TDV.Tour.Script.setComponentsVisibilityByTags,"getMediaByName":TDV.Tour.Script.getMediaByName,"setLocale":TDV.Tour.Script.setLocale,"setModel3DCameraSpot":TDV.Tour.Script.setModel3DCameraSpot,"getMediaFromPlayer":TDV.Tour.Script.getMediaFromPlayer,"setMapLocation":TDV.Tour.Script.setMapLocation,"takeScreenshot":TDV.Tour.Script.takeScreenshot,"changePlayListWithSameSpot":TDV.Tour.Script.changePlayListWithSameSpot,"showPopupPanoramaVideoOverlay":TDV.Tour.Script.showPopupPanoramaVideoOverlay,"executeAudioAction":TDV.Tour.Script.executeAudioAction,"setOverlaysVisibility":TDV.Tour.Script.setOverlaysVisibility,"keepCompVisible":TDV.Tour.Script.keepCompVisible,"setPanoramaCameraWithCurrentSpot":TDV.Tour.Script.setPanoramaCameraWithCurrentSpot,"getPlayListsWithMedia":TDV.Tour.Script.getPlayListsWithMedia,"initAnalytics":TDV.Tour.Script.initAnalytics,"_initItemWithComps":TDV.Tour.Script._initItemWithComps,"getMediaWidth":TDV.Tour.Script.getMediaWidth,"quizPauseTimer":TDV.Tour.Script.quizPauseTimer,"skip3DTransitionOnce":TDV.Tour.Script.skip3DTransitionOnce,"textToSpeech":TDV.Tour.Script.textToSpeech,"resumeGlobalAudios":TDV.Tour.Script.resumeGlobalAudios,"showPopupPanoramaOverlay":TDV.Tour.Script.showPopupPanoramaOverlay,"_initTTSTooltips":TDV.Tour.Script._initTTSTooltips,"getGlobalAudio":TDV.Tour.Script.getGlobalAudio,"toggleVR":TDV.Tour.Script.toggleVR,"getActivePlayerWithViewer":TDV.Tour.Script.getActivePlayerWithViewer,"existsKey":TDV.Tour.Script.existsKey,"getComponentByName":TDV.Tour.Script.getComponentByName,"stopGlobalAudios":TDV.Tour.Script.stopGlobalAudios,"quizResumeTimer":TDV.Tour.Script.quizResumeTimer,"changeBackgroundWhilePlay":TDV.Tour.Script.changeBackgroundWhilePlay,"shareSocial":TDV.Tour.Script.shareSocial,"setPlayListSelectedIndex":TDV.Tour.Script.setPlayListSelectedIndex,"toggleMeasurement":TDV.Tour.Script.toggleMeasurement,"getPanoramaOverlayByName":TDV.Tour.Script.getPanoramaOverlayByName,"historyGoBack":TDV.Tour.Script.historyGoBack,"unregisterKey":TDV.Tour.Script.unregisterKey,"_getObjectsByTags":TDV.Tour.Script._getObjectsByTags,"textToSpeechComponent":TDV.Tour.Script.textToSpeechComponent,"setOverlaysVisibilityByTags":TDV.Tour.Script.setOverlaysVisibilityByTags,"getPlayListItemIndexByMedia":TDV.Tour.Script.getPlayListItemIndexByMedia,"getCurrentPlayers":TDV.Tour.Script.getCurrentPlayers,"setSurfaceSelectionHotspotMode":TDV.Tour.Script.setSurfaceSelectionHotspotMode,"playAudioList":TDV.Tour.Script.playAudioList,"isCardboardViewMode":TDV.Tour.Script.isCardboardViewMode,"getMediaHeight":TDV.Tour.Script.getMediaHeight,"getPanoramaOverlaysByTags":TDV.Tour.Script.getPanoramaOverlaysByTags,"getOverlays":TDV.Tour.Script.getOverlays,"resumePlayers":TDV.Tour.Script.resumePlayers,"stopGlobalAudio":TDV.Tour.Script.stopGlobalAudio,"createTween":TDV.Tour.Script.createTween,"setObjectsVisibility":TDV.Tour.Script.setObjectsVisibility,"cloneBindings":TDV.Tour.Script.cloneBindings,"initQuiz":TDV.Tour.Script.initQuiz,"getMainViewer":TDV.Tour.Script.getMainViewer,"getRootOverlay":TDV.Tour.Script.getRootOverlay,"clonePanoramaCamera":TDV.Tour.Script.clonePanoramaCamera,"executeFunctionWhenChange":TDV.Tour.Script.executeFunctionWhenChange,"changeOpacityWhilePlay":TDV.Tour.Script.changeOpacityWhilePlay,"startModel3DWithCameraSpot":TDV.Tour.Script.startModel3DWithCameraSpot,"getOverlaysByTags":TDV.Tour.Script.getOverlaysByTags,"isPanorama":TDV.Tour.Script.isPanorama,"fixTogglePlayPauseButton":TDV.Tour.Script.fixTogglePlayPauseButton,"getQuizTotalObjectiveProperty":TDV.Tour.Script.getQuizTotalObjectiveProperty,"restartTourWithoutInteraction":TDV.Tour.Script.restartTourWithoutInteraction,"showPopupImage":TDV.Tour.Script.showPopupImage,"initOverlayGroupRotationOnClick":TDV.Tour.Script.initOverlayGroupRotationOnClick,"pauseGlobalAudiosWhilePlayItem":TDV.Tour.Script.pauseGlobalAudiosWhilePlayItem,"showComponentsWhileMouseOver":TDV.Tour.Script.showComponentsWhileMouseOver,"cleanAllMeasurements":TDV.Tour.Script.cleanAllMeasurements,"setMeasurementsVisibility":TDV.Tour.Script.setMeasurementsVisibility,"setMediaBehaviour":TDV.Tour.Script.setMediaBehaviour,"quizStart":TDV.Tour.Script.quizStart,"getOverlaysByGroupname":TDV.Tour.Script.getOverlaysByGroupname,"openLink":TDV.Tour.Script.openLink,"toggleMeasurementsVisibility":TDV.Tour.Script.toggleMeasurementsVisibility,"quizShowTimeout":TDV.Tour.Script.quizShowTimeout,"startMeasurement":TDV.Tour.Script.startMeasurement,"_initTwinsViewer":TDV.Tour.Script._initTwinsViewer,"getCurrentPlayerWithMedia":TDV.Tour.Script.getCurrentPlayerWithMedia,"disableVR":TDV.Tour.Script.disableVR,"loadFromCurrentMediaPlayList":TDV.Tour.Script.loadFromCurrentMediaPlayList,"stopTextToSpeech":TDV.Tour.Script.stopTextToSpeech,"historyGoForward":TDV.Tour.Script.historyGoForward,"getKey":TDV.Tour.Script.getKey,"quizShowScore":TDV.Tour.Script.quizShowScore,"setObjectsVisibilityByID":TDV.Tour.Script.setObjectsVisibilityByID,"quizShowQuestion":TDV.Tour.Script.quizShowQuestion,"getPixels":TDV.Tour.Script.getPixels,"pauseCurrentPlayers":TDV.Tour.Script.pauseCurrentPlayers}};
if (script['data'] == undefined)
    script['data'] = {};
script['data']['translateObjs'] = translateObjs;
script['data']['createQuizConfig'] = function () {
    var a = {};
    this['get']('data')['translateObjs'] = translateObjs;
    return a;
};
TDV['PlayerAPI']['defineScript'](script);
//# sourceMappingURL=script_device_v2024.0.3.js.map
})();
//Generated with v2024.0.3, Mon Jun 10 2024