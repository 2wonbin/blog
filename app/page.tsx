import Link from "next/link";


export default function Home() {
    return (
        <div className="h-screen flex flex-col">
            <Header />
            <main className="flex flex-col">
                <h2>Recent Posts</h2>
                <ul>
                    <li>
                        <Link href="/blog/first-post">
                            first-post
                        </Link>
                    </li>
                    <li>
                        <Link href="/blog/second-post">
                            second-post
                        </Link>
                    </li>
                </ul>
            </main>
            <Footer />

        </div>
    );
}


function Header() {
    return (
        <header>
            <nav>
                <ul className="list-none flex items-center justify-between p-4">
                    <li>
                        <Link href="/">
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link href="/about">
                            About
                        </Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
}

function Footer() {
    return (
        <footer>
            <div className="p-4 flex justify-center items-center">
                <p>© 2025 2wonbin</p>
            </div>
        </footer>
    );
}