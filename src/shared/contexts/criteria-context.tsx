import { ContentTab } from 'components/content-display/markdown-content/markdown-content.types';
import React, { createContext, useContext, useEffect, useState } from 'react';

interface SavedCriteria extends ContentTab {
  id: string;
  savedAt: Date;
}

interface CriteriaContextType {
  savedCriteria: SavedCriteria[];
  saveCriteria: (criteria: SavedCriteria) => void;
  removeCriteria: (id: string) => void;
  findCriteria: (searchTerm: string) => SavedCriteria[];
  clearCriteria: () => void;
}

const CriteriaContext = createContext<CriteriaContextType | undefined>(
  undefined
);

export const CriteriaProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [savedCriteria, setSavedCriteria] = useState<SavedCriteria[]>(() => {
    const storedCriteria = localStorage.getItem('savedCriteria');
    return storedCriteria ? JSON.parse(storedCriteria) : [];
  });

  useEffect(() => {
    localStorage.setItem('savedCriteria', JSON.stringify(savedCriteria));
  }, [savedCriteria]);

  const saveCriteria = (criteria: SavedCriteria) => {
    setSavedCriteria((prev) => {
      const alreadyExists = prev.some(
        (item) =>
          item.label === criteria.label && item.content === criteria.content
      );

      if (!alreadyExists) {
        const updatedCriteria = [...prev, criteria];
        return updatedCriteria;
      }

      return prev;
    });
  };

  const removeCriteria = (id: string) => {
    setSavedCriteria((prev) => prev.filter((item) => item.id !== id));
  };

  const findCriteria = (searchTerm: string): SavedCriteria[] => {
    return savedCriteria.filter((item) =>
      item.label.toLowerCase().includes(searchTerm.toLowerCase())
    );
  };

  const clearCriteria = () => {
    setSavedCriteria([]);
    localStorage.removeItem('savedCriteria'); // Clears local storage
  };

  return (
    <CriteriaContext.Provider
      value={{
        savedCriteria,
        saveCriteria,
        removeCriteria,
        findCriteria,
        clearCriteria,
      }}>
      {children}
    </CriteriaContext.Provider>
  );
};

export const useCriteria = () => {
  const context = useContext(CriteriaContext);
  if (!context) {
    throw new Error('useCriteria must be used within a CriteriaProvider');
  }
  return context;
};
