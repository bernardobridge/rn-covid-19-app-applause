import {Navigation} from 'react-native-navigation';
import {PendoSDK, NavigationLibraryType} from 'rn-applause';

import Main from './screens/Main';

Navigation.registerComponent('Main', () => Main);

Navigation.events().registerAppLaunchedListener(() => {
    Navigation.setRoot({
        root: {
            component: { name: 'Main' }
        }
    });
    
    const initParams = {
        // visitorId: "John Smith",
        // accountId: "Acme Inc",
        visitorData: {
            age: 25,
            country: "USA"
        },
        accountData: {
            Tier: 1,
            Size: "Enterprise"
        }
    };
    const navigationOptions = {library: NavigationLibraryType.ReactNativeNavigation, navigation: Navigation};
    const pendoKey = 'eyJhbGciOiJSUzI1NiIsImtpZCI6IiIsInR5cCI6IkpXVCJ9.eyJkYXRhY2VudGVyIjoidXMiLCJrZXkiOiIwZTI1Njc4Y' 
        + 'jZjZTEyMGVmNWRjNzk3MjczMzc5NTNjNTdjZWZhNjg2NTY0ZjAwYzQ1MTQyODFhMWViMzRkNTY3MmM3MTI1OW'
        + 'IxM2E0M2I1ZjhiODI2ZDI3ODg2MWMyYTg3YWIzNDk1MjE3MWU3ZmViYjVmZDgwMTgyMWRjNDZhMGUzMDJiYzUxYmZiMDllNjAwYTcyNDlmYjcy'
        + 'ZWQ4MDQ0ZGY5MmMxZDViYjllMzdiZjIwNWYyMjZjMDE2NTQyODU3MGY3MzI5YmNiZjQ0Mzc1MzM3YTNkMTg0YWVhNGY5NC5mMmU1Y2YwYmVmZmI'
        + 'yYjcxNDBmZTI5ZmViY2YwZGU3Yi4zMDNhODIzMzY2ZjA0OWU5ZGMyZjQ1ZmJlZmNlNmU0ZjIzNjhkMjJhYmQzNjNiYjIyOWFhNWM4NzU2NDQ1NTl'
        + 'jIn0.SA5QmxWX8uq8v6t6FGVsyh0W1DuutNhzDyulczxI-JQKPA29ELiWvw7vIv5jkrpjn-Gk0ATCA5YG4sUEPsfZpkWCn6Yc1v9XhNAIwVYf8Sf-rmuJW5mAYxcdKVhbA3Gu08em6zQijOq3mLvsOltFXowx09zGzU7ZXPoMyoD4mx4';
    PendoSDK.initSdk(pendoKey, initParams, navigationOptions);

});
