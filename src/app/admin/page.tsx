import { Metadata } from "next";
import Link from "next/link";
import { LayoutDashboard, Folder, Settings, LogOut } from "lucide-react";

export const metadata: Metadata = {
  title: "Admin Dashboard | TechSolutionsUtrecht",
  robots: "noindex, nofollow",
};

const stats = [
  { label: "Totaal Projecten", value: "12", change: "+2 deze maand" },
  { label: "Contact Aanvragen", value: "24", change: "+5 deze week" },
  { label: "Page Views", value: "1.2K", change: "+18%" },
  { label: "Gem. Laadtijd", value: "0.8s", change: "-12%" },
];

const recentProjects = [
  { id: 1, title: "The Gentleman's Cut", status: "Live", date: "2025-02-26" },
  { id: 2, title: "La Bella Italia", status: "In Ontwikkeling", date: "2025-02-20" },
  { id: 3, title: "Fashion Forward", status: "Live", date: "2025-01-15" },
  { id: 4, title: "Kliniek Dashboard", status: "Review", date: "2025-02-10" },
];

export default function AdminDashboard() {
  return (
    <div className="min-h-screen bg-[var(--bg-primary)]">
      {/* Sidebar */}
      <aside className="fixed left-0 top-0 h-full w-64 bg-[var(--bg-card)] border-r border-[var(--border)]">
        <div className="p-6 border-b border-[var(--border)]">
          <Link href="/" className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
              <span className="text-white font-bold">T</span>
            </div>
            <span className="font-bold text-[var(--text-primary)]">Admin</span>
          </Link>
        </div>

        <nav className="p-4">
          <Link 
            href="/admin"
            className="flex items-center gap-3 px-4 py-3 bg-primary/10 text-primary rounded-xl mb-2"
          >
            <LayoutDashboard className="w-5 h-5" />
            Dashboard
          </Link>
          
          <Link 
            href="/admin/projects"
            className="flex items-center gap-3 px-4 py-3 text-[var(--text-secondary)] hover:bg-[var(--bg-tertiary)] rounded-xl mb-2 transition-colors"
          >
            <Folder className="w-5 h-5" />
            Projecten
          </Link>
          
          <Link 
            href="/admin/settings"
            className="flex items-center gap-3 px-4 py-3 text-[var(--text-secondary)] hover:bg-[var(--bg-tertiary)] rounded-xl mb-2 transition-colors"
          >
            <Settings className="w-5 h-5" />
            Instellingen
          </Link>
          
          <hr className="my-4 border-[var(--border)]" />
          
          <Link 
            href="/"
            className="flex items-center gap-3 px-4 py-3 text-[var(--text-secondary)] hover:bg-[var(--bg-tertiary)] rounded-xl transition-colors"
          >
            <LogOut className="w-5 h-5" />
            Uitloggen
          </Link>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="ml-64 p-8">
        <header className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold text-[var(--text-primary)]">Dashboard</h1>
            <p className="text-[var(--text-secondary)]">Welkom terug, Admin</p>
          </div>
          
          <div className="flex items-center gap-4">
            <span className="text-[var(--text-muted)]">{new Date().toLocaleDateString('nl-NL')}</span>
          </div>
        </header>

        {/* Stats */}
        <div className="grid md:grid-cols-4 gap-6 mb-8">
          {stats.map((stat) => (
            <div key={stat.label} className="bg-[var(--bg-card)] border border-[var(--border)] rounded-xl p-6">
              <p className="text-[var(--text-muted)] text-sm mb-1">{stat.label}</p>
              <p className="text-3xl font-bold text-[var(--text-primary)]">{stat.value}</p>
              <p className="text-green-400 text-sm mt-2">{stat.change}</p>
            </div>
          ))}
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Recent Projects */}
          <div className="bg-[var(--bg-card)] border border-[var(--border)] rounded-xl p-6">
            <h2 className="text-xl font-bold text-[var(--text-primary)] mb-6">Recente Projecten</h2>
            
            <div className="space-y-4">
              {recentProjects.map((project) => (
                <div 
                  key={project.id}
                  className="flex items-center justify-between p-4 bg-[var(--bg-tertiary)] rounded-lg"
                >
                  <div>
                    <p className="font-medium text-[var(--text-primary)]">{project.title}</p>
                    <p className="text-sm text-[var(--text-muted)]">{project.date}</p>
                  </div>
                  
                  <span className={`px-3 py-1 rounded-full text-sm ${
                    project.status === "Live" 
                      ? "bg-green-500/20 text-green-400"
                      : project.status === "Review"
                      ? "bg-yellow-500/20 text-yellow-400"
                      : "bg-blue-500/20 text-blue-400"
                  }`}>
                    {project.status}
                  </span>
                </div>
              ))}
            </div>
            
            <Link 
              href="/admin/projects"
              className="block text-center mt-6 text-primary hover:underline"
            >
              Alle projecten bekijken →
            </Link>
          </div>

          {/* Quick Actions */}
          <div className="bg-[var(--bg-card)] border border-[var(--border)] rounded-xl p-6">
            <h2 className="text-xl font-bold text-[var(--text-primary)] mb-6">Snelle Acties</h2>
            
            <div className="space-y-4">
              <Link 
                href="/admin/projects/new"
                className="block w-full p-4 bg-primary/10 border border-primary/30 rounded-lg text-primary hover:bg-primary/20 transition-colors"
              >
                + Nieuw Project Toevoegen
              </Link>
              
              <Link 
                href="/"
                target="_blank"
                className="block w-full p-4 bg-[var(--bg-tertiary)] rounded-lg text-[var(--text-secondary)] hover:bg-[var(--bg-secondary)] transition-colors"
              >
                🌐 Website Bekijken
              </Link>
              
              <Link 
                href="/admin/settings"
                className="block w-full p-4 bg-[var(--bg-tertiary)] rounded-lg text-[var(--text-secondary)] hover:bg-[var(--bg-secondary)] transition-colors"
              >
                ⚙️ Instellingen
              </Link>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
