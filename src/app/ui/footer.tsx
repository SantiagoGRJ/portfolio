type Props = {};

function Footer({}: Props) {
  return (
    <footer className="flex flex-col items-center justify-center p-6 bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 text-gray-300">
      <p className="text-sm">
        &copy; {new Date().getFullYear()} Santiago. Todos los derechos reservados.
      </p>
      <div className="flex space-x-4 mt-4">
        <a
          href="https://linkedin.com/in/santiagogrj"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 hover:text-blue-600"
        >
          LinkedIn
        </a>
        <a
          href="https://github.com/SantiagoGRJ"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-400 hover:text-gray-500"
        >
          GitHub
        </a>
        <a
          href="https://twitter.com/SantiagoGRJ1"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-400 hover:text-blue-500"
        >
          Twitter
        </a>
      </div>
    </footer>
  );
}

export default Footer;