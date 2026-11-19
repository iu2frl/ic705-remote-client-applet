# IC-705 remote client applet

Experimental IC-705 remote client and FTP server, with an in-browser firmware
patcher. Not affiliated with or supported by Icom. Use at your own risk; modified
firmware may damage or brick your radio and may void its warranty.

**[Open the web patcher and app downloads](https://iu2frl.github.io/ic705-remote-client-applet/)**.
The apps and example configuration are also available in [docs/apps/](docs/apps/).
Checksums for all published files are in [SHA256SUMS](SHA256SUMS).

## Installation

1. Obtain the official **IC-705 E 1.40 `705E140.dat`** from Icom yourself.
   Other regions, versions and radios are not supported by these apps.
2. Open the web patcher, read its warnings, select your official file, and build
   the network/file/audio firmware. Processing stays in your browser; the official
   and modified firmware files are not distributed here.
3. Install using Icom's SD-card firmware update procedure. Use reliable power:
   this release also replaces the bootloader, and loss of power while writing it
   can require external flash recovery.
   - **IMPORTANT:** if you already have a modified firmware, ensure to install this 
   firmware only when the official 1.40 version is running on the device, do not
   flash it from a modded firmware or you'll lose access to the original one.
4. Copy [rsba1.app](docs/apps/rsba1.app) and [ftp.app](docs/apps/ftp.app) to
   `\IC-705\Apps\` on the SD card.
5. Edit [RSBA1.CFG](docs/apps/RSBA1.CFG) with your server's IP and credentials,
   then save it as `\IC-705\Apps\rsba1\RSBA1.CFG`. Keep credentials private.
6. Launch an app from **MENU > SET > Apps**. Press the physical **EXIT** key to
   close the remote client normally; release PTT to allow cleanup to finish.

## Remote client

Uses an RS-BA1-compatible server, or connects directly to a transceiver that supports the RS-BA1 protocol, such as the
IC-7300MK2 over LAN. Supports tuning, mode/filter, spectrum/waterfall, receive
audio and physical PTT. Microphone transmission is opt-in (`TXAUDIO=1`). Configuration is read at startup.

**First tests**: dummy loads on both radios, low power, local VOX disabled, and an
independent TX timeout configured on the remote radio. Monitor it independently:
network loss, delayed packets or a crash can leave the remote transmitting.
The client-side `PTT_TIMEOUT=120` is not a substitute for a radio-side timeout.
Normal exit restores local settings; reboot after a crash or forced termination.
Some features remain experimental and require further hardware validation.

## FTP server

Connect to the IC-705's LAN address on port **21**, login **icom** / **ic705**.
Use passive mode and one simultaneous file transfer (up to three control
connections). FTP exposes the SD card, is unencrypted, and has fixed credentials:
**use only on a trusted LAN; do not expose it to the Internet**.
Stop the FTP app before launching the remote client.

## Credits and distribution

The original firmware patcher and base firmware modifications came from
[Dawid SQ6EMM](https://github.com/sq6emm/icom-custom-firmware).
The patcher is redistributed under its [MIT license](LICENSE); that license
applies to the upstream patcher, not automatically to all app components.

App network/file/audio API layer and IC-705 apps: were designed and created by [IU2FRL](https://github.com/iu2frl).

Icom firmware must be supplied by the user and will be used to create the necessary patches.

Transmit only where your licence and local regulations permit.

This repository is a manually published distribution snapshot. No development
history, private configuration, logs or complete firmware images are synced.
