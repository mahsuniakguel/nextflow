export default function Header() {
  return (
    <header className="container flex justify-between items-center">
      <h1>Nextflow</h1>
      <nav>
        <ul className="flex gap-4">
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </nav>
    </header>
  )
}