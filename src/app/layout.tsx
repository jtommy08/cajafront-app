import Link from 'next/link'
import { Button } from "@/components/ui/button"

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <div className="min-h-screen flex flex-col">
          <header className="bg-primary text-primary-foreground shadow-md">
            <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
              <Link href="/" className="text-2xl font-bold">CoworkSpace</Link>
              <div className="space-x-4">
                <Button variant="ghost" asChild>
                  <Link href="/users">Usuarios</Link>
                </Button>
                <Button variant="ghost" asChild>
                  <Link href="/reservations">Reservas</Link>
                </Button>
                <Button variant="ghost" asChild>
                  <Link href="/spaces">Espacios</Link>
                </Button>
                <Button variant="ghost" asChild>
                  <Link href="/notifications">Notificaciones</Link>
                </Button>
              </div>
            </nav>
          </header>
          <main className="flex-grow container mx-auto px-4 py-8">
            {children}
          </main>
          <footer className="bg-muted py-4">
            <div className="container mx-auto px-4 text-center">
              © 2023 CoworkSpace. Todos los derechos reservados.
            </div>
          </footer>
        </div>
      </body>
    </html>
  )
}