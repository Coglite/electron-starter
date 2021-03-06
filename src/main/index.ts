import * as electron from 'electron';

let app = electron.app;
let mainWindow;

function createWindow() {
  mainWindow = new electron.BrowserWindow({
    width: 1280,
    height: 780,
    title: 'Electron Starter',
  });

  mainWindow.loadURL(`file://${__dirname}/../html/index.html`);
  mainWindow.once('closed', () => { mainWindow = null; });
  mainWindow.openDevTools();
}

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('ready', () => {
  createWindow();
});

app.on('activate', () => {
  if (mainWindow === null) {
    createWindow();
  }
});
