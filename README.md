# 📊 StudioPulse: Growth Analytics and UX Optimization Dashboard

**StudioPulse** is a modular, open-source analytics suite inspired by work conducted at Palace Studios Heights Limited. It enables product teams to identify UX friction, optimize onboarding funnels, run A/B tests, and translate marketing KPIs into business insights using interactive dashboards.

🚀 This project reconstructs select tools and workflows developed during a real-world internship for educational and demonstrative purposes.

---

## 🧠 Key Features

| Module                                | Description                                                                 |
|--------------------------------------|-----------------------------------------------------------------------------|
| 🖥️ UX Analyzer                        | Simulates session log analysis, heatmap scoring, and drop-off detection     |
| 🧪 A/B Test Manager                   | Dynamic variation manager using Firebase and real-time conversion tracking  |
| 🧪 Alpha/Beta Testing Console         | QA feedback pipeline with custom feedback forms and status tracking         |
| 📉 Recruitment Funnel Insights        | Behavioral analytics and drop-off rate visualization using D3.js            |
| 📈 Marketing KPI Dashboard            | Visualizes CAC, LTV, CTR, and churn with interactive React + D3.js charts   |

---

## 🧰 Tech Stack

| Layer       | Technologies                           |
|-------------|----------------------------------------|
| Frontend    | React, TypeScript, TailwindCSS, D3.js  |
| A/B Engine  | Firebase Remote Config + Firestore     |
| Data Mocking| JSON logs, synthetic sessions          |
| Backend     | (Optional) Node.js / Express for API   |
| Deployment  | Vercel (frontend), Firebase hosting    |

---

## 🚀 Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/studiopulse.git
cd studiopulse
```
### 2. Install Dependencies
```bash
cd client
npm install
```

### 3. Run Development Server
```bash
npm run dev
```
## 📁 Project Structure
```bash
studiopulse/
├── client/               # React frontend
│   ├── pages/            # Feature modules
│   ├── components/       # Reusable UI elements
│   ├── data/             # Mock analytics logs, A/B test data
│   ├── services/         # Firebase and analytics APIs
│   └── App.tsx
└── README.md
```
