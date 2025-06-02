export default function Footer() {
    const currentYear = new Date().getFullYear()
  
    return (
      <footer className="py-8 border-t bg-muted/30 dark:bg-slate-900 dark:border-slate-800">
        <div className="container px-4 mx-auto">
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            <div className="text-center md:text-left">
              <p className="text-sm text-muted-foreground">© {currentYear} Samikshya. All rights reserved.</p>
            </div>
            <div className="text-center md:text-right">
              <p className="text-sm text-muted-foreground">Designed & Built with ❤️ using Next.js & Tailwind CSS</p>
            </div>
          </div>
        </div>
      </footer>
    )
  }
  
  