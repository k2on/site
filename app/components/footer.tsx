export default function Footer() {
  return (
    <footer className="mb-16">
      <p className="mt-8 text-neutral-600 dark:text-neutral-300">© {romanize(new Date().getFullYear())} Max Koon</p>
    </footer>
  );
}
