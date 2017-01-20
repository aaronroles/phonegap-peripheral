document.addEventListener("deviceready", onDeviceReady, false);

function onDeviceReady(){
    bluetoothle.initialize(initResult, {"request": true, "statusReceiver":true});
}

var initResult = function(result){
    if(result.status == "enabled"){
        // enabled
        bluetoothle.initializePeripheral(initPeripheralSuccess, initError, {"request": true, "restoreKey":"bluetoothleplugin-peripheral"});
    }
}

var initPeripheralSuccess = function(result){
    bluetoothle.addService(addServiceSuccess, addServiceError, {service: "12345"});
    bluetoothle.startAdvertising(startAdSuccess, startAdError, {"service": "12345", "name": "The Peripheral!"});
}

var initError = function(error){
    alert(error.message);
}

// service 
var addServiceSuccess = function(result){
    alert(result.status);
}

var addServiceError = function(){
    alert("addServiceError");
}

// advertising
var startAdSuccess = function(result){
    alert(result.status);
}
var startAdError = function(){
    alert("startAdError");
}