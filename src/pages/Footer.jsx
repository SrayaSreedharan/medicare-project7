import { FaGithub, FaLinkedin } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="w-full bg-white text-gray-700 py-6 px-4 md:px-8 flex flex-col md:flex-row items-center justify-between border-t border-gray mt-12 shadow-sm">
      <p className="text-sm">
        © 2025 Medicare Project. Built by Sraya Sreedharan.{' '}
        <a href="https://github.com/SrayaSreedharan/medicare-project7" className="underline hover:text-black transition" target="_blank" rel="noopener noreferrer">
          View on GitHub
        </a>
      </p>

      <div className="flex gap-4 mt-4 md:mt-0">
        <a href="https://github.com/srayasreedharan" target="_blank" rel="noopener noreferrer"className="text-gray-600 hover:text-black transition">
          <FaGithub size={20} />
        </a>
        <a href="https://www.linkedin.com/in/sraya-sreedharan-0653a1259/" target="_blank"rel="noopener noreferrer" className="text-gray-600 hover:text-black transition">
          <FaLinkedin size={20} />
        </a>
      </div>
    </footer>
  );
}
