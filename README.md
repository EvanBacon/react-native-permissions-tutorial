# React Native Permissions Tutorial

Hey guys, here is the source code from my tutorial on using Permissions in React Native with `expo-permissions`. 

[![ding the bell](https://img.youtube.com/vi/-QQ4W1G9rYE/0.jpg)](https://www.youtube.com/watch?v=-QQ4W1G9rYE)

If you found it helpful, be sure to like and subscribe 👍😁

## Quick Notes

1. On iOS and on Android, if you change a system permission the app will restart. This means there is no need to observe AppState changing.
2. The Linking API has a URI scheme for opening the settings, this is the best (really the only) way to approve a pemission that was denied.
3. Make sure to change the permission message before submitting to the App Store. This will save you from a lot of heartache in the future, be very clear about what you want to do with said permission.
4. A lot of popular apps (like Google apps) have a modal that says "... Give us permissions ..." Before actually prompting a user. The reason for this is that if the user denies the permission in this fake modal, then you can always show it to them again later. If a user actually wants to use the permission they will approve two modals. But if they don't, you can try and make the permission usage more enticing.

## Hope this Helps! 😁

* **Docs**: https://docs.expo.io/versions/latest/sdk/permissions
* **Youtube video**: https://www.youtube.com/watch?v=-QQ4W1G9rYE&feature=youtu.be
* **Reddit post**: https://www.reddit.com/r/reactnative/comments/9yeyn2/how_to_use_native_permissions_with_expo/
* **Snack**: https://snack.expo.io/@bacon/basic-permissions-example
