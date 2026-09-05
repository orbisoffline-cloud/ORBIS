# 📋 Changelog

All notable changes to the **ORBIS** sovereign offline messaging and social ecosystem will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/), and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

---

## [v1.1.0] - 2026-09-05

### 🚀 Major Highlights

- **📞 End-to-End Encrypted (E2EE) Voice Calls via GSM SMS Signaling**:
  - Direct peer-to-peer audio streaming encrypted with military-grade **AES-256-GCM** keys and zero central cloud servers.
  - Compact offline cellular signaling via SMS protocols (`ORB:CO:` call offer, `ORB:CA:` call accept, `ORB:CE:` call terminate).
  - **SAS (Short Authentication String)**: 4-digit visual security code displayed simultaneously on both devices to verify session integrity against Man-in-the-Middle (MITM) attacks and IMSI-catchers.
  - **Zero-Credit GSM Carrier Fallback**: If a contact does not have SMS balance to reply with the session handshake, Orbis provides a direct 1-tap fallback to standard cellular GSM phone calls (100% free for the receiver).
  - **Dead-Peer Hangup Watchdog**: Immediate UDP packet bursts upon hangup and a 4.5-second silence timeout watchdog to cleanly terminate inactive connections and preserve battery life.

- **👥 Sovereign Social Network ("Friends Only" Privacy Architecture)**:
  - Private social wall & feed strictly isolated between confirmed friends and trusted circles.
  - 24-hour disappearing stories with glowing multi-color ring indicators.
  - Decentralized polls with real-time signed SMS vote aggregation, percentage calculation, and duplicate vote prevention.
  - Emoji reactions (❤️, 🔥, 👏, 💡, 🛡️) and threaded comment discussions.
  - Removed all misleading open/public broadcast terminology in favor of sovereign circle-based sharing.

- **📱 Hardware Dual-SIM & Multi-Profile Integration**:
  - Live on-avatar SIM slot indicator badge (`SIM 1` / `SIM 2`).
  - Instant line switching with segregated cryptographic keys, contacts, and message stores.

- **🎙️ High-Compression Voice Notes via SMS**:
  - Compressed microphone recording (AMR/AAC) compressed with ZLIB Deflater into compact SMS payloads.
  - Interactive audio player featuring an animated waveform scrubber, tactile seeking, and playback speed switcher (1.0x / 1.5x / 2.0x).

- **📖 In-App Modular Help Center**:
  - Offline searchable help center with 7 interactive categories (*Getting Started*, *E2EE Messaging*, *Voice Calls*, *Social Wall & Stories*, *Dual SIM*, *Security & Vault*, *Troubleshooting*).
  - Full trilingual support (**English**, **Français**, **العربية** with native RTL).

- **📊 Cellular Quota & Expense Tracker**:
  - Real-time tracking of daily and monthly cellular SMS usage with transparency breakdown (1 SMS per message/GPS/reaction, 2 SMS for call handshake, 0 SMS during voice conversation).

---

### 🔒 Cryptography & Security

- **Local Master Encryption**: RSA-2048 identity keys backed by hardware Android KeyStore (TEE).
- **Session Sealing**: AES-256-GCM authenticated encryption with unique per-message nonces and SHA-256 HMAC integrity seals.
- **Perfect Forward Secrecy (PFS)**: Double Ratchet key exchange with active memory zeroing (`fill(0)`).
- **Anti-Spam & Contact Privacy**: Unknown incoming SMS messages are sequestered in a dedicated requests queue with cryptographic key verification.

---

### 📦 Artifact Details

| Property | Value |
| :--- | :--- |
| **Release Tag** | `ORBIS-v1.1.0` |
| **Package Name** | `com.sha.orbis` |
| **Binary Filename** | `O.R.B.I.S.apk` |
| **Download URL** | [Download APK](https://github.com/orbisoffline-cloud/ORBIS/releases/download/ORBIS-v1.1.0/O.R.B.I.S.apk) |
| **File Size** | `4.64 MB` (4,644,842 bytes) |
| **SHA-256 Checksum** | `6b983af8c9b139d39d220fb435f1c04c10e190a9817455c90d0886199bea96d9` |
| **Minimum Android** | Android 8.0 (API level 26) |
| **Target Android** | Android 15 (API level 35) |

---

## [v1.0.0] - Initial Release

- Initial release of ORBIS Sovereign Offline Messaging platform.
- Cellular SMS protocol engine and Double Ratchet cryptographic core.
- Jetpack Compose Material 3 sovereign UI.
