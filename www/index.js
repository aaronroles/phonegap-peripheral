document.addEventListener("deviceready", onDeviceReady, false);

function onDeviceReady(){
    bluetoothle.initialize(initResult, {"request": true, "statusReceiver":true, "restoreKey": "bluetoothleplugin-central"});
}

var initResult = function(result){
    bluetoothle.initializePeripheral(initPeripheralSuccess, error, {"request": true, "restoreKey":"bluetoothleplugin-peripheral"});
}

var initPeripheralSuccess = function(result){
    bluetoothle.addService(serviceSuccess, error, {service: "12345"});
}

var serviceSuccess = function(result){
    bluetoothle.startAdvertising(adSuccess, error, {"service": "12345", "name": "The Peripheral!"});
}

var error = function(){
    alert("error");
}