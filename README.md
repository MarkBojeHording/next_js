# Next.js Dashboard Application

A modern, full-stack dashboard application built with Next.js 15, featuring authentication, form validation, and a comprehensive invoice management system.

## 🚀 Features

### Authentication & Security
- **NextAuth.js Integration**: Secure authentication with credentials provider
- **Protected Routes**: Middleware-based route protection
- **Session Management**: Server-side session handling
- **Environment Variables**: Secure configuration management

### Dashboard & Analytics
- **Revenue Charts**: Interactive charts displaying financial data
- **Real-time Metrics**: Live dashboard with key performance indicators
- **Responsive Design**: Mobile-first approach with Tailwind CSS
- **Loading States**: Suspense boundaries with skeleton components

### Invoice Management
- **CRUD Operations**: Create, read, update, and delete invoices
- **Form Validation**: Client and server-side validation using Zod
- **Search & Pagination**: Advanced filtering and pagination
- **Status Tracking**: Pending and paid invoice status management
- **Customer Integration**: Link invoices to customer profiles

### User Experience
- **Modern UI**: Clean, professional interface with Tailwind CSS
- **Accessibility**: ARIA attributes and semantic HTML
- **Error Handling**: Comprehensive error boundaries and user feedback
- **SEO Optimization**: Metadata and Open Graph support

## 🛠️ Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Authentication**: NextAuth.js
- **Database**: PostgreSQL with Vercel Postgres
- **Validation**: Zod
- **Icons**: Heroicons
- **Fonts**: Lusitana (Google Fonts)
- **Package Manager**: pnpm

## 📋 Prerequisites

- Node.js 18+
- pnpm (recommended) or npm
- PostgreSQL database
- Vercel account (for deployment)

## 🚀 Getting Started

### 1. Clone the Repository
```bash
git clone https://github.com/MarkBojeHording/next_js.git
cd nextjs-dashboard
```

### 2. Install Dependencies
```bash
pnpm install
```

### 3. Environment Setup
Create a `.env.local` file in the root directory:

```env
# Database
POSTGRES_URL="your-postgres-connection-string"

# Authentication
AUTH_SECRET="your-auth-secret-key"
AUTH_URL="http://localhost:3000"

# Vercel (for production)
POSTGRES_URL_NON_POOLING="your-postgres-connection-string"
```

### 4. Database Setup
The application uses Vercel Postgres. Set up your database and run the provided schema:

```sql
-- Create invoices table
CREATE TABLE invoices (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  customer_id UUID NOT NULL,
  amount INTEGER NOT NULL,
  status VARCHAR(255) NOT NULL,
  date DATE NOT NULL
);

-- Create customers table
CREATE TABLE customers (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL,
  image_url VARCHAR(255)
);
```

### 5. Seed the Database
```bash
pnpm run seed
```

### 6. Run the Development Server
```bash
pnpm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## 🔐 Authentication

### Default Credentials
- **Email**: `user@nextmail.com`
- **Password**: `123456`

### Login Flow
1. Navigate to `/login`
2. Enter credentials
3. Redirected to dashboard upon successful authentication
4. Protected routes automatically redirect to login

## 📁 Project Structure

```
nextjs-dashboard/
├── app/                          # App Router directory
│   ├── dashboard/               # Dashboard pages
│   │   ├── customers/          # Customer management
│   │   ├── invoices/           # Invoice management
│   │   └── page.tsx           # Main dashboard
│   ├── login/                  # Authentication page
│   ├── lib/                    # Utility functions
│   │   ├── actions.ts         # Server actions
│   │   ├── data.ts            # Database queries
│   │   └── utils.ts           # Helper functions
│   └── ui/                     # Reusable components
│       ├── dashboard/          # Dashboard components
│       ├── invoices/           # Invoice components
│       └── customers/          # Customer components
├── auth.config.ts              # NextAuth configuration
├── auth.ts                     # Authentication setup
├── middleware.ts               # Route protection
└── public/                     # Static assets
```

## 🎯 Key Features Explained

### Form Validation
The application uses Zod for schema validation with `useActionState` for real-time form feedback:

```typescript
const FormSchema = z.object({
  customerId: z.string(),
  amount: z.coerce.number().gt(0),
  status: z.enum(['pending', 'paid'])
});
```

### Server Actions
Database operations are handled through server actions with proper error handling:

```typescript
export async function createInvoice(prevState: State, formData: FormData) {
  const validatedFields = CreateInvoice.safeParse({
    customerId: formData.get('customerId'),
    amount: formData.get('amount'),
    status: formData.get('status'),
  });
  // ... implementation
}
```

### Responsive Design
Built with Tailwind CSS for mobile-first responsive design:

```typescript
<div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
  <Suspense fallback={<CardsSkeleton />}>
    <CardWrapper />
  </Suspense>
</div>
```

## 🚀 Deployment

### Vercel Deployment
1. Connect your GitHub repository to Vercel
2. Configure environment variables in Vercel dashboard
3. Deploy automatically on push to main branch

### Environment Variables for Production
- `POSTGRES_URL`: Production database connection
- `AUTH_SECRET`: Secure authentication secret
- `AUTH_URL`: Production domain

## 🔧 Development

### Available Scripts
- `pnpm run dev`: Start development server
- `pnpm run build`: Build for production
- `pnpm run start`: Start production server
- `pnpm run lint`: Run ESLint
- `pnpm run seed`: Seed database with sample data

### Code Quality
- TypeScript for type safety
- ESLint for code linting
- Prettier for code formatting
- Husky for pre-commit hooks

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## 📝 License

This project is licensed under the MIT License.

## 🙏 Acknowledgments

- Built with [Next.js](https://nextjs.org/)
- Styled with [Tailwind CSS](https://tailwindcss.com/)
- Icons from [Heroicons](https://heroicons.com/)
- Authentication with [NextAuth.js](https://next-auth.js.org/)

## 📞 Support

For support or questions, please open an issue in the GitHub repository.
