---
title: 如何为你的 Meshtastic 设备添加 SOS 按键
date: 2025-02-08 13:00:20
thumbnail: /how-to-add-sos-button-to-meshtastic-device/mohammad-amin-javid-xGMtnLBVHwA-unsplash.webp
description: "在户外探险、应急通信或者极端环境下，Meshtastic 设备本身的离网通讯已经是一大利器，但如果能再加一个 SOS 按键，就能在关键时刻一键求救，提升生存几率。本文带来一份详细的 DIY 指南，手把手教你如何用一个轻触按键和几根杜邦线，把你的 ESP32 LoRa 设备改造成支持紧急求救的智能节点。只需简单几步，就能让你的 Meshtastic 设备拥有更强的实用性，同时兼容 Heltec V3 Lora、TTGo、T-Beam 等主流 ESP32 设备。想知道如何实现？让我们一起动手改造吧。"
categories:
 - 教程
tags:
 - 救援
mathjax: false
---

{% note info 翻译声明 %}

本文翻译自 Adrelien 的文章《 [How To Add SOS Button To Your Meshtastic Device](https://adrelien.com/blog/how-to-add-sos-button-to-meshtastic-device/) 》。他的博客中有许多有趣且创新的 Meshtastic 相关文章，内容丰富且实用。强烈推荐读者感兴趣的话去拜读学习，相信你会发现更多灵感！

{% endnote %}  

通过这篇详细的 DIY 指南，为你的 ESP32 LoRa Meshtastic 设备增加一个 SOS 紧急救援按键。按照逐步指引，轻松集成 SOS 按键，使你的设备在紧急情况下更具实用性。适用于所有基于 ESP32 的 Meshtastic 设备，仅需进行少量调整即可兼容不同型号。

![如何为你的 Meshtastic 设备添加 SOS 按键](https://images.unsplash.com/photo-1626546849705-f29e2f771df9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMTc3M3wwfDF8c2VhcmNofDF8fFNvcyUyMGJ1dHRvbnxlbnwwfHx8fDE3MTE5OTU3NTV8MA&ixlib=rb-4.0.3&q=80&w=1200)

## 硬件准备

让我们先来看一下需要的硬件：

![img](https://adrelien.com/blog/content/images/2024/04/How-To-Add-SOS-Button-To-Meshtastic-Device-button.png)

- 1 个轻触按键开关
- 2 条 母对母杜邦线


## 组装步骤

硬件准备就绪后，接下来就是接线部分。请按照以下电路图进行连接。

### 轻触按键开关 - DIY ESP32 Meshtastic 节点

![img](https://adrelien.com/blog/content/images/2024/04/How-To-Add-SOS-Button-To-Meshtastic-Device.png)

- 按键引脚 1 → GPIO 15
- 按键引脚 2 → GND

如果你使用的是其他 ESP32 设备（如 Heltec V3 Lora、TTGo、T-Beam），只需选择一个支持数字输入的 GPIO 端口，并确保该端口支持上拉/下拉电阻且未被占用。然后根据你的设备调整引脚编号，其他步骤保持不变。

值得注意的是，按键的两个引脚（Leg 1 和 Leg 2）可以任意方向接入，但必须保持并行。如果接错，可能会导致设备损坏。

一个可以优化的方向是在电路中增加电容，可以降低电路噪声，提高稳定性。

所有接线完成后，请再次检查连接是否正确，并与上方示意图核对，以确保无误。

## Meshtastic 软件设置

### 在传感器设备上（SOS 按键设备）

1. 打开 Meshtastic App（本教程使用 iOS 版）
2. 进入 设置 页面
3. 在 模块配置 中，找到 检测传感器（Detection Sensor）
4. 开启 启用 选项
5. 选择 传感器模式（Sensor）
6. 给传感器（按键）设置一个名称（示例名称：SOS）
7. 设定 GPIO 监测引脚为 GPIO 15
8. 点击 保存

💡 触发逻辑说明  
此按键采用低电平触发，即松开时为高电平，按下时为低电平。

### 在客户端设备上（接收 SOS 信号的设备）

1. 打开 Meshtastic App
2. 进入 设置 页面
3. 在 模块配置 中，找到 检测传感器（Detection Sensor）
4. 开启 启用 选项
5. 选择 客户端模式（Client）
6. 点击 保存

完成设置后，每当按键被按下，SOS 信号都会通过 Meshtastic 网络广播到公用频道。如果你希望按键更频繁地发送信号，可以在设置中调整触发频率，但要注意避免网络过载，否则可能会影响数据传输。你可以参考这篇 [Meshtastic 频道优化指南](https://adrelien.com/blog/understanding-and-optimizing-channel-utilization-in-meshtastic-devices/) 来优化网络使用。

## 结语

通过本教程，你可以轻松为 ESP32 LoRa Meshtastic 设备添加 SOS 紧急按键，拓展其功能。尽管本指南主要针对 ESP32 设备，但稍作修改后同样适用于 Heltec V3 Lora、TTGo、T-Beam 等其他基于 ESP32 的设备。  

在实际使用中，请合理规划 SOS 按键的触发频率，避免过度占用网络资源。除此之外，你还可以进一步改进设备，例如增加其他传感器或按钮，实现更多自定义功能。  