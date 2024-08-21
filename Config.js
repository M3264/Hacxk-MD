// Define bot settings object
global.botSettings = {};

// Add owner settings
global.botSettings.ownerNumbers = ['2347013159244', '2347034313883']; // Example: ['1234567', '453657767'] **PUT YOUR NAMER FIRST**
global.botSettings.botNumber = "198768"; // Don't Need to input bot will update automatically
global.botSettings.ownerName = ['Kenny'];
global.botSettings.botName = "Mirage";
global.botSettings.botVersion = ['2.0.1'];
global.botSettings.botPrefix = ['.', '!', '/', ',']; // You can use prefix as /, ., # don't use [!] this
global.botSettings.botWorkMode = "Public"; // If Private don't Work bot command in group if you want to work use Public
global.botSettings.greetings = false; // This mean if a contact join or leave a group sending welcome and goodbye message if 'true' it works if 'false' not work
global.botSettings.tempSession = false; // You can put true also this setting is to save session as temp sometime session will auto delete if still error delete session and Temp/Session folder and rescan and put a new session
global.botSettings.adultSearch = false; // This option is enable/disable Google Safe Search
global.botSettings.directDlLimitinMB = "100"; // Max Download Size In MB if want you can increase/decrease
global.botSettings.maxAPKDownloadSizeInMB = "100";

// Define bot settings object
global.Check = {};

// --------- these work if checkers true
global.Check.Checkers = true;
global.Check.AntiLinkChecker = true;
global.Check.AntiBadWordChecker = false;
global.Check.RejectCall = true;

// Define api object
global.api = {};

global.api.openAI = "2fas";
global.api.gemini = "AIzaSyB0i2lIksuFBjgzW21yoHL4OZSsGrLvVvw";
