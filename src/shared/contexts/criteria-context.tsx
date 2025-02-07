import React, { createContext, useContext, useState } from 'react';

interface SavedCriteria {
  id: string;
  label: string;
  content: string;
  savedAt: Date;
}

interface CriteriaContextType {
  savedCriteria: SavedCriteria[];
  saveCriteria: (criteria: SavedCriteria) => void;
  removeCriteria: (id: string) => void;
  findCriteria: (searchTerm: string) => SavedCriteria[];
}

const CriteriaContext = createContext<CriteriaContextType | undefined>(
  undefined
);

export const CriteriaProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [savedCriteria, setSavedCriteria] = useState<SavedCriteria[]>([]);

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

  return (
    <CriteriaContext.Provider
      value={{ savedCriteria, saveCriteria, removeCriteria, findCriteria }}>
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
