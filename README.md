# Angular Portfolio Website

A responsive personal portfolio built with Angular and integrated with a secure .NET 8 Azure Function backend for contact form processing.

🌐 Hosted on Netlify  
⚙ Backend powered by Azure Functions  
📩 Contact form integrated with SendGrid  

---

## Overview

This project is the frontend of a full-stack portfolio system.  
It provides a modern UI and securely communicates with a serverless backend to process contact form submissions.

---

## Tech Stack

- Angular  
- TypeScript  
- HTML / CSS  

Backend:
- .NET 8 Azure Function 

---

## Local Setup

1. Clone Repository

```bash
git clone https://github.com/shivanisdubey/Portfolio-AngularUI.git
cd Portfolio-AngularUI
```

2. Install Dependencies

```bash
npm install
```

3. Configure API URL

Update:

`src/Environments/environment.ts`

```ts
export const environment = {
  production: false,
  apiUrl: "Your Azure Function App URL"
};
```

4. Run Application

```bash
ng serve
```

Visit:  http://localhost:4200

---

## Backend Repository

The contact API is implemented separately (Portfolio Azure Function Backend).

Visit:  https://github.com/shivanisdubey/Portfolio-AzureFunctionBackend

---

## Security

- No API keys stored in frontend  
- Backend secrets managed securely in Azure  
- Only API endpoint URL is exposed  

---

## Author

Shivani Dubey  
Full Stack .NET Developer
