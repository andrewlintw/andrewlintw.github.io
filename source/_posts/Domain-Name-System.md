---
title: Domain Name System
date: 2026-08-27 14:25:40
tags: [linux]
categories: [Linux]
---

# The Concept of Domain Name System

人類看得懂url，但電腦只認IP位址。因此，我們需要將url中的「域名」轉譯為ip位址。這個過程稱為DNS (Domain Name System)。
將域名轉換為ip的處理器稱為resolver。通常需要多個resolver才能找到正確域名，因此我們做出下列分類，

- recursive resolver: 開始。它負責送出使用者的請求。
- stub resolver: 中介。它只負責把使用者的要求傳送出去，不改變任何資訊。

# The Actual Process of Connecting the Internet

通常一個應用程式接到url後，會呼叫一個glibc中的函式 `getaddrinfo()` 來試圖取得網頁資訊。
這個函式會將請求發送給NSS (Name Service Switch)。它會依照 `/etc/nsswitch.conf` 中的 `hosts` database內容依序嘗試解析域名。通常來說會長得像這樣，

```
hosts: mymachines resolve [!UNAVAIL=return] files myhostname dns
```

其中最重要的三條路徑是：

- resolve: 若 systemd-resolved 存在且被啟動，呼叫它。
- files: 依序詢問 `/etc/hosts` 中列出的IP這個域名的ip是誰。預設值是 `127.0.0.1` 及 `::1` ，都是localhost。
- dns: 依序詢問 `/etc/resolv.conf` 中列出的IP這個域名的ip是誰。預設值是 `192.168.0.1` ，就是網路路由器，是由NetworkManager所設定的。

我們比較希望由 `systemd-resolved` 來resolve domain name，因為它支援DNSSEC和加密DNS (DNS over TLS)。然而它目前還不支援 DNS over HTTPS。

由於 `resolve` 的優先序高於 `dns` ，只要 `systemd-resolved` 存在就會被呼叫。然而這是建立在所有應用程式都呼叫 `getaddrinfo()` 函式之上。事實上有不少的應用程式會直接參考 `/etc/resolv.conf` 來決定要找誰來resolve domain name，根據arch wiki，瀏覽器即是一例。

對於這類應用程式，通常的解決辦法是透過symlink，把本來參考 `/etc/resolv.conf` 的應用程式都導引到 `127.0.0.53`，也就是 `systemd-resolved` 的IP位址。

> 若只這麼做且不做其他設定，仍舊可以正常連網。仔細想這其實很怪，因為 `systemd-resolved` 參考的DNS server是來自 `/etc/systemd/resolved.conf` ，而這個檔案預設值為空。（只有一行 `[Resolve]`）
> Gemini回答我是因為NetworkManager會將 `192.168.0.1` 藉由D-Bus偷塞給 `systemd-resolved`。
