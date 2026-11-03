interface PageHeaderProps {
  title: string;
  description?: string;
}

export function PageHeader({ title, description }: PageHeaderProps) {
  return (
    <div className="mb-6 animate-fade-in">
      <h1 className="text-2xl font-bold tracking-tight underline 
      decoration-2 underline-offset-4 text-foreground decoration-primary">
        {title}
      </h1>

      {description && (
        <p className="mt-2 text-sm text-muted">
          {description}
        </p>
      )}
    </div>
  );
}