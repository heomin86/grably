import React from 'react';
import { useTranslation } from 'react-i18next';

const LandingPage: React.FC = () => {
  const { t } = useTranslation();
  return (
    <div className="min-h-screen bg-white" style={{fontFamily: 'Space Mono, monospace'}}>
      {/* Header */}
      <div className="fixed top-0 left-0 right-0 z-50 flex justify-between items-center p-6">
        {/* Logo */}
        <div className="flex items-center">
          <img
            src="/icon.png"
            alt="Grably"
            className="w-8 h-8 mr-2"
          />
          <span style={{fontFamily: 'Space Mono, monospace', fontWeight: 700}}>Grably</span>
        </div>

        {/* GitHub Link */}
        <a
          href="https://github.com/ceorkm/grably"
          className="flex items-center space-x-2 text-gray-600 hover:text-gray-900 transition-colors"
        >
          <span>★ 5</span>
        </a>
      </div>

      {/* Main Content Area */}
      <div className="pt-20">
        {/* Content will go here */}
      </div>

      {/* Footer */}
      <footer className="text-center py-8">
        <p className="text-gray-500 text-sm">
          grably.space • <a href="/terms" className="hover:text-gray-900 transition-colors">{t('landing.termsAndConditions')}</a>
        </p>
      </footer>
    </div>
  );
};

export default LandingPage;