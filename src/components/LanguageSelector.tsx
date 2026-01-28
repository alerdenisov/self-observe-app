import { motion } from 'motion/react';
import { useLanguage } from '@/lib/i18n/LanguageContext';
import { type Language } from '@/lib/i18n/translations';

const languages: { code: Language; label: string; flag: string }[] = [
  { code: 'en', label: 'English', flag: '🇬🇧' },
  { code: 'fr', label: 'Français', flag: '🇫🇷' },
  { code: 'it', label: 'Italiano', flag: '🇮🇹' },
  { code: 'es', label: 'Español', flag: '🇪🇸' },
  { code: 'ru', label: 'Русский', flag: '🇷🇺' },
];

export function LanguageSelector() {
  const { language, setLanguage } = useLanguage();

  return (
    <div className="flex items-center gap-2">
      {languages.map((lang) => (
        <motion.button
          key={lang.code}
          onClick={() => setLanguage(lang.code)}
          className={`
            px-3 py-1.5 rounded-lg text-xs font-medium transition-all
            ${language === lang.code 
              ? 'bg-gray-900 text-white shadow-md' 
              : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
            }
          `}
          whileTap={{ scale: 0.95 }}
          whileHover={{ scale: 1.05 }}
          title={lang.label}
        >
          {lang.flag}
        </motion.button>
      ))}
    </div>
  );
}
