import { Sprout } from 'lucide-react';

const Header = () => {
  return (
    <header className="bg-forest text-white p-4 shadow-md">
      <div className="container mx-auto flex items-center gap-2">
        <Sprout className="h-6 w-6" />
        <h1 className="text-xl font-semibold">Farmer's Assistant</h1>
      </div>
    </header>
  );
};

export default Header;