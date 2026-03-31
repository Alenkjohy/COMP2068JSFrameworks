import Link from 'next/link';

export default function Navbar() {
  return (
    <nav style={{ backgroundColor: '#2c3e50', padding: '1rem', color: 'white' }}>
      <Link href="/" style={{ margin: '0 1rem', color: 'white' }}>Home</Link>
      <Link href="/recipes" style={{ margin: '0 1rem', color: 'white' }}>Recipes</Link>
      <Link href="/recipes/new" style={{ margin: '0 1rem', color: 'white' }}>Add Recipe</Link>
    </nav>
  );
}