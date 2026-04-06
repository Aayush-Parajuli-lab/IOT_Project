# System Architecture

- Frontend (React) communicates with Backend via REST API
- Backend (Node.js/Express) handles API requests
- Database (MariaDB) stores sensor readings
- Containers managed using Podman Compose

## Flow:
Mock Sensor → Backend API → Database → Frontend Dashboard