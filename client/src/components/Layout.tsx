import React from 'react';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="container mx-auto px-4">
      <header className="text-center py-5">
        <h1 className="text-4xl font-bold">Photo Album</h1>
      </header>
      <main className="mt-5">
        {children}
      </main>
      <footer className="text-center py-2 mt-5">
        <p>&copy; 2023 Your Name. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default Layout;
