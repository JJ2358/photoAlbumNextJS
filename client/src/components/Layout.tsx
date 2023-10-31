import React from 'react';

/**
 * Props for the Layout component.
 * 
 * @interface
 * @property {React.ReactNode} children - The child components or elements to be rendered within the layout.
 */
interface LayoutProps {
  children: React.ReactNode;
}

/**
 * Represents the main layout of the application.
 * 
 * @component
 * @param {LayoutProps} props - The props for the component.
 * @returns {ReactElement} The rendered layout with header, main content area, and footer.
 */
const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="container mx-auto px-4">
      <header className="text-center py-5">
        <h1 className="text-4xl font-bold">Photo Album</h1>
      </header>
      <main>
        {children}
      </main>
      <footer className="text-center py-2 mt-5">
        <p>&copy; 2023 NSCC. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default Layout;
