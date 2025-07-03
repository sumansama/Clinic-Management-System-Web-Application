# 🏥 Clinic Management System

A web-based platform to streamline clinic operations for doctors and receptionists using Firebase as the backend.

## 🌐 Features

- 🔐 **Authentication**  
  - User login & signup (Firebase Auth) for doctors and receptionists

- 🧾 **Doctor Module**  
  - View assigned patients & their details  
  - Add prescriptions and update medical history  
  - Access full visit history

- 🗂️ **Receptionist Module**  
  - Register new patients with auto-generated tokens  
  - Manage token queue and forward patient details to doctors  
  - Generate and print downloadable bills

- 🔢 **Token Generation**  
  - Auto-increment tokens using jswtoken functions

- 💊 **Patient Management**  
  - Store patient info, prescriptions, and medical records in Firestore

- 💳 **Billing**  
  - Itemized bills based on services and medicines

## ⚙️ Tech Stack

- **Frontend**: HTML5, CSS3, JavaScript  
- **Backend**: Firebase Auth, Firestore (Realtime DB optional)  
- **Hosting**: Firebase Hosting or local dev server  
- **Logging**: Console logs (extendable with tools like Winston/LogRocket)



## 🛠️ Installation & Setup

1. Clone the repo:
   ```bash
   git clone https://github.com/sumansama/clinic-management-system-web-application.git
   cd clinic-management-system-web-application
