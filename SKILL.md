---
name: adobe-automator
description: "Universal Adobe application automation via ExtendScript bridge. Supports Photoshop, Illustrator, and InDesign."
metadata:
  {
    "openclaw":
      {
        "requires": { 
          "bins": ["cscript", "osascript"], 
          "os": ["windows", "macos"],
          "env": [], 
          "config": [] 
        }
      }
  }
---

# Adobe Master Automator (v1.1.0)

A generalized skill for automating multiple Adobe applications using a cross-platform ExtendScript bridge.

## Supported Applications

- **Photoshop**
- **Illustrator**
- **InDesign**
- **Premiere Pro**
- **After Effects**

## Commands

### runScript
Executes raw ExtendScript (ES3) in the target application.

**Parameters:**
- `app`: Target application (`photoshop`, `illustrator`, `indesign`, `premiere`, `aftereffects`).
- `script`: The JSX code to execute.

## 🛠 AI Protocol

### 1. Technical Constraints
- **ES3 Syntax Only**: Adobe apps use the ExtendScript (ES3) engine. Avoid modern JS features.
- **Target App Availability**: Ensure the target application is installed and running (or able to launch) on the host system.

### 2. Security & Side Effects
- **Filesystem Access**: Scripts have direct access to the local filesystem via `File` and `Folder` objects.
- **Side Effects**: Scripts can read, write, or delete files. Review generated code before execution.

## Setup

The skill automatically detects your operating system and routes commands to Photoshop, Illustrator, or InDesign.

---
Developed for the OpenClaw community by [Abdul Karim Mia](https://github.com/abdul-karim-mia).
