// This uses a modified version of https://cs.chromium.org/chromium/src/components/neterror/resources/offline.js
// License for the code bellow:
// Copyright (c) 2014 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file here: https://cs.chromium.org/chromium/src/LICENSE.

const DinoStyle = `.interstitial-wrapper{box-sizing:border-box;font-size:1em;line-height:1.6em;margin:50px auto 0;max-width:600px;width:100%}@media (max-width:700px){.interstitial-wrapper{padding:0 10%}}@media (max-height:600px){.interstitial-wrapper{margin-top:5px}}@media (max-width:400px){.interstitial-wrapper{padding:0 5%}}html[subframe] #main-frame-error{display:none}.hidden{display:none}html[subframe] body{overflow:hidden}#buttons::after{clear:both;content:'';display:block;width:100%}.offline .interstitial-wrapper{color:#2b2b2b;font-size:1em;line-height:1.55;margin:100px auto 0;max-width:600px;width:100%}.offline .runner-container{height:150px;max-width:600px;overflow:hidden;position:absolute;top:10px;width:44px;z-index:2}.offline .runner-canvas{height:150px;max-width:600px;opacity:1;overflow:hidden;position:absolute;top:0}.offline .controller{background:rgba(247,247,247,.1);height:100vh;left:0;position:absolute;top:0;width:100vw;z-index:1}#offline-resources{display:none}@media (max-height:350px){.interstitial-wrapper{margin-top:5%}}`;

export default DinoStyle;