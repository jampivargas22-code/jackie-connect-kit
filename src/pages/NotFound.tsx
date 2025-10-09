import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { useTranslation } from 'react-i18next';
import { Button } from "@/components/ui/button";
import { LanguageSwitcher } from "@/components/LanguageSwitcher";

const NotFound = () => {
  const location = useLocation();
  const { t } = useTranslation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100">
      <div className="absolute top-4 right-4">
        <LanguageSwitcher />
      </div>
      <div className="text-center">
        <h1 className="mb-4 text-4xl font-bold">{t('notFound.title')}</h1>
        <p className="mb-4 text-xl text-gray-600">{t('notFound.subtitle')}</p>
        <p className="mb-6 text-gray-500">{t('notFound.description')}</p>
        <Button asChild>
          <a href="/">{t('notFound.returnHome')}</a>
        </Button>
      </div>
    </div>
  );
};

export default NotFound;
