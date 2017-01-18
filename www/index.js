document.addEventListener("deviceready", onDeviceReady, false);

function onDeviceReady(){
    bluetoothle.initialize(initResult, {"request": true, "statusReceiver":true, "restoreKey": "bluetoothleplugin-central"});
}

var initResult = function(result){
    bluetoothle.initializePeripheral(initPeripheralSuccess, initError, {"request": true, "restoreKey":"bluetoothleplugin-peripheral"});
    bluetoothle.addService(serviceSuccess, addServiceError, {service: "12345"});
    bluetoothle.startAdvertising(adSuccess, startAdError, {"service": "12345", "name": "The Peripheral!"});
}

var initError = function(){
    alert("initError");
}

var addServiceError = function(){
    alert("addServiceError");
}

var startAdError = function(){
    alert("startAdError");
}