export function SiteFooter() {
  return (
    <footer className="border-t py-8 text-sm text-center text-muted-foreground">
      <div className="container mx-auto px-4">
        © {new Date().getFullYear()} Plunder Academy. All rights reserved.
      </div>
    </footer>
  );
}


