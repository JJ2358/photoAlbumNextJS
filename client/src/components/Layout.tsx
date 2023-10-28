import React from 'react';
import Navigation from './Navigation';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="container mx-auto px-4">
      <header className="text-center py-5">
        <h1 className="text-4xl font-bold">Photo Album</h1>
      </header>
      <Navigation onNext={function (): void {
              throw new Error('Function not implemented.');
          } } onPrev={function (): void {
              throw new Error('Function not implemented.');
          } } currentPhotoIndex={0} totalPhotos={0} />
      <main className="mt-5">
        {children}
      </main>
      <footer className="text-center py-5 mt-10">
        <p>&copy; 2023 Your Name. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default Layout;
