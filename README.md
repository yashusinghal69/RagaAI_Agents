# RagaAI Agents

A Next.js application that hosts multiple AI agents under a unified domain using iframe embedding.

## Overview

This project serves as a centralized hub for multiple AI agents deployed on Vercel, accessible through a single domain (`agents.raga.ai`). Each agent is embedded using iframes with proper security configurations.

## Agents

- **Clinical Coder Agent**: Medical coding assistance
- **Clinical Trial Agent**: Clinical trial management with voice interview capabilities
- **Patient Care Agent**: Patient care coordination
- **Patient Discharge Agent**: Discharge planning and management

## Features

- 🚀 Built with Next.js 15.2.4 and React 18
- 🎨 Styled with Tailwind CSS
- 🔒 Secure iframe embedding with proper permissions
- 📱 Responsive design
- 🎤 Microphone and camera access for voice interviews
- 🌐 Unified domain for all agents

## Tech Stack

- **Framework**: Next.js 15.2.4
- **React**: 18.3.1
- **TypeScript**: 5.x
- **Styling**: Tailwind CSS
- **UI Components**: Radix UI components
- **Deployment**: Vercel

## Getting Started

### Prerequisites

- Node.js 18.17.0 or higher
- npm 9.0.0 or higher

### Installation

1. Clone the repository:

```bash
git clone https://github.com/your-username/ragaai-agents.git
cd ragaai-agents
```

2. Install dependencies:

```bash
npm install
```

3. Run the development server:

```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Deployment

This project is configured for automatic deployment on Vercel:

1. Connect your GitHub repository to Vercel
2. Set up your custom domain (`agents.raga.ai`)
3. Deploy automatically on every push to main branch

### Environment Configuration

- Node.js version: 18.17.0 (specified in `.nvmrc`)
- Build command: `npm run build`
- Output directory: `.next`

## Project Structure

```
├── app/
│   ├── globals.css
│   ├── layout.tsx
│   ├── page.tsx
│   └── agents/
│       ├── clinical-coder-agent/
│       ├── clinical-trial-agent/
│       ├── patient-care-agent/
│       └── patient-discharge-agent/
├── components/
│   ├── ui/
│   └── theme-provider.tsx
├── lib/
├── public/
└── styles/
```

## Configuration Files

- `next.config.mjs`: Next.js configuration with security headers
- `vercel.json`: Vercel deployment configuration
- `tailwind.config.ts`: Tailwind CSS configuration
- `.nvmrc`: Node.js version specification

## Security Features

- Proper iframe sandbox permissions
- Microphone and camera access controls
- CORS and security headers configuration
- Frame embedding policies

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

This project is proprietary and confidential.

## Support

For support, please contact the development team.
