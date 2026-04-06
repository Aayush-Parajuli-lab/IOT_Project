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