document.addEventListener("deviceready", onDeviceReady, false);

function onDeviceReady(){
    bluetoothle.initialize(initResult, {"request": true, "statusReceiver":true, "restoreKey": "bluetoothleplugin-central"});
}

var initResult = function(result){
    bluetoothle.initializePeripheral(initPeripheralSuccess, initError, {"request": true, "restoreKey":"bluetoothleplugin-peripheral"});
}

var initPeripheralSuccess = function(result){
    bluetoothle.addService(serviceSuccess, addServiceError, {service: "12345"});
}

var serviceSuccess = function(result){
    bluetoothle.startAdvertising(adSuccess, startAdError, {"service": "12345", "name": "The Peripheral!"});
}

var initError = function(error){
    alert("initError");
    alert(error);
}

var addServiceError = function(error){
    alert("addServiceError");
    alert(error);
}

var startAdError = function(error){
    alert("startAdError");
    alert(error);
}