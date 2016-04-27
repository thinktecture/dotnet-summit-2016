'use strict';

var electron = require('electron'),
    app = electron.app,
    BrowserWindow = electron.BrowserWindow;

var mainWindow = null;

app.on('ready', function() {
    mainWindow = new BrowserWindow({
        title: 'HelloApp',
        width: 1024,
        height: 768
    });
    mainWindow.loadURL('file://' + __dirname + '/index.html');
});