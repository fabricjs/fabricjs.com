---
layout: articleadmd
title: Fabric.js objects
---
## Upgrading your Fabric.js Project

There are a number of breaking changes to be aware of when upgrading your Fabric.js project through each of the major versions. The following guide includes a basic summary of these changes, and links to resources to assist you with the upgrade process.

**Upgrading from v1.x to v2.x**

Fabric.js version v2.x has the biggest breaking changes of the major versions. In addition to several methods that have been removed, there are significant changes to how image height and width is handled in order to accommodate the new image cropping functionality. The following guide outlines these changes, and also includes some sample code to help with deserializing pre-v2.0 JSON strings.

-   [changes-introduction](/changes-introduction)
-   [v2-breaking-changes](/v2-breaking-changes)
-   [v2-breaking-changes-2](/v2-breaking-changes-2)

Beginning with v2.4.0,  `clipPath`  support was added which allows you to clip an object or the canvas with another Fabric object. The  `clipTo`  method which was the previous means of doing this is now marked as depreciated, so if your project uses  `clipTo`  you should really begin making the transition to `clipPath`. 

See this 4-part guide to better understand the new `clipPath` functionality.

-   [clippath-part1](/clippath-part1)
-   [clippath-part2](/clippath-part2)
-   [clippath-part3](/clippath-part3)
-   [clippath-part4](/clippath-part4)

**Upgrading from v2.x to v3.x**

Fabric.js v3.x has fewer breaking changes than v2.x. Support for Node 4 and 6 was removed and object caching is now required under some circumstances rather than being optional, but this upgrade is more about new features than big changes.

See [changelog](/changelog) for a detailed list of changes across each version.

**Upgrading from v3.x to v4.x**

Although the v4.x branch is at present still in beta, there are quite a few breaking changes that mostly involve the removal of old methods. If you make these changes now you can still run your project on the v3.x branch until v4.x leaves beta.

One big change is that the  `clipTo`  method has finally been removed, so if you're still using  `clipTo`  you will need to make the move to using  `clipPath`.

The biggest improvement coming in v4.x is a new custom control interface. With this system, you'll be able to customize the function of each control, add icons, and even new controls to your objects. See the following demos for help with the new system.

-   [custom-control-render](/custom-control-render)
-   [custom-controls-polygon](/custom-controls-polygon)

See  [https://github.com/fabricjs/fabric.js/releases](https://github.com/fabricjs/fabric.js/releases)  for a current list of changes and removed methods in the v4.x branch.