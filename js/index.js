/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
var app = {
	// Application Constructor
	initialize : function() {
		this.bindEvents();
	},
	// Bind Event Listeners
	//
	// Bind any events that are required on startup. Common events are:
	// 'load', 'deviceready', 'offline', and 'online'.
	bindEvents : function() {
		document.addEventListener('deviceready', this.onDeviceReady, false);
	},
	// deviceready Event Handler
	//
	// The scope of 'this' is the event. In order to call the 'receivedEvent'
	// function, we must explicity call 'app.receivedEvent(...);'
	onDeviceReady : function() {
		app.receivedEvent('deviceready');

		var buttonOpen = document.getElementById('buttonOpen');
		var buttonClaim = document.getElementById('buttonClaim');
		var buttonDeviceEnabledTrue = document
				.getElementById('buttonDeviceEnabledTrue');
		var buttonCheckHealth = document.getElementById('buttonCheckHealth');
		var buttonPrintNormal = document.getElementById('buttonPrintNormal');
		var buttonPrintBitmap = document.getElementById('buttonPrintBitmap');
		var buttonPrintBarCode = document.getElementById('buttonPrintBarCode');
		var buttonDeviceEnabledFalse = document
				.getElementById('buttonDeviceEnabledFalse');
		var buttonRelease = document.getElementById('buttonRelease');
		var buttonClose = document.getElementById('buttonClose');

		buttonOpen.addEventListener('click', function() {
			app.open();
		});
		buttonClaim.addEventListener('click', function() {
			app.claim();
		});
		buttonDeviceEnabledTrue.addEventListener('click', function() {
			app.setDeviceEnabledTrue();
		});
		buttonCheckHealth.addEventListener('click', function() {
			app.checkHealth();
		});
		buttonPrintNormal.addEventListener('click', function() {
			app.printNormal();
		});
		buttonPrintBitmap.addEventListener('click', function() {
			app.printBitmap();
		});
		buttonPrintBarCode.addEventListener('click', function() {
			app.printBarCode();
		});
		buttonDeviceEnabledFalse.addEventListener('click', function() {
			app.setDeviceEnabledFalse();
		});
		buttonRelease.addEventListener('click', function() {
			app.release();
		});
		buttonClose.addEventListener('click', function() {
			app.close();
		});
	},
	open : function() {
		bxl_service.open(function() {
			alert("open success");
		}, function(error) {
			alert("open: " + error);
		}, "SPP-R210");
	},
	claim : function() {
		bxl_service.claim(function() {
			alert("claim success");
		}, function(error) {
			alert("claim: " + error);
		}, 0);
	},
	setDeviceEnabledTrue : function() {
		bxl_service.setDeviceEnabled(function() {
			alert("setDeviceEnabled success");
		}, function(error) {
			alert("setDeviceEnabled: " + error);
		}, true);
	},
	checkHealth : function() {
		bxl_service.checkHealth(function() {
			alert("checkHealth success");
		}, function(error) {
			alert("checkHealth: " + error);
		}, 2);
	},
	printBarCode : function() {
		bxl_service.printBarCode(function() {
			alert("printBarCode success");
		}, function(error) {
			alert("printBarCode: " + error);
		}, 2, "http://www.bixolon.com", 204, 3, 3, -1, -11);
	},
	printBitmap : function() {
		bxl_service.printBitmap(function() {
			alert("printBitmap success");
		}, function(error) {
			alert("printBitmap: " + error);
		}, 2, "", -11, -2);
	},
	printNormal : function() {
		bxl_service.printNormal(function() {
			alert("printNormal success");
		}, function(error) {
			alert("printNormal: " + error);
		}, 2, "http://www.bixolon.com\n\n\n\n\n");
	},
	setDeviceEnabledFalse : function() {
		bxl_service.setDeviceEnabled(function() {
			alert("setDeviceEnabled success");
		}, function(error) {
			alert("disable: " + error);
		}, false);
	},
	release : function() {
		bxl_service.release(function() {
			alert("release success");
		}, function(error) {
			alert("release: " + error);
		});
	},
	close : function() {
		bxl_service.close(function() {
			alert("close success");
		}, function(error) {
			alert("close: " + error);
		});
	},
	// Update DOM on a Received Event
	receivedEvent : function(id) {
		var parentElement = document.getElementById(id);
		var listeningElement = parentElement.querySelector('.listening');
		var receivedElement = parentElement.querySelector('.received');

		listeningElement.setAttribute('style', 'display:none;');
		receivedElement.setAttribute('style', 'display:block;');

		console.log('Received Event: ' + id);
	}
};
