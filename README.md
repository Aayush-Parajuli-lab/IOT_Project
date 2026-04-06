# 🌡️ Smart Temperature & Humidity Monitoring System

A containerized IoT-style full-stack web application that simulates temperature and humidity data, stores it in a database, and visualizes it through a web dashboard using Podman.

---

# 📌 Overview

This project demonstrates a modular system consisting of:

- **Frontend** → React-based dashboard for visualization  
- **Backend** → Node.js (Express) API for handling sensor data  
- **Database** → MariaDB for persistent storage (30 days retention)  
- **Mock Sensor** → Periodic simulated data generator  
- **Containerization** → Podman + Podman Compose for orchestration  

---

# 🧰 Prerequisites (Windows, Arch Linux, Fedora)

## 🪟 Windows

### Option 1: Using WSL (Recommended)
## 🪟 Windows (Using WSL2)

### 1. Install WSL2

Open **PowerShell as Administrator** and run:

```powershell
wsl --install
```

### 2. Install a Linux Distribution

After WSL installs, open the **Microsoft Store**, search for **Ubuntu**, and install it (Ubuntu 22.04 LTS recommended).

### 3. Inside Ubuntu (WSL)

Open Ubuntu and run these commands one by one:

```bash
# Update package lists
sudo apt update

# Install Podman
sudo apt install podman -y

# Install podman-compose (Python tool)
pip install podman-compose
```
### 4. Verify Installation
```bash
podman --version
podman-compose --version
```
## 🐧 Arch Linux
### 1. Update System
```bash
sudo pacman -Syu
```
### 2. Install Podman
```bash
sudo pacman -S podman
```
### 3. Install Podman Compose
```bash
sudo pacman -S python python-pip
pip install podman-compose

⚠️ If podman-compose is not available or has issues, you can also use:
pip install --user podman-compose
```
### 4. Enable Podman Service (Rootless Setup)
```bash
podman system migrate
```
### 5. Verify Installation
```bash
podman --version
podman-compose --version
```
## 🟣 Fedora
### 1. Update System
```bash
sudo dnf update -y
```
### 2. Install Podman
```bash
sudo dnf install podman -y
```
### 3. Install Podman Compose
```bash
sudo dnf install python3 python3-pip -y
pip3 install podman-compose
```
### 4. Enable Podman (Optional but Recommended)
```bash
systemctl --user enable --now podman.socket
```
### 5. Verify Installation
```bash 
podman --version
podman-compose --version
```
🚀 Next Steps (All Systems)

After installation, you can run the project:
```bash
podman-compose up
```
Or in detached mode:
```bash
podman-compose up -d
```

Then access:

🌐 Frontend Dashboard → http://localhost:3000 (or configured port)
🔌 Backend API → http://localhost:5000