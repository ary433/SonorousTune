# SonorousTune 🎵

> A decentralized music streaming platform powered by TON blockchain and Telegram

[![GitHub Pages](https://img.shields.io/badge/Demo-Live-success)](https://ary433.github.io/SonorousTune/)
[![TON](https://img.shields.io/badge/Blockchain-TON-blue)](https://ton.org/)
[![Telegram](https://img.shields.io/badge/Platform-Telegram-informational)](https://telegram.org/)

## 🌟 Overview

SonorousTune is a revolutionary decentralized music platform that bridges the gap between artists and listeners using blockchain technology. Built on the TON blockchain and integrated with Telegram, it offers a seamless experience for discovering, streaming, and collecting music NFTs.

## ✨ Features

### For Listeners
- 🎧 Stream music directly in the Telegram app
- 💎 Collect exclusive music NFTs
- 🏆 Participate in music battles and events
- 📊 Track your listening stats
- 🎮 Interactive music quests

### For Artists
- 🎼 Showcase your music portfolio
- 🏷️ Mint and sell music NFTs
- 🎫 Create exclusive events
- 📈 Track fan engagement
- 💫 Host music battles

## 🚀 Quick Start

### Using Telegram Bot
1. Open Telegram and search for SonorousTune Bot
2. Click the Menu button to launch the web app
3. Connect your TON wallet (TON Space, TonKeeper, or TonHub)
4. Start exploring music and collecting NFTs!

### Local Development
```bash
# Clone the repository
git clone https://github.com/ary433/SonorousTune.git

# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build
```

## 🛠️ Technology Stack

### Frontend
- ⚛️ React 18 with TypeScript
- 🎨 Tailwind CSS for styling
- 📱 TWA (Telegram Web App) SDK
- 🔄 Redux Toolkit for state management

### Blockchain
- ⛓️ TON Blockchain
- 📜 FunC for smart contracts
- 🔧 Blueprint for contract testing
- 🌐 TON Connect for wallet integration

### Development Tools
- 📦 Vite for blazing fast builds
- 🔍 ESLint + Prettier for code quality
- 🧪 Jest for testing
- 🚀 GitHub Actions for CI/CD

## 🔄 System Architecture

### System Overview
```mermaid
graph TB
    User[User/Artist] -->|Access via| TG[Telegram Bot]
    TG -->|Opens| TWA[Telegram Web App]
    TWA -->|Interacts with| FE[Frontend React App]
    FE -->|Connects to| Wallet[TON Wallet]
    FE -->|Reads from| BC[TON Blockchain]
    Wallet -->|Signs Transactions| BC
    
    subgraph Frontend Components
        FE --> Player[Audio Player]
        FE --> NFT[NFT Marketplace]
        FE --> Events[Events System]
        FE --> Battles[Music Battles]
    end
    
    subgraph Smart Contracts
        BC --> Collection[NFT Collection]
        BC --> Items[NFT Items]
        BC --> Royalties[Royalty System]
    end
    
    style User fill:#f9f,stroke:#333,stroke-width:2px
    style TG fill:#b9f,stroke:#333,stroke-width:2px
    style TWA fill:#9bf,stroke:#333,stroke-width:2px
    style BC fill:#ff9,stroke:#333,stroke-width:2px
```

### NFT Minting Flow
```mermaid
sequenceDiagram
    participant U as User
    participant F as Frontend
    participant W as Wallet
    participant C as Smart Contract
    
    U->>F: Click Mint NFT
    F->>W: Request Connection
    W->>F: Connect Wallet
    F->>C: Get NFT Price
    C->>F: Return Price
    F->>W: Request Transaction
    W->>U: Confirm Payment
    U->>W: Approve
    W->>C: Send Transaction
    C->>C: Mint NFT
    C->>F: Confirm Minting
    F->>U: Show Success
```

### Music Streaming Architecture
```mermaid
flowchart LR
    A[Artist] -->|Upload| M[Music Storage]
    M -->|Stream| P[Player Component]
    P -->|Play| U[User]
    
    subgraph Player Features
        P --> Controls[Playback Controls]
        P --> Queue[Queue Management]
        P --> Progress[Progress Bar]
    end
    
    subgraph Monetization
        U -->|Purchase| NFT[NFT]
        NFT -->|Royalties| A
    end
```



## 🔗 Important Links

- 🌐 [Live Demo](https://ary433.github.io/SonorousTune/)
- 📱 [Telegram Bot](https://t.me/SonoroustuneBot)
- 📖 [TON Documentation](https://ton.org/docs/)


## 🤝 Contributing

We welcome contributions! Please feel free to submit a Pull Request. For major changes, please open an issue first to discuss what you would like to change.

## ⚠️ Important Notice

This platform involves cryptocurrency transactions on the TON blockchain. Please note:
- NFT minting requires TON tokens for both the NFT price and transaction fees
- Always ensure you're connected to the correct network (testnet/mainnet)
- Double-check all transaction details before confirming
- Never share your wallet's private keys or seed phrases

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 📞 Support
k_sterio
Need help? Reach out to us:
- 💬 [Telegram Support](https://t.me/InvisibleInkhs)

---

<div align="center">
Made with ❤️ by the SonorousTune Team
</div>
