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
1. Install WSL2:
```powershell
    ```wsl --install```
```
2.Install a Linux distro (Ubuntu recommended)
3.Inside WSL:
``` sudo apt update```
``` sudo apt install podman -y```
```pip install podman-compose```
```