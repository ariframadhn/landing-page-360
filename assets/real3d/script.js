(function(){
    var script = {
 "mouseWheelEnabled": true,
 "defaultVRPointer": "laser",
 "scrollBarOpacity": 0.5,
 "height": "100%",
 "id": "rootPlayer",
 "paddingLeft": 0,
 "scrollBarVisible": "rollOver",
 "paddingRight": 0,
 "start": "this.init()",
 "overflow": "visible",
 "width": "100%",
 "children": [
  "this.MainViewer",
  "this.veilPopupPanorama",
  "this.zoomImagePopupPanorama",
  "this.closeButtonPopupPanorama"
 ],
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "minHeight": 20,
 "layout": "absolute",
 "propagateClick": false,
 "scrollBarWidth": 10,
 "desktopMipmappingEnabled": false,
 "mobileMipmappingEnabled": false,
 "definitions": [{
 "thumbnailUrl": "media/video_4ACF9D29_441D_FC4D_41C1_B1689C6AB6F2_t.jpg",
 "scaleMode": "fit_inside",
 "width": 1912,
 "loop": false,
 "id": "video_4ACF9D29_441D_FC4D_41C1_B1689C6AB6F2",
 "label": "Area Agrotech Revisi 2",
 "class": "Video",
 "height": 1080,
 "video": {
  "width": 1912,
  "mp4Url": "media/video_4ACF9D29_441D_FC4D_41C1_B1689C6AB6F2.mp4",
  "class": "VideoResource",
  "height": 1080
 }
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_2B7EFF51_3F0D_842D_41C8_DB30063C8773_camera",
 "class": "PanoramaCamera"
},
{
 "autoplay": true,
 "rotationX": 0,
 "yaw": 90.82,
 "rotationZ": 0,
 "rotationY": 0,
 "showEasing": "cubic_in",
 "hideDuration": 500,
 "showDuration": 500,
 "id": "popup_4B48564E_441C_CCC7_41CB_A06191C25D02",
 "popupDistance": 100,
 "popupMaxHeight": "95%",
 "loop": false,
 "popupMaxWidth": "95%",
 "pitch": 19.23,
 "hideEasing": "cubic_out",
 "hfov": 11.59,
 "class": "PopupPanoramaOverlay",
 "video": {
  "width": 1912,
  "mp4Url": "media/video_4ACF9D29_441D_FC4D_41C1_B1689C6AB6F2.mp4",
  "class": "VideoResource",
  "height": 1080
 }
},
{
 "touchControlMode": "drag_rotation",
 "displayPlaybackBar": true,
 "viewerArea": "this.MainViewer",
 "gyroscopeVerticalDraggingEnabled": true,
 "id": "MainViewerPanoramaPlayer",
 "class": "PanoramaPlayer",
 "mouseControlMode": "drag_acceleration"
},
{
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2B2F1C70_3F0B_84EB_4178_787A635D8E70_0/f/0/{row}_{column}.jpg",
      "colCount": 10,
      "rowCount": 10,
      "width": 5120,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 5120
     },
     {
      "url": "media/panorama_2B2F1C70_3F0B_84EB_4178_787A635D8E70_0/f/1/{row}_{column}.jpg",
      "colCount": 5,
      "rowCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_2B2F1C70_3F0B_84EB_4178_787A635D8E70_0/f/2/{row}_{column}.jpg",
      "colCount": 3,
      "rowCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_2B2F1C70_3F0B_84EB_4178_787A635D8E70_0/f/3/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_2B2F1C70_3F0B_84EB_4178_787A635D8E70_0/f/4/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2B2F1C70_3F0B_84EB_4178_787A635D8E70_0/l/0/{row}_{column}.jpg",
      "colCount": 10,
      "rowCount": 10,
      "width": 5120,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 5120
     },
     {
      "url": "media/panorama_2B2F1C70_3F0B_84EB_4178_787A635D8E70_0/l/1/{row}_{column}.jpg",
      "colCount": 5,
      "rowCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_2B2F1C70_3F0B_84EB_4178_787A635D8E70_0/l/2/{row}_{column}.jpg",
      "colCount": 3,
      "rowCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_2B2F1C70_3F0B_84EB_4178_787A635D8E70_0/l/3/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_2B2F1C70_3F0B_84EB_4178_787A635D8E70_0/l/4/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2B2F1C70_3F0B_84EB_4178_787A635D8E70_0/u/0/{row}_{column}.jpg",
      "colCount": 10,
      "rowCount": 10,
      "width": 5120,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 5120
     },
     {
      "url": "media/panorama_2B2F1C70_3F0B_84EB_4178_787A635D8E70_0/u/1/{row}_{column}.jpg",
      "colCount": 5,
      "rowCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_2B2F1C70_3F0B_84EB_4178_787A635D8E70_0/u/2/{row}_{column}.jpg",
      "colCount": 3,
      "rowCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_2B2F1C70_3F0B_84EB_4178_787A635D8E70_0/u/3/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_2B2F1C70_3F0B_84EB_4178_787A635D8E70_0/u/4/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2B2F1C70_3F0B_84EB_4178_787A635D8E70_0/r/0/{row}_{column}.jpg",
      "colCount": 10,
      "rowCount": 10,
      "width": 5120,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 5120
     },
     {
      "url": "media/panorama_2B2F1C70_3F0B_84EB_4178_787A635D8E70_0/r/1/{row}_{column}.jpg",
      "colCount": 5,
      "rowCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_2B2F1C70_3F0B_84EB_4178_787A635D8E70_0/r/2/{row}_{column}.jpg",
      "colCount": 3,
      "rowCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_2B2F1C70_3F0B_84EB_4178_787A635D8E70_0/r/3/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_2B2F1C70_3F0B_84EB_4178_787A635D8E70_0/r/4/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2B2F1C70_3F0B_84EB_4178_787A635D8E70_0/b/0/{row}_{column}.jpg",
      "colCount": 10,
      "rowCount": 10,
      "width": 5120,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 5120
     },
     {
      "url": "media/panorama_2B2F1C70_3F0B_84EB_4178_787A635D8E70_0/b/1/{row}_{column}.jpg",
      "colCount": 5,
      "rowCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_2B2F1C70_3F0B_84EB_4178_787A635D8E70_0/b/2/{row}_{column}.jpg",
      "colCount": 3,
      "rowCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_2B2F1C70_3F0B_84EB_4178_787A635D8E70_0/b/3/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_2B2F1C70_3F0B_84EB_4178_787A635D8E70_0/b/4/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_2B2F1C70_3F0B_84EB_4178_787A635D8E70_t.jpg",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2B2F1C70_3F0B_84EB_4178_787A635D8E70_0/d/0/{row}_{column}.jpg",
      "colCount": 10,
      "rowCount": 10,
      "width": 5120,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 5120
     },
     {
      "url": "media/panorama_2B2F1C70_3F0B_84EB_4178_787A635D8E70_0/d/1/{row}_{column}.jpg",
      "colCount": 5,
      "rowCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_2B2F1C70_3F0B_84EB_4178_787A635D8E70_0/d/2/{row}_{column}.jpg",
      "colCount": 3,
      "rowCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_2B2F1C70_3F0B_84EB_4178_787A635D8E70_0/d/3/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_2B2F1C70_3F0B_84EB_4178_787A635D8E70_0/d/4/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_2C86E8C1_3F0A_8C2D_41C8_AEE2EC672315",
  "this.overlay_4DC3CB7D_40BC_4B92_41C5_DB449B78DEF2",
  "this.overlay_4F9314DB_40BC_DE95_41C3_1C7F16887142",
  "this.overlay_4AC8EAFD_4403_45C4_41C5_A4926318ADFA",
  "this.overlay_4B3430C6_4403_45C7_41C6_30B3594222DE",
  "this.overlay_4B325D5A_4403_5CCF_41A6_568DFDEF1760",
  "this.popup_4B48564E_441C_CCC7_41CB_A06191C25D02",
  "this.popup_4BA27DD5_441D_5FC4_41A2_51DBF78C329D"
 ],
 "thumbnailUrl": "media/panorama_2B2F1C70_3F0B_84EB_4178_787A635D8E70_t.jpg",
 "id": "panorama_2B2F1C70_3F0B_84EB_4178_787A635D8E70",
 "label": "dji_mimo_20260518_142736_0_1779111167220_photo",
 "hfovMax": 130,
 "adjacentPanoramas": [
  {
   "yaw": 2.66,
   "class": "AdjacentPanorama",
   "backwardYaw": 13.27,
   "panorama": "this.panorama_2B7EFF51_3F0D_842D_41C8_DB30063C8773",
   "distance": 1
  },
  {
   "yaw": 171.41,
   "class": "AdjacentPanorama",
   "backwardYaw": 159.75,
   "panorama": "this.panorama_2C1DAC6A_3F0A_84FF_41AE_1AF2A5794BA7",
   "distance": 1
  }
 ],
 "hfov": 360,
 "class": "Panorama",
 "pitch": 0,
 "partial": false
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_2C9F3FF5_3F07_83D5_41C5_F20BBAC6A7AF_camera",
 "class": "PanoramaCamera"
},
{
 "autoplay": true,
 "rotationX": 0,
 "yaw": -97.36,
 "rotationZ": 0,
 "rotationY": 0,
 "showEasing": "cubic_in",
 "hideDuration": 500,
 "showDuration": 500,
 "id": "popup_55A76C05_4405_3C45_4186_3ACF2B33DF5E",
 "popupDistance": 100,
 "popupMaxHeight": "95%",
 "loop": false,
 "popupMaxWidth": "95%",
 "pitch": -6.55,
 "hideEasing": "cubic_out",
 "hfov": 12.19,
 "class": "PopupPanoramaOverlay",
 "video": {
  "width": 1912,
  "mp4Url": "media/video_4ACF9D29_441D_FC4D_41C1_B1689C6AB6F2.mp4",
  "class": "VideoResource",
  "height": 1080
 }
},
{
 "autoplay": true,
 "rotationX": 0,
 "yaw": -99.82,
 "rotationZ": 0,
 "rotationY": 0,
 "showEasing": "cubic_in",
 "hideDuration": 500,
 "showDuration": 500,
 "id": "popup_51EC793B_440F_444D_41C0_036185B2EAE6",
 "popupDistance": 100,
 "popupMaxHeight": "95%",
 "loop": false,
 "popupMaxWidth": "95%",
 "pitch": -6.55,
 "hideEasing": "cubic_out",
 "hfov": 12.19,
 "class": "PopupPanoramaOverlay",
 "video": {
  "width": 1440,
  "mp4Url": "media/video_5149DD40_440F_3C3B_4193_8EFF54BC27F0.mp4",
  "class": "VideoResource",
  "height": 1080
 }
},
{
 "items": [
  {
   "media": "this.video_4ACF9D29_441D_FC4D_41C1_B1689C6AB6F2",
   "start": "this.viewer_uid4983C519_4573_3476_41C6_8103303FA3C7VideoPlayer.set('displayPlaybackBar', true); this.changeBackgroundWhilePlay(this.PlayList_486BD52B_4573_34AA_41C9_680A4C2A2459, 0, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.PlayList_486BD52B_4573_34AA_41C9_680A4C2A2459, 0)",
   "begin": "this.fixTogglePlayPauseButton(this.viewer_uid4983C519_4573_3476_41C6_8103303FA3C7VideoPlayer)",
   "player": "this.viewer_uid4983C519_4573_3476_41C6_8103303FA3C7VideoPlayer",
   "class": "VideoPlayListItem"
  }
 ],
 "id": "PlayList_486BD52B_4573_34AA_41C9_680A4C2A2459",
 "class": "PlayList"
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_2B2F1C70_3F0B_84EB_4178_787A635D8E70_camera",
 "class": "PanoramaCamera"
},
{
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2B7EFF51_3F0D_842D_41C8_DB30063C8773_0/f/0/{row}_{column}.jpg",
      "colCount": 10,
      "rowCount": 10,
      "width": 5120,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 5120
     },
     {
      "url": "media/panorama_2B7EFF51_3F0D_842D_41C8_DB30063C8773_0/f/1/{row}_{column}.jpg",
      "colCount": 5,
      "rowCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_2B7EFF51_3F0D_842D_41C8_DB30063C8773_0/f/2/{row}_{column}.jpg",
      "colCount": 3,
      "rowCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_2B7EFF51_3F0D_842D_41C8_DB30063C8773_0/f/3/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_2B7EFF51_3F0D_842D_41C8_DB30063C8773_0/f/4/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2B7EFF51_3F0D_842D_41C8_DB30063C8773_0/l/0/{row}_{column}.jpg",
      "colCount": 10,
      "rowCount": 10,
      "width": 5120,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 5120
     },
     {
      "url": "media/panorama_2B7EFF51_3F0D_842D_41C8_DB30063C8773_0/l/1/{row}_{column}.jpg",
      "colCount": 5,
      "rowCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_2B7EFF51_3F0D_842D_41C8_DB30063C8773_0/l/2/{row}_{column}.jpg",
      "colCount": 3,
      "rowCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_2B7EFF51_3F0D_842D_41C8_DB30063C8773_0/l/3/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_2B7EFF51_3F0D_842D_41C8_DB30063C8773_0/l/4/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2B7EFF51_3F0D_842D_41C8_DB30063C8773_0/u/0/{row}_{column}.jpg",
      "colCount": 10,
      "rowCount": 10,
      "width": 5120,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 5120
     },
     {
      "url": "media/panorama_2B7EFF51_3F0D_842D_41C8_DB30063C8773_0/u/1/{row}_{column}.jpg",
      "colCount": 5,
      "rowCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_2B7EFF51_3F0D_842D_41C8_DB30063C8773_0/u/2/{row}_{column}.jpg",
      "colCount": 3,
      "rowCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_2B7EFF51_3F0D_842D_41C8_DB30063C8773_0/u/3/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_2B7EFF51_3F0D_842D_41C8_DB30063C8773_0/u/4/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2B7EFF51_3F0D_842D_41C8_DB30063C8773_0/r/0/{row}_{column}.jpg",
      "colCount": 10,
      "rowCount": 10,
      "width": 5120,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 5120
     },
     {
      "url": "media/panorama_2B7EFF51_3F0D_842D_41C8_DB30063C8773_0/r/1/{row}_{column}.jpg",
      "colCount": 5,
      "rowCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_2B7EFF51_3F0D_842D_41C8_DB30063C8773_0/r/2/{row}_{column}.jpg",
      "colCount": 3,
      "rowCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_2B7EFF51_3F0D_842D_41C8_DB30063C8773_0/r/3/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_2B7EFF51_3F0D_842D_41C8_DB30063C8773_0/r/4/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2B7EFF51_3F0D_842D_41C8_DB30063C8773_0/b/0/{row}_{column}.jpg",
      "colCount": 10,
      "rowCount": 10,
      "width": 5120,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 5120
     },
     {
      "url": "media/panorama_2B7EFF51_3F0D_842D_41C8_DB30063C8773_0/b/1/{row}_{column}.jpg",
      "colCount": 5,
      "rowCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_2B7EFF51_3F0D_842D_41C8_DB30063C8773_0/b/2/{row}_{column}.jpg",
      "colCount": 3,
      "rowCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_2B7EFF51_3F0D_842D_41C8_DB30063C8773_0/b/3/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_2B7EFF51_3F0D_842D_41C8_DB30063C8773_0/b/4/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_2B7EFF51_3F0D_842D_41C8_DB30063C8773_t.jpg",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2B7EFF51_3F0D_842D_41C8_DB30063C8773_0/d/0/{row}_{column}.jpg",
      "colCount": 10,
      "rowCount": 10,
      "width": 5120,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 5120
     },
     {
      "url": "media/panorama_2B7EFF51_3F0D_842D_41C8_DB30063C8773_0/d/1/{row}_{column}.jpg",
      "colCount": 5,
      "rowCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_2B7EFF51_3F0D_842D_41C8_DB30063C8773_0/d/2/{row}_{column}.jpg",
      "colCount": 3,
      "rowCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_2B7EFF51_3F0D_842D_41C8_DB30063C8773_0/d/3/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_2B7EFF51_3F0D_842D_41C8_DB30063C8773_0/d/4/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_2B281A3C_3F3D_8C5B_41C2_07969B5FEB28",
  "this.overlay_2BDB1119_3F3A_9C5D_41C3_01035C961DF1",
  "this.overlay_2DC9BE45_3F0D_8435_41C5_1CE2CA6E3D9E",
  "this.overlay_2BC3D020_3F06_9C6B_41AC_F19E3FA86BD4",
  "this.popup_51F47C35_40FC_4D92_41B5_4D90B22EF048",
  "this.overlay_513787D5_4403_CBC4_41BA_FC892C2FA476"
 ],
 "thumbnailUrl": "media/panorama_2B7EFF51_3F0D_842D_41C8_DB30063C8773_t.jpg",
 "id": "panorama_2B7EFF51_3F0D_842D_41C8_DB30063C8773",
 "label": "dji_mimo_20260518_135826_0_1779110892366_photo",
 "hfovMax": 130,
 "adjacentPanoramas": [
  {
   "yaw": -173.55,
   "class": "AdjacentPanorama",
   "backwardYaw": -91.27,
   "panorama": "this.panorama_3340DE24_3EFF_846B_41BA_156D465E8DB5",
   "distance": 1
  },
  {
   "yaw": 13.27,
   "class": "AdjacentPanorama",
   "backwardYaw": 59.52,
   "panorama": "this.panorama_2DC7EF70_3F0B_84EB_41A3_4012598CD21E",
   "distance": 1
  },
  {
   "yaw": 13.27,
   "class": "AdjacentPanorama",
   "backwardYaw": 2.66,
   "panorama": "this.panorama_2B2F1C70_3F0B_84EB_4178_787A635D8E70",
   "distance": 1
  },
  {
   "yaw": -3.91,
   "class": "AdjacentPanorama",
   "backwardYaw": 2.66,
   "panorama": "this.panorama_2B2F1C70_3F0B_84EB_4178_787A635D8E70",
   "distance": 1
  },
  {
   "yaw": -3.91,
   "class": "AdjacentPanorama",
   "backwardYaw": 2.66,
   "panorama": "this.panorama_2B2F1C70_3F0B_84EB_4178_787A635D8E70",
   "distance": 1
  }
 ],
 "hfov": 360,
 "class": "Panorama",
 "pitch": 0,
 "partial": false
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_2DC7EF70_3F0B_84EB_41A3_4012598CD21E_camera",
 "class": "PanoramaCamera"
},
{
 "items": [
  {
   "media": "this.video_3027A6BE_3F06_8457_41A8_2EE14E1FB410",
   "start": "this.viewer_uid49978512_4573_347A_41B0_99B31C16E52AVideoPlayer.set('displayPlaybackBar', true); this.changeBackgroundWhilePlay(this.PlayList_4875652A_4573_34AA_41C4_0FBE561BE0D8, 0, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.PlayList_4875652A_4573_34AA_41C4_0FBE561BE0D8, 0)",
   "begin": "this.fixTogglePlayPauseButton(this.viewer_uid49978512_4573_347A_41B0_99B31C16E52AVideoPlayer)",
   "player": "this.viewer_uid49978512_4573_347A_41B0_99B31C16E52AVideoPlayer",
   "class": "VideoPlayListItem"
  }
 ],
 "id": "PlayList_4875652A_4573_34AA_41C4_0FBE561BE0D8",
 "class": "PlayList"
},
{
 "items": [
  {
   "media": "this.video_504B2783_40FC_DB76_41AB_2D70A7DB53BE",
   "start": "this.viewer_uid4988B516_4573_347A_4182_78F73455D21BVideoPlayer.set('displayPlaybackBar', true); this.changeBackgroundWhilePlay(this.PlayList_4875152B_4573_34AA_419A_84149DD16C06, 0, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.PlayList_4875152B_4573_34AA_419A_84149DD16C06, 0)",
   "begin": "this.fixTogglePlayPauseButton(this.viewer_uid4988B516_4573_347A_4182_78F73455D21BVideoPlayer)",
   "player": "this.viewer_uid4988B516_4573_347A_4182_78F73455D21BVideoPlayer",
   "class": "VideoPlayListItem"
  }
 ],
 "id": "PlayList_4875152B_4573_34AA_419A_84149DD16C06",
 "class": "PlayList"
},
{
 "autoplay": true,
 "rotationX": 0,
 "yaw": -114.89,
 "rotationZ": 0,
 "rotationY": 0,
 "showEasing": "cubic_in",
 "hideDuration": 500,
 "showDuration": 500,
 "id": "popup_522E74AB_40CC_7EB6_41C7_9D8A4B213011",
 "popupDistance": 100,
 "popupMaxHeight": "95%",
 "loop": false,
 "popupMaxWidth": "95%",
 "pitch": 3.16,
 "hideEasing": "cubic_out",
 "hfov": 12.27,
 "class": "PopupPanoramaOverlay",
 "video": {
  "width": 1440,
  "mp4Url": "media/video_52B7FE5D_40CC_4D92_4171_5EBCA969B8AB.mp4",
  "class": "VideoResource",
  "height": 1080
 }
},
{
 "closeButtonBorderColor": "#000000",
 "id": "window_4F0EF6C3_4573_F5DA_41CA_CBE5304C5F8A",
 "backgroundOpacity": 1,
 "paddingLeft": 0,
 "closeButtonBackgroundColorDirection": "vertical",
 "closeButtonIconHeight": 20,
 "overflow": "scroll",
 "scrollBarMargin": 2,
 "footerBackgroundColorDirection": "vertical",
 "closeButtonRollOverBackgroundColor": [
  "#DDDDDD",
  "#EEEEEE",
  "#FFFFFF"
 ],
 "titlePaddingRight": 5,
 "titlePaddingTop": 5,
 "closeButtonRollOverIconLineWidth": 5,
 "minHeight": 20,
 "modal": true,
 "propagateClick": false,
 "shadowHorizontalLength": 3,
 "scrollBarWidth": 10,
 "closeButtonPressedBackgroundColorRatios": [
  0,
  0.1,
  1
 ],
 "verticalAlign": "middle",
 "footerBackgroundColor": [
  "#FFFFFF",
  "#EEEEEE",
  "#DDDDDD"
 ],
 "showEffect": {
  "duration": 500,
  "class": "FadeInEffect",
  "easing": "cubic_in_out"
 },
 "closeButtonRollOverBorderSize": 0,
 "shadowVerticalLength": 0,
 "minWidth": 20,
 "closeButtonRollOverBorderColor": "#000000",
 "footerBackgroundColorRatios": [
  0,
  0.9,
  1
 ],
 "titlePaddingBottom": 5,
 "bodyBackgroundOpacity": 0,
 "backgroundColor": [],
 "borderSize": 0,
 "closeButtonPressedBackgroundOpacity": 0.3,
 "headerPaddingRight": 0,
 "bodyBackgroundColor": [
  "#FFFFFF",
  "#DDDDDD",
  "#FFFFFF"
 ],
 "headerPaddingLeft": 10,
 "bodyPaddingLeft": 0,
 "class": "Window",
 "backgroundColorDirection": "vertical",
 "footerHeight": 5,
 "contentOpaque": false,
 "shadow": true,
 "headerBackgroundOpacity": 0,
 "scrollBarColor": "#000000",
 "closeButtonPressedIconLineWidth": 5,
 "veilShowEffect": {
  "duration": 500,
  "class": "FadeInEffect",
  "easing": "cubic_in_out"
 },
 "headerBackgroundColor": [
  "#DDDDDD",
  "#EEEEEE",
  "#FFFFFF"
 ],
 "closeButtonPaddingRight": 5,
 "shadowBlurRadius": 6,
 "bodyBackgroundColorRatios": [
  0,
  0.5,
  1
 ],
 "closeButtonBackgroundColorRatios": [
  0,
  0.1,
  1
 ],
 "scrollBarOpacity": 0.5,
 "closeButtonIconLineWidth": 5,
 "closeButtonPaddingLeft": 5,
 "bodyPaddingTop": 0,
 "veilColor": [
  "#000000",
  "#000000"
 ],
 "closeButtonBorderRadius": 0,
 "children": [
  "this.viewer_uid4987F51B_4573_346A_41B5_F436A3AF50B1"
 ],
 "scrollBarVisible": "rollOver",
 "paddingRight": 0,
 "shadowOpacity": 0.5,
 "shadowColor": "#000000",
 "borderRadius": 5,
 "veilColorRatios": [
  0,
  1
 ],
 "closeButtonRollOverIconColor": "#666666",
 "bodyBackgroundColorDirection": "vertical",
 "headerPaddingTop": 10,
 "titleFontSize": "1.29vmin",
 "backgroundColorRatios": [],
 "closeButtonBorderSize": 0,
 "closeButtonPaddingBottom": 5,
 "veilHideEffect": {
  "duration": 500,
  "class": "FadeOutEffect",
  "easing": "cubic_in_out"
 },
 "headerBackgroundColorRatios": [
  0,
  0.1,
  1
 ],
 "headerPaddingBottom": 5,
 "closeButtonPressedBorderColor": "#000000",
 "footerBackgroundOpacity": 0,
 "closeButtonPressedBackgroundColorDirection": "vertical",
 "hideEffect": {
  "duration": 500,
  "class": "FadeOutEffect",
  "easing": "cubic_in_out"
 },
 "closeButtonPressedIconColor": "#888888",
 "closeButtonIconWidth": 20,
 "veilOpacity": 0.4,
 "closeButtonRollOverBackgroundOpacity": 0.3,
 "closeButtonPressedBackgroundColor": [
  "#DDDDDD",
  "#EEEEEE",
  "#FFFFFF"
 ],
 "gap": 10,
 "closeButtonRollOverBackgroundColorRatios": [
  0,
  0.1,
  1
 ],
 "closeButtonBackgroundOpacity": 0.3,
 "layout": "vertical",
 "titlePaddingLeft": 5,
 "paddingTop": 0,
 "closeButtonPaddingTop": 5,
 "closeButtonIconColor": "#000000",
 "bodyPaddingBottom": 0,
 "paddingBottom": 0,
 "headerVerticalAlign": "middle",
 "closeButtonRollOverBackgroundColorDirection": "vertical",
 "bodyPaddingRight": 0,
 "horizontalAlign": "center",
 "closeButtonPressedBorderSize": 0,
 "headerBackgroundColorDirection": "vertical",
 "data": {
  "name": "Window355"
 },
 "shadowSpread": 1,
 "closeButtonBackgroundColor": [
  "#DDDDDD",
  "#EEEEEE",
  "#FFFFFF"
 ],
 "titleFontFamily": "Arial"
},
{
 "playList": "this.album_3352DF70_3EFD_84EB_41C0_4B97F6ADD645_AlbumPlayList",
 "thumbnailUrl": "media/album_3352DF70_3EFD_84EB_41C0_4B97F6ADD645_t.png",
 "id": "album_3352DF70_3EFD_84EB_41C0_4B97F6ADD645",
 "label": "Photo Album rusun depan",
 "class": "PhotoAlbum"
},
{
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_3340DE24_3EFF_846B_41BA_156D465E8DB5_0/f/0/{row}_{column}.jpg",
      "colCount": 10,
      "rowCount": 10,
      "width": 5120,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 5120
     },
     {
      "url": "media/panorama_3340DE24_3EFF_846B_41BA_156D465E8DB5_0/f/1/{row}_{column}.jpg",
      "colCount": 5,
      "rowCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_3340DE24_3EFF_846B_41BA_156D465E8DB5_0/f/2/{row}_{column}.jpg",
      "colCount": 3,
      "rowCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_3340DE24_3EFF_846B_41BA_156D465E8DB5_0/f/3/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_3340DE24_3EFF_846B_41BA_156D465E8DB5_0/f/4/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_3340DE24_3EFF_846B_41BA_156D465E8DB5_0/l/0/{row}_{column}.jpg",
      "colCount": 10,
      "rowCount": 10,
      "width": 5120,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 5120
     },
     {
      "url": "media/panorama_3340DE24_3EFF_846B_41BA_156D465E8DB5_0/l/1/{row}_{column}.jpg",
      "colCount": 5,
      "rowCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_3340DE24_3EFF_846B_41BA_156D465E8DB5_0/l/2/{row}_{column}.jpg",
      "colCount": 3,
      "rowCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_3340DE24_3EFF_846B_41BA_156D465E8DB5_0/l/3/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_3340DE24_3EFF_846B_41BA_156D465E8DB5_0/l/4/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_3340DE24_3EFF_846B_41BA_156D465E8DB5_0/u/0/{row}_{column}.jpg",
      "colCount": 10,
      "rowCount": 10,
      "width": 5120,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 5120
     },
     {
      "url": "media/panorama_3340DE24_3EFF_846B_41BA_156D465E8DB5_0/u/1/{row}_{column}.jpg",
      "colCount": 5,
      "rowCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_3340DE24_3EFF_846B_41BA_156D465E8DB5_0/u/2/{row}_{column}.jpg",
      "colCount": 3,
      "rowCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_3340DE24_3EFF_846B_41BA_156D465E8DB5_0/u/3/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_3340DE24_3EFF_846B_41BA_156D465E8DB5_0/u/4/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_3340DE24_3EFF_846B_41BA_156D465E8DB5_0/r/0/{row}_{column}.jpg",
      "colCount": 10,
      "rowCount": 10,
      "width": 5120,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 5120
     },
     {
      "url": "media/panorama_3340DE24_3EFF_846B_41BA_156D465E8DB5_0/r/1/{row}_{column}.jpg",
      "colCount": 5,
      "rowCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_3340DE24_3EFF_846B_41BA_156D465E8DB5_0/r/2/{row}_{column}.jpg",
      "colCount": 3,
      "rowCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_3340DE24_3EFF_846B_41BA_156D465E8DB5_0/r/3/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_3340DE24_3EFF_846B_41BA_156D465E8DB5_0/r/4/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_3340DE24_3EFF_846B_41BA_156D465E8DB5_0/b/0/{row}_{column}.jpg",
      "colCount": 10,
      "rowCount": 10,
      "width": 5120,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 5120
     },
     {
      "url": "media/panorama_3340DE24_3EFF_846B_41BA_156D465E8DB5_0/b/1/{row}_{column}.jpg",
      "colCount": 5,
      "rowCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_3340DE24_3EFF_846B_41BA_156D465E8DB5_0/b/2/{row}_{column}.jpg",
      "colCount": 3,
      "rowCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_3340DE24_3EFF_846B_41BA_156D465E8DB5_0/b/3/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_3340DE24_3EFF_846B_41BA_156D465E8DB5_0/b/4/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_3340DE24_3EFF_846B_41BA_156D465E8DB5_t.jpg",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_3340DE24_3EFF_846B_41BA_156D465E8DB5_0/d/0/{row}_{column}.jpg",
      "colCount": 10,
      "rowCount": 10,
      "width": 5120,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 5120
     },
     {
      "url": "media/panorama_3340DE24_3EFF_846B_41BA_156D465E8DB5_0/d/1/{row}_{column}.jpg",
      "colCount": 5,
      "rowCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_3340DE24_3EFF_846B_41BA_156D465E8DB5_0/d/2/{row}_{column}.jpg",
      "colCount": 3,
      "rowCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_3340DE24_3EFF_846B_41BA_156D465E8DB5_0/d/3/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_3340DE24_3EFF_846B_41BA_156D465E8DB5_0/d/4/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_3195BB7B_3EFB_8CDC_41C6_30DBE6BA549E",
  "this.overlay_2B1BFEC9_3F3A_843C_41C8_4BC739212BC8"
 ],
 "thumbnailUrl": "media/panorama_3340DE24_3EFF_846B_41BA_156D465E8DB5_t.jpg",
 "id": "panorama_3340DE24_3EFF_846B_41BA_156D465E8DB5",
 "label": "rusun depan",
 "hfovMax": 130,
 "adjacentPanoramas": [
  {
   "yaw": -91.27,
   "class": "AdjacentPanorama",
   "backwardYaw": -173.55,
   "panorama": "this.panorama_2B7EFF51_3F0D_842D_41C8_DB30063C8773",
   "distance": 1
  },
  {
   "yaw": 21.48,
   "class": "AdjacentPanorama",
   "backwardYaw": 8.39,
   "panorama": "this.panorama_34984BC9_3EFB_8C3D_41AC_376559BB2588",
   "distance": 1
  }
 ],
 "hfov": 360,
 "class": "Panorama",
 "pitch": 0,
 "partial": false
},
{
 "initialPosition": {
  "yaw": -160.16,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "id": "camera_481655AF_4573_37A9_41A4_A0A191AD905E",
 "class": "PanoramaCamera"
},
{
 "initialPosition": {
  "yaw": -170.39,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "id": "camera_4B4EC68E_4573_346A_41CC_C2B501C0112B",
 "class": "PanoramaCamera"
},
{
 "thumbnailUrl": "media/video_504B2783_40FC_DB76_41AB_2D70A7DB53BE_t.jpg",
 "scaleMode": "fit_inside",
 "width": 1440,
 "loop": false,
 "id": "video_504B2783_40FC_DB76_41AB_2D70A7DB53BE",
 "label": "Area utilitas DONE",
 "class": "Video",
 "height": 1080,
 "video": {
  "width": 1440,
  "mp4Url": "media/video_504B2783_40FC_DB76_41AB_2D70A7DB53BE.mp4",
  "class": "VideoResource",
  "height": 1080
 }
},
{
 "thumbnailUrl": "media/video_4AD6C297_4405_4444_41C6_DD45A2A49850_t.jpg",
 "scaleMode": "fit_inside",
 "width": 1440,
 "loop": false,
 "id": "video_4AD6C297_4405_4444_41C6_DD45A2A49850",
 "label": "AREA PETERNAKAN DONE",
 "class": "Video",
 "height": 1080,
 "video": {
  "width": 1440,
  "mp4Url": "media/video_4AD6C297_4405_4444_41C6_DD45A2A49850.mp4",
  "class": "VideoResource",
  "height": 1080
 }
},
{
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2DC7EF70_3F0B_84EB_41A3_4012598CD21E_0/f/0/{row}_{column}.jpg",
      "colCount": 10,
      "rowCount": 10,
      "width": 5120,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 5120
     },
     {
      "url": "media/panorama_2DC7EF70_3F0B_84EB_41A3_4012598CD21E_0/f/1/{row}_{column}.jpg",
      "colCount": 5,
      "rowCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_2DC7EF70_3F0B_84EB_41A3_4012598CD21E_0/f/2/{row}_{column}.jpg",
      "colCount": 3,
      "rowCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_2DC7EF70_3F0B_84EB_41A3_4012598CD21E_0/f/3/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_2DC7EF70_3F0B_84EB_41A3_4012598CD21E_0/f/4/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2DC7EF70_3F0B_84EB_41A3_4012598CD21E_0/l/0/{row}_{column}.jpg",
      "colCount": 10,
      "rowCount": 10,
      "width": 5120,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 5120
     },
     {
      "url": "media/panorama_2DC7EF70_3F0B_84EB_41A3_4012598CD21E_0/l/1/{row}_{column}.jpg",
      "colCount": 5,
      "rowCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_2DC7EF70_3F0B_84EB_41A3_4012598CD21E_0/l/2/{row}_{column}.jpg",
      "colCount": 3,
      "rowCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_2DC7EF70_3F0B_84EB_41A3_4012598CD21E_0/l/3/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_2DC7EF70_3F0B_84EB_41A3_4012598CD21E_0/l/4/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2DC7EF70_3F0B_84EB_41A3_4012598CD21E_0/u/0/{row}_{column}.jpg",
      "colCount": 10,
      "rowCount": 10,
      "width": 5120,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 5120
     },
     {
      "url": "media/panorama_2DC7EF70_3F0B_84EB_41A3_4012598CD21E_0/u/1/{row}_{column}.jpg",
      "colCount": 5,
      "rowCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_2DC7EF70_3F0B_84EB_41A3_4012598CD21E_0/u/2/{row}_{column}.jpg",
      "colCount": 3,
      "rowCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_2DC7EF70_3F0B_84EB_41A3_4012598CD21E_0/u/3/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_2DC7EF70_3F0B_84EB_41A3_4012598CD21E_0/u/4/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2DC7EF70_3F0B_84EB_41A3_4012598CD21E_0/r/0/{row}_{column}.jpg",
      "colCount": 10,
      "rowCount": 10,
      "width": 5120,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 5120
     },
     {
      "url": "media/panorama_2DC7EF70_3F0B_84EB_41A3_4012598CD21E_0/r/1/{row}_{column}.jpg",
      "colCount": 5,
      "rowCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_2DC7EF70_3F0B_84EB_41A3_4012598CD21E_0/r/2/{row}_{column}.jpg",
      "colCount": 3,
      "rowCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_2DC7EF70_3F0B_84EB_41A3_4012598CD21E_0/r/3/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_2DC7EF70_3F0B_84EB_41A3_4012598CD21E_0/r/4/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2DC7EF70_3F0B_84EB_41A3_4012598CD21E_0/b/0/{row}_{column}.jpg",
      "colCount": 10,
      "rowCount": 10,
      "width": 5120,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 5120
     },
     {
      "url": "media/panorama_2DC7EF70_3F0B_84EB_41A3_4012598CD21E_0/b/1/{row}_{column}.jpg",
      "colCount": 5,
      "rowCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_2DC7EF70_3F0B_84EB_41A3_4012598CD21E_0/b/2/{row}_{column}.jpg",
      "colCount": 3,
      "rowCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_2DC7EF70_3F0B_84EB_41A3_4012598CD21E_0/b/3/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_2DC7EF70_3F0B_84EB_41A3_4012598CD21E_0/b/4/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_2DC7EF70_3F0B_84EB_41A3_4012598CD21E_t.jpg",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2DC7EF70_3F0B_84EB_41A3_4012598CD21E_0/d/0/{row}_{column}.jpg",
      "colCount": 10,
      "rowCount": 10,
      "width": 5120,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 5120
     },
     {
      "url": "media/panorama_2DC7EF70_3F0B_84EB_41A3_4012598CD21E_0/d/1/{row}_{column}.jpg",
      "colCount": 5,
      "rowCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_2DC7EF70_3F0B_84EB_41A3_4012598CD21E_0/d/2/{row}_{column}.jpg",
      "colCount": 3,
      "rowCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_2DC7EF70_3F0B_84EB_41A3_4012598CD21E_0/d/3/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_2DC7EF70_3F0B_84EB_41A3_4012598CD21E_0/d/4/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_2C8B9600_3F3E_842B_41BE_C75276D95568",
  "this.overlay_5151E6E4_40C5_DAB2_41B8_E9708213DB6C",
  "this.overlay_51E68D56_40C4_CF9E_41B8_08FA2C6B609A",
  "this.overlay_5152F122_40CC_57B7_41C4_C3B5AB37F53F",
  "this.overlay_52D9E8AE_40CC_368E_41B7_BF1BF63CADB0",
  "this.popup_522E74AB_40CC_7EB6_41C7_9D8A4B213011",
  "this.overlay_5339C8F3_40C4_7696_41A7_6A178017DE30",
  "this.overlay_54B2660F_40C4_3D8E_41B8_E0CFA60EA625",
  "this.popup_54D0CC9B_40C4_4E95_41CE_9753E60BD865",
  "this.overlay_527AECB2_440D_DC5F_4172_8244D62FC402"
 ],
 "thumbnailUrl": "media/panorama_2DC7EF70_3F0B_84EB_41A3_4012598CD21E_t.jpg",
 "id": "panorama_2DC7EF70_3F0B_84EB_41A3_4012598CD21E",
 "label": "dji_mimo_20260518_141406_0_1779110946745_photo",
 "hfovMax": 130,
 "adjacentPanoramas": [
  {
   "yaw": 118.43,
   "class": "AdjacentPanorama",
   "backwardYaw": 9.61,
   "panorama": "this.panorama_2C3FE972_3F3A_8CEF_41A7_2E37A55F58A4",
   "distance": 1
  },
  {
   "yaw": -47.02,
   "class": "AdjacentPanorama",
   "backwardYaw": -164.23,
   "panorama": "this.panorama_34984BC9_3EFB_8C3D_41AC_376559BB2588",
   "distance": 1
  },
  {
   "yaw": 59.52,
   "class": "AdjacentPanorama",
   "backwardYaw": 13.27,
   "panorama": "this.panorama_2B7EFF51_3F0D_842D_41C8_DB30063C8773",
   "distance": 1
  },
  {
   "yaw": -174.68,
   "class": "AdjacentPanorama",
   "backwardYaw": 164.25,
   "panorama": "this.panorama_2C9F3FF5_3F07_83D5_41C5_F20BBAC6A7AF",
   "distance": 1
  }
 ],
 "hfov": 360,
 "class": "Panorama",
 "pitch": 0,
 "partial": false
},
{
 "items": [
  {
   "media": "this.video_4ACF9D29_441D_FC4D_41C1_B1689C6AB6F2",
   "start": "this.viewer_uid49832519_4573_3476_41B3_D32E3FCA7841VideoPlayer.set('displayPlaybackBar', true); this.changeBackgroundWhilePlay(this.PlayList_486B552B_4573_34A9_41CD_451F1DCBCE66, 0, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.PlayList_486B552B_4573_34A9_41CD_451F1DCBCE66, 0)",
   "begin": "this.fixTogglePlayPauseButton(this.viewer_uid49832519_4573_3476_41B3_D32E3FCA7841VideoPlayer)",
   "player": "this.viewer_uid49832519_4573_3476_41B3_D32E3FCA7841VideoPlayer",
   "class": "VideoPlayListItem"
  }
 ],
 "id": "PlayList_486B552B_4573_34A9_41CD_451F1DCBCE66",
 "class": "PlayList"
},
{
 "items": [
  {
   "media": "this.video_3027A6BE_3F06_8457_41A8_2EE14E1FB410",
   "start": "this.viewer_uid498D8518_4573_3476_41C9_998EB1187E59VideoPlayer.set('displayPlaybackBar', true); this.changeBackgroundWhilePlay(this.PlayList_4874352B_4573_34AA_41BC_9E873D84E4AB, 0, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.PlayList_4874352B_4573_34AA_41BC_9E873D84E4AB, 0)",
   "begin": "this.fixTogglePlayPauseButton(this.viewer_uid498D8518_4573_3476_41C9_998EB1187E59VideoPlayer)",
   "player": "this.viewer_uid498D8518_4573_3476_41C9_998EB1187E59VideoPlayer",
   "class": "VideoPlayListItem"
  }
 ],
 "id": "PlayList_4874352B_4573_34AA_41BC_9E873D84E4AB",
 "class": "PlayList"
},
{
 "autoplay": true,
 "rotationX": 0,
 "yaw": 71.59,
 "rotationZ": 0,
 "rotationY": 0,
 "showEasing": "cubic_in",
 "hideDuration": 500,
 "showDuration": 500,
 "id": "popup_5563E91D_4405_C445_419B_1241E88A1AC9",
 "popupDistance": 100,
 "popupMaxHeight": "95%",
 "loop": false,
 "popupMaxWidth": "95%",
 "pitch": -9,
 "hideEasing": "cubic_out",
 "hfov": 12.12,
 "class": "PopupPanoramaOverlay",
 "video": {
  "width": 1440,
  "mp4Url": "media/video_560760E6_4405_45C7_419D_023103D778D7.mp4",
  "class": "VideoResource",
  "height": 1080
 }
},
{
 "initialPosition": {
  "yaw": -33.34,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "id": "camera_48345585_4573_345E_41C3_68BD15DC02A6",
 "class": "PanoramaCamera"
},
{
 "thumbnailUrl": "media/video_3027A6BE_3F06_8457_41A8_2EE14E1FB410_t.jpg",
 "scaleMode": "fit_inside",
 "width": 1912,
 "loop": false,
 "id": "video_3027A6BE_3F06_8457_41A8_2EE14E1FB410",
 "label": "Area Sport centre dan rusun",
 "class": "Video",
 "height": 1080,
 "video": {
  "width": 1912,
  "mp4Url": "media/video_3027A6BE_3F06_8457_41A8_2EE14E1FB410.mp4",
  "class": "VideoResource",
  "height": 1080
 }
},
{
 "initialPosition": {
  "yaw": -166.73,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "id": "camera_48939646_4573_34DA_41C0_368E09AD696A",
 "class": "PanoramaCamera"
},
{
 "autoplay": true,
 "rotationX": 0,
 "yaw": -106.77,
 "rotationZ": 0,
 "rotationY": 0,
 "showEasing": "cubic_in",
 "hideDuration": 500,
 "showDuration": 500,
 "id": "popup_4BA27DD5_441D_5FC4_41A2_51DBF78C329D",
 "popupDistance": 100,
 "popupMaxHeight": "95%",
 "loop": false,
 "popupMaxWidth": "95%",
 "pitch": 12.68,
 "hideEasing": "cubic_out",
 "hfov": 11.97,
 "class": "PopupPanoramaOverlay",
 "video": {
  "width": 1912,
  "mp4Url": "media/video_4ACF9D29_441D_FC4D_41C1_B1689C6AB6F2.mp4",
  "class": "VideoResource",
  "height": 1080
 }
},
{
 "items": [
  {
   "media": "this.video_4ACF9D29_441D_FC4D_41C1_B1689C6AB6F2",
   "start": "this.viewer_uid4981151B_4573_346A_41C3_AADBFC6E6295VideoPlayer.set('displayPlaybackBar', true); this.changeBackgroundWhilePlay(this.PlayList_486A952C_4573_34AE_41C3_28AAFF1A0897, 0, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.PlayList_486A952C_4573_34AE_41C3_28AAFF1A0897, 0)",
   "begin": "this.fixTogglePlayPauseButton(this.viewer_uid4981151B_4573_346A_41C3_AADBFC6E6295VideoPlayer)",
   "player": "this.viewer_uid4981151B_4573_346A_41C3_AADBFC6E6295VideoPlayer",
   "class": "VideoPlayListItem"
  }
 ],
 "id": "PlayList_486A952C_4573_34AE_41C3_28AAFF1A0897",
 "class": "PlayList"
},
{
 "closeButtonBorderColor": "#000000",
 "id": "window_4F0546B7_4573_F5BA_41D0_D95D81E247C0",
 "backgroundOpacity": 1,
 "paddingLeft": 0,
 "closeButtonBackgroundColorDirection": "vertical",
 "closeButtonIconHeight": 20,
 "overflow": "scroll",
 "scrollBarMargin": 2,
 "footerBackgroundColorDirection": "vertical",
 "closeButtonRollOverBackgroundColor": [
  "#DDDDDD",
  "#EEEEEE",
  "#FFFFFF"
 ],
 "titlePaddingRight": 5,
 "titlePaddingTop": 5,
 "closeButtonRollOverIconLineWidth": 5,
 "minHeight": 20,
 "modal": true,
 "propagateClick": false,
 "shadowHorizontalLength": 3,
 "scrollBarWidth": 10,
 "closeButtonPressedBackgroundColorRatios": [
  0,
  0.1,
  1
 ],
 "verticalAlign": "middle",
 "footerBackgroundColor": [
  "#FFFFFF",
  "#EEEEEE",
  "#DDDDDD"
 ],
 "showEffect": {
  "duration": 500,
  "class": "FadeInEffect",
  "easing": "cubic_in_out"
 },
 "closeButtonRollOverBorderSize": 0,
 "shadowVerticalLength": 0,
 "minWidth": 20,
 "closeButtonRollOverBorderColor": "#000000",
 "footerBackgroundColorRatios": [
  0,
  0.9,
  1
 ],
 "titlePaddingBottom": 5,
 "bodyBackgroundOpacity": 0,
 "backgroundColor": [],
 "borderSize": 0,
 "closeButtonPressedBackgroundOpacity": 0.3,
 "headerPaddingRight": 0,
 "bodyBackgroundColor": [
  "#FFFFFF",
  "#DDDDDD",
  "#FFFFFF"
 ],
 "headerPaddingLeft": 10,
 "bodyPaddingLeft": 0,
 "class": "Window",
 "backgroundColorDirection": "vertical",
 "footerHeight": 5,
 "contentOpaque": false,
 "shadow": true,
 "headerBackgroundOpacity": 0,
 "scrollBarColor": "#000000",
 "closeButtonPressedIconLineWidth": 5,
 "veilShowEffect": {
  "duration": 500,
  "class": "FadeInEffect",
  "easing": "cubic_in_out"
 },
 "headerBackgroundColor": [
  "#DDDDDD",
  "#EEEEEE",
  "#FFFFFF"
 ],
 "closeButtonPaddingRight": 5,
 "shadowBlurRadius": 6,
 "bodyBackgroundColorRatios": [
  0,
  0.5,
  1
 ],
 "closeButtonBackgroundColorRatios": [
  0,
  0.1,
  1
 ],
 "scrollBarOpacity": 0.5,
 "closeButtonIconLineWidth": 5,
 "closeButtonPaddingLeft": 5,
 "bodyPaddingTop": 0,
 "veilColor": [
  "#000000",
  "#000000"
 ],
 "closeButtonBorderRadius": 0,
 "children": [
  "this.viewer_uid4988B516_4573_347A_4182_78F73455D21B"
 ],
 "scrollBarVisible": "rollOver",
 "paddingRight": 0,
 "shadowOpacity": 0.5,
 "shadowColor": "#000000",
 "borderRadius": 5,
 "veilColorRatios": [
  0,
  1
 ],
 "closeButtonRollOverIconColor": "#666666",
 "bodyBackgroundColorDirection": "vertical",
 "headerPaddingTop": 10,
 "titleFontSize": "1.29vmin",
 "backgroundColorRatios": [],
 "closeButtonBorderSize": 0,
 "closeButtonPaddingBottom": 5,
 "veilHideEffect": {
  "duration": 500,
  "class": "FadeOutEffect",
  "easing": "cubic_in_out"
 },
 "headerBackgroundColorRatios": [
  0,
  0.1,
  1
 ],
 "headerPaddingBottom": 5,
 "closeButtonPressedBorderColor": "#000000",
 "footerBackgroundOpacity": 0,
 "closeButtonPressedBackgroundColorDirection": "vertical",
 "hideEffect": {
  "duration": 500,
  "class": "FadeOutEffect",
  "easing": "cubic_in_out"
 },
 "closeButtonPressedIconColor": "#888888",
 "closeButtonIconWidth": 20,
 "veilOpacity": 0.4,
 "closeButtonRollOverBackgroundOpacity": 0.3,
 "closeButtonPressedBackgroundColor": [
  "#DDDDDD",
  "#EEEEEE",
  "#FFFFFF"
 ],
 "gap": 10,
 "closeButtonRollOverBackgroundColorRatios": [
  0,
  0.1,
  1
 ],
 "closeButtonBackgroundOpacity": 0.3,
 "layout": "vertical",
 "titlePaddingLeft": 5,
 "paddingTop": 0,
 "closeButtonPaddingTop": 5,
 "closeButtonIconColor": "#000000",
 "bodyPaddingBottom": 0,
 "paddingBottom": 0,
 "headerVerticalAlign": "middle",
 "closeButtonRollOverBackgroundColorDirection": "vertical",
 "bodyPaddingRight": 0,
 "horizontalAlign": "center",
 "closeButtonPressedBorderSize": 0,
 "headerBackgroundColorDirection": "vertical",
 "data": {
  "name": "Window348"
 },
 "shadowSpread": 1,
 "closeButtonBackgroundColor": [
  "#DDDDDD",
  "#EEEEEE",
  "#FFFFFF"
 ],
 "titleFontFamily": "Arial"
},
{
 "initialPosition": {
  "yaw": -158.52,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "id": "camera_48F7E5E0_4573_37D7_41BD_ADF61CB4B3F6",
 "class": "PanoramaCamera"
},
{
 "thumbnailUrl": "media/video_4ABD37E6_440F_4BC7_41CC_AC3E80E529F7_t.jpg",
 "scaleMode": "fit_inside",
 "width": 1440,
 "loop": false,
 "id": "video_4ABD37E6_440F_4BC7_41CC_AC3E80E529F7",
 "label": "Area Camping Ground DONE",
 "class": "Video",
 "height": 1080,
 "video": {
  "width": 1440,
  "mp4Url": "media/video_4ABD37E6_440F_4BC7_41CC_AC3E80E529F7.mp4",
  "class": "VideoResource",
  "height": 1080
 }
},
{
 "autoplay": true,
 "rotationX": 0,
 "yaw": -90.82,
 "rotationZ": 0,
 "rotationY": 0,
 "showEasing": "cubic_in",
 "hideDuration": 500,
 "showDuration": 500,
 "id": "popup_4BAA126C_4404_C4CB_41D0_100E9E44371A",
 "popupDistance": 100,
 "popupMaxHeight": "95%",
 "loop": false,
 "popupMaxWidth": "95%",
 "pitch": -4.5,
 "hideEasing": "cubic_out",
 "hfov": 12.23,
 "class": "PopupPanoramaOverlay",
 "video": {
  "width": 1440,
  "mp4Url": "media/video_4AD6C297_4405_4444_41C6_DD45A2A49850.mp4",
  "class": "VideoResource",
  "height": 1080
 }
},
{
 "initialPosition": {
  "yaw": -177.34,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "id": "camera_48A3A638_4573_34B6_41C1_860C035A29FE",
 "class": "PanoramaCamera"
},
{
 "closeButtonBorderColor": "#000000",
 "id": "window_4F0426B8_4573_F5B6_41C6_DA52AF0EDC53",
 "backgroundOpacity": 1,
 "paddingLeft": 0,
 "closeButtonBackgroundColorDirection": "vertical",
 "closeButtonIconHeight": 20,
 "overflow": "scroll",
 "scrollBarMargin": 2,
 "footerBackgroundColorDirection": "vertical",
 "closeButtonRollOverBackgroundColor": [
  "#DDDDDD",
  "#EEEEEE",
  "#FFFFFF"
 ],
 "titlePaddingRight": 5,
 "titlePaddingTop": 5,
 "closeButtonRollOverIconLineWidth": 5,
 "minHeight": 20,
 "modal": true,
 "propagateClick": false,
 "shadowHorizontalLength": 3,
 "scrollBarWidth": 10,
 "closeButtonPressedBackgroundColorRatios": [
  0,
  0.1,
  1
 ],
 "verticalAlign": "middle",
 "footerBackgroundColor": [
  "#FFFFFF",
  "#EEEEEE",
  "#DDDDDD"
 ],
 "showEffect": {
  "duration": 500,
  "class": "FadeInEffect",
  "easing": "cubic_in_out"
 },
 "closeButtonRollOverBorderSize": 0,
 "shadowVerticalLength": 0,
 "minWidth": 20,
 "closeButtonRollOverBorderColor": "#000000",
 "footerBackgroundColorRatios": [
  0,
  0.9,
  1
 ],
 "titlePaddingBottom": 5,
 "bodyBackgroundOpacity": 0,
 "backgroundColor": [],
 "borderSize": 0,
 "closeButtonPressedBackgroundOpacity": 0.3,
 "headerPaddingRight": 0,
 "bodyBackgroundColor": [
  "#FFFFFF",
  "#DDDDDD",
  "#FFFFFF"
 ],
 "headerPaddingLeft": 10,
 "bodyPaddingLeft": 0,
 "class": "Window",
 "backgroundColorDirection": "vertical",
 "footerHeight": 5,
 "contentOpaque": false,
 "shadow": true,
 "headerBackgroundOpacity": 0,
 "scrollBarColor": "#000000",
 "closeButtonPressedIconLineWidth": 5,
 "veilShowEffect": {
  "duration": 500,
  "class": "FadeInEffect",
  "easing": "cubic_in_out"
 },
 "headerBackgroundColor": [
  "#DDDDDD",
  "#EEEEEE",
  "#FFFFFF"
 ],
 "closeButtonPaddingRight": 5,
 "shadowBlurRadius": 6,
 "bodyBackgroundColorRatios": [
  0,
  0.5,
  1
 ],
 "closeButtonBackgroundColorRatios": [
  0,
  0.1,
  1
 ],
 "scrollBarOpacity": 0.5,
 "closeButtonIconLineWidth": 5,
 "closeButtonPaddingLeft": 5,
 "bodyPaddingTop": 0,
 "veilColor": [
  "#000000",
  "#000000"
 ],
 "closeButtonBorderRadius": 0,
 "children": [
  "this.viewer_uid498E6517_4573_347A_41C0_DD4ABB550B6C"
 ],
 "scrollBarVisible": "rollOver",
 "paddingRight": 0,
 "shadowOpacity": 0.5,
 "shadowColor": "#000000",
 "borderRadius": 5,
 "veilColorRatios": [
  0,
  1
 ],
 "closeButtonRollOverIconColor": "#666666",
 "bodyBackgroundColorDirection": "vertical",
 "headerPaddingTop": 10,
 "titleFontSize": "1.29vmin",
 "backgroundColorRatios": [],
 "closeButtonBorderSize": 0,
 "closeButtonPaddingBottom": 5,
 "veilHideEffect": {
  "duration": 500,
  "class": "FadeOutEffect",
  "easing": "cubic_in_out"
 },
 "headerBackgroundColorRatios": [
  0,
  0.1,
  1
 ],
 "headerPaddingBottom": 5,
 "closeButtonPressedBorderColor": "#000000",
 "footerBackgroundOpacity": 0,
 "closeButtonPressedBackgroundColorDirection": "vertical",
 "hideEffect": {
  "duration": 500,
  "class": "FadeOutEffect",
  "easing": "cubic_in_out"
 },
 "closeButtonPressedIconColor": "#888888",
 "closeButtonIconWidth": 20,
 "veilOpacity": 0.4,
 "closeButtonRollOverBackgroundOpacity": 0.3,
 "closeButtonPressedBackgroundColor": [
  "#DDDDDD",
  "#EEEEEE",
  "#FFFFFF"
 ],
 "gap": 10,
 "closeButtonRollOverBackgroundColorRatios": [
  0,
  0.1,
  1
 ],
 "closeButtonBackgroundOpacity": 0.3,
 "layout": "vertical",
 "titlePaddingLeft": 5,
 "paddingTop": 0,
 "closeButtonPaddingTop": 5,
 "closeButtonIconColor": "#000000",
 "bodyPaddingBottom": 0,
 "paddingBottom": 0,
 "headerVerticalAlign": "middle",
 "closeButtonRollOverBackgroundColorDirection": "vertical",
 "bodyPaddingRight": 0,
 "horizontalAlign": "center",
 "closeButtonPressedBorderSize": 0,
 "headerBackgroundColorDirection": "vertical",
 "data": {
  "name": "Window349"
 },
 "shadowSpread": 1,
 "closeButtonBackgroundColor": [
  "#DDDDDD",
  "#EEEEEE",
  "#FFFFFF"
 ],
 "titleFontFamily": "Arial"
},
{
 "initialPosition": {
  "yaw": 5.32,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "id": "camera_4B0976C8_4573_35D6_41BF_1C98F2934624",
 "class": "PanoramaCamera"
},
{
 "thumbnailUrl": "media/video_5149DD40_440F_3C3B_4193_8EFF54BC27F0_t.jpg",
 "scaleMode": "fit_inside",
 "width": 1440,
 "loop": false,
 "id": "video_5149DD40_440F_3C3B_4193_8EFF54BC27F0",
 "label": "AREA PLAZA UTAMA",
 "class": "Video",
 "height": 1080,
 "video": {
  "width": 1440,
  "mp4Url": "media/video_5149DD40_440F_3C3B_4193_8EFF54BC27F0.mp4",
  "class": "VideoResource",
  "height": 1080
 }
},
{
 "closeButtonBorderColor": "#000000",
 "id": "window_4F0FF6C2_4573_F5DA_41CC_3A26182E9796",
 "backgroundOpacity": 1,
 "paddingLeft": 0,
 "closeButtonBackgroundColorDirection": "vertical",
 "closeButtonIconHeight": 20,
 "overflow": "scroll",
 "scrollBarMargin": 2,
 "footerBackgroundColorDirection": "vertical",
 "closeButtonRollOverBackgroundColor": [
  "#DDDDDD",
  "#EEEEEE",
  "#FFFFFF"
 ],
 "titlePaddingRight": 5,
 "titlePaddingTop": 5,
 "closeButtonRollOverIconLineWidth": 5,
 "minHeight": 20,
 "modal": true,
 "propagateClick": false,
 "shadowHorizontalLength": 3,
 "scrollBarWidth": 10,
 "closeButtonPressedBackgroundColorRatios": [
  0,
  0.1,
  1
 ],
 "verticalAlign": "middle",
 "footerBackgroundColor": [
  "#FFFFFF",
  "#EEEEEE",
  "#DDDDDD"
 ],
 "showEffect": {
  "duration": 500,
  "class": "FadeInEffect",
  "easing": "cubic_in_out"
 },
 "closeButtonRollOverBorderSize": 0,
 "shadowVerticalLength": 0,
 "minWidth": 20,
 "closeButtonRollOverBorderColor": "#000000",
 "footerBackgroundColorRatios": [
  0,
  0.9,
  1
 ],
 "titlePaddingBottom": 5,
 "bodyBackgroundOpacity": 0,
 "backgroundColor": [],
 "borderSize": 0,
 "closeButtonPressedBackgroundOpacity": 0.3,
 "headerPaddingRight": 0,
 "bodyBackgroundColor": [
  "#FFFFFF",
  "#DDDDDD",
  "#FFFFFF"
 ],
 "headerPaddingLeft": 10,
 "bodyPaddingLeft": 0,
 "class": "Window",
 "backgroundColorDirection": "vertical",
 "footerHeight": 5,
 "contentOpaque": false,
 "shadow": true,
 "headerBackgroundOpacity": 0,
 "scrollBarColor": "#000000",
 "closeButtonPressedIconLineWidth": 5,
 "veilShowEffect": {
  "duration": 500,
  "class": "FadeInEffect",
  "easing": "cubic_in_out"
 },
 "headerBackgroundColor": [
  "#DDDDDD",
  "#EEEEEE",
  "#FFFFFF"
 ],
 "closeButtonPaddingRight": 5,
 "shadowBlurRadius": 6,
 "bodyBackgroundColorRatios": [
  0,
  0.5,
  1
 ],
 "closeButtonBackgroundColorRatios": [
  0,
  0.1,
  1
 ],
 "scrollBarOpacity": 0.5,
 "closeButtonIconLineWidth": 5,
 "closeButtonPaddingLeft": 5,
 "bodyPaddingTop": 0,
 "veilColor": [
  "#000000",
  "#000000"
 ],
 "closeButtonBorderRadius": 0,
 "children": [
  "this.viewer_uid4981151B_4573_346A_41C3_AADBFC6E6295"
 ],
 "scrollBarVisible": "rollOver",
 "paddingRight": 0,
 "shadowOpacity": 0.5,
 "shadowColor": "#000000",
 "borderRadius": 5,
 "veilColorRatios": [
  0,
  1
 ],
 "closeButtonRollOverIconColor": "#666666",
 "bodyBackgroundColorDirection": "vertical",
 "headerPaddingTop": 10,
 "titleFontSize": "1.29vmin",
 "backgroundColorRatios": [],
 "closeButtonBorderSize": 0,
 "closeButtonPaddingBottom": 5,
 "veilHideEffect": {
  "duration": 500,
  "class": "FadeOutEffect",
  "easing": "cubic_in_out"
 },
 "headerBackgroundColorRatios": [
  0,
  0.1,
  1
 ],
 "headerPaddingBottom": 5,
 "closeButtonPressedBorderColor": "#000000",
 "footerBackgroundOpacity": 0,
 "closeButtonPressedBackgroundColorDirection": "vertical",
 "hideEffect": {
  "duration": 500,
  "class": "FadeOutEffect",
  "easing": "cubic_in_out"
 },
 "closeButtonPressedIconColor": "#888888",
 "closeButtonIconWidth": 20,
 "veilOpacity": 0.4,
 "closeButtonRollOverBackgroundOpacity": 0.3,
 "closeButtonPressedBackgroundColor": [
  "#DDDDDD",
  "#EEEEEE",
  "#FFFFFF"
 ],
 "gap": 10,
 "closeButtonRollOverBackgroundColorRatios": [
  0,
  0.1,
  1
 ],
 "closeButtonBackgroundOpacity": 0.3,
 "layout": "vertical",
 "titlePaddingLeft": 5,
 "paddingTop": 0,
 "closeButtonPaddingTop": 5,
 "closeButtonIconColor": "#000000",
 "bodyPaddingBottom": 0,
 "paddingBottom": 0,
 "headerVerticalAlign": "middle",
 "closeButtonRollOverBackgroundColorDirection": "vertical",
 "bodyPaddingRight": 0,
 "horizontalAlign": "center",
 "closeButtonPressedBorderSize": 0,
 "headerBackgroundColorDirection": "vertical",
 "data": {
  "name": "Window354"
 },
 "shadowSpread": 1,
 "closeButtonBackgroundColor": [
  "#DDDDDD",
  "#EEEEEE",
  "#FFFFFF"
 ],
 "titleFontFamily": "Arial"
},
{
 "closeButtonBorderColor": "#000000",
 "id": "window_4F0D96C5_4573_F5DE_41C6_40F51972E19A",
 "backgroundOpacity": 1,
 "paddingLeft": 0,
 "closeButtonBackgroundColorDirection": "vertical",
 "closeButtonIconHeight": 20,
 "overflow": "scroll",
 "scrollBarMargin": 2,
 "footerBackgroundColorDirection": "vertical",
 "closeButtonRollOverBackgroundColor": [
  "#DDDDDD",
  "#EEEEEE",
  "#FFFFFF"
 ],
 "titlePaddingRight": 5,
 "titlePaddingTop": 5,
 "closeButtonRollOverIconLineWidth": 5,
 "minHeight": 20,
 "modal": true,
 "propagateClick": false,
 "shadowHorizontalLength": 3,
 "scrollBarWidth": 10,
 "closeButtonPressedBackgroundColorRatios": [
  0,
  0.1,
  1
 ],
 "verticalAlign": "middle",
 "footerBackgroundColor": [
  "#FFFFFF",
  "#EEEEEE",
  "#DDDDDD"
 ],
 "showEffect": {
  "duration": 500,
  "class": "FadeInEffect",
  "easing": "cubic_in_out"
 },
 "closeButtonRollOverBorderSize": 0,
 "shadowVerticalLength": 0,
 "minWidth": 20,
 "closeButtonRollOverBorderColor": "#000000",
 "footerBackgroundColorRatios": [
  0,
  0.9,
  1
 ],
 "titlePaddingBottom": 5,
 "bodyBackgroundOpacity": 0,
 "backgroundColor": [],
 "borderSize": 0,
 "closeButtonPressedBackgroundOpacity": 0.3,
 "headerPaddingRight": 0,
 "bodyBackgroundColor": [
  "#FFFFFF",
  "#DDDDDD",
  "#FFFFFF"
 ],
 "headerPaddingLeft": 10,
 "bodyPaddingLeft": 0,
 "class": "Window",
 "backgroundColorDirection": "vertical",
 "footerHeight": 5,
 "contentOpaque": false,
 "shadow": true,
 "headerBackgroundOpacity": 0,
 "scrollBarColor": "#000000",
 "closeButtonPressedIconLineWidth": 5,
 "veilShowEffect": {
  "duration": 500,
  "class": "FadeInEffect",
  "easing": "cubic_in_out"
 },
 "headerBackgroundColor": [
  "#DDDDDD",
  "#EEEEEE",
  "#FFFFFF"
 ],
 "closeButtonPaddingRight": 5,
 "shadowBlurRadius": 6,
 "bodyBackgroundColorRatios": [
  0,
  0.5,
  1
 ],
 "closeButtonBackgroundColorRatios": [
  0,
  0.1,
  1
 ],
 "scrollBarOpacity": 0.5,
 "closeButtonIconLineWidth": 5,
 "closeButtonPaddingLeft": 5,
 "bodyPaddingTop": 0,
 "veilColor": [
  "#000000",
  "#000000"
 ],
 "closeButtonBorderRadius": 0,
 "children": [
  "this.viewer_uid4985151D_4573_346E_41B6_4BC605F6F87D"
 ],
 "scrollBarVisible": "rollOver",
 "paddingRight": 0,
 "shadowOpacity": 0.5,
 "shadowColor": "#000000",
 "borderRadius": 5,
 "veilColorRatios": [
  0,
  1
 ],
 "closeButtonRollOverIconColor": "#666666",
 "bodyBackgroundColorDirection": "vertical",
 "headerPaddingTop": 10,
 "titleFontSize": "1.29vmin",
 "backgroundColorRatios": [],
 "closeButtonBorderSize": 0,
 "closeButtonPaddingBottom": 5,
 "veilHideEffect": {
  "duration": 500,
  "class": "FadeOutEffect",
  "easing": "cubic_in_out"
 },
 "headerBackgroundColorRatios": [
  0,
  0.1,
  1
 ],
 "headerPaddingBottom": 5,
 "closeButtonPressedBorderColor": "#000000",
 "footerBackgroundOpacity": 0,
 "closeButtonPressedBackgroundColorDirection": "vertical",
 "hideEffect": {
  "duration": 500,
  "class": "FadeOutEffect",
  "easing": "cubic_in_out"
 },
 "closeButtonPressedIconColor": "#888888",
 "closeButtonIconWidth": 20,
 "veilOpacity": 0.4,
 "closeButtonRollOverBackgroundOpacity": 0.3,
 "closeButtonPressedBackgroundColor": [
  "#DDDDDD",
  "#EEEEEE",
  "#FFFFFF"
 ],
 "gap": 10,
 "closeButtonRollOverBackgroundColorRatios": [
  0,
  0.1,
  1
 ],
 "closeButtonBackgroundOpacity": 0.3,
 "layout": "vertical",
 "titlePaddingLeft": 5,
 "paddingTop": 0,
 "closeButtonPaddingTop": 5,
 "closeButtonIconColor": "#000000",
 "bodyPaddingBottom": 0,
 "paddingBottom": 0,
 "headerVerticalAlign": "middle",
 "closeButtonRollOverBackgroundColorDirection": "vertical",
 "bodyPaddingRight": 0,
 "horizontalAlign": "center",
 "closeButtonPressedBorderSize": 0,
 "headerBackgroundColorDirection": "vertical",
 "data": {
  "name": "Window357"
 },
 "shadowSpread": 1,
 "closeButtonBackgroundColor": [
  "#DDDDDD",
  "#EEEEEE",
  "#FFFFFF"
 ],
 "titleFontFamily": "Arial"
},
{
 "autoplay": true,
 "rotationX": 0,
 "yaw": -78.13,
 "rotationZ": 0,
 "rotationY": 0,
 "showEasing": "cubic_in",
 "hideDuration": 500,
 "showDuration": 500,
 "id": "popup_51F47C35_40FC_4D92_41B5_4D90B22EF048",
 "popupDistance": 100,
 "popupMaxHeight": "95%",
 "loop": false,
 "popupMaxWidth": "95%",
 "pitch": 9.33,
 "hideEasing": "cubic_out",
 "hfov": 13.65,
 "class": "PopupPanoramaOverlay",
 "video": {
  "width": 1440,
  "mp4Url": "media/video_504B2783_40FC_DB76_41AB_2D70A7DB53BE.mp4",
  "class": "VideoResource",
  "height": 1080
 }
},
{
 "viewerArea": "this.MainViewer",
 "id": "MainViewerPhotoAlbumPlayer",
 "class": "PhotoAlbumPlayer"
},
{
 "items": [
  {
   "media": "this.video_5149DD40_440F_3C3B_4193_8EFF54BC27F0",
   "start": "this.viewer_uid4987F51B_4573_346A_41B5_F436A3AF50B1VideoPlayer.set('displayPlaybackBar', true); this.changeBackgroundWhilePlay(this.PlayList_486A452C_4573_34AE_41C2_C15BA65449E1, 0, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.PlayList_486A452C_4573_34AE_41C2_C15BA65449E1, 0)",
   "begin": "this.fixTogglePlayPauseButton(this.viewer_uid4987F51B_4573_346A_41B5_F436A3AF50B1VideoPlayer)",
   "player": "this.viewer_uid4987F51B_4573_346A_41B5_F436A3AF50B1VideoPlayer",
   "class": "VideoPlayListItem"
  }
 ],
 "id": "PlayList_486A452C_4573_34AE_41C2_C15BA65449E1",
 "class": "PlayList"
},
{
 "closeButtonBorderColor": "#000000",
 "id": "window_4F0B56B9_4573_F5B6_41CA_F791BA0BB606",
 "backgroundOpacity": 1,
 "paddingLeft": 0,
 "closeButtonBackgroundColorDirection": "vertical",
 "closeButtonIconHeight": 20,
 "overflow": "scroll",
 "scrollBarMargin": 2,
 "footerBackgroundColorDirection": "vertical",
 "closeButtonRollOverBackgroundColor": [
  "#DDDDDD",
  "#EEEEEE",
  "#FFFFFF"
 ],
 "titlePaddingRight": 5,
 "titlePaddingTop": 5,
 "closeButtonRollOverIconLineWidth": 5,
 "minHeight": 20,
 "modal": true,
 "propagateClick": false,
 "shadowHorizontalLength": 3,
 "scrollBarWidth": 10,
 "closeButtonPressedBackgroundColorRatios": [
  0,
  0.1,
  1
 ],
 "verticalAlign": "middle",
 "footerBackgroundColor": [
  "#FFFFFF",
  "#EEEEEE",
  "#DDDDDD"
 ],
 "showEffect": {
  "duration": 500,
  "class": "FadeInEffect",
  "easing": "cubic_in_out"
 },
 "closeButtonRollOverBorderSize": 0,
 "shadowVerticalLength": 0,
 "minWidth": 20,
 "closeButtonRollOverBorderColor": "#000000",
 "footerBackgroundColorRatios": [
  0,
  0.9,
  1
 ],
 "titlePaddingBottom": 5,
 "bodyBackgroundOpacity": 0,
 "backgroundColor": [],
 "borderSize": 0,
 "closeButtonPressedBackgroundOpacity": 0.3,
 "headerPaddingRight": 0,
 "bodyBackgroundColor": [
  "#FFFFFF",
  "#DDDDDD",
  "#FFFFFF"
 ],
 "headerPaddingLeft": 10,
 "bodyPaddingLeft": 0,
 "class": "Window",
 "backgroundColorDirection": "vertical",
 "footerHeight": 5,
 "contentOpaque": false,
 "shadow": true,
 "headerBackgroundOpacity": 0,
 "scrollBarColor": "#000000",
 "closeButtonPressedIconLineWidth": 5,
 "veilShowEffect": {
  "duration": 500,
  "class": "FadeInEffect",
  "easing": "cubic_in_out"
 },
 "headerBackgroundColor": [
  "#DDDDDD",
  "#EEEEEE",
  "#FFFFFF"
 ],
 "closeButtonPaddingRight": 5,
 "shadowBlurRadius": 6,
 "bodyBackgroundColorRatios": [
  0,
  0.5,
  1
 ],
 "closeButtonBackgroundColorRatios": [
  0,
  0.1,
  1
 ],
 "scrollBarOpacity": 0.5,
 "closeButtonIconLineWidth": 5,
 "closeButtonPaddingLeft": 5,
 "bodyPaddingTop": 0,
 "veilColor": [
  "#000000",
  "#000000"
 ],
 "closeButtonBorderRadius": 0,
 "children": [
  "this.viewer_uid498D8518_4573_3476_41C9_998EB1187E59"
 ],
 "scrollBarVisible": "rollOver",
 "paddingRight": 0,
 "shadowOpacity": 0.5,
 "shadowColor": "#000000",
 "borderRadius": 5,
 "veilColorRatios": [
  0,
  1
 ],
 "closeButtonRollOverIconColor": "#666666",
 "bodyBackgroundColorDirection": "vertical",
 "headerPaddingTop": 10,
 "titleFontSize": "1.29vmin",
 "backgroundColorRatios": [],
 "closeButtonBorderSize": 0,
 "closeButtonPaddingBottom": 5,
 "veilHideEffect": {
  "duration": 500,
  "class": "FadeOutEffect",
  "easing": "cubic_in_out"
 },
 "headerBackgroundColorRatios": [
  0,
  0.1,
  1
 ],
 "headerPaddingBottom": 5,
 "closeButtonPressedBorderColor": "#000000",
 "footerBackgroundOpacity": 0,
 "closeButtonPressedBackgroundColorDirection": "vertical",
 "hideEffect": {
  "duration": 500,
  "class": "FadeOutEffect",
  "easing": "cubic_in_out"
 },
 "closeButtonPressedIconColor": "#888888",
 "closeButtonIconWidth": 20,
 "veilOpacity": 0.4,
 "closeButtonRollOverBackgroundOpacity": 0.3,
 "closeButtonPressedBackgroundColor": [
  "#DDDDDD",
  "#EEEEEE",
  "#FFFFFF"
 ],
 "gap": 10,
 "closeButtonRollOverBackgroundColorRatios": [
  0,
  0.1,
  1
 ],
 "closeButtonBackgroundOpacity": 0.3,
 "layout": "vertical",
 "titlePaddingLeft": 5,
 "paddingTop": 0,
 "closeButtonPaddingTop": 5,
 "closeButtonIconColor": "#000000",
 "bodyPaddingBottom": 0,
 "paddingBottom": 0,
 "headerVerticalAlign": "middle",
 "closeButtonRollOverBackgroundColorDirection": "vertical",
 "bodyPaddingRight": 0,
 "horizontalAlign": "center",
 "closeButtonPressedBorderSize": 0,
 "headerBackgroundColorDirection": "vertical",
 "data": {
  "name": "Window350"
 },
 "shadowSpread": 1,
 "closeButtonBackgroundColor": [
  "#DDDDDD",
  "#EEEEEE",
  "#FFFFFF"
 ],
 "titleFontFamily": "Arial"
},
{
 "initialPosition": {
  "yaw": 15.77,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "id": "camera_4B38269C_4573_346E_41CD_22808A386EFE",
 "class": "PanoramaCamera"
},
{
 "initialPosition": {
  "yaw": -3.27,
  "class": "PanoramaCameraPosition",
  "pitch": 7.36
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_2C3FE972_3F3A_8CEF_41A7_2E37A55F58A4_camera",
 "class": "PanoramaCamera"
},
{
 "initialPosition": {
  "yaw": -15.75,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "id": "camera_4B1996B9_4573_35B6_41D0_24749FB0D737",
 "class": "PanoramaCamera"
},
{
 "initialPosition": {
  "yaw": -120.48,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "id": "camera_48D0460A_4573_346B_41B3_FB6BA8ED02B4",
 "class": "PanoramaCamera"
},
{
 "items": [
  {
   "media": "this.panorama_34984BC9_3EFB_8C3D_41AC_376559BB2588",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 0, 1)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_34984BC9_3EFB_8C3D_41AC_376559BB2588_camera"
  },
  {
   "begin": "this.setEndToItemIndex(this.mainPlayList, 1, 2)",
   "media": "this.album_3352DF70_3EFD_84EB_41C0_4B97F6ADD645",
   "class": "PhotoAlbumPlayListItem",
   "player": "this.MainViewerPhotoAlbumPlayer"
  },
  {
   "media": "this.panorama_3340DE24_3EFF_846B_41BA_156D465E8DB5",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 2, 3)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_3340DE24_3EFF_846B_41BA_156D465E8DB5_camera"
  },
  {
   "media": "this.video_3027A6BE_3F06_8457_41A8_2EE14E1FB410",
   "start": "this.MainViewerVideoPlayer.set('displayPlaybackBar', true); this.changeBackgroundWhilePlay(this.mainPlayList, 3, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.mainPlayList, 3)",
   "begin": "this.fixTogglePlayPauseButton(this.MainViewerVideoPlayer); this.setEndToItemIndex(this.mainPlayList, 3, 4)",
   "player": "this.MainViewerVideoPlayer",
   "class": "VideoPlayListItem"
  },
  {
   "media": "this.panorama_2B7EFF51_3F0D_842D_41C8_DB30063C8773",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 4, 5)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_2B7EFF51_3F0D_842D_41C8_DB30063C8773_camera"
  },
  {
   "media": "this.panorama_2DC7EF70_3F0B_84EB_41A3_4012598CD21E",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 5, 6)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_2DC7EF70_3F0B_84EB_41A3_4012598CD21E_camera"
  },
  {
   "media": "this.panorama_2B2F1C70_3F0B_84EB_4178_787A635D8E70",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 6, 7)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_2B2F1C70_3F0B_84EB_4178_787A635D8E70_camera"
  },
  {
   "media": "this.panorama_2C9F3FF5_3F07_83D5_41C5_F20BBAC6A7AF",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 7, 8)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_2C9F3FF5_3F07_83D5_41C5_F20BBAC6A7AF_camera"
  },
  {
   "media": "this.panorama_2C3FE972_3F3A_8CEF_41A7_2E37A55F58A4",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 8, 9)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_2C3FE972_3F3A_8CEF_41A7_2E37A55F58A4_camera"
  },
  {
   "media": "this.panorama_2C1DAC6A_3F0A_84FF_41AE_1AF2A5794BA7",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 9, 10)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_2C1DAC6A_3F0A_84FF_41AE_1AF2A5794BA7_camera"
  },
  {
   "media": "this.panorama_2CDDF16C_3F05_BCFB_41C9_96D6CD6B2B34",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 10, 11)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_2CDDF16C_3F05_BCFB_41C9_96D6CD6B2B34_camera"
  },
  {
   "media": "this.video_504B2783_40FC_DB76_41AB_2D70A7DB53BE",
   "start": "this.MainViewerVideoPlayer.set('displayPlaybackBar', true); this.changeBackgroundWhilePlay(this.mainPlayList, 11, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.mainPlayList, 11)",
   "begin": "this.fixTogglePlayPauseButton(this.MainViewerVideoPlayer); this.setEndToItemIndex(this.mainPlayList, 11, 12)",
   "player": "this.MainViewerVideoPlayer",
   "class": "VideoPlayListItem"
  },
  {
   "media": "this.video_52B7FE5D_40CC_4D92_4171_5EBCA969B8AB",
   "start": "this.MainViewerVideoPlayer.set('displayPlaybackBar', true); this.changeBackgroundWhilePlay(this.mainPlayList, 12, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.mainPlayList, 12)",
   "begin": "this.fixTogglePlayPauseButton(this.MainViewerVideoPlayer); this.setEndToItemIndex(this.mainPlayList, 12, 13)",
   "player": "this.MainViewerVideoPlayer",
   "class": "VideoPlayListItem"
  },
  {
   "media": "this.video_4ABD37E6_440F_4BC7_41CC_AC3E80E529F7",
   "start": "this.MainViewerVideoPlayer.set('displayPlaybackBar', true); this.changeBackgroundWhilePlay(this.mainPlayList, 13, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.mainPlayList, 13)",
   "begin": "this.fixTogglePlayPauseButton(this.MainViewerVideoPlayer); this.setEndToItemIndex(this.mainPlayList, 13, 14)",
   "player": "this.MainViewerVideoPlayer",
   "class": "VideoPlayListItem"
  },
  {
   "media": "this.video_4AD6C297_4405_4444_41C6_DD45A2A49850",
   "start": "this.MainViewerVideoPlayer.set('displayPlaybackBar', true); this.changeBackgroundWhilePlay(this.mainPlayList, 14, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.mainPlayList, 14)",
   "begin": "this.fixTogglePlayPauseButton(this.MainViewerVideoPlayer); this.setEndToItemIndex(this.mainPlayList, 14, 15)",
   "player": "this.MainViewerVideoPlayer",
   "class": "VideoPlayListItem"
  },
  {
   "media": "this.video_4ACF9D29_441D_FC4D_41C1_B1689C6AB6F2",
   "start": "this.MainViewerVideoPlayer.set('displayPlaybackBar', true); this.changeBackgroundWhilePlay(this.mainPlayList, 15, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.mainPlayList, 15)",
   "begin": "this.fixTogglePlayPauseButton(this.MainViewerVideoPlayer); this.setEndToItemIndex(this.mainPlayList, 15, 16)",
   "player": "this.MainViewerVideoPlayer",
   "class": "VideoPlayListItem"
  },
  {
   "media": "this.video_560760E6_4405_45C7_419D_023103D778D7",
   "start": "this.MainViewerVideoPlayer.set('displayPlaybackBar', true); this.changeBackgroundWhilePlay(this.mainPlayList, 16, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.mainPlayList, 16)",
   "begin": "this.fixTogglePlayPauseButton(this.MainViewerVideoPlayer); this.setEndToItemIndex(this.mainPlayList, 16, 17)",
   "player": "this.MainViewerVideoPlayer",
   "class": "VideoPlayListItem"
  },
  {
   "media": "this.video_5149DD40_440F_3C3B_4193_8EFF54BC27F0",
   "end": "this.trigger('tourEnded')",
   "start": "this.MainViewerVideoPlayer.set('displayPlaybackBar', true); this.changeBackgroundWhilePlay(this.mainPlayList, 17, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.mainPlayList, 17)",
   "begin": "this.fixTogglePlayPauseButton(this.MainViewerVideoPlayer); this.setEndToItemIndex(this.mainPlayList, 17, 0)",
   "player": "this.MainViewerVideoPlayer",
   "class": "VideoPlayListItem"
  }
 ],
 "id": "mainPlayList",
 "class": "PlayList"
},
{
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_34984BC9_3EFB_8C3D_41AC_376559BB2588_0/f/0/{row}_{column}.jpg",
      "colCount": 10,
      "rowCount": 10,
      "width": 5120,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 5120
     },
     {
      "url": "media/panorama_34984BC9_3EFB_8C3D_41AC_376559BB2588_0/f/1/{row}_{column}.jpg",
      "colCount": 5,
      "rowCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_34984BC9_3EFB_8C3D_41AC_376559BB2588_0/f/2/{row}_{column}.jpg",
      "colCount": 3,
      "rowCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_34984BC9_3EFB_8C3D_41AC_376559BB2588_0/f/3/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_34984BC9_3EFB_8C3D_41AC_376559BB2588_0/f/4/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_34984BC9_3EFB_8C3D_41AC_376559BB2588_0/l/0/{row}_{column}.jpg",
      "colCount": 10,
      "rowCount": 10,
      "width": 5120,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 5120
     },
     {
      "url": "media/panorama_34984BC9_3EFB_8C3D_41AC_376559BB2588_0/l/1/{row}_{column}.jpg",
      "colCount": 5,
      "rowCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_34984BC9_3EFB_8C3D_41AC_376559BB2588_0/l/2/{row}_{column}.jpg",
      "colCount": 3,
      "rowCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_34984BC9_3EFB_8C3D_41AC_376559BB2588_0/l/3/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_34984BC9_3EFB_8C3D_41AC_376559BB2588_0/l/4/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_34984BC9_3EFB_8C3D_41AC_376559BB2588_0/u/0/{row}_{column}.jpg",
      "colCount": 10,
      "rowCount": 10,
      "width": 5120,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 5120
     },
     {
      "url": "media/panorama_34984BC9_3EFB_8C3D_41AC_376559BB2588_0/u/1/{row}_{column}.jpg",
      "colCount": 5,
      "rowCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_34984BC9_3EFB_8C3D_41AC_376559BB2588_0/u/2/{row}_{column}.jpg",
      "colCount": 3,
      "rowCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_34984BC9_3EFB_8C3D_41AC_376559BB2588_0/u/3/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_34984BC9_3EFB_8C3D_41AC_376559BB2588_0/u/4/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_34984BC9_3EFB_8C3D_41AC_376559BB2588_0/r/0/{row}_{column}.jpg",
      "colCount": 10,
      "rowCount": 10,
      "width": 5120,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 5120
     },
     {
      "url": "media/panorama_34984BC9_3EFB_8C3D_41AC_376559BB2588_0/r/1/{row}_{column}.jpg",
      "colCount": 5,
      "rowCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_34984BC9_3EFB_8C3D_41AC_376559BB2588_0/r/2/{row}_{column}.jpg",
      "colCount": 3,
      "rowCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_34984BC9_3EFB_8C3D_41AC_376559BB2588_0/r/3/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_34984BC9_3EFB_8C3D_41AC_376559BB2588_0/r/4/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_34984BC9_3EFB_8C3D_41AC_376559BB2588_0/b/0/{row}_{column}.jpg",
      "colCount": 10,
      "rowCount": 10,
      "width": 5120,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 5120
     },
     {
      "url": "media/panorama_34984BC9_3EFB_8C3D_41AC_376559BB2588_0/b/1/{row}_{column}.jpg",
      "colCount": 5,
      "rowCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_34984BC9_3EFB_8C3D_41AC_376559BB2588_0/b/2/{row}_{column}.jpg",
      "colCount": 3,
      "rowCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_34984BC9_3EFB_8C3D_41AC_376559BB2588_0/b/3/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_34984BC9_3EFB_8C3D_41AC_376559BB2588_0/b/4/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_34984BC9_3EFB_8C3D_41AC_376559BB2588_t.jpg",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_34984BC9_3EFB_8C3D_41AC_376559BB2588_0/d/0/{row}_{column}.jpg",
      "colCount": 10,
      "rowCount": 10,
      "width": 5120,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 5120
     },
     {
      "url": "media/panorama_34984BC9_3EFB_8C3D_41AC_376559BB2588_0/d/1/{row}_{column}.jpg",
      "colCount": 5,
      "rowCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_34984BC9_3EFB_8C3D_41AC_376559BB2588_0/d/2/{row}_{column}.jpg",
      "colCount": 3,
      "rowCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_34984BC9_3EFB_8C3D_41AC_376559BB2588_0/d/3/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_34984BC9_3EFB_8C3D_41AC_376559BB2588_0/d/4/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_33FEB549_3EFA_843D_41CB_0D3A730688D6",
  "this.overlay_306353F5_3F06_83D5_41B9_A9A0ABFBAC40",
  "this.overlay_2C0C39EB_3F06_8FFD_41BD_72E4CEAF6F45",
  "this.popup_2DC4DE73_3F07_84ED_41CB_16C1D16A54C7",
  "this.overlay_57641660_4405_4CFB_41C3_F775419E0BFD",
  "this.overlay_576B1625_4404_CC45_41C5_2BBB8E7E45FB",
  "this.popup_5079E6A1_4405_4C7D_41C6_CD878F073210",
  "this.overlay_517F7F81_4403_DC3D_41B7_C55A9C8AD196"
 ],
 "thumbnailUrl": "media/panorama_34984BC9_3EFB_8C3D_41AC_376559BB2588_t.jpg",
 "id": "panorama_34984BC9_3EFB_8C3D_41AC_376559BB2588",
 "label": "dji_mimo_20260518_143148_0_1779111177361_photo",
 "hfovMax": 130,
 "adjacentPanoramas": [
  {
   "yaw": -164.23,
   "class": "AdjacentPanorama",
   "backwardYaw": -47.02,
   "panorama": "this.panorama_2DC7EF70_3F0B_84EB_41A3_4012598CD21E",
   "distance": 1
  },
  {
   "yaw": 8.39,
   "class": "AdjacentPanorama",
   "backwardYaw": 21.48,
   "panorama": "this.panorama_3340DE24_3EFF_846B_41BA_156D465E8DB5",
   "distance": 1
  }
 ],
 "hfov": 360,
 "class": "Panorama",
 "pitch": 0,
 "partial": false
},
{
 "initialPosition": {
  "yaw": 132.98,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "id": "camera_480635C8_4573_37D7_419E_03AADE289C58",
 "class": "PanoramaCamera"
},
{
 "autoplay": true,
 "rotationX": 0,
 "yaw": 127.91,
 "rotationZ": 0,
 "rotationY": 0,
 "showEasing": "cubic_in",
 "hideDuration": 500,
 "showDuration": 500,
 "id": "popup_2DC4DE73_3F07_84ED_41CB_16C1D16A54C7",
 "popupDistance": 100,
 "popupMaxHeight": "95%",
 "loop": false,
 "popupMaxWidth": "95%",
 "pitch": 14.87,
 "hideEasing": "cubic_out",
 "hfov": 13.37,
 "class": "PopupPanoramaOverlay",
 "video": {
  "width": 1912,
  "mp4Url": "media/video_3027A6BE_3F06_8457_41A8_2EE14E1FB410.mp4",
  "class": "VideoResource",
  "height": 1080
 }
},
{
 "items": [
  {
   "media": "this.video_4ABD37E6_440F_4BC7_41CC_AC3E80E529F7",
   "start": "this.viewer_uid4986751C_4573_346E_41A9_5135DE39951AVideoPlayer.set('displayPlaybackBar', true); this.changeBackgroundWhilePlay(this.PlayList_4869C52C_4573_34AE_41A8_EE79AC729FF9, 0, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.PlayList_4869C52C_4573_34AE_41A8_EE79AC729FF9, 0)",
   "begin": "this.fixTogglePlayPauseButton(this.viewer_uid4986751C_4573_346E_41A9_5135DE39951AVideoPlayer)",
   "player": "this.viewer_uid4986751C_4573_346E_41A9_5135DE39951AVideoPlayer",
   "class": "VideoPlayListItem"
  }
 ],
 "id": "PlayList_4869C52C_4573_34AE_41A8_EE79AC729FF9",
 "class": "PlayList"
},
{
 "viewerArea": "this.MainViewer",
 "id": "MainViewerVideoPlayer",
 "class": "VideoPlayer",
 "displayPlaybackBar": true
},
{
 "initialPosition": {
  "yaw": -61.57,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "id": "camera_4B7D5663_4573_34DA_41CF_643E87B8AFF4",
 "class": "PanoramaCamera"
},
{
 "initialPosition": {
  "yaw": -20.25,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "id": "camera_488D3654_4573_34FE_41BB_A01BD0F533EB",
 "class": "PanoramaCamera"
},
{
 "closeButtonBorderColor": "#000000",
 "id": "window_4F0A46C0_4573_F5D6_413F_6D32B060A100",
 "backgroundOpacity": 1,
 "paddingLeft": 0,
 "closeButtonBackgroundColorDirection": "vertical",
 "closeButtonIconHeight": 20,
 "overflow": "scroll",
 "scrollBarMargin": 2,
 "footerBackgroundColorDirection": "vertical",
 "closeButtonRollOverBackgroundColor": [
  "#DDDDDD",
  "#EEEEEE",
  "#FFFFFF"
 ],
 "titlePaddingRight": 5,
 "titlePaddingTop": 5,
 "closeButtonRollOverIconLineWidth": 5,
 "minHeight": 20,
 "modal": true,
 "propagateClick": false,
 "shadowHorizontalLength": 3,
 "scrollBarWidth": 10,
 "closeButtonPressedBackgroundColorRatios": [
  0,
  0.1,
  1
 ],
 "verticalAlign": "middle",
 "footerBackgroundColor": [
  "#FFFFFF",
  "#EEEEEE",
  "#DDDDDD"
 ],
 "showEffect": {
  "duration": 500,
  "class": "FadeInEffect",
  "easing": "cubic_in_out"
 },
 "closeButtonRollOverBorderSize": 0,
 "shadowVerticalLength": 0,
 "minWidth": 20,
 "closeButtonRollOverBorderColor": "#000000",
 "footerBackgroundColorRatios": [
  0,
  0.9,
  1
 ],
 "titlePaddingBottom": 5,
 "bodyBackgroundOpacity": 0,
 "backgroundColor": [],
 "borderSize": 0,
 "closeButtonPressedBackgroundOpacity": 0.3,
 "headerPaddingRight": 0,
 "bodyBackgroundColor": [
  "#FFFFFF",
  "#DDDDDD",
  "#FFFFFF"
 ],
 "headerPaddingLeft": 10,
 "bodyPaddingLeft": 0,
 "class": "Window",
 "backgroundColorDirection": "vertical",
 "footerHeight": 5,
 "contentOpaque": false,
 "shadow": true,
 "headerBackgroundOpacity": 0,
 "scrollBarColor": "#000000",
 "closeButtonPressedIconLineWidth": 5,
 "veilShowEffect": {
  "duration": 500,
  "class": "FadeInEffect",
  "easing": "cubic_in_out"
 },
 "headerBackgroundColor": [
  "#DDDDDD",
  "#EEEEEE",
  "#FFFFFF"
 ],
 "closeButtonPaddingRight": 5,
 "shadowBlurRadius": 6,
 "bodyBackgroundColorRatios": [
  0,
  0.5,
  1
 ],
 "closeButtonBackgroundColorRatios": [
  0,
  0.1,
  1
 ],
 "scrollBarOpacity": 0.5,
 "closeButtonIconLineWidth": 5,
 "closeButtonPaddingLeft": 5,
 "bodyPaddingTop": 0,
 "veilColor": [
  "#000000",
  "#000000"
 ],
 "closeButtonBorderRadius": 0,
 "children": [
  "this.viewer_uid4983C519_4573_3476_41C6_8103303FA3C7"
 ],
 "scrollBarVisible": "rollOver",
 "paddingRight": 0,
 "shadowOpacity": 0.5,
 "shadowColor": "#000000",
 "borderRadius": 5,
 "veilColorRatios": [
  0,
  1
 ],
 "closeButtonRollOverIconColor": "#666666",
 "bodyBackgroundColorDirection": "vertical",
 "headerPaddingTop": 10,
 "titleFontSize": "1.29vmin",
 "backgroundColorRatios": [],
 "closeButtonBorderSize": 0,
 "closeButtonPaddingBottom": 5,
 "veilHideEffect": {
  "duration": 500,
  "class": "FadeOutEffect",
  "easing": "cubic_in_out"
 },
 "headerBackgroundColorRatios": [
  0,
  0.1,
  1
 ],
 "headerPaddingBottom": 5,
 "closeButtonPressedBorderColor": "#000000",
 "footerBackgroundOpacity": 0,
 "closeButtonPressedBackgroundColorDirection": "vertical",
 "hideEffect": {
  "duration": 500,
  "class": "FadeOutEffect",
  "easing": "cubic_in_out"
 },
 "closeButtonPressedIconColor": "#888888",
 "closeButtonIconWidth": 20,
 "veilOpacity": 0.4,
 "closeButtonRollOverBackgroundOpacity": 0.3,
 "closeButtonPressedBackgroundColor": [
  "#DDDDDD",
  "#EEEEEE",
  "#FFFFFF"
 ],
 "gap": 10,
 "closeButtonRollOverBackgroundColorRatios": [
  0,
  0.1,
  1
 ],
 "closeButtonBackgroundOpacity": 0.3,
 "layout": "vertical",
 "titlePaddingLeft": 5,
 "paddingTop": 0,
 "closeButtonPaddingTop": 5,
 "closeButtonIconColor": "#000000",
 "bodyPaddingBottom": 0,
 "paddingBottom": 0,
 "headerVerticalAlign": "middle",
 "closeButtonRollOverBackgroundColorDirection": "vertical",
 "bodyPaddingRight": 0,
 "horizontalAlign": "center",
 "closeButtonPressedBorderSize": 0,
 "headerBackgroundColorDirection": "vertical",
 "data": {
  "name": "Window351"
 },
 "shadowSpread": 1,
 "closeButtonBackgroundColor": [
  "#DDDDDD",
  "#EEEEEE",
  "#FFFFFF"
 ],
 "titleFontFamily": "Arial"
},
{
 "autoplay": true,
 "rotationX": 0,
 "yaw": -81.3,
 "rotationZ": 0,
 "rotationY": 0,
 "showEasing": "cubic_in",
 "hideDuration": 500,
 "showDuration": 500,
 "id": "popup_4B330F4D_440F_DCC4_41CA_B83A4EC75720",
 "popupDistance": 100,
 "popupMaxHeight": "95%",
 "loop": false,
 "popupMaxWidth": "95%",
 "pitch": 20.38,
 "hideEasing": "cubic_out",
 "hfov": 11.52,
 "class": "PopupPanoramaOverlay",
 "video": {
  "width": 1440,
  "mp4Url": "media/video_4ABD37E6_440F_4BC7_41CC_AC3E80E529F7.mp4",
  "class": "VideoResource",
  "height": 1080
 }
},
{
 "closeButtonBorderColor": "#000000",
 "id": "window_4F0936C1_4573_F5D6_41CA_DC20ED4A4B1F",
 "backgroundOpacity": 1,
 "paddingLeft": 0,
 "closeButtonBackgroundColorDirection": "vertical",
 "closeButtonIconHeight": 20,
 "overflow": "scroll",
 "scrollBarMargin": 2,
 "footerBackgroundColorDirection": "vertical",
 "closeButtonRollOverBackgroundColor": [
  "#DDDDDD",
  "#EEEEEE",
  "#FFFFFF"
 ],
 "titlePaddingRight": 5,
 "titlePaddingTop": 5,
 "closeButtonRollOverIconLineWidth": 5,
 "minHeight": 20,
 "modal": true,
 "propagateClick": false,
 "shadowHorizontalLength": 3,
 "scrollBarWidth": 10,
 "closeButtonPressedBackgroundColorRatios": [
  0,
  0.1,
  1
 ],
 "verticalAlign": "middle",
 "footerBackgroundColor": [
  "#FFFFFF",
  "#EEEEEE",
  "#DDDDDD"
 ],
 "showEffect": {
  "duration": 500,
  "class": "FadeInEffect",
  "easing": "cubic_in_out"
 },
 "closeButtonRollOverBorderSize": 0,
 "shadowVerticalLength": 0,
 "minWidth": 20,
 "closeButtonRollOverBorderColor": "#000000",
 "footerBackgroundColorRatios": [
  0,
  0.9,
  1
 ],
 "titlePaddingBottom": 5,
 "bodyBackgroundOpacity": 0,
 "backgroundColor": [],
 "borderSize": 0,
 "closeButtonPressedBackgroundOpacity": 0.3,
 "headerPaddingRight": 0,
 "bodyBackgroundColor": [
  "#FFFFFF",
  "#DDDDDD",
  "#FFFFFF"
 ],
 "headerPaddingLeft": 10,
 "bodyPaddingLeft": 0,
 "class": "Window",
 "backgroundColorDirection": "vertical",
 "footerHeight": 5,
 "contentOpaque": false,
 "shadow": true,
 "headerBackgroundOpacity": 0,
 "scrollBarColor": "#000000",
 "closeButtonPressedIconLineWidth": 5,
 "veilShowEffect": {
  "duration": 500,
  "class": "FadeInEffect",
  "easing": "cubic_in_out"
 },
 "headerBackgroundColor": [
  "#DDDDDD",
  "#EEEEEE",
  "#FFFFFF"
 ],
 "closeButtonPaddingRight": 5,
 "shadowBlurRadius": 6,
 "bodyBackgroundColorRatios": [
  0,
  0.5,
  1
 ],
 "closeButtonBackgroundColorRatios": [
  0,
  0.1,
  1
 ],
 "scrollBarOpacity": 0.5,
 "closeButtonIconLineWidth": 5,
 "closeButtonPaddingLeft": 5,
 "bodyPaddingTop": 0,
 "veilColor": [
  "#000000",
  "#000000"
 ],
 "closeButtonBorderRadius": 0,
 "children": [
  "this.viewer_uid49832519_4573_3476_41B3_D32E3FCA7841"
 ],
 "scrollBarVisible": "rollOver",
 "paddingRight": 0,
 "shadowOpacity": 0.5,
 "shadowColor": "#000000",
 "borderRadius": 5,
 "veilColorRatios": [
  0,
  1
 ],
 "closeButtonRollOverIconColor": "#666666",
 "bodyBackgroundColorDirection": "vertical",
 "headerPaddingTop": 10,
 "titleFontSize": "1.29vmin",
 "backgroundColorRatios": [],
 "closeButtonBorderSize": 0,
 "closeButtonPaddingBottom": 5,
 "veilHideEffect": {
  "duration": 500,
  "class": "FadeOutEffect",
  "easing": "cubic_in_out"
 },
 "headerBackgroundColorRatios": [
  0,
  0.1,
  1
 ],
 "headerPaddingBottom": 5,
 "closeButtonPressedBorderColor": "#000000",
 "footerBackgroundOpacity": 0,
 "closeButtonPressedBackgroundColorDirection": "vertical",
 "hideEffect": {
  "duration": 500,
  "class": "FadeOutEffect",
  "easing": "cubic_in_out"
 },
 "closeButtonPressedIconColor": "#888888",
 "closeButtonIconWidth": 20,
 "veilOpacity": 0.4,
 "closeButtonRollOverBackgroundOpacity": 0.3,
 "closeButtonPressedBackgroundColor": [
  "#DDDDDD",
  "#EEEEEE",
  "#FFFFFF"
 ],
 "gap": 10,
 "closeButtonRollOverBackgroundColorRatios": [
  0,
  0.1,
  1
 ],
 "closeButtonBackgroundOpacity": 0.3,
 "layout": "vertical",
 "titlePaddingLeft": 5,
 "paddingTop": 0,
 "closeButtonPaddingTop": 5,
 "closeButtonIconColor": "#000000",
 "bodyPaddingBottom": 0,
 "paddingBottom": 0,
 "headerVerticalAlign": "middle",
 "closeButtonRollOverBackgroundColorDirection": "vertical",
 "bodyPaddingRight": 0,
 "horizontalAlign": "center",
 "closeButtonPressedBorderSize": 0,
 "headerBackgroundColorDirection": "vertical",
 "data": {
  "name": "Window352"
 },
 "shadowSpread": 1,
 "closeButtonBackgroundColor": [
  "#DDDDDD",
  "#EEEEEE",
  "#FFFFFF"
 ],
 "titleFontFamily": "Arial"
},
{
 "initialPosition": {
  "yaw": -177.34,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "id": "camera_48C2061B_4573_346A_41A1_0D055431949C",
 "class": "PanoramaCamera"
},
{
 "closeButtonBorderColor": "#000000",
 "id": "window_4F0D16C4_4573_F5DE_419F_3A3B6ED3D7A8",
 "backgroundOpacity": 1,
 "paddingLeft": 0,
 "closeButtonBackgroundColorDirection": "vertical",
 "closeButtonIconHeight": 20,
 "overflow": "scroll",
 "scrollBarMargin": 2,
 "footerBackgroundColorDirection": "vertical",
 "closeButtonRollOverBackgroundColor": [
  "#DDDDDD",
  "#EEEEEE",
  "#FFFFFF"
 ],
 "titlePaddingRight": 5,
 "titlePaddingTop": 5,
 "closeButtonRollOverIconLineWidth": 5,
 "minHeight": 20,
 "modal": true,
 "propagateClick": false,
 "shadowHorizontalLength": 3,
 "scrollBarWidth": 10,
 "closeButtonPressedBackgroundColorRatios": [
  0,
  0.1,
  1
 ],
 "verticalAlign": "middle",
 "footerBackgroundColor": [
  "#FFFFFF",
  "#EEEEEE",
  "#DDDDDD"
 ],
 "showEffect": {
  "duration": 500,
  "class": "FadeInEffect",
  "easing": "cubic_in_out"
 },
 "closeButtonRollOverBorderSize": 0,
 "shadowVerticalLength": 0,
 "minWidth": 20,
 "closeButtonRollOverBorderColor": "#000000",
 "footerBackgroundColorRatios": [
  0,
  0.9,
  1
 ],
 "titlePaddingBottom": 5,
 "bodyBackgroundOpacity": 0,
 "backgroundColor": [],
 "borderSize": 0,
 "closeButtonPressedBackgroundOpacity": 0.3,
 "headerPaddingRight": 0,
 "bodyBackgroundColor": [
  "#FFFFFF",
  "#DDDDDD",
  "#FFFFFF"
 ],
 "headerPaddingLeft": 10,
 "bodyPaddingLeft": 0,
 "class": "Window",
 "backgroundColorDirection": "vertical",
 "footerHeight": 5,
 "contentOpaque": false,
 "shadow": true,
 "headerBackgroundOpacity": 0,
 "scrollBarColor": "#000000",
 "closeButtonPressedIconLineWidth": 5,
 "veilShowEffect": {
  "duration": 500,
  "class": "FadeInEffect",
  "easing": "cubic_in_out"
 },
 "headerBackgroundColor": [
  "#DDDDDD",
  "#EEEEEE",
  "#FFFFFF"
 ],
 "closeButtonPaddingRight": 5,
 "shadowBlurRadius": 6,
 "bodyBackgroundColorRatios": [
  0,
  0.5,
  1
 ],
 "closeButtonBackgroundColorRatios": [
  0,
  0.1,
  1
 ],
 "scrollBarOpacity": 0.5,
 "closeButtonIconLineWidth": 5,
 "closeButtonPaddingLeft": 5,
 "bodyPaddingTop": 0,
 "veilColor": [
  "#000000",
  "#000000"
 ],
 "closeButtonBorderRadius": 0,
 "children": [
  "this.viewer_uid4986751C_4573_346E_41A9_5135DE39951A"
 ],
 "scrollBarVisible": "rollOver",
 "paddingRight": 0,
 "shadowOpacity": 0.5,
 "shadowColor": "#000000",
 "borderRadius": 5,
 "veilColorRatios": [
  0,
  1
 ],
 "closeButtonRollOverIconColor": "#666666",
 "bodyBackgroundColorDirection": "vertical",
 "headerPaddingTop": 10,
 "titleFontSize": "1.29vmin",
 "backgroundColorRatios": [],
 "closeButtonBorderSize": 0,
 "closeButtonPaddingBottom": 5,
 "veilHideEffect": {
  "duration": 500,
  "class": "FadeOutEffect",
  "easing": "cubic_in_out"
 },
 "headerBackgroundColorRatios": [
  0,
  0.1,
  1
 ],
 "headerPaddingBottom": 5,
 "closeButtonPressedBorderColor": "#000000",
 "footerBackgroundOpacity": 0,
 "closeButtonPressedBackgroundColorDirection": "vertical",
 "hideEffect": {
  "duration": 500,
  "class": "FadeOutEffect",
  "easing": "cubic_in_out"
 },
 "closeButtonPressedIconColor": "#888888",
 "closeButtonIconWidth": 20,
 "veilOpacity": 0.4,
 "closeButtonRollOverBackgroundOpacity": 0.3,
 "closeButtonPressedBackgroundColor": [
  "#DDDDDD",
  "#EEEEEE",
  "#FFFFFF"
 ],
 "gap": 10,
 "closeButtonRollOverBackgroundColorRatios": [
  0,
  0.1,
  1
 ],
 "closeButtonBackgroundOpacity": 0.3,
 "layout": "vertical",
 "titlePaddingLeft": 5,
 "paddingTop": 0,
 "closeButtonPaddingTop": 5,
 "closeButtonIconColor": "#000000",
 "bodyPaddingBottom": 0,
 "paddingBottom": 0,
 "headerVerticalAlign": "middle",
 "closeButtonRollOverBackgroundColorDirection": "vertical",
 "bodyPaddingRight": 0,
 "horizontalAlign": "center",
 "closeButtonPressedBorderSize": 0,
 "headerBackgroundColorDirection": "vertical",
 "data": {
  "name": "Window356"
 },
 "shadowSpread": 1,
 "closeButtonBackgroundColor": [
  "#DDDDDD",
  "#EEEEEE",
  "#FFFFFF"
 ],
 "titleFontFamily": "Arial"
},
{
 "thumbnailUrl": "media/video_560760E6_4405_45C7_419D_023103D778D7_t.jpg",
 "scaleMode": "fit_inside",
 "width": 1440,
 "loop": false,
 "id": "video_560760E6_4405_45C7_419D_023103D778D7",
 "label": "Area Stable kuda DONE",
 "class": "Video",
 "height": 1080,
 "video": {
  "width": 1440,
  "mp4Url": "media/video_560760E6_4405_45C7_419D_023103D778D7.mp4",
  "class": "VideoResource",
  "height": 1080
 }
},
{
 "autoplay": true,
 "rotationX": 0,
 "yaw": 3.75,
 "rotationZ": 0,
 "rotationY": 0,
 "showEasing": "cubic_in",
 "hideDuration": 500,
 "showDuration": 500,
 "id": "popup_54D0CC9B_40C4_4E95_41CE_9753E60BD865",
 "popupDistance": 100,
 "popupMaxHeight": "95%",
 "loop": false,
 "popupMaxWidth": "95%",
 "pitch": 18.71,
 "hideEasing": "cubic_out",
 "hfov": 11.64,
 "class": "PopupPanoramaOverlay",
 "video": {
  "width": 1912,
  "mp4Url": "media/video_3027A6BE_3F06_8457_41A8_2EE14E1FB410.mp4",
  "class": "VideoResource",
  "height": 1080
 }
},
{
 "items": [
  {
   "media": "this.video_560760E6_4405_45C7_419D_023103D778D7",
   "start": "this.viewer_uid4981951A_4573_346A_41BF_8EC7143DAE5FVideoPlayer.set('displayPlaybackBar', true); this.changeBackgroundWhilePlay(this.PlayList_486B152C_4573_34AE_4169_ACC56B9D281F, 0, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.PlayList_486B152C_4573_34AE_4169_ACC56B9D281F, 0)",
   "begin": "this.fixTogglePlayPauseButton(this.viewer_uid4981951A_4573_346A_41BF_8EC7143DAE5FVideoPlayer)",
   "player": "this.viewer_uid4981951A_4573_346A_41BF_8EC7143DAE5FVideoPlayer",
   "class": "VideoPlayListItem"
  }
 ],
 "id": "PlayList_486B152C_4573_34AE_4169_ACC56B9D281F",
 "class": "PlayList"
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_2CDDF16C_3F05_BCFB_41C9_96D6CD6B2B34_camera",
 "class": "PanoramaCamera"
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_2C1DAC6A_3F0A_84FF_41AE_1AF2A5794BA7_camera",
 "class": "PanoramaCamera"
},
{
 "hideDuration": 500,
 "rotationX": 0,
 "yaw": -78.55,
 "rotationZ": 0,
 "showEasing": "cubic_in",
 "rotationY": 0,
 "showDuration": 500,
 "id": "popup_5079E6A1_4405_4C7D_41C6_CD878F073210",
 "popupDistance": 100,
 "popupMaxHeight": "95%",
 "popupMaxWidth": "95%",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/popup_5079E6A1_4405_4C7D_41C6_CD878F073210_0_1.jpeg",
    "width": 1024,
    "class": "ImageResourceLevel",
    "height": 910
   }
  ]
 },
 "pitch": -9.82,
 "hideEasing": "cubic_out",
 "hfov": 12.09,
 "class": "PopupPanoramaOverlay"
},
{
 "initialPosition": {
  "yaw": -8.59,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "id": "camera_4824659E_4573_346A_41B4_8A1896B8BCB6",
 "class": "PanoramaCamera"
},
{
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2CDDF16C_3F05_BCFB_41C9_96D6CD6B2B34_0/f/0/{row}_{column}.jpg",
      "colCount": 10,
      "rowCount": 10,
      "width": 5120,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 5120
     },
     {
      "url": "media/panorama_2CDDF16C_3F05_BCFB_41C9_96D6CD6B2B34_0/f/1/{row}_{column}.jpg",
      "colCount": 5,
      "rowCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_2CDDF16C_3F05_BCFB_41C9_96D6CD6B2B34_0/f/2/{row}_{column}.jpg",
      "colCount": 3,
      "rowCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_2CDDF16C_3F05_BCFB_41C9_96D6CD6B2B34_0/f/3/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_2CDDF16C_3F05_BCFB_41C9_96D6CD6B2B34_0/f/4/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2CDDF16C_3F05_BCFB_41C9_96D6CD6B2B34_0/l/0/{row}_{column}.jpg",
      "colCount": 10,
      "rowCount": 10,
      "width": 5120,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 5120
     },
     {
      "url": "media/panorama_2CDDF16C_3F05_BCFB_41C9_96D6CD6B2B34_0/l/1/{row}_{column}.jpg",
      "colCount": 5,
      "rowCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_2CDDF16C_3F05_BCFB_41C9_96D6CD6B2B34_0/l/2/{row}_{column}.jpg",
      "colCount": 3,
      "rowCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_2CDDF16C_3F05_BCFB_41C9_96D6CD6B2B34_0/l/3/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_2CDDF16C_3F05_BCFB_41C9_96D6CD6B2B34_0/l/4/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2CDDF16C_3F05_BCFB_41C9_96D6CD6B2B34_0/u/0/{row}_{column}.jpg",
      "colCount": 10,
      "rowCount": 10,
      "width": 5120,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 5120
     },
     {
      "url": "media/panorama_2CDDF16C_3F05_BCFB_41C9_96D6CD6B2B34_0/u/1/{row}_{column}.jpg",
      "colCount": 5,
      "rowCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_2CDDF16C_3F05_BCFB_41C9_96D6CD6B2B34_0/u/2/{row}_{column}.jpg",
      "colCount": 3,
      "rowCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_2CDDF16C_3F05_BCFB_41C9_96D6CD6B2B34_0/u/3/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_2CDDF16C_3F05_BCFB_41C9_96D6CD6B2B34_0/u/4/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2CDDF16C_3F05_BCFB_41C9_96D6CD6B2B34_0/r/0/{row}_{column}.jpg",
      "colCount": 10,
      "rowCount": 10,
      "width": 5120,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 5120
     },
     {
      "url": "media/panorama_2CDDF16C_3F05_BCFB_41C9_96D6CD6B2B34_0/r/1/{row}_{column}.jpg",
      "colCount": 5,
      "rowCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_2CDDF16C_3F05_BCFB_41C9_96D6CD6B2B34_0/r/2/{row}_{column}.jpg",
      "colCount": 3,
      "rowCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_2CDDF16C_3F05_BCFB_41C9_96D6CD6B2B34_0/r/3/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_2CDDF16C_3F05_BCFB_41C9_96D6CD6B2B34_0/r/4/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2CDDF16C_3F05_BCFB_41C9_96D6CD6B2B34_0/b/0/{row}_{column}.jpg",
      "colCount": 10,
      "rowCount": 10,
      "width": 5120,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 5120
     },
     {
      "url": "media/panorama_2CDDF16C_3F05_BCFB_41C9_96D6CD6B2B34_0/b/1/{row}_{column}.jpg",
      "colCount": 5,
      "rowCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_2CDDF16C_3F05_BCFB_41C9_96D6CD6B2B34_0/b/2/{row}_{column}.jpg",
      "colCount": 3,
      "rowCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_2CDDF16C_3F05_BCFB_41C9_96D6CD6B2B34_0/b/3/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_2CDDF16C_3F05_BCFB_41C9_96D6CD6B2B34_0/b/4/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_2CDDF16C_3F05_BCFB_41C9_96D6CD6B2B34_t.jpg",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2CDDF16C_3F05_BCFB_41C9_96D6CD6B2B34_0/d/0/{row}_{column}.jpg",
      "colCount": 10,
      "rowCount": 10,
      "width": 5120,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 5120
     },
     {
      "url": "media/panorama_2CDDF16C_3F05_BCFB_41C9_96D6CD6B2B34_0/d/1/{row}_{column}.jpg",
      "colCount": 5,
      "rowCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_2CDDF16C_3F05_BCFB_41C9_96D6CD6B2B34_0/d/2/{row}_{column}.jpg",
      "colCount": 3,
      "rowCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_2CDDF16C_3F05_BCFB_41C9_96D6CD6B2B34_0/d/3/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_2CDDF16C_3F05_BCFB_41C9_96D6CD6B2B34_0/d/4/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_2B71D357_3F1A_FCD5_41B1_4DA951C1C38C",
  "this.overlay_50F322C2_40CC_7AF6_41BE_8CB08D6E914A",
  "this.overlay_4F786E64_40CC_CDB2_4192_23B8BA91D80A",
  "this.overlay_4B198BA1_4403_447D_41BA_0A37A4653219",
  "this.popup_4BAA126C_4404_C4CB_41D0_100E9E44371A"
 ],
 "thumbnailUrl": "media/panorama_2CDDF16C_3F05_BCFB_41C9_96D6CD6B2B34_t.jpg",
 "id": "panorama_2CDDF16C_3F05_BCFB_41C9_96D6CD6B2B34",
 "label": "dji_mimo_20260518_141924_0_1779111014208_photo",
 "hfovMax": 130,
 "adjacentPanoramas": [
  {
   "yaw": 146.66,
   "class": "AdjacentPanorama",
   "backwardYaw": 19.84,
   "panorama": "this.panorama_2C1DAC6A_3F0A_84FF_41AE_1AF2A5794BA7",
   "distance": 1
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_2C9F3FF5_3F07_83D5_41C5_F20BBAC6A7AF"
  }
 ],
 "hfov": 360,
 "class": "Panorama",
 "pitch": 0,
 "partial": false
},
{
 "levels": [
  {
   "url": "media/popup_5079E6A1_4405_4C7D_41C6_CD878F073210_0_0.jpeg",
   "width": 1048,
   "class": "ImageResourceLevel",
   "height": 932
  },
  {
   "url": "media/popup_5079E6A1_4405_4C7D_41C6_CD878F073210_0_1.jpeg",
   "width": 1024,
   "class": "ImageResourceLevel",
   "height": 910
  },
  {
   "url": "media/popup_5079E6A1_4405_4C7D_41C6_CD878F073210_0_2.jpeg",
   "width": 512,
   "class": "ImageResourceLevel",
   "height": 455
  }
 ],
 "id": "ImageResource_5DA2EC8C_4405_DC4B_41BD_0112D4AFBD1A",
 "class": "ImageResource"
},
{
 "items": [
  {
   "media": "this.video_4AD6C297_4405_4444_41C6_DD45A2A49850",
   "start": "this.viewer_uid4985151D_4573_346E_41B6_4BC605F6F87DVideoPlayer.set('displayPlaybackBar', true); this.changeBackgroundWhilePlay(this.PlayList_4869652D_4573_34AE_41C9_A3D42FC5B1D2, 0, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.PlayList_4869652D_4573_34AE_41C9_A3D42FC5B1D2, 0)",
   "begin": "this.fixTogglePlayPauseButton(this.viewer_uid4985151D_4573_346E_41B6_4BC605F6F87DVideoPlayer)",
   "player": "this.viewer_uid4985151D_4573_346E_41B6_4BC605F6F87DVideoPlayer",
   "class": "VideoPlayListItem"
  }
 ],
 "id": "PlayList_4869652D_4573_34AE_41C9_A3D42FC5B1D2",
 "class": "PlayList"
},
{
 "items": [
  {
   "media": "this.video_52B7FE5D_40CC_4D92_4171_5EBCA969B8AB",
   "start": "this.viewer_uid498E6517_4573_347A_41C0_DD4ABB550B6CVideoPlayer.set('displayPlaybackBar', true); this.changeBackgroundWhilePlay(this.PlayList_4874952B_4573_34AA_41C5_1F72ED4C4DDB, 0, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.PlayList_4874952B_4573_34AA_41C5_1F72ED4C4DDB, 0)",
   "begin": "this.fixTogglePlayPauseButton(this.viewer_uid498E6517_4573_347A_41C0_DD4ABB550B6CVideoPlayer)",
   "player": "this.viewer_uid498E6517_4573_347A_41C0_DD4ABB550B6CVideoPlayer",
   "class": "VideoPlayListItem"
  }
 ],
 "id": "PlayList_4874952B_4573_34AA_41C5_1F72ED4C4DDB",
 "class": "PlayList"
},
{
 "initialPosition": {
  "yaw": -177.34,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "id": "camera_48B21629_4573_3456_41C0_2AD9FF47A3E8",
 "class": "PanoramaCamera"
},
{
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2C3FE972_3F3A_8CEF_41A7_2E37A55F58A4_0/f/0/{row}_{column}.jpg",
      "colCount": 10,
      "rowCount": 10,
      "width": 5120,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 5120
     },
     {
      "url": "media/panorama_2C3FE972_3F3A_8CEF_41A7_2E37A55F58A4_0/f/1/{row}_{column}.jpg",
      "colCount": 5,
      "rowCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_2C3FE972_3F3A_8CEF_41A7_2E37A55F58A4_0/f/2/{row}_{column}.jpg",
      "colCount": 3,
      "rowCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_2C3FE972_3F3A_8CEF_41A7_2E37A55F58A4_0/f/3/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_2C3FE972_3F3A_8CEF_41A7_2E37A55F58A4_0/f/4/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2C3FE972_3F3A_8CEF_41A7_2E37A55F58A4_0/l/0/{row}_{column}.jpg",
      "colCount": 10,
      "rowCount": 10,
      "width": 5120,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 5120
     },
     {
      "url": "media/panorama_2C3FE972_3F3A_8CEF_41A7_2E37A55F58A4_0/l/1/{row}_{column}.jpg",
      "colCount": 5,
      "rowCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_2C3FE972_3F3A_8CEF_41A7_2E37A55F58A4_0/l/2/{row}_{column}.jpg",
      "colCount": 3,
      "rowCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_2C3FE972_3F3A_8CEF_41A7_2E37A55F58A4_0/l/3/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_2C3FE972_3F3A_8CEF_41A7_2E37A55F58A4_0/l/4/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2C3FE972_3F3A_8CEF_41A7_2E37A55F58A4_0/u/0/{row}_{column}.jpg",
      "colCount": 10,
      "rowCount": 10,
      "width": 5120,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 5120
     },
     {
      "url": "media/panorama_2C3FE972_3F3A_8CEF_41A7_2E37A55F58A4_0/u/1/{row}_{column}.jpg",
      "colCount": 5,
      "rowCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_2C3FE972_3F3A_8CEF_41A7_2E37A55F58A4_0/u/2/{row}_{column}.jpg",
      "colCount": 3,
      "rowCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_2C3FE972_3F3A_8CEF_41A7_2E37A55F58A4_0/u/3/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_2C3FE972_3F3A_8CEF_41A7_2E37A55F58A4_0/u/4/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2C3FE972_3F3A_8CEF_41A7_2E37A55F58A4_0/r/0/{row}_{column}.jpg",
      "colCount": 10,
      "rowCount": 10,
      "width": 5120,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 5120
     },
     {
      "url": "media/panorama_2C3FE972_3F3A_8CEF_41A7_2E37A55F58A4_0/r/1/{row}_{column}.jpg",
      "colCount": 5,
      "rowCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_2C3FE972_3F3A_8CEF_41A7_2E37A55F58A4_0/r/2/{row}_{column}.jpg",
      "colCount": 3,
      "rowCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_2C3FE972_3F3A_8CEF_41A7_2E37A55F58A4_0/r/3/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_2C3FE972_3F3A_8CEF_41A7_2E37A55F58A4_0/r/4/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2C3FE972_3F3A_8CEF_41A7_2E37A55F58A4_0/b/0/{row}_{column}.jpg",
      "colCount": 10,
      "rowCount": 10,
      "width": 5120,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 5120
     },
     {
      "url": "media/panorama_2C3FE972_3F3A_8CEF_41A7_2E37A55F58A4_0/b/1/{row}_{column}.jpg",
      "colCount": 5,
      "rowCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_2C3FE972_3F3A_8CEF_41A7_2E37A55F58A4_0/b/2/{row}_{column}.jpg",
      "colCount": 3,
      "rowCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_2C3FE972_3F3A_8CEF_41A7_2E37A55F58A4_0/b/3/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_2C3FE972_3F3A_8CEF_41A7_2E37A55F58A4_0/b/4/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_2C3FE972_3F3A_8CEF_41A7_2E37A55F58A4_t.jpg",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2C3FE972_3F3A_8CEF_41A7_2E37A55F58A4_0/d/0/{row}_{column}.jpg",
      "colCount": 10,
      "rowCount": 10,
      "width": 5120,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 5120
     },
     {
      "url": "media/panorama_2C3FE972_3F3A_8CEF_41A7_2E37A55F58A4_0/d/1/{row}_{column}.jpg",
      "colCount": 5,
      "rowCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_2C3FE972_3F3A_8CEF_41A7_2E37A55F58A4_0/d/2/{row}_{column}.jpg",
      "colCount": 3,
      "rowCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_2C3FE972_3F3A_8CEF_41A7_2E37A55F58A4_0/d/3/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_2C3FE972_3F3A_8CEF_41A7_2E37A55F58A4_0/d/4/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_2A4EE3D0_3F0E_9C2B_41C2_7CC4DD92460C",
  "this.overlay_51E4BEA4_40C4_4AB2_41CC_3523E879AAE2",
  "this.overlay_51986D60_440F_7CFB_41BB_EAE47B830B5B",
  "this.popup_51EC793B_440F_444D_41C0_036185B2EAE6"
 ],
 "thumbnailUrl": "media/panorama_2C3FE972_3F3A_8CEF_41A7_2E37A55F58A4_t.jpg",
 "id": "panorama_2C3FE972_3F3A_8CEF_41A7_2E37A55F58A4",
 "label": "dji_mimo_20260518_141134_0_1779110926096_photo",
 "hfovMax": 130,
 "adjacentPanoramas": [
  {
   "yaw": 9.61,
   "class": "AdjacentPanorama",
   "backwardYaw": 118.43,
   "panorama": "this.panorama_2DC7EF70_3F0B_84EB_41A3_4012598CD21E",
   "distance": 1
  }
 ],
 "hfov": 360,
 "class": "Panorama",
 "pitch": 0,
 "partial": false
},
{
 "thumbnailUrl": "media/video_52B7FE5D_40CC_4D92_4171_5EBCA969B8AB_t.jpg",
 "scaleMode": "fit_inside",
 "width": 1440,
 "loop": false,
 "id": "video_52B7FE5D_40CC_4D92_4171_5EBCA969B8AB",
 "label": "AREA PARKIR DONE",
 "class": "Video",
 "height": 1080,
 "video": {
  "width": 1440,
  "mp4Url": "media/video_52B7FE5D_40CC_4D92_4171_5EBCA969B8AB.mp4",
  "class": "VideoResource",
  "height": 1080
 }
},
{
 "initialPosition": {
  "yaw": 6.45,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "id": "camera_4B6D5671_4573_34B6_41AE_48571DE1CE4F",
 "class": "PanoramaCamera"
},
{
 "closeButtonBorderColor": "#000000",
 "id": "window_4F08E6C1_4573_F5D6_41AD_A1F8A41FDF91",
 "backgroundOpacity": 1,
 "paddingLeft": 0,
 "closeButtonBackgroundColorDirection": "vertical",
 "closeButtonIconHeight": 20,
 "overflow": "scroll",
 "scrollBarMargin": 2,
 "footerBackgroundColorDirection": "vertical",
 "closeButtonRollOverBackgroundColor": [
  "#DDDDDD",
  "#EEEEEE",
  "#FFFFFF"
 ],
 "titlePaddingRight": 5,
 "titlePaddingTop": 5,
 "closeButtonRollOverIconLineWidth": 5,
 "minHeight": 20,
 "modal": true,
 "propagateClick": false,
 "shadowHorizontalLength": 3,
 "scrollBarWidth": 10,
 "closeButtonPressedBackgroundColorRatios": [
  0,
  0.1,
  1
 ],
 "verticalAlign": "middle",
 "footerBackgroundColor": [
  "#FFFFFF",
  "#EEEEEE",
  "#DDDDDD"
 ],
 "showEffect": {
  "duration": 500,
  "class": "FadeInEffect",
  "easing": "cubic_in_out"
 },
 "closeButtonRollOverBorderSize": 0,
 "shadowVerticalLength": 0,
 "minWidth": 20,
 "closeButtonRollOverBorderColor": "#000000",
 "footerBackgroundColorRatios": [
  0,
  0.9,
  1
 ],
 "titlePaddingBottom": 5,
 "bodyBackgroundOpacity": 0,
 "backgroundColor": [],
 "borderSize": 0,
 "closeButtonPressedBackgroundOpacity": 0.3,
 "headerPaddingRight": 0,
 "bodyBackgroundColor": [
  "#FFFFFF",
  "#DDDDDD",
  "#FFFFFF"
 ],
 "headerPaddingLeft": 10,
 "bodyPaddingLeft": 0,
 "class": "Window",
 "backgroundColorDirection": "vertical",
 "footerHeight": 5,
 "contentOpaque": false,
 "shadow": true,
 "headerBackgroundOpacity": 0,
 "scrollBarColor": "#000000",
 "closeButtonPressedIconLineWidth": 5,
 "veilShowEffect": {
  "duration": 500,
  "class": "FadeInEffect",
  "easing": "cubic_in_out"
 },
 "headerBackgroundColor": [
  "#DDDDDD",
  "#EEEEEE",
  "#FFFFFF"
 ],
 "closeButtonPaddingRight": 5,
 "shadowBlurRadius": 6,
 "bodyBackgroundColorRatios": [
  0,
  0.5,
  1
 ],
 "closeButtonBackgroundColorRatios": [
  0,
  0.1,
  1
 ],
 "scrollBarOpacity": 0.5,
 "closeButtonIconLineWidth": 5,
 "closeButtonPaddingLeft": 5,
 "bodyPaddingTop": 0,
 "veilColor": [
  "#000000",
  "#000000"
 ],
 "closeButtonBorderRadius": 0,
 "children": [
  "this.viewer_uid4981951A_4573_346A_41BF_8EC7143DAE5F"
 ],
 "scrollBarVisible": "rollOver",
 "paddingRight": 0,
 "shadowOpacity": 0.5,
 "shadowColor": "#000000",
 "borderRadius": 5,
 "veilColorRatios": [
  0,
  1
 ],
 "closeButtonRollOverIconColor": "#666666",
 "bodyBackgroundColorDirection": "vertical",
 "headerPaddingTop": 10,
 "titleFontSize": "1.29vmin",
 "backgroundColorRatios": [],
 "closeButtonBorderSize": 0,
 "closeButtonPaddingBottom": 5,
 "veilHideEffect": {
  "duration": 500,
  "class": "FadeOutEffect",
  "easing": "cubic_in_out"
 },
 "headerBackgroundColorRatios": [
  0,
  0.1,
  1
 ],
 "headerPaddingBottom": 5,
 "closeButtonPressedBorderColor": "#000000",
 "footerBackgroundOpacity": 0,
 "closeButtonPressedBackgroundColorDirection": "vertical",
 "hideEffect": {
  "duration": 500,
  "class": "FadeOutEffect",
  "easing": "cubic_in_out"
 },
 "closeButtonPressedIconColor": "#888888",
 "closeButtonIconWidth": 20,
 "veilOpacity": 0.4,
 "closeButtonRollOverBackgroundOpacity": 0.3,
 "closeButtonPressedBackgroundColor": [
  "#DDDDDD",
  "#EEEEEE",
  "#FFFFFF"
 ],
 "gap": 10,
 "closeButtonRollOverBackgroundColorRatios": [
  0,
  0.1,
  1
 ],
 "closeButtonBackgroundOpacity": 0.3,
 "layout": "vertical",
 "titlePaddingLeft": 5,
 "paddingTop": 0,
 "closeButtonPaddingTop": 5,
 "closeButtonIconColor": "#000000",
 "bodyPaddingBottom": 0,
 "paddingBottom": 0,
 "headerVerticalAlign": "middle",
 "closeButtonRollOverBackgroundColorDirection": "vertical",
 "bodyPaddingRight": 0,
 "horizontalAlign": "center",
 "closeButtonPressedBorderSize": 0,
 "headerBackgroundColorDirection": "vertical",
 "data": {
  "name": "Window353"
 },
 "shadowSpread": 1,
 "closeButtonBackgroundColor": [
  "#DDDDDD",
  "#EEEEEE",
  "#FFFFFF"
 ],
 "titleFontFamily": "Arial"
},
{
 "initialPosition": {
  "yaw": 88.73,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "id": "camera_48E025F2_4573_37BB_419A_3333A65F1C49",
 "class": "PanoramaCamera"
},
{
 "initialPosition": {
  "yaw": -166.73,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "id": "camera_4B2816AB_4573_35AA_41C1_FF23C0371BF2",
 "class": "PanoramaCamera"
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_34984BC9_3EFB_8C3D_41AC_376559BB2588_camera",
 "class": "PanoramaCamera"
},
{
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2C9F3FF5_3F07_83D5_41C5_F20BBAC6A7AF_0/f/0/{row}_{column}.jpg",
      "colCount": 10,
      "rowCount": 10,
      "width": 5120,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 5120
     },
     {
      "url": "media/panorama_2C9F3FF5_3F07_83D5_41C5_F20BBAC6A7AF_0/f/1/{row}_{column}.jpg",
      "colCount": 5,
      "rowCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_2C9F3FF5_3F07_83D5_41C5_F20BBAC6A7AF_0/f/2/{row}_{column}.jpg",
      "colCount": 3,
      "rowCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_2C9F3FF5_3F07_83D5_41C5_F20BBAC6A7AF_0/f/3/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_2C9F3FF5_3F07_83D5_41C5_F20BBAC6A7AF_0/f/4/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2C9F3FF5_3F07_83D5_41C5_F20BBAC6A7AF_0/l/0/{row}_{column}.jpg",
      "colCount": 10,
      "rowCount": 10,
      "width": 5120,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 5120
     },
     {
      "url": "media/panorama_2C9F3FF5_3F07_83D5_41C5_F20BBAC6A7AF_0/l/1/{row}_{column}.jpg",
      "colCount": 5,
      "rowCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_2C9F3FF5_3F07_83D5_41C5_F20BBAC6A7AF_0/l/2/{row}_{column}.jpg",
      "colCount": 3,
      "rowCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_2C9F3FF5_3F07_83D5_41C5_F20BBAC6A7AF_0/l/3/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_2C9F3FF5_3F07_83D5_41C5_F20BBAC6A7AF_0/l/4/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2C9F3FF5_3F07_83D5_41C5_F20BBAC6A7AF_0/u/0/{row}_{column}.jpg",
      "colCount": 10,
      "rowCount": 10,
      "width": 5120,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 5120
     },
     {
      "url": "media/panorama_2C9F3FF5_3F07_83D5_41C5_F20BBAC6A7AF_0/u/1/{row}_{column}.jpg",
      "colCount": 5,
      "rowCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_2C9F3FF5_3F07_83D5_41C5_F20BBAC6A7AF_0/u/2/{row}_{column}.jpg",
      "colCount": 3,
      "rowCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_2C9F3FF5_3F07_83D5_41C5_F20BBAC6A7AF_0/u/3/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_2C9F3FF5_3F07_83D5_41C5_F20BBAC6A7AF_0/u/4/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2C9F3FF5_3F07_83D5_41C5_F20BBAC6A7AF_0/r/0/{row}_{column}.jpg",
      "colCount": 10,
      "rowCount": 10,
      "width": 5120,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 5120
     },
     {
      "url": "media/panorama_2C9F3FF5_3F07_83D5_41C5_F20BBAC6A7AF_0/r/1/{row}_{column}.jpg",
      "colCount": 5,
      "rowCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_2C9F3FF5_3F07_83D5_41C5_F20BBAC6A7AF_0/r/2/{row}_{column}.jpg",
      "colCount": 3,
      "rowCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_2C9F3FF5_3F07_83D5_41C5_F20BBAC6A7AF_0/r/3/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_2C9F3FF5_3F07_83D5_41C5_F20BBAC6A7AF_0/r/4/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2C9F3FF5_3F07_83D5_41C5_F20BBAC6A7AF_0/b/0/{row}_{column}.jpg",
      "colCount": 10,
      "rowCount": 10,
      "width": 5120,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 5120
     },
     {
      "url": "media/panorama_2C9F3FF5_3F07_83D5_41C5_F20BBAC6A7AF_0/b/1/{row}_{column}.jpg",
      "colCount": 5,
      "rowCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_2C9F3FF5_3F07_83D5_41C5_F20BBAC6A7AF_0/b/2/{row}_{column}.jpg",
      "colCount": 3,
      "rowCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_2C9F3FF5_3F07_83D5_41C5_F20BBAC6A7AF_0/b/3/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_2C9F3FF5_3F07_83D5_41C5_F20BBAC6A7AF_0/b/4/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_2C9F3FF5_3F07_83D5_41C5_F20BBAC6A7AF_t.jpg",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2C9F3FF5_3F07_83D5_41C5_F20BBAC6A7AF_0/d/0/{row}_{column}.jpg",
      "colCount": 10,
      "rowCount": 10,
      "width": 5120,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 5120
     },
     {
      "url": "media/panorama_2C9F3FF5_3F07_83D5_41C5_F20BBAC6A7AF_0/d/1/{row}_{column}.jpg",
      "colCount": 5,
      "rowCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_2C9F3FF5_3F07_83D5_41C5_F20BBAC6A7AF_0/d/2/{row}_{column}.jpg",
      "colCount": 3,
      "rowCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_2C9F3FF5_3F07_83D5_41C5_F20BBAC6A7AF_0/d/3/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_2C9F3FF5_3F07_83D5_41C5_F20BBAC6A7AF_0/d/4/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_28004497_3F1A_8454_41A9_A98197CAD210",
  "this.overlay_50E2239B_40DC_5A96_41C3_BC405056F893",
  "this.overlay_505159F7_40DC_769D_4171_1A78E91CE618",
  "this.overlay_550DD0ED_4407_C5C5_41C3_915226C4D0AF",
  "this.overlay_555C67BC_4404_CC4B_41C6_F1CB370E3C8E",
  "this.overlay_552DA875_4404_C4C5_41CA_1C34331B3F28",
  "this.popup_5563E91D_4405_C445_419B_1241E88A1AC9",
  "this.popup_55A76C05_4405_3C45_4186_3ACF2B33DF5E"
 ],
 "thumbnailUrl": "media/panorama_2C9F3FF5_3F07_83D5_41C5_F20BBAC6A7AF_t.jpg",
 "id": "panorama_2C9F3FF5_3F07_83D5_41C5_F20BBAC6A7AF",
 "label": "dji_mimo_20260518_141652_0_1779110958634_photo",
 "hfovMax": 130,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_2C1DAC6A_3F0A_84FF_41AE_1AF2A5794BA7"
  },
  {
   "yaw": 164.25,
   "class": "AdjacentPanorama",
   "backwardYaw": -174.68,
   "panorama": "this.panorama_2DC7EF70_3F0B_84EB_41A3_4012598CD21E",
   "distance": 1
  }
 ],
 "hfov": 360,
 "class": "Panorama",
 "pitch": 0,
 "partial": false
},
{
 "duration": 5000,
 "thumbnailUrl": "media/album_3352DF70_3EFD_84EB_41C0_4B97F6ADD645_0_t.jpg",
 "id": "album_3352DF70_3EFD_84EB_41C0_4B97F6ADD645_0",
 "width": 15520,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "class": "ImageResourceLevel",
    "url": "media/album_3352DF70_3EFD_84EB_41C0_4B97F6ADD645_0.jpg"
   }
  ]
 },
 "label": "rusun depan",
 "class": "Photo",
 "height": 7760
},
{
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2C1DAC6A_3F0A_84FF_41AE_1AF2A5794BA7_0/f/0/{row}_{column}.jpg",
      "colCount": 10,
      "rowCount": 10,
      "width": 5120,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 5120
     },
     {
      "url": "media/panorama_2C1DAC6A_3F0A_84FF_41AE_1AF2A5794BA7_0/f/1/{row}_{column}.jpg",
      "colCount": 5,
      "rowCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_2C1DAC6A_3F0A_84FF_41AE_1AF2A5794BA7_0/f/2/{row}_{column}.jpg",
      "colCount": 3,
      "rowCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_2C1DAC6A_3F0A_84FF_41AE_1AF2A5794BA7_0/f/3/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_2C1DAC6A_3F0A_84FF_41AE_1AF2A5794BA7_0/f/4/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2C1DAC6A_3F0A_84FF_41AE_1AF2A5794BA7_0/l/0/{row}_{column}.jpg",
      "colCount": 10,
      "rowCount": 10,
      "width": 5120,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 5120
     },
     {
      "url": "media/panorama_2C1DAC6A_3F0A_84FF_41AE_1AF2A5794BA7_0/l/1/{row}_{column}.jpg",
      "colCount": 5,
      "rowCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_2C1DAC6A_3F0A_84FF_41AE_1AF2A5794BA7_0/l/2/{row}_{column}.jpg",
      "colCount": 3,
      "rowCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_2C1DAC6A_3F0A_84FF_41AE_1AF2A5794BA7_0/l/3/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_2C1DAC6A_3F0A_84FF_41AE_1AF2A5794BA7_0/l/4/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2C1DAC6A_3F0A_84FF_41AE_1AF2A5794BA7_0/u/0/{row}_{column}.jpg",
      "colCount": 10,
      "rowCount": 10,
      "width": 5120,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 5120
     },
     {
      "url": "media/panorama_2C1DAC6A_3F0A_84FF_41AE_1AF2A5794BA7_0/u/1/{row}_{column}.jpg",
      "colCount": 5,
      "rowCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_2C1DAC6A_3F0A_84FF_41AE_1AF2A5794BA7_0/u/2/{row}_{column}.jpg",
      "colCount": 3,
      "rowCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_2C1DAC6A_3F0A_84FF_41AE_1AF2A5794BA7_0/u/3/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_2C1DAC6A_3F0A_84FF_41AE_1AF2A5794BA7_0/u/4/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2C1DAC6A_3F0A_84FF_41AE_1AF2A5794BA7_0/r/0/{row}_{column}.jpg",
      "colCount": 10,
      "rowCount": 10,
      "width": 5120,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 5120
     },
     {
      "url": "media/panorama_2C1DAC6A_3F0A_84FF_41AE_1AF2A5794BA7_0/r/1/{row}_{column}.jpg",
      "colCount": 5,
      "rowCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_2C1DAC6A_3F0A_84FF_41AE_1AF2A5794BA7_0/r/2/{row}_{column}.jpg",
      "colCount": 3,
      "rowCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_2C1DAC6A_3F0A_84FF_41AE_1AF2A5794BA7_0/r/3/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_2C1DAC6A_3F0A_84FF_41AE_1AF2A5794BA7_0/r/4/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2C1DAC6A_3F0A_84FF_41AE_1AF2A5794BA7_0/b/0/{row}_{column}.jpg",
      "colCount": 10,
      "rowCount": 10,
      "width": 5120,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 5120
     },
     {
      "url": "media/panorama_2C1DAC6A_3F0A_84FF_41AE_1AF2A5794BA7_0/b/1/{row}_{column}.jpg",
      "colCount": 5,
      "rowCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_2C1DAC6A_3F0A_84FF_41AE_1AF2A5794BA7_0/b/2/{row}_{column}.jpg",
      "colCount": 3,
      "rowCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_2C1DAC6A_3F0A_84FF_41AE_1AF2A5794BA7_0/b/3/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_2C1DAC6A_3F0A_84FF_41AE_1AF2A5794BA7_0/b/4/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_2C1DAC6A_3F0A_84FF_41AE_1AF2A5794BA7_t.jpg",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2C1DAC6A_3F0A_84FF_41AE_1AF2A5794BA7_0/d/0/{row}_{column}.jpg",
      "colCount": 10,
      "rowCount": 10,
      "width": 5120,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 5120
     },
     {
      "url": "media/panorama_2C1DAC6A_3F0A_84FF_41AE_1AF2A5794BA7_0/d/1/{row}_{column}.jpg",
      "colCount": 5,
      "rowCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_2C1DAC6A_3F0A_84FF_41AE_1AF2A5794BA7_0/d/2/{row}_{column}.jpg",
      "colCount": 3,
      "rowCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_2C1DAC6A_3F0A_84FF_41AE_1AF2A5794BA7_0/d/3/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_2C1DAC6A_3F0A_84FF_41AE_1AF2A5794BA7_0/d/4/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_283F4790_3F0A_842B_41C9_0E0EE918E3DB",
  "this.overlay_5048CEE3_40C5_CAB6_4179_15BD8DF3C18A",
  "this.overlay_4F1F22D4_40C4_5A92_41BD_A6CA20B7BA1E",
  "this.overlay_4AC911F6_440F_C7C7_41CB_B99A81BFBE1C",
  "this.popup_4B330F4D_440F_DCC4_41CA_B83A4EC75720"
 ],
 "thumbnailUrl": "media/panorama_2C1DAC6A_3F0A_84FF_41AE_1AF2A5794BA7_t.jpg",
 "id": "panorama_2C1DAC6A_3F0A_84FF_41AE_1AF2A5794BA7",
 "label": "dji_mimo_20260518_142418_0_1779111024031_photo",
 "hfovMax": 130,
 "adjacentPanoramas": [
  {
   "yaw": 19.84,
   "class": "AdjacentPanorama",
   "backwardYaw": 146.66,
   "panorama": "this.panorama_2CDDF16C_3F05_BCFB_41C9_96D6CD6B2B34",
   "distance": 1
  },
  {
   "yaw": 159.75,
   "class": "AdjacentPanorama",
   "backwardYaw": 171.41,
   "panorama": "this.panorama_2B2F1C70_3F0B_84EB_4178_787A635D8E70",
   "distance": 1
  }
 ],
 "hfov": 360,
 "class": "Panorama",
 "pitch": 0,
 "partial": false
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_3340DE24_3EFF_846B_41BA_156D465E8DB5_camera",
 "class": "PanoramaCamera"
},
{
 "initialPosition": {
  "yaw": -171.61,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "id": "camera_4B5EA680_4573_3456_41C4_44713D5D9794",
 "class": "PanoramaCamera"
},
{
 "closeButtonBorderColor": "#000000",
 "id": "window_4F0636B5_4573_F5BE_41C2_03AFED4324EA",
 "backgroundOpacity": 1,
 "paddingLeft": 0,
 "closeButtonBackgroundColorDirection": "vertical",
 "closeButtonIconHeight": 20,
 "overflow": "scroll",
 "scrollBarMargin": 2,
 "footerBackgroundColorDirection": "vertical",
 "closeButtonRollOverBackgroundColor": [
  "#DDDDDD",
  "#EEEEEE",
  "#FFFFFF"
 ],
 "titlePaddingRight": 5,
 "titlePaddingTop": 5,
 "closeButtonRollOverIconLineWidth": 5,
 "minHeight": 20,
 "modal": true,
 "propagateClick": false,
 "shadowHorizontalLength": 3,
 "scrollBarWidth": 10,
 "closeButtonPressedBackgroundColorRatios": [
  0,
  0.1,
  1
 ],
 "verticalAlign": "middle",
 "footerBackgroundColor": [
  "#FFFFFF",
  "#EEEEEE",
  "#DDDDDD"
 ],
 "showEffect": {
  "duration": 500,
  "class": "FadeInEffect",
  "easing": "cubic_in_out"
 },
 "closeButtonRollOverBorderSize": 0,
 "shadowVerticalLength": 0,
 "minWidth": 20,
 "closeButtonRollOverBorderColor": "#000000",
 "footerBackgroundColorRatios": [
  0,
  0.9,
  1
 ],
 "titlePaddingBottom": 5,
 "bodyBackgroundOpacity": 0,
 "backgroundColor": [],
 "borderSize": 0,
 "closeButtonPressedBackgroundOpacity": 0.3,
 "headerPaddingRight": 0,
 "bodyBackgroundColor": [
  "#FFFFFF",
  "#DDDDDD",
  "#FFFFFF"
 ],
 "headerPaddingLeft": 10,
 "bodyPaddingLeft": 0,
 "class": "Window",
 "backgroundColorDirection": "vertical",
 "footerHeight": 5,
 "contentOpaque": false,
 "shadow": true,
 "headerBackgroundOpacity": 0,
 "scrollBarColor": "#000000",
 "closeButtonPressedIconLineWidth": 5,
 "veilShowEffect": {
  "duration": 500,
  "class": "FadeInEffect",
  "easing": "cubic_in_out"
 },
 "headerBackgroundColor": [
  "#DDDDDD",
  "#EEEEEE",
  "#FFFFFF"
 ],
 "closeButtonPaddingRight": 5,
 "shadowBlurRadius": 6,
 "bodyBackgroundColorRatios": [
  0,
  0.5,
  1
 ],
 "closeButtonBackgroundColorRatios": [
  0,
  0.1,
  1
 ],
 "scrollBarOpacity": 0.5,
 "closeButtonIconLineWidth": 5,
 "closeButtonPaddingLeft": 5,
 "bodyPaddingTop": 0,
 "veilColor": [
  "#000000",
  "#000000"
 ],
 "closeButtonBorderRadius": 0,
 "children": [
  "this.viewer_uid49978512_4573_347A_41B0_99B31C16E52A"
 ],
 "scrollBarVisible": "rollOver",
 "paddingRight": 0,
 "shadowOpacity": 0.5,
 "shadowColor": "#000000",
 "borderRadius": 5,
 "veilColorRatios": [
  0,
  1
 ],
 "closeButtonRollOverIconColor": "#666666",
 "bodyBackgroundColorDirection": "vertical",
 "headerPaddingTop": 10,
 "titleFontSize": "1.29vmin",
 "backgroundColorRatios": [],
 "closeButtonBorderSize": 0,
 "closeButtonPaddingBottom": 5,
 "veilHideEffect": {
  "duration": 500,
  "class": "FadeOutEffect",
  "easing": "cubic_in_out"
 },
 "headerBackgroundColorRatios": [
  0,
  0.1,
  1
 ],
 "headerPaddingBottom": 5,
 "closeButtonPressedBorderColor": "#000000",
 "footerBackgroundOpacity": 0,
 "closeButtonPressedBackgroundColorDirection": "vertical",
 "hideEffect": {
  "duration": 500,
  "class": "FadeOutEffect",
  "easing": "cubic_in_out"
 },
 "closeButtonPressedIconColor": "#888888",
 "closeButtonIconWidth": 20,
 "veilOpacity": 0.4,
 "closeButtonRollOverBackgroundOpacity": 0.3,
 "closeButtonPressedBackgroundColor": [
  "#DDDDDD",
  "#EEEEEE",
  "#FFFFFF"
 ],
 "gap": 10,
 "closeButtonRollOverBackgroundColorRatios": [
  0,
  0.1,
  1
 ],
 "closeButtonBackgroundOpacity": 0.3,
 "layout": "vertical",
 "titlePaddingLeft": 5,
 "paddingTop": 0,
 "closeButtonPaddingTop": 5,
 "closeButtonIconColor": "#000000",
 "bodyPaddingBottom": 0,
 "paddingBottom": 0,
 "headerVerticalAlign": "middle",
 "closeButtonRollOverBackgroundColorDirection": "vertical",
 "bodyPaddingRight": 0,
 "horizontalAlign": "center",
 "closeButtonPressedBorderSize": 0,
 "headerBackgroundColorDirection": "vertical",
 "data": {
  "name": "Window347"
 },
 "shadowSpread": 1,
 "closeButtonBackgroundColor": [
  "#DDDDDD",
  "#EEEEEE",
  "#FFFFFF"
 ],
 "titleFontFamily": "Arial"
},
{
 "progressBarBorderSize": 0,
 "id": "MainViewer",
 "paddingLeft": 0,
 "playbackBarProgressBorderRadius": 0,
 "progressBarBorderRadius": 0,
 "toolTipShadowOpacity": 1,
 "width": "100%",
 "playbackBarBorderRadius": 0,
 "toolTipFontStyle": "normal",
 "minHeight": 50,
 "playbackBarProgressBorderColor": "#000000",
 "toolTipFontFamily": "Arial",
 "playbackBarHeadBorderColor": "#000000",
 "toolTipTextShadowOpacity": 0,
 "playbackBarHeadBorderRadius": 0,
 "progressLeft": 0,
 "propagateClick": false,
 "playbackBarHeadBorderSize": 0,
 "playbackBarProgressOpacity": 1,
 "minWidth": 100,
 "playbackBarBorderSize": 0,
 "toolTipShadowVerticalLength": 0,
 "vrPointerSelectionColor": "#FF6600",
 "playbackBarBackgroundOpacity": 1,
 "toolTipFontColor": "#606060",
 "transitionDuration": 500,
 "toolTipBackgroundColor": "#F6F6F6",
 "height": "100%",
 "playbackBarHeadShadowColor": "#000000",
 "borderSize": 0,
 "progressRight": 0,
 "toolTipShadowHorizontalLength": 0,
 "firstTransitionDuration": 0,
 "class": "ViewerArea",
 "playbackBarHeadBackgroundColor": [
  "#111111",
  "#666666"
 ],
 "vrPointerSelectionTime": 2000,
 "progressBarBackgroundColorDirection": "vertical",
 "playbackBarHeadShadowHorizontalLength": 0,
 "progressOpacity": 1,
 "shadow": false,
 "progressHeight": 10,
 "playbackBarHeadShadow": true,
 "progressBottom": 0,
 "playbackBarHeadBackgroundColorDirection": "vertical",
 "progressBackgroundOpacity": 1,
 "playbackBarProgressBackgroundColor": [
  "#3399FF"
 ],
 "playbackBarOpacity": 1,
 "toolTipPaddingRight": 6,
 "playbackBarHeadShadowOpacity": 0.7,
 "toolTipBorderSize": 1,
 "toolTipPaddingLeft": 6,
 "toolTipPaddingTop": 4,
 "vrPointerColor": "#FFFFFF",
 "toolTipDisplayTime": 600,
 "progressBarOpacity": 1,
 "playbackBarBorderColor": "#FFFFFF",
 "paddingRight": 0,
 "transitionMode": "blending",
 "displayTooltipInTouchScreens": true,
 "progressBorderSize": 0,
 "toolTipBorderRadius": 3,
 "borderRadius": 0,
 "progressBorderRadius": 0,
 "playbackBarHeadShadowVerticalLength": 0,
 "playbackBarProgressBackgroundColorRatios": [
  0
 ],
 "playbackBarLeft": 0,
 "progressBackgroundColorRatios": [
  0
 ],
 "playbackBarHeadHeight": 15,
 "playbackBarHeadShadowBlurRadius": 3,
 "playbackBarHeadBackgroundColorRatios": [
  0,
  1
 ],
 "progressBarBorderColor": "#000000",
 "toolTipBorderColor": "#767676",
 "progressBarBackgroundColorRatios": [
  0
 ],
 "progressBackgroundColorDirection": "vertical",
 "toolTipShadowSpread": 0,
 "toolTipShadowBlurRadius": 3,
 "playbackBarBottom": 5,
 "toolTipTextShadowColor": "#000000",
 "toolTipOpacity": 1,
 "playbackBarHeadOpacity": 1,
 "progressBarBackgroundColor": [
  "#3399FF"
 ],
 "paddingTop": 0,
 "progressBorderColor": "#000000",
 "toolTipPaddingBottom": 4,
 "toolTipFontSize": "1.11vmin",
 "toolTipTextShadowBlurRadius": 3,
 "progressBackgroundColor": [
  "#FFFFFF"
 ],
 "paddingBottom": 0,
 "playbackBarProgressBackgroundColorDirection": "vertical",
 "toolTipShadowColor": "#333333",
 "playbackBarBackgroundColor": [
  "#FFFFFF"
 ],
 "data": {
  "name": "Main Viewer"
 },
 "playbackBarHeight": 10,
 "playbackBarHeadWidth": 6,
 "playbackBarBackgroundColorDirection": "vertical",
 "toolTipFontWeight": "normal",
 "playbackBarProgressBorderSize": 0,
 "playbackBarRight": 0
},
{
 "id": "veilPopupPanorama",
 "left": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "backgroundOpacity": 0.55,
 "right": 0,
 "borderRadius": 0,
 "minHeight": 0,
 "backgroundColorRatios": [
  0
 ],
 "propagateClick": false,
 "top": 0,
 "showEffect": {
  "duration": 350,
  "class": "FadeInEffect",
  "easing": "cubic_in_out"
 },
 "bottom": 0,
 "minWidth": 0,
 "backgroundColor": [
  "#000000"
 ],
 "borderSize": 0,
 "backgroundColorDirection": "vertical",
 "class": "UIComponent",
 "paddingBottom": 0,
 "shadow": false,
 "data": {
  "name": "UIComponent1307"
 },
 "paddingTop": 0,
 "visible": false
},
{
 "id": "zoomImagePopupPanorama",
 "left": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "backgroundOpacity": 1,
 "right": 0,
 "borderRadius": 0,
 "minHeight": 0,
 "backgroundColorRatios": [],
 "propagateClick": false,
 "top": 0,
 "bottom": 0,
 "minWidth": 0,
 "backgroundColor": [],
 "borderSize": 0,
 "backgroundColorDirection": "vertical",
 "class": "ZoomImage",
 "paddingBottom": 0,
 "shadow": false,
 "scaleMode": "custom",
 "data": {
  "name": "ZoomImage1308"
 },
 "paddingTop": 0,
 "visible": false
},
{
 "textDecoration": "none",
 "fontFamily": "Arial",
 "id": "closeButtonPopupPanorama",
 "backgroundOpacity": 0.3,
 "paddingLeft": 5,
 "paddingRight": 5,
 "right": 10,
 "iconHeight": 20,
 "shadowColor": "#000000",
 "borderRadius": 0,
 "minHeight": 0,
 "layout": "horizontal",
 "iconColor": "#000000",
 "backgroundColorRatios": [
  0,
  0.1,
  1
 ],
 "propagateClick": false,
 "top": 10,
 "verticalAlign": "middle",
 "rollOverIconColor": "#666666",
 "showEffect": {
  "duration": 350,
  "class": "FadeInEffect",
  "easing": "cubic_in_out"
 },
 "pressedIconColor": "#888888",
 "iconBeforeLabel": true,
 "minWidth": 0,
 "borderColor": "#000000",
 "mode": "push",
 "backgroundColor": [
  "#DDDDDD",
  "#EEEEEE",
  "#FFFFFF"
 ],
 "fontSize": "1.29vmin",
 "borderSize": 0,
 "backgroundColorDirection": "vertical",
 "label": "",
 "fontStyle": "normal",
 "class": "CloseButton",
 "iconLineWidth": 5,
 "paddingBottom": 5,
 "gap": 5,
 "shadow": false,
 "horizontalAlign": "center",
 "data": {
  "name": "CloseButton1309"
 },
 "paddingTop": 5,
 "iconWidth": 20,
 "visible": false,
 "shadowBlurRadius": 6,
 "shadowSpread": 1,
 "cursor": "hand",
 "fontColor": "#FFFFFF",
 "fontWeight": "normal"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 91.22,
   "yaw": -93.93,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2B2F1C70_3F0B_84EB_4178_787A635D8E70_0_HS_0_0_map.gif",
      "width": 29,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": 14.86
  }
 ],
 "data": {
  "label": "AREA PERTANIAN, KEBUN, DAN AGROTECHNOPARK"
 },
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2B2F1C70_3F0B_84EB_4178_787A635D8E70_0_HS_0_0.png",
      "width": 2048,
      "class": "ImageResourceLevel",
      "height": 1093
     }
    ]
   },
   "pitch": 14.86,
   "hfov": 91.22,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": -93.93,
   "distance": 50
  }
 ],
 "id": "overlay_2C86E8C1_3F0A_8C2D_41C8_AEE2EC672315",
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 16.04,
   "yaw": 171.41,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2B2F1C70_3F0B_84EB_4178_787A635D8E70_0_HS_1_0_0_map.gif",
      "width": 29,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -21.05
  }
 ],
 "data": {
  "label": "Arrow 01a"
 },
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_2C1DAC6A_3F0A_84FF_41AE_1AF2A5794BA7, this.camera_488D3654_4573_34FE_41BB_A01BD0F533EB); this.mainPlayList.set('selectedIndex', 9)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_52257D97_40BC_4E9E_41BC_9FE475ECCAC3",
   "pitch": -21.05,
   "hfov": 16.04,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": 171.41,
   "distance": 100
  }
 ],
 "id": "overlay_4DC3CB7D_40BC_4B92_41C5_DB449B78DEF2",
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 16.72,
   "yaw": 2.66,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2B2F1C70_3F0B_84EB_4178_787A635D8E70_0_HS_2_0_0_map.gif",
      "width": 29,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -4.5
  }
 ],
 "data": {
  "label": "Arrow 01a"
 },
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_2B7EFF51_3F0D_842D_41C8_DB30063C8773, this.camera_48939646_4573_34DA_41C0_368E09AD696A); this.mainPlayList.set('selectedIndex', 4)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_501F2BE1_40C4_CAB2_41A0_B660F4DC79E0",
   "pitch": -4.5,
   "hfov": 16.72,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": 2.66,
   "distance": 100
  }
 ],
 "id": "overlay_4F9314DB_40BC_DE95_41C3_1C7F16887142",
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 88.72,
   "yaw": 96.37,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2B2F1C70_3F0B_84EB_4178_787A635D8E70_0_HS_3_0_map.gif",
      "width": 30,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": 20.18
  }
 ],
 "data": {
  "label": "AREA PERTANIAN, KEBUN, DAN AGROTECHNOPARK"
 },
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2B2F1C70_3F0B_84EB_4178_787A635D8E70_0_HS_3_0.png",
      "width": 2048,
      "class": "ImageResourceLevel",
      "height": 1092
     }
    ]
   },
   "pitch": 20.18,
   "hfov": 88.72,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": 96.37,
   "distance": 50
  }
 ],
 "id": "overlay_4AC8EAFD_4403_45C4_41C5_A4926318ADFA",
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 11.97,
   "yaw": -106.77,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2B2F1C70_3F0B_84EB_4178_787A635D8E70_0_HS_4_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": 12.68
  }
 ],
 "data": {
  "label": "Image"
 },
 "areas": [
  {
   "click": "if(this.isCardboardViewMode()) { this.showPopupPanoramaVideoOverlay(this.popup_4BA27DD5_441D_5FC4_41A2_51DBF78C329D, {'pressedBackgroundOpacity':0.3,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconColor':'#888888','rollOverBorderSize':0,'backgroundOpacity':0.3,'iconWidth':20,'paddingLeft':5,'paddingRight':5,'borderSize':0,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'iconHeight':20,'pressedBorderColor':'#000000','rollOverBackgroundColorDirection':'vertical','backgroundColorDirection':'vertical','iconColor':'#000000','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'paddingBottom':5,'pressedIconLineWidth':5,'pressedBorderSize':0,'rollOverBorderColor':'#000000','iconLineWidth':5,'rollOverBackgroundOpacity':0.3,'backgroundColorRatios':[0,0.09803921568627451,1],'rollOverIconHeight':20,'rollOverIconColor':'#666666','rollOverIconWidth':20,'pressedBackgroundColorDirection':'vertical','pressedIconWidth':20,'pressedIconHeight':20,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'paddingTop':5,'rollOverIconLineWidth':5,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'borderColor':'#000000'}, true) } else { this.showPopupMedia(this.window_4F0A46C0_4573_F5D6_413F_6D32B060A100, this.video_4ACF9D29_441D_FC4D_41C1_B1689C6AB6F2, this.PlayList_486BD52B_4573_34AA_41C9_680A4C2A2459, '95%', '95%', true, true) }",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "hfov": 11.97,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2B2F1C70_3F0B_84EB_4178_787A635D8E70_0_HS_4_0.png",
      "width": 529,
      "class": "ImageResourceLevel",
      "height": 529
     }
    ]
   },
   "pitch": 12.68,
   "yaw": -106.77,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_4B3430C6_4403_45C7_41C6_30B3594222DE",
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 11.59,
   "yaw": 90.82,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2B2F1C70_3F0B_84EB_4178_787A635D8E70_0_HS_5_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": 19.23
  }
 ],
 "data": {
  "label": "Image"
 },
 "areas": [
  {
   "click": "if(this.isCardboardViewMode()) { this.showPopupPanoramaVideoOverlay(this.popup_4B48564E_441C_CCC7_41CB_A06191C25D02, {'pressedBackgroundOpacity':0.3,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconColor':'#888888','rollOverBorderSize':0,'backgroundOpacity':0.3,'iconWidth':20,'paddingLeft':5,'paddingRight':5,'borderSize':0,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'iconHeight':20,'pressedBorderColor':'#000000','rollOverBackgroundColorDirection':'vertical','backgroundColorDirection':'vertical','iconColor':'#000000','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'paddingBottom':5,'pressedIconLineWidth':5,'pressedBorderSize':0,'rollOverBorderColor':'#000000','iconLineWidth':5,'rollOverBackgroundOpacity':0.3,'backgroundColorRatios':[0,0.09803921568627451,1],'rollOverIconHeight':20,'rollOverIconColor':'#666666','rollOverIconWidth':20,'pressedBackgroundColorDirection':'vertical','pressedIconWidth':20,'pressedIconHeight':20,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'paddingTop':5,'rollOverIconLineWidth':5,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'borderColor':'#000000'}, true) } else { this.showPopupMedia(this.window_4F0936C1_4573_F5D6_41CA_DC20ED4A4B1F, this.video_4ACF9D29_441D_FC4D_41C1_B1689C6AB6F2, this.PlayList_486B552B_4573_34A9_41CD_451F1DCBCE66, '95%', '95%', true, true) }",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "hfov": 11.59,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2B2F1C70_3F0B_84EB_4178_787A635D8E70_0_HS_5_0.png",
      "width": 529,
      "class": "ImageResourceLevel",
      "height": 529
     }
    ]
   },
   "pitch": 19.23,
   "yaw": 90.82,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_4B325D5A_4403_5CCF_41A6_568DFDEF1760",
 "class": "HotspotPanoramaOverlay"
},
{
 "viewerArea": "this.viewer_uid4983C519_4573_3476_41C6_8103303FA3C7",
 "id": "viewer_uid4983C519_4573_3476_41C6_8103303FA3C7VideoPlayer",
 "class": "VideoPlayer",
 "displayPlaybackBar": true
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 75.75,
   "yaw": -63.38,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2B7EFF51_3F0D_842D_41C8_DB30063C8773_0_HS_0_0_map.gif",
      "width": 27,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": 17.17
  }
 ],
 "data": {
  "label": "AREA UTILITAS DAN PEMELIHARAAN"
 },
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2B7EFF51_3F0D_842D_41C8_DB30063C8773_0_HS_0_0.png",
      "width": 2048,
      "class": "ImageResourceLevel",
      "height": 1190
     }
    ]
   },
   "pitch": 17.17,
   "hfov": 75.75,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": -63.38,
   "distance": 50
  }
 ],
 "id": "overlay_2B281A3C_3F3D_8C5B_41C2_07969B5FEB28",
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 13.65,
   "yaw": -78.13,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2B7EFF51_3F0D_842D_41C8_DB30063C8773_0_HS_1_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": 9.33
  }
 ],
 "data": {
  "label": "Image"
 },
 "areas": [
  {
   "click": "if(this.isCardboardViewMode()) { this.showPopupPanoramaVideoOverlay(this.popup_51F47C35_40FC_4D92_41B5_4D90B22EF048, {'pressedBackgroundOpacity':0.3,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconColor':'#888888','rollOverBorderSize':0,'backgroundOpacity':0.3,'iconWidth':20,'paddingLeft':5,'paddingRight':5,'borderSize':0,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'iconHeight':20,'pressedBorderColor':'#000000','rollOverBackgroundColorDirection':'vertical','backgroundColorDirection':'vertical','iconColor':'#000000','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'paddingBottom':5,'pressedIconLineWidth':5,'pressedBorderSize':0,'rollOverBorderColor':'#000000','iconLineWidth':5,'rollOverBackgroundOpacity':0.3,'backgroundColorRatios':[0,0.09803921568627451,1],'rollOverIconHeight':20,'rollOverIconColor':'#666666','rollOverIconWidth':20,'pressedBackgroundColorDirection':'vertical','pressedIconWidth':20,'pressedIconHeight':20,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'paddingTop':5,'rollOverIconLineWidth':5,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'borderColor':'#000000'}, true) } else { this.showPopupMedia(this.window_4F0546B7_4573_F5BA_41D0_D95D81E247C0, this.video_504B2783_40FC_DB76_41AB_2D70A7DB53BE, this.PlayList_4875152B_4573_34AA_419A_84149DD16C06, '95%', '95%', true, true) }",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "hfov": 13.65,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2B7EFF51_3F0D_842D_41C8_DB30063C8773_0_HS_1_0.png",
      "width": 596,
      "class": "ImageResourceLevel",
      "height": 596
     }
    ]
   },
   "pitch": 9.33,
   "yaw": -78.13,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_2BDB1119_3F3A_9C5D_41C3_01035C961DF1",
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 12.25,
   "yaw": 13.27,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2B7EFF51_3F0D_842D_41C8_DB30063C8773_0_HS_2_0_0_map.gif",
      "width": 29,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -2.33
  }
 ],
 "data": {
  "label": "Arrow 01a"
 },
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_2B2F1C70_3F0B_84EB_4178_787A635D8E70, this.camera_48C2061B_4573_346A_41A1_0D055431949C); this.mainPlayList.set('selectedIndex', 6); this.mainPlayList.set('selectedIndex', 5)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_54F49E91_40C4_4A92_41CA_2F08FC385CE1",
   "pitch": -2.33,
   "hfov": 12.25,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": 13.27,
   "distance": 100
  }
 ],
 "id": "overlay_2DC9BE45_3F0D_8435_41C5_1CE2CA6E3D9E",
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 14.3,
   "yaw": -3.91,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2B7EFF51_3F0D_842D_41C8_DB30063C8773_0_HS_3_0_0_map.gif",
      "width": 29,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -1.56
  }
 ],
 "data": {
  "label": "Arrow 01a"
 },
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_2B2F1C70_3F0B_84EB_4178_787A635D8E70, this.camera_48A3A638_4573_34B6_41C1_860C035A29FE); this.mainPlayList.set('selectedIndex', 6); this.mainPlayList.set('selectedIndex', 6)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_54F42E92_40C4_4A96_41C7_5E37A7111029",
   "pitch": -1.56,
   "hfov": 14.3,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": -3.91,
   "distance": 100
  }
 ],
 "id": "overlay_2BC3D020_3F06_9C6B_41AC_F19E3FA86BD4",
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 12.62,
   "yaw": -173.55,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2B7EFF51_3F0D_842D_41C8_DB30063C8773_0_HS_4_0_0_map.gif",
      "width": 29,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -31.19
  }
 ],
 "data": {
  "label": "Arrow 01a"
 },
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_3340DE24_3EFF_846B_41BA_156D465E8DB5, this.camera_48E025F2_4573_37BB_419A_3333A65F1C49); this.mainPlayList.set('selectedIndex', 2)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_5CCDA728_440C_CC4B_41C4_83ED8FE7FBFD",
   "pitch": -31.19,
   "hfov": 12.62,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": -173.55,
   "distance": 100
  }
 ],
 "id": "overlay_513787D5_4403_CBC4_41BA_FC892C2FA476",
 "class": "HotspotPanoramaOverlay"
},
{
 "viewerArea": "this.viewer_uid49978512_4573_347A_41B0_99B31C16E52A",
 "id": "viewer_uid49978512_4573_347A_41B0_99B31C16E52AVideoPlayer",
 "class": "VideoPlayer",
 "displayPlaybackBar": true
},
{
 "viewerArea": "this.viewer_uid4988B516_4573_347A_4182_78F73455D21B",
 "id": "viewer_uid4988B516_4573_347A_4182_78F73455D21BVideoPlayer",
 "class": "VideoPlayer",
 "displayPlaybackBar": true
},
{
 "progressBarBorderSize": 0,
 "id": "viewer_uid4987F51B_4573_346A_41B5_F436A3AF50B1",
 "paddingLeft": 0,
 "playbackBarProgressBorderRadius": 0,
 "progressBarBorderRadius": 0,
 "toolTipShadowOpacity": 1,
 "width": "100%",
 "playbackBarBorderRadius": 0,
 "toolTipFontStyle": "normal",
 "minHeight": 50,
 "playbackBarProgressBorderColor": "#000000",
 "toolTipFontFamily": "Arial",
 "playbackBarHeadBorderColor": "#000000",
 "toolTipTextShadowOpacity": 0,
 "playbackBarHeadBorderRadius": 0,
 "progressLeft": 0,
 "propagateClick": false,
 "playbackBarHeadBorderSize": 0,
 "playbackBarProgressOpacity": 1,
 "minWidth": 100,
 "playbackBarBorderSize": 0,
 "toolTipShadowVerticalLength": 0,
 "vrPointerSelectionColor": "#FF6600",
 "playbackBarBackgroundOpacity": 1,
 "toolTipFontColor": "#606060",
 "transitionDuration": 500,
 "toolTipBackgroundColor": "#F6F6F6",
 "height": "100%",
 "playbackBarHeadShadowColor": "#000000",
 "borderSize": 0,
 "progressRight": 0,
 "toolTipShadowHorizontalLength": 0,
 "firstTransitionDuration": 0,
 "class": "ViewerArea",
 "playbackBarHeadBackgroundColor": [
  "#111111",
  "#666666"
 ],
 "vrPointerSelectionTime": 2000,
 "progressBarBackgroundColorDirection": "vertical",
 "playbackBarHeadShadowHorizontalLength": 0,
 "progressOpacity": 1,
 "shadow": false,
 "progressHeight": 10,
 "playbackBarHeadShadow": true,
 "progressBottom": 2,
 "playbackBarHeadBackgroundColorDirection": "vertical",
 "progressBackgroundOpacity": 1,
 "playbackBarProgressBackgroundColor": [
  "#3399FF"
 ],
 "playbackBarOpacity": 1,
 "toolTipPaddingRight": 6,
 "playbackBarHeadShadowOpacity": 0.7,
 "toolTipBorderSize": 1,
 "toolTipPaddingLeft": 6,
 "toolTipPaddingTop": 4,
 "vrPointerColor": "#FFFFFF",
 "toolTipDisplayTime": 600,
 "progressBarOpacity": 1,
 "playbackBarBorderColor": "#FFFFFF",
 "paddingRight": 0,
 "transitionMode": "blending",
 "displayTooltipInTouchScreens": true,
 "progressBorderSize": 0,
 "toolTipBorderRadius": 3,
 "borderRadius": 0,
 "progressBorderRadius": 0,
 "playbackBarHeadShadowVerticalLength": 0,
 "playbackBarProgressBackgroundColorRatios": [
  0
 ],
 "playbackBarLeft": 0,
 "progressBackgroundColorRatios": [
  0
 ],
 "playbackBarHeadHeight": 15,
 "playbackBarHeadShadowBlurRadius": 3,
 "playbackBarHeadBackgroundColorRatios": [
  0,
  1
 ],
 "progressBarBorderColor": "#000000",
 "toolTipBorderColor": "#767676",
 "progressBarBackgroundColorRatios": [
  0
 ],
 "progressBackgroundColorDirection": "vertical",
 "toolTipShadowSpread": 0,
 "toolTipShadowBlurRadius": 3,
 "playbackBarBottom": 0,
 "toolTipTextShadowColor": "#000000",
 "toolTipOpacity": 1,
 "playbackBarHeadOpacity": 1,
 "progressBarBackgroundColor": [
  "#3399FF"
 ],
 "paddingTop": 0,
 "progressBorderColor": "#000000",
 "toolTipPaddingBottom": 4,
 "toolTipFontSize": "1.11vmin",
 "toolTipTextShadowBlurRadius": 3,
 "progressBackgroundColor": [
  "#FFFFFF"
 ],
 "paddingBottom": 0,
 "playbackBarProgressBackgroundColorDirection": "vertical",
 "toolTipShadowColor": "#333333",
 "playbackBarBackgroundColor": [
  "#FFFFFF"
 ],
 "data": {
  "name": "ViewerArea1304"
 },
 "playbackBarHeight": 10,
 "playbackBarHeadWidth": 6,
 "playbackBarBackgroundColorDirection": "vertical",
 "toolTipFontWeight": "normal",
 "playbackBarProgressBorderSize": 0,
 "playbackBarRight": 0
},
{
 "items": [
  {
   "media": "this.album_3352DF70_3EFD_84EB_41C0_4B97F6ADD645_0",
   "class": "PhotoPlayListItem",
   "camera": {
    "duration": 5000,
    "initialPosition": {
     "x": "0.50",
     "class": "PhotoCameraPosition",
     "y": "0.50",
     "zoomFactor": 1
    },
    "targetPosition": {
     "x": "0.52",
     "class": "PhotoCameraPosition",
     "y": "0.53",
     "zoomFactor": 1.1
    },
    "scaleMode": "fit_outside",
    "class": "MovementPhotoCamera",
    "easing": "linear"
   }
  }
 ],
 "id": "album_3352DF70_3EFD_84EB_41C0_4B97F6ADD645_AlbumPlayList",
 "class": "PhotoPlayList"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 21.59,
   "yaw": 21.48,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_3340DE24_3EFF_846B_41BA_156D465E8DB5_0_HS_0_0_0_map.gif",
      "width": 29,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -16.36
  }
 ],
 "data": {
  "label": "Arrow 01a"
 },
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_34984BC9_3EFB_8C3D_41AC_376559BB2588, this.camera_4B5EA680_4573_3456_41C4_44713D5D9794); this.mainPlayList.set('selectedIndex', 0)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_3159A639_3F06_845D_4195_A370BDF6EB63",
   "pitch": -16.36,
   "hfov": 21.59,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": 21.48,
   "distance": 100
  }
 ],
 "id": "overlay_3195BB7B_3EFB_8CDC_41C6_30DBE6BA549E",
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 24.63,
   "yaw": -91.27,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_3340DE24_3EFF_846B_41BA_156D465E8DB5_0_HS_1_0_0_map.gif",
      "width": 29,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -13.71
  }
 ],
 "data": {
  "label": "Arrow 01a"
 },
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_2B7EFF51_3F0D_842D_41C8_DB30063C8773, this.camera_4B6D5671_4573_34B6_41AE_48571DE1CE4F); this.mainPlayList.set('selectedIndex', 4)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_2A83B717_3F3A_8454_41A2_687E30FA6275",
   "pitch": -13.71,
   "hfov": 24.63,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": -91.27,
   "distance": 100
  }
 ],
 "id": "overlay_2B1BFEC9_3F3A_843C_41C8_4BC739212BC8",
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 22.47,
   "yaw": 118.43,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2DC7EF70_3F0B_84EB_41A3_4012598CD21E_0_HS_0_0_0_map.gif",
      "width": 29,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -2.86
  }
 ],
 "data": {
  "label": "Arrow 01a"
 },
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_2C3FE972_3F3A_8CEF_41A7_2E37A55F58A4, this.camera_4B4EC68E_4573_346A_41CC_C2B501C0112B); this.mainPlayList.set('selectedIndex', 8)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_2A643C75_3F3B_84D5_41A9_F804BF583CAC",
   "pitch": -2.86,
   "hfov": 22.47,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": 118.43,
   "distance": 100
  }
 ],
 "id": "overlay_2C8B9600_3F3E_842B_41BE_C75276D95568",
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 22.44,
   "yaw": 59.52,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2DC7EF70_3F0B_84EB_41A3_4012598CD21E_0_HS_2_0_0_map.gif",
      "width": 29,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -4.09
  }
 ],
 "data": {
  "label": "Arrow 01a"
 },
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_2B7EFF51_3F0D_842D_41C8_DB30063C8773, this.camera_4B2816AB_4573_35AA_41C1_FF23C0371BF2); this.mainPlayList.set('selectedIndex', 4)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_5033317A_40C4_3796_41CD_770AB9FEF60D",
   "pitch": -4.09,
   "hfov": 22.44,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": 59.52,
   "distance": 100
  }
 ],
 "id": "overlay_5151E6E4_40C5_DAB2_41B8_E9708213DB6C",
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 11.26,
   "yaw": -174.68,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2DC7EF70_3F0B_84EB_41A3_4012598CD21E_0_HS_3_0_0_map.gif",
      "width": 29,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -10.69
  }
 ],
 "data": {
  "label": "Arrow 01a"
 },
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_2C9F3FF5_3F07_83D5_41C5_F20BBAC6A7AF, this.camera_4B1996B9_4573_35B6_41D0_24749FB0D737); this.mainPlayList.set('selectedIndex', 7)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_5032A17A_40C4_3796_41B1_5E55C8D22966",
   "pitch": -10.69,
   "hfov": 11.26,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": -174.68,
   "distance": 100
  }
 ],
 "id": "overlay_51E68D56_40C4_CF9E_41B8_08FA2C6B609A",
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 75.94,
   "yaw": -105.21,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2DC7EF70_3F0B_84EB_41A3_4012598CD21E_0_HS_4_0_map.gif",
      "width": 31,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": 11.51
  }
 ],
 "data": {
  "label": "AREA PARKIR DAN PROSESSING"
 },
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2DC7EF70_3F0B_84EB_41A3_4012598CD21E_0_HS_4_0.png",
      "width": 2048,
      "class": "ImageResourceLevel",
      "height": 1051
     }
    ]
   },
   "pitch": 11.51,
   "hfov": 75.94,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": -105.21,
   "distance": 50
  }
 ],
 "id": "overlay_5152F122_40CC_57B7_41C4_C3B5AB37F53F",
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 12.27,
   "yaw": -114.89,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2DC7EF70_3F0B_84EB_41A3_4012598CD21E_0_HS_5_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": 3.16
  }
 ],
 "data": {
  "label": "Image"
 },
 "areas": [
  {
   "click": "if(this.isCardboardViewMode()) { this.showPopupPanoramaVideoOverlay(this.popup_522E74AB_40CC_7EB6_41C7_9D8A4B213011, {'pressedBackgroundOpacity':0.3,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconColor':'#888888','rollOverBorderSize':0,'backgroundOpacity':0.3,'iconWidth':20,'paddingLeft':5,'paddingRight':5,'borderSize':0,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'iconHeight':20,'pressedBorderColor':'#000000','rollOverBackgroundColorDirection':'vertical','backgroundColorDirection':'vertical','iconColor':'#000000','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'paddingBottom':5,'pressedIconLineWidth':5,'pressedBorderSize':0,'rollOverBorderColor':'#000000','iconLineWidth':5,'rollOverBackgroundOpacity':0.3,'backgroundColorRatios':[0,0.09803921568627451,1],'rollOverIconHeight':20,'rollOverIconColor':'#666666','rollOverIconWidth':20,'pressedBackgroundColorDirection':'vertical','pressedIconWidth':20,'pressedIconHeight':20,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'paddingTop':5,'rollOverIconLineWidth':5,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'borderColor':'#000000'}, true) } else { this.showPopupMedia(this.window_4F0426B8_4573_F5B6_41C6_DA52AF0EDC53, this.video_52B7FE5D_40CC_4D92_4171_5EBCA969B8AB, this.PlayList_4874952B_4573_34AA_41C5_1F72ED4C4DDB, '95%', '95%', true, true) }",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "hfov": 12.27,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2DC7EF70_3F0B_84EB_41A3_4012598CD21E_0_HS_5_0.png",
      "width": 529,
      "class": "ImageResourceLevel",
      "height": 529
     }
    ]
   },
   "pitch": 3.16,
   "yaw": -114.89,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_52D9E8AE_40CC_368E_41B7_BF1BF63CADB0",
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 76.27,
   "yaw": 10.74,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2DC7EF70_3F0B_84EB_41A3_4012598CD21E_0_HS_6_0_map.gif",
      "width": 28,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": 18.42
  }
 ],
 "data": {
  "label": "AREA SPORT CENTRE DAN RUSUN"
 },
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2DC7EF70_3F0B_84EB_41A3_4012598CD21E_0_HS_6_0.png",
      "width": 2048,
      "class": "ImageResourceLevel",
      "height": 1147
     }
    ]
   },
   "pitch": 18.42,
   "hfov": 76.27,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": 10.74,
   "distance": 50
  }
 ],
 "id": "overlay_5339C8F3_40C4_7696_41A7_6A178017DE30",
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 11.64,
   "yaw": 3.75,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2DC7EF70_3F0B_84EB_41A3_4012598CD21E_0_HS_7_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": 18.71
  }
 ],
 "data": {
  "label": "Image"
 },
 "areas": [
  {
   "click": "if(this.isCardboardViewMode()) { this.showPopupPanoramaVideoOverlay(this.popup_54D0CC9B_40C4_4E95_41CE_9753E60BD865, {'pressedBackgroundOpacity':0.3,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconColor':'#888888','rollOverBorderSize':0,'backgroundOpacity':0.3,'iconWidth':20,'paddingLeft':5,'paddingRight':5,'borderSize':0,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'iconHeight':20,'pressedBorderColor':'#000000','rollOverBackgroundColorDirection':'vertical','backgroundColorDirection':'vertical','iconColor':'#000000','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'paddingBottom':5,'pressedIconLineWidth':5,'pressedBorderSize':0,'rollOverBorderColor':'#000000','iconLineWidth':5,'rollOverBackgroundOpacity':0.3,'backgroundColorRatios':[0,0.09803921568627451,1],'rollOverIconHeight':20,'rollOverIconColor':'#666666','rollOverIconWidth':20,'pressedBackgroundColorDirection':'vertical','pressedIconWidth':20,'pressedIconHeight':20,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'paddingTop':5,'rollOverIconLineWidth':5,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'borderColor':'#000000'}, true) } else { this.showPopupMedia(this.window_4F0B56B9_4573_F5B6_41CA_F791BA0BB606, this.video_3027A6BE_3F06_8457_41A8_2EE14E1FB410, this.PlayList_4874352B_4573_34AA_41BC_9E873D84E4AB, '95%', '95%', true, true) }",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "hfov": 11.64,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2DC7EF70_3F0B_84EB_41A3_4012598CD21E_0_HS_7_0.png",
      "width": 529,
      "class": "ImageResourceLevel",
      "height": 529
     }
    ]
   },
   "pitch": 18.71,
   "yaw": 3.75,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_54B2660F_40C4_3D8E_41B8_E0CFA60EA625",
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 25.03,
   "yaw": -47.02,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2DC7EF70_3F0B_84EB_41A3_4012598CD21E_0_HS_8_0_0_map.gif",
      "width": 29,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -9.1
  }
 ],
 "data": {
  "label": "Arrow 01a"
 },
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_34984BC9_3EFB_8C3D_41AC_376559BB2588, this.camera_4B38269C_4573_346E_41CD_22808A386EFE); this.mainPlayList.set('selectedIndex', 0)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_511FFB56_440D_C4C7_415B_7EE4FFAC5552",
   "pitch": -9.1,
   "hfov": 25.03,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": -47.02,
   "distance": 100
  }
 ],
 "id": "overlay_527AECB2_440D_DC5F_4172_8244D62FC402",
 "class": "HotspotPanoramaOverlay"
},
{
 "viewerArea": "this.viewer_uid49832519_4573_3476_41B3_D32E3FCA7841",
 "id": "viewer_uid49832519_4573_3476_41B3_D32E3FCA7841VideoPlayer",
 "class": "VideoPlayer",
 "displayPlaybackBar": true
},
{
 "viewerArea": "this.viewer_uid498D8518_4573_3476_41C9_998EB1187E59",
 "id": "viewer_uid498D8518_4573_3476_41C9_998EB1187E59VideoPlayer",
 "class": "VideoPlayer",
 "displayPlaybackBar": true
},
{
 "viewerArea": "this.viewer_uid4981151B_4573_346A_41C3_AADBFC6E6295",
 "id": "viewer_uid4981151B_4573_346A_41C3_AADBFC6E6295VideoPlayer",
 "class": "VideoPlayer",
 "displayPlaybackBar": true
},
{
 "progressBarBorderSize": 0,
 "id": "viewer_uid4988B516_4573_347A_4182_78F73455D21B",
 "paddingLeft": 0,
 "playbackBarProgressBorderRadius": 0,
 "progressBarBorderRadius": 0,
 "toolTipShadowOpacity": 1,
 "width": "100%",
 "playbackBarBorderRadius": 0,
 "toolTipFontStyle": "normal",
 "minHeight": 50,
 "playbackBarProgressBorderColor": "#000000",
 "toolTipFontFamily": "Arial",
 "playbackBarHeadBorderColor": "#000000",
 "toolTipTextShadowOpacity": 0,
 "playbackBarHeadBorderRadius": 0,
 "progressLeft": 0,
 "propagateClick": false,
 "playbackBarHeadBorderSize": 0,
 "playbackBarProgressOpacity": 1,
 "minWidth": 100,
 "playbackBarBorderSize": 0,
 "toolTipShadowVerticalLength": 0,
 "vrPointerSelectionColor": "#FF6600",
 "playbackBarBackgroundOpacity": 1,
 "toolTipFontColor": "#606060",
 "transitionDuration": 500,
 "toolTipBackgroundColor": "#F6F6F6",
 "height": "100%",
 "playbackBarHeadShadowColor": "#000000",
 "borderSize": 0,
 "progressRight": 0,
 "toolTipShadowHorizontalLength": 0,
 "firstTransitionDuration": 0,
 "class": "ViewerArea",
 "playbackBarHeadBackgroundColor": [
  "#111111",
  "#666666"
 ],
 "vrPointerSelectionTime": 2000,
 "progressBarBackgroundColorDirection": "vertical",
 "playbackBarHeadShadowHorizontalLength": 0,
 "progressOpacity": 1,
 "shadow": false,
 "progressHeight": 10,
 "playbackBarHeadShadow": true,
 "progressBottom": 2,
 "playbackBarHeadBackgroundColorDirection": "vertical",
 "progressBackgroundOpacity": 1,
 "playbackBarProgressBackgroundColor": [
  "#3399FF"
 ],
 "playbackBarOpacity": 1,
 "toolTipPaddingRight": 6,
 "playbackBarHeadShadowOpacity": 0.7,
 "toolTipBorderSize": 1,
 "toolTipPaddingLeft": 6,
 "toolTipPaddingTop": 4,
 "vrPointerColor": "#FFFFFF",
 "toolTipDisplayTime": 600,
 "progressBarOpacity": 1,
 "playbackBarBorderColor": "#FFFFFF",
 "paddingRight": 0,
 "transitionMode": "blending",
 "displayTooltipInTouchScreens": true,
 "progressBorderSize": 0,
 "toolTipBorderRadius": 3,
 "borderRadius": 0,
 "progressBorderRadius": 0,
 "playbackBarHeadShadowVerticalLength": 0,
 "playbackBarProgressBackgroundColorRatios": [
  0
 ],
 "playbackBarLeft": 0,
 "progressBackgroundColorRatios": [
  0
 ],
 "playbackBarHeadHeight": 15,
 "playbackBarHeadShadowBlurRadius": 3,
 "playbackBarHeadBackgroundColorRatios": [
  0,
  1
 ],
 "progressBarBorderColor": "#000000",
 "toolTipBorderColor": "#767676",
 "progressBarBackgroundColorRatios": [
  0
 ],
 "progressBackgroundColorDirection": "vertical",
 "toolTipShadowSpread": 0,
 "toolTipShadowBlurRadius": 3,
 "playbackBarBottom": 0,
 "toolTipTextShadowColor": "#000000",
 "toolTipOpacity": 1,
 "playbackBarHeadOpacity": 1,
 "progressBarBackgroundColor": [
  "#3399FF"
 ],
 "paddingTop": 0,
 "progressBorderColor": "#000000",
 "toolTipPaddingBottom": 4,
 "toolTipFontSize": "1.11vmin",
 "toolTipTextShadowBlurRadius": 3,
 "progressBackgroundColor": [
  "#FFFFFF"
 ],
 "paddingBottom": 0,
 "playbackBarProgressBackgroundColorDirection": "vertical",
 "toolTipShadowColor": "#333333",
 "playbackBarBackgroundColor": [
  "#FFFFFF"
 ],
 "data": {
  "name": "ViewerArea1297"
 },
 "playbackBarHeight": 10,
 "playbackBarHeadWidth": 6,
 "playbackBarBackgroundColorDirection": "vertical",
 "toolTipFontWeight": "normal",
 "playbackBarProgressBorderSize": 0,
 "playbackBarRight": 0
},
{
 "progressBarBorderSize": 0,
 "id": "viewer_uid498E6517_4573_347A_41C0_DD4ABB550B6C",
 "paddingLeft": 0,
 "playbackBarProgressBorderRadius": 0,
 "progressBarBorderRadius": 0,
 "toolTipShadowOpacity": 1,
 "width": "100%",
 "playbackBarBorderRadius": 0,
 "toolTipFontStyle": "normal",
 "minHeight": 50,
 "playbackBarProgressBorderColor": "#000000",
 "toolTipFontFamily": "Arial",
 "playbackBarHeadBorderColor": "#000000",
 "toolTipTextShadowOpacity": 0,
 "playbackBarHeadBorderRadius": 0,
 "progressLeft": 0,
 "propagateClick": false,
 "playbackBarHeadBorderSize": 0,
 "playbackBarProgressOpacity": 1,
 "minWidth": 100,
 "playbackBarBorderSize": 0,
 "toolTipShadowVerticalLength": 0,
 "vrPointerSelectionColor": "#FF6600",
 "playbackBarBackgroundOpacity": 1,
 "toolTipFontColor": "#606060",
 "transitionDuration": 500,
 "toolTipBackgroundColor": "#F6F6F6",
 "height": "100%",
 "playbackBarHeadShadowColor": "#000000",
 "borderSize": 0,
 "progressRight": 0,
 "toolTipShadowHorizontalLength": 0,
 "firstTransitionDuration": 0,
 "class": "ViewerArea",
 "playbackBarHeadBackgroundColor": [
  "#111111",
  "#666666"
 ],
 "vrPointerSelectionTime": 2000,
 "progressBarBackgroundColorDirection": "vertical",
 "playbackBarHeadShadowHorizontalLength": 0,
 "progressOpacity": 1,
 "shadow": false,
 "progressHeight": 10,
 "playbackBarHeadShadow": true,
 "progressBottom": 2,
 "playbackBarHeadBackgroundColorDirection": "vertical",
 "progressBackgroundOpacity": 1,
 "playbackBarProgressBackgroundColor": [
  "#3399FF"
 ],
 "playbackBarOpacity": 1,
 "toolTipPaddingRight": 6,
 "playbackBarHeadShadowOpacity": 0.7,
 "toolTipBorderSize": 1,
 "toolTipPaddingLeft": 6,
 "toolTipPaddingTop": 4,
 "vrPointerColor": "#FFFFFF",
 "toolTipDisplayTime": 600,
 "progressBarOpacity": 1,
 "playbackBarBorderColor": "#FFFFFF",
 "paddingRight": 0,
 "transitionMode": "blending",
 "displayTooltipInTouchScreens": true,
 "progressBorderSize": 0,
 "toolTipBorderRadius": 3,
 "borderRadius": 0,
 "progressBorderRadius": 0,
 "playbackBarHeadShadowVerticalLength": 0,
 "playbackBarProgressBackgroundColorRatios": [
  0
 ],
 "playbackBarLeft": 0,
 "progressBackgroundColorRatios": [
  0
 ],
 "playbackBarHeadHeight": 15,
 "playbackBarHeadShadowBlurRadius": 3,
 "playbackBarHeadBackgroundColorRatios": [
  0,
  1
 ],
 "progressBarBorderColor": "#000000",
 "toolTipBorderColor": "#767676",
 "progressBarBackgroundColorRatios": [
  0
 ],
 "progressBackgroundColorDirection": "vertical",
 "toolTipShadowSpread": 0,
 "toolTipShadowBlurRadius": 3,
 "playbackBarBottom": 0,
 "toolTipTextShadowColor": "#000000",
 "toolTipOpacity": 1,
 "playbackBarHeadOpacity": 1,
 "progressBarBackgroundColor": [
  "#3399FF"
 ],
 "paddingTop": 0,
 "progressBorderColor": "#000000",
 "toolTipPaddingBottom": 4,
 "toolTipFontSize": "1.11vmin",
 "toolTipTextShadowBlurRadius": 3,
 "progressBackgroundColor": [
  "#FFFFFF"
 ],
 "paddingBottom": 0,
 "playbackBarProgressBackgroundColorDirection": "vertical",
 "toolTipShadowColor": "#333333",
 "playbackBarBackgroundColor": [
  "#FFFFFF"
 ],
 "data": {
  "name": "ViewerArea1298"
 },
 "playbackBarHeight": 10,
 "playbackBarHeadWidth": 6,
 "playbackBarBackgroundColorDirection": "vertical",
 "toolTipFontWeight": "normal",
 "playbackBarProgressBorderSize": 0,
 "playbackBarRight": 0
},
{
 "progressBarBorderSize": 0,
 "id": "viewer_uid4981151B_4573_346A_41C3_AADBFC6E6295",
 "paddingLeft": 0,
 "playbackBarProgressBorderRadius": 0,
 "progressBarBorderRadius": 0,
 "toolTipShadowOpacity": 1,
 "width": "100%",
 "playbackBarBorderRadius": 0,
 "toolTipFontStyle": "normal",
 "minHeight": 50,
 "playbackBarProgressBorderColor": "#000000",
 "toolTipFontFamily": "Arial",
 "playbackBarHeadBorderColor": "#000000",
 "toolTipTextShadowOpacity": 0,
 "playbackBarHeadBorderRadius": 0,
 "progressLeft": 0,
 "propagateClick": false,
 "playbackBarHeadBorderSize": 0,
 "playbackBarProgressOpacity": 1,
 "minWidth": 100,
 "playbackBarBorderSize": 0,
 "toolTipShadowVerticalLength": 0,
 "vrPointerSelectionColor": "#FF6600",
 "playbackBarBackgroundOpacity": 1,
 "toolTipFontColor": "#606060",
 "transitionDuration": 500,
 "toolTipBackgroundColor": "#F6F6F6",
 "height": "100%",
 "playbackBarHeadShadowColor": "#000000",
 "borderSize": 0,
 "progressRight": 0,
 "toolTipShadowHorizontalLength": 0,
 "firstTransitionDuration": 0,
 "class": "ViewerArea",
 "playbackBarHeadBackgroundColor": [
  "#111111",
  "#666666"
 ],
 "vrPointerSelectionTime": 2000,
 "progressBarBackgroundColorDirection": "vertical",
 "playbackBarHeadShadowHorizontalLength": 0,
 "progressOpacity": 1,
 "shadow": false,
 "progressHeight": 10,
 "playbackBarHeadShadow": true,
 "progressBottom": 2,
 "playbackBarHeadBackgroundColorDirection": "vertical",
 "progressBackgroundOpacity": 1,
 "playbackBarProgressBackgroundColor": [
  "#3399FF"
 ],
 "playbackBarOpacity": 1,
 "toolTipPaddingRight": 6,
 "playbackBarHeadShadowOpacity": 0.7,
 "toolTipBorderSize": 1,
 "toolTipPaddingLeft": 6,
 "toolTipPaddingTop": 4,
 "vrPointerColor": "#FFFFFF",
 "toolTipDisplayTime": 600,
 "progressBarOpacity": 1,
 "playbackBarBorderColor": "#FFFFFF",
 "paddingRight": 0,
 "transitionMode": "blending",
 "displayTooltipInTouchScreens": true,
 "progressBorderSize": 0,
 "toolTipBorderRadius": 3,
 "borderRadius": 0,
 "progressBorderRadius": 0,
 "playbackBarHeadShadowVerticalLength": 0,
 "playbackBarProgressBackgroundColorRatios": [
  0
 ],
 "playbackBarLeft": 0,
 "progressBackgroundColorRatios": [
  0
 ],
 "playbackBarHeadHeight": 15,
 "playbackBarHeadShadowBlurRadius": 3,
 "playbackBarHeadBackgroundColorRatios": [
  0,
  1
 ],
 "progressBarBorderColor": "#000000",
 "toolTipBorderColor": "#767676",
 "progressBarBackgroundColorRatios": [
  0
 ],
 "progressBackgroundColorDirection": "vertical",
 "toolTipShadowSpread": 0,
 "toolTipShadowBlurRadius": 3,
 "playbackBarBottom": 0,
 "toolTipTextShadowColor": "#000000",
 "toolTipOpacity": 1,
 "playbackBarHeadOpacity": 1,
 "progressBarBackgroundColor": [
  "#3399FF"
 ],
 "paddingTop": 0,
 "progressBorderColor": "#000000",
 "toolTipPaddingBottom": 4,
 "toolTipFontSize": "1.11vmin",
 "toolTipTextShadowBlurRadius": 3,
 "progressBackgroundColor": [
  "#FFFFFF"
 ],
 "paddingBottom": 0,
 "playbackBarProgressBackgroundColorDirection": "vertical",
 "toolTipShadowColor": "#333333",
 "playbackBarBackgroundColor": [
  "#FFFFFF"
 ],
 "data": {
  "name": "ViewerArea1303"
 },
 "playbackBarHeight": 10,
 "playbackBarHeadWidth": 6,
 "playbackBarBackgroundColorDirection": "vertical",
 "toolTipFontWeight": "normal",
 "playbackBarProgressBorderSize": 0,
 "playbackBarRight": 0
},
{
 "progressBarBorderSize": 0,
 "id": "viewer_uid4985151D_4573_346E_41B6_4BC605F6F87D",
 "paddingLeft": 0,
 "playbackBarProgressBorderRadius": 0,
 "progressBarBorderRadius": 0,
 "toolTipShadowOpacity": 1,
 "width": "100%",
 "playbackBarBorderRadius": 0,
 "toolTipFontStyle": "normal",
 "minHeight": 50,
 "playbackBarProgressBorderColor": "#000000",
 "toolTipFontFamily": "Arial",
 "playbackBarHeadBorderColor": "#000000",
 "toolTipTextShadowOpacity": 0,
 "playbackBarHeadBorderRadius": 0,
 "progressLeft": 0,
 "propagateClick": false,
 "playbackBarHeadBorderSize": 0,
 "playbackBarProgressOpacity": 1,
 "minWidth": 100,
 "playbackBarBorderSize": 0,
 "toolTipShadowVerticalLength": 0,
 "vrPointerSelectionColor": "#FF6600",
 "playbackBarBackgroundOpacity": 1,
 "toolTipFontColor": "#606060",
 "transitionDuration": 500,
 "toolTipBackgroundColor": "#F6F6F6",
 "height": "100%",
 "playbackBarHeadShadowColor": "#000000",
 "borderSize": 0,
 "progressRight": 0,
 "toolTipShadowHorizontalLength": 0,
 "firstTransitionDuration": 0,
 "class": "ViewerArea",
 "playbackBarHeadBackgroundColor": [
  "#111111",
  "#666666"
 ],
 "vrPointerSelectionTime": 2000,
 "progressBarBackgroundColorDirection": "vertical",
 "playbackBarHeadShadowHorizontalLength": 0,
 "progressOpacity": 1,
 "shadow": false,
 "progressHeight": 10,
 "playbackBarHeadShadow": true,
 "progressBottom": 2,
 "playbackBarHeadBackgroundColorDirection": "vertical",
 "progressBackgroundOpacity": 1,
 "playbackBarProgressBackgroundColor": [
  "#3399FF"
 ],
 "playbackBarOpacity": 1,
 "toolTipPaddingRight": 6,
 "playbackBarHeadShadowOpacity": 0.7,
 "toolTipBorderSize": 1,
 "toolTipPaddingLeft": 6,
 "toolTipPaddingTop": 4,
 "vrPointerColor": "#FFFFFF",
 "toolTipDisplayTime": 600,
 "progressBarOpacity": 1,
 "playbackBarBorderColor": "#FFFFFF",
 "paddingRight": 0,
 "transitionMode": "blending",
 "displayTooltipInTouchScreens": true,
 "progressBorderSize": 0,
 "toolTipBorderRadius": 3,
 "borderRadius": 0,
 "progressBorderRadius": 0,
 "playbackBarHeadShadowVerticalLength": 0,
 "playbackBarProgressBackgroundColorRatios": [
  0
 ],
 "playbackBarLeft": 0,
 "progressBackgroundColorRatios": [
  0
 ],
 "playbackBarHeadHeight": 15,
 "playbackBarHeadShadowBlurRadius": 3,
 "playbackBarHeadBackgroundColorRatios": [
  0,
  1
 ],
 "progressBarBorderColor": "#000000",
 "toolTipBorderColor": "#767676",
 "progressBarBackgroundColorRatios": [
  0
 ],
 "progressBackgroundColorDirection": "vertical",
 "toolTipShadowSpread": 0,
 "toolTipShadowBlurRadius": 3,
 "playbackBarBottom": 0,
 "toolTipTextShadowColor": "#000000",
 "toolTipOpacity": 1,
 "playbackBarHeadOpacity": 1,
 "progressBarBackgroundColor": [
  "#3399FF"
 ],
 "paddingTop": 0,
 "progressBorderColor": "#000000",
 "toolTipPaddingBottom": 4,
 "toolTipFontSize": "1.11vmin",
 "toolTipTextShadowBlurRadius": 3,
 "progressBackgroundColor": [
  "#FFFFFF"
 ],
 "paddingBottom": 0,
 "playbackBarProgressBackgroundColorDirection": "vertical",
 "toolTipShadowColor": "#333333",
 "playbackBarBackgroundColor": [
  "#FFFFFF"
 ],
 "data": {
  "name": "ViewerArea1306"
 },
 "playbackBarHeight": 10,
 "playbackBarHeadWidth": 6,
 "playbackBarBackgroundColorDirection": "vertical",
 "toolTipFontWeight": "normal",
 "playbackBarProgressBorderSize": 0,
 "playbackBarRight": 0
},
{
 "viewerArea": "this.viewer_uid4987F51B_4573_346A_41B5_F436A3AF50B1",
 "id": "viewer_uid4987F51B_4573_346A_41B5_F436A3AF50B1VideoPlayer",
 "class": "VideoPlayer",
 "displayPlaybackBar": true
},
{
 "progressBarBorderSize": 0,
 "id": "viewer_uid498D8518_4573_3476_41C9_998EB1187E59",
 "paddingLeft": 0,
 "playbackBarProgressBorderRadius": 0,
 "progressBarBorderRadius": 0,
 "toolTipShadowOpacity": 1,
 "width": "100%",
 "playbackBarBorderRadius": 0,
 "toolTipFontStyle": "normal",
 "minHeight": 50,
 "playbackBarProgressBorderColor": "#000000",
 "toolTipFontFamily": "Arial",
 "playbackBarHeadBorderColor": "#000000",
 "toolTipTextShadowOpacity": 0,
 "playbackBarHeadBorderRadius": 0,
 "progressLeft": 0,
 "propagateClick": false,
 "playbackBarHeadBorderSize": 0,
 "playbackBarProgressOpacity": 1,
 "minWidth": 100,
 "playbackBarBorderSize": 0,
 "toolTipShadowVerticalLength": 0,
 "vrPointerSelectionColor": "#FF6600",
 "playbackBarBackgroundOpacity": 1,
 "toolTipFontColor": "#606060",
 "transitionDuration": 500,
 "toolTipBackgroundColor": "#F6F6F6",
 "height": "100%",
 "playbackBarHeadShadowColor": "#000000",
 "borderSize": 0,
 "progressRight": 0,
 "toolTipShadowHorizontalLength": 0,
 "firstTransitionDuration": 0,
 "class": "ViewerArea",
 "playbackBarHeadBackgroundColor": [
  "#111111",
  "#666666"
 ],
 "vrPointerSelectionTime": 2000,
 "progressBarBackgroundColorDirection": "vertical",
 "playbackBarHeadShadowHorizontalLength": 0,
 "progressOpacity": 1,
 "shadow": false,
 "progressHeight": 10,
 "playbackBarHeadShadow": true,
 "progressBottom": 2,
 "playbackBarHeadBackgroundColorDirection": "vertical",
 "progressBackgroundOpacity": 1,
 "playbackBarProgressBackgroundColor": [
  "#3399FF"
 ],
 "playbackBarOpacity": 1,
 "toolTipPaddingRight": 6,
 "playbackBarHeadShadowOpacity": 0.7,
 "toolTipBorderSize": 1,
 "toolTipPaddingLeft": 6,
 "toolTipPaddingTop": 4,
 "vrPointerColor": "#FFFFFF",
 "toolTipDisplayTime": 600,
 "progressBarOpacity": 1,
 "playbackBarBorderColor": "#FFFFFF",
 "paddingRight": 0,
 "transitionMode": "blending",
 "displayTooltipInTouchScreens": true,
 "progressBorderSize": 0,
 "toolTipBorderRadius": 3,
 "borderRadius": 0,
 "progressBorderRadius": 0,
 "playbackBarHeadShadowVerticalLength": 0,
 "playbackBarProgressBackgroundColorRatios": [
  0
 ],
 "playbackBarLeft": 0,
 "progressBackgroundColorRatios": [
  0
 ],
 "playbackBarHeadHeight": 15,
 "playbackBarHeadShadowBlurRadius": 3,
 "playbackBarHeadBackgroundColorRatios": [
  0,
  1
 ],
 "progressBarBorderColor": "#000000",
 "toolTipBorderColor": "#767676",
 "progressBarBackgroundColorRatios": [
  0
 ],
 "progressBackgroundColorDirection": "vertical",
 "toolTipShadowSpread": 0,
 "toolTipShadowBlurRadius": 3,
 "playbackBarBottom": 0,
 "toolTipTextShadowColor": "#000000",
 "toolTipOpacity": 1,
 "playbackBarHeadOpacity": 1,
 "progressBarBackgroundColor": [
  "#3399FF"
 ],
 "paddingTop": 0,
 "progressBorderColor": "#000000",
 "toolTipPaddingBottom": 4,
 "toolTipFontSize": "1.11vmin",
 "toolTipTextShadowBlurRadius": 3,
 "progressBackgroundColor": [
  "#FFFFFF"
 ],
 "paddingBottom": 0,
 "playbackBarProgressBackgroundColorDirection": "vertical",
 "toolTipShadowColor": "#333333",
 "playbackBarBackgroundColor": [
  "#FFFFFF"
 ],
 "data": {
  "name": "ViewerArea1299"
 },
 "playbackBarHeight": 10,
 "playbackBarHeadWidth": 6,
 "playbackBarBackgroundColorDirection": "vertical",
 "toolTipFontWeight": "normal",
 "playbackBarProgressBorderSize": 0,
 "playbackBarRight": 0
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 21.35,
   "yaw": 8.39,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_34984BC9_3EFB_8C3D_41AC_376559BB2588_0_HS_0_0_0_map.gif",
      "width": 29,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -18.41
  }
 ],
 "data": {
  "label": "Arrow 01a"
 },
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_3340DE24_3EFF_846B_41BA_156D465E8DB5, this.camera_48F7E5E0_4573_37D7_41BD_ADF61CB4B3F6); this.mainPlayList.set('selectedIndex', 2)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_2E517794_3F07_8454_419E_0A3D4E90C33D",
   "pitch": -18.41,
   "hfov": 21.35,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": 8.39,
   "distance": 100
  }
 ],
 "id": "overlay_33FEB549_3EFA_843D_41CB_0D3A730688D6",
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 77.36,
   "yaw": 132.68,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_34984BC9_3EFB_8C3D_41AC_376559BB2588_0_HS_2_0_map.gif",
      "width": 28,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": 15.93
  }
 ],
 "data": {
  "label": "Area Sport Centre Dan Rusun"
 },
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_34984BC9_3EFB_8C3D_41AC_376559BB2588_0_HS_2_0.png",
      "width": 2048,
      "class": "ImageResourceLevel",
      "height": 1148
     }
    ]
   },
   "pitch": 15.93,
   "hfov": 77.36,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": 132.68,
   "distance": 50
  }
 ],
 "id": "overlay_306353F5_3F06_83D5_41B9_A9A0ABFBAC40",
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 13.37,
   "yaw": 127.91,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_34984BC9_3EFB_8C3D_41AC_376559BB2588_0_HS_3_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": 14.87
  }
 ],
 "data": {
  "label": "Image"
 },
 "areas": [
  {
   "click": "if(this.isCardboardViewMode()) { this.showPopupPanoramaVideoOverlay(this.popup_2DC4DE73_3F07_84ED_41CB_16C1D16A54C7, {'pressedBackgroundOpacity':0.3,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconColor':'#888888','rollOverBorderSize':0,'backgroundOpacity':0.3,'iconWidth':20,'paddingLeft':5,'paddingRight':5,'borderSize':0,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'iconHeight':20,'pressedBorderColor':'#000000','rollOverBackgroundColorDirection':'vertical','backgroundColorDirection':'vertical','iconColor':'#000000','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'paddingBottom':5,'pressedIconLineWidth':5,'pressedBorderSize':0,'rollOverBorderColor':'#000000','iconLineWidth':5,'rollOverBackgroundOpacity':0.3,'backgroundColorRatios':[0,0.09803921568627451,1],'rollOverIconHeight':20,'rollOverIconColor':'#666666','rollOverIconWidth':20,'pressedBackgroundColorDirection':'vertical','pressedIconWidth':20,'pressedIconHeight':20,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'paddingTop':5,'rollOverIconLineWidth':5,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'borderColor':'#000000'}, true) } else { this.showPopupMedia(this.window_4F0636B5_4573_F5BE_41C2_03AFED4324EA, this.video_3027A6BE_3F06_8457_41A8_2EE14E1FB410, this.PlayList_4875652A_4573_34AA_41C4_0FBE561BE0D8, '95%', '95%', true, true) }",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "hfov": 13.37,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_34984BC9_3EFB_8C3D_41AC_376559BB2588_0_HS_3_0.png",
      "width": 596,
      "class": "ImageResourceLevel",
      "height": 596
     }
    ]
   },
   "pitch": 14.87,
   "yaw": 127.91,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_2C0C39EB_3F06_8FFD_41BD_72E4CEAF6F45",
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 12.09,
   "yaw": -78.55,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_34984BC9_3EFB_8C3D_41AC_376559BB2588_0_HS_4_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -9.82
  }
 ],
 "data": {
  "label": "Image"
 },
 "areas": [
  {
   "click": "this.showPopupPanoramaOverlay(this.popup_5079E6A1_4405_4C7D_41C6_CD878F073210, {'pressedBackgroundOpacity':0.3,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconColor':'#888888','rollOverBorderSize':0,'backgroundOpacity':0.3,'iconWidth':20,'paddingLeft':5,'paddingRight':5,'borderSize':0,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'iconHeight':20,'pressedBorderColor':'#000000','rollOverBackgroundColorDirection':'vertical','backgroundColorDirection':'vertical','iconColor':'#000000','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'paddingBottom':5,'pressedIconLineWidth':5,'pressedBorderSize':0,'rollOverBorderColor':'#000000','iconLineWidth':5,'rollOverBackgroundOpacity':0.3,'backgroundColorRatios':[0,0.09803921568627451,1],'rollOverIconHeight':20,'rollOverIconColor':'#666666','rollOverIconWidth':20,'pressedBackgroundColorDirection':'vertical','pressedIconWidth':20,'pressedIconHeight':20,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'paddingTop':5,'rollOverIconLineWidth':5,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'borderColor':'#000000'}, this.ImageResource_5DA2EC8C_4405_DC4B_41BD_0112D4AFBD1A, null, null, null, null, false)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "hfov": 12.09,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_34984BC9_3EFB_8C3D_41AC_376559BB2588_0_HS_4_0.png",
      "width": 529,
      "class": "ImageResourceLevel",
      "height": 529
     }
    ]
   },
   "pitch": -9.82,
   "yaw": -78.55,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_57641660_4405_4CFB_41C3_F775419E0BFD",
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 47.24,
   "yaw": -64.93,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_34984BC9_3EFB_8C3D_41AC_376559BB2588_0_HS_5_0_map.gif",
      "width": 18,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -13.1
  }
 ],
 "data": {
  "label": "ALL MAP "
 },
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_34984BC9_3EFB_8C3D_41AC_376559BB2588_0_HS_5_0.png",
      "width": 2048,
      "class": "ImageResourceLevel",
      "height": 1728
     }
    ]
   },
   "pitch": -13.1,
   "hfov": 47.24,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": -64.93,
   "distance": 50
  }
 ],
 "id": "overlay_576B1625_4404_CC45_41C5_2BBB8E7E45FB",
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 19.74,
   "yaw": -164.23,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_34984BC9_3EFB_8C3D_41AC_376559BB2588_0_HS_6_0_0_map.gif",
      "width": 29,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -28.77
  }
 ],
 "data": {
  "label": "Arrow 01a"
 },
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_2DC7EF70_3F0B_84EB_41A3_4012598CD21E, this.camera_480635C8_4573_37D7_419E_03AADE289C58); this.mainPlayList.set('selectedIndex', 5)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_5C0228F0_440D_45DB_41C7_5D17F1E15F43",
   "pitch": -28.77,
   "hfov": 19.74,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": -164.23,
   "distance": 100
  }
 ],
 "id": "overlay_517F7F81_4403_DC3D_41B7_C55A9C8AD196",
 "class": "HotspotPanoramaOverlay"
},
{
 "viewerArea": "this.viewer_uid4986751C_4573_346E_41A9_5135DE39951A",
 "id": "viewer_uid4986751C_4573_346E_41A9_5135DE39951AVideoPlayer",
 "class": "VideoPlayer",
 "displayPlaybackBar": true
},
{
 "progressBarBorderSize": 0,
 "id": "viewer_uid4983C519_4573_3476_41C6_8103303FA3C7",
 "paddingLeft": 0,
 "playbackBarProgressBorderRadius": 0,
 "progressBarBorderRadius": 0,
 "toolTipShadowOpacity": 1,
 "width": "100%",
 "playbackBarBorderRadius": 0,
 "toolTipFontStyle": "normal",
 "minHeight": 50,
 "playbackBarProgressBorderColor": "#000000",
 "toolTipFontFamily": "Arial",
 "playbackBarHeadBorderColor": "#000000",
 "toolTipTextShadowOpacity": 0,
 "playbackBarHeadBorderRadius": 0,
 "progressLeft": 0,
 "propagateClick": false,
 "playbackBarHeadBorderSize": 0,
 "playbackBarProgressOpacity": 1,
 "minWidth": 100,
 "playbackBarBorderSize": 0,
 "toolTipShadowVerticalLength": 0,
 "vrPointerSelectionColor": "#FF6600",
 "playbackBarBackgroundOpacity": 1,
 "toolTipFontColor": "#606060",
 "transitionDuration": 500,
 "toolTipBackgroundColor": "#F6F6F6",
 "height": "100%",
 "playbackBarHeadShadowColor": "#000000",
 "borderSize": 0,
 "progressRight": 0,
 "toolTipShadowHorizontalLength": 0,
 "firstTransitionDuration": 0,
 "class": "ViewerArea",
 "playbackBarHeadBackgroundColor": [
  "#111111",
  "#666666"
 ],
 "vrPointerSelectionTime": 2000,
 "progressBarBackgroundColorDirection": "vertical",
 "playbackBarHeadShadowHorizontalLength": 0,
 "progressOpacity": 1,
 "shadow": false,
 "progressHeight": 10,
 "playbackBarHeadShadow": true,
 "progressBottom": 2,
 "playbackBarHeadBackgroundColorDirection": "vertical",
 "progressBackgroundOpacity": 1,
 "playbackBarProgressBackgroundColor": [
  "#3399FF"
 ],
 "playbackBarOpacity": 1,
 "toolTipPaddingRight": 6,
 "playbackBarHeadShadowOpacity": 0.7,
 "toolTipBorderSize": 1,
 "toolTipPaddingLeft": 6,
 "toolTipPaddingTop": 4,
 "vrPointerColor": "#FFFFFF",
 "toolTipDisplayTime": 600,
 "progressBarOpacity": 1,
 "playbackBarBorderColor": "#FFFFFF",
 "paddingRight": 0,
 "transitionMode": "blending",
 "displayTooltipInTouchScreens": true,
 "progressBorderSize": 0,
 "toolTipBorderRadius": 3,
 "borderRadius": 0,
 "progressBorderRadius": 0,
 "playbackBarHeadShadowVerticalLength": 0,
 "playbackBarProgressBackgroundColorRatios": [
  0
 ],
 "playbackBarLeft": 0,
 "progressBackgroundColorRatios": [
  0
 ],
 "playbackBarHeadHeight": 15,
 "playbackBarHeadShadowBlurRadius": 3,
 "playbackBarHeadBackgroundColorRatios": [
  0,
  1
 ],
 "progressBarBorderColor": "#000000",
 "toolTipBorderColor": "#767676",
 "progressBarBackgroundColorRatios": [
  0
 ],
 "progressBackgroundColorDirection": "vertical",
 "toolTipShadowSpread": 0,
 "toolTipShadowBlurRadius": 3,
 "playbackBarBottom": 0,
 "toolTipTextShadowColor": "#000000",
 "toolTipOpacity": 1,
 "playbackBarHeadOpacity": 1,
 "progressBarBackgroundColor": [
  "#3399FF"
 ],
 "paddingTop": 0,
 "progressBorderColor": "#000000",
 "toolTipPaddingBottom": 4,
 "toolTipFontSize": "1.11vmin",
 "toolTipTextShadowBlurRadius": 3,
 "progressBackgroundColor": [
  "#FFFFFF"
 ],
 "paddingBottom": 0,
 "playbackBarProgressBackgroundColorDirection": "vertical",
 "toolTipShadowColor": "#333333",
 "playbackBarBackgroundColor": [
  "#FFFFFF"
 ],
 "data": {
  "name": "ViewerArea1300"
 },
 "playbackBarHeight": 10,
 "playbackBarHeadWidth": 6,
 "playbackBarBackgroundColorDirection": "vertical",
 "toolTipFontWeight": "normal",
 "playbackBarProgressBorderSize": 0,
 "playbackBarRight": 0
},
{
 "progressBarBorderSize": 0,
 "id": "viewer_uid49832519_4573_3476_41B3_D32E3FCA7841",
 "paddingLeft": 0,
 "playbackBarProgressBorderRadius": 0,
 "progressBarBorderRadius": 0,
 "toolTipShadowOpacity": 1,
 "width": "100%",
 "playbackBarBorderRadius": 0,
 "toolTipFontStyle": "normal",
 "minHeight": 50,
 "playbackBarProgressBorderColor": "#000000",
 "toolTipFontFamily": "Arial",
 "playbackBarHeadBorderColor": "#000000",
 "toolTipTextShadowOpacity": 0,
 "playbackBarHeadBorderRadius": 0,
 "progressLeft": 0,
 "propagateClick": false,
 "playbackBarHeadBorderSize": 0,
 "playbackBarProgressOpacity": 1,
 "minWidth": 100,
 "playbackBarBorderSize": 0,
 "toolTipShadowVerticalLength": 0,
 "vrPointerSelectionColor": "#FF6600",
 "playbackBarBackgroundOpacity": 1,
 "toolTipFontColor": "#606060",
 "transitionDuration": 500,
 "toolTipBackgroundColor": "#F6F6F6",
 "height": "100%",
 "playbackBarHeadShadowColor": "#000000",
 "borderSize": 0,
 "progressRight": 0,
 "toolTipShadowHorizontalLength": 0,
 "firstTransitionDuration": 0,
 "class": "ViewerArea",
 "playbackBarHeadBackgroundColor": [
  "#111111",
  "#666666"
 ],
 "vrPointerSelectionTime": 2000,
 "progressBarBackgroundColorDirection": "vertical",
 "playbackBarHeadShadowHorizontalLength": 0,
 "progressOpacity": 1,
 "shadow": false,
 "progressHeight": 10,
 "playbackBarHeadShadow": true,
 "progressBottom": 2,
 "playbackBarHeadBackgroundColorDirection": "vertical",
 "progressBackgroundOpacity": 1,
 "playbackBarProgressBackgroundColor": [
  "#3399FF"
 ],
 "playbackBarOpacity": 1,
 "toolTipPaddingRight": 6,
 "playbackBarHeadShadowOpacity": 0.7,
 "toolTipBorderSize": 1,
 "toolTipPaddingLeft": 6,
 "toolTipPaddingTop": 4,
 "vrPointerColor": "#FFFFFF",
 "toolTipDisplayTime": 600,
 "progressBarOpacity": 1,
 "playbackBarBorderColor": "#FFFFFF",
 "paddingRight": 0,
 "transitionMode": "blending",
 "displayTooltipInTouchScreens": true,
 "progressBorderSize": 0,
 "toolTipBorderRadius": 3,
 "borderRadius": 0,
 "progressBorderRadius": 0,
 "playbackBarHeadShadowVerticalLength": 0,
 "playbackBarProgressBackgroundColorRatios": [
  0
 ],
 "playbackBarLeft": 0,
 "progressBackgroundColorRatios": [
  0
 ],
 "playbackBarHeadHeight": 15,
 "playbackBarHeadShadowBlurRadius": 3,
 "playbackBarHeadBackgroundColorRatios": [
  0,
  1
 ],
 "progressBarBorderColor": "#000000",
 "toolTipBorderColor": "#767676",
 "progressBarBackgroundColorRatios": [
  0
 ],
 "progressBackgroundColorDirection": "vertical",
 "toolTipShadowSpread": 0,
 "toolTipShadowBlurRadius": 3,
 "playbackBarBottom": 0,
 "toolTipTextShadowColor": "#000000",
 "toolTipOpacity": 1,
 "playbackBarHeadOpacity": 1,
 "progressBarBackgroundColor": [
  "#3399FF"
 ],
 "paddingTop": 0,
 "progressBorderColor": "#000000",
 "toolTipPaddingBottom": 4,
 "toolTipFontSize": "1.11vmin",
 "toolTipTextShadowBlurRadius": 3,
 "progressBackgroundColor": [
  "#FFFFFF"
 ],
 "paddingBottom": 0,
 "playbackBarProgressBackgroundColorDirection": "vertical",
 "toolTipShadowColor": "#333333",
 "playbackBarBackgroundColor": [
  "#FFFFFF"
 ],
 "data": {
  "name": "ViewerArea1301"
 },
 "playbackBarHeight": 10,
 "playbackBarHeadWidth": 6,
 "playbackBarBackgroundColorDirection": "vertical",
 "toolTipFontWeight": "normal",
 "playbackBarProgressBorderSize": 0,
 "playbackBarRight": 0
},
{
 "progressBarBorderSize": 0,
 "id": "viewer_uid4986751C_4573_346E_41A9_5135DE39951A",
 "paddingLeft": 0,
 "playbackBarProgressBorderRadius": 0,
 "progressBarBorderRadius": 0,
 "toolTipShadowOpacity": 1,
 "width": "100%",
 "playbackBarBorderRadius": 0,
 "toolTipFontStyle": "normal",
 "minHeight": 50,
 "playbackBarProgressBorderColor": "#000000",
 "toolTipFontFamily": "Arial",
 "playbackBarHeadBorderColor": "#000000",
 "toolTipTextShadowOpacity": 0,
 "playbackBarHeadBorderRadius": 0,
 "progressLeft": 0,
 "propagateClick": false,
 "playbackBarHeadBorderSize": 0,
 "playbackBarProgressOpacity": 1,
 "minWidth": 100,
 "playbackBarBorderSize": 0,
 "toolTipShadowVerticalLength": 0,
 "vrPointerSelectionColor": "#FF6600",
 "playbackBarBackgroundOpacity": 1,
 "toolTipFontColor": "#606060",
 "transitionDuration": 500,
 "toolTipBackgroundColor": "#F6F6F6",
 "height": "100%",
 "playbackBarHeadShadowColor": "#000000",
 "borderSize": 0,
 "progressRight": 0,
 "toolTipShadowHorizontalLength": 0,
 "firstTransitionDuration": 0,
 "class": "ViewerArea",
 "playbackBarHeadBackgroundColor": [
  "#111111",
  "#666666"
 ],
 "vrPointerSelectionTime": 2000,
 "progressBarBackgroundColorDirection": "vertical",
 "playbackBarHeadShadowHorizontalLength": 0,
 "progressOpacity": 1,
 "shadow": false,
 "progressHeight": 10,
 "playbackBarHeadShadow": true,
 "progressBottom": 2,
 "playbackBarHeadBackgroundColorDirection": "vertical",
 "progressBackgroundOpacity": 1,
 "playbackBarProgressBackgroundColor": [
  "#3399FF"
 ],
 "playbackBarOpacity": 1,
 "toolTipPaddingRight": 6,
 "playbackBarHeadShadowOpacity": 0.7,
 "toolTipBorderSize": 1,
 "toolTipPaddingLeft": 6,
 "toolTipPaddingTop": 4,
 "vrPointerColor": "#FFFFFF",
 "toolTipDisplayTime": 600,
 "progressBarOpacity": 1,
 "playbackBarBorderColor": "#FFFFFF",
 "paddingRight": 0,
 "transitionMode": "blending",
 "displayTooltipInTouchScreens": true,
 "progressBorderSize": 0,
 "toolTipBorderRadius": 3,
 "borderRadius": 0,
 "progressBorderRadius": 0,
 "playbackBarHeadShadowVerticalLength": 0,
 "playbackBarProgressBackgroundColorRatios": [
  0
 ],
 "playbackBarLeft": 0,
 "progressBackgroundColorRatios": [
  0
 ],
 "playbackBarHeadHeight": 15,
 "playbackBarHeadShadowBlurRadius": 3,
 "playbackBarHeadBackgroundColorRatios": [
  0,
  1
 ],
 "progressBarBorderColor": "#000000",
 "toolTipBorderColor": "#767676",
 "progressBarBackgroundColorRatios": [
  0
 ],
 "progressBackgroundColorDirection": "vertical",
 "toolTipShadowSpread": 0,
 "toolTipShadowBlurRadius": 3,
 "playbackBarBottom": 0,
 "toolTipTextShadowColor": "#000000",
 "toolTipOpacity": 1,
 "playbackBarHeadOpacity": 1,
 "progressBarBackgroundColor": [
  "#3399FF"
 ],
 "paddingTop": 0,
 "progressBorderColor": "#000000",
 "toolTipPaddingBottom": 4,
 "toolTipFontSize": "1.11vmin",
 "toolTipTextShadowBlurRadius": 3,
 "progressBackgroundColor": [
  "#FFFFFF"
 ],
 "paddingBottom": 0,
 "playbackBarProgressBackgroundColorDirection": "vertical",
 "toolTipShadowColor": "#333333",
 "playbackBarBackgroundColor": [
  "#FFFFFF"
 ],
 "data": {
  "name": "ViewerArea1305"
 },
 "playbackBarHeight": 10,
 "playbackBarHeadWidth": 6,
 "playbackBarBackgroundColorDirection": "vertical",
 "toolTipFontWeight": "normal",
 "playbackBarProgressBorderSize": 0,
 "playbackBarRight": 0
},
{
 "viewerArea": "this.viewer_uid4981951A_4573_346A_41BF_8EC7143DAE5F",
 "id": "viewer_uid4981951A_4573_346A_41BF_8EC7143DAE5FVideoPlayer",
 "class": "VideoPlayer",
 "displayPlaybackBar": true
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 66.23,
   "yaw": -85.77,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2CDDF16C_3F05_BCFB_41C9_96D6CD6B2B34_0_HS_0_0_map.gif",
      "width": 29,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": 5.3
  }
 ],
 "data": {
  "label": "AREA PETERNAKAN (SAPI, AYAM,KAMBING)\u000d"
 },
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2CDDF16C_3F05_BCFB_41C9_96D6CD6B2B34_0_HS_0_0.png",
      "width": 2048,
      "class": "ImageResourceLevel",
      "height": 1108
     }
    ]
   },
   "pitch": 5.3,
   "hfov": 66.23,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": -85.77,
   "distance": 50
  }
 ],
 "id": "overlay_2B71D357_3F1A_FCD5_41B1_4DA951C1C38C",
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 22.27,
   "yaw": 25.16,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2CDDF16C_3F05_BCFB_41C9_96D6CD6B2B34_0_HS_1_0_0_map.gif",
      "width": 29,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -8.18
  }
 ],
 "data": {
  "label": "Arrow 01a"
 },
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 7)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_4FCE394C_40CC_77F2_41C3_990E5C8C08C7",
   "pitch": -8.18,
   "hfov": 22.27,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": 25.16,
   "distance": 100
  }
 ],
 "id": "overlay_50F322C2_40CC_7AF6_41BE_8CB08D6E914A",
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 21.84,
   "yaw": 146.66,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2CDDF16C_3F05_BCFB_41C9_96D6CD6B2B34_0_HS_2_0_0_map.gif",
      "width": 29,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -13.91
  }
 ],
 "data": {
  "label": "Arrow 01a"
 },
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_2C1DAC6A_3F0A_84FF_41AE_1AF2A5794BA7, this.camera_481655AF_4573_37A9_41A4_A0A191AD905E); this.mainPlayList.set('selectedIndex', 9)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_4FCE494C_40CC_77F2_41C1_1427965F6A2E",
   "pitch": -13.91,
   "hfov": 21.84,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": 146.66,
   "distance": 100
  }
 ],
 "id": "overlay_4F786E64_40CC_CDB2_4192_23B8BA91D80A",
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 12.23,
   "yaw": -90.82,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2CDDF16C_3F05_BCFB_41C9_96D6CD6B2B34_0_HS_3_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -4.5
  }
 ],
 "data": {
  "label": "Image"
 },
 "areas": [
  {
   "click": "if(this.isCardboardViewMode()) { this.showPopupPanoramaVideoOverlay(this.popup_4BAA126C_4404_C4CB_41D0_100E9E44371A, {'pressedBackgroundOpacity':0.3,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconColor':'#888888','rollOverBorderSize':0,'backgroundOpacity':0.3,'iconWidth':20,'paddingLeft':5,'paddingRight':5,'borderSize':0,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'iconHeight':20,'pressedBorderColor':'#000000','rollOverBackgroundColorDirection':'vertical','backgroundColorDirection':'vertical','iconColor':'#000000','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'paddingBottom':5,'pressedIconLineWidth':5,'pressedBorderSize':0,'rollOverBorderColor':'#000000','iconLineWidth':5,'rollOverBackgroundOpacity':0.3,'backgroundColorRatios':[0,0.09803921568627451,1],'rollOverIconHeight':20,'rollOverIconColor':'#666666','rollOverIconWidth':20,'pressedBackgroundColorDirection':'vertical','pressedIconWidth':20,'pressedIconHeight':20,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'paddingTop':5,'rollOverIconLineWidth':5,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'borderColor':'#000000'}, true) } else { this.showPopupMedia(this.window_4F0D96C5_4573_F5DE_41C6_40F51972E19A, this.video_4AD6C297_4405_4444_41C6_DD45A2A49850, this.PlayList_4869652D_4573_34AE_41C9_A3D42FC5B1D2, '95%', '95%', true, true) }",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "hfov": 12.23,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2CDDF16C_3F05_BCFB_41C9_96D6CD6B2B34_0_HS_3_0.png",
      "width": 529,
      "class": "ImageResourceLevel",
      "height": 529
     }
    ]
   },
   "pitch": -4.5,
   "yaw": -90.82,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_4B198BA1_4403_447D_41BA_0A37A4653219",
 "class": "HotspotPanoramaOverlay"
},
{
 "viewerArea": "this.viewer_uid4985151D_4573_346E_41B6_4BC605F6F87D",
 "id": "viewer_uid4985151D_4573_346E_41B6_4BC605F6F87DVideoPlayer",
 "class": "VideoPlayer",
 "displayPlaybackBar": true
},
{
 "viewerArea": "this.viewer_uid498E6517_4573_347A_41C0_DD4ABB550B6C",
 "id": "viewer_uid498E6517_4573_347A_41C0_DD4ABB550B6CVideoPlayer",
 "class": "VideoPlayer",
 "displayPlaybackBar": true
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 63.35,
   "yaw": -99.63,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2C3FE972_3F3A_8CEF_41A7_2E37A55F58A4_0_HS_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 17
     }
    ]
   },
   "pitch": -1.3
  }
 ],
 "data": {
  "label": "AREA PLAZA UTAMA"
 },
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2C3FE972_3F3A_8CEF_41A7_2E37A55F58A4_0_HS_0_0.png",
      "width": 1836,
      "class": "ImageResourceLevel",
      "height": 2047
     }
    ]
   },
   "pitch": -1.3,
   "hfov": 63.35,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": -99.63,
   "distance": 50
  }
 ],
 "id": "overlay_2A4EE3D0_3F0E_9C2B_41C2_7CC4DD92460C",
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 21.35,
   "yaw": 9.61,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2C3FE972_3F3A_8CEF_41A7_2E37A55F58A4_0_HS_1_0_0_map.gif",
      "width": 29,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -18.41
  }
 ],
 "data": {
  "label": "Arrow 01a"
 },
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_2DC7EF70_3F0B_84EB_41A3_4012598CD21E, this.camera_4B7D5663_4573_34DA_41CF_643E87B8AFF4); this.mainPlayList.set('selectedIndex', 5)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_501CB19E_40C4_568E_41C7_5F3DB91B6D75",
   "pitch": -18.41,
   "hfov": 21.35,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": 9.61,
   "distance": 100
  }
 ],
 "id": "overlay_51E4BEA4_40C4_4AB2_41CC_3523E879AAE2",
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 12.19,
   "yaw": -99.82,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2C3FE972_3F3A_8CEF_41A7_2E37A55F58A4_0_HS_2_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -6.55
  }
 ],
 "data": {
  "label": "Image"
 },
 "areas": [
  {
   "click": "if(this.isCardboardViewMode()) { this.showPopupPanoramaVideoOverlay(this.popup_51EC793B_440F_444D_41C0_036185B2EAE6, {'pressedBackgroundOpacity':0.3,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconColor':'#888888','rollOverBorderSize':0,'backgroundOpacity':0.3,'iconWidth':20,'paddingLeft':5,'paddingRight':5,'borderSize':0,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'iconHeight':20,'pressedBorderColor':'#000000','rollOverBackgroundColorDirection':'vertical','backgroundColorDirection':'vertical','iconColor':'#000000','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'paddingBottom':5,'pressedIconLineWidth':5,'pressedBorderSize':0,'rollOverBorderColor':'#000000','iconLineWidth':5,'rollOverBackgroundOpacity':0.3,'backgroundColorRatios':[0,0.09803921568627451,1],'rollOverIconHeight':20,'rollOverIconColor':'#666666','rollOverIconWidth':20,'pressedBackgroundColorDirection':'vertical','pressedIconWidth':20,'pressedIconHeight':20,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'paddingTop':5,'rollOverIconLineWidth':5,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'borderColor':'#000000'}, true) } else { this.showPopupMedia(this.window_4F0EF6C3_4573_F5DA_41CA_CBE5304C5F8A, this.video_5149DD40_440F_3C3B_4193_8EFF54BC27F0, this.PlayList_486A452C_4573_34AE_41C2_C15BA65449E1, '95%', '95%', true, true) }",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "hfov": 12.19,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2C3FE972_3F3A_8CEF_41A7_2E37A55F58A4_0_HS_2_0.png",
      "width": 529,
      "class": "ImageResourceLevel",
      "height": 529
     }
    ]
   },
   "pitch": -6.55,
   "yaw": -99.82,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_51986D60_440F_7CFB_41BB_EAE47B830B5B",
 "class": "HotspotPanoramaOverlay"
},
{
 "progressBarBorderSize": 0,
 "id": "viewer_uid4981951A_4573_346A_41BF_8EC7143DAE5F",
 "paddingLeft": 0,
 "playbackBarProgressBorderRadius": 0,
 "progressBarBorderRadius": 0,
 "toolTipShadowOpacity": 1,
 "width": "100%",
 "playbackBarBorderRadius": 0,
 "toolTipFontStyle": "normal",
 "minHeight": 50,
 "playbackBarProgressBorderColor": "#000000",
 "toolTipFontFamily": "Arial",
 "playbackBarHeadBorderColor": "#000000",
 "toolTipTextShadowOpacity": 0,
 "playbackBarHeadBorderRadius": 0,
 "progressLeft": 0,
 "propagateClick": false,
 "playbackBarHeadBorderSize": 0,
 "playbackBarProgressOpacity": 1,
 "minWidth": 100,
 "playbackBarBorderSize": 0,
 "toolTipShadowVerticalLength": 0,
 "vrPointerSelectionColor": "#FF6600",
 "playbackBarBackgroundOpacity": 1,
 "toolTipFontColor": "#606060",
 "transitionDuration": 500,
 "toolTipBackgroundColor": "#F6F6F6",
 "height": "100%",
 "playbackBarHeadShadowColor": "#000000",
 "borderSize": 0,
 "progressRight": 0,
 "toolTipShadowHorizontalLength": 0,
 "firstTransitionDuration": 0,
 "class": "ViewerArea",
 "playbackBarHeadBackgroundColor": [
  "#111111",
  "#666666"
 ],
 "vrPointerSelectionTime": 2000,
 "progressBarBackgroundColorDirection": "vertical",
 "playbackBarHeadShadowHorizontalLength": 0,
 "progressOpacity": 1,
 "shadow": false,
 "progressHeight": 10,
 "playbackBarHeadShadow": true,
 "progressBottom": 2,
 "playbackBarHeadBackgroundColorDirection": "vertical",
 "progressBackgroundOpacity": 1,
 "playbackBarProgressBackgroundColor": [
  "#3399FF"
 ],
 "playbackBarOpacity": 1,
 "toolTipPaddingRight": 6,
 "playbackBarHeadShadowOpacity": 0.7,
 "toolTipBorderSize": 1,
 "toolTipPaddingLeft": 6,
 "toolTipPaddingTop": 4,
 "vrPointerColor": "#FFFFFF",
 "toolTipDisplayTime": 600,
 "progressBarOpacity": 1,
 "playbackBarBorderColor": "#FFFFFF",
 "paddingRight": 0,
 "transitionMode": "blending",
 "displayTooltipInTouchScreens": true,
 "progressBorderSize": 0,
 "toolTipBorderRadius": 3,
 "borderRadius": 0,
 "progressBorderRadius": 0,
 "playbackBarHeadShadowVerticalLength": 0,
 "playbackBarProgressBackgroundColorRatios": [
  0
 ],
 "playbackBarLeft": 0,
 "progressBackgroundColorRatios": [
  0
 ],
 "playbackBarHeadHeight": 15,
 "playbackBarHeadShadowBlurRadius": 3,
 "playbackBarHeadBackgroundColorRatios": [
  0,
  1
 ],
 "progressBarBorderColor": "#000000",
 "toolTipBorderColor": "#767676",
 "progressBarBackgroundColorRatios": [
  0
 ],
 "progressBackgroundColorDirection": "vertical",
 "toolTipShadowSpread": 0,
 "toolTipShadowBlurRadius": 3,
 "playbackBarBottom": 0,
 "toolTipTextShadowColor": "#000000",
 "toolTipOpacity": 1,
 "playbackBarHeadOpacity": 1,
 "progressBarBackgroundColor": [
  "#3399FF"
 ],
 "paddingTop": 0,
 "progressBorderColor": "#000000",
 "toolTipPaddingBottom": 4,
 "toolTipFontSize": "1.11vmin",
 "toolTipTextShadowBlurRadius": 3,
 "progressBackgroundColor": [
  "#FFFFFF"
 ],
 "paddingBottom": 0,
 "playbackBarProgressBackgroundColorDirection": "vertical",
 "toolTipShadowColor": "#333333",
 "playbackBarBackgroundColor": [
  "#FFFFFF"
 ],
 "data": {
  "name": "ViewerArea1302"
 },
 "playbackBarHeight": 10,
 "playbackBarHeadWidth": 6,
 "playbackBarBackgroundColorDirection": "vertical",
 "toolTipFontWeight": "normal",
 "playbackBarProgressBorderSize": 0,
 "playbackBarRight": 0
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 83.36,
   "yaw": 81.42,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2C9F3FF5_3F07_83D5_41C5_F20BBAC6A7AF_0_HS_0_0_map.gif",
      "width": 34,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -3.03
  }
 ],
 "data": {
  "label": "AREA STABLE KUDA DAN GRAZING AREA"
 },
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2C9F3FF5_3F07_83D5_41C5_F20BBAC6A7AF_0_HS_0_0.png",
      "width": 2048,
      "class": "ImageResourceLevel",
      "height": 951
     }
    ]
   },
   "pitch": -3.03,
   "hfov": 83.36,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": 81.42,
   "distance": 50
  }
 ],
 "id": "overlay_28004497_3F1A_8454_41A9_A98197CAD210",
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 16.11,
   "yaw": -10.84,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2C9F3FF5_3F07_83D5_41C5_F20BBAC6A7AF_0_HS_1_0_0_map.gif",
      "width": 29,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -16.16
  }
 ],
 "data": {
  "label": "Arrow 01a"
 },
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 9)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_52035686_40DF_DD7E_4196_FDFF112CBADE",
   "pitch": -16.16,
   "hfov": 16.11,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": -10.84,
   "distance": 100
  }
 ],
 "id": "overlay_50E2239B_40DC_5A96_41C3_BC405056F893",
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 12.2,
   "yaw": 164.25,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2C9F3FF5_3F07_83D5_41C5_F20BBAC6A7AF_0_HS_2_0_0_map.gif",
      "width": 29,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -25.36
  }
 ],
 "data": {
  "label": "Arrow 01a"
 },
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_2DC7EF70_3F0B_84EB_41A3_4012598CD21E, this.camera_4B0976C8_4573_35D6_41BF_1C98F2934624); this.mainPlayList.set('selectedIndex', 5)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_5202F686_40DF_DD7E_41C1_B91F638A4F01",
   "pitch": -25.36,
   "hfov": 12.2,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": 164.25,
   "distance": 100
  }
 ],
 "id": "overlay_505159F7_40DC_769D_4171_1A78E91CE618",
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 93.8,
   "yaw": -86.19,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2C9F3FF5_3F07_83D5_41C5_F20BBAC6A7AF_0_HS_3_0_map.gif",
      "width": 29,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -6
  }
 ],
 "data": {
  "label": "AREA PERTANIAN, KEBUN, DAN AGROTECHNOPARK"
 },
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2C9F3FF5_3F07_83D5_41C5_F20BBAC6A7AF_0_HS_3_0.png",
      "width": 2048,
      "class": "ImageResourceLevel",
      "height": 1094
     }
    ]
   },
   "pitch": -6,
   "hfov": 93.8,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": -86.19,
   "distance": 50
  }
 ],
 "id": "overlay_550DD0ED_4407_C5C5_41C3_915226C4D0AF",
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 12.12,
   "yaw": 71.59,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2C9F3FF5_3F07_83D5_41C5_F20BBAC6A7AF_0_HS_4_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -9
  }
 ],
 "data": {
  "label": "Image"
 },
 "areas": [
  {
   "click": "if(this.isCardboardViewMode()) { this.showPopupPanoramaVideoOverlay(this.popup_5563E91D_4405_C445_419B_1241E88A1AC9, {'pressedBackgroundOpacity':0.3,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconColor':'#888888','rollOverBorderSize':0,'backgroundOpacity':0.3,'iconWidth':20,'paddingLeft':5,'paddingRight':5,'borderSize':0,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'iconHeight':20,'pressedBorderColor':'#000000','rollOverBackgroundColorDirection':'vertical','backgroundColorDirection':'vertical','iconColor':'#000000','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'paddingBottom':5,'pressedIconLineWidth':5,'pressedBorderSize':0,'rollOverBorderColor':'#000000','iconLineWidth':5,'rollOverBackgroundOpacity':0.3,'backgroundColorRatios':[0,0.09803921568627451,1],'rollOverIconHeight':20,'rollOverIconColor':'#666666','rollOverIconWidth':20,'pressedBackgroundColorDirection':'vertical','pressedIconWidth':20,'pressedIconHeight':20,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'paddingTop':5,'rollOverIconLineWidth':5,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'borderColor':'#000000'}, true) } else { this.showPopupMedia(this.window_4F08E6C1_4573_F5D6_41AD_A1F8A41FDF91, this.video_560760E6_4405_45C7_419D_023103D778D7, this.PlayList_486B152C_4573_34AE_4169_ACC56B9D281F, '95%', '95%', true, true) }",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "hfov": 12.12,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2C9F3FF5_3F07_83D5_41C5_F20BBAC6A7AF_0_HS_4_0.png",
      "width": 529,
      "class": "ImageResourceLevel",
      "height": 529
     }
    ]
   },
   "pitch": -9,
   "yaw": 71.59,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_555C67BC_4404_CC4B_41C6_F1CB370E3C8E",
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 12.19,
   "yaw": -97.36,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2C9F3FF5_3F07_83D5_41C5_F20BBAC6A7AF_0_HS_5_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -6.55
  }
 ],
 "data": {
  "label": "Image"
 },
 "areas": [
  {
   "click": "if(this.isCardboardViewMode()) { this.showPopupPanoramaVideoOverlay(this.popup_55A76C05_4405_3C45_4186_3ACF2B33DF5E, {'pressedBackgroundOpacity':0.3,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconColor':'#888888','rollOverBorderSize':0,'backgroundOpacity':0.3,'iconWidth':20,'paddingLeft':5,'paddingRight':5,'borderSize':0,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'iconHeight':20,'pressedBorderColor':'#000000','rollOverBackgroundColorDirection':'vertical','backgroundColorDirection':'vertical','iconColor':'#000000','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'paddingBottom':5,'pressedIconLineWidth':5,'pressedBorderSize':0,'rollOverBorderColor':'#000000','iconLineWidth':5,'rollOverBackgroundOpacity':0.3,'backgroundColorRatios':[0,0.09803921568627451,1],'rollOverIconHeight':20,'rollOverIconColor':'#666666','rollOverIconWidth':20,'pressedBackgroundColorDirection':'vertical','pressedIconWidth':20,'pressedIconHeight':20,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'paddingTop':5,'rollOverIconLineWidth':5,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'borderColor':'#000000'}, true) } else { this.showPopupMedia(this.window_4F0FF6C2_4573_F5DA_41CC_3A26182E9796, this.video_4ACF9D29_441D_FC4D_41C1_B1689C6AB6F2, this.PlayList_486A952C_4573_34AE_41C3_28AAFF1A0897, '95%', '95%', true, true) }",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "hfov": 12.19,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2C9F3FF5_3F07_83D5_41C5_F20BBAC6A7AF_0_HS_5_0.png",
      "width": 529,
      "class": "ImageResourceLevel",
      "height": 529
     }
    ]
   },
   "pitch": -6.55,
   "yaw": -97.36,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_552DA875_4404_C4C5_41CA_1C34331B3F28",
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 66.65,
   "yaw": -75.09,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2C1DAC6A_3F0A_84FF_41AE_1AF2A5794BA7_0_HS_0_0_map.gif",
      "width": 29,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": 28.28
  }
 ],
 "data": {
  "label": "AREA CAMPING GROUND, LODGE, DAN KONSERVASI"
 },
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2C1DAC6A_3F0A_84FF_41AE_1AF2A5794BA7_0_HS_0_0.png",
      "width": 2048,
      "class": "ImageResourceLevel",
      "height": 1105
     }
    ]
   },
   "pitch": 28.28,
   "hfov": 66.65,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": -75.09,
   "distance": 50
  }
 ],
 "id": "overlay_283F4790_3F0A_842B_41C9_0E0EE918E3DB",
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 20.29,
   "yaw": 19.84,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2C1DAC6A_3F0A_84FF_41AE_1AF2A5794BA7_0_HS_1_0_0_map.gif",
      "width": 29,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -13.5
  }
 ],
 "data": {
  "label": "Arrow 01a"
 },
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_2CDDF16C_3F05_BCFB_41C9_96D6CD6B2B34, this.camera_48345585_4573_345E_41C3_68BD15DC02A6); this.mainPlayList.set('selectedIndex', 10)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_4FCEB94C_40CC_77F2_41C5_95EE988A6321",
   "pitch": -13.5,
   "hfov": 20.29,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": 19.84,
   "distance": 100
  }
 ],
 "id": "overlay_5048CEE3_40C5_CAB6_4179_15BD8DF3C18A",
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 18.7,
   "yaw": 159.75,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2C1DAC6A_3F0A_84FF_41AE_1AF2A5794BA7_0_HS_2_0_0_map.gif",
      "width": 29,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -13.43
  }
 ],
 "data": {
  "label": "Arrow 01a"
 },
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_2B2F1C70_3F0B_84EB_4178_787A635D8E70, this.camera_4824659E_4573_346A_41B4_8A1896B8BCB6); this.mainPlayList.set('selectedIndex', 6)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_50AB2AD4_40C4_4A92_4198_DEEEE2D95AD0",
   "pitch": -13.43,
   "hfov": 18.7,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": 159.75,
   "distance": 100
  }
 ],
 "id": "overlay_4F1F22D4_40C4_5A92_41BD_A6CA20B7BA1E",
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 11.52,
   "yaw": -81.3,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2C1DAC6A_3F0A_84FF_41AE_1AF2A5794BA7_0_HS_3_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": 20.38
  }
 ],
 "data": {
  "label": "Image"
 },
 "areas": [
  {
   "click": "if(this.isCardboardViewMode()) { this.showPopupPanoramaVideoOverlay(this.popup_4B330F4D_440F_DCC4_41CA_B83A4EC75720, {'pressedBackgroundOpacity':0.3,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconColor':'#888888','rollOverBorderSize':0,'backgroundOpacity':0.3,'iconWidth':20,'paddingLeft':5,'paddingRight':5,'borderSize':0,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'iconHeight':20,'pressedBorderColor':'#000000','rollOverBackgroundColorDirection':'vertical','backgroundColorDirection':'vertical','iconColor':'#000000','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'paddingBottom':5,'pressedIconLineWidth':5,'pressedBorderSize':0,'rollOverBorderColor':'#000000','iconLineWidth':5,'rollOverBackgroundOpacity':0.3,'backgroundColorRatios':[0,0.09803921568627451,1],'rollOverIconHeight':20,'rollOverIconColor':'#666666','rollOverIconWidth':20,'pressedBackgroundColorDirection':'vertical','pressedIconWidth':20,'pressedIconHeight':20,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'paddingTop':5,'rollOverIconLineWidth':5,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'borderColor':'#000000'}, true) } else { this.showPopupMedia(this.window_4F0D16C4_4573_F5DE_419F_3A3B6ED3D7A8, this.video_4ABD37E6_440F_4BC7_41CC_AC3E80E529F7, this.PlayList_4869C52C_4573_34AE_41A8_EE79AC729FF9, '95%', '95%', true, true) }",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "hfov": 11.52,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2C1DAC6A_3F0A_84FF_41AE_1AF2A5794BA7_0_HS_3_0.png",
      "width": 529,
      "class": "ImageResourceLevel",
      "height": 529
     }
    ]
   },
   "pitch": 20.38,
   "yaw": -81.3,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_4AC911F6_440F_C7C7_41CB_B99A81BFBE1C",
 "class": "HotspotPanoramaOverlay"
},
{
 "progressBarBorderSize": 0,
 "id": "viewer_uid49978512_4573_347A_41B0_99B31C16E52A",
 "paddingLeft": 0,
 "playbackBarProgressBorderRadius": 0,
 "progressBarBorderRadius": 0,
 "toolTipShadowOpacity": 1,
 "width": "100%",
 "playbackBarBorderRadius": 0,
 "toolTipFontStyle": "normal",
 "minHeight": 50,
 "playbackBarProgressBorderColor": "#000000",
 "toolTipFontFamily": "Arial",
 "playbackBarHeadBorderColor": "#000000",
 "toolTipTextShadowOpacity": 0,
 "playbackBarHeadBorderRadius": 0,
 "progressLeft": 0,
 "propagateClick": false,
 "playbackBarHeadBorderSize": 0,
 "playbackBarProgressOpacity": 1,
 "minWidth": 100,
 "playbackBarBorderSize": 0,
 "toolTipShadowVerticalLength": 0,
 "vrPointerSelectionColor": "#FF6600",
 "playbackBarBackgroundOpacity": 1,
 "toolTipFontColor": "#606060",
 "transitionDuration": 500,
 "toolTipBackgroundColor": "#F6F6F6",
 "height": "100%",
 "playbackBarHeadShadowColor": "#000000",
 "borderSize": 0,
 "progressRight": 0,
 "toolTipShadowHorizontalLength": 0,
 "firstTransitionDuration": 0,
 "class": "ViewerArea",
 "playbackBarHeadBackgroundColor": [
  "#111111",
  "#666666"
 ],
 "vrPointerSelectionTime": 2000,
 "progressBarBackgroundColorDirection": "vertical",
 "playbackBarHeadShadowHorizontalLength": 0,
 "progressOpacity": 1,
 "shadow": false,
 "progressHeight": 10,
 "playbackBarHeadShadow": true,
 "progressBottom": 2,
 "playbackBarHeadBackgroundColorDirection": "vertical",
 "progressBackgroundOpacity": 1,
 "playbackBarProgressBackgroundColor": [
  "#3399FF"
 ],
 "playbackBarOpacity": 1,
 "toolTipPaddingRight": 6,
 "playbackBarHeadShadowOpacity": 0.7,
 "toolTipBorderSize": 1,
 "toolTipPaddingLeft": 6,
 "toolTipPaddingTop": 4,
 "vrPointerColor": "#FFFFFF",
 "toolTipDisplayTime": 600,
 "progressBarOpacity": 1,
 "playbackBarBorderColor": "#FFFFFF",
 "paddingRight": 0,
 "transitionMode": "blending",
 "displayTooltipInTouchScreens": true,
 "progressBorderSize": 0,
 "toolTipBorderRadius": 3,
 "borderRadius": 0,
 "progressBorderRadius": 0,
 "playbackBarHeadShadowVerticalLength": 0,
 "playbackBarProgressBackgroundColorRatios": [
  0
 ],
 "playbackBarLeft": 0,
 "progressBackgroundColorRatios": [
  0
 ],
 "playbackBarHeadHeight": 15,
 "playbackBarHeadShadowBlurRadius": 3,
 "playbackBarHeadBackgroundColorRatios": [
  0,
  1
 ],
 "progressBarBorderColor": "#000000",
 "toolTipBorderColor": "#767676",
 "progressBarBackgroundColorRatios": [
  0
 ],
 "progressBackgroundColorDirection": "vertical",
 "toolTipShadowSpread": 0,
 "toolTipShadowBlurRadius": 3,
 "playbackBarBottom": 0,
 "toolTipTextShadowColor": "#000000",
 "toolTipOpacity": 1,
 "playbackBarHeadOpacity": 1,
 "progressBarBackgroundColor": [
  "#3399FF"
 ],
 "paddingTop": 0,
 "progressBorderColor": "#000000",
 "toolTipPaddingBottom": 4,
 "toolTipFontSize": "1.11vmin",
 "toolTipTextShadowBlurRadius": 3,
 "progressBackgroundColor": [
  "#FFFFFF"
 ],
 "paddingBottom": 0,
 "playbackBarProgressBackgroundColorDirection": "vertical",
 "toolTipShadowColor": "#333333",
 "playbackBarBackgroundColor": [
  "#FFFFFF"
 ],
 "data": {
  "name": "ViewerArea1296"
 },
 "playbackBarHeight": 10,
 "playbackBarHeadWidth": 6,
 "playbackBarBackgroundColorDirection": "vertical",
 "toolTipFontWeight": "normal",
 "playbackBarProgressBorderSize": 0,
 "playbackBarRight": 0
},
{
 "colCount": 3,
 "class": "AnimatedImageResource",
 "frameDuration": 62,
 "levels": [
  {
   "url": "media/panorama_2B2F1C70_3F0B_84EB_4178_787A635D8E70_0_HS_1_0.png",
   "width": 330,
   "class": "ImageResourceLevel",
   "height": 180
  }
 ],
 "id": "AnimatedImageResource_52257D97_40BC_4E9E_41BC_9FE475ECCAC3",
 "rowCount": 3,
 "frameCount": 9
},
{
 "colCount": 3,
 "class": "AnimatedImageResource",
 "frameDuration": 62,
 "levels": [
  {
   "url": "media/panorama_2B2F1C70_3F0B_84EB_4178_787A635D8E70_0_HS_2_0.png",
   "width": 330,
   "class": "ImageResourceLevel",
   "height": 180
  }
 ],
 "id": "AnimatedImageResource_501F2BE1_40C4_CAB2_41A0_B660F4DC79E0",
 "rowCount": 3,
 "frameCount": 9
},
{
 "colCount": 3,
 "class": "AnimatedImageResource",
 "frameDuration": 62,
 "levels": [
  {
   "url": "media/panorama_2B7EFF51_3F0D_842D_41C8_DB30063C8773_0_HS_2_0.png",
   "width": 330,
   "class": "ImageResourceLevel",
   "height": 180
  }
 ],
 "id": "AnimatedImageResource_54F49E91_40C4_4A92_41CA_2F08FC385CE1",
 "rowCount": 3,
 "frameCount": 9
},
{
 "colCount": 3,
 "class": "AnimatedImageResource",
 "frameDuration": 62,
 "levels": [
  {
   "url": "media/panorama_2B7EFF51_3F0D_842D_41C8_DB30063C8773_0_HS_3_0.png",
   "width": 330,
   "class": "ImageResourceLevel",
   "height": 180
  }
 ],
 "id": "AnimatedImageResource_54F42E92_40C4_4A96_41C7_5E37A7111029",
 "rowCount": 3,
 "frameCount": 9
},
{
 "colCount": 3,
 "class": "AnimatedImageResource",
 "frameDuration": 62,
 "levels": [
  {
   "url": "media/panorama_2B7EFF51_3F0D_842D_41C8_DB30063C8773_0_HS_4_0.png",
   "width": 330,
   "class": "ImageResourceLevel",
   "height": 180
  }
 ],
 "id": "AnimatedImageResource_5CCDA728_440C_CC4B_41C4_83ED8FE7FBFD",
 "rowCount": 3,
 "frameCount": 9
},
{
 "colCount": 3,
 "class": "AnimatedImageResource",
 "frameDuration": 62,
 "levels": [
  {
   "url": "media/panorama_3340DE24_3EFF_846B_41BA_156D465E8DB5_0_HS_0_0.png",
   "width": 330,
   "class": "ImageResourceLevel",
   "height": 180
  }
 ],
 "id": "AnimatedImageResource_3159A639_3F06_845D_4195_A370BDF6EB63",
 "rowCount": 3,
 "frameCount": 9
},
{
 "colCount": 3,
 "class": "AnimatedImageResource",
 "frameDuration": 62,
 "levels": [
  {
   "url": "media/panorama_3340DE24_3EFF_846B_41BA_156D465E8DB5_0_HS_1_0.png",
   "width": 330,
   "class": "ImageResourceLevel",
   "height": 180
  }
 ],
 "id": "AnimatedImageResource_2A83B717_3F3A_8454_41A2_687E30FA6275",
 "rowCount": 3,
 "frameCount": 9
},
{
 "colCount": 3,
 "class": "AnimatedImageResource",
 "frameDuration": 62,
 "levels": [
  {
   "url": "media/panorama_2DC7EF70_3F0B_84EB_41A3_4012598CD21E_0_HS_0_0.png",
   "width": 330,
   "class": "ImageResourceLevel",
   "height": 180
  }
 ],
 "id": "AnimatedImageResource_2A643C75_3F3B_84D5_41A9_F804BF583CAC",
 "rowCount": 3,
 "frameCount": 9
},
{
 "colCount": 3,
 "class": "AnimatedImageResource",
 "frameDuration": 62,
 "levels": [
  {
   "url": "media/panorama_2DC7EF70_3F0B_84EB_41A3_4012598CD21E_0_HS_2_0.png",
   "width": 330,
   "class": "ImageResourceLevel",
   "height": 180
  }
 ],
 "id": "AnimatedImageResource_5033317A_40C4_3796_41CD_770AB9FEF60D",
 "rowCount": 3,
 "frameCount": 9
},
{
 "colCount": 3,
 "class": "AnimatedImageResource",
 "frameDuration": 62,
 "levels": [
  {
   "url": "media/panorama_2DC7EF70_3F0B_84EB_41A3_4012598CD21E_0_HS_3_0.png",
   "width": 330,
   "class": "ImageResourceLevel",
   "height": 180
  }
 ],
 "id": "AnimatedImageResource_5032A17A_40C4_3796_41B1_5E55C8D22966",
 "rowCount": 3,
 "frameCount": 9
},
{
 "colCount": 3,
 "class": "AnimatedImageResource",
 "frameDuration": 62,
 "levels": [
  {
   "url": "media/panorama_2DC7EF70_3F0B_84EB_41A3_4012598CD21E_0_HS_8_0.png",
   "width": 330,
   "class": "ImageResourceLevel",
   "height": 180
  }
 ],
 "id": "AnimatedImageResource_511FFB56_440D_C4C7_415B_7EE4FFAC5552",
 "rowCount": 3,
 "frameCount": 9
},
{
 "colCount": 3,
 "class": "AnimatedImageResource",
 "frameDuration": 62,
 "levels": [
  {
   "url": "media/panorama_34984BC9_3EFB_8C3D_41AC_376559BB2588_0_HS_0_0.png",
   "width": 330,
   "class": "ImageResourceLevel",
   "height": 180
  }
 ],
 "id": "AnimatedImageResource_2E517794_3F07_8454_419E_0A3D4E90C33D",
 "rowCount": 3,
 "frameCount": 9
},
{
 "colCount": 3,
 "class": "AnimatedImageResource",
 "frameDuration": 62,
 "levels": [
  {
   "url": "media/panorama_34984BC9_3EFB_8C3D_41AC_376559BB2588_0_HS_6_0.png",
   "width": 330,
   "class": "ImageResourceLevel",
   "height": 180
  }
 ],
 "id": "AnimatedImageResource_5C0228F0_440D_45DB_41C7_5D17F1E15F43",
 "rowCount": 3,
 "frameCount": 9
},
{
 "colCount": 3,
 "class": "AnimatedImageResource",
 "frameDuration": 62,
 "levels": [
  {
   "url": "media/panorama_2CDDF16C_3F05_BCFB_41C9_96D6CD6B2B34_0_HS_1_0.png",
   "width": 330,
   "class": "ImageResourceLevel",
   "height": 180
  }
 ],
 "id": "AnimatedImageResource_4FCE394C_40CC_77F2_41C3_990E5C8C08C7",
 "rowCount": 3,
 "frameCount": 9
},
{
 "colCount": 3,
 "class": "AnimatedImageResource",
 "frameDuration": 62,
 "levels": [
  {
   "url": "media/panorama_2CDDF16C_3F05_BCFB_41C9_96D6CD6B2B34_0_HS_2_0.png",
   "width": 330,
   "class": "ImageResourceLevel",
   "height": 180
  }
 ],
 "id": "AnimatedImageResource_4FCE494C_40CC_77F2_41C1_1427965F6A2E",
 "rowCount": 3,
 "frameCount": 9
},
{
 "colCount": 3,
 "class": "AnimatedImageResource",
 "frameDuration": 62,
 "levels": [
  {
   "url": "media/panorama_2C3FE972_3F3A_8CEF_41A7_2E37A55F58A4_0_HS_1_0.png",
   "width": 330,
   "class": "ImageResourceLevel",
   "height": 180
  }
 ],
 "id": "AnimatedImageResource_501CB19E_40C4_568E_41C7_5F3DB91B6D75",
 "rowCount": 3,
 "frameCount": 9
},
{
 "colCount": 3,
 "class": "AnimatedImageResource",
 "frameDuration": 62,
 "levels": [
  {
   "url": "media/panorama_2C9F3FF5_3F07_83D5_41C5_F20BBAC6A7AF_0_HS_1_0.png",
   "width": 330,
   "class": "ImageResourceLevel",
   "height": 180
  }
 ],
 "id": "AnimatedImageResource_52035686_40DF_DD7E_4196_FDFF112CBADE",
 "rowCount": 3,
 "frameCount": 9
},
{
 "colCount": 3,
 "class": "AnimatedImageResource",
 "frameDuration": 62,
 "levels": [
  {
   "url": "media/panorama_2C9F3FF5_3F07_83D5_41C5_F20BBAC6A7AF_0_HS_2_0.png",
   "width": 330,
   "class": "ImageResourceLevel",
   "height": 180
  }
 ],
 "id": "AnimatedImageResource_5202F686_40DF_DD7E_41C1_B91F638A4F01",
 "rowCount": 3,
 "frameCount": 9
},
{
 "colCount": 3,
 "class": "AnimatedImageResource",
 "frameDuration": 62,
 "levels": [
  {
   "url": "media/panorama_2C1DAC6A_3F0A_84FF_41AE_1AF2A5794BA7_0_HS_1_0.png",
   "width": 330,
   "class": "ImageResourceLevel",
   "height": 180
  }
 ],
 "id": "AnimatedImageResource_4FCEB94C_40CC_77F2_41C5_95EE988A6321",
 "rowCount": 3,
 "frameCount": 9
},
{
 "colCount": 3,
 "class": "AnimatedImageResource",
 "frameDuration": 62,
 "levels": [
  {
   "url": "media/panorama_2C1DAC6A_3F0A_84FF_41AE_1AF2A5794BA7_0_HS_2_0.png",
   "width": 330,
   "class": "ImageResourceLevel",
   "height": 180
  }
 ],
 "id": "AnimatedImageResource_50AB2AD4_40C4_4A92_4198_DEEEE2D95AD0",
 "rowCount": 3,
 "frameCount": 9
}],
 "minWidth": 20,
 "vrPolyfillScale": 0.5,
 "verticalAlign": "top",
 "backgroundPreloadEnabled": true,
 "borderSize": 0,
 "class": "Player",
 "paddingBottom": 0,
 "contentOpaque": false,
 "shadow": false,
 "scrollBarColor": "#000000",
 "horizontalAlign": "left",
 "data": {
  "name": "Player450"
 },
 "scripts": {
  "getMediaWidth": function(media){  switch(media.get('class')){ case 'Video360': var res = media.get('video'); if(res instanceof Array){ var maxW=0; for(var i=0; i<res.length; i++){ var r = res[i]; if(r.get('width') > maxW) maxW = r.get('width'); } return maxW; }else{ return r.get('width') } default: return media.get('width'); } },
  "showComponentsWhileMouseOver": function(parentComponent, components, durationVisibleWhileOut){  var setVisibility = function(visible){ for(var i = 0, length = components.length; i<length; i++){ var component = components[i]; if(component.get('class') == 'HTMLText' && (component.get('html') == '' || component.get('html') == undefined)) { continue; } component.set('visible', visible); } }; if (this.rootPlayer.get('touchDevice') == true){ setVisibility(true); } else { var timeoutID = -1; var rollOverFunction = function(){ setVisibility(true); if(timeoutID >= 0) clearTimeout(timeoutID); parentComponent.unbind('rollOver', rollOverFunction, this); parentComponent.bind('rollOut', rollOutFunction, this); }; var rollOutFunction = function(){ var timeoutFunction = function(){ setVisibility(false); parentComponent.unbind('rollOver', rollOverFunction, this); }; parentComponent.unbind('rollOut', rollOutFunction, this); parentComponent.bind('rollOver', rollOverFunction, this); timeoutID = setTimeout(timeoutFunction, durationVisibleWhileOut); }; parentComponent.bind('rollOver', rollOverFunction, this); } },
  "isCardboardViewMode": function(){  var players = this.getByClassName('PanoramaPlayer'); return players.length > 0 && players[0].get('viewMode') == 'cardboard'; },
  "showWindow": function(w, autoCloseMilliSeconds, containsAudio){  if(w.get('visible') == true){ return; } var closeFunction = function(){ clearAutoClose(); this.resumePlayers(playersPaused, !containsAudio); w.unbind('close', closeFunction, this); }; var clearAutoClose = function(){ w.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ w.hide(); }; w.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } var playersPaused = this.pauseCurrentPlayers(!containsAudio); w.bind('close', closeFunction, this); w.show(this, true); },
  "openLink": function(url, name){  if(url == location.href) { return; } var isElectron = (window && window.process && window.process.versions && window.process.versions['electron']) || (navigator && navigator.userAgent && navigator.userAgent.indexOf('Electron') >= 0); if (name == '_blank' && isElectron) { if (url.startsWith('/')) { var r = window.location.href.split('/'); r.pop(); url = r.join('/') + url; } var extension = url.split('.').pop().toLowerCase(); if(extension != 'pdf' || url.startsWith('file://')) { var shell = window.require('electron').shell; shell.openExternal(url); } else { window.open(url, name); } } else if(isElectron && (name == '_top' || name == '_self')) { window.location = url; } else { var newWindow = window.open(url, name); newWindow.focus(); } },
  "setOverlayBehaviour": function(overlay, media, action){  var executeFunc = function() { switch(action){ case 'triggerClick': this.triggerOverlay(overlay, 'click'); break; case 'stop': case 'play': case 'pause': overlay[action](); break; case 'togglePlayPause': case 'togglePlayStop': if(overlay.get('state') == 'playing') overlay[action == 'togglePlayPause' ? 'pause' : 'stop'](); else overlay.play(); break; } if(window.overlaysDispatched == undefined) window.overlaysDispatched = {}; var id = overlay.get('id'); window.overlaysDispatched[id] = true; setTimeout(function(){ delete window.overlaysDispatched[id]; }, 2000); }; if(window.overlaysDispatched != undefined && overlay.get('id') in window.overlaysDispatched) return; var playList = this.getPlayListWithMedia(media, true); if(playList != undefined){ var item = this.getPlayListItemByMedia(playList, media); if(playList.get('items').indexOf(item) != playList.get('selectedIndex')){ var beginFunc = function(e){ item.unbind('begin', beginFunc, this); executeFunc.call(this); }; item.bind('begin', beginFunc, this); return; } } executeFunc.call(this); },
  "setMainMediaByIndex": function(index){  var item = undefined; if(index >= 0 && index < this.mainPlayList.get('items').length){ this.mainPlayList.set('selectedIndex', index); item = this.mainPlayList.get('items')[index]; } return item; },
  "autotriggerAtStart": function(playList, callback, once){  var onChange = function(event){ callback(); if(once == true) playList.unbind('change', onChange, this); }; playList.bind('change', onChange, this); },
  "changeBackgroundWhilePlay": function(playList, index, color){  var stopFunction = function(event){ playListItem.unbind('stop', stopFunction, this); if((color == viewerArea.get('backgroundColor')) && (colorRatios == viewerArea.get('backgroundColorRatios'))){ viewerArea.set('backgroundColor', backgroundColorBackup); viewerArea.set('backgroundColorRatios', backgroundColorRatiosBackup); } }; var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var viewerArea = player.get('viewerArea'); var backgroundColorBackup = viewerArea.get('backgroundColor'); var backgroundColorRatiosBackup = viewerArea.get('backgroundColorRatios'); var colorRatios = [0]; if((color != backgroundColorBackup) || (colorRatios != backgroundColorRatiosBackup)){ viewerArea.set('backgroundColor', color); viewerArea.set('backgroundColorRatios', colorRatios); playListItem.bind('stop', stopFunction, this); } },
  "pauseGlobalAudios": function(caller, exclude){  if (window.pauseGlobalAudiosState == undefined) window.pauseGlobalAudiosState = {}; if (window.pauseGlobalAudiosList == undefined) window.pauseGlobalAudiosList = []; if (caller in window.pauseGlobalAudiosState) { return; } var audios = this.getByClassName('Audio').concat(this.getByClassName('VideoPanoramaOverlay')); if (window.currentGlobalAudios != undefined) audios = audios.concat(Object.values(window.currentGlobalAudios)); var audiosPaused = []; var values = Object.values(window.pauseGlobalAudiosState); for (var i = 0, count = values.length; i<count; ++i) { var objAudios = values[i]; for (var j = 0; j<objAudios.length; ++j) { var a = objAudios[j]; if(audiosPaused.indexOf(a) == -1) audiosPaused.push(a); } } window.pauseGlobalAudiosState[caller] = audiosPaused; for (var i = 0, count = audios.length; i < count; ++i) { var a = audios[i]; if (a.get('state') == 'playing' && (exclude == undefined || exclude.indexOf(a) == -1)) { a.pause(); audiosPaused.push(a); } } },
  "getPanoramaOverlayByName": function(panorama, name){  var overlays = this.getOverlays(panorama); for(var i = 0, count = overlays.length; i<count; ++i){ var overlay = overlays[i]; var data = overlay.get('data'); if(data != undefined && data.label == name){ return overlay; } } return undefined; },
  "setStartTimeVideoSync": function(video, player){  this.setStartTimeVideo(video, player.get('currentTime')); },
  "fixTogglePlayPauseButton": function(player){  var state = player.get('state'); var buttons = player.get('buttonPlayPause'); if(typeof buttons !== 'undefined' && player.get('state') == 'playing'){ if(!Array.isArray(buttons)) buttons = [buttons]; for(var i = 0; i<buttons.length; ++i) buttons[i].set('pressed', true); } },
  "initGA": function(){  var sendFunc = function(category, event, label) { ga('send', 'event', category, event, label); }; var media = this.getByClassName('Panorama'); media = media.concat(this.getByClassName('Video360')); media = media.concat(this.getByClassName('Map')); for(var i = 0, countI = media.length; i<countI; ++i){ var m = media[i]; var mediaLabel = m.get('label'); var overlays = this.getOverlays(m); for(var j = 0, countJ = overlays.length; j<countJ; ++j){ var overlay = overlays[j]; var overlayLabel = overlay.get('data') != undefined ? mediaLabel + ' - ' + overlay.get('data')['label'] : mediaLabel; switch(overlay.get('class')) { case 'HotspotPanoramaOverlay': case 'HotspotMapOverlay': var areas = overlay.get('areas'); for (var z = 0; z<areas.length; ++z) { areas[z].bind('click', sendFunc.bind(this, 'Hotspot', 'click', overlayLabel), this); } break; case 'CeilingCapPanoramaOverlay': case 'TripodCapPanoramaOverlay': overlay.bind('click', sendFunc.bind(this, 'Cap', 'click', overlayLabel), this); break; } } } var components = this.getByClassName('Button'); components = components.concat(this.getByClassName('IconButton')); for(var i = 0, countI = components.length; i<countI; ++i){ var c = components[i]; var componentLabel = c.get('data')['name']; c.bind('click', sendFunc.bind(this, 'Skin', 'click', componentLabel), this); } var items = this.getByClassName('PlayListItem'); var media2Item = {}; for(var i = 0, countI = items.length; i<countI; ++i) { var item = items[i]; var media = item.get('media'); if(!(media.get('id') in media2Item)) { item.bind('begin', sendFunc.bind(this, 'Media', 'play', media.get('label')), this); media2Item[media.get('id')] = item; } } },
  "updateMediaLabelFromPlayList": function(playList, htmlText, playListItemStopToDispose){  var changeFunction = function(){ var index = playList.get('selectedIndex'); if(index >= 0){ var beginFunction = function(){ playListItem.unbind('begin', beginFunction); setMediaLabel(index); }; var setMediaLabel = function(index){ var media = playListItem.get('media'); var text = media.get('data'); if(!text) text = media.get('label'); setHtml(text); }; var setHtml = function(text){ if(text !== undefined) { htmlText.set('html', '<div style=\"text-align:left\"><SPAN STYLE=\"color:#FFFFFF;font-size:12px;font-family:Verdana\"><span color=\"white\" font-family=\"Verdana\" font-size=\"12px\">' + text + '</SPAN></div>'); } else { htmlText.set('html', ''); } }; var playListItem = playList.get('items')[index]; if(htmlText.get('html')){ setHtml('Loading...'); playListItem.bind('begin', beginFunction); } else{ setMediaLabel(index); } } }; var disposeFunction = function(){ htmlText.set('html', undefined); playList.unbind('change', changeFunction, this); playListItemStopToDispose.unbind('stop', disposeFunction, this); }; if(playListItemStopToDispose){ playListItemStopToDispose.bind('stop', disposeFunction, this); } playList.bind('change', changeFunction, this); changeFunction(); },
  "getCurrentPlayerWithMedia": function(media){  var playerClass = undefined; var mediaPropertyName = undefined; switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'panorama'; break; case 'Video360': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'video'; break; case 'PhotoAlbum': playerClass = 'PhotoAlbumPlayer'; mediaPropertyName = 'photoAlbum'; break; case 'Map': playerClass = 'MapPlayer'; mediaPropertyName = 'map'; break; case 'Video': playerClass = 'VideoPlayer'; mediaPropertyName = 'video'; break; }; if(playerClass != undefined) { var players = this.getByClassName(playerClass); for(var i = 0; i<players.length; ++i){ var player = players[i]; if(player.get(mediaPropertyName) == media) { return player; } } } else { return undefined; } },
  "getPlayListItems": function(media, player){  var itemClass = (function() { switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': return 'PanoramaPlayListItem'; case 'Video360': return 'Video360PlayListItem'; case 'PhotoAlbum': return 'PhotoAlbumPlayListItem'; case 'Map': return 'MapPlayListItem'; case 'Video': return 'VideoPlayListItem'; } })(); if (itemClass != undefined) { var items = this.getByClassName(itemClass); for (var i = items.length-1; i>=0; --i) { var item = items[i]; if(item.get('media') != media || (player != undefined && item.get('player') != player)) { items.splice(i, 1); } } return items; } else { return []; } },
  "setMediaBehaviour": function(playList, index, mediaDispatcher){  var self = this; var stateChangeFunction = function(event){ if(event.data.state == 'stopped'){ dispose.call(this, true); } }; var onBeginFunction = function() { item.unbind('begin', onBeginFunction, self); var media = item.get('media'); if(media.get('class') != 'Panorama' || (media.get('camera') != undefined && media.get('camera').get('initialSequence') != undefined)){ player.bind('stateChange', stateChangeFunction, self); } }; var changeFunction = function(){ var index = playListDispatcher.get('selectedIndex'); if(index != -1){ indexDispatcher = index; dispose.call(this, false); } }; var disposeCallback = function(){ dispose.call(this, false); }; var dispose = function(forceDispose){ if(!playListDispatcher) return; var media = item.get('media'); if((media.get('class') == 'Video360' || media.get('class') == 'Video') && media.get('loop') == true && !forceDispose) return; playList.set('selectedIndex', -1); if(panoramaSequence && panoramaSequenceIndex != -1){ if(panoramaSequence) { if(panoramaSequenceIndex > 0 && panoramaSequence.get('movements')[panoramaSequenceIndex-1].get('class') == 'TargetPanoramaCameraMovement'){ var initialPosition = camera.get('initialPosition'); var oldYaw = initialPosition.get('yaw'); var oldPitch = initialPosition.get('pitch'); var oldHfov = initialPosition.get('hfov'); var previousMovement = panoramaSequence.get('movements')[panoramaSequenceIndex-1]; initialPosition.set('yaw', previousMovement.get('targetYaw')); initialPosition.set('pitch', previousMovement.get('targetPitch')); initialPosition.set('hfov', previousMovement.get('targetHfov')); var restoreInitialPositionFunction = function(event){ initialPosition.set('yaw', oldYaw); initialPosition.set('pitch', oldPitch); initialPosition.set('hfov', oldHfov); itemDispatcher.unbind('end', restoreInitialPositionFunction, this); }; itemDispatcher.bind('end', restoreInitialPositionFunction, this); } panoramaSequence.set('movementIndex', panoramaSequenceIndex); } } if(player){ item.unbind('begin', onBeginFunction, this); player.unbind('stateChange', stateChangeFunction, this); for(var i = 0; i<buttons.length; ++i) { buttons[i].unbind('click', disposeCallback, this); } } if(sameViewerArea){ var currentMedia = this.getMediaFromPlayer(player); if(currentMedia == undefined || currentMedia == item.get('media')){ playListDispatcher.set('selectedIndex', indexDispatcher); } if(playList != playListDispatcher) playListDispatcher.unbind('change', changeFunction, this); } else{ viewerArea.set('visible', viewerVisibility); } playListDispatcher = undefined; }; var mediaDispatcherByParam = mediaDispatcher != undefined; if(!mediaDispatcher){ var currentIndex = playList.get('selectedIndex'); var currentPlayer = (currentIndex != -1) ? playList.get('items')[playList.get('selectedIndex')].get('player') : this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer) { mediaDispatcher = this.getMediaFromPlayer(currentPlayer); } } var playListDispatcher = mediaDispatcher ? this.getPlayListWithMedia(mediaDispatcher, true) : undefined; if(!playListDispatcher){ playList.set('selectedIndex', index); return; } var indexDispatcher = playListDispatcher.get('selectedIndex'); if(playList.get('selectedIndex') == index || indexDispatcher == -1){ return; } var item = playList.get('items')[index]; var itemDispatcher = playListDispatcher.get('items')[indexDispatcher]; var player = item.get('player'); var viewerArea = player.get('viewerArea'); var viewerVisibility = viewerArea.get('visible'); var sameViewerArea = viewerArea == itemDispatcher.get('player').get('viewerArea'); if(sameViewerArea){ if(playList != playListDispatcher){ playListDispatcher.set('selectedIndex', -1); playListDispatcher.bind('change', changeFunction, this); } } else{ viewerArea.set('visible', true); } var panoramaSequenceIndex = -1; var panoramaSequence = undefined; var camera = itemDispatcher.get('camera'); if(camera){ panoramaSequence = camera.get('initialSequence'); if(panoramaSequence) { panoramaSequenceIndex = panoramaSequence.get('movementIndex'); } } playList.set('selectedIndex', index); var buttons = []; var addButtons = function(property){ var value = player.get(property); if(value == undefined) return; if(Array.isArray(value)) buttons = buttons.concat(value); else buttons.push(value); }; addButtons('buttonStop'); for(var i = 0; i<buttons.length; ++i) { buttons[i].bind('click', disposeCallback, this); } if(player != itemDispatcher.get('player') || !mediaDispatcherByParam){ item.bind('begin', onBeginFunction, self); } this.executeFunctionWhenChange(playList, index, disposeCallback); },
  "setEndToItemIndex": function(playList, fromIndex, toIndex){  var endFunction = function(){ if(playList.get('selectedIndex') == fromIndex) playList.set('selectedIndex', toIndex); }; this.executeFunctionWhenChange(playList, fromIndex, endFunction); },
  "startPanoramaWithCamera": function(media, camera){  if(window.currentPanoramasWithCameraChanged != undefined && window.currentPanoramasWithCameraChanged.indexOf(media) != -1){ return; } var playLists = this.getByClassName('PlayList'); if(playLists.length == 0) return; var restoreItems = []; for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ var item = items[j]; if(item.get('media') == media && (item.get('class') == 'PanoramaPlayListItem' || item.get('class') == 'Video360PlayListItem')){ restoreItems.push({camera: item.get('camera'), item: item}); item.set('camera', camera); } } } if(restoreItems.length > 0) { if(window.currentPanoramasWithCameraChanged == undefined) { window.currentPanoramasWithCameraChanged = [media]; } else { window.currentPanoramasWithCameraChanged.push(media); } var restoreCameraOnStop = function(){ var index = window.currentPanoramasWithCameraChanged.indexOf(media); if(index != -1) { window.currentPanoramasWithCameraChanged.splice(index, 1); } for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.set('camera', restoreItems[i].camera); restoreItems[i].item.unbind('stop', restoreCameraOnStop, this); } }; for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.bind('stop', restoreCameraOnStop, this); } } },
  "showPopupImage": function(image, toggleImage, customWidth, customHeight, showEffect, hideEffect, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedCallback, hideCallback){  var self = this; var closed = false; var playerClickFunction = function() { zoomImage.unbind('loaded', loadedFunction, self); hideFunction(); }; var clearAutoClose = function(){ zoomImage.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var resizeFunction = function(){ setTimeout(setCloseButtonPosition, 0); }; var loadedFunction = function(){ self.unbind('click', playerClickFunction, self); veil.set('visible', true); setCloseButtonPosition(); closeButton.set('visible', true); zoomImage.unbind('loaded', loadedFunction, this); zoomImage.bind('userInteractionStart', userInteractionStartFunction, this); zoomImage.bind('userInteractionEnd', userInteractionEndFunction, this); zoomImage.bind('resize', resizeFunction, this); timeoutID = setTimeout(timeoutFunction, 200); }; var timeoutFunction = function(){ timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ hideFunction(); }; zoomImage.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } zoomImage.bind('backgroundClick', hideFunction, this); if(toggleImage) { zoomImage.bind('click', toggleFunction, this); zoomImage.set('imageCursor', 'hand'); } closeButton.bind('click', hideFunction, this); if(loadedCallback) loadedCallback(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); closed = true; if(timeoutID) clearTimeout(timeoutID); if (timeoutUserInteractionID) clearTimeout(timeoutUserInteractionID); if(autoCloseMilliSeconds) clearAutoClose(); if(hideCallback) hideCallback(); zoomImage.set('visible', false); if(hideEffect && hideEffect.get('duration') > 0){ hideEffect.bind('end', endEffectFunction, this); } else{ zoomImage.set('image', null); } closeButton.set('visible', false); veil.set('visible', false); self.unbind('click', playerClickFunction, self); zoomImage.unbind('backgroundClick', hideFunction, this); zoomImage.unbind('userInteractionStart', userInteractionStartFunction, this); zoomImage.unbind('userInteractionEnd', userInteractionEndFunction, this, true); zoomImage.unbind('resize', resizeFunction, this); if(toggleImage) { zoomImage.unbind('click', toggleFunction, this); zoomImage.set('cursor', 'default'); } closeButton.unbind('click', hideFunction, this); self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } }; var endEffectFunction = function() { zoomImage.set('image', null); hideEffect.unbind('end', endEffectFunction, this); }; var toggleFunction = function() { zoomImage.set('image', isToggleVisible() ? image : toggleImage); }; var isToggleVisible = function() { return zoomImage.get('image') == toggleImage; }; var setCloseButtonPosition = function() { var right = zoomImage.get('actualWidth') - zoomImage.get('imageLeft') - zoomImage.get('imageWidth') + 10; var top = zoomImage.get('imageTop') + 10; if(right < 10) right = 10; if(top < 10) top = 10; closeButton.set('right', right); closeButton.set('top', top); }; var userInteractionStartFunction = function() { if(timeoutUserInteractionID){ clearTimeout(timeoutUserInteractionID); timeoutUserInteractionID = undefined; } else{ closeButton.set('visible', false); } }; var userInteractionEndFunction = function() { if(!closed){ timeoutUserInteractionID = setTimeout(userInteractionTimeoutFunction, 300); } }; var userInteractionTimeoutFunction = function() { timeoutUserInteractionID = undefined; closeButton.set('visible', true); setCloseButtonPosition(); }; this.MainViewer.set('toolTipEnabled', false); var veil = this.veilPopupPanorama; var zoomImage = this.zoomImagePopupPanorama; var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } var timeoutID = undefined; var timeoutUserInteractionID = undefined; zoomImage.bind('loaded', loadedFunction, this); setTimeout(function(){ self.bind('click', playerClickFunction, self, false); }, 0); zoomImage.set('image', image); zoomImage.set('customWidth', customWidth); zoomImage.set('customHeight', customHeight); zoomImage.set('showEffect', showEffect); zoomImage.set('hideEffect', hideEffect); zoomImage.set('visible', true); return zoomImage; },
  "getPlayListItemByMedia": function(playList, media){  var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ var item = items[j]; if(item.get('media') == media) return item; } return undefined; },
  "getKey": function(key){  return window[key]; },
  "playAudioList": function(audios){  if(audios.length == 0) return; var currentAudioCount = -1; var currentAudio; var playGlobalAudioFunction = this.playGlobalAudio; var playNext = function(){ if(++currentAudioCount >= audios.length) currentAudioCount = 0; currentAudio = audios[currentAudioCount]; playGlobalAudioFunction(currentAudio, playNext); }; playNext(); },
  "stopAndGoCamera": function(camera, ms){  var sequence = camera.get('initialSequence'); sequence.pause(); var timeoutFunction = function(){ sequence.play(); }; setTimeout(timeoutFunction, ms); },
  "getPlayListWithMedia": function(media, onlySelected){  var playLists = this.getByClassName('PlayList'); for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(onlySelected && playList.get('selectedIndex') == -1) continue; if(this.getPlayListItemByMedia(playList, media) != undefined) return playList; } return undefined; },
  "showPopupPanoramaVideoOverlay": function(popupPanoramaOverlay, closeButtonProperties, stopAudios){  var self = this; var showEndFunction = function() { popupPanoramaOverlay.unbind('showEnd', showEndFunction); closeButton.bind('click', hideFunction, this); setCloseButtonPosition(); closeButton.set('visible', true); }; var endFunction = function() { if(!popupPanoramaOverlay.get('loop')) hideFunction(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); popupPanoramaOverlay.set('visible', false); closeButton.set('visible', false); closeButton.unbind('click', hideFunction, self); popupPanoramaOverlay.unbind('end', endFunction, self); popupPanoramaOverlay.unbind('hideEnd', hideFunction, self, true); self.resumePlayers(playersPaused, true); if(stopAudios) { self.resumeGlobalAudios(); } }; var setCloseButtonPosition = function() { var right = 10; var top = 10; closeButton.set('right', right); closeButton.set('top', top); }; this.MainViewer.set('toolTipEnabled', false); var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(true); if(stopAudios) { this.pauseGlobalAudios(); } popupPanoramaOverlay.bind('end', endFunction, this, true); popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); popupPanoramaOverlay.bind('hideEnd', hideFunction, this, true); popupPanoramaOverlay.set('visible', true); },
  "historyGoForward": function(playList){  var history = this.get('data')['history'][playList.get('id')]; if(history != undefined) { history.forward(); } },
  "pauseCurrentPlayers": function(onlyPauseCameraIfPanorama){  var players = this.getCurrentPlayers(); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('state') == 'playing') { if(onlyPauseCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.pauseCamera(); } else { player.pause(); } } else { players.splice(i, 1); } } return players; },
  "getPixels": function(value){  var result = new RegExp('((\\+|\\-)?\\d+(\\.\\d*)?)(px|vw|vh|vmin|vmax)?', 'i').exec(value); if (result == undefined) { return 0; } var num = parseFloat(result[1]); var unit = result[4]; var vw = this.rootPlayer.get('actualWidth') / 100; var vh = this.rootPlayer.get('actualHeight') / 100; switch(unit) { case 'vw': return num * vw; case 'vh': return num * vh; case 'vmin': return num * Math.min(vw, vh); case 'vmax': return num * Math.max(vw, vh); default: return num; } },
  "getActivePlayerWithViewer": function(viewerArea){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); players = players.concat(this.getByClassName('MapPlayer')); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('viewerArea') == viewerArea) { var playerClass = player.get('class'); if(playerClass == 'PanoramaPlayer' && (player.get('panorama') != undefined || player.get('video') != undefined)) return player; else if((playerClass == 'VideoPlayer' || playerClass == 'Video360Player') && player.get('video') != undefined) return player; else if(playerClass == 'PhotoAlbumPlayer' && player.get('photoAlbum') != undefined) return player; else if(playerClass == 'MapPlayer' && player.get('map') != undefined) return player; } } return undefined; },
  "setMainMediaByName": function(name){  var items = this.mainPlayList.get('items'); for(var i = 0; i<items.length; ++i){ var item = items[i]; if(item.get('media').get('label') == name) { this.mainPlayList.set('selectedIndex', i); return item; } } },
  "init": function(){  if(!Object.hasOwnProperty('values')) { Object.values = function(o){ return Object.keys(o).map(function(e) { return o[e]; }); }; } var history = this.get('data')['history']; var playListChangeFunc = function(e){ var playList = e.source; var index = playList.get('selectedIndex'); if(index < 0) return; var id = playList.get('id'); if(!history.hasOwnProperty(id)) history[id] = new HistoryData(playList); history[id].add(index); }; var playLists = this.getByClassName('PlayList'); for(var i = 0, count = playLists.length; i<count; ++i) { var playList = playLists[i]; playList.bind('change', playListChangeFunc, this); } },
  "cloneCamera": function(camera){  var newCamera = this.rootPlayer.createInstance(camera.get('class')); newCamera.set('id', camera.get('id') + '_copy'); newCamera.set('idleSequence', camera.get('initialSequence')); return newCamera; },
  "loopAlbum": function(playList, index){  var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var loopFunction = function(){ player.play(); }; this.executeFunctionWhenChange(playList, index, loopFunction); },
  "registerKey": function(key, value){  window[key] = value; },
  "getComponentByName": function(name){  var list = this.getByClassName('UIComponent'); for(var i = 0, count = list.length; i<count; ++i){ var component = list[i]; var data = component.get('data'); if(data != undefined && data.name == name){ return component; } } return undefined; },
  "playGlobalAudioWhilePlay": function(playList, index, audio, endCallback){  var changeFunction = function(event){ if(event.data.previousSelectedIndex == index){ this.stopGlobalAudio(audio); if(isPanorama) { var media = playListItem.get('media'); var audios = media.get('audios'); audios.splice(audios.indexOf(audio), 1); media.set('audios', audios); } playList.unbind('change', changeFunction, this); if(endCallback) endCallback(); } }; var audios = window.currentGlobalAudios; if(audios && audio.get('id') in audios){ audio = audios[audio.get('id')]; if(audio.get('state') != 'playing'){ audio.play(); } return audio; } playList.bind('change', changeFunction, this); var playListItem = playList.get('items')[index]; var isPanorama = playListItem.get('class') == 'PanoramaPlayListItem'; if(isPanorama) { var media = playListItem.get('media'); var audios = (media.get('audios') || []).slice(); if(audio.get('class') == 'MediaAudio') { var panoramaAudio = this.rootPlayer.createInstance('PanoramaAudio'); panoramaAudio.set('autoplay', false); panoramaAudio.set('audio', audio.get('audio')); panoramaAudio.set('loop', audio.get('loop')); panoramaAudio.set('id', audio.get('id')); var stateChangeFunctions = audio.getBindings('stateChange'); for(var i = 0; i<stateChangeFunctions.length; ++i){ var f = stateChangeFunctions[i]; if(typeof f == 'string') f = new Function('event', f); panoramaAudio.bind('stateChange', f, this); } audio = panoramaAudio; } audios.push(audio); media.set('audios', audios); } return this.playGlobalAudio(audio, endCallback); },
  "pauseGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; } if(audio.get('state') == 'playing') audio.pause(); },
  "setCameraSameSpotAsMedia": function(camera, media){  var player = this.getCurrentPlayerWithMedia(media); if(player != undefined) { var position = camera.get('initialPosition'); position.set('yaw', player.get('yaw')); position.set('pitch', player.get('pitch')); position.set('hfov', player.get('hfov')); } },
  "executeFunctionWhenChange": function(playList, index, endFunction, changeFunction){  var endObject = undefined; var changePlayListFunction = function(event){ if(event.data.previousSelectedIndex == index){ if(changeFunction) changeFunction.call(this); if(endFunction && endObject) endObject.unbind('end', endFunction, this); playList.unbind('change', changePlayListFunction, this); } }; if(endFunction){ var playListItem = playList.get('items')[index]; if(playListItem.get('class') == 'PanoramaPlayListItem'){ var camera = playListItem.get('camera'); if(camera != undefined) endObject = camera.get('initialSequence'); if(endObject == undefined) endObject = camera.get('idleSequence'); } else{ endObject = playListItem.get('media'); } if(endObject){ endObject.bind('end', endFunction, this); } } playList.bind('change', changePlayListFunction, this); },
  "loadFromCurrentMediaPlayList": function(playList, delta){  var currentIndex = playList.get('selectedIndex'); var totalItems = playList.get('items').length; var newIndex = (currentIndex + delta) % totalItems; while(newIndex < 0){ newIndex = totalItems + newIndex; }; if(currentIndex != newIndex){ playList.set('selectedIndex', newIndex); } },
  "getMediaHeight": function(media){  switch(media.get('class')){ case 'Video360': var res = media.get('video'); if(res instanceof Array){ var maxH=0; for(var i=0; i<res.length; i++){ var r = res[i]; if(r.get('height') > maxH) maxH = r.get('height'); } return maxH; }else{ return r.get('height') } default: return media.get('height'); } },
  "visibleComponentsIfPlayerFlagEnabled": function(components, playerFlag){  var enabled = this.get(playerFlag); for(var i in components){ components[i].set('visible', enabled); } },
  "updateVideoCues": function(playList, index){  var playListItem = playList.get('items')[index]; var video = playListItem.get('media'); if(video.get('cues').length == 0) return; var player = playListItem.get('player'); var cues = []; var changeFunction = function(){ if(playList.get('selectedIndex') != index){ video.unbind('cueChange', cueChangeFunction, this); playList.unbind('change', changeFunction, this); } }; var cueChangeFunction = function(event){ var activeCues = event.data.activeCues; for(var i = 0, count = cues.length; i<count; ++i){ var cue = cues[i]; if(activeCues.indexOf(cue) == -1 && (cue.get('startTime') > player.get('currentTime') || cue.get('endTime') < player.get('currentTime')+0.5)){ cue.trigger('end'); } } cues = activeCues; }; video.bind('cueChange', cueChangeFunction, this); playList.bind('change', changeFunction, this); },
  "setPanoramaCameraWithSpot": function(playListItem, yaw, pitch){  var panorama = playListItem.get('media'); var newCamera = this.cloneCamera(playListItem.get('camera')); var initialPosition = newCamera.get('initialPosition'); initialPosition.set('yaw', yaw); initialPosition.set('pitch', pitch); this.startPanoramaWithCamera(panorama, newCamera); },
  "setStartTimeVideo": function(video, time){  var items = this.getPlayListItems(video); var startTimeBackup = []; var restoreStartTimeFunc = function() { for(var i = 0; i<items.length; ++i){ var item = items[i]; item.set('startTime', startTimeBackup[i]); item.unbind('stop', restoreStartTimeFunc, this); } }; for(var i = 0; i<items.length; ++i) { var item = items[i]; var player = item.get('player'); if(player.get('video') == video && player.get('state') == 'playing') { player.seek(time); } else { startTimeBackup.push(item.get('startTime')); item.set('startTime', time); item.bind('stop', restoreStartTimeFunc, this); } } },
  "changePlayListWithSameSpot": function(playList, newIndex){  var currentIndex = playList.get('selectedIndex'); if (currentIndex >= 0 && newIndex >= 0 && currentIndex != newIndex) { var currentItem = playList.get('items')[currentIndex]; var newItem = playList.get('items')[newIndex]; var currentPlayer = currentItem.get('player'); var newPlayer = newItem.get('player'); if ((currentPlayer.get('class') == 'PanoramaPlayer' || currentPlayer.get('class') == 'Video360Player') && (newPlayer.get('class') == 'PanoramaPlayer' || newPlayer.get('class') == 'Video360Player')) { var newCamera = this.cloneCamera(newItem.get('camera')); this.setCameraSameSpotAsMedia(newCamera, currentItem.get('media')); this.startPanoramaWithCamera(newItem.get('media'), newCamera); } } },
  "resumePlayers": function(players, onlyResumeCameraIfPanorama){  for(var i = 0; i<players.length; ++i){ var player = players[i]; if(onlyResumeCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.resumeCamera(); } else{ player.play(); } } },
  "getMediaByName": function(name){  var list = this.getByClassName('Media'); for(var i = 0, count = list.length; i<count; ++i){ var media = list[i]; if((media.get('class') == 'Audio' && media.get('data').label == name) || media.get('label') == name){ return media; } } return undefined; },
  "playGlobalAudio": function(audio, endCallback){  var endFunction = function(){ audio.unbind('end', endFunction, this); this.stopGlobalAudio(audio); if(endCallback) endCallback(); }; audio = this.getGlobalAudio(audio); var audios = window.currentGlobalAudios; if(!audios){ audios = window.currentGlobalAudios = {}; } audios[audio.get('id')] = audio; if(audio.get('state') == 'playing'){ return audio; } if(!audio.get('loop')){ audio.bind('end', endFunction, this); } audio.play(); return audio; },
  "getGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios != undefined && audio.get('id') in audios){ audio = audios[audio.get('id')]; } return audio; },
  "historyGoBack": function(playList){  var history = this.get('data')['history'][playList.get('id')]; if(history != undefined) { history.back(); } },
  "shareTwitter": function(url){  window.open('https://twitter.com/intent/tweet?source=webclient&url=' + url, '_blank'); },
  "shareFacebook": function(url){  window.open('https://www.facebook.com/sharer/sharer.php?u=' + url, '_blank'); },
  "pauseGlobalAudiosWhilePlayItem": function(playList, index, exclude){  var self = this; var item = playList.get('items')[index]; var media = item.get('media'); var player = item.get('player'); var caller = media.get('id'); var endFunc = function(){ if(playList.get('selectedIndex') != index) { if(hasState){ player.unbind('stateChange', stateChangeFunc, self); } self.resumeGlobalAudios(caller); } }; var stateChangeFunc = function(event){ var state = event.data.state; if(state == 'stopped'){ this.resumeGlobalAudios(caller); } else if(state == 'playing'){ this.pauseGlobalAudios(caller, exclude); } }; var mediaClass = media.get('class'); var hasState = mediaClass == 'Video360' || mediaClass == 'Video'; if(hasState){ player.bind('stateChange', stateChangeFunc, this); } this.pauseGlobalAudios(caller, exclude); this.executeFunctionWhenChange(playList, index, endFunc, endFunc); },
  "syncPlaylists": function(playLists){  var changeToMedia = function(media, playListDispatched){ for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(playList != playListDispatched){ var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ if(items[j].get('media') == media){ if(playList.get('selectedIndex') != j){ playList.set('selectedIndex', j); } break; } } } } }; var changeFunction = function(event){ var playListDispatched = event.source; var selectedIndex = playListDispatched.get('selectedIndex'); if(selectedIndex < 0) return; var media = playListDispatched.get('items')[selectedIndex].get('media'); changeToMedia(media, playListDispatched); }; var mapPlayerChangeFunction = function(event){ var panoramaMapLocation = event.source.get('panoramaMapLocation'); if(panoramaMapLocation){ var map = panoramaMapLocation.get('map'); changeToMedia(map); } }; for(var i = 0, count = playLists.length; i<count; ++i){ playLists[i].bind('change', changeFunction, this); } var mapPlayers = this.getByClassName('MapPlayer'); for(var i = 0, count = mapPlayers.length; i<count; ++i){ mapPlayers[i].bind('panoramaMapLocation_change', mapPlayerChangeFunction, this); } },
  "setMapLocation": function(panoramaPlayListItem, mapPlayer){  var resetFunction = function(){ panoramaPlayListItem.unbind('stop', resetFunction, this); player.set('mapPlayer', null); }; panoramaPlayListItem.bind('stop', resetFunction, this); var player = panoramaPlayListItem.get('player'); player.set('mapPlayer', mapPlayer); },
  "setComponentVisibility": function(component, visible, applyAt, effect, propertyEffect, ignoreClearTimeout){  var keepVisibility = this.getKey('keepVisibility_' + component.get('id')); if(keepVisibility) return; this.unregisterKey('visibility_'+component.get('id')); var changeVisibility = function(){ if(effect && propertyEffect){ component.set(propertyEffect, effect); } component.set('visible', visible); if(component.get('class') == 'ViewerArea'){ try{ if(visible) component.restart(); else if(component.get('playbackState') == 'playing') component.pause(); } catch(e){}; } }; var effectTimeoutName = 'effectTimeout_'+component.get('id'); if(!ignoreClearTimeout && window.hasOwnProperty(effectTimeoutName)){ var effectTimeout = window[effectTimeoutName]; if(effectTimeout instanceof Array){ for(var i=0; i<effectTimeout.length; i++){ clearTimeout(effectTimeout[i]) } }else{ clearTimeout(effectTimeout); } delete window[effectTimeoutName]; } else if(visible == component.get('visible') && !ignoreClearTimeout) return; if(applyAt && applyAt > 0){ var effectTimeout = setTimeout(function(){ if(window[effectTimeoutName] instanceof Array) { var arrayTimeoutVal = window[effectTimeoutName]; var index = arrayTimeoutVal.indexOf(effectTimeout); arrayTimeoutVal.splice(index, 1); if(arrayTimeoutVal.length == 0){ delete window[effectTimeoutName]; } }else{ delete window[effectTimeoutName]; } changeVisibility(); }, applyAt); if(window.hasOwnProperty(effectTimeoutName)){ window[effectTimeoutName] = [window[effectTimeoutName], effectTimeout]; }else{ window[effectTimeoutName] = effectTimeout; } } else{ changeVisibility(); } },
  "resumeGlobalAudios": function(caller){  if (window.pauseGlobalAudiosState == undefined || !(caller in window.pauseGlobalAudiosState)) return; var audiosPaused = window.pauseGlobalAudiosState[caller]; delete window.pauseGlobalAudiosState[caller]; var values = Object.values(window.pauseGlobalAudiosState); for (var i = 0, count = values.length; i<count; ++i) { var objAudios = values[i]; for (var j = audiosPaused.length-1; j>=0; --j) { var a = audiosPaused[j]; if(objAudios.indexOf(a) != -1) audiosPaused.splice(j, 1); } } for (var i = 0, count = audiosPaused.length; i<count; ++i) { var a = audiosPaused[i]; if (a.get('state') == 'paused') a.play(); } },
  "setPanoramaCameraWithCurrentSpot": function(playListItem){  var currentPlayer = this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer == undefined){ return; } var playerClass = currentPlayer.get('class'); if(playerClass != 'PanoramaPlayer' && playerClass != 'Video360Player'){ return; } var fromMedia = currentPlayer.get('panorama'); if(fromMedia == undefined) { fromMedia = currentPlayer.get('video'); } var panorama = playListItem.get('media'); var newCamera = this.cloneCamera(playListItem.get('camera')); this.setCameraSameSpotAsMedia(newCamera, fromMedia); this.startPanoramaWithCamera(panorama, newCamera); },
  "stopGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; if(audio){ delete audios[audio.get('id')]; if(Object.keys(audios).length == 0){ window.currentGlobalAudios = undefined; } } } if(audio) audio.stop(); },
  "shareWhatsapp": function(url){  window.open('https://api.whatsapp.com/send/?text=' + encodeURIComponent(url), '_blank'); },
  "getCurrentPlayers": function(){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); return players; },
  "triggerOverlay": function(overlay, eventName){  if(overlay.get('areas') != undefined) { var areas = overlay.get('areas'); for(var i = 0; i<areas.length; ++i) { areas[i].trigger(eventName); } } else { overlay.trigger(eventName); } },
  "existsKey": function(key){  return key in window; },
  "showPopupPanoramaOverlay": function(popupPanoramaOverlay, closeButtonProperties, imageHD, toggleImage, toggleImageHD, autoCloseMilliSeconds, audio, stopBackgroundAudio){  var self = this; this.MainViewer.set('toolTipEnabled', false); var cardboardEnabled = this.isCardboardViewMode(); if(!cardboardEnabled) { var zoomImage = this.zoomImagePopupPanorama; var showDuration = popupPanoramaOverlay.get('showDuration'); var hideDuration = popupPanoramaOverlay.get('hideDuration'); var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); var popupMaxWidthBackup = popupPanoramaOverlay.get('popupMaxWidth'); var popupMaxHeightBackup = popupPanoramaOverlay.get('popupMaxHeight'); var showEndFunction = function() { var loadedFunction = function(){ if(!self.isCardboardViewMode()) popupPanoramaOverlay.set('visible', false); }; popupPanoramaOverlay.unbind('showEnd', showEndFunction, self); popupPanoramaOverlay.set('showDuration', 1); popupPanoramaOverlay.set('hideDuration', 1); self.showPopupImage(imageHD, toggleImageHD, popupPanoramaOverlay.get('popupMaxWidth'), popupPanoramaOverlay.get('popupMaxHeight'), null, null, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedFunction, hideFunction); }; var hideFunction = function() { var restoreShowDurationFunction = function(){ popupPanoramaOverlay.unbind('showEnd', restoreShowDurationFunction, self); popupPanoramaOverlay.set('visible', false); popupPanoramaOverlay.set('showDuration', showDuration); popupPanoramaOverlay.set('popupMaxWidth', popupMaxWidthBackup); popupPanoramaOverlay.set('popupMaxHeight', popupMaxHeightBackup); }; self.resumePlayers(playersPaused, audio == null || !stopBackgroundAudio); var currentWidth = zoomImage.get('imageWidth'); var currentHeight = zoomImage.get('imageHeight'); popupPanoramaOverlay.bind('showEnd', restoreShowDurationFunction, self, true); popupPanoramaOverlay.set('showDuration', 1); popupPanoramaOverlay.set('hideDuration', hideDuration); popupPanoramaOverlay.set('popupMaxWidth', currentWidth); popupPanoramaOverlay.set('popupMaxHeight', currentHeight); if(popupPanoramaOverlay.get('visible')) restoreShowDurationFunction(); else popupPanoramaOverlay.set('visible', true); self.MainViewer.set('toolTipEnabled', true); }; if(!imageHD){ imageHD = popupPanoramaOverlay.get('image'); } if(!toggleImageHD && toggleImage){ toggleImageHD = toggleImage; } popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); } else { var hideEndFunction = function() { self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } popupPanoramaOverlay.unbind('hideEnd', hideEndFunction, self); self.MainViewer.set('toolTipEnabled', true); }; var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } popupPanoramaOverlay.bind('hideEnd', hideEndFunction, this, true); } popupPanoramaOverlay.set('visible', true); },
  "keepComponentVisibility": function(component, keep){  var key = 'keepVisibility_' + component.get('id'); var value = this.getKey(key); if(value == undefined && keep) { this.registerKey(key, keep); } else if(value != undefined && !keep) { this.unregisterKey(key); } },
  "unregisterKey": function(key){  delete window[key]; },
  "showPopupMedia": function(w, media, playList, popupMaxWidth, popupMaxHeight, autoCloseWhenFinished, stopAudios){  var self = this; var closeFunction = function(){ playList.set('selectedIndex', -1); self.MainViewer.set('toolTipEnabled', true); if(stopAudios) { self.resumeGlobalAudios(); } this.resumePlayers(playersPaused, !stopAudios); if(isVideo) { this.unbind('resize', resizeFunction, this); } w.unbind('close', closeFunction, this); }; var endFunction = function(){ w.hide(); }; var resizeFunction = function(){ var getWinValue = function(property){ return w.get(property) || 0; }; var parentWidth = self.get('actualWidth'); var parentHeight = self.get('actualHeight'); var mediaWidth = self.getMediaWidth(media); var mediaHeight = self.getMediaHeight(media); var popupMaxWidthNumber = parseFloat(popupMaxWidth) / 100; var popupMaxHeightNumber = parseFloat(popupMaxHeight) / 100; var windowWidth = popupMaxWidthNumber * parentWidth; var windowHeight = popupMaxHeightNumber * parentHeight; var footerHeight = getWinValue('footerHeight'); var headerHeight = getWinValue('headerHeight'); if(!headerHeight) { var closeButtonHeight = getWinValue('closeButtonIconHeight') + getWinValue('closeButtonPaddingTop') + getWinValue('closeButtonPaddingBottom'); var titleHeight = self.getPixels(getWinValue('titleFontSize')) + getWinValue('titlePaddingTop') + getWinValue('titlePaddingBottom'); headerHeight = closeButtonHeight > titleHeight ? closeButtonHeight : titleHeight; headerHeight += getWinValue('headerPaddingTop') + getWinValue('headerPaddingBottom'); } var contentWindowWidth = windowWidth - getWinValue('bodyPaddingLeft') - getWinValue('bodyPaddingRight') - getWinValue('paddingLeft') - getWinValue('paddingRight'); var contentWindowHeight = windowHeight - headerHeight - footerHeight - getWinValue('bodyPaddingTop') - getWinValue('bodyPaddingBottom') - getWinValue('paddingTop') - getWinValue('paddingBottom'); var parentAspectRatio = contentWindowWidth / contentWindowHeight; var mediaAspectRatio = mediaWidth / mediaHeight; if(parentAspectRatio > mediaAspectRatio) { windowWidth = contentWindowHeight * mediaAspectRatio + getWinValue('bodyPaddingLeft') + getWinValue('bodyPaddingRight') + getWinValue('paddingLeft') + getWinValue('paddingRight'); } else { windowHeight = contentWindowWidth / mediaAspectRatio + headerHeight + footerHeight + getWinValue('bodyPaddingTop') + getWinValue('bodyPaddingBottom') + getWinValue('paddingTop') + getWinValue('paddingBottom'); } if(windowWidth > parentWidth * popupMaxWidthNumber) { windowWidth = parentWidth * popupMaxWidthNumber; } if(windowHeight > parentHeight * popupMaxHeightNumber) { windowHeight = parentHeight * popupMaxHeightNumber; } w.set('width', windowWidth); w.set('height', windowHeight); w.set('x', (parentWidth - getWinValue('actualWidth')) * 0.5); w.set('y', (parentHeight - getWinValue('actualHeight')) * 0.5); }; if(autoCloseWhenFinished){ this.executeFunctionWhenChange(playList, 0, endFunction); } var mediaClass = media.get('class'); var isVideo = mediaClass == 'Video' || mediaClass == 'Video360'; playList.set('selectedIndex', 0); if(isVideo){ this.bind('resize', resizeFunction, this); resizeFunction(); playList.get('items')[0].get('player').play(); } else { w.set('width', popupMaxWidth); w.set('height', popupMaxHeight); } this.MainViewer.set('toolTipEnabled', false); if(stopAudios) { this.pauseGlobalAudios(); } var playersPaused = this.pauseCurrentPlayers(!stopAudios); w.bind('close', closeFunction, this); w.show(this, true); },
  "getMediaFromPlayer": function(player){  switch(player.get('class')){ case 'PanoramaPlayer': return player.get('panorama') || player.get('video'); case 'VideoPlayer': case 'Video360Player': return player.get('video'); case 'PhotoAlbumPlayer': return player.get('photoAlbum'); case 'MapPlayer': return player.get('map'); } },
  "getOverlays": function(media){  switch(media.get('class')){ case 'Panorama': var overlays = media.get('overlays').concat() || []; var frames = media.get('frames'); for(var j = 0; j<frames.length; ++j){ overlays = overlays.concat(frames[j].get('overlays') || []); } return overlays; case 'Video360': case 'Map': return media.get('overlays') || []; default: return []; } }
 },
 "paddingTop": 0,
 "downloadEnabled": true,
 "gap": 10
};

    
    function HistoryData(playList) {
        this.playList = playList;
        this.list = [];
        this.pointer = -1;
    }

    HistoryData.prototype.add = function(index){
        if(this.pointer < this.list.length && this.list[this.pointer] == index) {
            return;
        }
        ++this.pointer;
        this.list.splice(this.pointer, this.list.length - this.pointer, index);
    };

    HistoryData.prototype.back = function(){
        if(!this.canBack()) return;
        this.playList.set('selectedIndex', this.list[--this.pointer]);
    };

    HistoryData.prototype.forward = function(){
        if(!this.canForward()) return;
        this.playList.set('selectedIndex', this.list[++this.pointer]);
    };

    HistoryData.prototype.canBack = function(){
        return this.pointer > 0;
    };

    HistoryData.prototype.canForward = function(){
        return this.pointer >= 0 && this.pointer < this.list.length-1;
    };
    //

    if(script.data == undefined)
        script.data = {};
    script.data["history"] = {};    //playListID -> HistoryData

    TDV.PlayerAPI.defineScript(script);
})();
