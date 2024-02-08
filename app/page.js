// app/page.js
export default function Page({ children }) {
  return (
    <div>
      <header>
        <h1>Feed Viewer</h1>
      </header>
      
      <main>
        {children}
      </main>
      
      <footer>
        <p>© 2024 Feed Viewer</p>
      </footer>
    </div>
  );
}
