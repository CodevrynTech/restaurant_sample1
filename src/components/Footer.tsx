import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-surface-container border-t border-outline-variant">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-gutter px-margin-desktop py-16 max-w-container-max mx-auto max-md:px-margin-mobile">
        <div className="md:col-span-1">
          <div className="text-headline-sm font-headline-sm tracking-widest uppercase text-on-surface mb-6">Lumira</div>
          <p className="text-on-surface-variant text-body-md mb-8">Mediterranean soul, modern spirit.</p>
          <div className="flex gap-4">
            <Link href="#" className="w-10 h-10 border border-outline-variant flex items-center justify-center hover:bg-primary hover:text-white transition-all">
              <span className="material-symbols-outlined text-lg">public</span>
            </Link>
            <Link href="#" className="w-10 h-10 border border-outline-variant flex items-center justify-center hover:bg-primary hover:text-white transition-all">
              <span className="material-symbols-outlined text-lg">camera_alt</span>
            </Link>
          </div>
        </div>
        <div className="md:col-span-1">
          <h4 className="text-label-caps text-on-surface mb-6">Explore</h4>
          <nav className="flex flex-col gap-3">
            <Link href="/menu" className="text-on-surface-variant hover:text-primary transition-colors text-sm">The Menu</Link>
            <Link href="/menu#wine-list" className="text-on-surface-variant hover:text-primary transition-colors text-sm">Wine List</Link>
            <Link href="/story" className="text-on-surface-variant hover:text-primary transition-colors text-sm">Our Chef</Link>
            <Link href="/reservations" className="text-on-surface-variant hover:text-primary transition-colors text-sm">Reservations</Link>
          </nav>
        </div>
        <div className="md:col-span-1">
          <h4 className="text-label-caps text-on-surface mb-6">Information</h4>
          <nav className="flex flex-col gap-3">
            <Link href="#" className="text-on-surface-variant hover:text-primary transition-colors text-sm">Privacy Policy</Link>
            <Link href="#" className="text-on-surface-variant hover:text-primary transition-colors text-sm">Terms of Service</Link>
            <Link href="#" className="text-on-surface-variant hover:text-primary transition-colors text-sm">Accessibility</Link>
            <Link href="/contact" className="text-on-surface-variant hover:text-primary transition-colors text-sm">Careers</Link>
          </nav>
        </div>
        <div className="md:col-span-1">
          <h4 className="text-label-caps text-on-surface mb-6">Newsletter</h4>
          <p className="text-xs text-on-surface-variant mb-4">Join our inner circle for exclusive event invitations.</p>
          <div className="flex border-b border-outline">
            <input 
              type="email" 
              className="bg-transparent border-none focus:ring-0 text-sm py-2 px-0 w-full placeholder:text-outline-variant outline-none" 
              placeholder="Email Address" 
            />
            <button className="material-symbols-outlined text-outline">arrow_forward</button>
          </div>
        </div>
      </div>
      <div className="px-margin-desktop py-8 border-t border-outline-variant max-w-container-max mx-auto flex flex-col md:flex-row justify-between items-center gap-4 max-md:px-margin-mobile">
        <p className="text-xs text-on-surface-variant">© {new Date().getFullYear()} Lumira. All rights reserved.</p>
        <p className="text-xs text-on-surface-variant uppercase tracking-widest">Quiet Luxury Hospitality</p>
      </div>
    </footer>
  );
}
