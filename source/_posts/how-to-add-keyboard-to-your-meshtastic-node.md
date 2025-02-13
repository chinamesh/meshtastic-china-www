---
title: 如何为你的 Meshtastic 节点添加键盘
date: 2025-02-13 12:03:20
thumbnail: /how-to-add-keyboard-to-your-meshtastic-node/sergi-kabrera-2xU7rYxsTiM-unsplash.webp
description: "学习如何轻松将 M5Stack CardKB 键盘集成到您的 Meshtastic 节点，将其变成一个独立的通信设备。按照详细的步骤指南，并根据不同的 Meshtastic 设备进行适配。立即开始在您的节点上输入并发送消息吧！"
categories:
 - 教程
tags:
 - 键盘
 - I2C
 - M5Stack
mathjax: false
---

{% note info 翻译声明 %}

本文翻译自 Adrelien 的文章《 [How To Add Keyboard To Your Meshtastic Node](https://adrelien.com/how-to-add-keyboard-to-your-meshtastic-node/) 》。他的博客中有许多有趣且创新的 Meshtastic 相关文章，内容丰富且实用。强烈推荐读者感兴趣的话去拜读学习，相信你会发现更多灵感！

{% endnote %}  

在本教程中，我们将展示如何将 M5Stack CardKB Keyboard 集成到当前的 ESP32 Lora Meshtastic 节点中。对于其他基于 ESP32 的设备，只需进行少量修改即可。通过给节点添加键盘，你的节点将成为一个完全独立的设备。你可以直接从节点本身发送消息，甚至可以控制某些功能（虽然支持可能有限），无需再依赖手机。让我们开始吧！

![How To Add Keyboard To Your Meshtastic Node](https://adrelien.com/content/images/size/w1200/2024/04/How-To-Add-Keyboard-To-Your-Meshtastic-Node-1.webp)

## 硬件准备

下面是你需要准备的硬件：

![img](https://adrelien.com/content/images/2024/04/M5Stack-Official-CardKB-Mini-Keyboard-Programmable-Unit-V1-1-MEGA8A.jpg_.png)

- 1 个 M5Stack CardKB 键盘
- 4 条 母对母 杜邦线

## 组装步骤

硬件准备就绪后，接下来就是接线。为了适配各种 Meshtastic 设备，我们需要了解 CardKB 的接线示意。连接完 CardKB 上的 HY2.0-4P 线缆后，可以将另一端剪断，并焊接母接头，也可以直接将裸线焊接到你的开发板上。  
CardKB 原装线缆有四根不同颜色的线：  
- **黑色 (Black) → GND**  
- **红色 (Red) → 3.3V**  
- **黄色 (Yellow) → SDA**  
- **白色 (White) → SCL**  

确保在 Meshtastic 设备上找到对应的 SDA、SCL、3.3V 和 GND 引脚，并与上述颜色一一对应。这样，CardKB 与 Meshtastic 设备之间的通讯和供电才能正常进行。

### M5Stack CardKB 接线 - Heltec V3 Lora ESP32 Meshtastic 节点

![img](https://adrelien.com/content/images/2024/04/18.png)

- Black -> GND  
- Red -> 3.3V  
- Yellow -> Pin 41  
- White -> Pin 42  

### M5Stack CardKB 接线 - Lilygo T-Beam Meshtastic 节点

![img](https://adrelien.com/content/images/2024/04/19.png)

- Black -> GND  
- Red -> 3.3V  
- Yellow -> Pin 21  
- White -> Pin 22  

### M5Stack CardKB 接线 - Lilygo TTGO Meshtastic 节点

![img](https://adrelien.com/content/images/2024/04/20.png)

- Black -> GND  
- Red -> 3.3V  
- Yellow -> Pin 21  
- White -> Pin 22  

### M5Stack CardKB 接线 - DIY ESP32 Meshtastic 节点

![img](https://adrelien.com/content/images/2024/04/21.png)

- Black -> GND  
- Red -> 3.3V  
- Yellow -> Pin 21  
- White -> Pin 22  

💡 如果你使用的是其他基于 ESP32 的开发板，只需找到板子上的 SCL（白色）和 SDA（黄色）即可。然后按照本指南进行相应的引脚连接，忽略文中所提及的特定引脚编号。

💡 在电路中添加电容是一个不错的选择，可以帮助“解耦”电路部分之间的干扰。

完成所有接线后，请再次仔细检查你的连接，并确认与上面所示的布局一致。

## Meshtastic 软件设置

### 在带键盘的传感器设备上

1. 打开 Meshtastic App（本教程以 iOS 版本为例）  
2. 进入 **Settings** 页面  
3. 在 **Module Configurations** 区域找到 **Canned Messages**  
4. 启用 **Canned messages**  
5. 在 **Configuration Preests** 下拉列表中选择 **M5 Stack Card KB**  
6. 最后点击 **Save**  

💡 当你第一次给节点上电时，可能会看到提示“Canned Message Module Disabled”。这是正常现象。只需按下重置（Reset）按钮，你的节点就会正常启动。之后，你就可以开始打字了。

完成上述设置后，你就可以直接在节点上敲击键盘并发送消息，不再依赖外部设备或手机。通过添加 M5Stack CardKB Keyboard，你的节点真正成为了一个独立的通信设备。

总而言之，通过在 Meshtastic 节点上添加 M5Stack CardKB Keyboard，你为你的网状通信系统开启了全新的独立性和便捷性。只需简单几步，就能让你的节点成为一个完全独立的设备，能够直接发送消息并控制部分功能，无需再依赖手机或其他外接设备。祝你玩得开心，探索更多可能性！