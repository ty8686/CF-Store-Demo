# EdgeStore: Cloudflare Solutions Marketplace

EdgeStore is a visually stunning, modern e-commerce platform concept designed to showcase Cloudflare's suite of IT and security solutions. It reimagines these services as tangible products in a familiar online shopping experience. Each product is detailed with a description, a cost rating represented by dollar signs (1-5), and an intuitive implementation difficulty scale. The platform is organized into key solution areas and features a fully functional product catalog and shopping cart. Instead of a payment gateway, the cart page directs customers to contact their Cloudflare Account Team via a pre-filled email link, effectively turning the platform into an interactive, high-intent lead generation tool.

[![Deploy to Cloudflare](https://deploy.workers.cloudflare.com/button)](https://deploy.workers.cloudflare.com/?url=https://github.com/ty8686/CF-Store-Demo)

## ✨ Key Features

- **Modern E-commerce UI**: A beautiful and intuitive interface for browsing Cloudflare solutions.
- **Interactive Product Cards**: Each solution is presented with details on cost and implementation difficulty.
- **Advanced Filtering**: Easily filter products by category, cost, and implementation difficulty.
- **Client-Side State Management**: A snappy user experience powered by Zustand for cart and filter management.
- **Responsive Design**: Flawless experience across all devices, from mobile to desktop.
- **Lead Generation Checkout**: A streamlined "Contact Sales" flow instead of a traditional payment gateway.
- **Built on Cloudflare**: Leverages the power of Cloudflare Workers for the backend API.

## 🚀 Technology Stack

- **Frontend**:
    - [React](https://react.dev/)
    - [Vite](https://vitejs.dev/)
    - [React Router](https://reactrouter.com/)
    - [Tailwind CSS](https://tailwindcss.com/)
    - [shadcn/ui](https://ui.shadcn.com/)
    - [Zustand](https://zustand-demo.pmnd.rs/) for state management
    - [Framer Motion](https://www.framer.com/motion/) for animations
    - [Lucide React](https://lucide.dev/) for icons
- **Backend**:
    - [Hono](https://hono.dev/) on [Cloudflare Workers](https://workers.cloudflare.com/)
- **Language**:
    - [TypeScript](https://www.typescriptlang.org/)

## 🏁 Getting Started

Follow these instructions to get the project up and running on your local machine for development and testing purposes.

### Prerequisites

- [Node.js](https://nodejs.org/) (v18 or later recommended)
- [Bun](https://bun.sh/) package manager

### Installation

1.  **Clone the repository:**
    ```bash
    git clone <repository-url>
    cd edgestore_cloudflare_marketplace
    ```

2.  **Install dependencies:**
    ```bash
    bun install
    ```

### Running the Development Server

To start the local development server, which includes both the Vite frontend and a local instance of the Cloudflare Worker, run:

```bash
bun run dev
```

The application will be available at `http://localhost:3000`.

## 🏗️ Project Structure

The project is organized into three main directories:

-   `src/`: Contains the entire React frontend application, including pages, components, hooks, and state management logic.
-   `worker/`: Contains the Hono backend API that runs on Cloudflare Workers.
-   `shared/`: Contains TypeScript types and mock data that are shared between the frontend and the worker to ensure type safety.

## 🔧 Development

-   **Frontend**: All frontend code is located in the `src` directory. Pages are in `src/pages`, and reusable components are in `src/components`.
-   **Backend**: API endpoints are defined in `worker/user-routes.ts`. You can add or modify routes here. The backend logic is built with Hono.
-   **State Management**: The shopping cart state is managed globally using Zustand in `src/lib/cart-store.ts`.
-   **Styling**: The project uses Tailwind CSS with shadcn/ui components. Customize styles in `src/index.css` and `tailwind.config.js`.

## 🚀 Deployment

This project is configured for seamless deployment to Cloudflare Pages.

1.  **Build the project:**
    The deployment script will automatically build the Vite application and prepare the worker.

2.  **Deploy to Cloudflare:**
    Run the following command to deploy your application:
    ```bash
    bun run deploy
    ```
    Wrangler will guide you through the authentication and deployment process. Once complete, your application will be live on a `.pages.dev` subdomain.

[![Deploy to Cloudflare](https://deploy.workers.cloudflare.com/button)](https://deploy.workers.cloudflare.com/?url=https://github.com/ty8686/CF-Store-Demo)