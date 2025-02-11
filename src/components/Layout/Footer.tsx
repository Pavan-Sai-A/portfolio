const Footer = () => {
  return (
    <footer className=" text-black  dark:text-white py-8 px-6 md:px-12">
      <div className="max-w-5xl mx-auto text-center flex flex-col items-center space-y-4">
        <p className="text-sm md:text-base font-medium">
          © 2025 Pavan Sai. All rights reserved.
        </p>
        <nav className="flex flex-col md:flex-row md:space-x-6 space-y-2 md:space-y-0 text-sm">
          <p className="prose text-gray-700 dark:text-gray-200">
            About this website: Built with Next.js, TypeScript, Tailwind CSS,
            hosted on Vercel.
          </p>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
