import Link from 'next/link';
import { ArrowLeft, FileQuestion } from 'lucide-react';
import Footer from '@/components/Footer';

export default function BlogPostNotFound() {
  return (
    <>
      <main className="pb-24">
        <div className="container-custom pt-8">
          <div className="max-w-2xl mx-auto text-center py-16">
            <FileQuestion className="w-24 h-24 text-[var(--color-muted)] mx-auto mb-8" />
            
            <h1 className="text-3xl sm:text-4xl font-bold text-[var(--color-ink)] mb-4">
              Artikel niet gevonden
            </h1>
            
            <p className="text-[var(--color-muted)] text-lg mb-8">
              Het artikel dat je zoekt bestaat niet (meer). 
              Misschien is het verplaatst of verwijderd.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link 
                href="/blog"
                className="btn-primary inline-flex items-center"
              >
                <ArrowLeft className="w-4 h-4 mr-2" />
                Terug naar blog
              </Link>
              
              <Link 
                href="/contact"
                className="btn-secondary inline-flex"
              >
                Contact opnemen
              </Link>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
