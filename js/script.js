// Copyright (c) 2020 ali-mugamai All rights reserved
//
// Created by: ali mugamai
// Created on: Sep 2020
// This file contains the JS functions for index.html

"use strict"

/**
 * Check servie worker.
 */
if (navigator.serviceWorker) {
  navigator.serviceWorker.register("/personal_project/sw.js", {
    scope: "/personal_project/",
  })
}

/**
 * This function displays an alert.
 */
function myButtonClicked() {
  document.getElementById("hello-world").innerHTML = "<p> amouna is cringe</p>"
}
